
import IMap from './map.interface';
import Polyglot from "node-polyglot";

export default interface ValidationLanguage
{

  locale: string,

  polyglot: Polyglot,
  original_attributes: IMap<string>, //original attribute from language config
  setting_attributes: IMap<string>, //global attribute
  attributes?: IMap<string>,//custom attribute from specific feature

  original_messages: IMap<string>, //original message from language config
  setting_messages: IMap<string>, //global message
  messages?: IMap<string>,//custom message from specific feature

}
