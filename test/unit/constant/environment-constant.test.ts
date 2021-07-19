
import { Environment } from "../../../src/constant/environment.constant";

describe('Environment constant', () => {
  
  test('LOCAL constant shoule be a local', () => {
    expect(Environment.LOCAL).toBe("local");
  });

  test('TEST constant shoule be a test', () => {
    expect(Environment.TEST).toBe("test");
  });

  test('DEVELOPMENT constant shoule be a development', () => {
    expect(Environment.DEVELOPMENT).toBe("development");
  });

  test('PRODUCTION constant shoule be a production', () => {
    expect(Environment.PRODUCTION).toBe("production");
  });


});
