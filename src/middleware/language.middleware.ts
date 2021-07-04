
import Polyglot from "node-polyglot";
import { Request, Response, NextFunction } from '../interface/http.interface';
import { attributes, messages } from '../constant/language.constant';

import Middleware from "./middleware";

/**
 * @description 
 * Inject `_language` object so we can use custom translation 
 * specified later in controller or other prefered files
 */
export default class Language extends Middleware
{

  handle(req: Request, res: Response, next: NextFunction)
  {
    const locale = req.locale.language;

    let choosenAttributes = JSON.parse(JSON.stringify(attributes));
    for (let attributeKey in choosenAttributes) { 
      if (!attributeKey.startsWith(locale)) {
        delete choosenAttributes[attributeKey];
      }
    }

    let choosenMessages = JSON.parse(JSON.stringify(messages));
    for (let attributeKey in choosenMessages) { 
      if (!attributeKey.startsWith(locale)) {
        delete choosenMessages[attributeKey];
      }
    }

    req._language = {
      locale: locale,
      polyglot: new Polyglot({ phrases: choosenMessages }),

      original_messages: messages,
      setting_messages: choosenMessages,
      messages: undefined,

      original_attributes: attributes,
      setting_attributes: choosenAttributes,
      attributes: undefined,
    };
    return next();
  }

}

