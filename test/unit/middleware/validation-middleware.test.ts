
import express from 'express';
import ValidationMiddleware from "../../../src/middleware/validation.middleware";

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

});
