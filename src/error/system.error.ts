
import { ErrorType } from "../constant";

export default abstract class SystemError extends Error
{
  
  public type: string;

  constructor(message: string)
  {
    super(message);
    this.type = ErrorType.SYSTEM;
  }

}
