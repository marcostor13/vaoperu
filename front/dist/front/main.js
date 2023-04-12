(self["webpackChunkfront"] = self["webpackChunkfront"] || []).push([["main"],{

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _modules_auth_guards_role_admin_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/auth/guards/role-admin.guard */ 12513);
/* harmony import */ var _modules_auth_guards_role_provider_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/auth/guards/role-provider.guard */ 67936);
/* harmony import */ var _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/components/not-found/not-found.component */ 59442);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);






const routes = [
    {
        path: 'admin',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_fortawesome_free-solid-svg-icons_index_es_js-node_modules_primeng_fesm20-3a2f66"), __webpack_require__.e("src_app_modules_admin_admin_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/admin/admin.module */ 27442)).then(m => m.AdminModule),
        canActivate: [_modules_auth_guards_role_admin_guard__WEBPACK_IMPORTED_MODULE_0__.RoleAdminGuard]
    },
    {
        path: 'auth',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_auth_auth_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/auth/auth.module */ 83970)).then(m => m.AuthModule)
    },
    {
        path: 'provider',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_provider_provider_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/provider/provider.module */ 91810)).then(m => m.ProviderModule),
        canActivate: [_modules_auth_guards_role_provider_guard__WEBPACK_IMPORTED_MODULE_1__.RoleProviderGuard]
    },
    {
        path: '404',
        component: _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__.NotFoundComponent
    },
    {
        path: 'web',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2015_forms_mjs-node_modules_primeng_fesm2015_primeng-b-2560c8"), __webpack_require__.e("default-node_modules_angular_cdk_fesm2015_scrolling_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2015_primeng-dialog_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2015_primeng-confirmpopup_mjs"), __webpack_require__.e("default-node_modules_fortawesome_free-solid-svg-icons_index_es_js-node_modules_primeng_fesm20-3a2f66"), __webpack_require__.e("default-src_app_modules_provider_modules_product_services_product_service_ts-src_app_modules_-b26191"), __webpack_require__.e("default-src_app_shared_components_header_header_module_ts-node_modules_primeng_fesm2015_prime-6b0193"), __webpack_require__.e("default-src_app_modules_admin_modules_category-subcategory-profile_services_category-subcateg-67379b"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modules_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/home/home.module */ 44882)).then(m => m.HomeModule),
    },
    {
        path: '',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2015_forms_mjs-node_modules_primeng_fesm2015_primeng-b-2560c8"), __webpack_require__.e("default-node_modules_angular_cdk_fesm2015_scrolling_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2015_primeng-dialog_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2015_primeng-confirmpopup_mjs"), __webpack_require__.e("default-node_modules_fortawesome_free-solid-svg-icons_index_es_js-node_modules_primeng_fesm20-3a2f66"), __webpack_require__.e("default-src_app_modules_provider_modules_product_services_product_service_ts-src_app_modules_-b26191"), __webpack_require__.e("default-src_app_shared_components_header_header_module_ts-node_modules_primeng_fesm2015_prime-6b0193"), __webpack_require__.e("default-src_app_modules_admin_modules_category-subcategory-profile_services_category-subcateg-67379b"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modules_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/home/home.module */ 44882)).then(m => m.HomeModule),
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 25843);
/* harmony import */ var subsink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! subsink */ 87478);
/* harmony import */ var _capacitor_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/app */ 93253);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 55778);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/platform */ 14390);
/* harmony import */ var _services_general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/general.service */ 21864);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/toast */ 72802);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/progressspinner */ 60120);











function AppComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "p-progressSpinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(store, platform, generalService, _location) {
        this.store = store;
        this.platform = platform;
        this.generalService = generalService;
        this._location = _location;
        this.subs = new subsink__WEBPACK_IMPORTED_MODULE_0__.SubSink();
        this.title = 'front';
        this.isLoading = false;
        this.subscriptionLoading();
        this.setPlatform(); //setea si es android o web .getPlatform()
        this.setBackButton();
    }
    subscriptionLoading() {
        this.subs.add(this.store.select((state) => state.Reducer.isLoading)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.delay)(0))
            .subscribe((isLoading) => {
            this.isLoading = isLoading;
        }));
    }
    setPlatform() {
        if (this.platform.ANDROID) {
            this.generalService.setPlatform('Android');
        }
        else {
            this.generalService.setPlatform('Web');
        }
    }
    setBackButton() {
        _capacitor_app__WEBPACK_IMPORTED_MODULE_1__.App.addListener('backButton', () => {
            if (this._location.isCurrentPathEqualTo('/')) {
                navigator['app'].exitApp();
            }
            else {
                this._location.back();
            }
        });
    }
    ngOnDestroy() {
        this.subs.unsubscribe();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_general_service__WEBPACK_IMPORTED_MODULE_2__.GeneralService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.Location)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 3, consts: [[3, "baseZIndex", "autoZIndex"], ["class", "load", 4, "ngIf"], [1, "load"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "router-outlet")(1, "p-toast", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AppComponent_div_2_Template, 2, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("baseZIndex", 100000000)("autoZIndex", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterOutlet, primeng_toast__WEBPACK_IMPORTED_MODULE_9__.Toast, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_10__.ProgressSpinner], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngrx/store */ 55778);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 40398);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ 73598);
/* harmony import */ var _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interceptors/auth.interceptor */ 78189);
/* harmony import */ var _interceptors_httperrorinterceptor_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interceptors/httperrorinterceptor.interceptor */ 19804);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/progressspinner */ 60120);
/* harmony import */ var _angular_fire_compat__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/fire/compat */ 11879);
/* harmony import */ var _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/fire/compat/storage */ 55574);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _reducers_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @reducers/reducer */ 56118);
/* harmony import */ var src_app_store_reducers_metareducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/store/reducers/metareducer */ 92248);
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngrx/store-devtools */ 49222);
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/message */ 48129);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/api */ 81122);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/toast */ 72802);
/* harmony import */ var _hammer_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hammer.config */ 52210);
/* harmony import */ var _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/components/not-found/not-found.component */ 59442);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);

























class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ providers: [
        _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_2__.AuthTokenHttpInterceptorProvider,
        _interceptors_httperrorinterceptor_interceptor__WEBPACK_IMPORTED_MODULE_3__.HttpErrorHttpInterceptorProvider,
        primeng_api__WEBPACK_IMPORTED_MODULE_10__.MessageService,
        {
            provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.HAMMER_GESTURE_CONFIG,
            useClass: _hammer_config__WEBPACK_IMPORTED_MODULE_7__.HammerConfig
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _ngrx_store__WEBPACK_IMPORTED_MODULE_13__.StoreModule.forRoot({ Reducer: _reducers_reducer__WEBPACK_IMPORTED_MODULE_5__.Reducer }, { metaReducers: [src_app_store_reducers_metareducer__WEBPACK_IMPORTED_MODULE_6__.storageMetaReducer] }),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_14__.StoreDevtoolsModule.instrument({
                maxAge: 25,
                logOnly: src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.production, // Restrict extension to log-only mode
            }),
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__.FontAwesomeModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClientModule,
            primeng_progressspinner__WEBPACK_IMPORTED_MODULE_17__.ProgressSpinnerModule,
            _angular_fire_compat__WEBPACK_IMPORTED_MODULE_18__.AngularFireModule.initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebaseConfig),
            _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_19__.AngularFireStorageModule,
            primeng_message__WEBPACK_IMPORTED_MODULE_20__.MessageModule,
            primeng_toast__WEBPACK_IMPORTED_MODULE_21__.ToastModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.HammerModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__.NotFoundComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_13__.StoreRootModule, _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_14__.StoreDevtoolsModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__.FontAwesomeModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClientModule,
        primeng_progressspinner__WEBPACK_IMPORTED_MODULE_17__.ProgressSpinnerModule, _angular_fire_compat__WEBPACK_IMPORTED_MODULE_18__.AngularFireModule, _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_19__.AngularFireStorageModule,
        primeng_message__WEBPACK_IMPORTED_MODULE_20__.MessageModule,
        primeng_toast__WEBPACK_IMPORTED_MODULE_21__.ToastModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.HammerModule] }); })();


