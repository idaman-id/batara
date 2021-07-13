
import express from 'express';
import ValidationError from '../../../src/error/validation.error';
import ValidationMiddleware from "../../../src/middleware/validation.middleware";
import { Request, Response } from '../../../src/interface/http.interface';

describe('Validation Middleware', () => {

  let app: express.Application;
  let middleware: ValidationMiddleware;

  beforeAll(() => {

  });

  afterAll(() => {
    
  });

  beforeEach(() => {
    app = express();
    middleware = exec();
  });

  afterEach(() => {
    
  });

  const exec = () => {
    return new ValidationMiddleware();
  };

  test('Middleware shape should be valid', () => {
    const validationMiddleware = app.use(middleware.handle);
    expect(typeof validationMiddleware === "function").toBeTruthy();
  });

  test('error object should be null when there is no validation error', () => {
    const middleware = exec();
    const request = { locale: { language: "id" } } as Request;

    const callback = (error: any) => {
      expect(error).toBe(null);
    };
    middleware.handle(request, {} as Response, callback);
  });

  test('error object should contain ValidationError object when there is validation error', () => {
    const request = { locale: { language: "id" }, _language: {} } as Request;
    const middleware = exec();

    const handle = jest.spyOn(ValidationMiddleware.prototype as any, 'handle');
    const handler = function(req: Request, res: Response, next: Function) {
      return next(new ValidationError("Invalid data", []));
    };
    handle.mockImplementation(handler as any);

    const callback = (error: any) => {
      expect(error).toBeInstanceOf(ValidationError);
    };
    middleware.handle(request, {} as Response, callback);
  });

});
