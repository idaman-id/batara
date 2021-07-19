
import ErrorFormat from "../../../src/factory/error-format.factory";
import { ValidationResult, Factory } from "../../../src/interface";

describe('Factory ErrorFormat', () => {

  let factory: Factory<Array<ValidationResult>>;

  beforeEach(() => {
    factory = exec();
  });

  const exec = () => {
    return new ErrorFormat();
  };

  test('Factory shape should be valid', () => {
    
    expect(typeof factory.make).toBe("function");
  });

  test('Factory should return empty array if parameter supplied is empty', () => {
    
    expect(factory.make([]).length).toBe(0);
  });

  test('Factory should return valid set of result if parameter supplied is valid', () => {
    const input = factory.make([
      {
        location: "query",
        param: "username",
        value: "kokoraka",
        msg: "Username is already registered",
      }
    ]);
    const expectedResult = [
      { message: "Username is already registered", field: "username" }
    ];

    expect(input).toEqual(expectedResult);
  });

  test('Factory should throw error if parameter is not passed', () => {

    expect(() => {
      factory.make();
    }).toThrow("Cannot read property 'map' of undefined");
  });

  test('Factory should throw error if parameter data type is not valid', () => {

    expect(() => {
      factory.make(3);
    }).toThrow("errors.map is not a function");
    expect(() => {
      factory.make([null]);
    }).toThrow("Cannot read property 'msg' of null");
  });

});
