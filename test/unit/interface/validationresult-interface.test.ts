
import ValidationResult from "../../../src/interface/validation-result.interface";

describe('Interface ValidationResult', () => {

  beforeAll(() => {

  });

  afterAll(() => {
    
  });

  beforeEach(() => {

  });

  afterEach(() => {
    
  });

  test('ValidationResult shape should be valid', () => {
    const error: ValidationResult = {
      message: "Invalid value",
      field: "username"
    };

    expect(error.hasOwnProperty("message")).toBeTruthy();
    expect(error.hasOwnProperty("field")).toBeTruthy();
  });

});
