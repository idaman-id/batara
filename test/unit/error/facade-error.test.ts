
import NotfoundError from  "../../../src/error/notfound.error";
import UnauthenticateError from  "../../../src/error/unauthenticate.error";
import UnauthorizeError from  "../../../src/error/unauthorize.error";
import UnexpectedError from  "../../../src/error/unexpected.error";
import ValidationError from  "../../../src/error/validation.error";
import * as Facade from "../../../src/error";

describe('Facade Error', () => {
  
  it('should contain NotfoundError class in Error Facade', () => {  
    const isExported = Facade.NotfoundError === NotfoundError;
    expect(isExported).toBeTruthy();
  });

  it('should contain UnauthenticateError class in Error Facade', () => {  
    const isExported = Facade.UnauthenticateError === UnauthenticateError;
    expect(isExported).toBeTruthy();
  });

  it('should contain UnauthorizeError class in Error Facade', () => {  
    const isExported = Facade.UnauthorizeError === UnauthorizeError;
    expect(isExported).toBeTruthy();
  });

  it('should contain UnexpectedError class in Error Facade', () => {  
    const isExported = Facade.UnexpectedError === UnexpectedError;
    expect(isExported).toBeTruthy();
  });

  it('should contain ValidationError class in Error Facade', () => {  
    const isExported = Facade.ValidationError === ValidationError;
    expect(isExported).toBeTruthy();
  });

});
