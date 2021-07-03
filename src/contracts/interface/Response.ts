import IResponseError from './ResponseError';

export default interface Response<D>
{

  status: string;
  message: string;
  data?: (D);
  error?: Array<IResponseError>;

}
