
import { Controller } from '../controller';
import IRoute from '../interface/route.interface';

import Provider from './provider';

export default abstract class Route extends Provider
{

  abstract routes(): Array<IRoute>;
  abstract errorHandler(): Controller;
  
  public register()
  {
    this.registerTemplate();
    this.registerRoute();
  }

  protected abstract registerRoute(): void;

  private registerTemplate(): void
  {
    this.routes().forEach(route => {
      this.app.instance[route.method](route.path, route.handler.run());
    });
    this.app.instance.use(this.errorHandler().handle);
  }

}
