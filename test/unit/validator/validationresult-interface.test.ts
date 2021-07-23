
import ValidationResult from "../../../src/validator/validation-result.interface";

describe('Interface ValidationResult', () => {

  test('ValidationResult shape should be valid', () => {
    const error: ValidationResult = {
      message: "Invalid value",
      field: "username"
    };

    expect(error.hasOwnProperty("message")).toBeTruthy();
    expect(error.hasOwnProperty("field")).toBeTruthy();
  });

});
