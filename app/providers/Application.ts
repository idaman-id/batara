
import bodyParser from 'body-parser'; 
import createLocaleMiddleware from 'express-locale';

import AccessLogFactory from '../factories/AccessLog';
import App from '../Application';
import IProvider from '../contracts/interface/Provider';

export default class Application implements IProvider
{

  app: App;

  constructor(app: App)
  {
    this.app = app;
  }

  register()
  {    
    this.app.instance.use(bodyParser.urlencoded({ extended: false }));
    this.app.instance.use(bodyParser.json());
    this.app.instance.use(createLocaleMiddleware({
      priority: ["query", "accept-language", "default"],
      default: "id-ID",
      query: {
        name: "locale"
      },
      requestProperty: "locale"
    }));

    const accessLog = new AccessLogFactory().make({
      interval: '1d',
      path: '/storages/log/access'
    });
    this.app.instance.use(accessLog);
  }

}
