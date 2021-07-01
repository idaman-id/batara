/// <reference types="node" />
import { AccessLogSetting } from '../contracts/type/AccessLogSetting';
export default class AccessLog {
    make(setting: AccessLogSetting): (req: import("http").IncomingMessage, res: import("http").ServerResponse, callback: (err?: Error | undefined) => void) => void;
}