/***/ }),

/***/ 52210:
/*!**********************************!*\
  !*** ./src/app/hammer.config.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HammerConfig": () => (/* binding */ HammerConfig)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ 15977);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);


class HammerConfig extends _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.HammerGestureConfig {
    constructor() {
        super(...arguments);
        this.overrides = {
            swipe: { direction: hammerjs__WEBPACK_IMPORTED_MODULE_0__.DIRECTION_HORIZONTAL },
            pinch: { enable: false },
            rotate: { enable: false }
        };
    }
}


/***/ }),

/***/ 78189:
/*!**************************************************!*\
  !*** ./src/app/interceptors/auth.interceptor.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthInterceptor": () => (/* binding */ AuthInterceptor),
/* harmony export */   "AuthTokenHttpInterceptorProvider": () => (/* binding */ AuthTokenHttpInterceptorProvider)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_general_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services/general.service */ 21864);



class AuthInterceptor {
    constructor(general) {
        this.general = general;
    }
    intercept(request, next) {
        const token = (localStorage.getItem('vaouser')) ? JSON.parse(localStorage.getItem('vaouser')).token : null;
        let clone = request.clone();
        if (token) {
            clone = clone.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
        }
        this.general.isLoad(true);
        return next.handle(clone);
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_general_service__WEBPACK_IMPORTED_MODULE_0__.GeneralService)); };
AuthInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });
const AuthTokenHttpInterceptorProvider = {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
};


/***/ }),

/***/ 19804:
/*!******************************************************************!*\
  !*** ./src/app/interceptors/httperrorinterceptor.interceptor.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpErrorHttpInterceptorProvider": () => (/* binding */ HttpErrorHttpInterceptorProvider),
/* harmony export */   "HttpRequestInterceptor": () => (/* binding */ HttpRequestInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 66587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_general_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/general.service */ 21864);
/* harmony import */ var _modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/auth/services/auth.service */ 12542);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ 81122);







class HttpRequestInterceptor {
    constructor(general, authService, messageService) {
        this.general = general;
        this.authService = authService;
        this.messageService = messageService;
    }
    intercept(request, next) {
        this.general.isLoad(true);
        return next.handle(request)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)((error) => {
            this.general.isLoad(false);
            if (error.status === 401) {
                this.authService.logout();
            }
            else {
                this.general.c('Error HTTP', error);
                this.messageService.add({ severity: 'Error', summary: `Error ${error.status}`, detail: JSON.stringify(error) });
            }
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(error);
        }))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((evt) => {
            if (evt instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpResponse) {
                this.general.isLoad(false);
            }
            return evt;
        }));
    }
}
HttpRequestInterceptor.ɵfac = function HttpRequestInterceptor_Factory(t) { return new (t || HttpRequestInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_services_general_service__WEBPACK_IMPORTED_MODULE_0__.GeneralService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](primeng_api__WEBPACK_IMPORTED_MODULE_7__.MessageService)); };
HttpRequestInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: HttpRequestInterceptor, factory: HttpRequestInterceptor.ɵfac });
const HttpErrorHttpInterceptorProvider = {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HTTP_INTERCEPTORS,
    useClass: HttpRequestInterceptor,
    multi: true
};


/***/ }),

/***/ 12513:
/*!*********************************************************!*\
  !*** ./src/app/modules/auth/guards/role-admin.guard.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoleAdminGuard": () => (/* binding */ RoleAdminGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 12542);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 55778);
