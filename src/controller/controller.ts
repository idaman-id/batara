
import { 
  Request as IRequest, 
  Response as IResponse, 
  NextFunction as INextFunction,
  ValidationChain 
} from '../interface/http.interface';
import IMap from "../interface/map.interface";

import Language from '../middleware/language.middleware';
import Validation from "../middleware/validation.middleware";

export default abstract class Controller
{

  public abstract handle(req: IRequest, res: IResponse, next: INextFunction): any;
  protected abstract authorizeHandler(err: any, req: IRequest, res: IResponse, next: INextFunction): any;
  protected abstract validationHandler(err: any, req: IRequest, res: IResponse, next: INextFunction): any;

  public run(): Array<any>
  {
    return [
      new Language().handle,
      this.translate,
      this.authorize,
      this.authorizeHandler,
      this.rules(),
      new Validation().handle,
      this.validationHandler,
      this.handle
    ];
  }

  protected authorize(req: IRequest, res: IResponse, next: INextFunction): any
  {
    return next();
  }
  
  protected rules(): Array<ValidationChain>
  {
    return [];
  }

  protected attributes(): IMap<string>
  {
    return {};
  }

  protected messages(): IMap<string>
  {
    return {};
  }

  private translate(req: IRequest, res: IResponse, next: INextFunction): any
  {
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
    return next();
  }

}
