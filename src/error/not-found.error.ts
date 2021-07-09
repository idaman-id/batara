
import SystemError from "./system.error";

export default class NotfoundError extends SystemError
{
  
  constructor(message: string = "notfound error")
  {
    super(message);
  }

}
