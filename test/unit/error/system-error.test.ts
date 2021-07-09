
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
  let testError: SystemError;

  beforeAll(() => {

  });

  afterAll(() => {
    
  });

  beforeEach(() => {
    errorMessage = "custom error";
  });

  afterEach(() => {
    
  });

  const exec = () => {
    return new CustomError(errorMessage);
  };

  test('SystemError class should be an instance of Error (base)', () => {
    testError = exec();

    expect(testError instanceof Error).toBeTruthy();
  });

  test('SystemError class should be extendable', () => {
    testError = exec();

    expect(testError instanceof SystemError).toBeTruthy();
  });

  test('SystemError class should have message property', () => {
    testError = exec();

    expect(testError.message).toBe("custom error");
  });

  test('SystemError class should have default message when it`s not provided', () => {
    errorMessage = undefined;
    testError = exec();

    expect(testError.message).toBe("system error");
  });

  test('SystemError should be throwable', () => {
    testError = exec();

    expect(() => {
      throw testError;
    }).toThrow(CustomError);
  });

});
