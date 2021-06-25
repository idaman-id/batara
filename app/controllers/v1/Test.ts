
import { 
  Request as IRequest, 
  Response as IResponse,
  NextFunction as INextFunction 
} from 'express';

import { query } from "express-validator";
import Controller from "../Controller";
import Response from '../../entities/Response';
import { ResponseStatus } from '../../configs/Constant';

export default class TestController extends Controller
{

  rules()
  {
    return [
      query("app_id").not().isEmpty().withMessage("invalid_value"),
      query("custom_field").not().isEmpty().withMessage("custom_message"),
    ];
  }

  attributes()
  {
    return {
      id: {
        "custom_field": "Nama field kustom",
      },
      en: {
        "custom_field": "Custom field name",
      }
    };
  }

  messages()
  {
    return {
      id: {
        "custom_message": ":attribute adalah pesan kesalahan yang ditampilkan",
      },
      en: {
        "custom_message": ":attribute is a shown custom messages",
      }
    };
  }

  authorize(req: IRequest, res: IResponse, next: INextFunction)
  {
    if (req.query.app_id === "invalid") {
      const response = new Response({
        status: ResponseStatus.FORBIDDEN,
        message: "Not allowed to view",
      });
      return res.status(403).json(response);
    }
    next();
  }

  handle(req: IRequest, res: IResponse)
  {
    const response = new Response({
      status: ResponseStatus.SUCCESS,
      message: "ok",
      data: {
        app_id: req.query.app_id,
      }
    });
    return res.status(200).json(response);
  }

}
