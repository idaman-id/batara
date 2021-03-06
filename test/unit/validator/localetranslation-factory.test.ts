
import LocaleTranslation from "../../../src/validator/locale-translation.factory";

describe('Factory LocaleTranslation', () => {

  const translation = {
    "id.required": ":attribute wajib diisi",
    "en.required": ":attribute must be filled",
    "id.min": ":attribute harus minimal :value",
    "en.min": ":attribute should be minimum of :value",
    "idinvalid": "invalid translation",
    "id.": "also invalid translation",
  };
  let factory: LocaleTranslation;

  beforeEach(() => {
    factory = exec();
  });

  const exec = () => {
    return new LocaleTranslation();
  };

  it('should contain valid shape', () => {
    
    expect(typeof factory.make).toBe("function");
  });

  it('should return valid translation according to locale', () => {
    const result = factory.make("id", translation);

    expect(result).toEqual({
      "id.required": ":attribute wajib diisi",
      "id.min": ":attribute harus minimal :value",
    });
    expect(result).not.toContain({
      "idinvalid": "invalid translation",
      "id.": "also invalid translation",
    });
  });

  it('should return empty object if locale is empty', () => {
    const result = factory.make("", translation);

    expect(result).toEqual({ });
  });

});
 