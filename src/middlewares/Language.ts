
import Polyglot from "node-polyglot";
import { Request, Response, NextFunction } from '../contracts/interface/Http';
import { attributes, messages } from '../contracts/constant/Language';

import Middleware from "./Middleware";

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

    let choosenMessages = JSON.parse(JSON.stringify(attributes));
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

