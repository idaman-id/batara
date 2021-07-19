
import LogFormat from "../../../src/factory/log-format.factory";

describe('Factory LogFormat', () => {

  let factory: LogFormat;

  beforeEach(() => {
    factory = exec();
  });

  const exec = () => {
    return new LogFormat();
  };

  test('Factory shape should be valid', () => {
    
    expect(typeof factory.make).toBe("function");
  });

  test('Factory should return empty object if locale is empty', () => {
    const result = factory.make();

    expect(typeof result).toBe("function");
    expect(result.name).toBe("logFormat");
  });

});
 