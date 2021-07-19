
import Polyglot from "node-polyglot";
import { attributes, messages } from '../../../src/constant/language.constant';
import LanguageDetection from "../../../src/factory/language-detection.factory";
import LocaleTranslation from "../../../src/factory/locale-translation.factory";

describe('Factory LanguageDetection', () => {

  let factory: LanguageDetection;

  beforeEach(() => {
    factory = exec();
  });

  const exec = () => {
    return new LanguageDetection();
  };

  test('Factory shape should be valid', () => {
    
    expect(typeof factory.make).toBe("function");
  });

  test('Factory should return validation language object', () => {
    const result = factory.make("id");
    
    expect(result.hasOwnProperty("locale")).toBeTruthy();
    expect(result.hasOwnProperty("polyglot")).toBeTruthy();
    expect(result.polyglot instanceof Polyglot).toBeTruthy();
    expect(result.hasOwnProperty("original_attributes")).toBeTruthy();
    expect(result.hasOwnProperty("setting_attributes")).toBeTruthy();
    expect(result.hasOwnProperty("attributes")).toBeTruthy();
    expect(result.hasOwnProperty("original_messages")).toBeTruthy();
    expect(result.hasOwnProperty("setting_messages")).toBeTruthy();
    expect(result.hasOwnProperty("messages")).toBeTruthy();
  });

  test('Factory should return validation language object when parameter is invalid', () => {
    const result = factory.make("");
    
    expect(result.hasOwnProperty("locale")).toBeTruthy();
    expect(result.hasOwnProperty("polyglot")).toBeTruthy();
    expect(result.polyglot instanceof Polyglot).toBeTruthy();
    expect(result.hasOwnProperty("original_attributes")).toBeTruthy();
    expect(result.hasOwnProperty("setting_attributes")).toBeTruthy();
    expect(result.hasOwnProperty("attributes")).toBeTruthy();
    expect(result.hasOwnProperty("original_messages")).toBeTruthy();
    expect(result.hasOwnProperty("setting_messages")).toBeTruthy();
    expect(result.hasOwnProperty("messages")).toBeTruthy();
  });

  test('Factory should return valid attributes', () => {
    const result = factory.make("id");
    const translation = new LocaleTranslation().make("id", attributes);

    expect(result.original_attributes).toEqual(attributes);
    expect(result.setting_attributes).toEqual(translation)
    expect(result.attributes === undefined).toBeTruthy();
  });

  test('Factory should return valid messages', () => {
    const result = factory.make("id");
    const translation = new LocaleTranslation().make("id", messages);

    expect(result.original_messages).toEqual(messages);
    expect(result.setting_messages).toEqual(translation)
    expect(result.messages === undefined).toBeTruthy();
  });

  test('Factory should return valid messages according to translation locale', () => {
    const indonesianTranslation = factory.make("id");
    const englishTranslation = factory.make("en");
    const unavailableTranslation = factory.make("");
    
    const indonesianMessages = new LocaleTranslation().make("id", messages);
    const englishMessages = new LocaleTranslation().make("en", messages);

    Object.keys(indonesianMessages).forEach(key => {
      expect(indonesianTranslation.polyglot.has(key)).toBeTruthy();
    });
    Object.keys(englishMessages).forEach(key => {
      expect(englishTranslation.polyglot.has(key)).toBeTruthy();
    });
    Object.keys(messages).forEach(key => {
      expect(unavailableTranslation.polyglot.has(key)).not.toBeTruthy();
    });
  });

});
