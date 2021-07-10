import { Request, Response, NextFunction } from '../interface/http.interface';
export default abstract class Middleware {
    abstract handle(req: Request, res: Response, next: NextFunction): any;
}
