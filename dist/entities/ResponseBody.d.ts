import IResponse from '../contracts/interface/Response';
import IResponseError from '../contracts/interface/ResponseError';
import { ResponseData } from '../contracts/type/ResponseData';
import Entity from './Entity';
export default class ResponseBody<D extends ResponseData> extends Entity {
    status: string;
    message: string;
    data?: (D);
    error?: Array<IResponseError>;
    constructor({ status, message, data, error }: IResponse<D>);
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
