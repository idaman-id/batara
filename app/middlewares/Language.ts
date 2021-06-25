
import express from 'express';
import Polyglot from "node-polyglot";
import { attributes, messages } from '../configs/Language';

import Middleware from "./Middleware";
import LanguageCode from '../factories/LanguageCode';

export default class Language extends Middleware
{

  handle(req: express.Request, res: express.Response, next: express.NextFunction)
  {
    const locale = new LanguageCode().make(req.locale.language);
    req._language = {
      locale: locale,
      polyglot: new Polyglot({ phrases: messages[locale] }),
      original_messages: messages,
      setting_messages: messages[locale],
      messages: undefined,
      original_attributes: attributes,
      setting_attributes: JSON.parse(JSON.stringify(attributes[locale])),
      attributes: undefined,
    };
    next();
  }

}

