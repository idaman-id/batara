
import { validationResult } from 'express-validator';

import { Request } from '../interface/http.interface';
import IValidationResult from '../interface/validation-result.interface';

import ErrorTranslation from '../factory/error-translation.factory';
import ErrorFormat from "../factory/error-format.factory";

export default class ValidationResult
{

  private request;
  private error;

  constructor(request: Request)
  {
    this.request = request;
    this.error = validationResult(request);
  }

  public isError(): boolean
  {
    return !this.error.isEmpty();
  }

  public isSuccess(): boolean
  {
    return !this.isError();
  }

  get formatedErrors(): Array<IValidationResult>
  {
    const translatedErrors = new ErrorTranslation().make(
      this.request._language, 
      this.error.array()
    );
    return new ErrorFormat().make(translatedErrors);
  }

}
