
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

  it('should be an instance of base controller', () => {

    expect(controller instanceof Controller).toBeTruthy();
  });

});
