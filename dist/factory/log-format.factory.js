"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LogFormat = /** @class */ (function () {
    function LogFormat() {
    }
    LogFormat.prototype.make = function () {
        var logFormat = function (tokens, req, res) {
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
        return logFormat;
    };
    return LogFormat;
}());
exports.default = LogFormat;
