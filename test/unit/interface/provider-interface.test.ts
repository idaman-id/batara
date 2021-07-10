
import Provider from "../../../src/interface/provider.interface";

describe('Interface Provider', () => {

  let provider: Provider;

  class AppProvider implements Provider
  {

    register()
    {
      enum AVAILABLE_STATUSES {
        ACTIVE = "active",
        INACTIVE = "inactive"
      };

      const doSomething: string = AVAILABLE_STATUSES.ACTIVE;
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
    return new AppProvider();
  };

  test('Interface shape should be valid', () => {
    provider = exec();

    expect(provider.register()).toBe(undefined);
  });

});
