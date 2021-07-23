
import Entity from  "../../../src/entity/entity";
import * as Facade from "../../../src/entity";

describe('Facade Entity', () => {
  
  it('should export Entity in Entity Facade', () => {  
    const isExported = Facade.Entity === Entity;
    expect(isExported).toBeTruthy();
  });

});
