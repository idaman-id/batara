"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var locale_translation_factory_1 = __importDefault(require("../factory/locale-translation.factory"));
var language_middleware_1 = __importDefault(require("../middleware/language.middleware"));
var validation_middleware_1 = __importDefault(require("../middleware/validation.middleware"));
var Controller = /** @class */ (function () {
    function Controller() {
    }
    Controller.prototype.run = function () {
        return [
            new language_middleware_1.default().handle,
            this.translate,
            this.authorize,
            this.authorizeHandler,
            this.rules(),
            new validation_middleware_1.default().handle,
            this.validationHandler,
            this.handle
        ];
    };
    Controller.prototype.authorize = function (req, res, next) {
        return next();
    };
    Controller.prototype.rules = function () {
        return [];
    };
    Controller.prototype.attributes = function () {
        return {};
    };
    Controller.prototype.messages = function () {
        return {};
    };
    Controller.prototype.translate = function (req, res, next) {
        /**
         * CHOOSE TRANSLATION START WITH LOCALE
         * E.G:
         * "id.custom_field": "Bidang isian kustom"
         * "en.custom_field": "Custom field"
         *
         * When locale is "id" we choose "id.custom_field", etc
         * When there is no translation then we set to empty object
         */
        var locale = req.locale.language;
        req._language.attributes = new locale_translation_factory_1.default().make(locale, this.attributes());
        req._language.messages = new locale_translation_factory_1.default().make(locale, this.messages());
        return next();
    };
    return Controller;
}());
exports.default = Controller;
