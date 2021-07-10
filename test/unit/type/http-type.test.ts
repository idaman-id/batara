
import { ValidationError } from "../../../src/type/http.type";

describe('Type Http', () => {

  let validationError: ValidationError;

  beforeAll(() => {

  });

  afterAll(() => {
    
  });

  beforeEach(() => {
    validationError = exec();
  });

  afterEach(() => {
    
  });

  const exec = (): ValidationError => {
    return {
      location: 'query',
      param: '_error',
      value: 'test',
      msg: 'Invalid username provided'
    };
  };

  test('Type shape should be valid', () => {
    
    expect(validationError.hasOwnProperty("location")).toBeTruthy();
    expect(validationError.hasOwnProperty("param")).toBeTruthy();
    expect(validationError.hasOwnProperty("value")).toBeTruthy();
    expect(validationError.hasOwnProperty("msg")).toBeTruthy();
  });

});
