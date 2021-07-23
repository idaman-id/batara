
import express from "express";
import * as Facade from "../../../src/contract";

describe('Facade Interface', () => {
  
  let app: express.Application;

  beforeEach(() => {
    app = express();
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

});
