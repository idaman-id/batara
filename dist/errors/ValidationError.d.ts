import ResponseError from "../contracts/interface/ResponseError";
import SystemError from "./SystemError";
export default class ValidationError extends SystemError {
    errors: Array<ResponseError>;
    constructor(message: string, errors: Array<ResponseError>);
    getErrors(): Array<ResponseError>;
}
