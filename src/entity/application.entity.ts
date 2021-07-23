
import express from 'express';
import { Server } from 'http';

import { Handler } from '../router/http.interface';
import ApplicationSetting from './application-setting.interface';
import Language from '../validator/validation-language.interface';
import Entity from "./entity";

declare global 
{
  
  namespace Express 
  {
    export interface Request 
    {
      _language: Language
    }
  }
}

export default class Application extends Entity
{

  private instance: express.Application;
  private setting: ApplicationSetting;
  private server: Server | null;

  constructor(setting: ApplicationSetting)
  {
    super();
    this.instance = express();
    this.server = null;
    this.setting = setting;
  }

  public async start(): Promise<void>
  {
    if (this.server !== null) {
      return Promise.reject(new Error("Application is already started"));
    }
    this.server = this.instance.listen(this.setting.port, this.setting.host);
    console.info(`[${this.setting.environment.toUpperCase()}] ${this.setting.name} is running on ${this.setting.host}:${this.setting.port}`);
    return Promise.resolve(undefined);
  }

  public async stop(): Promise<void>
  {
    if (this.server === null) {
      return Promise.reject(new Error("Application is already stopped"));
    }
    await this.server.close();
    this.server = null;
    console.info(`[${this.setting.environment.toUpperCase()}] ${this.setting.name} running on ${this.setting.host}:${this.setting.port} was stopped`);
    return Promise.resolve(undefined);
  }

  public isStarted(): boolean
  {
    return this.server !== null;
  }

  public use(handler: Handler): void
  {
    this.instance.use(handler);
  }

  public get(path: string, handlers: Array<Handler>): void
  {
    this.instance.get(path, handlers);
  }

  public post(path: string, handlers: Array<Handler>): void
  {
    this.instance.post(path, handlers);
  }

  public put(path: string, handlers: Array<Handler>): void
  {
    this.instance.put(path, handlers);
  }

  public delete(path: string, handlers: Array<Handler>): void
  {
    this.instance.delete(path, handlers);
  }

  public patch(path: string, handlers: Array<Handler>): void
  {
    this.instance.patch(path, handlers);
  }

  public copy(path: string, handlers: Array<Handler>): void
  {
    this.instance.copy(path, handlers);
  }

  public head(path: string, handlers: Array<Handler>): void
  {
    this.instance.head(path, handlers);
  }

  public options(path: string, handlers: Array<Handler>): void
  {
    this.instance.options(path, handlers);
  }

  public get routerStacks(): Array<Handler>
  {
    if (!this.instance || !this.instance._router || !this.instance._router.stack) {
      return [];
    }
    return this.instance._router.stack;
  }

}
