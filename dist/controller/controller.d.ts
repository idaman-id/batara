/// <reference types="express" />
import { Request as IRequest, Response as IResponse, NextFunction as INextFunction, ValidationChain } from '../interface/http.interface';
import IController from '../interface/controller.interface';
import IMap from "../interface/map.interface";
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
