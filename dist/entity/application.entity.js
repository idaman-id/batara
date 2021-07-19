"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var entity_1 = __importDefault(require("./entity"));
var Application = /** @class */ (function (_super) {
    __extends(Application, _super);
    function Application(setting) {
        var _this = _super.call(this) || this;
        _this.instance = express_1.default();
        _this.server = null;
        _this.setting = setting;
        return _this;
    }
    Application.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.server !== null) {
                    return [2 /*return*/, Promise.reject(new Error("Application is already started"))];
                }
                this.server = this.instance.listen(this.setting.port, this.setting.host);
                console.info("[" + this.setting.environment.toUpperCase() + "] " + this.setting.name + " is running on " + this.setting.host + ":" + this.setting.port);
                return [2 /*return*/, Promise.resolve(undefined)];
            });
        });
    };
    Application.prototype.stop = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.server === null) {
                            return [2 /*return*/, Promise.reject(new Error("Application is already stopped"))];
                        }
                        return [4 /*yield*/, this.server.close()];
                    case 1:
                        _a.sent();
                        this.server = null;
                        console.info("[" + this.setting.environment.toUpperCase() + "] " + this.setting.name + " running on " + this.setting.host + ":" + this.setting.port + " was stopped");
                        return [2 /*return*/, Promise.resolve(undefined)];
                }
            });
        });
    };
    Application.prototype.isStarted = function () {
        return this.server !== null;
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
            if (!this.instance || !this.instance._router || !this.instance._router.stack) {
                return [];
            }
            return this.instance._router.stack;
        },
        enumerable: false,
        configurable: true
    });
    return Application;
}(entity_1.default));
exports.default = Application;
