
import { Controller } from '../controller';
import IRoute from '../interface/route.interface';

import Provider from './provider';

export default abstract class Route extends Provider
{

  public register()
  {    
    this.routes().forEach(route => {
      this.app.instance[route.method](route.path, route.handler.run());
    });
    this.app.instance.use(this.errorHandler().handle);
  }

  abstract routes(): Array<IRoute>;
  abstract errorHandler(): Controller;
  
}

