"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MiddlewareStorage = /** @class */ (function () {
    function MiddlewareStorage() {
        this.middlewares = [];
        MiddlewareStorage.storage = this;
    }
    Object.defineProperty(MiddlewareStorage, "instance", {
        get: function () {
            if (!MiddlewareStorage.storage) {
                return new MiddlewareStorage();
            }
            return MiddlewareStorage.storage;
        },
        enumerable: false,
        configurable: true
    });
    MiddlewareStorage.prototype.registerMiddleware = function (name, middleware) {
        if (this.isMiddlewareRegistered(name)) {
            throw new Error("Middleware " + name + " is already registered");
        }
        this.middlewares.push({ name: name, middleware: middleware });
    };
    Object.defineProperty(MiddlewareStorage.prototype, "middlewareNames", {
        get: function () {
            return this.middlewares.map(function (middleware) {
                return middleware.name;
            });
        },
        enumerable: false,
        configurable: true
    });
    MiddlewareStorage.prototype.isMiddlewareRegistered = function (name) {
        var isRegistered = this.middlewares.find(function (middleware) {
            return middleware.name === name;
        });
        return (isRegistered !== undefined);
    };
    MiddlewareStorage.prototype.findMiddlewareByName = function (name) {
        var middlewareItem = this.middlewares.find(function (middleware) {
            return middleware.name === name;
        });
        if (!middlewareItem) {
            return null;
        }
        return middlewareItem.middleware;
    };
    MiddlewareStorage.prototype.clearMiddlewares = function () {
        this.middlewares = [];
    };
    return MiddlewareStorage;
}());
exports.default = MiddlewareStorage;
