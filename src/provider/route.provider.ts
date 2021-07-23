
import { Handler } from '../router/http.interface';
import RouteBuilder from '../router/route.builder';
import RouteItem from '../router/route.interface';

import Provider from './provider';

export default abstract class Route extends Provider
{

  public abstract routes(): Array<RouteItem>;
  public abstract errorHandler(): Handler;
  protected abstract registerRoute(): void;
  
  public register()
  {
    this.registerTemplate();
    this.registerRoute();
  }

  private registerTemplate(): void
  {
    this.routes().forEach(route => {
      const builder = new RouteBuilder();
      
      if (route.hasOwnProperty("middlewares")) {
        builder.addMiddlewares(route.middlewares || []);
      }
      builder.addHandler(route.handler);
      
      const routes = builder.getResult();
      this.app[route.method](route.path, routes);
    });
    this.app.use(this.errorHandler());
  }

}
