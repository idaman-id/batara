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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var body_parser_1 = __importDefault(require("body-parser"));
var express_locale_1 = __importDefault(require("express-locale"));
var AccessLog_1 = __importDefault(require("../factories/AccessLog"));
var Provider_1 = __importDefault(require("./Provider"));
var Application = /** @class */ (function (_super) {
    __extends(Application, _super);
    function Application() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Application.prototype.register = function () {
        this.app.instance.use(body_parser_1.default.urlencoded({ extended: false }));
        this.app.instance.use(body_parser_1.default.json());
        this.app.instance.use(express_locale_1.default({
            priority: ["query", "accept-language", "default"],
            default: "id-ID",
            query: {
                name: "locale"
            },
            requestProperty: "locale"
        }));
        var accessLog = new AccessLog_1.default().make({
            interval: '1d',
            path: '/storages/log/access'
        });
        this.app.instance.use(accessLog);
    };
    return Application;
}(Provider_1.default));
exports.default = Application;
