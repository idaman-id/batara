
import AccessLog from  "../../../src/logger/access-log.factory";
import * as Facade from "../../../src/logger";

describe('Facade Factory', () => {
  
  test('AccessLog class should be exported in Factory Facade', () => {  
    const isExported = Facade.AccessLog === AccessLog;
    expect(isExported).toBeTruthy();
  });

});
