/// <reference types="node" />
import { FormatFn } from 'morgan';
import Factory from '../interface/factory.interface';
export default class LogFormat implements Factory<FormatFn> {
    make(): FormatFn<import("http").IncomingMessage, import("http").ServerResponse>;
}
