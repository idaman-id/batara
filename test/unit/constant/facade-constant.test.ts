
import * as Facade from "../../../src/constant";
import { HttpMethod } from "../../../src/constant/communication.constant";
import { ErrorType } from "../../../src/constant/error.constant";
import { attributes, messages } from "../../../src/constant/language.constant";

describe('Facade Constant', () => {
  
  beforeAll(() => {
    
  });

  afterAll(() => {
    
  });

  beforeEach(() => {
    
  });

  afterEach(() => {
    
  });

  test('HttpMethod enum should be exported in Constant Facade', () => {    
    expect(HttpMethod.GET).toBe(Facade.HttpMethod.GET);
  });
  test('ErrorType enum should be exported in Constant Facade', () => {    
    expect(ErrorType.SYSTEM).toBe(Facade.ErrorType.SYSTEM);
  });
  test('attributes enum should be exported in Constant Facade', () => {    
    expect(attributes).toBe(Facade.attributes);
  });
  test('messages enum should be exported in Constant Facade', () => {    
    expect(messages).toBe(Facade.messages);
  });

});
