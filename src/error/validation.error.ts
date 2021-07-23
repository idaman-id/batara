
import ValidationResult from "../validator/validation-result.interface";
import SystemError from "./system.error";

export default class ValidationError extends SystemError
{
  
  protected validationResults: Array<ValidationResult> = [];

  constructor(
    message: string = "validation error",
    validationResults: Array<ValidationResult>
  )
  {
    super(message);
    this.validationResults = validationResults;
  }

  get errors(): Array<ValidationResult>
  {
    return this.validationResults;
  }

}
