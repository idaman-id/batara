
export default abstract class SystemError extends Error
{
  
  constructor(message: string = "system error")
  {
    super(message);
    /** 
     * There is an issue with custom derrived class in typescript
     * more info: https://github.com/Microsoft/TypeScript/issues/13965
     */
    Object.setPrototypeOf(this, new.target.prototype);
  }

}
