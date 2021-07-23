"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LocaleTranslation = /** @class */ (function () {
    function LocaleTranslation() {
    }
    LocaleTranslation.prototype.make = function (locale, map) {
        var translation = JSON.parse(JSON.stringify(map));
        var seperator = locale + ".";
        for (var key in translation) {
            var isInvalidTranslation = locale === "" ||
                !key.startsWith(seperator) ||
                key.slice(seperator.length) === "";
            if (isInvalidTranslation) {
                delete translation[key];
            }
        }
        return translation;
    };
    return LocaleTranslation;
}());
exports.default = LocaleTranslation;
