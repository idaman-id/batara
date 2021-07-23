
import express from 'express';
import {
  Request,
  Response,
  NextFunction
} from "../../../src/router/http.interface";
import { ValidationChain } from "../../../src/validator/contract.type";

describe('Interface Http', () => {
  
  let app: express.Application;

  beforeEach(() => {
    app = express();
  });

  it('should be exported in Http Facade', () => {  
    const route = app.get("/", (req: Request, res: Response, next: NextFunction) => {
      const errors: Array<ValidationChain> = [];
      return res.send(errors);
    });
    expect(typeof route === "function").toBeTruthy();
  });

});
