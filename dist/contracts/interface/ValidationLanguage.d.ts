import IMap from './Map';
import Polyglot from "node-polyglot";
export default interface ValidationLanguage {
    locale: string;
    polyglot: Polyglot;
    original_attributes: IMap;
    setting_attributes: IMap;
    attributes?: IMap;
    original_messages: IMap;
    setting_messages: IMap;
    messages?: IMap;
}
