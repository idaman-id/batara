
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

  test('Entity class should be extendable', () => {
    testEntity = exec();

    expect(testEntity instanceof Entity).toBeTruthy();
  });

  test('Entity class should have toJson method', () => {
    testEntity = exec();

    expect(testEntity.toJson()).toMatch("{\"key\":\"test\"}");
  });

  test('Entity class should have toObject method', () => {
    testEntity = exec();

    expect(testEntity.toObject()).toMatchObject({ key: "test" });
  });

  test('toObject method should return key with null value', () => {
    value = null;
    testEntity = exec();
    
    expect(testEntity.toObject()).toMatchObject({ key: null });
  });

  test('toObject method should not return key with undefined value', () => {
    value = undefined;
    testEntity = exec();

    expect(testEntity.toObject()).toMatchObject({ });
  });

});
