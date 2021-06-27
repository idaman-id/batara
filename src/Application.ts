
global.__basedir = __dirname;

import express from 'express';
import IApplication from './contracts/interface/Application';
import ILanguage from './contracts/interface/ValidationLanguage';
import Provider from './providers/Provider';

declare global 
{
  
  var __basedir: string;

  namespace Express 
  {
    export interface Request 
    {
      _language: ILanguage
    }
  }
}

export default class Application
{

  instance: express.Application;
  setting: IApplication;
  providers: Array<Provider>;

  constructor(setting: IApplication, providers: Array<Provider>)
  {
    this.instance = express();
    this.setting = setting;
    this.providers = providers;
  }

  setup(): void
  {
    this.providers.forEach(provider => {
      provider.register();
    });
  }

  start(): void
  {
    this.setup();
    this.instance.listen(this.setting.port, this.setting.host, () => {
      console.info(`[${this.setting.environment.toUpperCase()}] ${this.setting.name} is running on ${this.setting.host}:${this.setting.port}`);
    });
  }

}
