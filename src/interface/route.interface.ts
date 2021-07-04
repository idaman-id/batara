
import { HttpMethod } from '../constant/communication.constant';
import IController from './controller.interface';

export default interface Route
{

  path: string,
  method: HttpMethod,
  handler: IController

}