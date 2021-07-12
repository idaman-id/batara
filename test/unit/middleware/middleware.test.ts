
import express from 'express';
import Middleware from "../../../src/middleware/middleware";

describe('Middleware class', () => {

  let app: express.Application;
  let middleware: Middleware;

  class CustomMiddleware extends Middleware {
    handle() {}
  }

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

  const exec = (): Middleware => {
    return new CustomMiddleware();
  };

  test('Middleware shape should be valid', () => {
    const customMiddleware = app.use(middleware.handle);
    expect(typeof customMiddleware === "function").toBeTruthy();
  });

});
