
import Polyglot from "node-polyglot";
import { attributes, messages } from '../constant/language.constant';
import LocaleTranslation from "./locale-translation.factory";

import ValidationLanguage from "../interface/validation-language.interface";
import Factory from "../interface/factory.interface";

export default class LanguageDetection implements Factory<ValidationLanguage>
{

  make(locale: string): ValidationLanguage
  {
    const originalMessages = JSON.parse(JSON.stringify(messages));
    const originalAttributes = JSON.parse(JSON.stringify(attributes));

    const choosenMessages = new LocaleTranslation().make(locale, originalMessages);
    const choosenAttributes = new LocaleTranslation().make(locale, originalAttributes);

    return {
      locale: locale,
      polyglot: new Polyglot({ phrases: choosenMessages, locale: locale }),

      original_messages: originalMessages,
      setting_messages: choosenMessages,
      messages: undefined,

      original_attributes: originalAttributes,
      setting_attributes: choosenAttributes,
      attributes: undefined,
    };
  }

}
