
import Command from "../../../src/interface/command.interface";

describe('Interface Command', () => {

  let command: Command<any>;

  class SendMessage implements Command<string> 
  {

    execute(email: string, name: string): string
    {
      return `This message was sent to: ${name} <${email}>`;
    }

  }

  beforeAll(() => {

  });

  afterAll(() => {
    
  });

  beforeEach(() => {
    
  });

  afterEach(() => {
    
  });

  const exec = () => {
    return new SendMessage();
  };

  test('Interface shape should be valid', () => {
    command = exec();

    expect(command.execute("raka.suryadi@gmail.com", "KokoRaka")).toBe("This message was sent to: KokoRaka <raka.suryadi@gmail.com>");
  });

  test('Interface shape should valid with no parameter passed', () => {
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

  test('Interface shape should valid with no return type', () => {
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
