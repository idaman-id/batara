
import { ErrorType } from "../contracts/constant";
import ResponseError from "../contracts/interface/ResponseError";
import SystemError from "./SystemError";

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
