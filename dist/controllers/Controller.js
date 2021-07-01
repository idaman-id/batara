"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Language_1 = __importDefault(require("../middlewares/Language"));
var Validation_1 = __importDefault(require("../middlewares/Validation"));
var Controller = /** @class */ (function () {
    function Controller() {
    }
    Controller.prototype.authorize = function (req, res, next) {
        next();
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
    Controller.prototype.run = function () {
        var _this = this;
        return [
            new Language_1.default().handle,
            function (req, res, next) {
                var locale = req.locale.language;
                /**
                 * CHOOSE TRANSLATION START WITH LOCALE
                 * E.G:
                 * "id.custom_field": "Bidang isian kustom"
                 * "en.custom_field": "Custom field"
                 *
                 * When locale is "id" we choose "id.custom_field", etc
                 * When there is no translation then we set to empty object
                 */
                var attributes = _this.attributes();
                for (var attributeKey in attributes) {
                    if (!attributeKey.startsWith(locale)) {
                        delete attributes[attributeKey];
                    }
                }
                var messages = _this.messages();
                for (var attributeKey in messages) {
                    if (!attributeKey.startsWith(locale)) {
                        delete messages[attributeKey];
                    }
                }
                req._language.attributes = attributes;
                req._language.messages = messages;
                next();
            },
            this.authorize,
            this.rules(),
            new Validation_1.default().handle,
            this.handle
        ];
    };
    return Controller;
}());
exports.default = Controller;
