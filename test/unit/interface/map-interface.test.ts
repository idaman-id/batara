
import Map from "../../../src/interface/map.interface";

describe('Interface Map', () => {

  beforeAll(() => {

  });

  afterAll(() => {
    
  });

  beforeEach(() => {

  });

  afterEach(() => {
    
  });

  test('Map shape should be valid', () => {
    const setting: Map<string> = {
      name: "service-name",
      type: "service-type"
    };

    expect(setting.hasOwnProperty("name")).toBeTruthy();
    expect(setting.hasOwnProperty("type")).toBeTruthy();
  });

  test('Map shape should be undefined-able', () => {
    const setting: Map<undefined> = {
      name: undefined,
      type: undefined
    };

    expect(setting.hasOwnProperty("name")).toBeTruthy();
    expect(setting.hasOwnProperty("type")).toBeTruthy();
  });

  test('Map shape should be nullable', () => {
    const setting: Map<null> = {
      name: null,
      type: null
    };

    expect(setting.hasOwnProperty("name")).toBeTruthy();
    expect(setting.hasOwnProperty("type")).toBeTruthy();
  });

  test('Map shape should be generic', () => {
    const setting: Map<any> = {
      name: "service-name",
      total_instances: 1
    };

    expect(setting.hasOwnProperty("name")).toBeTruthy();
    expect(setting.hasOwnProperty("total_instances")).toBeTruthy();
  });

});
