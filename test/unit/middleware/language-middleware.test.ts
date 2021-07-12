
import express from 'express';
import LanguageMiddleware from "../../../src/middleware/language.middleware";

describe('Language Middleware', () => {

  let app: express.Application;
  let middleware: LanguageMiddleware;

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
    return new LanguageMiddleware();
  };

  test('Middleware shape should be valid', () => {
    const languageMiddleware = app.use(middleware.handle);
    expect(typeof languageMiddleware === "function").toBeTruthy();
  });

});
