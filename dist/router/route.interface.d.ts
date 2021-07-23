import { Handler, HttpMethod } from './http.interface';
export default interface Route {
    path: string;
    method: HttpMethod;
    handler: Handler;
    middlewares?: Array<string>;
}
