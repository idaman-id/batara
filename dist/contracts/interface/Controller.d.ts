/// <reference types="express" />
import { Request as IRequest, Response as IResponse, NextFunction as INextFunction, ValidationChain } from './Http';
import IMap from "./Map";
export default interface Controller {
    handle(req: IRequest, res: IResponse, next: INextFunction): void;
    authorize(req: IRequest, res: IResponse, next: INextFunction): void;
    rules(): Array<ValidationChain>;
    attributes(): IMap;
    messages(): IMap;
    run(): Array<any>;
}
