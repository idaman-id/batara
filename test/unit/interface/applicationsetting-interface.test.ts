
import ApplicationSetting from "../../../src/interface/application-setting.interface";

describe('Interface ApplicationSetting', () => {

  let appSetting: ApplicationSetting;

  beforeAll(() => {

  });

  afterAll(() => {
    
  });

  beforeEach(() => {
    appSetting = exec();
  });

  afterEach(() => {
    
  });

  const exec = () => {
    return {
      name: "service",
      version: "1.0",
      debug: true,
      environment: "local",
      timezone: "+07:00",
      host: "localhost",
      port: 3000,
    };
  };

  test('Interface shape should be valid', () => {
    
    expect(appSetting.hasOwnProperty("name")).toBeTruthy();
    expect(appSetting.hasOwnProperty("version")).toBeTruthy();
    expect(appSetting.hasOwnProperty("debug")).toBeTruthy();
    expect(appSetting.hasOwnProperty("environment")).toBeTruthy();
    expect(appSetting.hasOwnProperty("timezone")).toBeTruthy();
    expect(appSetting.hasOwnProperty("host")).toBeTruthy();
    expect(appSetting.hasOwnProperty("port")).toBeTruthy();
  });

});
