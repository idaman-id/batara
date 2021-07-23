
import Entity from  "../../../src/entity/entity";

describe('Class Entity', () => {
  
  type keyDataType = string | undefined | null;
  let testEntity: Entity;
  let value: keyDataType = "test";

  const exec = () => {
    class TestEntity extends Entity {

      key?: keyDataType;

      constructor(value: keyDataType)
      {
        super();
        this.key = value;
      }

    }

    return new TestEntity(value);
  };

  it('should have valid instance of Entity class', () => {
    testEntity = exec();

    expect(testEntity instanceof Entity).toBeTruthy();
  });

  it('should have toJson method', () => {
    testEntity = exec();

    expect(testEntity.toJson()).toMatch("{\"key\":\"test\"}");
  });

  it('should have toObject method', () => {
    testEntity = exec();

    expect(testEntity.toObject()).toMatchObject({ key: "test" });
  });

  it('toObject method should return key with null value', () => {
    value = null;
    testEntity = exec();
    
    expect(testEntity.toObject()).toMatchObject({ key: null });
  });

  it('toObject method should not return key with undefined value', () => {
    value = undefined;
    testEntity = exec();

    expect(testEntity.toObject()).toMatchObject({ });
  });

});
