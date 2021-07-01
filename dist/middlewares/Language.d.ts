/// <reference types="express" />
import { Request, Response, NextFunction } from '../contracts/interface/Http';
import Middleware from "./Middleware";
/**
 * @description
 * Inject `_language` object so we can use custom translation
 * specified later in controller or other prefered files
 */
export default class Language extends Middleware {
    handle(req: Request, res: Response, next: NextFunction): void;
}
