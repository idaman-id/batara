
import { LogSetting } from "../../../src/logger/log.type";

describe('Type Log', () => {

  let logSetting: LogSetting;

  beforeEach(() => {
    logSetting = exec();
  });

  const exec = () => {
    return {
      interval: "1d",
      path: "/storage/log/access/",
      fileName: "custom-file-01-01-2021",
    };
  };

  test('Type shape should be valid', () => {
    
    expect(logSetting.hasOwnProperty("interval")).toBeTruthy();
    expect(logSetting.hasOwnProperty("path")).toBeTruthy();
    expect(logSetting.hasOwnProperty("fileName")).toBeTruthy();

    expect(typeof logSetting.interval === "string").toBeTruthy();
    expect(typeof logSetting.path === "string").toBeTruthy();
    expect(typeof logSetting.fileName === "string").toBeTruthy();
  });

});
