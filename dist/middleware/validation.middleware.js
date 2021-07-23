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
var express_validator_1 = require("express-validator");
var validation_error_1 = __importDefault(require("../error/validation.error"));
var middleware_1 = __importDefault(require("./middleware"));
var error_translation_factory_1 = __importDefault(require("../validator/error-translation.factory"));
var error_format_factory_1 = __importDefault(require("../validator/error-format.factory"));
/**
 * @description
 * Built in Validation middleware so every validation rules
 * specified in Controllers are validated
 * If there is error then this middleware will inject Error object
 */
var Validation = /** @class */ (function (_super) {
    __extends(Validation, _super);
    function Validation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Validation.prototype.handle = function (req, res, next) {
        var error = null;
        var result = express_validator_1.validationResult(req);
        if (!result.isEmpty()) {
            var translatedErrors = new error_translation_factory_1.default().make(req._language, result.array());
            var formatedErrors = new error_format_factory_1.default().make(translatedErrors);
            error = new validation_error_1.default("invalid data", formatedErrors);
        }
        return next(error);
    };
    return Validation;
}(middleware_1.default));
exports.default = Validation;
