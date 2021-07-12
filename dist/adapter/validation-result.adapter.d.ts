import { Request } from '../interface/http.interface';
import IValidationResult from '../interface/validation-result.interface';
export default class ValidationResult {
    private request;
    private error;
    constructor(request: Request);
    isError(): boolean;
    isSuccess(): boolean;
    get formatedErrors(): Array<IValidationResult>;
}
