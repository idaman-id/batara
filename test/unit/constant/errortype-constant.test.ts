
import { ErrorType } from "../../../src/constant/error.constant";

describe('ErrorType constant', () => {
  
  beforeAll(() => {
    
  });

  afterAll(() => {
    
  });

  beforeEach(() => {
    
  });

  afterEach(() => {
    
  });

  test('NOTFOUND constant shoule be notfound', () => {
    expect(ErrorType.NOTFOUND).toBe("notfound");
  });

  test('SYSTEM constant shoule be system', () => {
    expect(ErrorType.SYSTEM).toBe("system");
  });

  test('UNAUTHENTICATE constant shoule be unauthenticate', () => {
    expect(ErrorType.UNAUTHENTICATE).toBe("unauthenticate");
  });

  test('UNAUTHORIZE constant shoule be unauthorize', () => {
    expect(ErrorType.UNAUTHORIZE).toBe("unauthorize");
  });

  test('UNEXPECTED constant shoule be unexpected', () => {
    expect(ErrorType.UNEXPECTED).toBe("unexpected");
  });

  test('VALIDATION constant shoule be validation', () => {
    expect(ErrorType.VALIDATION).toBe("validation");
  });

});
