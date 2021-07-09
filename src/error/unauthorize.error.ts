
import SystemError from "./system.error";

export default class UnauthorizeError extends SystemError
{
  
  constructor(message: string = "unauthorize error")
  {
    super(message);
  }

}
