"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var middleware_storage_singleton_1 = __importDefault(require("../singleton/middleware-storage.singleton"));
var RouteBuilder = /** @class */ (function () {
    function RouteBuilder() {
        this.routes = [];
        this.storage = middleware_storage_singleton_1.default.instance;
    }
    RouteBuilder.prototype.addHandler = function (handler) {
        this.routes.push(handler);
        return this;
    };
    RouteBuilder.prototype.addMiddleware = function (name) {
        var middleware = this.storage.findMiddlewareByName(name);
        if (!middleware) {
            throw new Error("Middleware " + name + " is not available");
        }
        this.routes.push(middleware.handle);
        return this;
    };
    RouteBuilder.prototype.addMiddlewares = function (names) {
        var _this = this;
        names.forEach(function (name) {
            _this.addMiddleware(name);
        });
        return this;
    };
    RouteBuilder.prototype.getResult = function () {
        return this.routes;
    };
    return RouteBuilder;
}());
exports.default = RouteBuilder;
