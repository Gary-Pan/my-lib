(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common/http'], factory) :
	(factory((global.my = global.my || {}, global.my.lib = {}),global.ng.core,global.ng.common.http));
}(this, (function (exports,core,http) { 'use strict';

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
    { type: core.Injectable },
];
AuthHttpInterceptor.ctorParameters = function () { return [
    { type: core.Injector, },
]; };
var MyLibModule = /** @class */ (function () {
    function MyLibModule() {
    }
    MyLibModule.forRoot = function (config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: MyLibModule,
            providers: [
                config.interceptor || { provide: http.HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true },
            ]
        };
    };
    return MyLibModule;
}());
MyLibModule.decorators = [
    { type: core.NgModule },
];
MyLibModule.ctorParameters = function () { return []; };

exports.MyLibModule = MyLibModule;
exports.AuthHttpInterceptor = AuthHttpInterceptor;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=my-lib.umd.js.map
