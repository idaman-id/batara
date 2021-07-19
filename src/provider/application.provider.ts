
import bodyParser from 'body-parser'; 
import createLocaleMiddleware from 'express-locale';

import App from '../entity/application.entity';
import Provider from './provider';

export default abstract class Application extends Provider
{

  constructor(app: App)
  {
    super(app);
  }

  public register()
  {
    this.registerTemplate();
    this.registerApp();
  }

  protected abstract registerApp(): void;

  private registerTemplate()
  {
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(bodyParser.json());
    this.app.use(createLocaleMiddleware({
      priority: ["query", "accept-language", "default"],
      default: "id-ID",
      query: {
        name: "locale"
      },
      requestProperty: "locale"
    }));
  }

}
