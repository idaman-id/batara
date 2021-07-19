
import Builder from "../../../src/interface/builder.interface";

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

  test('Interface shape should be valid', () => {
    builder = exec();

    expect(builder.getResult()).toBe("email message");
  });

});
