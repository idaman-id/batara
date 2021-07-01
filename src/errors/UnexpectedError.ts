
import SystemError from "./SystemError";

export default class UnexpectedError extends SystemError
{
  
  constructor(message: string)
  {
    super(message);
    this.type = "unexpected";
  }

}
