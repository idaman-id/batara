
import Entity from  "../../../src/entity/entity";
import * as Facade from "../../../src/entity";

describe('Facade Entity', () => {
  
  test('Entity class should be exported in Entity Facade', () => {  
    const isExported = Facade.Entity === Entity;
    expect(isExported).toBeTruthy();
  });

});
