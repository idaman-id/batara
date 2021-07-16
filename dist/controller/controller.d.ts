import { Request as IRequest, Response as IResponse, NextFunction as INextFunction, ValidationChain } from '../interface/http.interface';
import IMap from "../interface/map.interface";
export default abstract class Controller {
    abstract handle(req: IRequest, res: IResponse, next: INextFunction): any;
    run(): Array<any>;
    protected rules(): Array<ValidationChain>;
    protected attributes(): IMap<string>;
    protected messages(): IMap<string>;
}
