import { Injectable, Injector, NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class AuthHttpInterceptor {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        this.injector = injector;
    }
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    intercept(req, next) {
        let /** @type {?} */ newRequest = req.clone();
        let /** @type {?} */ token = 'get my token...';
        newRequest = req.clone({
            headers: req.headers.set('Authorization', `Bearer ${token}`)
        });
        return next.handle(newRequest);
    }
}
AuthHttpInterceptor.decorators = [
    { type: Injectable },
];
/** @nocollapse */
AuthHttpInterceptor.ctorParameters = () => [
    { type: Injector, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */

class MyLibModule {
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config = {}) {
        return {
            ngModule: MyLibModule,
            providers: [
                config.interceptor || { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true },
            ]
        };
    }
}
MyLibModule.decorators = [
    { type: NgModule },
];
/** @nocollapse */
MyLibModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { MyLibModule, AuthHttpInterceptor };
//# sourceMappingURL=my-lib.js.map
