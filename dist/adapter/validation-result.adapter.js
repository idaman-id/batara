"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_validator_1 = require("express-validator");
var error_translation_factory_1 = __importDefault(require("../factory/error-translation.factory"));
var error_format_factory_1 = __importDefault(require("../factory/error-format.factory"));
var ValidationResult = /** @class */ (function () {
    function ValidationResult(request) {
        this.request = request;
        this.error = express_validator_1.validationResult(request);
    }
    ValidationResult.prototype.isError = function () {
        return !this.error.isEmpty();
    };
    ValidationResult.prototype.isSuccess = function () {
        return !this.isError();
    };
    Object.defineProperty(ValidationResult.prototype, "formatedErrors", {
        get: function () {
            var translatedErrors = new error_translation_factory_1.default().make(this.request._language, this.error.array());
            return new error_format_factory_1.default().make(translatedErrors);
        },
        enumerable: false,
        configurable: true
    });
    return ValidationResult;
}());
exports.default = ValidationResult;
