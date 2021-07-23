
import LogFormat from "../../../src/logger/log-format.factory";

describe('Factory LogFormat', () => {

  let factory: LogFormat;

  beforeEach(() => {
    factory = exec();
  });

  const exec = () => {
    return new LogFormat();
  };

  it('should contain valid shape', () => {
    
    expect(typeof factory.make).toBe("function");
  });

  it('should return empty object if locale is empty', () => {
    const result = factory.make();

    expect(typeof result).toBe("function");
    expect(result.name).toBe("logFormat");
  });

});
 