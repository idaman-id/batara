
import { Controller } from '../controller';
import IRoute from '../interface/route.interface';

import Provider from './provider';

export default abstract class Route extends Provider
{

  public abstract routes(): Array<IRoute>;
  public abstract errorHandler(): Controller;
  protected abstract registerRoute(): void;
  
  public register()
  {
    this.registerTemplate();
    this.registerRoute();
  }

  private registerTemplate(): void
  {
    this.routes().forEach(route => {
      this.app.instance[route.method](route.path, route.handler.run());
    });
    this.app.instance.use(this.errorHandler().handle);
  }

}
