
import { HttpMethod } from '../constant/Communication';
import IController from './Controller';

export default interface Route
{

  path: string,
  method: HttpMethod,
  handler: IController

}