
import SystemError from "./system.error";

export default class UnauthenticateError extends SystemError
{
  
  constructor(message: string = "unauthenticate error")
  {
    super(message);
  }

}
