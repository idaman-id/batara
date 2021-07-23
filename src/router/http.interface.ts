
import { 
  Request as IRequest,
  Response as IResponse,
  NextFunction as INextFunction,
  Handler as IHandler
} from 'express';

export interface Request extends IRequest {}
export interface Response extends IResponse {}
export interface NextFunction extends INextFunction {}
export interface Handler extends IHandler {}

export const enum HttpMethod
{

  GET = "get",
  POST = "post",
  PUT = "put",
  DELETE = "delete",
  PATCH = "patch",
  COPY = "copy",
  HEAD = "head",
  OPTIONS = "options"
  
}
