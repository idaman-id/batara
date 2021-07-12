
import { ValidationError } from "../type/http.type";

import Factory from "../interface/factory.interface";
import ValidationLanguage from '../interface/validation-language.interface';

export default class ErrorTranslation implements Factory<Array<ValidationError>>
{

  /**
   * @description
   *  Translate error list if there's translation available,
   *  otherwise use the default translation or it's original value
   */
  make(language: ValidationLanguage, errors: Array<ValidationError>): Array<ValidationError>
  {
    /**
    * Merge `setting_messages` from default translation with `messages` (if any)
    * Extend current polyglot translation to the merged one
    */
    const messageTranslation = Object.assign({}, language.setting_messages, language.messages);
    language.polyglot.extend(messageTranslation);

    let translatedErrors: Array<ValidationError> = JSON.parse(JSON.stringify(errors));
    
    translatedErrors.forEach(error => {
      error = ErrorTranslation.translate(language, error);      
    });
    return translatedErrors;
  }

  private static translate(language: ValidationLanguage, error: ValidationError): ValidationError
  {
    /** 
     * Check if error message contain value to be replaced marked with `:` 
     * e.g: `min:1`, `between:1990,2021`, `invalid_value`
     * 
     * The first splited message will be the `key`, and the rest will become `values`
     * - key: `min`, `between`, `invalid_value`
     * - values: `[1]`, `[1990, 2021]`, `[]`
     */
    const maps = error.msg.split(":");
    const key = maps[0];//this is guaranteed since `"".split(":")`; is returning `[""]`
    const values = maps.length > 1 ? maps[1].split(",") : [];
    const localeKey = `${language.locale}.${key}`;

    /** 
      * If there is translation for this particular `locale.key`
      * e.g: `id.min`, `id.invalid_value`
      */
    if (language.polyglot.has(localeKey)) {
      /**
      * Translate `key` message according to the specified language `locale`
      * Replace `error.msg` with custom translation
      */
      
      const field = ErrorTranslation.replaceFieldName(error.param);
      let message = language.polyglot.t(localeKey);
      message = ErrorTranslation.replaceMessageAttribute(language, message, field);
      message = ErrorTranslation.replaceMessageValue(language, message, values);

      error.msg = message;
    }

    return error;
  }

  /**
   * @description
   * Replace field with `.*.` if it's array pattern, e.g:
   * - attachments[m]file_id => attachments.*.file_id
   * - users[m]attachments[n]file_id => users.*.attachments.*.file_id
   */
  private static replaceFieldName(field: string): string
  {
    const isArray = field.match(/\[\d+\]/) != null;
    if (isArray) field = field.replace(/\[\d+\]/g, '.*.');
    
    return field;
  }

  /**
   * @description
   * Replace `:attribute` with default or custom translation (if any)
   */
  private static replaceMessageAttribute(
    language: ValidationLanguage, message: string, field: string
  ): string
  {
    /**
    * Merge `setting_attributes` from default translation and `attributes` if any
    */
    const attributeTranslation = Object.assign({}, language.setting_attributes, language.attributes);
    const attributeKey = 'attribute';    

    /** 
     * If there is key `locale.field` in translation file
     *  Replace with its translation value
     * otherwise: 
     *  Replace with its generic translation
     */
    const localeField = `${language.locale}.${field}`;
    let translation = language.original_attributes[`${language.locale}.${attributeKey}`];
    if (attributeTranslation.hasOwnProperty(localeField)) {
      translation = attributeTranslation[localeField];
    }

    return message.replace(`:${attributeKey}`, translation);
  }

  /**
   * @description
   * Replace `:value` with default or custom translation (if any)
   */
  private static replaceMessageValue(
    language: ValidationLanguage, message: string, values: Array<string>, 
  ): string
  {
    /** 
     * Foreach value written in `message`
     *  e.g: `between:1,0`, `min:1`
     * Replace each `:value` one by one from the first founded keyword
     */
    const valueKey = 'value';
    const defaultTranslation = language.original_attributes[`${language.locale}.${valueKey}`];
    for (let i = 0; i < values.length; i++) {
      message = message.replace(`:${valueKey}`, values[i]);
    }

    /** 
     * If there is `:value` left, e.g:
     * - translation not available
     * - values are not specified, such as `between:1` (not specifying two parameter)
     * Then replace with its generic translation
     */
    return message.replace(`:${valueKey}`, defaultTranslation);
  }

}
