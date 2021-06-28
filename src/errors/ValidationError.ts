
import ResponseError from "../contracts/interface/ResponseError";
import SystemError from "./SystemError";

export default class ValidationError extends SystemError
{
  
  private errors: Array<ResponseError>;

  constructor(message: string, errors: Array<ResponseError>)
  {
    super(message);
    this.errors = errors;
  }

  getErrors(): Array<ResponseError>
  {
    return this.errors;
  }

}