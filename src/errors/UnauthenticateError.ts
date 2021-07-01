
import SystemError from "./SystemError";

export default class UnauthenticateError extends SystemError
{
  
  constructor(message: string)
  {
    super(message);
    this.type = "unauthenticate";
  }

}
