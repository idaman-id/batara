
import Factory from "../../../src/interface/factory.interface";
import { Handler } from "../../../src/interface/http.interface";
import AccessLog from "../../../src/factory/access-log.factory";

describe('Factory AccessLog', () => {

  let factory: Factory<Handler>;

  beforeEach(() => {
    factory = exec();
  });

  const exec = () => {
    return new AccessLog();
  };

  test('Factory shape should be valid', () => {
    
    expect(typeof factory.make === "function").toBeTruthy();
  });

  test('Factory should return valid handler if required parameter is specified', () => {
    const result = factory.make({
      interval: "1d",
      path: "storage/log/access",
    });

    expect(typeof result === "function").toBeTruthy();
    expect(result.name).toBe("logger");
  });

  test('Factory should return valid handler if optional parameter is specified', () => {
    const result = factory.make({
      interval: "1d",
      path: "storage/log/access",
      fileName: "2021-01-03"
    });

    expect(typeof result === "function").toBeTruthy();
    expect(result.name).toBe("logger");
  });

  test('Factory should throw error if parameter is not passed', () => {

    expect(() => {
      factory.make();
    }).toThrow("Cannot read property 'fileName' of undefined");
  });

  test('Factory should throw error if parameter data type is not valid', () => {

    expect(() => {
      factory.make({ interval: 1, path: true });
    }).toThrow("Don't know how to handle 'options.interval' type: number");
  });

  test('Factory should throw error if parameter passed is not valid', () => {
    
    expect(() => {
      factory.make({ invalid: "key" });
    }).toThrow("Don't know how to handle 'options.interval' type: undefined");
  });

});
