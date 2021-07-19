
import Middleware from "../../../src/interface/middleware.interface";

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

  test('Interface shape should be valid', () => {
    middleware = exec();

    expect(typeof middleware.handle === "function").toBeTruthy();
  });

});
