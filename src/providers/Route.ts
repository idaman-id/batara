
import { Controller } from '../contracts/interface';
import IProvider from '../contracts/interface/Provider';
import IRoute from '../contracts/interface/Route';

import Provider from './Provider';

export default abstract class Route extends Provider implements IProvider
{

  register()
  {    
    this.routes().forEach(route => {
      this.app.instance[route.method](route.path, route.handler.run());
    });
    this.app.instance.use(this.errorHandler().handle);
  }

  abstract routes(): Array<IRoute>;
  abstract errorHandler(): Controller;
  
}

