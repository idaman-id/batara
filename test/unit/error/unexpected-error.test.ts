
import SystemError from "../../../src/error/system.error";
import UnexpectedError from  "../../../src/error/unexpected.error";

describe('Class UnexpectedError', () => {

  let errorMessage: string | undefined;
  let testError: UnexpectedError;

  beforeAll(() => {

  });

  afterAll(() => {
    
  });

  beforeEach(() => {
    
  });

  afterEach(() => {
    
  });

  const exec = () => {
    return new UnexpectedError(errorMessage);
  };

  test('UnexpectedError class should be an instance of Error', () => {
    testError = exec();

    expect(testError instanceof Error).toBeTruthy();
  });

  test('UnexpectedError class should be an instance of SystemError (base)', () => {
    testError = exec();

    expect(testError instanceof SystemError).toBeTruthy();
  });

  test('UnexpectedError class should have message property', () => {
    testError = exec();

    expect(testError.message).toBe("unexpected error");
  });

  test('UnexpectedError class should have custom message property', () => {
    errorMessage = "Error: Unexpected happened";
    testError = exec();

    expect(testError.message).toBe(errorMessage);
  });

  test('UnexpectedError should be throwable', () => {
    testError = exec();

    expect(() => {
      throw testError;
    }).toThrow(UnexpectedError);
  });

});
