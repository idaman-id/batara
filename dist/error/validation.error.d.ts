import IValidationError from "../interface/validation-error.interface";
import SystemError from "./system.error";
export default class ValidationError extends SystemError {
    errors: Array<IValidationError>;
    constructor(message: string, errors: Array<IValidationError>);
    getErrors(): Array<IValidationError>;
}
