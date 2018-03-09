import { NgModule, ModuleWithProviders, Provider } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthHttpInterceptor } from './auth-http.interceptor';

export * from './auth-http.interceptor';

export interface MyLibModuleConfig {
  interceptor?: Provider;
}

@NgModule()
export class MyLibModule {
  public static forRoot(config: MyLibModuleConfig = {}): ModuleWithProviders {
    return {
      ngModule: MyLibModule,
      providers: [
        config.interceptor || { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true },
      ]
    };
  }
}
