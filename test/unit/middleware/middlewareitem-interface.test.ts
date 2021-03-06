
import MiddlewareItem from "../../../src/middleware/middleware-item.interface";
import IMiddleware from "../../../src/contract/middleware.interface";

class CustomMiddleware implements IMiddleware
{
  handle(req: any, res: any, next: any) {}
}

describe('Interface MiddlewareItem', () => {

  it('should contain valid shape', () => {

    const middlewareItem: MiddlewareItem = {
      name: "custom-name",
      middleware: new CustomMiddleware()
    };
    expect(middlewareItem).toBeTruthy();
    expect(typeof middlewareItem.name === "string").toBeTruthy();
    expect(typeof middlewareItem.middleware === "object").toBeTruthy();
  });

});
