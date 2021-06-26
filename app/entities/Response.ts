
import { ResponseStatus } from '../configs/Constant';
import IResponse from '../contracts/interface/Response';
import IResponseError from '../contracts/interface/ResponseError';

export default class Response<D>
{

  public status: ResponseStatus = ResponseStatus.SUCCESS;
  public message: string = "ok";
  public data?: (D);
  public error?: Array<IResponseError>;
  
  constructor({ status, message, data, error }: IResponse<D>)
  {
    this.status = status;
    this.message = message;
    this.data = data;
    this.error = error;
  }

  setStatus(status: ResponseStatus): void
  {
    this.status = status;
  }

  setMessage(message: string): void
  {
    this.message = message;
  }

  setData(data: D): void
  {
    this.data = data;
  }

  setError(error: Array<IResponseError>): void
  {
    this.error = error;
  }

  toObject(): object
  {
    return this;
  }

  toJson(): string
  {
    return JSON.stringify(this.toObject());
  }

  success(): void
  {
    this.status = ResponseStatus.SUCCESS;
    this.message = "ok";
  }

  unexpected(): void
  {
    this.status = ResponseStatus.ERROR;
    this.message = "error occured";
  }

  invalid(): void
  {
    this.status = ResponseStatus.INVALID_DATA;
    this.message = "invalid data";
  }

  forbidden(): void
  {
    this.status = ResponseStatus.FORBIDDEN;
    this.message = "forbidden access";
  }

  notFound(): void
  {
    this.status = ResponseStatus.NOT_FOUND;
    this.message = "resource notfound";
  }

  unauthenticate(): void
  {
    this.status = ResponseStatus.UNAUTHENTICATE;
    this.message = "unauthenticate access";
  }

  badGateway(): void
  {
    this.status = ResponseStatus.BAD_GATEWAY;
    this.message = "bad gateway";
  }

  requestTimeout(): void
  {
    this.status = ResponseStatus.REQUEST_TIMEOUT;
    this.message = "request timeout";
  }

}
