
import chai, { expect } from "chai";
// import * as chaiLike from "chai-like";
// import * as chaiThings from "chai-things";

import { HttpMethod } from "../../src/constant/communication.constant";

describe('HttpMethod enum', () => {
  
  before(() => {
    // chai.use(chaiLike);
    // chai.use(chaiThings);
  });

  after(() => {
    
  });

  beforeEach(() => {
    
  });

  afterEach(() => {
    
  });

  it('should fail when trying to create new instance from abstract class', () => {

    expect(() => { 
      
    }).to.throw('Cannot construct abstract instances directly');
  });
  it('should success when creating instance from child class', () => {

    // class User extends ViewModel { }
    
    // const user = new User();
    // const equalInstance = user instanceof ViewModel;

    expect(false).to.equal(true);

  });

});