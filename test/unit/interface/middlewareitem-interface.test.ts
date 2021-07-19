
import MiddlewareItem from "../../../src/interface/middleware-item.interface";
import IMiddleware from "../../../src/interface/middleware.interface";

class CustomMiddleware implements IMiddleware
{
  handle(req: any, res: any, next: any) {}
}

describe('Interface MiddlewareItem', () => {

  test('MiddlewareItem shape should be valid', () => {

    const middlewareItem: MiddlewareItem = {
      name: "custom-name",
      middleware: new CustomMiddleware()
    };
    expect(middlewareItem).toBeTruthy();
    expect(typeof middlewareItem.name === "string").toBeTruthy();
    expect(typeof middlewareItem.middleware === "object").toBeTruthy();
  });

});
