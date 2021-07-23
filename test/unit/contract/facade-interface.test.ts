
import * as Facade from "../../../src/contract";

describe('Facade Interface', () => {
  
  describe('Command interface', () => {
    
    it('should be exported in Facade', () => {
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

  });

  describe('Factory interface', () => {

    it('should be exported in Facade', () => {
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

});
