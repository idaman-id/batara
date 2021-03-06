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
Object.defineProperty(exports, "__esModule", { value: true });
var SystemError = /** @class */ (function (_super) {
    __extends(SystemError, _super);
    function SystemError(message) {
        var _newTarget = this.constructor;
        if (message === void 0) { message = "system error"; }
        var _this = _super.call(this, message) || this;
        /**
         * There is an issue with custom derrived class in typescript
         * more info: https://github.com/Microsoft/TypeScript/issues/13965
         */
        Object.setPrototypeOf(_this, _newTarget.prototype);
        return _this;
    }
    return SystemError;
}(Error));
exports.default = SystemError;
