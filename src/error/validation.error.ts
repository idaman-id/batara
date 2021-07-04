
import { ErrorType } from "../constant";
import ResponseError from "../interface/response-error.interface";
import SystemError from "./system.error";

export default class ValidationError extends SystemError
{
  
  public errors: Array<ResponseError>;

  constructor(message: string, errors: Array<ResponseError>)
  {
    super(message);
    this.type = ErrorType.VALIDATION;
    this.errors = errors;
  }

  getErrors(): Array<ResponseError>
  {
    return this.errors;
  }

}
