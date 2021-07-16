"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseHandler = /** @class */ (function () {
    function BaseHandler(next) {
        this.next = next;
    }
    BaseHandler.prototype.handle = function () {
        if (!this.next) {
            return;
        }
        return this.next.handle();
    };
    return BaseHandler;
}());
exports.default = BaseHandler;
