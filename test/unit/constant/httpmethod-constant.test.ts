
import { HttpMethod } from "../../../src/constant/communication.constant";

describe('HttpMethod constant', () => {
  
  test('COPY constant shoule be a copy', () => {
    expect(HttpMethod.COPY).toBe("copy");
  });

  test('DELETE constant shoule be a delete', () => {
    expect(HttpMethod.DELETE).toBe("delete");
  });

  test('GET constant shoule be a get', () => {
    expect(HttpMethod.GET).toBe("get");
  });

  test('HEAD constant shoule be a head', () => {
    expect(HttpMethod.HEAD).toBe("head");
  });

  test('OPTIONS constant shoule be a options', () => {
    expect(HttpMethod.OPTIONS).toBe("options");
  });

  test('PATCH constant shoule be a patch', () => {
    expect(HttpMethod.PATCH).toBe("patch");
  });

  test('POST constant shoule be a post', () => {
    expect(HttpMethod.POST).toBe("post");
  });

  test('PUT constant shoule be a put', () => {
    expect(HttpMethod.PUT).toBe("put");
  });

});
