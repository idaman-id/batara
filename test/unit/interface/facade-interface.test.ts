
import express from "express";
import * as Facade from "../../../src/interface";

describe('Facade Interface', () => {
  
  let app: express.Application;

  beforeAll(() => {
    
  });

  afterAll(() => {
    
  });

  beforeEach(() => {
    app = express();
  });

  afterEach(() => {
    
  });

  test('ApplicationSetting interface should be exported in Facade', () => {  
    const appSetting: Facade.ApplicationSetting = {
      name: "service",
      version: "1.0",
      debug: true,
      environment: "local",
      timezone: "+07:00",
      host: "localhost",
      port: 3000,
    };

    expect(appSetting).toBeTruthy();
  });

  test('Command interface should be exported in Facade', () => {
    class StoreLogMessage implements Facade.Command<string> 
    {
  
      execute(): string
      {
        return "ok";
      }
  
    }

    const command = new StoreLogMessage();

    expect(command.execute()).toBe("ok");
  });

  test('Factory interface should be exported in Facade', () => {
    class NotificationMessage implements Facade.Factory<string> 
    {
  
      make(): string
      {
        return "Hi, have a nice day!";
      }
  
    }

    const command = new NotificationMessage();

    expect(command.make()).toBe("Hi, have a nice day!");
  });

  test('Http interface should be exported in Facade', () => {  
    const route = app.get("/", (req: Facade.Http.Request, res: Facade.Http.Response, next: Facade.Http.NextFunction) => {
      const errors: Array<Facade.Http.ValidationChain> = [];
      return res.send(errors);
    });
    expect(typeof route === "function").toBeTruthy();
  });

});
