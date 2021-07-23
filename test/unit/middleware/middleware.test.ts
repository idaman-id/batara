
import express from 'express';
import Middleware from "../../../src/middleware/middleware";

class CustomMiddleware extends Middleware {
  handle() {}
}

describe('Middleware class', () => {

  let app: express.Application;
  let middleware: Middleware;

  beforeEach(() => {
    app = express();
    middleware = exec();
  });

  const exec = (): Middleware => {
    return new CustomMiddleware();
  };

  it('should contain valid shape', () => {
    const customMiddleware = app.use(middleware.handle);
    expect(typeof customMiddleware === "function").toBeTruthy();
  });

});
