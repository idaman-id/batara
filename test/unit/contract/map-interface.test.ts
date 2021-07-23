
import Map from "../../../src/contract/map.interface";

describe('Interface Map', () => {

  it('should be valid with string data type', () => {
    const setting: Map<string> = {
      name: "service-name",
      type: "service-type"
    };

    expect(setting.hasOwnProperty("name")).toBeTruthy();
    expect(setting.hasOwnProperty("type")).toBeTruthy();
  });

  it('should be undefined-able', () => {
    const setting: Map<undefined> = {
      name: undefined,
      type: undefined
    };

    expect(setting.hasOwnProperty("name")).toBeTruthy();
    expect(setting.hasOwnProperty("type")).toBeTruthy();
  });

  it('should be nullable', () => {
    const setting: Map<null> = {
      name: null,
      type: null
    };

    expect(setting.hasOwnProperty("name")).toBeTruthy();
    expect(setting.hasOwnProperty("type")).toBeTruthy();
  });

  it('should be generic filled with any type', () => {
    const setting: Map<any> = {
      name: "service-name",
      total_instances: 1
    };

    expect(setting.hasOwnProperty("name")).toBeTruthy();
    expect(setting.hasOwnProperty("total_instances")).toBeTruthy();
  });

});
