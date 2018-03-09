import { Injectable, Injector, NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

var AuthHttpInterceptor = /** @class */ (function () {
    function AuthHttpInterceptor(injector) {
        this.injector = injector;
    }
    AuthHttpInterceptor.prototype.intercept = function (req, next) {
        var newRequest = req.clone();
        var token = 'get my token...';
        newRequest = req.clone({
            headers: req.headers.set('Authorization', "Bearer " + token)
        });
        return next.handle(newRequest);
    };
    return AuthHttpInterceptor;
}());
AuthHttpInterceptor.decorators = [
    { type: Injectable },
];
AuthHttpInterceptor.ctorParameters = function () { return [
    { type: Injector, },
]; };
var MyLibModule = /** @class */ (function () {
    function MyLibModule() {
    }
    MyLibModule.forRoot = function (config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: MyLibModule,
            providers: [
                config.interceptor || { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true },
            ]
        };
    };
    return MyLibModule;
}());
MyLibModule.decorators = [
    { type: NgModule },
];
MyLibModule.ctorParameters = function () { return []; };

export { MyLibModule, AuthHttpInterceptor };
//# sourceMappingURL=my-lib.js.map
