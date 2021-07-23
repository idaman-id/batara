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
var route_builder_1 = __importDefault(require("../router/route.builder"));
var provider_1 = __importDefault(require("./provider"));
var Route = /** @class */ (function (_super) {
    __extends(Route, _super);
    function Route() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Route.prototype.register = function () {
        this.registerTemplate();
        this.registerRoute();
    };
    Route.prototype.registerTemplate = function () {
        var _this = this;
        this.routes().forEach(function (route) {
            var builder = new route_builder_1.default();
            if (route.hasOwnProperty("middlewares")) {
                builder.addMiddlewares(route.middlewares || []);
            }
            builder.addHandler(route.handler);
            var routes = builder.getResult();
            _this.app[route.method](route.path, routes);
        });
        this.app.use(this.errorHandler());
    };
    return Route;
}(provider_1.default));
exports.default = Route;
