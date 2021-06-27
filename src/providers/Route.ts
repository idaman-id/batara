
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
  }

  abstract routes(): Array<IRoute>;
  
}

