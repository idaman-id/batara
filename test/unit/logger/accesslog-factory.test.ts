
import Factory from "../../../src/contract/factory.interface";
import { Handler } from "../../../src/router/http.interface";
import AccessLog from "../../../src/logger/access-log.factory";

describe('Factory AccessLog', () => {

  let factory: Factory<Handler>;

  beforeEach(() => {
    factory = exec();
  });

  const exec = () => {
    return new AccessLog();
  };

  it('should contain valid shape', () => {
    
    expect(typeof factory.make === "function").toBeTruthy();
  });

  it('should return valid handler if required parameter is specified', () => {
    const result = factory.make({
      interval: "1d",
      path: "storage/log/access",
    });

    expect(typeof result === "function").toBeTruthy();
    expect(result.name).toBe("logger");
  });

  it('should return valid handler if optional parameter is specified', () => {
    const result = factory.make({
      interval: "1d",
      path: "storage/log/access",
      fileName: "2021-01-03"
    });

    expect(typeof result === "function").toBeTruthy();
    expect(result.name).toBe("logger");
  });

  it('should throw error if parameter is not passed', () => {

    expect(() => {
      factory.make();
    }).toThrow("Cannot read property 'fileName' of undefined");
  });

  it('should throw error if parameter data type is not valid', () => {

    expect(() => {
      factory.make({ interval: 1, path: true });
    }).toThrow("Don't know how to handle 'options.interval' type: number");
  });

  it('should throw error if parameter passed is not valid', () => {
    
    expect(() => {
      factory.make({ invalid: "key" });
    }).toThrow("Don't know how to handle 'options.interval' type: undefined");
  });

});
