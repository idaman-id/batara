
import App from "../../../src/application";
import BaseRouteProvider from  "../../../src/provider/route.provider";
import BaseController from "../../../src/controller/controller";
import { HttpMethod } from "../../../src/constant";

class ErrorController extends BaseController
{

  authorizeHandler() {}
  validationHandler() {}

  handle() {}

}

class CustomController extends BaseController
{

  authorizeHandler() {}
  validationHandler() {}

  handle() {}

}

class RouteProvider extends BaseRouteProvider 
{

  registerRoute() {}

  routes()
  {
    return [
      {
        path: "/v1/home",
        method: HttpMethod.GET,
        handler: new CustomController()
      }
    ];
  }

  errorHandler() 
  {
    return new ErrorController();
  }

}

describe('Class Provider', () => {

  let app: App;
  let provider: RouteProvider;

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
    jest.restoreAllMocks();
  });

  const exec = () => {
    return new RouteProvider(app);
  };

  test('Provider class should be an instance of Provider (base)', () => {
    provider = exec();

    expect(provider instanceof RouteProvider).toBeTruthy();
  });

  test('RouteProvider shape should be valid', () => {
    provider = exec();

    expect(typeof provider.register === "function").toBeTruthy();
    expect(provider.register()).toBe(undefined);
    expect(typeof provider.registerRoute === "function").toBeTruthy();
    expect(provider.registerRoute()).toBe(undefined);
  });

  test('RouteProvider should calling registerTemplate method when calling register method', () => {
    const registerTemplate = jest.spyOn(RouteProvider.prototype as any, 'registerTemplate');
    registerTemplate.mockImplementation(() => {});

    provider = exec();
    provider.register();

    expect(registerTemplate).toBeCalledTimes(1);
  });

  test('RouteProvider should not calling registerTemplate when register method is not called', () => {
    const registerTemplate = jest.spyOn(RouteProvider.prototype as any, 'registerTemplate');
    registerTemplate.mockImplementation(() => {});

    provider = exec();

    expect(registerTemplate).not.toHaveBeenCalled();
  });

  test('Template middleware should be registered when register method called', () => {
    const CONTROLLERS = [
      'bound dispatch',
      '<anonymous>',
    ];

    provider = exec();
    provider.register();

    const registeredMiddlewares: Array<{name: string}> = app.instance._router.stack;

    const totalRegisteredMiddlewares = registeredMiddlewares.filter(middleware => {
      return CONTROLLERS.includes(middleware.name);
    }).length;

    expect(totalRegisteredMiddlewares).toBe(CONTROLLERS.length);
  });

});
