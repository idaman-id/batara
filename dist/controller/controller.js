"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import LocaleTranslation from '../factory/locale-translation.factory';
// import Language from '../middleware/language.middleware';
// import Validation from "../middleware/validation.middleware";
var Controller = /** @class */ (function () {
    function Controller() {
    }
    Controller.prototype.run = function () {
        return [
            // new Language().handle,
            // this.translate,
            // this.authorize,
            // this.authorizeHandler,
            this.rules(),
            // new Validation().handle,
            // this.validationHandler,
            this.handle
        ];
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
    return Controller;
}());
exports.default = Controller;
