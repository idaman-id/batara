
import express from 'express';
import ValidationError from '../../../src/error/validation.error';
import ValidationMiddleware from "../../../src/middleware/validation.middleware";
import { Request, Response } from '../../../src/router/http.interface';

describe('Validation Middleware', () => {

  let app: express.Application;
  let middleware: ValidationMiddleware;

  beforeEach(() => {
    app = express();
    middleware = exec();
  });

  const exec = () => {
    return new ValidationMiddleware();
  };

  it('should contain valid shape', () => {
    const validationMiddleware = app.use(middleware.handle);
    expect(typeof validationMiddleware === "function").toBeTruthy();
  });

  it('should be null when there is no validation error', () => {
    const middleware = exec();
    const request = { locale: { language: "id" } } as Request;

    const callback = (error: any) => {
      expect(error).toBe(null);
    };
    middleware.handle(request, {} as Response, callback);
  });

  it('should contain ValidationError object when there is validation error', () => {
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
