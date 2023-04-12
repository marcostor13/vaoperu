"use strict";
(self["webpackChunkfront"] = self["webpackChunkfront"] || []).push([["src_app_modules_home_modules_view-company_view-company_module_ts"],{

/***/ 96132:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/home/modules/view-company/view-company-routing.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewCompanyRoutingModule": () => (/* binding */ ViewCompanyRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _view_company_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-company.component */ 83385);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: 'productos/0/des/1',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_home_modules_view-company_components_all-products_all-products_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./../../modules/view-company/components/all-products/all-products.module */ 22758)).then(m => m.AllProductsModule),
    },
    {
        path: 'informacion/0/des/1',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_home_modules_view-company_components_information-products_information-product-95cbf1").then(__webpack_require__.bind(__webpack_require__, /*! ./../../modules/view-company/components/information-products/information-products.module */ 46318)).then(m => m.InformationProductsModule),
    },
    {
        path: '',
        component: _view_company_component__WEBPACK_IMPORTED_MODULE_0__.ViewCompanyComponent
    },
];
class ViewCompanyRoutingModule {
}
ViewCompanyRoutingModule.ɵfac = function ViewCompanyRoutingModule_Factory(t) { return new (t || ViewCompanyRoutingModule)(); };
ViewCompanyRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ViewCompanyRoutingModule });
ViewCompanyRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ViewCompanyRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 83385:
/*!*****************************************************************************!*\
  !*** ./src/app/modules/home/modules/view-company/view-company.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewCompanyComponent": () => (/* binding */ ViewCompanyComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ 72186);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 70655);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 25843);
/* harmony import */ var subsink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! subsink */ 87478);
/* harmony import */ var _capacitor_share__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/share */ 58921);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _services_general_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/general.service */ 21864);
/* harmony import */ var src_app_modules_provider_modules_profile_provider_services_profile_provider_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/provider/modules/profile-provider/services/profile-provider.service */ 35650);
/* harmony import */ var src_app_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modules/auth/services/auth.service */ 12542);
/* harmony import */ var src_app_modules_provider_modules_product_services_product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modules/provider/modules/product/services/product.service */ 50319);
/* harmony import */ var src_app_modules_provider_modules_offer_services_offer_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modules/provider/modules/offer/services/offer.service */ 69062);
/* harmony import */ var _shared_services_favorite_favorite_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../../shared/services/favorite/favorite.service */ 98157);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/api */ 81122);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngrx/store */ 55778);
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/components/header/header.component */ 36290);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 40398);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/tabview */ 12050);
/* harmony import */ var _shared_components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/components/product-list/product-list.component */ 53957);
/* harmony import */ var _shared_pipes_whastapp_whatsapp_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/pipes/whastapp/whatsapp.pipe */ 23349);

























function ViewCompanyComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ViewCompanyComponent_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r2.back(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "fa-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, " Atr\u00E1s ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("icon", ctx_r0.faArrowLeft);
} }
function ViewCompanyComponent_div_3_img_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "img", 38);
} }
function ViewCompanyComponent_div_3_img_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "img", 39);
} }
function ViewCompanyComponent_div_3_button_25_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ViewCompanyComponent_div_3_button_25_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2); return ctx_r10.information(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Informaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function ViewCompanyComponent_div_3_button_26_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ViewCompanyComponent_div_3_button_26_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2); return ctx_r12.confirmDeleteFavorites(ctx_r12.profileProvider._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "fa-icon", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("icon", ctx_r7.faStar);
} }
function ViewCompanyComponent_div_3_label_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", ctx_r8.profileProvider.distance, " km");
} }
function ViewCompanyComponent_div_3_p_tabPanel_39_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](tab_r14.title);
} }
function ViewCompanyComponent_div_3_p_tabPanel_39_app_product_list_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "app-product-list", 48);
} if (rf & 2) {
    const tab_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("type", tab_r14.title)("profileProviderId", ctx_r16.profileProvider._id)("items", tab_r14.data)("rows", 3)("url", ctx_r16.url);
} }
function ViewCompanyComponent_div_3_p_tabPanel_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "p-tabPanel");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, ViewCompanyComponent_div_3_p_tabPanel_39_ng_template_2_Template, 2, 1, "ng-template", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, ViewCompanyComponent_div_3_p_tabPanel_39_app_product_list_3_Template, 1, 5, "app-product-list", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", tab_r14.title !== "Informaci\u00F3n");
} }
const _c0 = function (a0) { return { "background-image": a0 }; };
function ViewCompanyComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 6)(1, "div", 7)(2, "div", 8)(3, "div", 9)(4, "div")(5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "div", 11)(8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](9, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "div", 13)(11, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](14, ViewCompanyComponent_div_3_img_14_Template, 1, 0, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](15, ViewCompanyComponent_div_3_img_15_Template, 1, 0, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "div", 19)(19, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](20, "fa-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](21, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](22, "whatsapp");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](23, "fa-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](24, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](25, ViewCompanyComponent_div_3_button_25_Template, 2, 0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](26, ViewCompanyComponent_div_3_button_26_Template, 2, 1, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](27, "div", 27)(28, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ViewCompanyComponent_div_3_Template_a_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r19.shared(ctx_r19.profileProvider.comercialName, ctx_r19.profileProvider.comercialName); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](29, "fa-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](30, "div", 30)(31, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](33, "div", 32)(34, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](36, ViewCompanyComponent_div_3_label_36_Template, 2, 1, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](37, "div", 35)(38, "p-tabView", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](39, ViewCompanyComponent_div_3_p_tabPanel_39_Template, 4, 1, "p-tabPanel", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r1.profileProvider.comercialName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](21, _c0, "url(" + ctx_r1.profileProvider.image + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r1.profileProvider.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.aperture(ctx_r1.profileProvider.openTime, ctx_r1.profileProvider.closeTime));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r1.aperture(ctx_r1.profileProvider.openTime, ctx_r1.profileProvider.closeTime));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"]("", ctx_r1.profileProvider.openTime, " - ", ctx_r1.profileProvider.closeTime, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate1"]("href", "tel:", ctx_r1.profileProvider.phone, "", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("icon", ctx_r1.faPhone);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate2"]("href", "https://wa.me/", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](22, 19, ctx_r1.profileProvider.whatsapp), "?text=Hola! ", ctx_r1.profileProvider.comercialName, "", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("icon", ctx_r1.faWhatsapp);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r1.isFavorite(ctx_r1.profileProvider._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.isFavorite(ctx_r1.profileProvider._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("icon", ctx_r1.faShare);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r1.profileProvider.addressText, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r1.profileProvider.distrinctName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.profileProvider.distance);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r1.tabs);
} }
class ViewCompanyComponent {
    constructor(route, generalService, profileProviderService, authService, productService, offersService, favoriteService, messageService, confirmationService, router, store) {
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
        this.store = store;
        this.faWhatsapp = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_13__.faWhatsapp;
        this.faPhone = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__.faPhone;
        this.tabs = [];
        this.faShare = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__.faShare;
        this.faStar = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__.faStar;
        this.faArrowLeft = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__.faArrowLeft;
        this.unsubscriber = new rxjs__WEBPACK_IMPORTED_MODULE_15__.Subject();
        this.subs = new subsink__WEBPACK_IMPORTED_MODULE_1__.SubSink();
        this.companyUrl = this.route.snapshot.paramMap.get('id');
        this.subscriptionUrlBack();
        this.subscriptionPlatform();
    }
    ngOnInit() {
        this.getUrlData();
        this.getFavorites();
    }
    subscriptionUrlBack() {
        this.subs.add(this.store.select((state) => state.Reducer.urlBack)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.delay)(0))
            .subscribe((urlBack) => {
            this.urlBack = urlBack;
        }));
    }
    ngOnDestroy() {
        this.unsubscriber.next();
        this.unsubscriber.complete();
        this.subs.unsubscribe();
    }
    getUrlData() {
        this.profileProviderService.getUrlByUrl(this.companyUrl).subscribe((response) => {
            var _a, _b;
            this.url = response.data[0];
            if (this.platform === 'Android') {
                this.url.isIndividual = false;
            }
            if ((_a = response === null || response === void 0 ? void 0 : response.data[0]) === null || _a === void 0 ? void 0 : _a.profileProviderId) {
                this.getProfileProvider((_b = response === null || response === void 0 ? void 0 : response.data[0]) === null || _b === void 0 ? void 0 : _b.profileProviderId);
            }
            else {
                this.router.navigate(['/404']);
            }
        });
    }
    getProfileProvider(profileProviderId) {
        this.profileProviderService.getAllById(profileProviderId).subscribe((response) => {
            this.profileProvider = response.data.profileProvider;
            this.products = response.data.products;
            this.productsTmp = response.data.products;
            this.offers = response.data.offers;
            this.formatTabs();
            this.getCurrentPosition();
        });
    }
    formatTabs() {
        this.tabs = [];
        let prods = [...this.products.filter(product => product.isFeatured)];
        if (this.products.length > 0) {
            this.tabs = [...this.tabs, {
                    title: 'Productos',
                    data: this.products
                }];
        }
        if (prods.length > 0) {
            this.tabs = [...this.tabs, {
                    title: 'Destacados',
                    data: prods
                }];
        }
        if (this.offers.length > 0) {
            this.tabs = [...this.tabs, {
                    title: 'Ofertas',
                    data: this.offers
                }];
        }
    }
    addfavorites() {
        if (this.authService.getRole()) {
            //add Favorites
        }
        else {
            this.eventHeader = {
                event: 'open-login'
            };
        }
    }
    getFavorites() {
        this.role = this.authService.getRole();
        if (this.role) {
            this.favoriteService.getByClientId(this.authService.getUserID()).subscribe((response) => {
                this.favorites = response.data;
            });
        }
    }
    isFavorite(profileProviderId) {
        if (this.favorites) {
            let res = false;
            this.favorites.map(favorite => {
                if (favorite.profileProviderId === profileProviderId)
                    res = true;
            });
            return res;
        }
    }
    deleteFavorites(profileProviderId) {
        let idFavorite;
        this.favorites.map(favorite => {
            if (favorite.profileProviderId === profileProviderId)
                idFavorite = favorite._id;
        });
        if (idFavorite) {
            this.favoriteService.delete(idFavorite).subscribe((response) => {
                this.messageService.add({ detail: response.message, summary: 'Éxito', severity: 'success' });
                this.getFavorites();
            }, error => {
                this.messageService.add({ detail: error.error, summary: 'Error', severity: 'error' });
            });
        }
    }
    confirmDeleteFavorites(profileProviderId) {
        this.confirmationService.confirm({
            message: '¿Seguro que desea eliminar de favoritos?',
            acceptLabel: 'Si',
            rejectLabel: 'No',
            header: 'Confirmación',
            accept: () => {
                this.deleteFavorites(profileProviderId);
            }
        });
    }
    allproduct() {
        this.router.navigate([this.url.url + `/productos/0/des/1`]);
    }
    information() {
        this.router.navigate([this.url.url + `/informacion/0/des/1`]);
    }
    aperture(start, end) {
        let today = moment__WEBPACK_IMPORTED_MODULE_0__().format('YYYY-MM-DD');
        let betweenStart = today + ' ' + start;
        let betweenEnd = today + ' ' + end;
        let time = moment__WEBPACK_IMPORTED_MODULE_0__().isBetween(betweenStart, betweenEnd);
        return time;
    }
    subscriptionPlatform() {
        this.subs.add(this.store.select((state) => state.Reducer.platform)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.delay)(0))
            .subscribe((platform) => {
            this.platform = platform;
        }));
    }
    shared(url, name) {
        let urlShare = `https://vaoperu.com/${this.url.url}`.replace(' ', '-');
        if (this.platform === 'Android') {
            _capacitor_share__WEBPACK_IMPORTED_MODULE_2__.Share.share({
                title: `${name}`,
                text: `${name}`,
                url: urlShare,
                dialogTitle: 'Compartir',
            });
        }
        else {
            window.navigator.share({ url: urlShare, title: `${name}`, text: `${name}` });
        }
    }
    rad(x) {
        return x * Math.PI / 180;
    }
    eventSearch(key) {
        if (key) {
            this.products = [...this.productsTmp.filter(p => p.name.toLowerCase().indexOf(key.toLowerCase()) > -1)];
        }
        else {
            this.products = [...this.productsTmp];
        }
        this.formatTabs();
    }
    getKilometros(lat1, lon1, lat2, lon2) {
        var R = 6378.137; //Radio de la tierra en km
        var dLat = this.rad(lat2 - lat1);
        var dLong = this.rad(lon2 - lon1);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(this.rad(lat1)) * Math.cos(this.rad(lat2)) * Math.sin(dLong / 2) * Math.sin(dLong / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;
        return d.toFixed(1); //Retorna un decimales
    }
    getCurrentPosition() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            const currentPosition = yield this.generalService.getPosition();
            if (currentPosition) {
                if (this.profileProvider.lat && this.profileProvider.lng) {
                    this.profileProvider.distance = parseFloat(this.getKilometros(this.profileProvider.lat, this.profileProvider.lng, currentPosition.lat, currentPosition.lng));
                }
                else {
                    this.profileProvider.distance = 1000000;
                }
            }
        });
    }
    back() {
        if (this.router.url.indexOf('0/des/1') > -1) {
            this.router.navigate([this.url.url]);
        }
        else {
            if (this.urlBack) {
                const url = decodeURI(this.urlBack);
                const descUrl = decodeURIComponent(url);
                this.router.navigate([descUrl]);
            }
            else {
                window.history.back();
            }
        }
    }
}
ViewCompanyComponent.ɵfac = function ViewCompanyComponent_Factory(t) { return new (t || ViewCompanyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_general_service__WEBPACK_IMPORTED_MODULE_3__.GeneralService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_modules_provider_modules_profile_provider_services_profile_provider_service__WEBPACK_IMPORTED_MODULE_4__.ProfileProviderService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_modules_provider_modules_product_services_product_service__WEBPACK_IMPORTED_MODULE_6__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_modules_provider_modules_offer_services_offer_service__WEBPACK_IMPORTED_MODULE_7__.OfferService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_shared_services_favorite_favorite_service__WEBPACK_IMPORTED_MODULE_8__.FavoriteService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_19__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_19__.ConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_20__.Store)); };
ViewCompanyComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({ type: ViewCompanyComponent, selectors: [["app-view-company"]], decls: 4, vars: 3, consts: [[3, "eventHeader", "eventSearch"], [1, "w-100", "mt-2", "mb-3", "px-3", "d-flex", "justify-content-start"], ["class", "mt-4 bg-transparent px-2 f-14 font-500 border-0 d-flex align-items-center justify-content-center rounded-pill text-color5", 3, "click", 4, "ngIf"], ["class", "container-fluid mt-4 p-0", 4, "ngIf"], [1, "mt-4", "bg-transparent", "px-2", "f-14", "font-500", "border-0", "d-flex", "align-items-center", "justify-content-center", "rounded-pill", "text-color5", 3, "click"], [1, "f-14", "icon-search", "mr-2", "text-color5", 3, "icon"], [1, "container-fluid", "mt-4", "p-0"], [1, "d-flex", "m-0", "p-0", "justify-content-center"], [1, "px-3"], [1, "d-flex", "justify-content-sm-center"], [1, "mb-1", "f-14", "bold", "font-600", "mt-xl-0", "mb-2"], [1, "d-flex"], [1, "image", "image-profile", 3, "ngStyle"], [1, "ml-4"], [1, "d-none", "d-md-block", "text-left", "text-break", "parraf", "mt-0", "f-9", "text-capitalize"], [1, "d-flex", "align-items-center", "my-2"], ["width", "23", "src", "assets/img/icons/open.svg", "alt", "Abierto", 4, "ngIf"], ["width", "23", "src", "assets/img/icons/close.svg", "alt", "Cerrado", 4, "ngIf"], [1, "ml-2", "f-9", "text-color5", "font-500"], [1, "d-flex", "justify-content-between", "justify-content-md-start"], ["target", "_blank", "title", "Llamar", 1, "link-unstyled", "p-1", "bg-color2", "rounded-circle", "icon", "d-flex", "justify-content-center", "align-items-center", 3, "href"], [1, "f-18", "text-white", "fa-rotate-90", 3, "icon"], ["target", "_blank", "title", "Whatsapp", 1, "ml-2", "p-1", "bg-color1", "rounded-circle", "icon", "d-flex", "justify-content-center", "align-items-center", 3, "href"], [1, "f-22", "text-white", 3, "icon"], [1, "mt-2", "mt-sm-4"], ["class", "cursor bg-color1 border-0 rounded-lg py-2 px-4 px-sm-5 text-white f-8 font-500", 3, "click", 4, "ngIf"], ["class", "cursor pl-2 pr-2 bg-color2 border-0 p-1 rounded-pill f-9 font-500", 3, "click", 4, "ngIf"], [1, "mt-2", "w-100", "d-flex", "justify-content-end"], [1, "p-1", "icon", "mr-md-5", 3, "click"], [1, "ml-2", "cursor", "f-20", "text-color2", "mr-2", 3, "icon"], [1, "mt-2", "d-flex", "col", "m-0", "p-0", "flex-column", "justify-content-center", "align-items-start"], [1, "f-9", "d-flex", "justify-content-center", "align-items-center", "text-capitalize"], [1, "w-100", "m-0", "d-flex", "align-items-center", "justify-content-between"], [1, "f-9", "m-0", "text-capitalize"], ["class", "bold text-color1 m-0 pl-2", 4, "ngIf"], [1, "w-100", "m-0", "p-0", "mt-2"], ["styleClass", "tabview-custom"], [4, "ngFor", "ngForOf"], ["width", "23", "src", "assets/img/icons/open.svg", "alt", "Abierto"], ["width", "23", "src", "assets/img/icons/close.svg", "alt", "Cerrado"], [1, "cursor", "bg-color1", "border-0", "rounded-lg", "py-2", "px-4", "px-sm-5", "text-white", "f-8", "font-500", 3, "click"], [1, "cursor", "pl-2", "pr-2", "bg-color2", "border-0", "p-1", "rounded-pill", "f-9", "font-500", 3, "click"], [1, "f-13", 3, "icon"], [1, "bold", "text-color1", "m-0", "pl-2"], [1, "w-100", "px-3", "d-flex", "justify-content-end", "pr-4"], ["pTemplate", "header", "headerStyleClass", "w-100"], [3, "type", "profileProviderId", "items", "rows", "url", 4, "ngIf"], [1, "f-10", "font-500", "font-300"], [3, "type", "profileProviderId", "items", "rows", "url"]], template: function ViewCompanyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("eventSearch", function ViewCompanyComponent_Template_app_header_eventSearch_0_listener($event) { return ctx.eventSearch($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, ViewCompanyComponent_button_2_Template, 3, 1, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, ViewCompanyComponent_div_3_Template, 40, 23, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("eventHeader", ctx.eventHeader);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !(ctx.url == null ? null : ctx.url.isIndividual));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.profileProvider);
    } }, directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_9__.HeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_22__.FaIconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgStyle, primeng_tabview__WEBPACK_IMPORTED_MODULE_23__.TabView, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgForOf, primeng_tabview__WEBPACK_IMPORTED_MODULE_23__.TabPanel, primeng_api__WEBPACK_IMPORTED_MODULE_19__.PrimeTemplate, _shared_components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_10__.ProductListComponent], pipes: [_shared_pipes_whastapp_whatsapp_pipe__WEBPACK_IMPORTED_MODULE_11__.WhatsappPipe], styles: [".image-profile[_ngcontent-%COMP%] {\n  min-width: 240px;\n  max-width: 240px;\n  min-height: 240px;\n  max-height: 240px;\n}\n@media (max-width: 520px) {\n  .image-profile[_ngcontent-%COMP%] {\n    min-width: 160px;\n    max-width: 160px;\n    min-height: 160px;\n    max-height: 160px;\n  }\n}\n.icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n  min-width: 42px;\n  min-height: 42px;\n  max-width: 42px;\n  max-height: 42px;\n}\n.parraf[_ngcontent-%COMP%] {\n  max-width: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXctY29tcGFueS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBQ0o7QUFBSTtFQUxKO0lBTU0sZ0JBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0EsaUJBQUE7RUFHSjtBQUNGO0FBQUE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBR0o7QUFBQTtFQUNFLGdCQUFBO0FBR0YiLCJmaWxlIjoidmlldy1jb21wYW55LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdlLXByb2ZpbGV7XHJcbiAgICBtaW4td2lkdGg6IDI0MHB4O1xyXG4gICAgbWF4LXdpZHRoOiAyNDBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDI0MHB4O1xyXG4gICAgbWF4LWhlaWdodDogMjQwcHg7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTIwcHgpIHtcclxuICAgICAgbWluLXdpZHRoOiAxNjBweDtcclxuICAgICAgbWF4LXdpZHRoOiAxNjBweDtcclxuICAgICAgbWluLWhlaWdodDogMTYwcHg7XHJcbiAgICAgIG1heC1oZWlnaHQ6IDE2MHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uaWNvbntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1pbi13aWR0aDogNDJweDtcclxuICAgIG1pbi1oZWlnaHQ6IDQycHg7XHJcbiAgICBtYXgtd2lkdGg6IDQycHg7XHJcbiAgICBtYXgtaGVpZ2h0OiA0MnB4O1xyXG59XHJcblxyXG4ucGFycmFme1xyXG4gIG1heC13aWR0aDogMjAwcHg7XHJcbiAgLy8gdGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 80268:
/*!**************************************************************************!*\
  !*** ./src/app/modules/home/modules/view-company/view-company.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewCompanyModule": () => (/* binding */ ViewCompanyModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _view_company_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-company-routing.module */ 96132);
