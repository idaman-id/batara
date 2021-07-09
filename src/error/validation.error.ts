
import IValidationError from "../interface/validation-error.interface";
import SystemError from "./system.error";

export default class ValidationError extends SystemError
{
  
  protected errors: Array<IValidationError>;

  constructor(
    errors: Array<IValidationError>,
    message: string = "validation error", 
  )
  {
    super(message);
    this.errors = errors;
  }

  getErrors(): Array<IValidationError>
  {
    return this.errors;
  }

}
