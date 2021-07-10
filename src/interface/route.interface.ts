
import { HttpMethod } from '../constant/communication.constant';
import Controller from '../controller/controller';

export default interface Route
{

  path: string,
  method: HttpMethod,
  handler: Controller

}
