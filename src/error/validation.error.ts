
import { ErrorType } from "../constant";
import IValidationError from "../interface/validation-error.interface";
import SystemError from "./system.error";

export default class ValidationError extends SystemError
{
  
  public errors: Array<IValidationError>;

  constructor(message: string, errors: Array<IValidationError>)
  {
    super(message);
    this.type = ErrorType.VALIDATION;
    this.errors = errors;
  }

  getErrors(): Array<IValidationError>
  {
    return this.errors;
  }

}
