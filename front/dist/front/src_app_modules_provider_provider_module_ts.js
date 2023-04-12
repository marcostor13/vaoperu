"use strict";
(self["webpackChunkfront"] = self["webpackChunkfront"] || []).push([["src_app_modules_provider_provider_module_ts"],{

/***/ 33015:
/*!*************************************************************!*\
  !*** ./src/app/modules/provider/provider-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProviderRoutingModule": () => (/* binding */ ProviderRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



const routes = [
    {
        path: 'dashboard',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_fortawesome_free-solid-svg-icons_index_es_js-node_modules_primeng_fesm20-3a2f66"), __webpack_require__.e("default-src_app_modules_provider_components_header-provider_header-provider_module_ts"), __webpack_require__.e("src_app_modules_provider_modules_dashboard_dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/dashboard/dashboard.module */ 31940)).then(m => m.DashboardModule)
    },
    {
        path: 'profile',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2015_forms_mjs-node_modules_primeng_fesm2015_primeng-b-2560c8"), __webpack_require__.e("default-node_modules_primeng_fesm2015_primeng-confirmpopup_mjs"), __webpack_require__.e("default-node_modules_fortawesome_free-solid-svg-icons_index_es_js-node_modules_primeng_fesm20-3a2f66"), __webpack_require__.e("default-node_modules_primeng_fesm2015_primeng-fileupload_mjs"), __webpack_require__.e("default-src_app_modules_provider_components_header-provider_header-provider_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modules_provider_modules_profile-provider_profile-provider_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/profile-provider/profile-provider.module */ 75635)).then(m => m.ProfileProviderModule)
    },
    {
        path: 'products',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2015_forms_mjs-node_modules_primeng_fesm2015_primeng-b-2560c8"), __webpack_require__.e("default-node_modules_angular_cdk_fesm2015_scrolling_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2015_primeng-dialog_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2015_primeng-confirmpopup_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2015_primeng-orderlist_mjs"), __webpack_require__.e("default-node_modules_fortawesome_free-solid-svg-icons_index_es_js-node_modules_primeng_fesm20-3a2f66"), __webpack_require__.e("default-node_modules_primeng_fesm2015_primeng-fileupload_mjs"), __webpack_require__.e("default-src_app_modules_provider_components_header-provider_header-provider_module_ts"), __webpack_require__.e("default-src_app_modules_provider_modules_product_services_product_service_ts-src_app_modules_-b26191"), __webpack_require__.e("default-src_app_shared_components_product-list_product-list_module_ts"), __webpack_require__.e("default-src_app_shared_components_header_header_module_ts-node_modules_primeng_fesm2015_prime-6b0193"), __webpack_require__.e("default-node_modules_angular-cropperjs___ivy_ngcc___fesm2015_angular-cropperjs_js-node_module-6008d8"), __webpack_require__.e("default-src_app_shared_components_crop-image_crop-image_module_ts-node_modules_primeng_fesm20-0ee78c"), __webpack_require__.e("src_app_modules_provider_modules_product_product_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/product/product.module */ 31385)).then(m => m.ProductModule)
    },
    {
        path: 'offers',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2015_forms_mjs-node_modules_primeng_fesm2015_primeng-b-2560c8"), __webpack_require__.e("default-node_modules_angular_cdk_fesm2015_scrolling_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2015_primeng-dialog_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2015_primeng-confirmpopup_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2015_primeng-orderlist_mjs"), __webpack_require__.e("default-node_modules_fortawesome_free-solid-svg-icons_index_es_js-node_modules_primeng_fesm20-3a2f66"), __webpack_require__.e("default-node_modules_primeng_fesm2015_primeng-fileupload_mjs"), __webpack_require__.e("default-src_app_modules_provider_components_header-provider_header-provider_module_ts"), __webpack_require__.e("default-src_app_modules_provider_modules_product_services_product_service_ts-src_app_modules_-b26191"), __webpack_require__.e("default-src_app_shared_components_product-list_product-list_module_ts"), __webpack_require__.e("default-src_app_shared_components_header_header_module_ts-node_modules_primeng_fesm2015_prime-6b0193"), __webpack_require__.e("default-node_modules_angular-cropperjs___ivy_ngcc___fesm2015_angular-cropperjs_js-node_module-6008d8"), __webpack_require__.e("default-src_app_shared_components_crop-image_crop-image_module_ts-node_modules_primeng_fesm20-0ee78c"), __webpack_require__.e("src_app_modules_provider_modules_offer_offer_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/offer/offer.module */ 65291)).then(m => m.OfferModule)
    },
    {
        path: 'orders',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2015_forms_mjs-node_modules_primeng_fesm2015_primeng-b-2560c8"), __webpack_require__.e("default-node_modules_angular_cdk_fesm2015_scrolling_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2015_primeng-dialog_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2015_primeng-confirmpopup_mjs"), __webpack_require__.e("default-node_modules_fortawesome_free-solid-svg-icons_index_es_js-node_modules_primeng_fesm20-3a2f66"), __webpack_require__.e("default-src_app_modules_provider_components_header-provider_header-provider_module_ts"), __webpack_require__.e("default-src_app_modules_provider_modules_product_services_product_service_ts-src_app_modules_-b26191"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modules_provider_modules_order_order_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/order/order.module */ 54582)).then(m => m.OrderModule)
    },
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
];
class ProviderRoutingModule {
}
ProviderRoutingModule.ɵfac = function ProviderRoutingModule_Factory(t) { return new (t || ProviderRoutingModule)(); };
ProviderRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProviderRoutingModule });
ProviderRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProviderRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 91810:
/*!*****************************************************!*\
  !*** ./src/app/modules/provider/provider.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProviderModule": () => (/* binding */ ProviderModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _provider_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./provider-routing.module */ 33015);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class ProviderModule {
}
ProviderModule.ɵfac = function ProviderModule_Factory(t) { return new (t || ProviderModule)(); };
ProviderModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ProviderModule });
ProviderModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _provider_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProviderRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ProviderModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _provider_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProviderRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_modules_provider_provider_module_ts.js.map