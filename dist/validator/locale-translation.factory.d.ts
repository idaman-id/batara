import Map from "../contract/map.interface";
import Factory from "../contract/factory.interface";
export default class LocaleTranslation implements Factory<Map<string>> {
    make(locale: string, map: Map<string>): Map<string>;
}
