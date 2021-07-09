
export default interface ApplicationSetting
{

  readonly name: string,
  readonly version: string,
  readonly environment: string,
  readonly debug: boolean,
  readonly timezone: string,
  readonly host: string,
  readonly port: number,

}
