import ValidationLanguage from "../interface/validation-language.interface";
import Factory from "../interface/factory.interface";
export default class LanguageDetection implements Factory<ValidationLanguage> {
    make(locale: string): ValidationLanguage;
}