/* harmony import */ var _view_company_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-company.component */ 83385);
/* harmony import */ var _shared_components_header_header_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../shared/components/header/header.module */ 3778);
/* harmony import */ var _shared_pipes_whastapp_whastapp_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/pipes/whastapp/whastapp.module */ 98078);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 40398);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/tabview */ 12050);
/* harmony import */ var _shared_components_product_list_product_list_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/components/product-list/product-list.module */ 68478);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);









class ViewCompanyModule {
}
ViewCompanyModule.ɵfac = function ViewCompanyModule_Factory(t) { return new (t || ViewCompanyModule)(); };
ViewCompanyModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: ViewCompanyModule });
ViewCompanyModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _view_company_routing_module__WEBPACK_IMPORTED_MODULE_0__.ViewCompanyRoutingModule,
            _shared_components_header_header_module__WEBPACK_IMPORTED_MODULE_2__.HeaderModule,
            _shared_pipes_whastapp_whastapp_module__WEBPACK_IMPORTED_MODULE_3__.WhastappModule,
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FontAwesomeModule,
            primeng_tabview__WEBPACK_IMPORTED_MODULE_8__.TabViewModule,
            _shared_components_product_list_product_list_module__WEBPACK_IMPORTED_MODULE_4__.ProductListModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ViewCompanyModule, { declarations: [_view_company_component__WEBPACK_IMPORTED_MODULE_1__.ViewCompanyComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _view_company_routing_module__WEBPACK_IMPORTED_MODULE_0__.ViewCompanyRoutingModule,
        _shared_components_header_header_module__WEBPACK_IMPORTED_MODULE_2__.HeaderModule,
        _shared_pipes_whastapp_whastapp_module__WEBPACK_IMPORTED_MODULE_3__.WhastappModule,
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FontAwesomeModule,
        primeng_tabview__WEBPACK_IMPORTED_MODULE_8__.TabViewModule,
        _shared_components_product_list_product_list_module__WEBPACK_IMPORTED_MODULE_4__.ProductListModule] }); })();


/***/ }),

/***/ 48470:
/*!***************************************************************!*\
  !*** ./node_modules/@capacitor/share/dist/esm/definitions.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 58921:
/*!*********************************************************!*\
  !*** ./node_modules/@capacitor/share/dist/esm/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Share": () => (/* binding */ Share)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 26549);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 48470);

const Share = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Share', {
    web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_share_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 83656)).then(m => new m.ShareWeb()),
});




/***/ })

}]);
//# sourceMappingURL=src_app_modules_home_modules_view-company_view-company_module_ts.js.map