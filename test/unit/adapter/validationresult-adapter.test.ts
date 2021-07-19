
import { Request } from "../../../src/interface/http.interface";
import ValidationResult from  "../../../src/adapter/validation-result.adapter";

describe('Adapter ValidationResult', () => {
  
  let request: Request;
  let adapter: ValidationResult;

  beforeEach(() => {
    request = {} as Request;
    adapter = exec();
  });

  const exec = () => {
    return new ValidationResult(request);
  };

  describe('isError method', () => {
    it('should return false when there is no error', () => {
      const isError = jest.spyOn(ValidationResult.prototype as any, 'isError');
      isError.mockImplementation(() => {
        return false;
      });

      const returnValue = adapter.isError();

      expect(returnValue).toBe(false);
    });

    it('should return true when there is an error', () => {
      const isError = jest.spyOn(ValidationResult.prototype as any, 'isError');
      isError.mockImplementation(() => {
        return true;
      });

      const returnValue = adapter.isError();

      expect(returnValue).toBe(true);
    });
  });

  describe('isSuccess method', () => {
    it('should return true when there is no error', () => {
      const isSuccess = jest.spyOn(ValidationResult.prototype as any, 'isSuccess');
      isSuccess.mockImplementation(() => {
        return true;
      });

      const returnValue = adapter.isSuccess();

      expect(returnValue).toBe(true);
    });

    it('should return false when there is an error', () => {
      const isSuccess = jest.spyOn(ValidationResult.prototype as any, 'isSuccess');
      isSuccess.mockImplementation(() => {
        return false;
      });

      const returnValue = adapter.isSuccess();

      expect(returnValue).toBe(false);
    });
  });

  describe('formatedErrors getters', () => {
    it('should return empty array when there is no error', () => {
      const formatedErrors = jest.spyOn(ValidationResult.prototype as any, 'formatedErrors', 'get');
      formatedErrors.mockImplementation(() => {
        return []
      });
      const resultValue = adapter.formatedErrors;

      expect(resultValue).toEqual([]);
    });

    it('should return list of ValidationError when there is an error', () => {
      const formatedErrors = jest.spyOn(ValidationResult.prototype as any, 'formatedErrors', 'get');
      formatedErrors.mockImplementation(() => {
        return [
          {
            message: "Invalid value",
            field: "custom"
          }
        ]
      });
      const resultValue = adapter.formatedErrors;

      expect(resultValue.length).toBe(1);
      expect(resultValue).toEqual([
        {
          message: "Invalid value",
          field: "custom"
        }
      ]);
    });
  });

});
