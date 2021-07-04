
import IMap from './map.interface';
import Polyglot from "node-polyglot";

export default interface ValidationLanguage
{

  locale: string,

  polyglot: Polyglot,
  original_attributes: IMap, //original attribute from language config
  setting_attributes: IMap, //global attribute
  attributes?: IMap,//custom attribute from specific feature

  original_messages: IMap, //original message from language config
  setting_messages: IMap, //global message
  messages?: IMap,//custom message from specific feature

}