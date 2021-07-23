
import SystemError from "../../../src/error/system.error";
import UnexpectedError from  "../../../src/error/unexpected.error";

describe('Class UnexpectedError', () => {

  let errorMessage: string | undefined;
  let error: UnexpectedError;

  const exec = () => {
    return new UnexpectedError(errorMessage);
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

    expect(error.message).toBe("unexpected error");
  });

  it('should have custom message property', () => {
    errorMessage = "Error: Unexpected happened";
    error = exec();

    expect(error.message).toBe(errorMessage);
  });

  it('should be throwable', () => {
    error = exec();

    expect(() => {
      throw error;
    }).toThrow(UnexpectedError);
  });

});
