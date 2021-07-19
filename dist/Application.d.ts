import { Handler } from 'express';
import IApplicationSetting from './interface/application-setting.interface';
import ILanguage from './interface/validation-language.interface';
declare global {
    namespace Express {
        interface Request {
            _language: ILanguage;
        }
    }
}
export default class Application {
    private instance;
    private setting;
    constructor(setting: IApplicationSetting);
    start(): void;
    use(handler: Handler): void;
    get(path: string, handlers: Array<Handler>): void;
    post(path: string, handlers: Array<Handler>): void;
    put(path: string, handlers: Array<Handler>): void;
    delete(path: string, handlers: Array<Handler>): void;
    patch(path: string, handlers: Array<Handler>): void;
    copy(path: string, handlers: Array<Handler>): void;
    head(path: string, handlers: Array<Handler>): void;
    options(path: string, handlers: Array<Handler>): void;
    get routerStacks(): Array<Handler>;
}
