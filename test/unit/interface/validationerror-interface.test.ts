
import ValidationError from "../../../src/interface/validation-error.interface";

describe('Interface ValidationError', () => {

  beforeAll(() => {

  });

  afterAll(() => {
    
  });

  beforeEach(() => {

  });

  afterEach(() => {
    
  });

  test('ValidationError shape should be valid', () => {
    const error: ValidationError = {
      message: "Invalid value",
      field: "username"
    };

    expect(error.hasOwnProperty("message")).toBeTruthy();
    expect(error.hasOwnProperty("field")).toBeTruthy();
  });

});
