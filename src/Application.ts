
global.__basedir = __dirname;

import express from 'express';
import IApplicationSetting from './interface/application-setting.interface';
import ILanguage from './interface/validation-language.interface';

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
  private setting: IApplicationSetting;

  constructor(setting: IApplicationSetting)
  {
    this.instance = express();
    this.setting = setting;
  }

  public start(): void
  {
    this.instance.listen(this.setting.port, this.setting.host, () => {
      console.info(`[${this.setting.environment.toUpperCase()}] ${this.setting.name} is running on ${this.setting.host}:${this.setting.port}`);
    });
  }

}
