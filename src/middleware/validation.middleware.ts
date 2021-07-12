
import { Request, Response, NextFunction } from '../interface/http.interface';

import ValidationResult from '../adapter/validation-result.adapter';
import ValidationError from '../error/validation.error';

import Middleware from "./middleware";

/**
 * @description 
 * Built in Validation middleware so every validation rules 
 * specified in Controllers are validated 
 * If there is error then this middleware will inject Error object
 */
export default class Validation extends Middleware
{

  public handle(req: Request, res: Response, next: NextFunction)
  {
    let error = null;
    const result = new ValidationResult(req);
    if (result.isError()) {
      error = new ValidationError("invalid data", result.formatedErrors);
    }
    return next(error);
  }

}
