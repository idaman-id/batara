import IValidationError from "../interface/validation-error.interface";
import SystemError from "./system.error";
export default class ValidationError extends SystemError {
    protected errors: Array<IValidationError>;
    constructor(errors: Array<IValidationError>, message?: string);
    getErrors(): Array<IValidationError>;
}
