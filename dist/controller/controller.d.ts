/// <reference types="express" />
import { Request as IRequest, Response as IResponse, NextFunction as INextFunction, ValidationChain } from '../interface/http.interface';
import IMap from "../interface/map.interface";
export default abstract class Controller {
    abstract handle(req: IRequest, res: IResponse, next: INextFunction): any;
    protected abstract authorizeHandler(err: any, req: IRequest, res: IResponse, next: INextFunction): any;
    protected abstract validationHandler(err: any, req: IRequest, res: IResponse, next: INextFunction): any;
    run(): Array<any>;
    protected authorize(req: IRequest, res: IResponse, next: INextFunction): any;
    protected rules(): Array<ValidationChain>;
    protected attributes(): IMap;
    protected messages(): IMap;
    private translate;
}
