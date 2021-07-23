
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
  });

  const exec = () => {
    return new ValidationError(errorMessage, customErrors);
  };

  it('should be an instance of Error', () => {
    error = exec();

    expect(error instanceof Error).toBeTruthy();
  });

  it('should be an instance of SystemError (base)', () => {
    error = exec();

    expect(error instanceof SystemError).toBeTruthy();
  });

  it('should have message property', () => {
    error = exec();

    expect(error.message).toBe("validation error");
  });

  it('should have custom message property', () => {
    errorMessage = "Error: Invalid data specified";
    error = exec();

    expect(error.message).toBe(errorMessage);
  });

  it('should be throwable', () => {
    error = exec();

    expect(() => {
      throw error;
    }).toThrow(ValidationError);
  });

  it('errors property should be accessible through errors getter', () => {
    error = exec();

    expect(error.errors.sort())
      .toEqual(customErrors.sort());
  });

  it('should valid if error data is empty', () => {
    customErrors = [];
    error = exec();

    expect(error.errors.sort()).toEqual(customErrors);
  });

});
