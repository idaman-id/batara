
import Entity from  "../../../src/entity/entity";
import * as Facade from "../../../src/entity";

describe('Facade Entity', () => {
  
  beforeAll(() => {
    
  });

  afterAll(() => {
    
  });

  beforeEach(() => {
    
  });

  afterEach(() => {
    
  });

  test('Entity class should be exported in Entity Facade', () => {  
    const isEntityExported = Facade.Entity === Entity;
    expect(isEntityExported).toBeTruthy();
  });

});
