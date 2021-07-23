
import Builder from "../../../src/contract/builder.interface";

class EmailBuilder implements Builder<string> 
{

  getResult(): string
  {
    return "email message";
  }

}

describe('Interface Builder', () => {

  let builder: Builder<any>;

  const exec = () => {
    return new EmailBuilder();
  };

  describe('Interface shape should be valid', () => {

    it('should contain valid shape', () => {
      builder = exec();
  
      expect(builder.getResult()).toBe("email message");
    });
    
  });

});
