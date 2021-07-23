
import SystemError from "../../../src/error/system.error";
import NotfoundError from  "../../../src/error/notfound.error";

describe('Class NotfoundError', () => {

  let errorMessage: string | undefined;
  let error: NotfoundError;

  beforeEach(() => {
    error = exec();
  });

  const exec = () => {
    return new NotfoundError(errorMessage);
  };

  it('should be an instance of Error', () => {

    expect(error instanceof Error).toBeTruthy();
  });

  it('should be an instance of SystemError (base)', () => {

    expect(error instanceof SystemError).toBeTruthy();
  });

  it('should have message property', () => {

    expect(error.message).toBe("notfound error");
  });

  it('should have custom message property', () => {
    errorMessage = "Error: Data notfound";
    error = exec();

    expect(error.message).toBe(errorMessage);
  });

  it('should be throwable', () => {

    expect(() => {
      throw error;
    }).toThrow(NotfoundError);
  });

});
