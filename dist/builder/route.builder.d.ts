import { Handler } from "../interface/http.interface";
import Builder from "../interface/builder.interface";
export default class RouteBuilder implements Builder<Array<Handler>> {
    private routes;
    private storage;
    constructor();
    addHandler(handler: Handler): RouteBuilder;
    addMiddleware(name: string): RouteBuilder;
    addMiddlewares(names: Array<string>): RouteBuilder;
    getResult(): Array<Handler>;
}
