
import { 
  Request as IRequest,
  Response as IResponse,
  NextFunction as INextFunction
} from 'express';
import { 
  ValidationChain as IValidationChain 
} from "express-validator";

export interface Request extends IRequest {}
export interface Response extends IResponse {}
export interface NextFunction extends INextFunction {}
export interface ValidationChain extends IValidationChain {}
