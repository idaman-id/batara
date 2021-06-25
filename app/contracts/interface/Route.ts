
import { HttpMethod } from '../../configs/Constant';
import IController from './Controller';

export default interface Route
{

  path: string,
  method: HttpMethod,
  handler: IController

}