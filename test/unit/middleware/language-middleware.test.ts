
import express from 'express';
import LanguageMiddleware from "../../../src/middleware/language.middleware";
import { Request, Response } from '../../../src/router/http.interface';

describe('Language Middleware', () => {

  let app: express.Application;
  let middleware: LanguageMiddleware;

  beforeEach(() => {
    app = express();
    middleware = exec();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  const exec = () => {
    return new LanguageMiddleware();
  };

  it('should contain valid shape', () => {
    const languageMiddleware = app.use(middleware.handle);
    expect(typeof languageMiddleware === "function").toBeTruthy();
  });

  it('_language object should be defined when handle method is used', () => {
    const middleware = exec();
    let request = { locale: { language: "id" } } as Request;
    middleware.handle(request, {} as Response, () => {});
    
    expect(typeof request._language).not.toBe(undefined);
  });

});
