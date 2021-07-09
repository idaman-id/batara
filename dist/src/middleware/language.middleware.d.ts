/// <reference types="express" />
import { Request, Response, NextFunction } from '../interface/http.interface';
import Middleware from "./middleware";
/**
 * @description
 * Inject `_language` object so we can use custom translation
 * specified later in controller or other prefered files
 */
export default class Language extends Middleware {
    handle(req: Request, res: Response, next: NextFunction): void;
}
