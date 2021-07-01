
import { ErrorType } from "../contracts/constant";
import SystemError from "./SystemError";

export default class NotfoundError extends SystemError
{
  
  constructor(message: string)
  {
    super(message);
    this.type = ErrorType.NOTFOUND;
  }

}
