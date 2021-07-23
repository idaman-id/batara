
import Provider from  "../../../src/provider/provider";
import AppProvider from  "../../../src/provider/application.provider";
import RouteProvider from  "../../../src/provider/route.provider";
import * as Facade from "../../../src/provider";

describe('Facade Provider', () => {
  
  it('should be exported in Provider Facade', () => {  
    const isExported = Facade.Provider === Provider;
    expect(isExported).toBeTruthy();
  });

  it('should be exported in AppProvider Facade', () => {  
    const isExported = Facade.Application === AppProvider;
    expect(isExported).toBeTruthy();
  });

  it('should be exported in RouteProvider Facade', () => {  
    const isExported = Facade.Route === RouteProvider;
    expect(isExported).toBeTruthy();
  });

});
