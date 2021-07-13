
import App from "../../../src/application";
import Provider from  "../../../src/provider/provider";

class CustomProvider extends Provider 
{

  register() {}

}

describe('Class Provider', () => {

  let app: App;
  let provider: CustomProvider;

  beforeAll(() => {

  });

  afterAll(() => {
    
  });

  beforeEach(() => {
    app = new App({
      name: "service",
      version: "1.0",
      debug: true,
      environment: "local",
      timezone: "+07:00",
      host: "localhost",
      port: 3000,
    });
  });

  afterEach(() => {
    
  });

  const exec = () => {
    return new CustomProvider(app);
  };

  test('Provider class should be an instance of Provider (base)', () => {
    provider = exec();

    expect(provider instanceof Provider).toBeTruthy();
  });

  test('Provider shape should be valid', () => {
    provider = exec();

    expect(typeof provider.register === "function").toBeTruthy();
    expect(provider.register()).toBe(undefined);
  });

});
