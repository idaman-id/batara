
import Map from "../contract/map.interface";
import Factory from "../contract/factory.interface";

export default class LocaleTranslation implements Factory<Map<string>>
{

  make(locale: string, map: Map<string>): Map<string>
  {
    let translation = JSON.parse(JSON.stringify(map));
    const seperator = `${locale}.`;
    for (let key in translation) {

      const isInvalidTranslation = locale === "" || 
        !key.startsWith(seperator) || 
        key.slice(seperator.length) === "";

      if (isInvalidTranslation) {
        delete translation[key];
      }
    }
    return translation;
  }

}
