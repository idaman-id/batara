
import App from '../application';
import IProvider from '../interface/provider.interface';

export default abstract class Provider implements IProvider
{

  app: App;

  constructor(app: App)
  {
    this.app = app;
  }

  abstract register(): void;

}