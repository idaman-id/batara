"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var Application = /** @class */ (function () {
    function Application(setting) {
        this.instance = express_1.default();
        this.setting = setting;
    }
    Application.prototype.start = function () {
        var _this = this;
        this.instance.listen(this.setting.port, this.setting.host, function () {
            console.info("[" + _this.setting.environment.toUpperCase() + "] " + _this.setting.name + " is running on " + _this.setting.host + ":" + _this.setting.port);
        });
    };
    Application.prototype.use = function (handler) {
        this.instance.use(handler);
    };
    Application.prototype.get = function (path, handlers) {
        this.instance.get(path, handlers);
    };
    Application.prototype.post = function (path, handlers) {
        this.instance.post(path, handlers);
    };
    Application.prototype.put = function (path, handlers) {
        this.instance.put(path, handlers);
    };
    Application.prototype.delete = function (path, handlers) {
        this.instance.delete(path, handlers);
    };
    Application.prototype.patch = function (path, handlers) {
        this.instance.patch(path, handlers);
    };
    Application.prototype.copy = function (path, handlers) {
        this.instance.copy(path, handlers);
    };
    Application.prototype.head = function (path, handlers) {
        this.instance.head(path, handlers);
    };
    Application.prototype.options = function (path, handlers) {
        this.instance.options(path, handlers);
    };
    Object.defineProperty(Application.prototype, "routerStacks", {
        get: function () {
            return this.instance._router.stack || [];
        },
        enumerable: false,
        configurable: true
    });
    return Application;
}());
exports.default = Application;
