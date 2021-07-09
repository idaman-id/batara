
import SystemError from "../../../src/error/system.error";
import ValidationError from  "../../../src/error/validation.error";
import IValidationError from "../../../src/interface/validation-error.interface";

describe('Class ValidationError', () => {

  let errorMessage: string | undefined;
  let testError: ValidationError;
  let customErrors: Array<IValidationError>;

  beforeAll(() => {

  });

  afterAll(() => {
    
  });

  beforeEach(() => {
    customErrors = [
      {
        message: "Invalid value",
        field: "username"
      }
    ];
  });

  afterEach(() => {
    
  });

  const exec = () => {
    return new ValidationError(customErrors, errorMessage);
  };

  test('ValidationError class should be an instance of Error', () => {
    testError = exec();

    expect(testError instanceof Error).toBeTruthy();
  });

  test('ValidationError class should be an instance of SystemError (base)', () => {
    testError = exec();

    expect(testError instanceof SystemError).toBeTruthy();
  });

  test('ValidationError class should have message property', () => {
    testError = exec();

    expect(testError.message).toBe("validation error");
  });

  test('ValidationError class should have custom message property', () => {
    errorMessage = "Error: Invalid data specified";
    testError = exec();

    expect(testError.message).toBe(errorMessage);
  });

  test('ValidationError should be throwable', () => {
    testError = exec();

    expect(() => {
      throw testError;
    }).toThrow(ValidationError);
  });

  test('errors property should be accessible through getErrors method', () => {
    testError = exec();

    expect(testError.getErrors().sort())
      .toEqual(customErrors.sort());
  });

  test('ValidationError should valid if error data is empty', () => {
    customErrors = [];
    testError = exec();

    expect(testError.getErrors().sort()).toEqual(customErrors);
  });

});
