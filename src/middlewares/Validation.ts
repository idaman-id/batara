
import { validationResult, ValidationError } from 'express-validator';
import { merge as _merge } from 'lodash';

import { 
  Request as IRequest, 
  Response as IResponse, 
  NextFunction as INextFunction 
} from '../contracts/interface/Http';
import HashMap from '../contracts/interface/Hash';
import IResponseError from '../contracts/interface/ResponseError';

import VError from '../errors/ValidationError';

import Middleware from "./Middleware";
import { ResponseMessage } from '../contracts/constant/Communication';

export default class Validation extends Middleware
{

  handle(req: IRequest, res: IResponse, next: INextFunction)
  {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const translatedErrors = Validation.translate(req, errors.array());
      const formatedErrors = Validation.formatErrors(translatedErrors);
      next(new VError(ResponseMessage.INVALID_DATA, formatedErrors)); 
    }
    next();  
    
  }

  private static formatErrors(errors: Array<ValidationError>): Array<IResponseError>
  {
    return errors.map(error => {
      return {
        message: error.msg,
        field: error.param
      }
    });
  }

  private static translate(req: IRequest, errors: Array<ValidationError>): Array<ValidationError>
  {
    errors.forEach(error => {
      const maps = error.msg.split(":");
      /** 
       * If error message contain 
       * value to be replaced (marked with `:`)
       */
      if (maps.length > 0) {
        const key = maps[0];
        const values = maps.length > 1 ? maps[1].split(",") : [];

        /** 
         * If there is translation for this particular `key`
         */

        const customMessages = _merge(
          req._language.setting_messages, 
          req._language.messages
        ) as HashMap;
        req._language.polyglot.extend(req._language.messages);

        if (req._language && req._language.polyglot && 
          customMessages.hasOwnProperty(key)) {

          const customAttributes = _merge(
            req._language.setting_attributes, 
            req._language.attributes
          ) as HashMap;

          error.msg = Validation.replaceAttribute(
            req,
            error.param, 
            req._language.polyglot.t(key), 
            customAttributes, 
            values
          );

        }

      }    
    });
    return errors;
  }

  private static replaceAttribute(
    req: IRequest, 
    field: string, message: string, 
    map: HashMap, values: Array<string>
  )
  {
    /** 
    * If `:field` is array with pattern fields[0][0] etc..
    * Replace with `.*.`
    */
    const isArray = field.match(/\[\d+\]\./) != null;
    if (isArray) field = field.replace(/\[\d+\]\./g, '.*.');

    /** 
     * If there is key: `field` in translation file
     * Replace with its translation value
     * 
     * And if there is no translation, 
     * Replace with its generic translation
     */
    if (map.hasOwnProperty(field)) {
      message = message.replace(
        ":attribute", 
        map[field]
      );
    }
    else {
      message = message.replace(
        ":attribute", 
        req._language.original_attributes[req._language.locale]["attribute"]
      );
    }

    /** 
     * Foreach value written in validation rule, 
     *  e.g.: `between:1,0` => [1, 0]
     * Replace each value one by one from the first founded word
     */
    for (let index = 0; index < values.length; index++) {
      message = message.replace(
        ":value", 
        values[index]
      );
    }

    /** 
     * If there is :value left (translation not available)
     * Replace with its generic translation
     */
    message = message.replace(
      ":value", 
      req._language.original_attributes[req._language.locale]["value"]
    );

    return message;
  }

}