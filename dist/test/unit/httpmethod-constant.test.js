"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
describe('HttpMethod enum', function () {
    before(function () {
        // chai.use(chaiLike);
        // chai.use(chaiThings);
    });
    after(function () {
    });
    beforeEach(function () {
    });
    afterEach(function () {
    });
    it('should fail when trying to create new instance from abstract class', function () {
        chai_1.expect(function () {
        }).to.throw('Cannot construct abstract instances directly');
    });
    it('should success when creating instance from child class', function () {
        // class User extends ViewModel { }
        // const user = new User();
        // const equalInstance = user instanceof ViewModel;
        chai_1.expect(false).to.equal(true);
    });
});
