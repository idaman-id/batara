
import App from '../Application';
import IProvider from '../contracts/interface/Provider';
import IRoute from '../contracts/interface/Route';
import { HttpMethod } from '../configs/Constant';

import HomeController from '../controllers/component/Home';
import NotFoundController from '../controllers/component/NotFound';
import TestController from '../controllers/v1/Test';

export default class Route implements IProvider
{

  app: App;

  constructor(app: App)
  {
    this.app = app;
  }

  register()
  {    
    this.routes().forEach(route => {
      this.app.instance[route.method](route.path, route.handler.run());
    });
    this.app.instance.use(new NotFoundController().handle);
  }

  routes(): Array<IRoute>
  {
    return [
      {
        method: HttpMethod.GET,
        path: "/",
        handler: new HomeController
      },
      {
        method: HttpMethod.GET,
        path: "/v1/test",
        handler: new TestController
      }
    ];
  }

}

