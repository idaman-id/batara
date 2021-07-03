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
var Entity_1 = __importDefault(require("./Entity"));
var ResponseBody = /** @class */ (function (_super) {
    __extends(ResponseBody, _super);
    function ResponseBody(_a) {
        var status = _a.status, message = _a.message, data = _a.data, error = _a.error;
        var _this = _super.call(this) || this;
        _this.status = "SUCCESS" /* SUCCESS */;
        _this.message = "ok" /* SUCCESS */;
        _this.status = status;
        _this.message = message;
        _this.data = data;
        _this.error = error;
        return _this;
    }
    ResponseBody.prototype.setStatus = function (status) {
        this.status = status;
    };
    ResponseBody.prototype.setMessage = function (message) {
        this.message = message;
    };
    ResponseBody.prototype.setData = function (data) {
        this.data = data;
    };
    ResponseBody.prototype.setError = function (error) {
        this.error = error;
    };
    ResponseBody.prototype.success = function () {
        this.status = "SUCCESS" /* SUCCESS */;
        this.message = "ok" /* SUCCESS */;
    };
    ResponseBody.prototype.unexpected = function () {
        this.status = "ERROR" /* ERROR */;
        this.message = "error occured" /* ERROR */;
    };
    ResponseBody.prototype.invalid = function () {
        this.status = "INVALID_DATA" /* INVALID_DATA */;
        this.message = "invalid data" /* INVALID_DATA */;
    };
    ResponseBody.prototype.forbidden = function () {
        this.status = "FORBIDDEN" /* FORBIDDEN */;
        this.message = "forbidden access" /* FORBIDDEN */;
    };
    ResponseBody.prototype.notFound = function () {
        this.status = "NOT_FOUND" /* NOT_FOUND */;
        this.message = "resource notfound" /* NOT_FOUND */;
    };
    ResponseBody.prototype.unauthenticate = function () {
        this.status = "UNAUTHENTICATE" /* UNAUTHENTICATE */;
        this.message = "unauthenticate access" /* UNAUTHENTICATE */;
    };
    ResponseBody.prototype.badGateway = function () {
        this.status = "BAD_GATEWAY" /* BAD_GATEWAY */;
        this.message = "bad gateway" /* BAD_GATEWAY */;
    };
    ResponseBody.prototype.requestTimeout = function () {
        this.status = "REQUEST_TIMEOUT" /* REQUEST_TIMEOUT */;
        this.message = "request timeout" /* REQUEST_TIMEOUT */;
    };
    return ResponseBody;
}(Entity_1.default));
exports.default = ResponseBody;
