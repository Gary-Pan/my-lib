import { ModuleWithProviders, Provider } from '@angular/core';
export * from './auth-http.interceptor';
export interface MyLibModuleConfig {
    interceptor?: Provider;
}
export declare class MyLibModule {
    static forRoot(config?: MyLibModuleConfig): ModuleWithProviders;
}
