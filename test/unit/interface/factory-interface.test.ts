
import Factory from "../../../src/interface/factory.interface";

class EmailMessage implements Factory<string> 
{

  make(email: string, name: string): string
  {
    return `Halo, ${name} <${email}>`;
  }

}

describe('Interface Factory', () => {

  let command: Factory<any>;

  const exec = () => {
    return new EmailMessage();
  };

  test('Interface shape should be valid', () => {
    command = exec();

    expect(command.make("raka.suryadi@gmail.com", "KokoRaka")).toBe("Halo, KokoRaka <raka.suryadi@gmail.com>");
  });

  test('Interface shape should valid with no parameter passed', () => {
    class NotificationMessage implements Factory<string> 
    {
  
      make(): string
      {
        return "Hi, have a nice day!";
      }
  
    }

    command = new NotificationMessage();

    expect(command.make()).toBe("Hi, have a nice day!");
  });

  test('Interface shape should valid with no return type', () => {
    class SendLogMessage implements Factory<void> 
    {
  
      make(): void
      {
        
      }
  
    }

    command = new SendLogMessage();

    expect(command.make()).toBe(undefined);
  });

});
