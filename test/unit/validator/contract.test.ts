
import { ValidationError } from "../../../src/validator/contract.type";

describe('Type Http', () => {

  let validationError: ValidationError;

  beforeEach(() => {
    validationError = exec();
  });

  const exec = (): ValidationError => {
    return {
      location: 'query',
      param: '_error',
      value: 'test',
      msg: 'Invalid username provided'
    };
  };

  it('should contain valid shape', () => {
    
    expect(validationError.hasOwnProperty("location")).toBeTruthy();
    expect(validationError.hasOwnProperty("param")).toBeTruthy();
    expect(validationError.hasOwnProperty("value")).toBeTruthy();
    expect(validationError.hasOwnProperty("msg")).toBeTruthy();
  });

});
