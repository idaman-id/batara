
import AccessLog from  "../../../src/factory/access-log.factory";
import * as Facade from "../../../src/factory";

describe('Facade Factory', () => {
  
  test('AccessLog class should be exported in Factory Facade', () => {  
    const isExported = Facade.AccessLog === AccessLog;
    expect(isExported).toBeTruthy();
  });

});
