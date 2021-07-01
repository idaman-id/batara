
import { 
  Request as IRequest, 
  Response as IResponse, 
  NextFunction as INextFunction,
  ErrorRequestHandler as IErrorRequestHandler,
  ValidationChain
} from './Http';
import IMap from "./Map";

export default interface Controller
{

  handle(req: IRequest, res: IResponse, next: INextFunction): any;
  validationHandler(err: IErrorRequestHandler, req: IRequest, res: IResponse, next: INextFunction): any;
  authorizeHandler(err: IErrorRequestHandler, req: IRequest, res: IResponse, next: INextFunction): any;
  authorize(req: IRequest, res: IResponse, next: INextFunction): void;
  rules(): Array<ValidationChain>;
  attributes(): IMap;
  messages(): IMap;
  run(): Array<any>;

}
