
import ErrorTranslation from  "../../../src/validator/error-translation.factory";
import LanguageDetection from "../../../src/validator/language-detection.factory";
import ValidationLanguage from "../../../src/validator/validation-language.interface";
import { ValidationError } from "../../../src/validator/contract.type";

describe('Factory ErrorTranslation', () => {
  
  let locale: string;
  let language: ValidationLanguage;
  let errors: Array<ValidationError>;
  let factory: ErrorTranslation;

  beforeEach(() => {
    locale = "id";
    language = new LanguageDetection().make(locale);
    errors = [];
    factory = exec();
  });

  const exec = () => {
    return new ErrorTranslation();
  };

  test('Factory shape should be valid', () => {
    
    expect(typeof factory.make).toBe("function");
  });

  test('Factory result should be empty array when errors is empty', () => {
    const result = factory.make(language, errors);

    expect(result).toBeInstanceOf(Array);
    expect(result.length).toBe(0);
  });

  test('Factory should return original message when there is no translation available', () => {
    errors.push({
      location: "query",
      param: "username",
      value: "",
      msg: "custom_message",
    });
    const result = factory.make(language, errors);

    expect(result[0].msg).toBe("custom_message");
  });

  test('Factory should return translated attribute', () => {
    errors.push({
      location: "query",
      param: "token",//available in attribute translation
      value: "",
      msg: "required",
    });
    const result = factory.make(language, errors);

    expect(result[0].msg).toBe("Token wajib diisi");
  });

  test('Factory should return default attribute', () => {
    errors.push({
      location: "query",
      param: "username",//not available in default translation
      value: "",
      msg: "required",
    });
    const result = factory.make(language, errors);

    expect(result[0].msg).toBe("Atribut wajib diisi");
  });

  test('Factory should return translated value', () => {
    errors.push({
      location: "query",
      param: "gender",
      value: "",
      msg: "between:Laki-Laki,Perempuan",
    });
    const result = factory.make(language, errors);

    expect(result[0].msg).toBe("Atribut harus diantara Laki-Laki dan Perempuan");
  });

  test('Factory should return default missing value', () => {
    errors.push({
      location: "query",
      param: "birthdate",
      value: "",
      msg: "between:1990",//not supplied 2nd args
    });
    const result = factory.make(language, errors);

    expect(result[0].msg).toBe("Atribut harus diantara 1990 dan Nilai");
  });

  test('Factory should return default value', () => {
    errors.push({
      location: "query",
      param: "birthdate",
      value: "",
      msg: "min",//not supplied any args
    });
    const result = factory.make(language, errors);

    expect(result[0].msg).toBe("Atribut harus lebih dari Nilai");
  });

  test('Factory should return converted asterisk for array param', () => {
    language.attributes = {
      "id.attachments.*.": "Lampiran"
    };
    errors.push({
      location: "query",
      param: "attachments[0]",
      value: "",
      msg: "invalid_value",
    });
    const result = factory.make(language, errors);

    expect(result[0].msg).toBe("Lampiran tidak valid");
  });

  test('Factory should return converted asterisk for nested array of object param', () => {
    language.attributes = {
      "id.users.*.attachments.*.": "Lampiran Pengguna"
    };
    errors.push({
      location: "query",
      param: "users[0]attachments[2]",
      value: "",
      msg: "invalid_value",
    });
    const result = factory.make(language, errors);

    expect(result[0].msg).toBe("Lampiran Pengguna tidak valid");
  });

  test('Factory should return converted asterisk for nested array of array param', () => {
    language.attributes = {
      "id.documents.*..*.": "Lampiran Dokumen"
    };
    errors.push({
      location: "query",
      param: "documents[0][1]",
      value: "",
      msg: "invalid_value",
    });
    const result = factory.make(language, errors);

    expect(result[0].msg).toBe("Lampiran Dokumen tidak valid");
  });

});
