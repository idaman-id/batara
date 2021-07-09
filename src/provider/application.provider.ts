
import bodyParser from 'body-parser'; 
import createLocaleMiddleware from 'express-locale';

import App from '../application';
import IProvider from '../interface/provider.interface';
import Provider from './provider';

export default abstract class Application extends Provider implements IProvider
{

  constructor(app: App)
  {
    super(app);
    this.doRegister();
  }

  private doRegister()
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
  }

}
