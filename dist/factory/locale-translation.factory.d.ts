import Map from "../interface/map.interface";
import Factory from "../interface/factory.interface";
export default class LocaleTranslation implements Factory<Map<string>> {
    make(locale: string, map: Map<string>): Map<string>;
}
