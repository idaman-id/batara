
import { Environment } from "../../../src/entity/environment.constant";
import App from "../../../src/entity/application.entity";
import ApplicationProvider from  "../../../src/provider/application.provider";

class AppProvider extends ApplicationProvider 
{

  registerApp() {}

}

describe('Class Provider', () => {

  let app: App;
  let provider: AppProvider;

  beforeEach(() => {
    app = new App({
      name: "service",
      version: "1.0",
      debug: true,
      environment: Environment.LOCAL,
      timezone: "+07:00",
      host: "localhost",
      port: 3000,
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  const exec = () => {
    return new AppProvider(app);
  };

  it('should be an instance of Provider (base)', () => {
    provider = exec();

    expect(provider instanceof ApplicationProvider).toBeTruthy();
  });

  it('should be valid AppProvider shape', () => {
    provider = exec();

    expect(typeof provider.register === "function").toBeTruthy();
    expect(provider.register()).toBe(undefined);
    expect(typeof provider.registerApp === "function").toBeTruthy();
    expect(provider.registerApp()).toBe(undefined);
  });

  it('should calling registerTemplate method when calling register method', () => {
    const registerTemplate = jest.spyOn(ApplicationProvider.prototype as any, 'registerTemplate');
    registerTemplate.mockImplementation(() => {});

    provider = exec();
    provider.register();

    expect(registerTemplate).toBeCalledTimes(1);
  });

  it('should not calling registerTemplate when register method is not called', () => {
    const registerTemplate = jest.spyOn(ApplicationProvider.prototype as any, 'registerTemplate');
    registerTemplate.mockImplementation(() => {});

    provider = exec();

    expect(registerTemplate).not.toHaveBeenCalled();
  });

  it('should be registered when register method called', () => {
    const MIDDLEWARES = [
      'urlencodedParser',
      'jsonParser',
      'middleware'
    ];

    provider = exec();
    provider.register();

    const registeredMiddlewares: Array<{name: string}> = app.routerStacks;
    const totalRegisteredMiddlewares = registeredMiddlewares.filter(middleware => {
      return MIDDLEWARES.includes(middleware.name);
    }).length;

    expect(totalRegisteredMiddlewares).toBe(MIDDLEWARES.length);
  });

});
