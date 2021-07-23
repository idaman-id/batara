"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var node_polyglot_1 = __importDefault(require("node-polyglot"));
var language_constant_1 = require("./language.constant");
var locale_translation_factory_1 = __importDefault(require("./locale-translation.factory"));
var LanguageDetection = /** @class */ (function () {
    function LanguageDetection() {
    }
    LanguageDetection.prototype.make = function (locale) {
        var originalMessages = JSON.parse(JSON.stringify(language_constant_1.messages));
        var originalAttributes = JSON.parse(JSON.stringify(language_constant_1.attributes));
        var choosenMessages = new locale_translation_factory_1.default().make(locale, originalMessages);
        var choosenAttributes = new locale_translation_factory_1.default().make(locale, originalAttributes);
        return {
            locale: locale,
            polyglot: new node_polyglot_1.default({ phrases: choosenMessages, locale: locale }),
            original_messages: originalMessages,
            setting_messages: choosenMessages,
            messages: undefined,
            original_attributes: originalAttributes,
            setting_attributes: choosenAttributes,
            attributes: undefined,
        };
    };
    return LanguageDetection;
}());
exports.default = LanguageDetection;
