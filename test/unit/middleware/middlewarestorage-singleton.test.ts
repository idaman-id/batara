
import MiddlewareStorage from "../../../src/middleware/middleware-storage.singleton";

class CustomMiddleware {
  handle(req: any, res: any, next: any) {}
}

describe('MiddlewareStorage Singleton', () => {

  let singleton: MiddlewareStorage;
  let middleware: CustomMiddleware;

  beforeEach(() => {
    singleton = exec();
    singleton.clearMiddlewares();

    middleware = new CustomMiddleware();
  });

  const exec = () => {
    return MiddlewareStorage.instance;
  };

  describe('Class shape', () => {
    
    it('should use same object every time the class is being called', () => {
      const singleton2 = exec();

      expect(singleton).toEqual(singleton2);
      expect(singleton).toBeInstanceOf(MiddlewareStorage);
    });

    it('should contain previous addedd middleware when recalled', () => {
      singleton.registerMiddleware('custom', middleware);
      const currentStatus = singleton.isMiddlewareRegistered('custom');

      const singleton2 = exec();
      const recallCurrentStatus = singleton2.isMiddlewareRegistered('custom');

      expect(currentStatus).toBe(true);
      expect(recallCurrentStatus).toBe(true);
    });

  });

  describe('registerMiddleware method', () => {

    it('should return nothing when called', () => {
      const resultValue = singleton.registerMiddleware('custom', middleware);

      expect(resultValue).toBe(undefined);
    });

    it('should be added to the middlewares property', () => {
      const previousStatus = singleton.isMiddlewareRegistered('custom');
      singleton.registerMiddleware('custom', middleware);
      const currentStatus = singleton.isMiddlewareRegistered('custom');

      expect(previousStatus).toBe(false);
      expect(currentStatus).toBe(true);
    });

    it('should throw an error when trying to register middleware with same name', () => {
      singleton.registerMiddleware('custom', middleware);

      expect(() => {
        singleton.registerMiddleware('custom', middleware);
      }).toThrowError('Middleware custom is already registered');
    });

  });

  describe('middlewareNames getters', () => {

    it('should return empty when there is no middleware registered', () => {
      const middlewareNames = singleton.middlewareNames;

      expect(middlewareNames.length).toBe(0);
    });

    it('should return all registered middleware names when registered', () => {
      singleton.registerMiddleware('custom', middleware);
      singleton.registerMiddleware('custom2', middleware);
      const middlewareNames = singleton.middlewareNames;

      expect(middlewareNames.length).toBe(2);
      expect(middlewareNames.sort()).toEqual(["custom", "custom2"].sort());
    });

  });

  describe('isMiddlewareRegistered method', () => {

    it('should return false when middleware is not registered', () => {
      const isRegistered = singleton.isMiddlewareRegistered('unregistered');

      expect(isRegistered).toBe(false);
    });

    it('should return true when middleware is registered', () => {
      singleton.registerMiddleware('registered', middleware);
      const isRegistered = singleton.isMiddlewareRegistered('registered');

      expect(isRegistered).toBe(true);
    });

  });

  describe('findMiddlewareByName method', () => {

    it('should return null when middleware is not available', () => {
      const unavailableMiddleware = singleton.findMiddlewareByName('unavailable');

      expect(unavailableMiddleware).toBe(null);
    });

    it('should return middleware when available', () => {
      singleton.registerMiddleware('custom', middleware);
      const customMiddleware = singleton.findMiddlewareByName('custom');

      expect(customMiddleware).toBe(middleware);
    });

  });

  describe('clearMiddlewares method', () => {

    it('should return nothing when called', () => {
      const returnValue = singleton.clearMiddlewares();

      expect(returnValue).toBe(undefined);
    });

    it('should set middleware property to empty array when middleware is already empty', () => {
      singleton.clearMiddlewares();
      const middlewares = singleton.middlewareNames;

      expect(middlewares).toEqual([]);
    });

    it('should set middleware property to empty array when middleware is exists', () => {
      singleton.registerMiddleware('custom', middleware);
      singleton.clearMiddlewares();
      const middlewares = singleton.middlewareNames;

      expect(middlewares).toEqual([]);
    });

  });

});
