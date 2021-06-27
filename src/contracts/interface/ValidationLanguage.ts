
import { LanguageCode } from '../constant/Language';
import CodeLanguage from './CodeLanguage';
import Hash from './Hash';
import Polyglot from "node-polyglot";

export default interface ValidationLanguage
{

  locale: LanguageCode,

  polyglot: Polyglot,
  original_attributes: CodeLanguage, //original attribute from language config
  setting_attributes: Hash, //global attribute
  attributes?: Hash,//custom attribute from specific feature

  original_messages: CodeLanguage, //original message from language config
  setting_messages: Hash, //global message
  messages?: Hash,//custom message from specific feature

}