/* harmony import */ var _services_general_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/general.service */ 21864);





class RoleAdminGuard {
    constructor(authService, router, store, generalGeneral) {
        this.authService = authService;
        this.router = router;
        this.store = store;
        this.generalGeneral = generalGeneral;
    }
    canActivate(next, state) {
        const role = this.authService.getRole();
        if (!role || role.indexOf('admin') === -1) {
            this.router.navigate(['/']);
            return false;
        }
        else {
            return true;
        }
    }
}
RoleAdminGuard.ɵfac = function RoleAdminGuard_Factory(t) { return new (t || RoleAdminGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_general_service__WEBPACK_IMPORTED_MODULE_1__.GeneralService)); };
RoleAdminGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: RoleAdminGuard, factory: RoleAdminGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 67936:
/*!************************************************************!*\
  !*** ./src/app/modules/auth/guards/role-provider.guard.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoleProviderGuard": () => (/* binding */ RoleProviderGuard)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 25843);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 12542);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 55778);
/* harmony import */ var _services_general_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/general.service */ 21864);






class RoleProviderGuard {
    constructor(authService, router, store, generalGeneral) {
        this.authService = authService;
        this.router = router;
        this.store = store;
        this.generalGeneral = generalGeneral;
    }
    canActivate(next, state) {
        const role = this.authService.getRole();
        if (!role || (role.indexOf('provider') === -1)) {
            this.router.navigate(['/']);
            return false;
        }
        else if (role.length > 1) {
            this.store.select((sta) => sta.Reducer.currentRole)
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.delay)(0))
                .subscribe((role) => {
                if (!role) {
                    this.router.navigate(['/hub']);
                }
            });
            return true;
        }
        else {
            return true;
        }
    }
}
RoleProviderGuard.ɵfac = function RoleProviderGuard_Factory(t) { return new (t || RoleProviderGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_general_service__WEBPACK_IMPORTED_MODULE_1__.GeneralService)); };
RoleProviderGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: RoleProviderGuard, factory: RoleProviderGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 12542:
/*!*******************************************************!*\
  !*** ./src/app/modules/auth/services/auth.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services/api.service */ 5830);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);



class AuthService {
    constructor(api, router) {
        this.api = api;
        this.router = router;
    }
    login(data) {
        return this.api.api({
            service: 'signin',
            data: data,
            type: 'post'
        });
    }
    register(data) {
        return this.api.api({
            service: 'signup',
            data: data,
            type: 'post'
        });
    }
    isLogin() {
        const user = localStorage.getItem('vaouser');
        if (user && user !== '') {
            return true;
        }
        else {
            return false;
        }
    }
    isLoginUser() {
        const user = localStorage.getItem('vaouser');
        if (user && user !== '') {
            return JSON.parse(user);
        }
        else {
            return null;
        }
    }
    getRole() {
        var _a;
        return localStorage.getItem('vaouser') ? (_a = JSON.parse(localStorage.getItem('vaouser'))) === null || _a === void 0 ? void 0 : _a.role : null;
    }
    getUserID() {
        var _a;
        return localStorage.getItem('vaouser') ? (_a = JSON.parse(localStorage.getItem('vaouser'))) === null || _a === void 0 ? void 0 : _a._id : null;
    }
    sendEmailCode(email) {
        return this.api.api({
            service: 'send-email-code',
            data: { email },
            type: 'post'
        });
    }
    codeComprobation(email, code) {
        return this.api.api({
            service: 'code-comprobation',
            data: { email, code },
            type: 'post'
        });
    }
    issetEmail(email) {
        return this.api.api({
            service: 'isset-email',
            data: { email },
            type: 'post'
        });
    }
    logout() {
        localStorage.removeItem('vaouser');
        window.location.reload();
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5830:
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiService": () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);



class ApiService {
    constructor(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api;
    }
    api(data) {
        if (data.type == 'get') {
            return this.http.get(`${this.baseUrl + data.service}`);
        }
        else if (data.type == 'post') {
            return this.http.post(`${this.baseUrl + data.service}`, data.data);
        }
        else if (data.type == 'patch') {
            return this.http.patch(`${this.baseUrl + data.service}`, data.data);
        }
        else if (data.type == 'delete') {
            return this.http.delete(`${this.baseUrl + data.service}`);
        }
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
ApiService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 21864:
/*!*********************************************!*\
  !*** ./src/app/services/general.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeneralService": () => (/* binding */ GeneralService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _actions_setdata_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @actions/setdata.actions */ 75815);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 12378);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! xlsx */ 98810);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash-es */ 38163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ 55778);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/compat/storage */ 55574);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ 5830);










