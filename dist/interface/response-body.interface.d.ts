import IResponseError from './response-error.interface';
export default interface ResponseBody<Data> {
    status: string;
    message: string;
    data?: (Data);
    error?: Array<IResponseError>;
}
