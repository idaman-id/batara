/// <reference types="node" />
import { Handler } from 'express';
import Factory from '../interface/factory.interface';
import { AccessLogSetting } from '../type/access-log-setting.type';
export default class AccessLog implements Factory<Handler> {
    make(setting: AccessLogSetting): (req: import("http").IncomingMessage, res: import("http").ServerResponse, callback: (err?: Error | undefined) => void) => void;
}