class GeneralService {
    constructor(store, router, storage, api) {
        this.store = store;
        this.router = router;
        this.storage = storage;
        this.api = api;
        this.diacriticSensitiveRegex = (text) => {
            if (text) {
                return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            }
            else {
                return text;
            }
        };
    }
    httpBuildQuery(params) {
        if (typeof params === 'undefined' || typeof params !== 'object') {
            params = {};
            return params;
        }
        var query = '?';
        var index = 0;
        for (var i in params) {
            index++;
            var param = i;
            var value = params[i];
            if (index == 1) {
                query += param + '=' + value;
            }
            else {
                query += '&' + param + '=' + value;
            }
        }
        return query;
    }
    searchElementByNameKey(array, key, value) {
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            if (element[key] == value) {
                return element;
            }
        }
    }
    searchIndexByNameKey(array, key, value) {
        var res = false;
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            if (element[key] == value) {
                res = i;
            }
        }
        return res;
    }
    getRandomArbitrary(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
    //Inserta un objeto a partir de una posisión,
    insertObjectInPositionArray(obj, array, indexPosPrev) {
        let res = [];
        for (let i = 0; i < indexPosPrev; i++) {
            res.push(array[i]);
        }
        res.push(obj);
        if (indexPosPrev < array.length) {
            for (let i = indexPosPrev; i < array.length; i++) {
                res.push(array[i]);
            }
        }
        return res;
    }
    //FORMAT:   separator_1   ===> get 1
    getIndexToId(e) {
        e = e.split('_');
        return e[e.length - 1];
    }
    //ELIMINAR UN ELEMENTO DEL ARRAY POR ID
    deleteElementOfArray(value, array) {
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            if (element.id == value) {
                array.splice(index, 1);
            }
        }
        return array;
    }
    deleteElementOfArrayintoArray(parentId, id, array) {
        for (let index = 0; index < array.length; index++) {
            if (array[index].id == parentId) {
                for (let x = 0; x < array[index].elements.length; x++) {
                    if (array[index].elements[x].id == id) {
                        array[index].elements.splice(x, 1);
                    }
                }
            }
        }
        return array;
    }
    getParametersURL(url) {
        let params = url.split('?')[1].split('&');
        var res = [];
        for (let index = 0; index < params.length; index++) {
            let ele = params[index].split('=');
            res.push({
                name: ele[0],
                value: ele[1]
            });
        }
        return res;
    }
    redirect(path, data) {
        this.store.dispatch(_actions_setdata_actions__WEBPACK_IMPORTED_MODULE_0__.setdata({ data: data }));
        this.router.navigate([path]);
    }
    c(title, message) {
        console.log('%c' + title + '%c=>', "background-color: purple; color:white;font-family:system-ui;font-size:10pt;font-weight:bold;padding: 4px", "background-color: white; color:purple;font-size:10pt;font-weight:bold;padding: 4px", message);
    }
    isLoad(is) {
        this.store.dispatch(_actions_setdata_actions__WEBPACK_IMPORTED_MODULE_0__.setLoading({ isLoading: is }));
    }
    setCurrentRole(role) {
        this.store.dispatch(_actions_setdata_actions__WEBPACK_IMPORTED_MODULE_0__.setCurrentRole({ currentRole: role }));
    }
    setPlatform(platform) {
        this.store.dispatch(_actions_setdata_actions__WEBPACK_IMPORTED_MODULE_0__.setPlatform({ platform }));
    }
    setUrlBack(urlBack) {
        this.store.dispatch(_actions_setdata_actions__WEBPACK_IMPORTED_MODULE_0__.setUrlBack({ urlBack }));
    }
    styles() {
        return 'red';
    }
    uploadImageMultiple(images, path) {
        var arrayRes = [];
        var task;
        var fileRef;
        var count = 0;
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__.Observable((obs) => {
            images.map((image) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                if (image.file) {
                    const filePath = `${path}${new Date().getTime()}_${image.file.name}`;
                    fileRef = this.storage.ref(filePath);
                    task = yield (yield this.storage.upload(filePath, image.file)).ref.getDownloadURL();
                    count++;
                    arrayRes.push(task);
                    if (count === images.length) {
                        obs.next(arrayRes);
                        obs.complete();
                    }
                    else {
                        obs.next((count + 1) * 100 / images.length);
                    }
                }
                else {
                    count++;
                    if (count === images.length) {
                        obs.next(false);
                        obs.complete();
                    }
                }
            }));
        });
    }
    uploadImageMultipleByBlob(images, path) {
        var arrayRes = [];
        var task;
        var fileRef;
        var count = 0;
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__.Observable((obs) => {
            images.map((image) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                if (image.file) {
                    const filePath = `${path}${new Date().getTime()}_${image.file.name}`;
                    fileRef = this.storage.ref(filePath);
                    task = yield (yield this.storage.storage.ref(filePath).putString(image.blob.split(',')[1], "base64", { contentType: 'image/png' })).ref.getDownloadURL();
                    this.c('task', task);
                    count++;
                    arrayRes.push(task);
                    if (count === images.length) {
                        obs.next(arrayRes);
                        obs.complete();
                    }
                    else {
                        obs.next((count + 1) * 100 / images.length);
                    }
                }
                else {
                    count++;
                    if (count === images.length) {
                        obs.next(false);
                        obs.complete();
                    }
                }
            }));
        });
    }
    uploadImage(file, path) {
        if (file === null || file === void 0 ? void 0 : file.name) {
            const filePath = `${path}${new Date().getTime()}_${file.name}`;
            const fileRef = this.storage.ref(filePath);
            const task = this.storage.upload(filePath, file);
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__.Observable((obs) => {
                task.percentageChanges().subscribe(res => {
                    if (res !== 100) {
                        obs.next(res);
                    }
                    else {
                        obs.next(100);
                        setTimeout(() => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                            fileRef.getDownloadURL().subscribe(url => {
                                obs.next(url);
                                obs.complete();
                            });
                        }), 1000);
                    }
                });
            });
        }
    }
    getBlobOrImage(image) {
        return image.url ? image.url : image.blob;
    }
    deleteImage(downloadUrl) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.storage.storage.refFromURL(downloadUrl).delete();
        });
    }
    deleteImages(downloadUrls) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            return Promise.all(downloadUrls.map((url) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                try {
                    return yield this.storage.storage.refFromURL(url).delete();
                }
                catch (e) {
                    return e;
                }
            })));
        });
    }
    sendMail(data) {
        return this.api.api({
            type: 'post',
            data: data,
            service: 'send-email'
        });
    }
    getNavigatorData() {
        return {
            appCodeName: navigator.appCodeName,
            appName: navigator.appName,
            appVersion: navigator.appVersion,
            geolocation: navigator.geolocation,
            language: navigator.language,
            platform: navigator.platform,
            product: navigator.product,
            productSub: navigator.productSub,
            userAgent: navigator.userAgent,
            vendor: navigator.vendor,
            vendorSub: navigator.vendorSub
        };
    }
    getOriginData() {
        return {
            host: location.host,
            hostname: location.hostname,
            href: location.href,
            origin: location.origin,
            pathname: location.pathname,
            port: location.port,
            protocol: location.protocol,
        };
    }
    getUserData() {
        return localStorage.getItem('bintuser') ? JSON.parse(localStorage.getItem('bintuser')) : null;
    }
    //excel
    importFromFile(data) {
        let workbook = xlsx__WEBPACK_IMPORTED_MODULE_1__.read(data, {
            type: 'binary'
        });
        let res;
        workbook.SheetNames.forEach(((sheetName) => {
            const XL_row_object = xlsx__WEBPACK_IMPORTED_MODULE_1__.utils.sheet_to_json(workbook.Sheets[sheetName]);
            const json_object = JSON.stringify(XL_row_object);
            res = JSON.parse(json_object);
        }).bind(this), this);
        return res;
    }
    exportToFile(elements, fileName) {
        const ws = xlsx__WEBPACK_IMPORTED_MODULE_1__.utils.json_to_sheet(elements);
        const wb = xlsx__WEBPACK_IMPORTED_MODULE_1__.utils.book_new();
        xlsx__WEBPACK_IMPORTED_MODULE_1__.utils.book_append_sheet(wb, ws, "data");
        xlsx__WEBPACK_IMPORTED_MODULE_1__.writeFile(wb, fileName + '.xlsx');
    }
    objectArrayToArray(data, field) {
        const dat = (0,lodash_es__WEBPACK_IMPORTED_MODULE_5__["default"])(data);
        let res = [];
        dat.map(r => {
            res = [...res, r[field]];
        });
        return res;
    }
    createImageFromBlob(image) {
        let reader = new FileReader();
        return reader.readAsDataURL(image);
    }
    getItemByID(array, id) {
        let res;
        array.map((a) => {
            if (a._id === id) {
                res = a;
            }
        });
        return res;
    }
    getPosition() {
        const options = {
            enableHighAccuracy: false,
            timeout: 5000,
            maximumAge: 0
        };
        return new Promise((resolve, reject) => {
            navigator.geolocation.watchPosition(resp => {
                resolve({ lng: resp.coords.longitude, lat: resp.coords.latitude });
            }, err => {
                reject('Para ubicar negocios por distancia, activa tu GPS');
            }, options);
        });
    }
}
GeneralService.ɵfac = function GeneralService_Factory(t) { return new (t || GeneralService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_9__.AngularFireStorage), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService)); };
GeneralService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: GeneralService, factory: GeneralService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 59442:
/*!********************************************************************!*\
  !*** ./src/app/shared/components/not-found/not-found.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundComponent": () => (/* binding */ NotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 3, vars: 0, consts: [[1, "vw-100", "p-5"], [1, "text-center"]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "P\u00E1gina no disponible");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3QtZm91bmQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 75815:
