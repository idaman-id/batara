import Middleware from "../contract/middleware.interface";
export default class MiddlewareStorage {
    private static storage;
    private middlewares;
    private constructor();
    static get instance(): MiddlewareStorage;
    registerMiddleware(name: string, middleware: Middleware): void;
    get middlewareNames(): Array<string>;
    isMiddlewareRegistered(name: string): boolean;
    findMiddlewareByName(name: string): Middleware | null;
    clearMiddlewares(): void;
}
