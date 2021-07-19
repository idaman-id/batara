
import * as Facade from "../../../src/controller";
import Controller from "../../../src/controller/controller";

describe('Facade Controller', () => {
  
  beforeAll(() => {
    
  });

  afterAll(() => {
    
  });

  beforeEach(() => {
    
  });

  afterEach(() => {
    
  });

  test('Controller should be exported in Constant Controller', () => {    
    expect(Controller).toBe(Facade.Controller);
  });

});
