
import * as Facade from "../../../src/constant";
import { HttpMethod } from "../../../src/constant/communication.constant";
import { attributes, messages } from "../../../src/constant/language.constant";

describe('Facade Constant', () => {
  
  test('HttpMethod enum should be exported in Constant Facade', () => {    
    expect(HttpMethod.GET).toBe(Facade.HttpMethod.GET);
  });
  test('attributes enum should be exported in Constant Facade', () => {    
    expect(attributes).toBe(Facade.attributes);
  });
  test('messages enum should be exported in Constant Facade', () => {    
    expect(messages).toBe(Facade.messages);
  });

});
