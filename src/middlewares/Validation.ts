
import { validationResult } from 'express-validator';
import { merge as _merge } from 'lodash';

import { 
  Request as IRequest, 
  Response as IResponse, 
  NextFunction as INextFunction,
  ValidationError as IValidationError 
} from '../contracts/interface/Http';
import IMap from '../contracts/interface/Map';
import IResponseError from '../contracts/interface/ResponseError';
import { ResponseMessage } from '../contracts/constant/Communication';

import ValidationError from '../errors/ValidationError';

import Middleware from "./Middleware";

/**
 * @description 
 * Built in Validation middleware so every validation rules 
 * specified in Controllers are validated 
 * If there is error then this middleware will injection Error object
 */
export default class Validation extends Middleware
{

  handle(req: IRequest, res: IResponse, next: INextFunction)
  {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const translatedErrors = Validation.translateErrors(req, errors.array());
      const formatedErrors = Validation.formatErrors(translatedErrors);
      return next(new ValidationError(ResponseMessage.INVALID_DATA, formatedErrors)); 
    }
    return next();
  }

  private static formatErrors(errors: Array<IValidationError>): Array<IResponseError>
  {
    return errors.map(error => {
      return {
        message: error.msg,
        field: error.param
      }
    });
  }

  private static translateErrors(req: IRequest, errors: Array<IValidationError>): Array<IValidationError>
  {
    errors.forEach(error => {
      /** 
       * If error message contain value to be replaced marked with `:`, e.g: 
       * - `min:1`
       * - `between:1980,2021`
       * - `invalid_value`
       * - etc
       * 
       * The first splited message will be the `key`, 
       * and the later will be the supplied `values`, e.g: 
       * - key: `min`, `between`, `invalid_value`
       * - values: `1`, `1990-2021`, ``
       */
      const maps = error.msg.split(":");
      const locale = req._language.locale;
      const key = maps[0];//this is guaranteed since `"".split(":")`; is returning `[""]`
      const values = maps.length > 1 ? maps[1].split(",") : [];

      /**
       * Merge `setting_messages` from default translation and `messages` if specified
       * Extend current polyglot translation to the merged one
       * 
       * P.S: 
       * Every request may have different `messages` 
       * because it's specified from Controllers if specified
       */
      const customMessages = _merge(
        req._language.setting_messages, 
        req._language.messages
      );
      req._language.polyglot.extend(customMessages);

      /** 
       * If there is translation for this particular `locale.key`
       * e.g:
       * - `id.min`
       * - `id.invalid_value`
       */
      if (customMessages.hasOwnProperty(`${locale}.${key}`)) {
        /**
         * Merge `setting_attributes` from default translation and `attributes` if specified
         * Translate `key` message according to the specified language `locale`
         * Replace `error.msg` with it's custom translation and modifier
         */
        const customAttributes = _merge(
          req._language.setting_attributes, 
          req._language.attributes
        );
        const translatedMessage = req._language.polyglot.t(`${locale}.${key}`);

        error.msg = Validation.modifyMessage(
          req, error.param, translatedMessage, 
          customAttributes, values
        );
      }

    });
    return errors;
  }

  private static modifyMessage(
    req: IRequest, field: string, message: string, 
    customAttributes: IMap, messageValues: Array<string>
  )
  {
    /** 
    * If current `field` is an array with pattern, e.g:
    * - attachments[m]file_id => attachments.*.file_id
    * - users[m]attachments[n]file_id => users.*.attachments.*.file_id
    * - etc
    * Replace with `.*.`
    */
    const isArray = field.match(/\[\d+\]\./) != null;
    if (isArray) field = field.replace(/\[\d+\]\./g, '.*.');

    /** 
     * If there is key `locale.field` in translation file
     *  Replace with its translation value
     * Else
     *  Replace with its generic translation
     */
    const locale = req._language.locale;
    let messageReplacer = req._language.original_attributes[`${locale}.attribute`];
    if (customAttributes.hasOwnProperty(`${locale}.${field}`)) {
      messageReplacer = customAttributes[`${locale}.${field}`];
    }
    message = message.replace(
      ":attribute", 
      messageReplacer
    );

    /** 
     * Foreach value written in `messages` validation rule, e.g: 
     * - `between:1,0` => [1, 0]
     * - `min:1` => [1]
     * Replace each value one by one from the first founded word
     */
    for (let index = 0; index < messageValues.length; index++) {
      message = message.replace(
        ":value", 
        messageValues[index]
      );
    }

    /** 
     * If there is :value left, e.g:
     * - translation not available
     * - values are not specified = between:1 (not specifying two parameter)
     * Replace with its generic translation
     */
    message = message.replace(
      ":value", 
      req._language.original_attributes[`${locale}.value`]
    );

    return message;
  }

}