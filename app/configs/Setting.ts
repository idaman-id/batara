
import Application from "../contracts/interface/Application";

export const setting = {
  application: {
    name: "service",
    version: "1.0",
    environment: "local",
    debug: false,
    timezone: "+07:00",
    host: "localhost",
    port: 3000
  } as Application,
};
