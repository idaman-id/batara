import { Request, Response, NextFunction } from '../router/http.interface';
import Middleware from "./middleware";
/**
 * @description
 * Built in Validation middleware so every validation rules
 * specified in Controllers are validated
 * If there is error then this middleware will inject Error object
 */
export default class Validation extends Middleware {
    handle(req: Request, res: Response, next: NextFunction): void;
}
