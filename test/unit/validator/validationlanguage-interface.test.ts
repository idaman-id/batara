
import Polyglot from "node-polyglot";
import ValidationLanguage from "../../../src/validator/validation-language.interface";

describe('Interface ValidationLanguage', () => {

  it('should contain valid shape', () => {
    const language: ValidationLanguage = {
      locale: "en-EN",
      polyglot: new Polyglot(),
      original_attributes: {
        key: "value"
      },
      setting_attributes: {},
      attributes: {},
      original_messages: {},
      setting_messages: {},
      messages: {},
    };

    expect(language).toBeTruthy();
    expect(typeof language.locale === "string").toBeTruthy();
    expect(language.polyglot instanceof Polyglot).toBeTruthy();
    expect(language.hasOwnProperty("locale")).toBeTruthy();
    expect(language.hasOwnProperty("polyglot")).toBeTruthy();
    expect(language.hasOwnProperty("original_attributes")).toBeTruthy();
    expect(language.hasOwnProperty("setting_attributes")).toBeTruthy();
    expect(language.hasOwnProperty("attributes")).toBeTruthy();
    expect(language.hasOwnProperty("original_messages")).toBeTruthy();
    expect(language.hasOwnProperty("setting_messages")).toBeTruthy();
    expect(language.hasOwnProperty("messages")).toBeTruthy();
  });

});
