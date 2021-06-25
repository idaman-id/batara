import { ResponseStatus } from "../../configs/Constant";
import IResponseError from './ResponseError';

export default interface Response<D>
{

  status: ResponseStatus;
  message: string;
  data?: (D);
  error?: Array<IResponseError>;

}
