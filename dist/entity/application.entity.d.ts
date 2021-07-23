import { Handler } from '../router/http.interface';
import ApplicationSetting from './application-setting.interface';
import Language from '../validator/validation-language.interface';
import Entity from "./entity";
declare global {
    namespace Express {
        interface Request {
            _language: Language;
        }
    }
}
export default class Application extends Entity {
    private instance;
    private setting;
    private server;
    constructor(setting: ApplicationSetting);
    start(): Promise<void>;
    stop(): Promise<void>;
    isStarted(): boolean;
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
