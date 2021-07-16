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
    return Application;
}());
exports.default = Application;
