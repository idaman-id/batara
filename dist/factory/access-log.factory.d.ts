/// <reference types="node" />
import { Handler } from 'express';
import { AccessLogSetting } from '../type/log.type';
import Factory from '../interface/factory.interface';
export default class AccessLog implements Factory<Handler> {
    make(setting: AccessLogSetting): (req: import("http").IncomingMessage, res: import("http").ServerResponse, callback: (err?: Error | undefined) => void) => void;
}
