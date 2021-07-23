
import SystemError from "../../../src/error/system.error";
import UnauthenticateError from  "../../../src/error/unauthenticate.error";

describe('Class UnauthenticateError', () => {

  let errorMessage: string | undefined;
  let error: UnauthenticateError;

  beforeEach(() => {
    error = exec();
  });

  const exec = () => {
    return new UnauthenticateError(errorMessage);
  };

  test('UnauthenticateError class should be an instance of Error', () => {

    expect(error instanceof Error).toBeTruthy();
  });

  test('UnauthenticateError class should be an instance of SystemError (base)', () => {

    expect(error instanceof SystemError).toBeTruthy();
  });

  test('UnauthenticateError class should have message property', () => {

    expect(error.message).toBe("unauthenticate error");
  });

  test('UnauthenticateError class should have custom message property', () => {
    errorMessage = "Error: Unauthenticate access";
    error = exec();

    expect(error.message).toBe(errorMessage);
  });

  test('UnauthenticateError should be throwable', () => {

    expect(() => {
      throw error;
    }).toThrow(UnauthenticateError);
  });

});
