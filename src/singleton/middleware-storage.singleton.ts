
import Middleware from "../interface/middleware.interface";
import MiddlewareItem from "../interface/middleware-item.interface";

export default class MiddlewareStorage
{

  private static storage: MiddlewareStorage;
  private middlewares: Array<MiddlewareItem> = [];

  private constructor()
  {
    MiddlewareStorage.storage = this;
  }

  static get instance(): MiddlewareStorage
  {
    if (!MiddlewareStorage.storage) {
      return new MiddlewareStorage();
    }
    return MiddlewareStorage.storage;
  }

  public registerMiddleware(name: string, middleware: Middleware): void
  {
    if (this.isMiddlewareRegistered(name)) {
      throw new Error(`Middleware ${name} is already registered`);
    }
    this.middlewares.push({ name: name, middleware: middleware });
  }

  public get middlewareNames(): Array<string>
  {
    return this.middlewares.map(middleware => {
      return middleware.name;
    });
  }

  public isMiddlewareRegistered(name: string): boolean
  {
    const isRegistered = this.middlewares.find((middleware) => {
      return middleware.name === name;
    });
    return (isRegistered !== undefined);
  }

  public findMiddlewareByName(name: string): Middleware | null
  {
    const middlewareItem = this.middlewares.find((middleware) => {
      return middleware.name === name;
    });
    if (!middlewareItem) {
      return null;
    }
    return middlewareItem.middleware;
  }

  public clearMiddlewares(): void
  {
    this.middlewares = [];
  }

}
