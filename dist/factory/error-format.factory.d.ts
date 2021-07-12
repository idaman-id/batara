import ValidationResult from '../interface/validation-result.interface';
import { ValidationError } from "../type/http.type";
import Factory from "../interface/factory.interface";
export default class ErrorFormat implements Factory<Array<ValidationResult>> {
    make(errors: Array<ValidationError>): Array<ValidationResult>;
}
