
import { 
  Request as IRequest, 
  Response as IResponse
} from 'express';

import Controller from "../Controller";
import Response from '../../entities/Response';
import { ResponseStatus } from '../../configs/Constant';
import { setting } from '../../configs/Setting';

export default class HomeController extends Controller
{

  handle(req: IRequest, res: IResponse)
  {
    const response = new Response({
      status: ResponseStatus.SUCCESS,
      message: "ok",
      data: {
        name: setting.application.name,
        version: setting.application.version,
        environment: setting.application.environment
      }
    });
    return res.status(200).json(response);
  }

}