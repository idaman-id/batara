
import Middleware from "../../../src/contract/middleware.interface";

class ValidationMiddleware implements Middleware
{

  handle(req: any, res: any, next: any): any
  {
    
  }

}

describe('Interface Middleware', () => {

  let middleware: Middleware;

  const exec = () => {
    return new ValidationMiddleware();
  };

  it('should have valid type', () => {
    middleware = exec();

    expect(typeof middleware.handle === "function").toBeTruthy();
  });

});
