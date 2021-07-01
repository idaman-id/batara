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
var node_polyglot_1 = __importDefault(require("node-polyglot"));
var Language_1 = require("../contracts/constant/Language");
var Middleware_1 = __importDefault(require("./Middleware"));
/**
 * @description
 * Inject `_language` object so we can use custom translation
 * specified later in controller or other prefered files
 */
var Language = /** @class */ (function (_super) {
    __extends(Language, _super);
    function Language() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Language.prototype.handle = function (req, res, next) {
        var locale = req.locale.language;
        var choosenAttributes = JSON.parse(JSON.stringify(Language_1.attributes));
        for (var attributeKey in choosenAttributes) {
            if (!attributeKey.startsWith(locale)) {
                delete choosenAttributes[attributeKey];
            }
        }
        var choosenMessages = JSON.parse(JSON.stringify(Language_1.attributes));
        for (var attributeKey in choosenMessages) {
            if (!attributeKey.startsWith(locale)) {
                delete choosenMessages[attributeKey];
            }
        }
        req._language = {
            locale: locale,
            polyglot: new node_polyglot_1.default({ phrases: choosenMessages }),
            original_messages: Language_1.messages,
            setting_messages: choosenMessages,
            messages: undefined,
            original_attributes: Language_1.attributes,
            setting_attributes: choosenAttributes,
            attributes: undefined,
        };
        return next();
    };
    return Language;
}(Middleware_1.default));
exports.default = Language;
