import IResponseBody from '../interface/response-body.interface';
import IResponseError from '../interface/response-error.interface';
import { ResponseData } from '../type/response-data.type';
import Entity from './entity';
export default class ResponseBody<D extends ResponseData> extends Entity {
    status: string;
    message: string;
    data?: (D);
    error?: Array<IResponseError>;
    constructor({ status, message, data, error }: IResponseBody<D>);
    setStatus(status: string): void;
    setMessage(message: string): void;
    setData(data: D): void;
    setError(error: Array<IResponseError>): void;
    success(): void;
    unexpected(): void;
    invalid(): void;
    forbidden(): void;
    notFound(): void;
    unauthenticate(): void;
    badGateway(): void;
    requestTimeout(): void;
}
