import ValidationLanguage from "./validation-language.interface";
import Factory from "../contract/factory.interface";
export default class LanguageDetection implements Factory<ValidationLanguage> {
    make(locale: string): ValidationLanguage;
}
