
import { HttpMethod } from "../../../src/router/http.interface";
import Controller from "../../../src/controller/controller";
import Route from "../../../src/router/route.interface";

describe('Interface Route', () => {

  test('Route shape should be valid', () => {
    class HomeController extends Controller
    {
      static handle() {}
    }

    const homeRoute: Route = {
      path: "/home",
      method: HttpMethod.GET,
      handler: HomeController.handle,
    };
    expect(homeRoute).toBeTruthy();
    expect(typeof homeRoute.path === "string").toBeTruthy();
    expect(typeof homeRoute.method === "string").toBeTruthy();
    expect(typeof homeRoute.handler === "function").toBeTruthy();
  });

});
