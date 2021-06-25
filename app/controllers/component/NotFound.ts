
import { 
  Request as IRequest, 
  Response as IResponse
} from 'express';

import Controller from "../Controller";
import Response from '../../entities/Response';
import { ResponseStatus } from '../../configs/Constant';

export default class NotFoundController extends Controller
{

  handle(req: IRequest, res: IResponse)
  {
    const response = new Response({
      status: ResponseStatus.NOT_FOUND,
      message: "resource not found"
    });
    return res.status(200).json(response);
  }

}