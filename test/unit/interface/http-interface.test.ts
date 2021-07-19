
import express from 'express';
import {
  Request,
  Response,
  NextFunction,
  ValidationChain
} from "../../../src/interface/http.interface";

describe('Interface Http', () => {
  
  let app: express.Application;

  beforeEach(() => {
    app = express();
  });

  test('Facade Http should be exported in Http Facade', () => {  
    const route = app.get("/", (req: Request, res: Response, next: NextFunction) => {
      const errors: Array<ValidationChain> = [];
      return res.send(errors);
    });
    expect(typeof route === "function").toBeTruthy();
  });

});
