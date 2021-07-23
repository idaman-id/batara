
import SystemError from "../../../src/error/system.error";
import UnexpectedError from  "../../../src/error/unexpected.error";

describe('Class UnexpectedError', () => {

  let errorMessage: string | undefined;
  let error: UnexpectedError;

  beforeEach(() => {
    error = exec();
  });

  const exec = () => {
    return new UnexpectedError(errorMessage);
  };

  it('should be an instance of Error', () => {

    expect(error instanceof Error).toBeTruthy();
  });

  it('should be an instance of SystemError (base)', () => {

    expect(error instanceof SystemError).toBeTruthy();
  });

  it('should have message property', () => {

    expect(error.message).toBe("unexpected error");
  });

  it('should have custom message property', () => {
    errorMessage = "Error: Unexpected happened";
    error = exec();

    expect(error.message).toBe(errorMessage);
  });

  it('should be throwable', () => {

    expect(() => {
      throw error;
    }).toThrow(UnexpectedError);
  });

});
