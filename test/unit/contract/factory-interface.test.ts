
import Factory from "../../../src/contract/factory.interface";

class EmailMessage implements Factory<string> 
{

  make(email: string, name: string): string
  {
    return `Halo, ${name} <${email}>`;
  }

}

describe('Interface Factory', () => {

  let factory: Factory<any>;

  const exec = () => {
    return new EmailMessage();
  };

  it('should return valid return type with valid parameter', () => {
    factory = exec();

    expect(factory.make("raka.suryadi@gmail.com", "KokoRaka")).toBe("Halo, KokoRaka <raka.suryadi@gmail.com>");
  });

  it('should return valid return type with no parameter passed', () => {
    class NotificationMessage implements Factory<string> 
    {
  
      make(): string
      {
        return "Hi, have a nice day!";
      }
  
    }

    factory = new NotificationMessage();

    expect(factory.make()).toBe("Hi, have a nice day!");
  });

  it('should return nothing when no parameter is passed', () => {
    class SendLogMessage implements Factory<void> 
    {
  
      make(): void
      {
        
      }
  
    }

    factory = new SendLogMessage();

    expect(factory.make()).toBe(undefined);
  });

});
