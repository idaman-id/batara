
import NotfoundError from  "../../../src/error/not-found.error";
import UnauthenticateError from  "../../../src/error/unauthenticate.error";
import UnauthorizeError from  "../../../src/error/unauthorize.error";
import UnexpectedError from  "../../../src/error/unexpected.error";
import ValidationError from  "../../../src/error/validation.error";
import * as Facade from "../../../src/error";

describe('Facade Error', () => {
  
  beforeAll(() => {
    
  });

  afterAll(() => {
    
  });

  beforeEach(() => {
    
  });

  afterEach(() => {
    
  });

  test('NotfoundError class should be exported in Error Facade', () => {  
    const isErrorExported = Facade.NotfoundError === NotfoundError;
    expect(isErrorExported).toBeTruthy();
  });

  test('UnauthenticateError class should be exported in Error Facade', () => {  
    const isErrorExported = Facade.UnauthenticateError === UnauthenticateError;
    expect(isErrorExported).toBeTruthy();
  });

  test('UnauthorizeError class should be exported in Error Facade', () => {  
    const isErrorExported = Facade.UnauthorizeError === UnauthorizeError;
    expect(isErrorExported).toBeTruthy();
  });

  test('UnexpectedError class should be exported in Error Facade', () => {  
    const isErrorExported = Facade.UnexpectedError === UnexpectedError;
    expect(isErrorExported).toBeTruthy();
  });

  test('ValidationError class should be exported in Error Facade', () => {  
    const isErrorExported = Facade.ValidationError === ValidationError;
    expect(isErrorExported).toBeTruthy();
  });

});
