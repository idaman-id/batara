
import SystemError from "../../../src/error/system.error";
import UnauthenticateError from  "../../../src/error/unauthenticate.error";

describe('Class UnauthenticateError', () => {

  let errorMessage: string | undefined;
  let testError: UnauthenticateError;

  const exec = () => {
    return new UnauthenticateError(errorMessage);
  };

  test('UnauthenticateError class should be an instance of Error', () => {
    testError = exec();

    expect(testError instanceof Error).toBeTruthy();
  });

  test('UnauthenticateError class should be an instance of SystemError (base)', () => {
    testError = exec();

    expect(testError instanceof SystemError).toBeTruthy();
  });

  test('UnauthenticateError class should have message property', () => {
    testError = exec();

    expect(testError.message).toBe("unauthenticate error");
  });

  test('UnauthenticateError class should have custom message property', () => {
    errorMessage = "Error: Unauthenticate access";
    testError = exec();

    expect(testError.message).toBe(errorMessage);
  });

  test('UnauthenticateError should be throwable', () => {
    testError = exec();

    expect(() => {
      throw testError;
    }).toThrow(UnauthenticateError);
  });

});
