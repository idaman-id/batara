/// <reference types="express" />
import { Request, Response, NextFunction } from '../contracts/interface/Http';
export default abstract class Middleware {
    abstract handle(req: Request, res: Response, next: NextFunction): any;
}
