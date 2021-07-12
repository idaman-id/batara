"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorFormat = /** @class */ (function () {
    function ErrorFormat() {
    }
    ErrorFormat.prototype.make = function (errors) {
        return errors.map(function (error) {
            return {
                message: error.msg,
                field: error.param
            };
        });
    };
    return ErrorFormat;
}());
exports.default = ErrorFormat;
