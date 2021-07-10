import IMap from './map.interface';
import Polyglot from "node-polyglot";
export default interface ValidationLanguage {
    locale: string;
    polyglot: Polyglot;
    original_attributes: IMap<string>;
    setting_attributes: IMap<string>;
    attributes?: IMap<string>;
    original_messages: IMap<string>;
    setting_messages: IMap<string>;
    messages?: IMap<string>;
}
