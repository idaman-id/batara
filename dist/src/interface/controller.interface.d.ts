/// <reference types="express" />
import { Request as IRequest, Response as IResponse, NextFunction as INextFunction, ValidationChain } from './http.interface';
import IMap from "./map.interface";
export default interface Controller {
    handle(req: IRequest, res: IResponse, next: INextFunction): any;
    validationHandler(err: any, req: IRequest, res: IResponse, next: INextFunction): any;
    authorizeHandler(err: any, req: IRequest, res: IResponse, next: INextFunction): any;
    authorize(req: IRequest, res: IResponse, next: INextFunction): void;
    rules(): Array<ValidationChain>;
    attributes(): IMap;
    messages(): IMap;
    run(): Array<any>;
}
