import { ValidationError } from "./contract.type";
import ValidationResult from './validation-result.interface';
import Factory from "../contract/factory.interface";
export default class ErrorFormat implements Factory<Array<ValidationResult>> {
    make(errors: Array<ValidationError>): Array<ValidationResult>;
}
