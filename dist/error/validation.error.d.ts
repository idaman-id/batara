import ValidationResult from "../interface/validation-result.interface";
import SystemError from "./system.error";
export default class ValidationError extends SystemError {
    protected validationResults: Array<ValidationResult>;
    constructor(message: string | undefined, validationResults: Array<ValidationResult>);
    get errors(): Array<ValidationResult>;
}
