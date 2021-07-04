"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var moment_1 = __importDefault(require("moment"));
var morgan_1 = __importDefault(require("morgan"));
var rotating_file_stream_1 = require("rotating-file-stream");
var log_format_factory_1 = __importDefault(require("./log-format.factory"));
var AccessLog = /** @class */ (function () {
    function AccessLog() {
    }
    AccessLog.prototype.make = function (setting) {
        var formats = new log_format_factory_1.default().make();
        var fileName = setting.fileName || moment_1.default().format('YYYY-MM-DD') + ".log";
        var options = {
            stream: rotating_file_stream_1.createStream(fileName, {
                interval: setting.interval,
                path: setting.path
            })
        };
        return morgan_1.default(formats, options);
    };
    return AccessLog;
}());
exports.default = AccessLog;
