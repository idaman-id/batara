
import { Handler } from './http.interface';
import { HttpMethod } from '../constant/communication.constant';

export default interface Route
{

  path: string,
  method: HttpMethod,
  handler: Handler,
  middlewares?: Array<string>

}
