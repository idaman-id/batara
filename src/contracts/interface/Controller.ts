
import { 
  Request as IRequest, 
  Response as IResponse, 
  NextFunction as INextFunction 
} from 'express';
import { ValidationChain } from "express-validator";
import CodeLanguage from "./CodeLanguage";

export default interface Controller
{

  handle(req: IRequest, res: IResponse, next: INextFunction): void;
  authorize(req: IRequest, res: IResponse, next: INextFunction): void;
  rules(): Array<ValidationChain>;
  attributes(): CodeLanguage;
  messages(): CodeLanguage;
  run(): Array<any>;

}