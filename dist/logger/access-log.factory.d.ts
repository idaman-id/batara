/// <reference types="node" />
import { LogSetting } from './log.type';
import { Handler } from '../router/http.interface';
import Factory from '../contract/factory.interface';
export default class AccessLog implements Factory<Handler> {
    make(setting: LogSetting): (req: import("http").IncomingMessage, res: import("http").ServerResponse, callback: (err?: Error | undefined) => void) => void;
}
