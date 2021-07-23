import IMiddleware from "../contract/middleware.interface";
export default interface MiddlewareSetting {
    name: string;
    handler: (new () => IMiddleware);
}
