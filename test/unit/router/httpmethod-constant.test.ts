
import { HttpMethod } from "../../../src/router/http.interface";

describe('HttpMethod constant', () => {
  
  it('should contain COPY constant', () => {
    expect(HttpMethod.COPY).toBe("copy");
  });

  it('should contain DELETE constant', () => {
    expect(HttpMethod.DELETE).toBe("delete");
  });

  it('should contain GET constant', () => {
    expect(HttpMethod.GET).toBe("get");
  });

  it('should contain HEAD constant', () => {
    expect(HttpMethod.HEAD).toBe("head");
  });

  it('should contain OPTIONS constant', () => {
    expect(HttpMethod.OPTIONS).toBe("options");
  });

  it('should contain PATCH constant', () => {
    expect(HttpMethod.PATCH).toBe("patch");
  });

  it('should contain POST constant', () => {
    expect(HttpMethod.POST).toBe("post");
  });

  it('should contain PUT constant', () => {
    expect(HttpMethod.PUT).toBe("put");
  });

});
