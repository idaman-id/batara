
import SystemError from "../../../src/error/system.error";
import UnauthorizeError from  "../../../src/error/unauthorize.error";

describe('Class UnauthorizeError', () => {

  let errorMessage: string | undefined;
  let error: UnauthorizeError;

  beforeEach(() => {
    error = exec();
  });

  const exec = () => {
    return new UnauthorizeError(errorMessage);
  };

  it('should be an instance of Error', () => {

    expect(error instanceof Error).toBeTruthy();
  });

  it('should be an instance of SystemError (base)', () => {

    expect(error instanceof SystemError).toBeTruthy();
  });

  it('should have message property', () => {

    expect(error.message).toBe("unauthorize error");
  });

  it('should have custom message property', () => {
    errorMessage = "Error: Unauthorize access";
    error = exec();

    expect(error.message).toBe(errorMessage);
  });

  it('should be throwable', () => {

    expect(() => {
      throw error;
    }).toThrow(UnauthorizeError);
  });

});
