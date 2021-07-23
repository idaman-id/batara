
import SystemError from  "../../../src/error/system.error";

class CustomError extends SystemError 
{

  constructor(message?: string)
  {
    super(message);
  }

}

describe('Class SystemError', () => {

  let errorMessage: string | undefined;
  let error: SystemError;

  beforeEach(() => {
    errorMessage = "custom error";
  });

  const exec = () => {
    return new CustomError(errorMessage);
  };

  it('should be an instance of Error (base)', () => {
    error = exec();

    expect(error instanceof Error).toBeTruthy();
  });

  it('should be extendable', () => {
    error = exec();

    expect(error instanceof SystemError).toBeTruthy();
  });

  it('should have message property', () => {
    error = exec();

    expect(error.message).toBe("custom error");
  });

  it('should have default message when it`s not provided', () => {
    errorMessage = undefined;
    error = exec();

    expect(error.message).toBe("system error");
  });

  it('should be throwable', () => {
    error = exec();

    expect(() => {
      throw error;
    }).toThrow(CustomError);
  });

});
