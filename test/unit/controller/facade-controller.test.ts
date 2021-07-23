
import * as Facade from "../../../src/controller";
import Controller from "../../../src/controller/controller";

describe('Facade Controller', () => {
  
  it('should export Controller in Controller Facade', () => {    
    expect(Controller).toBe(Facade.Controller);
  });

});
