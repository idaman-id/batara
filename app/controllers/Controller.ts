
import { 
  Request as IRequest, 
  Response as IResponse, 
  NextFunction as INextFunction 
} from 'express';

import { ValidationChain } from "express-validator";
import CodeLanguage from "../contracts/interface/CodeLanguage";
import IController from '../contracts/interface/Controller';

import LanguageCode from '../factories/LanguageCode';

import Language from '../middlewares/Language';
import Validation from "../middlewares/Validation";

export default abstract class Controller implements IController
{

  abstract handle(req: IRequest, res: IResponse, next: INextFunction): void;

  authorize(req: IRequest, res: IResponse, next: INextFunction): void
  {
    next();
  }

  rules(): Array<ValidationChain>
  {
    return [];
  }

  attributes(): CodeLanguage
  {
    return {
      id: {},
      en: {}
    };
  }

  messages(): CodeLanguage
  {
    return {
      id: {},
      en: {}
    };
  }

  run(): Array<any>
  {
    return [
      new Language().handle,
      (req: IRequest, res: IResponse, next: INextFunction) => {
        const locale = new LanguageCode().make(req.locale.language);
        req._language.attributes = this.attributes()[locale];
        req._language.messages = this.messages()[locale];
        next();
      },
      this.authorize,
      this.rules(),
      new Validation().handle,
      this.handle
    ];
  }

}
