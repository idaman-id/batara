import { Environment } from "../constant/environment.constant";
export default interface ApplicationSetting {
    readonly name: string;
    readonly version: string;
    readonly environment: Environment;
    readonly debug: boolean;
    readonly timezone: string;
    readonly host: string;
    readonly port: number;
}
