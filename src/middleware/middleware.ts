
import IMiddleware from "../contract/middleware.interface";
import { Request, Response, NextFunction } from '../router/http.interface';

export default abstract class Middleware implements IMiddleware
{

  abstract handle(req: Request, res: Response, next: NextFunction): any;

}
