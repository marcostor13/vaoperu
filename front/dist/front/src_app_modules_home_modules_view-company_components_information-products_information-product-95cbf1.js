"use strict";
(self["webpackChunkfront"] = self["webpackChunkfront"] || []).push([["src_app_modules_home_modules_view-company_components_information-products_information-product-95cbf1"],{

/***/ 91051:
/*!**************************************************************************************************************************!*\
  !*** ./src/app/modules/home/modules/view-company/components/information-products/information-products-routing.module.ts ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InformationProductsRoutingModule": () => (/* binding */ InformationProductsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _information_products_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./information-products.component */ 26999);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _information_products_component__WEBPACK_IMPORTED_MODULE_0__.InformationProductsComponent
    }
];
class InformationProductsRoutingModule {
}
InformationProductsRoutingModule.ɵfac = function InformationProductsRoutingModule_Factory(t) { return new (t || InformationProductsRoutingModule)(); };
InformationProductsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: InformationProductsRoutingModule });
InformationProductsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](InformationProductsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 26999:
/*!*********************************************************************************************************************!*\
  !*** ./src/app/modules/home/modules/view-company/components/information-products/information-products.component.ts ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InformationProductsComponent": () => (/* binding */ InformationProductsComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 70655);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _services_general_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services/general.service */ 21864);
/* harmony import */ var src_app_modules_provider_modules_profile_provider_services_profile_provider_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/provider/modules/profile-provider/services/profile-provider.service */ 35650);
/* harmony import */ var src_app_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/auth/services/auth.service */ 12542);
/* harmony import */ var src_app_modules_provider_modules_product_services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/provider/modules/product/services/product.service */ 50319);
/* harmony import */ var src_app_modules_provider_modules_offer_services_offer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/provider/modules/offer/services/offer.service */ 69062);
/* harmony import */ var _shared_services_favorite_favorite_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../../../shared/services/favorite/favorite.service */ 98157);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/api */ 81122);
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../shared/components/header/header.component */ 36290);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 40398);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _information_information_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../information/information.component */ 25131);














function InformationProductsComponent_app_information_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-information", 5);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("profileProvider", ctx_r0.profileProvider);
} }
class InformationProductsComponent {
    constructor(route, generalService, profileProviderService, authService, productService, offersService, favoriteService, messageService, confirmationService, router) {
        this.route = route;
        this.generalService = generalService;
        this.profileProviderService = profileProviderService;
        this.authService = authService;
        this.productService = productService;
        this.offersService = offersService;
        this.favoriteService = favoriteService;
        this.messageService = messageService;
        this.confirmationService = confirmationService;
        this.router = router;
        this.faArrowLeft = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faArrowLeft;
        this.companyUrl = this.route.snapshot.paramMap.get('id');
    }
    ngOnInit() {
        this.getUrlData();
    }
    getUrlData() {
        this.profileProviderService.getUrlByUrl(this.companyUrl).subscribe((response) => {
            this.url = response.data[0];
            this.getProfileProvider(response === null || response === void 0 ? void 0 : response.data[0].profileProviderId);
        });
    }
    getProfileProvider(profileProviderId) {
        this.profileProviderService.getById(profileProviderId).subscribe((response) => {
            this.profileProvider = response.data;
            this.getProducts();
        });
    }
    getProducts() {
        this.productService.getByProfileProviderId(this.profileProvider._id).subscribe((response) => {
            this.products = response.data;
        });
    }
    allproduct() {
        this.router.navigate([this.url.url]);
    }
}
InformationProductsComponent.ɵfac = function InformationProductsComponent_Factory(t) { return new (t || InformationProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_general_service__WEBPACK_IMPORTED_MODULE_0__.GeneralService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_modules_provider_modules_profile_provider_services_profile_provider_service__WEBPACK_IMPORTED_MODULE_1__.ProfileProviderService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_modules_provider_modules_product_services_product_service__WEBPACK_IMPORTED_MODULE_3__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_modules_provider_modules_offer_services_offer_service__WEBPACK_IMPORTED_MODULE_4__.OfferService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_services_favorite_favorite_service__WEBPACK_IMPORTED_MODULE_5__.FavoriteService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_11__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_11__.ConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router)); };
InformationProductsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: InformationProductsComponent, selectors: [["app-information-products"]], decls: 6, vars: 3, consts: [[3, "eventHeader"], [1, "w-100", "mt-2", "mb-3", "pl-4", "d-flex", "justify-content-start"], [1, "mt-4", "bg-transparent", "px-2", "f-14", "font-500", "border-0", "d-flex", "align-items-center", "justify-content-center", "rounded-pill", "text-color5", 3, "click"], [1, "f-14", "icon-search", "ml-2", "text-color5", 3, "icon"], [3, "profileProvider", 4, "ngIf"], [3, "profileProvider"]], template: function InformationProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function InformationProductsComponent_Template_button_click_2_listener() { return ctx.allproduct(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, " Atr\u00E1s ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, InformationProductsComponent_app_information_5_Template, 1, 1, "app-information", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("eventHeader", ctx.eventHeader);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", ctx.faArrowLeft);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.profileProvider);
    } }, directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_6__.HeaderComponent, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__.FaIconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _information_information_component__WEBPACK_IMPORTED_MODULE_7__.InformationComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmZvcm1hdGlvbi1wcm9kdWN0cy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 46318:
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/home/modules/view-company/components/information-products/information-products.module.ts ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InformationProductsModule": () => (/* binding */ InformationProductsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _information_products_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./information-products-routing.module */ 91051);
/* harmony import */ var _information_products_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./information-products.component */ 26999);
/* harmony import */ var _shared_components_header_header_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../../../shared/components/header/header.module */ 3778);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 40398);
/* harmony import */ var _shared_components_product_list_product_list_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/components/product-list/product-list.module */ 68478);
/* harmony import */ var _components_information_information_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../components/information/information.component */ 25131);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);








