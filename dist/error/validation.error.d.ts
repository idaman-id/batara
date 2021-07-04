import ResponseError from "../interface/response-error.interface";
import SystemError from "./system.error";
export default class ValidationError extends SystemError {
    errors: Array<ResponseError>;
    constructor(message: string, errors: Array<ResponseError>);
    getErrors(): Array<ResponseError>;
}
