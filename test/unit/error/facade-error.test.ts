
import NotfoundError from  "../../../src/error/notfound.error";
import UnauthenticateError from  "../../../src/error/unauthenticate.error";
import UnauthorizeError from  "../../../src/error/unauthorize.error";
import UnexpectedError from  "../../../src/error/unexpected.error";
import ValidationError from  "../../../src/error/validation.error";
import * as Facade from "../../../src/error";

describe('Facade Error', () => {
  
  test('NotfoundError class should be exported in Error Facade', () => {  
    const isExported = Facade.NotfoundError === NotfoundError;
    expect(isExported).toBeTruthy();
  });

  test('UnauthenticateError class should be exported in Error Facade', () => {  
    const isExported = Facade.UnauthenticateError === UnauthenticateError;
    expect(isExported).toBeTruthy();
  });

  test('UnauthorizeError class should be exported in Error Facade', () => {  
    const isExported = Facade.UnauthorizeError === UnauthorizeError;
    expect(isExported).toBeTruthy();
  });

  test('UnexpectedError class should be exported in Error Facade', () => {  
    const isExported = Facade.UnexpectedError === UnexpectedError;
    expect(isExported).toBeTruthy();
  });

  test('ValidationError class should be exported in Error Facade', () => {  
    const isExported = Facade.ValidationError === ValidationError;
    expect(isExported).toBeTruthy();
  });

});
