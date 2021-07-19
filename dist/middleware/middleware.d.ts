import IMiddleware from "../interface/middleware.interface";
import { Request, Response, NextFunction } from '../interface/http.interface';
export default abstract class Middleware implements IMiddleware {
    abstract handle(req: Request, res: Response, next: NextFunction): any;
}
