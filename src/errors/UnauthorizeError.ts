
import { ErrorType } from "../contracts/constant";
import SystemError from "./SystemError";

export default class UnauthorizeError extends SystemError
{
  
  constructor(message: string)
  {
    super(message);
    this.type = ErrorType.UNAUTHORIZE;
  }

}
