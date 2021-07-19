
import Controller from  "../../../src/controller/controller";

class CustomController extends Controller 
{

  static list() {}

}

describe('Class Controller', () => {

  let controller: CustomController;

  beforeEach(() => {
    controller = exec();
  });

  const exec = () => {
    return new CustomController();
  };

  test('Controller class should be an instance of Controller (base)', () => {

    expect(controller instanceof Controller).toBeTruthy();
  });

});
