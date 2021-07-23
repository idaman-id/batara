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
var language_detection_factory_1 = __importDefault(require("../validator/language-detection.factory"));
var middleware_1 = __importDefault(require("./middleware"));
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
        req._language = new language_detection_factory_1.default().make(req.locale.language);
        return next();
    };
    return Language;
}(middleware_1.default));
exports.default = Language;
