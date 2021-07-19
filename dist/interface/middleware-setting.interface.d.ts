import IMiddleware from "./middleware.interface";
export default interface MiddlewareSetting {
    name: string;
    handler: (new () => IMiddleware);
}
