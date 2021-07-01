"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Entity = /** @class */ (function () {
    function Entity() {
    }
    Entity.prototype.toObject = function () {
        return this;
    };
    Entity.prototype.toJson = function () {
        return JSON.stringify(this.toObject());
    };
    return Entity;
}());
exports.default = Entity;
