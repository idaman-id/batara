
import LocaleTranslation from "../../../src/factory/locale-translation.factory";

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

  beforeAll(() => {

  });

  afterAll(() => {
    
  });

  beforeEach(() => {
    factory = exec();
  });

  afterEach(() => {
    
  });

  const exec = () => {
    return new LocaleTranslation();
  };

  test('Factory shape should be valid', () => {
    
    expect(typeof factory.make).toBe("function");
  });

  test('Factory should return valid translation according to locale', () => {
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

  test('Factory should return empty object if locale is empty', () => {
    const result = factory.make("", translation);

    expect(result).toEqual({ });
  });

});
 