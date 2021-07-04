"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var moment_1 = __importDefault(require("moment"));
var morgan_1 = __importDefault(require("morgan"));
var path_1 = __importDefault(require("path"));
var rotating_file_stream_1 = require("rotating-file-stream");
var AccessLog = /** @class */ (function () {
    function AccessLog() {
    }
    AccessLog.prototype.make = function (setting) {
        var formats = function (tokens, req, res) {
            return [
                tokens['remote-addr'](req, res),
                tokens['remote-user'](req, res),
                tokens.date(req, res, 'iso'),
                "HTTP/" + tokens['http-version'](req, res),
                tokens.method(req, res),
                tokens.url(req, res),
                tokens.status(req, res),
                tokens['response-time'](req, res) + "ms",
                "LNG: " + (tokens.res(req, res, 'content-length')),
                "REF: " + (tokens.referrer(req, res)),
                "UA: " + (tokens['user-agent'](req, res)),
            ].join(' | ');
        };
        var options = {
            stream: rotating_file_stream_1.createStream(moment_1.default().format('YYYY-MM-DD') + ".log", {
                interval: setting.interval,
                path: path_1.default.join("" + __basedir, setting.path)
            })
        };
        return morgan_1.default(formats, options);
    };
    return AccessLog;
}());
exports.default = AccessLog;
