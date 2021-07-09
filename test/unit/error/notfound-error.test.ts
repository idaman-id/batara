
import SystemError from "../../../src/error/system.error";
import NotfoundError from  "../../../src/error/not-found.error";

describe('Class NotfoundError', () => {

  let errorMessage: string | undefined;
  let testError: NotfoundError;

  beforeAll(() => {

  });

  afterAll(() => {
    
  });

  beforeEach(() => {

  });

  afterEach(() => {
    
  });

  const exec = () => {
    return new NotfoundError(errorMessage);
  };

  test('NotfoundError class should be an instance of Error', () => {
    testError = exec();

    expect(testError instanceof Error).toBeTruthy();
  });

  test('NotfoundError class should be an instance of SystemError (base)', () => {
    testError = exec();

    expect(testError instanceof SystemError).toBeTruthy();
  });

  test('NotfoundError class should have message property', () => {
    testError = exec();

    expect(testError.message).toBe("notfound error");
  });

  test('NotfoundError class should have custom message property', () => {
    errorMessage = "Error: Data notfound";
    testError = exec();

    expect(testError.message).toBe(errorMessage);
  });

  test('NotfoundError should be throwable', () => {
    testError = exec();

    expect(() => {
      throw testError;
    }).toThrow(NotfoundError);
  });

});
