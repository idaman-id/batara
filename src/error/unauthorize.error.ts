
import { ErrorType } from "../constant";
import SystemError from "./system.error";

export default class UnauthorizeError extends SystemError
{
  
  constructor(message: string)
  {
    super(message);
    this.type = ErrorType.UNAUTHORIZE;
  }

}
