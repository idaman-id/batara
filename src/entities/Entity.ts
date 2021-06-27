
export default abstract class Entity
{

  toObject(): object
  {
    return this;
  }

  toJson(): string
  {
    return JSON.stringify(this.toObject());
  }

}
