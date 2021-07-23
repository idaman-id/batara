
import Application from "../../../src/entity/application.entity";
import BaseRouteProvider from  "../../../src/provider/route.provider";
import BaseController from "../../../src/controller/controller";
import { HttpMethod } from "../../../src/router/http.interface";
import { Environment } from "../../../src/entity/environment.constant";

class ErrorController extends BaseController
{

  static error() {}

}

class CustomController extends BaseController
{

  static list() {}

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
        handler: CustomController.list
      }
    ];
  }

  errorHandler() 
  {
    return ErrorController.error;
  }

}

describe('Class Provider', () => {

  let app: Application;
  let provider: RouteProvider;

  beforeEach(() => {
    app = new Application({
      name: "service",
      version: "1.0",
      debug: true,
      environment: Environment.TEST,
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

    const registeredMiddlewares: Array<{name: string}> = app.routerStacks;

    const totalRegisteredMiddlewares = registeredMiddlewares.filter(middleware => {
      return CONTROLLERS.includes(middleware.name);
    }).length;

    expect(totalRegisteredMiddlewares).toBe(CONTROLLERS.length);
  });

});
