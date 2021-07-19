
import { Handler } from "../interface/http.interface";
import MiddlewareStorage from "../singleton/middleware-storage.singleton";
import Builder from "../interface/builder.interface";

export default class RouteBuilder implements Builder<Array<Handler>>
{

  private routes: Array<any> = [];
  private storage: MiddlewareStorage;

  constructor()
  {
    this.storage = MiddlewareStorage.instance;
  }

  public addHandler(handler: Handler): RouteBuilder 
  {
    this.routes.push(handler);
    return this;
  }

  public addMiddleware(name: string): RouteBuilder
  {
    const middleware = this.storage.findMiddlewareByName(name);
    if (!middleware) {
      throw new Error(`Middleware ${name} is not available`);
    }
    this.routes.push(middleware.handle);
    
    return this;
  }

  public addMiddlewares(names: Array<string>): RouteBuilder
  {
    names.forEach(name => {
      this.addMiddleware(name);
    });
    return this;
  }

  public getResult(): Array<Handler>
  {
    return this.routes;
  }

}
