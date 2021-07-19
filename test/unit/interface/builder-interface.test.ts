
import Builder from "../../../src/interface/builder.interface";

describe('Interface Builder', () => {

  let builder: Builder<any>;

  class EmailBuilder implements Builder<string> 
  {

    getResult(): string
    {
      return "email message";
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
    return new EmailBuilder();
  };

  test('Interface shape should be valid', () => {
    builder = exec();

    expect(builder.getResult()).toBe("email message");
  });

});
