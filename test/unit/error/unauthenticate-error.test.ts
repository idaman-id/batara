
import SystemError from "../../../src/error/system.error";
import UnauthenticateError from  "../../../src/error/unauthenticate.error";

describe('Class UnauthenticateError', () => {

  let errorMessage: string | undefined;
  let error: UnauthenticateError;

  const exec = () => {
    return new UnauthenticateError(errorMessage);
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

    expect(error.message).toBe("unauthenticate error");
  });

  it('should have custom message property', () => {
    errorMessage = "Error: Unauthenticate access";
    error = exec();

    expect(error.message).toBe(errorMessage);
  });

  it('should be throwable', () => {
    error = exec();

    expect(() => {
      throw error;
    }).toThrow(UnauthenticateError);
  });

});
