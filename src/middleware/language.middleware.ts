
import LanguageDetection from '../validator/language-detection.factory';
import { Request, Response, NextFunction } from '../router/http.interface';

import Middleware from "./middleware";

/**
 * @description 
 * Inject `_language` object so we can use custom translation 
 * specified later in controller or other prefered files
 */
export default class Language extends Middleware
{

  public handle(req: Request, res: Response, next: NextFunction)
  {
    req._language = new LanguageDetection().make(req.locale.language);
    return next();
  }

}