/*!**************************************************!*\
  !*** ./src/app/store/actions/setdata.actions.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setCart": () => (/* binding */ setCart),
/* harmony export */   "setCartService": () => (/* binding */ setCartService),
/* harmony export */   "setCurrentRole": () => (/* binding */ setCurrentRole),
/* harmony export */   "setLoading": () => (/* binding */ setLoading),
/* harmony export */   "setPlatform": () => (/* binding */ setPlatform),
/* harmony export */   "setUrlBack": () => (/* binding */ setUrlBack),
/* harmony export */   "setdata": () => (/* binding */ setdata),
/* harmony export */   "stateActions": () => (/* binding */ stateActions)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 55778);

// GLOBAL
const setdata = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('setdata', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setLoading = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('setloading', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setCurrentRole = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('setCurrentRole', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setCart = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('setCart', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setCartService = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('setCartService', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setPlatform = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('setPlatform', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setUrlBack = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('setUrlBack', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const stateActions = {
    setdata,
    setLoading,
    setCurrentRole,
    setCart,
    setPlatform,
    setUrlBack
};


/***/ }),

/***/ 92248:
/*!***********************************************!*\
  !*** ./src/app/store/reducers/metareducer.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "storageMetaReducer": () => (/* binding */ storageMetaReducer)
/* harmony export */ });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ 45269);

function setSavedState(state, key) {
    localStorage.setItem(key, JSON.stringify(state));
}
function getSavedState(key) {
    return JSON.parse(localStorage.getItem(key));
}
const localStorageKey = '__storage__';
function storageMetaReducer(reducer) {
    let onInit = true;
    return (state, action) => {
        const nextState = reducer(state, action);
        if (onInit) {
            onInit = false;
            const savedState = getSavedState(localStorageKey);
            return (0,lodash_es__WEBPACK_IMPORTED_MODULE_0__["default"])(nextState, savedState);
        }
        setSavedState(nextState, localStorageKey);
        return nextState;
    };
}


/***/ }),

