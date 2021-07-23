
import SystemError from "../../../src/error/system.error";
import ValidationError from  "../../../src/error/validation.error";
import ValidationResult from "../../../src/validator/validation-result.interface";

describe('Class ValidationError', () => {

  let errorMessage: string | undefined;
  let error: ValidationError;
  let customErrors: Array<ValidationResult>;

  beforeEach(() => {
    customErrors = [
      {
        message: "Invalid value",
        field: "username"
      }
    ];
    error = exec();
  });

  const exec = () => {
    return new ValidationError(errorMessage, customErrors);
  };

  it('should be an instance of Error', () => {

    expect(error instanceof Error).toBeTruthy();
  });

  it('should be an instance of SystemError (base)', () => {

    expect(error instanceof SystemError).toBeTruthy();
  });

  it('should have message property', () => {

    expect(error.message).toBe("validation error");
  });

  it('should have custom message property', () => {
    errorMessage = "Error: Invalid data specified";
    error = exec();

    expect(error.message).toBe(errorMessage);
  });

  it('should be throwable', () => {

    expect(() => {
      throw error;
    }).toThrow(ValidationError);
  });

  it('errors property should be accessible through errors getter', () => {

    expect(error.errors.sort()).toEqual(customErrors.sort());
  });

  it('should valid if error data is empty', () => {
    customErrors = [];
    error = exec();

    expect(error.errors.sort()).toEqual(customErrors);
  });

});
