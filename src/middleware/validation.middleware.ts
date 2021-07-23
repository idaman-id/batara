
import { validationResult } from 'express-validator';

import { Request, Response, NextFunction } from '../router/http.interface';
import ValidationError from '../error/validation.error';

import Middleware from "./middleware";
import ErrorTranslation from '../validator/error-translation.factory';
import ErrorFormat from '../validator/error-format.factory';

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
    const result = validationResult(req);
    if (!result.isEmpty()) {
      const translatedErrors = new ErrorTranslation().make(
        req._language, result.array()
      );
      const formatedErrors = new ErrorFormat().make(translatedErrors);
      error = new ValidationError("invalid data", formatedErrors);
    }
    return next(error);
  }

}