/***/ 56118:
/*!*******************************************!*\
  !*** ./src/app/store/reducers/reducer.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Reducer": () => (/* binding */ Reducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 55778);
/* harmony import */ var _actions_setdata_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/setdata.actions */ 75815);
/* harmony import */ var _state_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state/state */ 63913);



const reducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createReducer)(_state_state__WEBPACK_IMPORTED_MODULE_1__.initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_setdata_actions__WEBPACK_IMPORTED_MODULE_0__.setdata, (state, action) => {
    return Object.assign(Object.assign({}, state), { data: state.data });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_setdata_actions__WEBPACK_IMPORTED_MODULE_0__.setLoading, (state, action) => {
    return Object.assign(Object.assign({}, state), { isLoading: action.isLoading });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_setdata_actions__WEBPACK_IMPORTED_MODULE_0__.setCurrentRole, (state, action) => {
    return Object.assign(Object.assign({}, state), { currentRole: action.currentRole });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_setdata_actions__WEBPACK_IMPORTED_MODULE_0__.setCart, (state, action) => {
    return Object.assign(Object.assign({}, state), { cart: action.cart });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_setdata_actions__WEBPACK_IMPORTED_MODULE_0__.setPlatform, (state, action) => {
    return Object.assign(Object.assign({}, state), { platform: action.platform });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_setdata_actions__WEBPACK_IMPORTED_MODULE_0__.setUrlBack, (state, action) => {
    return Object.assign(Object.assign({}, state), { urlBack: action.urlBack });
}));
function Reducer(state = _state_state__WEBPACK_IMPORTED_MODULE_1__.initialState, action) {
    return reducer(state, action);
}


/***/ }),

/***/ 63913:
/*!**************************************!*\
  !*** ./src/app/store/state/state.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": () => (/* binding */ initialState)
/* harmony export */ });
const initialCart = {
    profileProviderId: '',
    userId: '',
    items: []
};
const initialState = {
    data: {},
    isLoading: false,
    currentRole: '1',
    cart: {
        profileProviderId: '',
        userId: '',
        items: []
    },
    platform: '',
    urlBack: ''
};


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyD_OrSTvGRGMjCCGpMJnTOBLMQXcLetaTk",
        authDomain: "vaoperu-b7253.firebaseapp.com",
        projectId: "vaoperu-b7253",
        storageBucket: "vaoperu-b7253.appspot.com",
        messagingSenderId: "149262314816",
        appId: "1:149262314816:web:b978b70a85b7c1ce4adea5"
    },
    from: 'tustaff2020@gmail.com',
    fromname: 'Vao perú',
    api: 'http://localhost:3008/'
    // api: 'https://api2.vaoperu.com/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ 15977);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ 92340);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 55382:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 72095:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 61219:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map