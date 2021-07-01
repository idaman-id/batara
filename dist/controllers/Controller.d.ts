/// <reference types="express" />
import { Request as IRequest, Response as IResponse, NextFunction as INextFunction, ValidationChain } from '../contracts/interface/Http';
import IController from '../contracts/interface/Controller';
import IMap from "../contracts/interface/Map";
export default abstract class Controller implements IController {
    abstract handle(req: IRequest, res: IResponse, next: INextFunction): any;
    abstract authorizeHandler(err: any, req: IRequest, res: IResponse, next: INextFunction): any;
    abstract validationHandler(err: any, req: IRequest, res: IResponse, next: INextFunction): any;
    authorize(req: IRequest, res: IResponse, next: INextFunction): void;
    rules(): Array<ValidationChain>;
    attributes(): IMap;
    messages(): IMap;
    run(): Array<any>;
}
