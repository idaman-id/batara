
import MiddlewareSetting from "../../../src/interface/middleware-setting.interface";
import IMiddleware from "../../../src/interface/middleware.interface";

class CustomMiddleware implements IMiddleware
{
  handle(req: any, res: any, next: any) {}
}

describe('Interface MiddlewareSetting', () => {

  beforeAll(() => {

  });

  afterAll(() => {
    
  });

  beforeEach(() => {

  });

  afterEach(() => {
    
  });

  test('MiddlewareSetting shape should be valid', () => {

    const middlewareItem: MiddlewareSetting = {
      name: "custom-name",
      handler: CustomMiddleware
    };
    expect(middlewareItem).toBeTruthy();
    expect(typeof middlewareItem.name === "string").toBeTruthy();
    expect(typeof middlewareItem.handler === "function").toBeTruthy();
  });

});