class InformationProductsModule {
}
InformationProductsModule.ɵfac = function InformationProductsModule_Factory(t) { return new (t || InformationProductsModule)(); };
InformationProductsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: InformationProductsModule });
InformationProductsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _information_products_routing_module__WEBPACK_IMPORTED_MODULE_0__.InformationProductsRoutingModule,
            _shared_components_header_header_module__WEBPACK_IMPORTED_MODULE_2__.HeaderModule,
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FontAwesomeModule,
            _shared_components_product_list_product_list_module__WEBPACK_IMPORTED_MODULE_3__.ProductListModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](InformationProductsModule, { declarations: [_information_products_component__WEBPACK_IMPORTED_MODULE_1__.InformationProductsComponent,
        _components_information_information_component__WEBPACK_IMPORTED_MODULE_4__.InformationComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _information_products_routing_module__WEBPACK_IMPORTED_MODULE_0__.InformationProductsRoutingModule,
        _shared_components_header_header_module__WEBPACK_IMPORTED_MODULE_2__.HeaderModule,
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FontAwesomeModule,
        _shared_components_product_list_product_list_module__WEBPACK_IMPORTED_MODULE_3__.ProductListModule] }); })();


/***/ }),

/***/ 25131:
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/home/modules/view-company/components/information/information.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InformationComponent": () => (/* binding */ InformationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36362);


