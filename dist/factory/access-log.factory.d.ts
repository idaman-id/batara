/// <reference types="node" />
import { LogSetting } from '../type/log.type';
import { Handler } from '../interface/http.interface';
import Factory from '../interface/factory.interface';
export default class AccessLog implements Factory<Handler> {
    make(setting: LogSetting): (req: import("http").IncomingMessage, res: import("http").ServerResponse, callback: (err?: Error | undefined) => void) => void;
}
