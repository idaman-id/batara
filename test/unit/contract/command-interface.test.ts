
import Command from "../../../src/contract/command.interface";

class SendMessage implements Command<string> 
{

  execute(email: string, name: string): string
  {
    return `This message was sent to: ${name} <${email}>`;
  }

}

describe('Interface Command', () => {

  let command: Command<any>;

  const exec = () => {
    return new SendMessage();
  };

  describe('Interface shape', () => {

    it('should return valid return type with parameter passed', () => {
      command = exec();
  
      expect(command.execute("raka.suryadi@gmail.com", "KokoRaka")).toBe("This message was sent to: KokoRaka <raka.suryadi@gmail.com>");
    });

    it('should return valid return type with no parameter passed', () => {
      class StoreLogMessage implements Command<string> 
      {
    
        execute(): string
        {
          return "ok";
        }
    
      }
  
      command = new StoreLogMessage();
  
      expect(command.execute()).toBe("ok");
    });

    it('should return nothing when command return type is void', () => {
      class SendLogMessage implements Command<void> 
      {
    
        execute(): void
        {
          
        }
    
      }
  
      command = new SendLogMessage();
  
      expect(command.execute()).toBe(undefined);
    });
  });

});
