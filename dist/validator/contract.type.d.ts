import { ValidationChain as IValidationChain, ValidationError as TypeValidationError } from "express-validator";
export interface ValidationChain extends IValidationChain {
}
export declare type ValidationError = TypeValidationError;
