
import { ResponseMessage, ResponseStatus } from '../contracts/constant/Communication';
import IResponse from '../contracts/interface/Response';
import IResponseError from '../contracts/interface/ResponseError';
import { ResponseData } from '../contracts/type/ResponseData';
import Entity from './Entity';

export default class ResponseBody<D extends ResponseData> extends Entity
{

  public status: ResponseStatus = ResponseStatus.SUCCESS;
  public message: string = "ok";
  public data?: (D);
  public error?: Array<IResponseError>;
  
  constructor({ status, message, data, error }: IResponse<D>)
  {
    super();
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

  success(): void
  {
    this.status = ResponseStatus.SUCCESS;
    this.message = ResponseMessage.SUCCESS;
  }

  unexpected(): void
  {
    this.status = ResponseStatus.ERROR;
    this.message = ResponseMessage.ERROR;
  }

  invalid(): void
  {
    this.status = ResponseStatus.INVALID_DATA;
    this.message = ResponseMessage.INVALID_DATA;
  }

  forbidden(): void
  {
    this.status = ResponseStatus.FORBIDDEN;
    this.message = ResponseMessage.FORBIDDEN;
  }

  notFound(): void
  {
    this.status = ResponseStatus.NOT_FOUND;
    this.message = ResponseMessage.NOT_FOUND;
  }

  unauthenticate(): void
  {
    this.status = ResponseStatus.UNAUTHENTICATE;
    this.message = ResponseMessage.UNAUTHENTICATE;
  }

  badGateway(): void
  {
    this.status = ResponseStatus.BAD_GATEWAY;
    this.message = ResponseMessage.BAD_GATEWAY;
  }

  requestTimeout(): void
  {
    this.status = ResponseStatus.REQUEST_TIMEOUT;
    this.message = ResponseMessage.REQUEST_TIMEOUT;
  }

}
