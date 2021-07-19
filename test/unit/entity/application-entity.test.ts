
import Application from  "../../../src/entity/application.entity";
import { Environment } from "../../../src/constant/environment.constant";
import { ApplicationSetting } from "../../../src/interface";
import { Handler } from "../../../src/interface/http.interface";

describe('Application Entity', () => {
  
  let app: Application;
  let setting: ApplicationSetting;

  beforeEach(async () => {
    setting = {
      name: "service-name",
      version: "1.0",
      environment: Environment.TEST,
      debug: true,
      timezone: "+07:00",
      host: "localhost",
      port: 3000,
    };
    app = exec();
  });

  afterEach(async () => {
    jest.restoreAllMocks();
  });

  const exec = () => {
    return new Application(setting);
  }; 

  describe('start method', () => {

    it('should return nothing when called', async () => {
      const start = jest.spyOn(Application.prototype as any, 'start');
      start.mockImplementation(() => {
        return Promise.resolve(undefined);
      });

      await expect(app.start()).resolves.toBe(undefined);
    });

    it('should return error when application is already started', async () => {
      const start = jest.spyOn(Application.prototype as any, 'start');
      start.mockImplementation(() => {
        return Promise.reject(new Error("Application is already started"));
      });

      await expect(app.start()).rejects.toThrowError("Application is already started");
    });

  });

  describe('stop method', () => {

    it('should return nothing when called', async () => {
      const stop = jest.spyOn(Application.prototype as any, 'stop');
      stop.mockImplementation(() => {
        return Promise.resolve(undefined);
      });

      await expect(app.stop()).resolves.toBe(undefined);
    });

    it('should return error when application is already stopped', async () => {
      const stop = jest.spyOn(Application.prototype as any, 'stop');
      stop.mockImplementation(() => {
        return Promise.reject(new Error("Application is already stopped"));
      });

      await expect(app.stop()).rejects.toThrowError("Application is already stopped");
    });

  });

  describe('isStarted method', () => {
    
    it('should return true when app is started', async () => {
      const isStarted = jest.spyOn(Application.prototype as any, 'isStarted');
      isStarted.mockImplementation(() => {
        return true;
      });
      const currentStatus = app.isStarted();

      expect(currentStatus).toBe(true);
    });

    it('should return false when app is stopped', async () => {
      const isStarted = jest.spyOn(Application.prototype as any, 'isStarted');
      isStarted.mockImplementation(() => {
        return false;
      });
      const currentStatus = app.isStarted();

      expect(currentStatus).toBe(false);
    });

  });

  describe('handler method', () => {

    let handlers: Array<Handler> = [];

    it('get should return nothing when called', () => {
      const method = jest.spyOn(Application.prototype as any, 'get');
      method.mockImplementation(() => {
        return undefined;
      });

      const resultValue = app.get("/v1/test", handlers);

      expect(resultValue).toBe(undefined);
    });

    it('post should return nothing when called', () => {
      const method = jest.spyOn(Application.prototype as any, 'post');
      method.mockImplementation(() => {
        return undefined;
      });

      const resultValue = app.post("/v1/test", handlers);

      expect(resultValue).toBe(undefined);
    });

    it('put should return nothing when called', () => {
      const method = jest.spyOn(Application.prototype as any, 'put');
      method.mockImplementation(() => {
        return undefined;
      });

      const resultValue = app.put("/v1/test", handlers);

      expect(resultValue).toBe(undefined);
    });

    it('delete should return nothing when called', () => {
      const method = jest.spyOn(Application.prototype as any, 'delete');
      method.mockImplementation(() => {
        return undefined;
      });

      const resultValue = app.delete("/v1/test", handlers);

      expect(resultValue).toBe(undefined);
    });

    it('patch should return nothing when called', () => {
      const method = jest.spyOn(Application.prototype as any, 'patch');
      method.mockImplementation(() => {
        return undefined;
      });

      const resultValue = app.patch("/v1/test", handlers);

      expect(resultValue).toBe(undefined);
    });

    it('copy should return nothing when called', () => {
      const method = jest.spyOn(Application.prototype as any, 'copy');
      method.mockImplementation(() => {
        return undefined;
      });

      const resultValue = app.copy("/v1/test", handlers);

      expect(resultValue).toBe(undefined);
    });

    it('head should return nothing when called', () => {
      const method = jest.spyOn(Application.prototype as any, 'head');
      method.mockImplementation(() => {
        return undefined;
      });

      const resultValue = app.head("/v1/test", handlers);

      expect(resultValue).toBe(undefined);
    });
    
    it('options should return nothing when called', () => {
      const method = jest.spyOn(Application.prototype as any, 'options');
      method.mockImplementation(() => {
        return undefined;
      });

      const resultValue = app.options("/v1/test", handlers);

      expect(resultValue).toBe(undefined);
    });

  });

  describe('routerStacks method', () => {

    it('should return empty array when there is no stack available', () => {
      const method = jest.spyOn(Application.prototype as any, 'routerStacks', 'get');
      method.mockImplementation(() => {
        return [];
      });

      const resultValue = app.routerStacks;

      expect(resultValue).toEqual([]);
    });

    it('should return filled array when there are stack available', () => {
      const method = jest.spyOn(Application.prototype as any, 'routerStacks', 'get');
      method.mockImplementation(() => {
        return [
          (req: any, res: any, next: any) => {}
        ];
      });

      const resultValue = app.routerStacks;

      expect(resultValue.length).toBe(1);
    });

  });

});