const _c0 = ["map"];
function InformationComponent_div_0_div_2_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 11)(2, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const p_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "https://api.whatsapp.com/send/?phone=51" + p_r3.value + "&text=Hola! quiero informaci\u00F3n", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r3.value);
} }
function InformationComponent_div_0_div_2_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const p_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "tel:" + p_r3.value, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r3.value);
} }
function InformationComponent_div_0_div_2_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 11)(2, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const p_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", p_r3.value, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r3.value);
} }
function InformationComponent_div_0_div_2_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 11)(2, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const p_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", p_r3.value, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r3.value);
} }
function InformationComponent_div_0_div_2_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 11)(2, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const p_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", p_r3.value, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r3.value);
} }
function InformationComponent_div_0_div_2_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 11)(2, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const p_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", p_r3.value, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r3.value);
} }
function InformationComponent_div_0_div_2_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 11)(2, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const p_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", p_r3.value, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r3.value);
} }
function InformationComponent_div_0_div_2_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const p_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r3.value);
} }
function InformationComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5)(1, "div", 6)(2, "h6", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, InformationComponent_div_0_div_2_ng_container_5_Template, 4, 2, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, InformationComponent_div_0_div_2_ng_container_6_Template, 4, 2, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, InformationComponent_div_0_div_2_ng_container_7_Template, 4, 2, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, InformationComponent_div_0_div_2_ng_container_8_Template, 4, 2, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, InformationComponent_div_0_div_2_ng_container_9_Template, 4, 2, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, InformationComponent_div_0_div_2_ng_container_10_Template, 4, 2, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, InformationComponent_div_0_div_2_ng_container_11_Template, 4, 2, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, InformationComponent_div_0_div_2_ng_container_12_Template, 2, 1, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const p_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.format(p_r3.key));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", p_r3.key.trim());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "Whatsapp");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "Tel\u00E9fono");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "Instagram");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "Facebook");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "Twitter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "Tiktok");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "Sitio Web");
} }
function InformationComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, InformationComponent_div_0_div_2_Template, 13, 9, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.profileProviderFormat);
} }
/// <reference types="@types/googlemaps" />
class InformationComponent {
    constructor() {
        this.profileProviderFormat = [];
    }
    ngOnInit() {
        this.formatData();
    }
    ngAfterViewInit() {
        this.initMap();
    }
    formatData() {
        if (this.profileProvider.comercialName)
            this.profileProviderFormat = [...this.profileProviderFormat, { key: 'Nombre comercial', value: this.profileProvider.comercialName }];
        if (this.profileProvider.legalName)
            this.profileProviderFormat = [...this.profileProviderFormat, { key: 'Razón social', value: this.profileProvider.legalName }];
        if (this.profileProvider.ruc)
            this.profileProviderFormat = [...this.profileProviderFormat, { key: 'Ruc', value: this.profileProvider.ruc }];
        if (this.profileProvider.whatsapp)
            this.profileProviderFormat = [...this.profileProviderFormat, { key: 'Whatsapp', value: this.profileProvider.whatsapp }];
        if (this.profileProvider.phone)
            this.profileProviderFormat = [...this.profileProviderFormat, { key: 'Teléfono', value: this.profileProvider.phone }];
        if (this.profileProvider.addressText)
            this.profileProviderFormat = [...this.profileProviderFormat, { key: 'Direción', value: this.profileProvider.addressText }];
        if (this.profileProvider.facebook)
            this.profileProviderFormat = [...this.profileProviderFormat, { key: 'Facebook', value: this.profileProvider.facebook }];
        if (this.profileProvider.twitter)
            this.profileProviderFormat = [...this.profileProviderFormat, { key: 'Twitter', value: this.profileProvider.twitter }];
        if (this.profileProvider.instagram)
            this.profileProviderFormat = [...this.profileProviderFormat, { key: 'Instagram', value: this.profileProvider.instagram }];
        if (this.profileProvider.tiktok)
            this.profileProviderFormat = [...this.profileProviderFormat, { key: 'Tiktok', value: this.profileProvider.tiktok }];
        if (this.profileProvider.email)
            this.profileProviderFormat = [...this.profileProviderFormat, { key: 'Correo', value: this.profileProvider.email }];
        if (this.profileProvider.distrinctName)
            this.profileProviderFormat = [...this.profileProviderFormat, { key: 'Distrito', value: this.profileProvider.distrinctName }];
        if (this.profileProvider.siteWeb)
            this.profileProviderFormat = [...this.profileProviderFormat, { key: 'Sitio Web', value: this.profileProvider.siteWeb }];
    }
    format(key) {
        return key.replace('-', '').replace('-', '').replace('-', '').replace('-', '');
    }
    initMap() {
        const ubication = { lat: this.profileProvider.lat, lng: this.profileProvider.lng };
        const map = new google.maps.Map(this.el.nativeElement, {
            center: ubication,
            zoom: 14,
        });
        new google.maps.Marker({
            position: ubication,
            map,
            title: this.profileProvider.comercialName,
        });
    }
}
InformationComponent.ɵfac = function InformationComponent_Factory(t) { return new (t || InformationComponent)(); };
InformationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InformationComponent, selectors: [["app-information"]], viewQuery: function InformationComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.el = _t.first);
    } }, inputs: { profileProvider: "profileProvider" }, decls: 1, vars: 1, consts: [["class", "d-flex flex-column", 4, "ngIf"], [1, "d-flex", "flex-column"], ["class", "d-flex mt-3 ml-4 mb-4", 4, "ngFor", "ngForOf"], ["id", "map", 1, "ml-0", "ml-md-4", "mt-4", "mt-md-0"], ["map", ""], [1, "d-flex", "mt-3", "ml-4", "mb-4"], [1, "d-flex", "flex-column", "justify-content-center", "ml-2"], [1, "text-color1", "text-capitalize", "bold"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], ["target", "_blank", 1, "text-decoration-none", "hover", 3, "href"], [1, "text-value", "text-color3"], [3, "href"], [1, "text-value"]], template: function InformationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, InformationComponent_div_0_Template, 5, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profileProviderFormat);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgSwitchDefault], styles: [".line[_ngcontent-%COMP%] {\n  min-height: 74px;\n  min-width: 8px;\n  border: 0;\n}\n\n#map[_ngcontent-%COMP%] {\n  height: 400px;\n  width: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZm9ybWF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7QUFDSiIsImZpbGUiOiJpbmZvcm1hdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saW5le1xyXG4gICAgbWluLWhlaWdodDogNzRweDtcclxuICAgIG1pbi13aWR0aDogOHB4O1xyXG4gICAgYm9yZGVyOiAwO1xyXG59XHJcblxyXG4jbWFwe1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIHdpZHRoOiA0MDBweDtcclxufSJdfQ== */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_modules_home_modules_view-company_components_information-products_information-product-95cbf1.js.map