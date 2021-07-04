
import bodyParser from 'body-parser'; 
import createLocaleMiddleware from 'express-locale';

import IProvider from '../interface/provider.interface';
import Provider from './provider';

export default class Application extends Provider implements IProvider
{

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
  }

}
