/// <reference types="express" />
import { Request as IRequest, Response as IResponse, NextFunction as INextFunction } from '../interface/http.interface';
import Middleware from "./middleware";
/**
 * @description
 * Built in Validation middleware so every validation rules
 * specified in Controllers are validated
 * If there is error then this middleware will inject Error object
 */
export default class Validation extends Middleware {
    handle(req: IRequest, res: IResponse, next: INextFunction): void;
    private static formatErrors;
    private static translateErrors;
    private static modifyMessage;
}
