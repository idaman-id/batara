
import { 
  Request as IRequest, 
  Response as IResponse, 
  NextFunction as INextFunction,
  ValidationChain 
} from '../interface/http.interface';

import IController from '../interface/controller.interface';
import IMap from "../interface/map.interface";

import Language from '../middleware/language.middleware';
import Validation from "../middleware/validation.middleware";

export default abstract class Controller implements IController
{

  abstract handle(req: IRequest, res: IResponse, next: INextFunction): any;
  abstract authorizeHandler(err: any, req: IRequest, res: IResponse, next: INextFunction): any;
  abstract validationHandler(err: any, req: IRequest, res: IResponse, next: INextFunction): any;

  authorize(req: IRequest, res: IResponse, next: INextFunction): any
  {
    return next();
  }
  
  rules(): Array<ValidationChain>
  {
    return [];
  }

  attributes(): IMap
  {
    return {};
  }

  messages(): IMap
  {
    return {};
  }

  run(): Array<any>
  {
    return [
      new Language().handle,
      (req: IRequest, res: IResponse, next: INextFunction) => {
        const locale = req.locale.language;
        /**
         * CHOOSE TRANSLATION START WITH LOCALE
         * E.G: 
         * "id.custom_field": "Bidang isian kustom"
         * "en.custom_field": "Custom field"
         * 
         * When locale is "id" we choose "id.custom_field", etc
         * When there is no translation then we set to empty object
         */

        let attributes = this.attributes();
        for (let attributeKey in attributes) { 
          if (!attributeKey.startsWith(locale)) {
            delete attributes[attributeKey];
          }
        }

        let messages = this.messages();
        for (let attributeKey in messages) { 
          if (!attributeKey.startsWith(locale)) {
            delete messages[attributeKey];
          }
        }

        req._language.attributes = attributes;
        req._language.messages = messages;
        next();
      },
      this.authorize,
      this.authorizeHandler,
      this.rules(),
      new Validation().handle,
      this.validationHandler,
      this.handle
    ];
  }

}
