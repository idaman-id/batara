
import { Request, Response, NextFunction } from '../router/http.interface';

export default interface Middleware
{

  handle(req: Request, res: Response, next: NextFunction): any

}
