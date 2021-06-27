import { ResponseStatus } from "../constant/Communication";
import IResponseError from './ResponseError';

export default interface Response<D>
{

  status: ResponseStatus;
  message: string;
  data?: (D);
  error?: Array<IResponseError>;

}
