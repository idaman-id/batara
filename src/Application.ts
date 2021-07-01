
global.__basedir = __dirname;

import express from 'express';
import IApplication from './contracts/interface/Application';
import ILanguage from './contracts/interface/ValidationLanguage';

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

  public instance: express.Application;
  private setting: IApplication;

  constructor(setting: IApplication)
  {
    this.instance = express();
    this.setting = setting;
  }

  start(): void
  {
    this.instance.listen(this.setting.port, this.setting.host, () => {
      console.info(`[${this.setting.environment.toUpperCase()}] ${this.setting.name} is running on ${this.setting.host}:${this.setting.port}`);
    });
  }

}
