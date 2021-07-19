
import Middleware from "../../../src/middleware/middleware";
import * as Facade from "../../../src/middleware";

describe('Facade Middleware', () => {
  
  test('Middleware class should be exported in Middleware Facade', () => {  
    const isExported = Facade.Middleware === Middleware;
    expect(isExported).toBeTruthy();
  });

});
