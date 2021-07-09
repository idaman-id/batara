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
        var errors = express_validator_1.validationResult(req);
        if (!errors.isEmpty()) {
            var translatedErrors = Validation.translateErrors(req, errors.array());
            var formatedErrors = Validation.formatErrors(translatedErrors);
            error = new validation_error_1.default("invalid data", formatedErrors);
        }
        return next(error);
    };
    Validation.formatErrors = function (errors) {
        return errors.map(function (error) {
            return {
                message: error.msg,
                field: error.param
            };
        });
    };
    Validation.translateErrors = function (req, errors) {
        errors.forEach(function (error) {
            /**
             * If error message contain value to be replaced marked with `:`, e.g:
             * - `min:1`
             * - `between:1980,2021`
             * - `invalid_value`
             * - etc
             *
             * The first splited message will be the `key`,
             * and the later will be the supplied `values`, e.g:
             * - key: `min`, `between`, `invalid_value`
             * - values: `1`, `1990-2021`, ``
             */
            var maps = error.msg.split(":");
            var locale = req._language.locale;
            var key = maps[0]; //this is guaranteed since `"".split(":")`; is returning `[""]`
            var values = maps.length > 1 ? maps[1].split(",") : [];
            /**
             * Merge `setting_messages` from default translation and `messages` if specified
             * Extend current polyglot translation to the merged one
             *
             * P.S:
             * Every request may have different `messages`
             * because it's specified from Controllers if specified
             */
            var customMessages = Object.assign(req._language.setting_messages, req._language.messages);
            req._language.polyglot.extend(customMessages);
            /**
             * If there is translation for this particular `locale.key`
             * e.g:
             * - `id.min`
             * - `id.invalid_value`
             */
            if (customMessages.hasOwnProperty(locale + "." + key)) {
                /**
                 * Merge `setting_attributes` from default translation and `attributes` if specified
                 * Translate `key` message according to the specified language `locale`
                 * Replace `error.msg` with it's custom translation and modifier
                 */
                var customAttributes = Object.assign(req._language.setting_attributes, req._language.attributes);
                var translatedMessage = req._language.polyglot.t(locale + "." + key);
                error.msg = Validation.modifyMessage(req, error.param, translatedMessage, customAttributes, values);
            }
        });
        return errors;
    };
    Validation.modifyMessage = function (req, field, message, customAttributes, messageValues) {
        /**
        * If current `field` is an array with pattern, e.g:
        * - attachments[m]file_id => attachments.*.file_id
        * - users[m]attachments[n]file_id => users.*.attachments.*.file_id
        * - etc
        * Replace with `.*.`
        */
        var isArray = field.match(/\[\d+\]\./) != null;
        if (isArray)
            field = field.replace(/\[\d+\]\./g, '.*.');
        /**
         * If there is key `locale.field` in translation file
         *  Replace with its translation value
         * Else
         *  Replace with its generic translation
         */
        var locale = req._language.locale;
        var messageReplacer = req._language.original_attributes[locale + ".attribute"];
        if (customAttributes.hasOwnProperty(locale + "." + field)) {
            messageReplacer = customAttributes[locale + "." + field];
        }
        message = message.replace(":attribute", messageReplacer);
        /**
         * Foreach value written in `messages` validation rule, e.g:
         * - `between:1,0` => [1, 0]
         * - `min:1` => [1]
         * Replace each value one by one from the first founded word
         */
        for (var index = 0; index < messageValues.length; index++) {
            message = message.replace(":value", messageValues[index]);
        }
        /**
         * If there is :value left, e.g:
         * - translation not available
         * - values are not specified = between:1 (not specifying two parameter)
         * Replace with its generic translation
         */
        message = message.replace(":value", req._language.original_attributes[locale + ".value"]);
        return message;
    };
    return Validation;
}(middleware_1.default));
exports.default = Validation;
