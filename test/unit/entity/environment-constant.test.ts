
import { Environment } from "../../../src/entity/environment.constant";

describe('Environment constant', () => {
  
  it('should contain LOCAL constant', () => {
    expect(Environment.LOCAL).toBe("local");
  });

  it('should contain TEST constant', () => {
    expect(Environment.TEST).toBe("test");
  });

  it('should contain DEVELOPMENT constant', () => {
    expect(Environment.DEVELOPMENT).toBe("development");
  });

  it('should contain PRODUCTION constant', () => {
    expect(Environment.PRODUCTION).toBe("production");
  });

});
