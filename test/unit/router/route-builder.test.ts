
import { Request, Response, NextFunction, Handler } from "../../../src/router/http.interface";
import RouteBuilder from  "../../../src/router/route.builder";
import MiddlewareStorage from "../../../src/middleware/middleware-storage.singleton";

class CustomMiddleware {
  handle(req: Request, res: Response, next: NextFunction) { }
}

describe('Route Builder', () => {

  let builder: RouteBuilder;
  let handler: Handler;
  let storage: MiddlewareStorage;

  beforeEach(() => {
    builder = exec();
    handler = (req: Request, res: Response, next: NextFunction) => { };

    storage = MiddlewareStorage.instance;
    storage.clearMiddlewares();
  });

  const exec = () => {
    return new RouteBuilder();
  };

  describe('Route builder shape', () => {

    it('should implement Builder interface', () => {
  
      expect(typeof builder.getResult === "function").toBeTruthy();
    });

  });

  describe('getResult method', () => {

    it('Route builder should return empty result when there is no handler inserted', () => {

      expect(builder.getResult().length).toBe(0);
    });
  
    it('Route builder should return one result when there is added handler to the builder', () => {
      builder.addHandler(handler);
  
      expect(builder.getResult().length).toBe(1);
    });

    it('Route builder should return two result when there is added handler to the builder', () => {
      
      storage.registerMiddleware("custom", new CustomMiddleware());

      builder.addHandler(handler);
      builder.addMiddleware("custom");
  
      expect(builder.getResult().length).toBe(2);
    });

  });

  describe('addHandler method', () => {

    it('should return instance when called', () => {
      
      const returnValue = builder.addHandler(handler);

      expect(returnValue).toBeInstanceOf(RouteBuilder);
    });

    it('should add item to the routes property', () => {

      const previousValue = builder.getResult().length;
      builder.addHandler(handler);
      const currentValue = builder.getResult().length;

      expect(previousValue).toBe(0);
      expect(currentValue).toBe(1);
    });

  });

  describe('addMiddleware method', () => {

    it('should return instance when called', () => {
      storage.registerMiddleware("custom", new CustomMiddleware());
      const returnValue = builder.addMiddleware("custom");

      expect(returnValue).toBeInstanceOf(RouteBuilder);
    });

    it('should throw an error when middleware is not registered', () => {
      
      expect(() => {
        builder.addMiddleware("unregistered");
      }).toThrowError(`Middleware unregistered is not available`);
    });

    it('should add item to the routes property', () => {
      const previousValue = builder.getResult().length;
      storage.registerMiddleware("custom", new CustomMiddleware());
      builder.addMiddleware("custom");
      const currentValue = builder.getResult().length;

      expect(previousValue).toBe(0);
      expect(currentValue).toBe(1);
    });

  });

  describe('addMiddlewares method', () => {

    it('should return instance when called', () => {
      storage.registerMiddleware("custom", new CustomMiddleware());
      const returnValue = builder.addMiddlewares(["custom"]);

      expect(returnValue).toBeInstanceOf(RouteBuilder);
    });

    it('should throw an error when middleware is not registered', () => {
      
      expect(() => {
        builder.addMiddlewares(["unregistered", "latest_unregistered"]);
      }).toThrowError(`Middleware unregistered is not available`);
    });

    it('should add item to the routes property', () => {
      const previousValue = builder.getResult().length;
      storage.registerMiddleware("custom", new CustomMiddleware());
      storage.registerMiddleware("custom2", new CustomMiddleware());
      builder.addMiddlewares(["custom", "custom2"]);
      const currentValue = builder.getResult().length;

      expect(previousValue).toBe(0);
      expect(currentValue).toBe(2);
    });

  });

});
