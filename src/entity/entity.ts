
export default abstract class Entity
{

  public toObject(): object
  {
    return this;
  }

  public toJson(): string
  {
    return JSON.stringify(this.toObject());
  }

}
