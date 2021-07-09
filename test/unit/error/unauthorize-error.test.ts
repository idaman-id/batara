
import SystemError from "../../../src/error/system.error";
import UnauthorizeError from  "../../../src/error/unauthorize.error";

describe('Class UnauthorizeError', () => {

  let errorMessage: string | undefined;
  let testError: UnauthorizeError;

  beforeAll(() => {

  });

  afterAll(() => {
    
  });

  beforeEach(() => {
    
  });

  afterEach(() => {
    
  });

  const exec = () => {
    return new UnauthorizeError(errorMessage);
  };

  test('UnauthorizeError class should be an instance of Error', () => {
    testError = exec();

    expect(testError instanceof Error).toBeTruthy();
  });

  test('UnauthorizeError class should be an instance of SystemError (base)', () => {
    testError = exec();

    expect(testError instanceof SystemError).toBeTruthy();
  });

  test('UnauthorizeError class should have message property', () => {
    testError = exec();

    expect(testError.message).toBe("unauthorize error");
  });

  test('UnauthorizeError class should have custom message property', () => {
    errorMessage = "Error: Unauthorize access";
    testError = exec();

    expect(testError.message).toBe(errorMessage);
  });

  test('UnauthorizeError should be throwable', () => {
    testError = exec();

    expect(() => {
      throw testError;
    }).toThrow(UnauthorizeError);
  });

});
