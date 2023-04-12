"use strict";
(self["webpackChunkfront"] = self["webpackChunkfront"] || []).push([["src_app_modules_provider_modules_order_order_module_ts"],{

/***/ 64876:
/*!************************************************************************!*\
  !*** ./src/app/modules/provider/modules/order/order-routing.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderRoutingModule": () => (/* binding */ OrderRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _order_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order.component */ 5619);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _order_component__WEBPACK_IMPORTED_MODULE_0__.OrderComponent
    }
];
class OrderRoutingModule {
}
OrderRoutingModule.ɵfac = function OrderRoutingModule_Factory(t) { return new (t || OrderRoutingModule)(); };
OrderRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: OrderRoutingModule });
OrderRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](OrderRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 5619:
/*!*******************************************************************!*\
  !*** ./src/app/modules/provider/modules/order/order.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderComponent": () => (/* binding */ OrderComponent)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_services_cart_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/services/cart/cart.service */ 22828);
/* harmony import */ var _profile_provider_services_profile_provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../profile-provider/services/profile-provider.service */ 35650);
/* harmony import */ var src_app_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/auth/services/auth.service */ 12542);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/api */ 81122);
/* harmony import */ var src_app_modules_admin_modules_user_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/admin/modules/user/services/user.service */ 58368);
/* harmony import */ var _product_services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../product/services/product.service */ 50319);
/* harmony import */ var _components_menu_provider_menu_provider_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/menu-provider/menu-provider.component */ 39493);
/* harmony import */ var _components_header_provider_header_provider_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/header-provider/header-provider.component */ 10756);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/dialog */ 33489);
/* harmony import */ var primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/confirmpopup */ 84296);













function OrderComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "h3", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "No tiene ordenes disponibles");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} }
function OrderComponent_div_9_tr_13_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function OrderComponent_div_9_tr_13_Template_tr_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r6); const order_r4 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r5.openOrder(order_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const order_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](order_r4.userId ? ctx_r3.getById(ctx_r3.users, order_r4.userId).name : "An\u00F3nimo");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r3.formatDate(order_r4.createAt));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("S/ ", ctx_r3.getTotal(order_r4), "");
} }
function OrderComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 11)(1, "table", 12)(2, "thead")(3, "tr")(4, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "Cliente");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "Fecha");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, OrderComponent_div_9_tr_13_Template, 9, 3, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r1.orders);
} }
function OrderComponent_div_11_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "li", 23)(2, "h6", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "li", 23)(7, "h6", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "Tel\u00E9fono");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "li", 23)(12, "h6", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "Direcci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "li", 23)(17, "h6", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, "Fecha");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "li", 23)(22, "h6", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, "Medio de pago");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "li", 23)(27, "h6", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](28, "Observaciones / detalles");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"]((ctx_r7.currentOrder.orderData == null ? null : ctx_r7.currentOrder.orderData.name) || "An\u00F3nimo");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r7.currentOrder.orderData.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r7.currentOrder.orderData.address && ctx_r7.currentOrder.orderData.address !== "custom" ? ctx_r7.currentOrder.orderData.address : ctx_r7.currentOrder.orderData.address2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r7.currentOrder.orderData.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r7.currentOrder.orderData.typePaymment);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r7.currentOrder.orderData.details);
} }
const _c0 = function (a0) { return { "background-image": a0 }; };
function OrderComponent_div_11_li_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div")(3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div")(6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](3, _c0, "url(" + ((tmp_0_0 = ctx_r8.getById(ctx_r8.products, item_r10.productId)) == null ? null : tmp_0_0.images[0]) + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r8.getById(ctx_r8.products, item_r10.productId).name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("S/ ", ctx_r8.getById(ctx_r8.products, item_r10.productId).promotionalPrice ? ctx_r8.getById(ctx_r8.products, item_r10.productId).promotionalPrice : ctx_r8.getById(ctx_r8.products, item_r10.productId).price, "");
} }
function OrderComponent_div_11_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 28)(1, "h5", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "h5", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("S/ ", ctx_r9.getTotal(ctx_r9.currentOrder), "");
} }
function OrderComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 17)(1, "ul", 18)(2, "h6", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Datos de usuario");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "li", 20)(5, "h6", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "Cliente");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "li", 23)(10, "h6", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "N\u00FAmero email");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](14, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "h6", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, "Datos de la orden");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](17, OrderComponent_div_11_ng_container_17_Template, 31, 6, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, "Productos");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](20, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "ul", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](22, OrderComponent_div_11_li_22_Template, 8, 5, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](23, OrderComponent_div_11_div_23_Template, 5, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r2.currentOrder.userId ? ctx_r2.getById(ctx_r2.users, ctx_r2.currentOrder.userId).name : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r2.currentOrder.userId ? ctx_r2.getById(ctx_r2.users, ctx_r2.currentOrder.userId).email : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.currentOrder.orderData);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r2.currentOrder == null ? null : ctx_r2.currentOrder.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx_r2.currentOrder == null ? null : ctx_r2.currentOrder.items == null ? null : ctx_r2.currentOrder.items.length) > 0);
} }
class OrderComponent {
    constructor(cartService, profileProviderService, authService, messageService, userService, productService) {
        this.cartService = cartService;
        this.profileProviderService = profileProviderService;
        this.authService = authService;
        this.messageService = messageService;
        this.userService = userService;
        this.productService = productService;
        this.displayModal = false;
        moment__WEBPACK_IMPORTED_MODULE_0__().locale('es');
    }
    ngOnInit() {
        this.getProfileProvider();
    }
    getProfileProvider() {
        this.profileProviderService.getByUserId(this.authService.getUserID()).subscribe((response) => {
            this.profileProvider = response.data;
            this.getOrdersByProfileProviderId();
        }, _ => {
            this.errors('perfil');
        });
    }
    getOrdersByProfileProviderId() {
        this.cartService.getByProfileProviderId(this.profileProvider._id).subscribe((response) => {
            this.orders = response.data;
            this.getUserByIds();
            this.getProductsByIds();
        }, _ => {
            this.errors('ordenes');
        });
    }
    getProductsByIds() {
        let productIds = [];
        this.orders.map(o => {
            o.items.map(i => {
                productIds = [...productIds, i.productId];
            });
        });
        this.productService.getProducstAndOffersByIds(productIds).subscribe((response) => {
            this.products = response.data;
        }, _ => {
            this.errors('productos');
        });
    }
    getUserByIds() {
        let ids = this.orders.map(o => { if (o.userId)
            return o.userId; }).filter(o => o);
        if ((ids === null || ids === void 0 ? void 0 : ids.length) > 0) {
            this.userService.getByIds(ids).subscribe((response) => {
                this.users = response.data;
            }, _ => {
                this.errors('usuarios');
            });
        }
    }
    getById(array, id) {
        return array.find(a => a._id === id);
    }
    formatDate(date) {
        return moment__WEBPACK_IMPORTED_MODULE_0__(date).format('lll');
    }
    errors(model) {
        this.messageService.add({ detail: `Error al obtener ${model}`, summary: 'Error', severity: 'error' });
    }
    openOrder(order) {
        this.currentOrder = order;
        this.displayModal = true;
    }
    getTotal(order) {
        var _a;
        let total = 0;
        (_a = order === null || order === void 0 ? void 0 : order.items) === null || _a === void 0 ? void 0 : _a.map(item => {
            let prods = this.getById(this.products, item.productId);
            let price = (prods === null || prods === void 0 ? void 0 : prods.promotionalPrice) ? prods === null || prods === void 0 ? void 0 : prods.promotionalPrice : prods === null || prods === void 0 ? void 0 : prods.price;
            total = total + price * item.quantity;
        });
        return total;
    }
}
OrderComponent.ɵfac = function OrderComponent_Factory(t) { return new (t || OrderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_services_cart_cart_service__WEBPACK_IMPORTED_MODULE_1__.CartService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_profile_provider_services_profile_provider_service__WEBPACK_IMPORTED_MODULE_2__.ProfileProviderService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_9__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_modules_admin_modules_user_services_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_product_services_product_service__WEBPACK_IMPORTED_MODULE_5__.ProductService)); };
OrderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: OrderComponent, selectors: [["app-order"]], decls: 13, vars: 12, consts: [[1, "d-flex", "m-0"], [1, "d-none", "d-md-flex"], [1, "flex-1"], [1, "p-4", "p-md-5"], [1, "row", "m-0", "justify-content-between", "align-items-center"], [4, "ngIf"], ["class", "col-12 p-0 mt-4", 4, "ngIf"], ["header", "", 3, "visible", "modal", "styleClass", "baseZIndex", "autoZIndex", "draggable", "resizable", "visibleChange"], ["class", "col-12 row m-0 justify-content-center", 4, "ngIf"], [3, "autoZIndex", "baseZIndex"], [1, "text-center", "text-color1"], [1, "col-12", "p-0", "mt-4"], [1, "table"], ["scope", "col"], ["class", "cursor", 3, "click", 4, "ngFor", "ngForOf"], [1, "cursor", 3, "click"], ["scope", "row"], [1, "col-12", "row", "m-0", "justify-content-center"], [1, "list-unstyled", "w-100", "d-flex", "flex-column", "align-items-center", "justify-content-center"], [1, "mt-2"], [1, "mt-2", "py-1", "col", "d-flex", "justify-content-between", "align-items-center"], [1, "m-0", "text-color1"], [1, "m-0"], [1, "py-1", "col", "d-flex", "justify-content-between", "align-items-center"], ["class", "py-3 col d-flex justify-content-between align-items-center", 4, "ngFor", "ngForOf"], ["class", "d-flex justify-content-end align-items-center w-100", 4, "ngIf"], [1, "py-3", "col", "d-flex", "justify-content-between", "align-items-center"], [1, "image", 3, "ngStyle"], [1, "d-flex", "justify-content-end", "align-items-center", "w-100"], [1, "px-5", "text-color1"], [1, "pr-2"]], template: function OrderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-menu-provider", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "app-header-provider");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "Ordenes");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, OrderComponent_div_8_Template, 3, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, OrderComponent_div_9_Template, 14, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "p-dialog", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("visibleChange", function OrderComponent_Template_p_dialog_visibleChange_10_listener($event) { return ctx.displayModal = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, OrderComponent_div_11_Template, 24, 5, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](12, "p-confirmPopup", 9);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.orders || !ctx.products || (ctx.orders == null ? null : ctx.orders.length) === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.products && (ctx.orders == null ? null : ctx.orders.length) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("visible", ctx.displayModal)("modal", true)("styleClass", "modalLogin")("baseZIndex", 10000)("autoZIndex", false)("draggable", false)("resizable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.currentOrder);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("autoZIndex", false)("baseZIndex", 1000001);
    } }, directives: [_components_menu_provider_menu_provider_component__WEBPACK_IMPORTED_MODULE_6__.MenuProviderComponent, _components_header_provider_header_provider_component__WEBPACK_IMPORTED_MODULE_7__.HeaderProviderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, primeng_dialog__WEBPACK_IMPORTED_MODULE_11__.Dialog, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgStyle, primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_12__.ConfirmPopup], styles: ["li[_ngcontent-%COMP%] {\n  border-bottom: 1px solid green;\n}\n\n.image[_ngcontent-%COMP%] {\n  min-height: 70px;\n  min-width: 70px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQUNKIiwiZmlsZSI6Im9yZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGl7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JlZW47XHJcbn1cclxuXHJcbi5pbWFnZXtcclxuICAgIG1pbi1oZWlnaHQ6IDcwcHg7XHJcbiAgICBtaW4td2lkdGg6IDcwcHg7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 54582:
/*!****************************************************************!*\
  !*** ./src/app/modules/provider/modules/order/order.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderModule": () => (/* binding */ OrderModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _order_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-routing.module */ 64876);
/* harmony import */ var _order_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order.component */ 5619);
/* harmony import */ var _components_menu_provider_menu_provider_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/menu-provider/menu-provider.module */ 60636);
/* harmony import */ var _components_header_provider_header_provider_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/header-provider/header-provider.module */ 27118);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/dialog */ 33489);
/* harmony import */ var primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/confirmpopup */ 84296);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ 81122);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/table */ 68581);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);










class OrderModule {
}
OrderModule.ɵfac = function OrderModule_Factory(t) { return new (t || OrderModule)(); };
OrderModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: OrderModule });
OrderModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [
        primeng_api__WEBPACK_IMPORTED_MODULE_5__.ConfirmationService
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _order_routing_module__WEBPACK_IMPORTED_MODULE_0__.OrderRoutingModule,
            _components_menu_provider_menu_provider_module__WEBPACK_IMPORTED_MODULE_2__.MenuProviderModule,
            _components_header_provider_header_provider_module__WEBPACK_IMPORTED_MODULE_3__.HeaderProviderModule,
            primeng_dialog__WEBPACK_IMPORTED_MODULE_7__.DialogModule,
            primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_8__.ConfirmPopupModule,
            primeng_table__WEBPACK_IMPORTED_MODULE_9__.TableModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](OrderModule, { declarations: [_order_component__WEBPACK_IMPORTED_MODULE_1__.OrderComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _order_routing_module__WEBPACK_IMPORTED_MODULE_0__.OrderRoutingModule,
        _components_menu_provider_menu_provider_module__WEBPACK_IMPORTED_MODULE_2__.MenuProviderModule,
        _components_header_provider_header_provider_module__WEBPACK_IMPORTED_MODULE_3__.HeaderProviderModule,
        primeng_dialog__WEBPACK_IMPORTED_MODULE_7__.DialogModule,
        primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_8__.ConfirmPopupModule,
        primeng_table__WEBPACK_IMPORTED_MODULE_9__.TableModule] }); })();


/***/ }),

/***/ 54644:
/*!****************************************************************!*\
  !*** ./node_modules/primeng/fesm2015/primeng-selectbutton.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SELECTBUTTON_VALUE_ACCESSOR": () => (/* binding */ SELECTBUTTON_VALUE_ACCESSOR),
/* harmony export */   "SelectButton": () => (/* binding */ SelectButton),
/* harmony export */   "SelectButtonModule": () => (/* binding */ SelectButtonModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/utils */ 50354);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/ripple */ 22875);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 90587);









function SelectButton_div_1_ng_container_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 8);
  }

  if (rf & 2) {
    const option_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](option_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "p-button-icon p-button-icon-left");
  }
}

function SelectButton_div_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SelectButton_div_1_ng_container_2_span_1_Template, 1, 3, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const option_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", option_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.getOptionLabel(option_r1));
  }
}

function SelectButton_div_1_ng_template_3_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

const _c0 = function (a0, a1) {
  return {
    $implicit: a0,
    index: a1
  };
};

function SelectButton_div_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SelectButton_div_1_ng_template_3_ng_container_0_Template, 1, 0, "ng-container", 9);
  }

  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const option_r1 = ctx_r11.$implicit;
    const i_r2 = ctx_r11.index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r6.itemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, option_r1, i_r2));
  }
}

const _c1 = function (a0, a1, a2) {
  return {
    "p-highlight": a0,
    "p-disabled": a1,
    "p-button-icon-only": a2
  };
};

function SelectButton_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectButton_div_1_Template_div_click_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);
      const option_r1 = restoredCtx.$implicit;
      const i_r2 = restoredCtx.index;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r12.onItemClick($event, option_r1, i_r2);
    })("keydown.enter", function SelectButton_div_1_Template_div_keydown_enter_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);
      const option_r1 = restoredCtx.$implicit;
      const i_r2 = restoredCtx.index;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r14.onItemClick($event, option_r1, i_r2);
    })("blur", function SelectButton_div_1_Template_div_blur_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r15.onBlur();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SelectButton_div_1_ng_container_2_Template, 4, 2, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SelectButton_div_1_ng_template_3_Template, 1, 5, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r1 = ctx.$implicit;

    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](option_r1.styleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](10, _c1, ctx_r0.isSelected(option_r1), ctx_r0.disabled || ctx_r0.isOptionDisabled(option_r1), option_r1.icon && !ctx_r0.getOptionLabel(option_r1)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-pressed", ctx_r0.isSelected(option_r1))("title", option_r1.title)("aria-label", option_r1.label)("tabindex", ctx_r0.disabled ? null : ctx_r0.tabindex)("aria-labelledby", ctx_r0.getOptionLabel(option_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.itemTemplate)("ngIfElse", _r5);
  }
}

const SELECTBUTTON_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => SelectButton),
  multi: true
};

class SelectButton {
  constructor(cd) {
    this.cd = cd;
    this.tabindex = 0;
    this.onOptionClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();

    this.onModelChange = () => {};

    this.onModelTouched = () => {};
  }

  getOptionLabel(option) {
    return this.optionLabel ? primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(option, this.optionLabel) : option.label != undefined ? option.label : option;
  }

  getOptionValue(option) {
    return this.optionValue ? primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(option, this.optionValue) : this.optionLabel || option.value === undefined ? option : option.value;
  }

  isOptionDisabled(option) {
    return this.optionDisabled ? primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(option, this.optionDisabled) : option.disabled !== undefined ? option.disabled : false;
  }

  writeValue(value) {
    this.value = value;
    this.cd.markForCheck();
  }

  registerOnChange(fn) {
    this.onModelChange = fn;
  }

  registerOnTouched(fn) {
    this.onModelTouched = fn;
  }

  setDisabledState(val) {
    this.disabled = val;
    this.cd.markForCheck();
  }

  onItemClick(event, option, index) {
    if (this.disabled || this.isOptionDisabled(option)) {
      return;
    }

    if (this.multiple) {
      if (this.isSelected(option)) this.removeOption(option);else this.value = [...(this.value || []), this.getOptionValue(option)];
    } else {
      this.value = this.getOptionValue(option);
    }

    this.onOptionClick.emit({
      originalEvent: event,
      option: option,
      index: index
    });
    this.onModelChange(this.value);
    this.onChange.emit({
      originalEvent: event,
      value: this.value
    });
  }

  onBlur() {
    this.onModelTouched();
  }

  removeOption(option) {
    this.value = this.value.filter(val => !primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.equals(val, this.getOptionValue(option), this.dataKey));
  }

  isSelected(option) {
    let selected = false;
    let optionValue = this.getOptionValue(option);

    if (this.multiple) {
      if (this.value) {
        for (let val of this.value) {
          if (primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.equals(val, optionValue, this.dataKey)) {
            selected = true;
            break;
          }
        }
      }
    } else {
      selected = primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.equals(this.getOptionValue(option), this.value, this.dataKey);
    }

    return selected;
  }

}

SelectButton.ɵfac = function SelectButton_Factory(t) {
  return new (t || SelectButton)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
};

SelectButton.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: SelectButton,
  selectors: [["p-selectButton"]],
  contentQueries: function SelectButton_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.itemTemplate = _t.first);
    }
  },
  hostAttrs: [1, "p-element"],
  inputs: {
    options: "options",
    optionLabel: "optionLabel",
    optionValue: "optionValue",
    optionDisabled: "optionDisabled",
    tabindex: "tabindex",
    multiple: "multiple",
    style: "style",
    styleClass: "styleClass",
    ariaLabelledBy: "ariaLabelledBy",
    disabled: "disabled",
    dataKey: "dataKey"
  },
  outputs: {
    onOptionClick: "onOptionClick",
    onChange: "onChange"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([SELECTBUTTON_VALUE_ACCESSOR])],
  decls: 2,
  vars: 5,
  consts: [["role", "group", 3, "ngClass", "ngStyle"], ["class", "p-button p-component", "role", "button", "pRipple", "", 3, "class", "ngClass", "click", "keydown.enter", "blur", 4, "ngFor", "ngForOf"], ["role", "button", "pRipple", "", 1, "p-button", "p-component", 3, "ngClass", "click", "keydown.enter", "blur"], ["btn", ""], [4, "ngIf", "ngIfElse"], ["customcontent", ""], [3, "ngClass", "class", 4, "ngIf"], [1, "p-button-label"], [3, "ngClass"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
  template: function SelectButton_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SelectButton_div_1_Template, 5, 14, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "p-selectbutton p-buttonset p-component")("ngStyle", ctx.style);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.options);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, primeng_ripple__WEBPACK_IMPORTED_MODULE_4__.Ripple, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet],
  styles: [".p-button{margin:0;display:inline-flex;cursor:pointer;-webkit-user-select:none;user-select:none;align-items:center;vertical-align:bottom;text-align:center;overflow:hidden;position:relative}.p-button-label{flex:1 1 auto}.p-button-icon-right{order:1}.p-button:disabled{cursor:default}.p-button-icon-only{justify-content:center}.p-button-icon-only .p-button-label{visibility:hidden;width:0;flex:0 0 auto}.p-button-vertical{flex-direction:column}.p-button-icon-bottom{order:2}.p-buttonset .p-button{margin:0}.p-buttonset .p-button:not(:last-child){border-right:0 none}.p-buttonset .p-button:not(:first-of-type):not(:last-of-type){border-radius:0}.p-buttonset .p-button:first-of-type{border-top-right-radius:0;border-bottom-right-radius:0}.p-buttonset .p-button:last-of-type{border-top-left-radius:0;border-bottom-left-radius:0}.p-buttonset .p-button:focus{position:relative;z-index:1}.p-button-label{transition:all .2s}\n"],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectButton, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'p-selectButton',
      template: `
        <div [ngClass]="'p-selectbutton p-buttonset p-component'" [ngStyle]="style" [class]="styleClass"  role="group">
            <div *ngFor="let option of options; let i = index" #btn class="p-button p-component" [class]="option.styleClass" role="button" [attr.aria-pressed]="isSelected(option)"
                [ngClass]="{'p-highlight':isSelected(option),
                        'p-disabled': disabled || isOptionDisabled(option),
                        'p-button-icon-only': (option.icon && !getOptionLabel(option))}"
                (click)="onItemClick($event,option,i)" (keydown.enter)="onItemClick($event,option,i)"
                [attr.title]="option.title" [attr.aria-label]="option.label" (blur)="onBlur()" [attr.tabindex]="disabled ? null : tabindex" [attr.aria-labelledby]="this.getOptionLabel(option)" pRipple>
                <ng-container *ngIf="!itemTemplate else customcontent">
                    <span [ngClass]="'p-button-icon p-button-icon-left'" [class]="option.icon" *ngIf="option.icon"></span>
                    <span class="p-button-label">{{getOptionLabel(option)}}</span>
                </ng-container>
                <ng-template #customcontent>
                    <ng-container *ngTemplateOutlet="itemTemplate; context: {$implicit: option, index: i}"></ng-container>
                </ng-template>
            </div>
        </div>
    `,
      providers: [SELECTBUTTON_VALUE_ACCESSOR],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        'class': 'p-element'
      },
      styles: [".p-button{margin:0;display:inline-flex;cursor:pointer;-webkit-user-select:none;user-select:none;align-items:center;vertical-align:bottom;text-align:center;overflow:hidden;position:relative}.p-button-label{flex:1 1 auto}.p-button-icon-right{order:1}.p-button:disabled{cursor:default}.p-button-icon-only{justify-content:center}.p-button-icon-only .p-button-label{visibility:hidden;width:0;flex:0 0 auto}.p-button-vertical{flex-direction:column}.p-button-icon-bottom{order:2}.p-buttonset .p-button{margin:0}.p-buttonset .p-button:not(:last-child){border-right:0 none}.p-buttonset .p-button:not(:first-of-type):not(:last-of-type){border-radius:0}.p-buttonset .p-button:first-of-type{border-top-right-radius:0;border-bottom-right-radius:0}.p-buttonset .p-button:last-of-type{border-top-left-radius:0;border-bottom-left-radius:0}.p-buttonset .p-button:focus{position:relative;z-index:1}.p-button-label{transition:all .2s}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }];
  }, {
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    optionLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    optionValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    optionDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    tabindex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    multiple: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    style: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    styleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    ariaLabelledBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dataKey: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onOptionClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    itemTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef]
    }]
  });
})();

class SelectButtonModule {}

SelectButtonModule.ɵfac = function SelectButtonModule_Factory(t) {
  return new (t || SelectButtonModule)();
};

SelectButtonModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: SelectButtonModule
});
SelectButtonModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_4__.RippleModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectButtonModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_4__.RippleModule],
      exports: [SelectButton],
      declarations: [SelectButton]
    }]
  }], null, null);
})();
/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 68581:
/*!*********************************************************!*\
  !*** ./node_modules/primeng/fesm2015/primeng-table.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CancelEditableRow": () => (/* binding */ CancelEditableRow),
/* harmony export */   "CellEditor": () => (/* binding */ CellEditor),
/* harmony export */   "ColumnFilter": () => (/* binding */ ColumnFilter),
/* harmony export */   "ColumnFilterFormElement": () => (/* binding */ ColumnFilterFormElement),
/* harmony export */   "ContextMenuRow": () => (/* binding */ ContextMenuRow),
/* harmony export */   "EditableColumn": () => (/* binding */ EditableColumn),
/* harmony export */   "EditableRow": () => (/* binding */ EditableRow),
/* harmony export */   "FrozenColumn": () => (/* binding */ FrozenColumn),
/* harmony export */   "InitEditableRow": () => (/* binding */ InitEditableRow),
/* harmony export */   "ReorderableColumn": () => (/* binding */ ReorderableColumn),
/* harmony export */   "ReorderableRow": () => (/* binding */ ReorderableRow),
/* harmony export */   "ReorderableRowHandle": () => (/* binding */ ReorderableRowHandle),
/* harmony export */   "ResizableColumn": () => (/* binding */ ResizableColumn),
/* harmony export */   "RowGroupHeader": () => (/* binding */ RowGroupHeader),
/* harmony export */   "RowToggler": () => (/* binding */ RowToggler),
/* harmony export */   "SaveEditableRow": () => (/* binding */ SaveEditableRow),
/* harmony export */   "SelectableRow": () => (/* binding */ SelectableRow),
/* harmony export */   "SelectableRowDblClick": () => (/* binding */ SelectableRowDblClick),
/* harmony export */   "SortIcon": () => (/* binding */ SortIcon),
/* harmony export */   "SortableColumn": () => (/* binding */ SortableColumn),
/* harmony export */   "Table": () => (/* binding */ Table),
/* harmony export */   "TableBody": () => (/* binding */ TableBody),
/* harmony export */   "TableCheckbox": () => (/* binding */ TableCheckbox),
/* harmony export */   "TableHeaderCheckbox": () => (/* binding */ TableHeaderCheckbox),
/* harmony export */   "TableModule": () => (/* binding */ TableModule),
/* harmony export */   "TableRadioButton": () => (/* binding */ TableRadioButton),
/* harmony export */   "TableService": () => (/* binding */ TableService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 81122);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/paginator */ 21066);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/inputtext */ 95583);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/button */ 84633);
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/selectbutton */ 54644);
/* harmony import */ var primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/tristatecheckbox */ 80371);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/calendar */ 21229);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/inputnumber */ 99721);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/dropdown */ 74086);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/dom */ 55128);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/utils */ 50354);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ 95752);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/animations */ 31631);





























const _c0 = ["container"];
const _c1 = ["resizeHelper"];
const _c2 = ["reorderIndicatorUp"];
const _c3 = ["reorderIndicatorDown"];
const _c4 = ["wrapper"];
const _c5 = ["table"];
const _c6 = ["tableHeader"];

function Table_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("p-datatable-loading-icon pi-spin " + ctx_r1.loadingIcon);
  }
}

function Table_div_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

function Table_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Table_div_3_ng_container_1_Template, 1, 0, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.captionTemplate);
  }
}

function Table_p_paginator_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-paginator", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onPageChange", function Table_p_paginator_4_Template_p_paginator_onPageChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r13.onPageChange($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rows", ctx_r3.rows)("first", ctx_r3.first)("totalRecords", ctx_r3.totalRecords)("pageLinkSize", ctx_r3.pageLinks)("alwaysShow", ctx_r3.alwaysShowPaginator)("rowsPerPageOptions", ctx_r3.rowsPerPageOptions)("templateLeft", ctx_r3.paginatorLeftTemplate)("templateRight", ctx_r3.paginatorRightTemplate)("dropdownAppendTo", ctx_r3.paginatorDropdownAppendTo)("dropdownScrollHeight", ctx_r3.paginatorDropdownScrollHeight)("currentPageReportTemplate", ctx_r3.currentPageReportTemplate)("showFirstLastIcon", ctx_r3.showFirstLastIcon)("dropdownItemTemplate", ctx_r3.paginatorDropdownItemTemplate)("showCurrentPageReport", ctx_r3.showCurrentPageReport)("showJumpToPageDropdown", ctx_r3.showJumpToPageDropdown)("showJumpToPageInput", ctx_r3.showJumpToPageInput)("showPageLinks", ctx_r3.showPageLinks);
  }
}

function Table_table_7_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

function Table_table_7_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

function Table_table_7_tbody_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tbody", 25);
  }

  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r18.frozenValue)("frozenRows", true)("pTableBody", ctx_r18.columns)("pTableBodyTemplate", ctx_r18.frozenBodyTemplate)("frozen", true);
  }
}

function Table_table_7_tfoot_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

const _c7 = function (a0) {
  return {
    $implicit: a0
  };
};

function Table_table_7_tfoot_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tfoot", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Table_table_7_tfoot_7_ng_container_1_Template, 1, 0, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r19.footerGroupedTemplate || ctx_r19.footerTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c7, ctx_r19.columns));
  }
}

function Table_table_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 18, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Table_table_7_ng_container_2_Template, 1, 0, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "thead", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, Table_table_7_ng_container_4_Template, 1, 0, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, Table_table_7_tbody_5_Template, 1, 5, "tbody", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "tbody", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, Table_table_7_tfoot_7_Template, 2, 4, "tfoot", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r5.tableStyleClass)("ngStyle", ctx_r5.tableStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r5.id + "-table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r5.colGroupTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c7, ctx_r5.columns));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r5.headerGroupedTemplate || ctx_r5.headerTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c7, ctx_r5.columns));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.frozenValue || ctx_r5.frozenBodyTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r5.dataToRender)("pTableBody", ctx_r5.columns)("pTableBodyTemplate", ctx_r5.bodyTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.footerGroupedTemplate || ctx_r5.footerTemplate);
  }
}

function Table_cdk_virtual_scroll_viewport_8_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

function Table_cdk_virtual_scroll_viewport_8_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

function Table_cdk_virtual_scroll_viewport_8_tbody_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tbody", 25);
  }

  if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r25.frozenValue)("frozenRows", true)("pTableBody", ctx_r25.columns)("pTableBodyTemplate", ctx_r25.bodyTemplate)("frozen", true);
  }
}

function Table_cdk_virtual_scroll_viewport_8_tfoot_9_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

function Table_cdk_virtual_scroll_viewport_8_tfoot_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tfoot", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Table_cdk_virtual_scroll_viewport_8_tfoot_9_ng_container_1_Template, 1, 0, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r26.footerGroupedTemplate || ctx_r26.footerTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c7, ctx_r26.columns));
  }
}

function Table_cdk_virtual_scroll_viewport_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "cdk-virtual-scroll-viewport", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scrolledIndexChange", function Table_cdk_virtual_scroll_viewport_8_Template_cdk_virtual_scroll_viewport_scrolledIndexChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r28.onScrollIndexChange($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 18, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, Table_cdk_virtual_scroll_viewport_8_ng_container_3_Template, 1, 0, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead", 21, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, Table_cdk_virtual_scroll_viewport_8_ng_container_6_Template, 1, 0, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, Table_cdk_virtual_scroll_viewport_8_tbody_7_Template, 1, 5, "tbody", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "tbody", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, Table_cdk_virtual_scroll_viewport_8_tfoot_9_Template, 2, 4, "tfoot", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx_r6.scrollHeight !== "flex" ? ctx_r6.scrollHeight : undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("itemSize", ctx_r6.virtualRowHeight)("minBufferPx", ctx_r6.minBufferPx)("maxBufferPx", ctx_r6.maxBufferPx);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r6.tableStyleClass)("ngStyle", ctx_r6.tableStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r6.id + "-table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r6.colGroupTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c7, ctx_r6.columns));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r6.headerGroupedTemplate || ctx_r6.headerTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c7, ctx_r6.columns));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.frozenValue || ctx_r6.frozenBodyTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r6.dataToRender)("pTableBody", ctx_r6.columns)("pTableBodyTemplate", ctx_r6.bodyTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.footerGroupedTemplate || ctx_r6.footerTemplate);
  }
}

function Table_p_paginator_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-paginator", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onPageChange", function Table_p_paginator_9_Template_p_paginator_onPageChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r30.onPageChange($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rows", ctx_r7.rows)("first", ctx_r7.first)("totalRecords", ctx_r7.totalRecords)("pageLinkSize", ctx_r7.pageLinks)("alwaysShow", ctx_r7.alwaysShowPaginator)("rowsPerPageOptions", ctx_r7.rowsPerPageOptions)("templateLeft", ctx_r7.paginatorLeftTemplate)("templateRight", ctx_r7.paginatorRightTemplate)("dropdownAppendTo", ctx_r7.paginatorDropdownAppendTo)("dropdownScrollHeight", ctx_r7.paginatorDropdownScrollHeight)("currentPageReportTemplate", ctx_r7.currentPageReportTemplate)("showFirstLastIcon", ctx_r7.showFirstLastIcon)("dropdownItemTemplate", ctx_r7.paginatorDropdownItemTemplate)("showCurrentPageReport", ctx_r7.showCurrentPageReport)("showJumpToPageDropdown", ctx_r7.showJumpToPageDropdown)("showJumpToPageInput", ctx_r7.showJumpToPageInput)("showPageLinks", ctx_r7.showPageLinks);
  }
}

function Table_div_10_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

function Table_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Table_div_10_ng_container_1_Template, 1, 0, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r8.summaryTemplate);
  }
}

function Table_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 31, 32);
  }
}

function Table_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 33, 34);
  }
}

function Table_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 35, 36);
  }
}

const _c8 = function (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14) {
  return {
    "p-datatable p-component": true,
    "p-datatable-hoverable-rows": a1,
    "p-datatable-auto-layout": a2,
    "p-datatable-resizable": a3,
    "p-datatable-resizable-fit": a4,
    "p-datatable-scrollable": a5,
    "p-datatable-scrollable-vertical": a6,
    "p-datatable-scrollable-horizontal": a7,
    "p-datatable-scrollable-both": a8,
    "p-datatable-flex-scrollable": a9,
    "p-datatable-responsive-stack": a10,
    "p-datatable-responsive-scroll": a11,
    "p-datatable-responsive": a12,
    "p-datatable-grouped-header": a13,
    "p-datatable-grouped-footer": a14
  };
};

const _c9 = function (a0) {
  return {
    height: a0
  };
};

const _c10 = ["pTableBody", ""];

function TableBody_ng_container_0_ng_template_1_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

const _c11 = function (a0, a1, a2, a3, a4) {
  return {
    $implicit: a0,
    rowIndex: a1,
    columns: a2,
    editing: a3,
    frozen: a4
  };
};

function TableBody_ng_container_0_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableBody_ng_container_0_ng_template_1_ng_container_0_ng_container_1_Template, 1, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const rowData_r7 = ctx_r14.$implicit;
    const rowIndex_r8 = ctx_r14.index;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r9.dt.groupHeaderTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction5"](2, _c11, rowData_r7, ctx_r9.dt.paginator ? ctx_r9.dt.first + rowIndex_r8 : rowIndex_r8, ctx_r9.columns, ctx_r9.dt.editMode === "row" && ctx_r9.dt.isRowEditing(rowData_r7), ctx_r9.frozen));
  }
}

function TableBody_ng_container_0_ng_template_1_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

function TableBody_ng_container_0_ng_template_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableBody_ng_container_0_ng_template_1_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const rowData_r7 = ctx_r16.$implicit;
    const rowIndex_r8 = ctx_r16.index;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r10.template)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction5"](2, _c11, rowData_r7, ctx_r10.dt.paginator ? ctx_r10.dt.first + rowIndex_r8 : rowIndex_r8, ctx_r10.columns, ctx_r10.dt.editMode === "row" && ctx_r10.dt.isRowEditing(rowData_r7), ctx_r10.frozen));
  }
}

function TableBody_ng_container_0_ng_template_1_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

const _c12 = function (a0, a1, a2, a3, a4, a5, a6) {
  return {
    $implicit: a0,
    rowIndex: a1,
    columns: a2,
    editing: a3,
    frozen: a4,
    rowgroup: a5,
    rowspan: a6
  };
};

function TableBody_ng_container_0_ng_template_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableBody_ng_container_0_ng_template_1_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const rowData_r7 = ctx_r18.$implicit;
    const rowIndex_r8 = ctx_r18.index;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r11.template)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction7"](2, _c12, rowData_r7, ctx_r11.dt.paginator ? ctx_r11.dt.first + rowIndex_r8 : rowIndex_r8, ctx_r11.columns, ctx_r11.dt.editMode === "row" && ctx_r11.dt.isRowEditing(rowData_r7), ctx_r11.frozen, ctx_r11.shouldRenderRowspan(ctx_r11.value, rowData_r7, rowIndex_r8), ctx_r11.calculateRowGroupSize(ctx_r11.value, rowData_r7, rowIndex_r8)));
  }
}

function TableBody_ng_container_0_ng_template_1_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

function TableBody_ng_container_0_ng_template_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableBody_ng_container_0_ng_template_1_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const rowData_r7 = ctx_r20.$implicit;
    const rowIndex_r8 = ctx_r20.index;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r12.dt.groupFooterTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction5"](2, _c11, rowData_r7, ctx_r12.dt.paginator ? ctx_r12.dt.first + rowIndex_r8 : rowIndex_r8, ctx_r12.columns, ctx_r12.dt.editMode === "row" && ctx_r12.dt.isRowEditing(rowData_r7), ctx_r12.frozen));
  }
}

function TableBody_ng_container_0_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TableBody_ng_container_0_ng_template_1_ng_container_0_Template, 2, 8, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableBody_ng_container_0_ng_template_1_ng_container_1_Template, 2, 8, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TableBody_ng_container_0_ng_template_1_ng_container_2_Template, 2, 10, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TableBody_ng_container_0_ng_template_1_ng_container_3_Template, 2, 8, "ng-container", 2);
  }

  if (rf & 2) {
    const rowData_r7 = ctx.$implicit;
    const rowIndex_r8 = ctx.index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.dt.groupHeaderTemplate && ctx_r6.dt.rowGroupMode === "subheader" && ctx_r6.shouldRenderRowGroupHeader(ctx_r6.value, rowData_r7, rowIndex_r8));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.dt.rowGroupMode !== "rowspan");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.dt.rowGroupMode === "rowspan");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.dt.groupFooterTemplate && ctx_r6.dt.rowGroupMode === "subheader" && ctx_r6.shouldRenderRowGroupFooter(ctx_r6.value, rowData_r7, rowIndex_r8));
  }
}

function TableBody_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableBody_ng_container_0_ng_template_1_Template, 4, 4, "ng-template", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.value)("ngForTrackBy", ctx_r0.dt.rowTrackBy);
  }
}

function TableBody_ng_container_1_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

function TableBody_ng_container_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TableBody_ng_container_1_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 4);
  }

  if (rf & 2) {
    const rowData_r22 = ctx.$implicit;
    const rowIndex_r23 = ctx.index;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", rowData_r22 ? ctx_r21.template : ctx_r21.dt.loadingBodyTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction5"](2, _c11, rowData_r22, ctx_r21.dt.paginator ? ctx_r21.dt.first + rowIndex_r23 : rowIndex_r23, ctx_r21.columns, ctx_r21.dt.editMode === "row" && ctx_r21.dt.isRowEditing(rowData_r22), ctx_r21.frozen));
  }
}

function TableBody_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableBody_ng_container_1_ng_template_1_Template, 1, 8, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkVirtualForOf", ctx_r1.dt.filteredValue || ctx_r1.dt.value)("cdkVirtualForTrackBy", ctx_r1.dt.rowTrackBy)("cdkVirtualForTemplateCacheSize", 0);
  }
}

function TableBody_ng_container_2_ng_template_1_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

const _c13 = function (a0, a1, a2, a3, a4, a5) {
  return {
    $implicit: a0,
    rowIndex: a1,
    columns: a2,
    expanded: a3,
    editing: a4,
    frozen: a5
  };
};

function TableBody_ng_container_2_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableBody_ng_container_2_ng_template_1_ng_container_0_ng_container_1_Template, 1, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const rowData_r26 = ctx_r32.$implicit;
    const rowIndex_r27 = ctx_r32.index;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r28.template)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction6"](2, _c13, rowData_r26, ctx_r28.dt.paginator ? ctx_r28.dt.first + rowIndex_r27 : rowIndex_r27, ctx_r28.columns, ctx_r28.dt.isRowExpanded(rowData_r26), ctx_r28.dt.editMode === "row" && ctx_r28.dt.isRowEditing(rowData_r26), ctx_r28.frozen));
  }
}

function TableBody_ng_container_2_ng_template_1_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

function TableBody_ng_container_2_ng_template_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableBody_ng_container_2_ng_template_1_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const rowData_r26 = ctx_r34.$implicit;
    const rowIndex_r27 = ctx_r34.index;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r29.dt.groupHeaderTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction6"](2, _c13, rowData_r26, ctx_r29.dt.paginator ? ctx_r29.dt.first + rowIndex_r27 : rowIndex_r27, ctx_r29.columns, ctx_r29.dt.isRowExpanded(rowData_r26), ctx_r29.dt.editMode === "row" && ctx_r29.dt.isRowEditing(rowData_r26), ctx_r29.frozen));
  }
}

function TableBody_ng_container_2_ng_template_1_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

function TableBody_ng_container_2_ng_template_1_ng_container_2_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

function TableBody_ng_container_2_ng_template_1_ng_container_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableBody_ng_container_2_ng_template_1_ng_container_2_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const rowData_r26 = ctx_r38.$implicit;
    const rowIndex_r27 = ctx_r38.index;
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r36.dt.groupFooterTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction6"](2, _c13, rowData_r26, ctx_r36.dt.paginator ? ctx_r36.dt.first + rowIndex_r27 : rowIndex_r27, ctx_r36.columns, ctx_r36.dt.isRowExpanded(rowData_r26), ctx_r36.dt.editMode === "row" && ctx_r36.dt.isRowEditing(rowData_r26), ctx_r36.frozen));
  }
}

const _c14 = function (a0, a1, a2, a3) {
  return {
    $implicit: a0,
    rowIndex: a1,
    columns: a2,
    frozen: a3
  };
};

function TableBody_ng_container_2_ng_template_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableBody_ng_container_2_ng_template_1_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TableBody_ng_container_2_ng_template_1_ng_container_2_ng_container_2_Template, 2, 9, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const rowData_r26 = ctx_r39.$implicit;
    const rowIndex_r27 = ctx_r39.index;
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r30.dt.expandedRowTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](3, _c14, rowData_r26, ctx_r30.dt.paginator ? ctx_r30.dt.first + rowIndex_r27 : rowIndex_r27, ctx_r30.columns, ctx_r30.frozen));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r30.dt.groupFooterTemplate && ctx_r30.dt.rowGroupMode === "subheader" && ctx_r30.shouldRenderRowGroupFooter(ctx_r30.value, rowData_r26, rowIndex_r27));
  }
}

function TableBody_ng_container_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TableBody_ng_container_2_ng_template_1_ng_container_0_Template, 2, 9, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableBody_ng_container_2_ng_template_1_ng_container_1_Template, 2, 9, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TableBody_ng_container_2_ng_template_1_ng_container_2_Template, 3, 8, "ng-container", 0);
  }

  if (rf & 2) {
    const rowData_r26 = ctx.$implicit;
    const rowIndex_r27 = ctx.index;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r25.dt.groupHeaderTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r25.dt.groupHeaderTemplate && ctx_r25.dt.rowGroupMode === "subheader" && ctx_r25.shouldRenderRowGroupHeader(ctx_r25.value, rowData_r26, rowIndex_r27));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r25.dt.isRowExpanded(rowData_r26));
  }
}

function TableBody_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableBody_ng_container_2_ng_template_1_Template, 3, 3, "ng-template", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.value)("ngForTrackBy", ctx_r2.dt.rowTrackBy);
  }
}

function TableBody_ng_container_3_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

function TableBody_ng_container_3_ng_template_1_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

function TableBody_ng_container_3_ng_template_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableBody_ng_container_3_ng_template_1_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const rowData_r41 = ctx_r46.$implicit;
    const rowIndex_r42 = ctx_r46.index;
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r44.dt.frozenExpandedRowTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](2, _c14, rowData_r41, ctx_r44.dt.paginator ? ctx_r44.dt.first + rowIndex_r42 : rowIndex_r42, ctx_r44.columns, ctx_r44.frozen));
  }
}

function TableBody_ng_container_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TableBody_ng_container_3_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableBody_ng_container_3_ng_template_1_ng_container_1_Template, 2, 7, "ng-container", 0);
  }

  if (rf & 2) {
    const rowData_r41 = ctx.$implicit;
    const rowIndex_r42 = ctx.index;
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r40.template)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction6"](3, _c13, rowData_r41, ctx_r40.dt.paginator ? ctx_r40.dt.first + rowIndex_r42 : rowIndex_r42, ctx_r40.columns, ctx_r40.dt.isRowExpanded(rowData_r41), ctx_r40.dt.editMode === "row" && ctx_r40.dt.isRowEditing(rowData_r41), ctx_r40.frozen));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r40.dt.isRowExpanded(rowData_r41));
  }
}

function TableBody_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableBody_ng_container_3_ng_template_1_Template, 2, 10, "ng-template", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.value)("ngForTrackBy", ctx_r3.dt.rowTrackBy);
  }
}

function TableBody_ng_container_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

const _c15 = function (a0, a1) {
  return {
    $implicit: a0,
    frozen: a1
  };
};

function TableBody_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableBody_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r4.dt.loadingBodyTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c15, ctx_r4.columns, ctx_r4.frozen));
  }
}

function TableBody_ng_container_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

function TableBody_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableBody_ng_container_5_ng_container_1_Template, 1, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r5.dt.emptyMessageTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c15, ctx_r5.columns, ctx_r5.frozen));
  }
}

function SortIcon_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getBadgeValue());
  }
}

const _c16 = function (a0, a1, a2) {
  return {
    "pi-sort-amount-up-alt": a0,
    "pi-sort-amount-down": a1,
    "pi-sort-alt": a2
  };
};

function CellEditor_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

function CellEditor_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CellEditor_ng_container_0_ng_container_1_Template, 1, 0, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.inputTemplate);
  }
}

function CellEditor_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

function CellEditor_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CellEditor_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.outputTemplate);
  }
}

const _c17 = function (a0, a1) {
  return {
    "p-radiobutton-focused": a0,
    "p-radiobutton-disabled": a1
  };
};

const _c18 = function (a1, a2, a3) {
  return {
    "p-radiobutton-box p-component": true,
    "p-highlight": a1,
    "p-focus": a2,
    "p-disabled": a3
  };
};

const _c19 = function (a0, a1) {
  return {
    "p-checkbox-focused": a0,
    "p-checkbox-disabled": a1
  };
};

const _c20 = function (a1, a2, a3) {
  return {
    "p-checkbox-box p-component": true,
    "p-highlight": a1,
    "p-focus": a2,
    "p-disabled": a3
  };
};

const _c21 = function (a0) {
  return {
    "pi pi-check": a0
  };
};

const _c22 = function (a1, a2, a3) {
  return {
    "p-checkbox-box": true,
    "p-highlight": a1,
    "p-focus": a2,
    "p-disabled": a3
  };
};

function ColumnFilterFormElement_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

const _c23 = function (a0, a1) {
  return {
    $implicit: a0,
    filterCallback: a1
  };
};

function ColumnFilterFormElement_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ColumnFilterFormElement_ng_container_0_ng_container_1_Template, 1, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.filterTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c23, ctx_r0.filterConstraint.value, ctx_r0.filterCallback));
  }
}

function ColumnFilterFormElement_ng_template_1_input_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function ColumnFilterFormElement_ng_template_1_input_1_Template_input_input_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r8.onModelChange($event.target.value);
    })("keydown.enter", function ColumnFilterFormElement_ng_template_1_input_1_Template_input_keydown_enter_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r10.onTextInputEnterKeyDown($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r4.filterConstraint == null ? null : ctx_r4.filterConstraint.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("placeholder", ctx_r4.placeholder);
  }
}

function ColumnFilterFormElement_ng_template_1_p_inputNumber_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-inputNumber", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ColumnFilterFormElement_ng_template_1_p_inputNumber_2_Template_p_inputNumber_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r11.onModelChange($event);
    })("onKeyDown", function ColumnFilterFormElement_ng_template_1_p_inputNumber_2_Template_p_inputNumber_onKeyDown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r13.onNumericInputKeyDown($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.filterConstraint == null ? null : ctx_r5.filterConstraint.value)("showButtons", true)("minFractionDigits", ctx_r5.minFractionDigits)("maxFractionDigits", ctx_r5.maxFractionDigits)("prefix", ctx_r5.prefix)("suffix", ctx_r5.suffix)("placeholder", ctx_r5.placeholder)("mode", ctx_r5.currency ? "currency" : "decimal")("locale", ctx_r5.locale)("localeMatcher", ctx_r5.localeMatcher)("currency", ctx_r5.currency)("currencyDisplay", ctx_r5.currencyDisplay)("useGrouping", ctx_r5.useGrouping);
  }
}

function ColumnFilterFormElement_ng_template_1_p_triStateCheckbox_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-triStateCheckbox", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ColumnFilterFormElement_ng_template_1_p_triStateCheckbox_3_Template_p_triStateCheckbox_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r14.onModelChange($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r6.filterConstraint == null ? null : ctx_r6.filterConstraint.value);
  }
}

function ColumnFilterFormElement_ng_template_1_p_calendar_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-calendar", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ColumnFilterFormElement_ng_template_1_p_calendar_4_Template_p_calendar_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r16.onModelChange($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx_r7.placeholder)("ngModel", ctx_r7.filterConstraint == null ? null : ctx_r7.filterConstraint.value);
  }
}

function ColumnFilterFormElement_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ColumnFilterFormElement_ng_template_1_input_1_Template, 1, 2, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ColumnFilterFormElement_ng_template_1_p_inputNumber_2_Template, 1, 13, "p-inputNumber", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ColumnFilterFormElement_ng_template_1_p_triStateCheckbox_3_Template, 1, 1, "p-triStateCheckbox", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ColumnFilterFormElement_ng_template_1_p_calendar_4_Template, 1, 2, "p-calendar", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx_r2.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "numeric");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "boolean");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "date");
  }
}

const _c24 = ["icon"];

function ColumnFilter_p_columnFilterFormElement_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p-columnFilterFormElement", 5);
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r0.type)("field", ctx_r0.field)("filterConstraint", ctx_r0.dt.filters[ctx_r0.field])("filterTemplate", ctx_r0.filterTemplate)("placeholder", ctx_r0.placeholder)("minFractionDigits", ctx_r0.minFractionDigits)("maxFractionDigits", ctx_r0.maxFractionDigits)("prefix", ctx_r0.prefix)("suffix", ctx_r0.suffix)("locale", ctx_r0.locale)("localeMatcher", ctx_r0.localeMatcher)("currency", ctx_r0.currency)("currencyDisplay", ctx_r0.currencyDisplay)("useGrouping", ctx_r0.useGrouping);
  }
}

const _c25 = function (a0, a1) {
  return {
    "p-column-filter-menu-button-open": a0,
    "p-column-filter-menu-button-active": a1
  };
};

function ColumnFilter_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColumnFilter_button_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r5.toggleMenu();
    })("keydown", function ColumnFilter_button_2_Template_button_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r7.onToggleButtonKeyDown($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c25, ctx_r1.overlayVisible, ctx_r1.hasFilter()));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", ctx_r1.overlayVisible);
  }
}

const _c26 = function (a0) {
  return {
    "p-hidden-space": a0
  };
};

function ColumnFilter_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColumnFilter_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r9.clearFilter();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c26, !ctx_r2.hasRowFilter()));
  }
}

function ColumnFilter_div_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

const _c27 = function (a0) {
  return {
    "p-highlight": a0
  };
};

function ColumnFilter_div_4_ul_2_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColumnFilter_div_4_ul_2_li_1_Template_li_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);
      const matchMode_r17 = restoredCtx.$implicit;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return ctx_r19.onRowMatchModeChange(matchMode_r17.value);
    })("keydown", function ColumnFilter_div_4_ul_2_li_1_Template_li_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return ctx_r21.onRowMatchModeKeyDown($event);
    })("keydown.enter", function ColumnFilter_div_4_ul_2_li_1_Template_li_keydown_enter_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);
      const matchMode_r17 = restoredCtx.$implicit;
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return ctx_r22.onRowMatchModeChange(matchMode_r17.value);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const matchMode_r17 = ctx.$implicit;
    const i_r18 = ctx.index;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c27, ctx_r16.isRowMatchModeSelected(matchMode_r17.value)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", i_r18 === 0 ? "0" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](matchMode_r17.label);
  }
}

function ColumnFilter_div_4_ul_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ColumnFilter_div_4_ul_2_li_1_Template, 2, 5, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColumnFilter_div_4_ul_2_Template_li_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r23.onRowClearItemClick();
    })("keydown", function ColumnFilter_div_4_ul_2_Template_li_keydown_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r25.onRowMatchModeKeyDown($event);
    })("keydown.enter", function ColumnFilter_div_4_ul_2_Template_li_keydown_enter_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r26.onRowClearItemClick();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r12.matchModes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.noFilterLabel);
  }
}

function ColumnFilter_div_4_ng_template_3_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27)(1, "p-dropdown", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ColumnFilter_div_4_ng_template_3_div_0_Template_p_dropdown_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return ctx_r32.onOperatorChange($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r27.operatorOptions)("ngModel", ctx_r27.operator);
  }
}

function ColumnFilter_div_4_ng_template_3_div_2_p_dropdown_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-dropdown", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ColumnFilter_div_4_ng_template_3_div_2_p_dropdown_1_Template_p_dropdown_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40);
      const fieldConstraint_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return ctx_r38.onMenuMatchModeChange($event, fieldConstraint_r34);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const fieldConstraint_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r36.matchModes)("ngModel", fieldConstraint_r34.matchMode);
  }
}

function ColumnFilter_div_4_ng_template_3_div_2_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColumnFilter_div_4_ng_template_3_div_2_button_4_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44);
      const fieldConstraint_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return ctx_r42.removeConstraint(fieldConstraint_r34);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", ctx_r37.removeRuleButtonLabel);
  }
}

function ColumnFilter_div_4_ng_template_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ColumnFilter_div_4_ng_template_3_div_2_p_dropdown_1_Template, 1, 2, "p-dropdown", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "p-columnFilterFormElement", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ColumnFilter_div_4_ng_template_3_div_2_button_4_Template, 1, 1, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const fieldConstraint_r34 = ctx.$implicit;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r28.showMatchModes && ctx_r28.matchModes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r28.type)("field", ctx_r28.field)("filterConstraint", fieldConstraint_r34)("filterTemplate", ctx_r28.filterTemplate)("placeholder", ctx_r28.placeholder)("minFractionDigits", ctx_r28.minFractionDigits)("maxFractionDigits", ctx_r28.maxFractionDigits)("prefix", ctx_r28.prefix)("suffix", ctx_r28.suffix)("locale", ctx_r28.locale)("localeMatcher", ctx_r28.localeMatcher)("currency", ctx_r28.currency)("currencyDisplay", ctx_r28.currencyDisplay)("useGrouping", ctx_r28.useGrouping);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r28.showRemoveIcon);
  }
}

function ColumnFilter_div_4_ng_template_3_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35)(1, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColumnFilter_div_4_ng_template_3_div_3_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46);
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return ctx_r45.addConstraint();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", ctx_r29.addRuleButtonLabel);
  }
}

function ColumnFilter_div_4_ng_template_3_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColumnFilter_div_4_ng_template_3_button_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return ctx_r47.clearFilter();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", ctx_r30.clearButtonLabel);
  }
}

function ColumnFilter_div_4_ng_template_3_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColumnFilter_div_4_ng_template_3_button_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return ctx_r49.applyFilter();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", ctx_r31.applyButtonLabel);
  }
}

function ColumnFilter_div_4_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ColumnFilter_div_4_ng_template_3_div_0_Template, 2, 2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ColumnFilter_div_4_ng_template_3_div_2_Template, 5, 16, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ColumnFilter_div_4_ng_template_3_div_3_Template, 2, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ColumnFilter_div_4_ng_template_3_button_5_Template, 1, 1, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ColumnFilter_div_4_ng_template_3_button_6_Template, 1, 1, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.isShowOperator);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r14.fieldConstraints);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.isShowAddConstraint);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.showClearButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.showApplyButton);
  }
}

function ColumnFilter_div_4_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

const _c28 = function (a1) {
  return {
    "p-column-filter-overlay p-component p-fluid": true,
    "p-column-filter-overlay-menu": a1
  };
};

function ColumnFilter_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColumnFilter_div_4_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r51.onContentClick();
    })("@overlayAnimation.start", function ColumnFilter_div_4_Template_div_animation_overlayAnimation_start_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52);
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r53.onOverlayAnimationStart($event);
    })("@overlayAnimation.done", function ColumnFilter_div_4_Template_div_animation_overlayAnimation_done_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52);
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r54.onOverlayAnimationEnd($event);
    })("keydown.escape", function ColumnFilter_div_4_Template_div_keydown_escape_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52);
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r55.onEscape();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ColumnFilter_div_4_ng_container_1_Template, 1, 0, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ColumnFilter_div_4_ul_2_Template, 5, 2, "ul", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ColumnFilter_div_4_ng_template_3_Template, 7, 5, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ColumnFilter_div_4_ng_container_5_Template, 1, 0, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c28, ctx_r3.display === "menu"))("@overlayAnimation", "visible");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.headerTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c7, ctx_r3.field));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.display === "row")("ngIfElse", _r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.footerTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c7, ctx_r3.field));
  }
}

const _c29 = function (a0, a1) {
  return {
    "p-column-filter-row": a0,
    "p-column-filter-menu": a1
  };
};

class TableService {
  constructor() {
    this.sortSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.selectionSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.contextMenuSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.valueSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.totalRecordsSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.columnsSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.resetSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.sortSource$ = this.sortSource.asObservable();
    this.selectionSource$ = this.selectionSource.asObservable();
    this.contextMenuSource$ = this.contextMenuSource.asObservable();
    this.valueSource$ = this.valueSource.asObservable();
    this.totalRecordsSource$ = this.totalRecordsSource.asObservable();
    this.columnsSource$ = this.columnsSource.asObservable();
    this.resetSource$ = this.resetSource.asObservable();
  }

  onSort(sortMeta) {
    this.sortSource.next(sortMeta);
  }

  onSelectionChange() {
    this.selectionSource.next(null);
  }

  onResetChange() {
    this.resetSource.next(null);
  }

  onContextMenu(data) {
    this.contextMenuSource.next(data);
  }

  onValueChange(value) {
    this.valueSource.next(value);
  }

  onTotalRecordsChange(value) {
    this.totalRecordsSource.next(value);
  }

  onColumnsChange(columns) {
    this.columnsSource.next(columns);
  }

}

TableService.ɵfac = function TableService_Factory(t) {
  return new (t || TableService)();
};

TableService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: TableService,
  factory: TableService.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], null, null);
})();

class Table {
  constructor(el, zone, tableService, cd, filterService, overlayService) {
    this.el = el;
    this.zone = zone;
    this.tableService = tableService;
    this.cd = cd;
    this.filterService = filterService;
    this.overlayService = overlayService;
    this.pageLinks = 5;
    this.alwaysShowPaginator = true;
    this.paginatorPosition = 'bottom';
    this.paginatorDropdownScrollHeight = '200px';
    this.currentPageReportTemplate = '{currentPage} of {totalPages}';
    this.showFirstLastIcon = true;
    this.showPageLinks = true;
    this.defaultSortOrder = 1;
    this.sortMode = 'single';
    this.resetPageOnSort = true;
    this.selectAllChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.contextMenuSelectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.contextMenuSelectionMode = "separate";

    this.rowTrackBy = (index, item) => item;

    this.lazy = false;
    this.lazyLoadOnInit = true;
    this.compareSelectionBy = 'deepEquals';
    this.csvSeparator = ',';
    this.exportFilename = 'download';
    this.filters = {};
    this.filterDelay = 300;
    this.expandedRowKeys = {};
    this.editingRowKeys = {};
    this.rowExpandMode = 'multiple';
    this.scrollDirection = "vertical";
    this.virtualScrollDelay = 250;
    this.virtualRowHeight = 28;
    this.columnResizeMode = 'fit';
    this.loadingIcon = 'pi pi-spinner';
    this.showLoader = true;
    this.showInitialSortBadge = true;
    this.stateStorage = 'session';
    this.editMode = 'cell';
    this.groupRowsByOrder = 1;
    this.responsiveLayout = 'stack';
    this.breakpoint = '960px';
    this.onRowSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onRowUnselect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onPage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onSort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onLazyLoad = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onRowExpand = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onRowCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onContextMenuSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onColResize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onColReorder = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onRowReorder = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onEditInit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onEditComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onEditCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onHeaderCheckboxToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.sortFunction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.firstChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.rowsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onStateSave = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onStateRestore = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this._value = [];
    this._totalRecords = 0;
    this._first = 0;
    this.selectionKeys = {};
    this._sortOrder = 1;
    this._selectAll = null;
    this.columnResizing = false;
    this.rowGroupHeaderStyleObject = {};
    this.id = (0,primeng_utils__WEBPACK_IMPORTED_MODULE_2__.UniqueComponentId)();
    this.virtualScrollInitialized = false;
  }

  ngOnInit() {
    if (this.lazy && this.lazyLoadOnInit) {
      if (!this.virtualScroll) {
        this.onLazyLoad.emit(this.createLazyLoadMetadata());
      }

      if (this.restoringFilter) {
        this.restoringFilter = false;
      }
    }

    if (this.responsiveLayout === 'stack' && !this.scrollable) {
      this.createResponsiveStyle();
    }

    this.initialized = true;
  }

  ngAfterContentInit() {
    this.templates.forEach(item => {
      switch (item.getType()) {
        case 'caption':
          this.captionTemplate = item.template;
          break;

        case 'header':
          this.headerTemplate = item.template;
          break;

        case 'headergrouped':
          this.headerGroupedTemplate = item.template;
          break;

        case 'body':
          this.bodyTemplate = item.template;
          break;

        case 'loadingbody':
          this.loadingBodyTemplate = item.template;
          break;

        case 'footer':
          this.footerTemplate = item.template;
          break;

        case 'footergrouped':
          this.footerGroupedTemplate = item.template;
          break;

        case 'summary':
          this.summaryTemplate = item.template;
          break;

        case 'colgroup':
          this.colGroupTemplate = item.template;
          break;

        case 'rowexpansion':
          this.expandedRowTemplate = item.template;
          break;

        case 'groupheader':
          this.groupHeaderTemplate = item.template;
          break;

        case 'rowspan':
          this.rowspanTemplate = item.template;
          break;

        case 'groupfooter':
          this.groupFooterTemplate = item.template;
          break;

        case 'frozenrows':
          this.frozenRowsTemplate = item.template;
          break;

        case 'frozenheader':
          this.frozenHeaderTemplate = item.template;
          break;

        case 'frozenbody':
          this.frozenBodyTemplate = item.template;
          break;

        case 'frozenfooter':
          this.frozenFooterTemplate = item.template;
          break;

        case 'frozencolgroup':
          this.frozenColGroupTemplate = item.template;
          break;

        case 'frozenrowexpansion':
          this.frozenExpandedRowTemplate = item.template;
          break;

        case 'emptymessage':
          this.emptyMessageTemplate = item.template;
          break;

        case 'paginatorleft':
          this.paginatorLeftTemplate = item.template;
          break;

        case 'paginatorright':
          this.paginatorRightTemplate = item.template;
          break;

        case 'paginatordropdownitem':
          this.paginatorDropdownItemTemplate = item.template;
          break;
      }
    });
  }

  ngAfterViewInit() {
    if (this.isStateful() && this.resizableColumns) {
      this.restoreColumnWidths();
    }

    if (this.scrollable && this.virtualScroll) {
      this.virtualScrollSubscription = this.virtualScrollBody.renderedRangeStream.subscribe(range => {
        let top = range.start * this.virtualRowHeight * -1;
        this.tableHeaderViewChild.nativeElement.style.top = top + 'px';
      });
    }
  }

  ngOnChanges(simpleChange) {
    if (simpleChange.value) {
      if (this.isStateful() && !this.stateRestored) {
        this.restoreState();
      }

      this._value = simpleChange.value.currentValue;

      if (!this.lazy) {
        this.totalRecords = this._value ? this._value.length : 0;
        if (this.sortMode == 'single' && (this.sortField || this.groupRowsBy)) this.sortSingle();else if (this.sortMode == 'multiple' && (this.multiSortMeta || this.groupRowsBy)) this.sortMultiple();else if (this.hasFilter()) //sort already filters
          this._filter();
      }

      this.tableService.onValueChange(simpleChange.value.currentValue);
    }

    if (simpleChange.columns) {
      this._columns = simpleChange.columns.currentValue;
      this.tableService.onColumnsChange(simpleChange.columns.currentValue);

      if (this._columns && this.isStateful() && this.reorderableColumns && !this.columnOrderStateRestored) {
        this.restoreColumnOrder();
      }
    }

    if (simpleChange.sortField) {
      this._sortField = simpleChange.sortField.currentValue; //avoid triggering lazy load prior to lazy initialization at onInit

      if (!this.lazy || this.initialized) {
        if (this.sortMode === 'single') {
          this.sortSingle();
        }
      }
    }

    if (simpleChange.groupRowsBy) {
      //avoid triggering lazy load prior to lazy initialization at onInit
      if (!this.lazy || this.initialized) {
        if (this.sortMode === 'single') {
          this.sortSingle();
        }
      }
    }

    if (simpleChange.sortOrder) {
      this._sortOrder = simpleChange.sortOrder.currentValue; //avoid triggering lazy load prior to lazy initialization at onInit

      if (!this.lazy || this.initialized) {
        if (this.sortMode === 'single') {
          this.sortSingle();
        }
      }
    }

    if (simpleChange.groupRowsByOrder) {
      //avoid triggering lazy load prior to lazy initialization at onInit
      if (!this.lazy || this.initialized) {
        if (this.sortMode === 'single') {
          this.sortSingle();
        }
      }
    }

    if (simpleChange.multiSortMeta) {
      this._multiSortMeta = simpleChange.multiSortMeta.currentValue;

      if (this.sortMode === 'multiple' && (this.initialized || !this.lazy && !this.virtualScroll)) {
        this.sortMultiple();
      }
    }

    if (simpleChange.selection) {
      this._selection = simpleChange.selection.currentValue;

      if (!this.preventSelectionSetterPropagation) {
        this.updateSelectionKeys();
        this.tableService.onSelectionChange();
      }

      this.preventSelectionSetterPropagation = false;
    }

    if (simpleChange.selectAll) {
      this._selectAll = simpleChange.selectAll.currentValue;

      if (!this.preventSelectionSetterPropagation) {
        this.updateSelectionKeys();
        this.tableService.onSelectionChange();

        if (this.isStateful()) {
          this.saveState();
        }
      }

      this.preventSelectionSetterPropagation = false;
    }
  }

  get value() {
    return this._value;
  }

  set value(val) {
    this._value = val;
  }

  get columns() {
    return this._columns;
  }

  set columns(cols) {
    this._columns = cols;
  }

  get first() {
    return this._first;
  }

  set first(val) {
    this._first = val;
  }

  get rows() {
    return this._rows;
  }

  set rows(val) {
    this._rows = val;
  }

  get totalRecords() {
    return this._totalRecords;
  }

  set totalRecords(val) {
    this._totalRecords = val;
    this.tableService.onTotalRecordsChange(this._totalRecords);
  }

  get sortField() {
    return this._sortField;
  }

  set sortField(val) {
    this._sortField = val;
  }

  get sortOrder() {
    return this._sortOrder;
  }

  set sortOrder(val) {
    this._sortOrder = val;
  }

  get multiSortMeta() {
    return this._multiSortMeta;
  }

  set multiSortMeta(val) {
    this._multiSortMeta = val;
  }

  get selection() {
    return this._selection;
  }

  set selection(val) {
    this._selection = val;
  }

  get selectAll() {
    return this._selection;
  }

  set selectAll(val) {
    this._selection = val;
  }

  get dataToRender() {
    let data = this.filteredValue || this.value;
    return data ? this.paginator && !this.lazy ? data.slice(this.first, this.first + this.rows) : data : [];
  }

  updateSelectionKeys() {
    if (this.dataKey && this._selection) {
      this.selectionKeys = {};

      if (Array.isArray(this._selection)) {
        for (let data of this._selection) {
          this.selectionKeys[String(primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(data, this.dataKey))] = 1;
        }
      } else {
        this.selectionKeys[String(primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(this._selection, this.dataKey))] = 1;
      }
    }
  }

  onPageChange(event) {
    this.first = event.first;
    this.rows = event.rows;

    if (this.lazy) {
      this.onLazyLoad.emit(this.createLazyLoadMetadata());
    }

    this.onPage.emit({
      first: this.first,
      rows: this.rows
    });
    this.firstChange.emit(this.first);
    this.rowsChange.emit(this.rows);
    this.tableService.onValueChange(this.value);

    if (this.isStateful()) {
      this.saveState();
    }

    this.anchorRowIndex = null;

    if (this.scrollable) {
      this.resetScrollTop();
    }
  }

  sort(event) {
    let originalEvent = event.originalEvent;

    if (this.sortMode === 'single') {
      this._sortOrder = this.sortField === event.field ? this.sortOrder * -1 : this.defaultSortOrder;
      this._sortField = event.field;

      if (this.resetPageOnSort) {
        this._first = 0;
        this.firstChange.emit(this._first);

        if (this.scrollable) {
          this.resetScrollTop();
        }
      }

      this.sortSingle();
    }

    if (this.sortMode === 'multiple') {
      let metaKey = originalEvent.metaKey || originalEvent.ctrlKey;
      let sortMeta = this.getSortMeta(event.field);

      if (sortMeta) {
        if (!metaKey) {
          this._multiSortMeta = [{
            field: event.field,
            order: sortMeta.order * -1
          }];

          if (this.resetPageOnSort) {
            this._first = 0;
            this.firstChange.emit(this._first);

            if (this.scrollable) {
              this.resetScrollTop();
            }
          }
        } else {
          sortMeta.order = sortMeta.order * -1;
        }
      } else {
        if (!metaKey || !this.multiSortMeta) {
          this._multiSortMeta = [];

          if (this.resetPageOnSort) {
            this._first = 0;
            this.firstChange.emit(this._first);
          }
        }

        this._multiSortMeta.push({
          field: event.field,
          order: this.defaultSortOrder
        });
      }

      this.sortMultiple();
    }

    if (this.isStateful()) {
      this.saveState();
    }

    this.anchorRowIndex = null;
  }

  sortSingle() {
    let field = this.sortField || this.groupRowsBy;
    let order = this.sortField ? this.sortOrder : this.groupRowsByOrder;

    if (this.groupRowsBy && this.sortField && this.groupRowsBy !== this.sortField) {
      this._multiSortMeta = [this.getGroupRowsMeta(), {
        field: this.sortField,
        order: this.sortOrder
      }];
      this.sortMultiple();
      return;
    }

    if (field && order) {
      if (this.restoringSort) {
        this.restoringSort = false;
      }

      if (this.lazy) {
        this.onLazyLoad.emit(this.createLazyLoadMetadata());
      } else if (this.value) {
        if (this.customSort) {
          this.sortFunction.emit({
            data: this.value,
            mode: this.sortMode,
            field: field,
            order: order
          });
        } else {
          this.value.sort((data1, data2) => {
            let value1 = primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(data1, field);
            let value2 = primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(data2, field);
            let result = null;
            if (value1 == null && value2 != null) result = -1;else if (value1 != null && value2 == null) result = 1;else if (value1 == null && value2 == null) result = 0;else if (typeof value1 === 'string' && typeof value2 === 'string') result = value1.localeCompare(value2);else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
            return order * result;
          });
          this._value = [...this.value];
        }

        if (this.hasFilter()) {
          this._filter();
        }
      }

      let sortMeta = {
        field: field,
        order: order
      };
      this.onSort.emit(sortMeta);
      this.tableService.onSort(sortMeta);
    }
  }

  sortMultiple() {
    if (this.groupRowsBy) {
      if (!this._multiSortMeta) this._multiSortMeta = [this.getGroupRowsMeta()];else if (this.multiSortMeta[0].field !== this.groupRowsBy) this._multiSortMeta = [this.getGroupRowsMeta(), ...this._multiSortMeta];
    }

    if (this.multiSortMeta) {
      if (this.lazy) {
        this.onLazyLoad.emit(this.createLazyLoadMetadata());
      } else if (this.value) {
        if (this.customSort) {
          this.sortFunction.emit({
            data: this.value,
            mode: this.sortMode,
            multiSortMeta: this.multiSortMeta
          });
        } else {
          this.value.sort((data1, data2) => {
            return this.multisortField(data1, data2, this.multiSortMeta, 0);
          });
          this._value = [...this.value];
        }

        if (this.hasFilter()) {
          this._filter();
        }
      }

      this.onSort.emit({
        multisortmeta: this.multiSortMeta
      });
      this.tableService.onSort(this.multiSortMeta);
    }
  }

  multisortField(data1, data2, multiSortMeta, index) {
    let value1 = primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(data1, multiSortMeta[index].field);
    let value2 = primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(data2, multiSortMeta[index].field);
    let result = null;
    if (value1 == null && value2 != null) result = -1;else if (value1 != null && value2 == null) result = 1;else if (value1 == null && value2 == null) result = 0;else if (typeof value1 == 'string' || value1 instanceof String) {
      if (value1.localeCompare && value1 != value2) {
        return multiSortMeta[index].order * value1.localeCompare(value2);
      }
    } else {
      result = value1 < value2 ? -1 : 1;
    }

    if (value1 == value2) {
      return multiSortMeta.length - 1 > index ? this.multisortField(data1, data2, multiSortMeta, index + 1) : 0;
    }

    return multiSortMeta[index].order * result;
  }

  getSortMeta(field) {
    if (this.multiSortMeta && this.multiSortMeta.length) {
      for (let i = 0; i < this.multiSortMeta.length; i++) {
        if (this.multiSortMeta[i].field === field) {
          return this.multiSortMeta[i];
        }
      }
    }

    return null;
  }

  isSorted(field) {
    if (this.sortMode === 'single') {
      return this.sortField && this.sortField === field;
    } else if (this.sortMode === 'multiple') {
      let sorted = false;

      if (this.multiSortMeta) {
        for (let i = 0; i < this.multiSortMeta.length; i++) {
          if (this.multiSortMeta[i].field == field) {
            sorted = true;
            break;
          }
        }
      }

      return sorted;
    }
  }

  handleRowClick(event) {
    let target = event.originalEvent.target;
    let targetNode = target.nodeName;
    let parentNode = target.parentElement && target.parentElement.nodeName;

    if (targetNode == 'INPUT' || targetNode == 'BUTTON' || targetNode == 'A' || parentNode == 'INPUT' || parentNode == 'BUTTON' || parentNode == 'A' || primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.hasClass(event.originalEvent.target, 'p-clickable')) {
      return;
    }

    if (this.selectionMode) {
      let rowData = event.rowData;
      let rowIndex = event.rowIndex;
      this.preventSelectionSetterPropagation = true;

      if (this.isMultipleSelectionMode() && event.originalEvent.shiftKey && this.anchorRowIndex != null) {
        primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.clearSelection();

        if (this.rangeRowIndex != null) {
          this.clearSelectionRange(event.originalEvent);
        }

        this.rangeRowIndex = rowIndex;
        this.selectRange(event.originalEvent, rowIndex);
      } else {
        let selected = this.isSelected(rowData);

        if (!selected && !this.isRowSelectable(rowData, rowIndex)) {
          return;
        }

        let metaSelection = this.rowTouched ? false : this.metaKeySelection;
        let dataKeyValue = this.dataKey ? String(primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(rowData, this.dataKey)) : null;
        this.anchorRowIndex = rowIndex;
        this.rangeRowIndex = rowIndex;

        if (metaSelection) {
          let metaKey = event.originalEvent.metaKey || event.originalEvent.ctrlKey;

          if (selected && metaKey) {
            if (this.isSingleSelectionMode()) {
              this._selection = null;
              this.selectionKeys = {};
              this.selectionChange.emit(null);
            } else {
              let selectionIndex = this.findIndexInSelection(rowData);
              this._selection = this.selection.filter((val, i) => i != selectionIndex);
              this.selectionChange.emit(this.selection);

              if (dataKeyValue) {
                delete this.selectionKeys[dataKeyValue];
              }
            }

            this.onRowUnselect.emit({
              originalEvent: event.originalEvent,
              data: rowData,
              type: 'row'
            });
          } else {
            if (this.isSingleSelectionMode()) {
              this._selection = rowData;
              this.selectionChange.emit(rowData);

              if (dataKeyValue) {
                this.selectionKeys = {};
                this.selectionKeys[dataKeyValue] = 1;
              }
            } else if (this.isMultipleSelectionMode()) {
              if (metaKey) {
                this._selection = this.selection || [];
              } else {
                this._selection = [];
                this.selectionKeys = {};
              }

              this._selection = [...this.selection, rowData];
              this.selectionChange.emit(this.selection);

              if (dataKeyValue) {
                this.selectionKeys[dataKeyValue] = 1;
              }
            }

            this.onRowSelect.emit({
              originalEvent: event.originalEvent,
              data: rowData,
              type: 'row',
              index: rowIndex
            });
          }
        } else {
          if (this.selectionMode === 'single') {
            if (selected) {
              this._selection = null;
              this.selectionKeys = {};
              this.selectionChange.emit(this.selection);
              this.onRowUnselect.emit({
                originalEvent: event.originalEvent,
                data: rowData,
                type: 'row',
                index: rowIndex
              });
            } else {
              this._selection = rowData;
              this.selectionChange.emit(this.selection);
              this.onRowSelect.emit({
                originalEvent: event.originalEvent,
                data: rowData,
                type: 'row',
                index: rowIndex
              });

              if (dataKeyValue) {
                this.selectionKeys = {};
                this.selectionKeys[dataKeyValue] = 1;
              }
            }
          } else if (this.selectionMode === 'multiple') {
            if (selected) {
              let selectionIndex = this.findIndexInSelection(rowData);
              this._selection = this.selection.filter((val, i) => i != selectionIndex);
              this.selectionChange.emit(this.selection);
              this.onRowUnselect.emit({
                originalEvent: event.originalEvent,
                data: rowData,
                type: 'row',
                index: rowIndex
              });

              if (dataKeyValue) {
                delete this.selectionKeys[dataKeyValue];
              }
            } else {
              this._selection = this.selection ? [...this.selection, rowData] : [rowData];
              this.selectionChange.emit(this.selection);
              this.onRowSelect.emit({
                originalEvent: event.originalEvent,
                data: rowData,
                type: 'row',
                index: rowIndex
              });

              if (dataKeyValue) {
                this.selectionKeys[dataKeyValue] = 1;
              }
            }
          }
        }
      }

      this.tableService.onSelectionChange();

      if (this.isStateful()) {
        this.saveState();
      }
    }

    this.rowTouched = false;
  }

  handleRowTouchEnd(event) {
    this.rowTouched = true;
  }

  handleRowRightClick(event) {
    if (this.contextMenu) {
      const rowData = event.rowData;
      const rowIndex = event.rowIndex;

      if (this.contextMenuSelectionMode === 'separate') {
        this.contextMenuSelection = rowData;
        this.contextMenuSelectionChange.emit(rowData);
        this.onContextMenuSelect.emit({
          originalEvent: event.originalEvent,
          data: rowData,
          index: event.rowIndex
        });
        this.contextMenu.show(event.originalEvent);
        this.tableService.onContextMenu(rowData);
      } else if (this.contextMenuSelectionMode === 'joint') {
        this.preventSelectionSetterPropagation = true;
        let selected = this.isSelected(rowData);
        let dataKeyValue = this.dataKey ? String(primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(rowData, this.dataKey)) : null;

        if (!selected) {
          if (!this.isRowSelectable(rowData, rowIndex)) {
            return;
          }

          if (this.isSingleSelectionMode()) {
            this.selection = rowData;
            this.selectionChange.emit(rowData);

            if (dataKeyValue) {
              this.selectionKeys = {};
              this.selectionKeys[dataKeyValue] = 1;
            }
          } else if (this.isMultipleSelectionMode()) {
            this._selection = this.selection ? [...this.selection, rowData] : [rowData];
            this.selectionChange.emit(this.selection);

            if (dataKeyValue) {
              this.selectionKeys[dataKeyValue] = 1;
            }
          }
        }

        this.tableService.onSelectionChange();
        this.contextMenu.show(event.originalEvent);
        this.onContextMenuSelect.emit({
          originalEvent: event,
          data: rowData,
          index: event.rowIndex
        });
      }
    }
  }

  selectRange(event, rowIndex) {
    let rangeStart, rangeEnd;

    if (this.anchorRowIndex > rowIndex) {
      rangeStart = rowIndex;
      rangeEnd = this.anchorRowIndex;
    } else if (this.anchorRowIndex < rowIndex) {
      rangeStart = this.anchorRowIndex;
      rangeEnd = rowIndex;
    } else {
      rangeStart = rowIndex;
      rangeEnd = rowIndex;
    }

    if (this.lazy && this.paginator) {
      rangeStart -= this.first;
      rangeEnd -= this.first;
    }

    let rangeRowsData = [];

    for (let i = rangeStart; i <= rangeEnd; i++) {
      let rangeRowData = this.filteredValue ? this.filteredValue[i] : this.value[i];

      if (!this.isSelected(rangeRowData)) {
        if (!this.isRowSelectable(rangeRowData, rowIndex)) {
          continue;
        }

        rangeRowsData.push(rangeRowData);
        this._selection = [...this.selection, rangeRowData];
        let dataKeyValue = this.dataKey ? String(primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(rangeRowData, this.dataKey)) : null;

        if (dataKeyValue) {
          this.selectionKeys[dataKeyValue] = 1;
        }
      }
    }

    this.selectionChange.emit(this.selection);
    this.onRowSelect.emit({
      originalEvent: event,
      data: rangeRowsData,
      type: 'row'
    });
  }

  clearSelectionRange(event) {
    let rangeStart, rangeEnd;

    if (this.rangeRowIndex > this.anchorRowIndex) {
      rangeStart = this.anchorRowIndex;
      rangeEnd = this.rangeRowIndex;
    } else if (this.rangeRowIndex < this.anchorRowIndex) {
      rangeStart = this.rangeRowIndex;
      rangeEnd = this.anchorRowIndex;
    } else {
      rangeStart = this.rangeRowIndex;
      rangeEnd = this.rangeRowIndex;
    }

    for (let i = rangeStart; i <= rangeEnd; i++) {
      let rangeRowData = this.value[i];
      let selectionIndex = this.findIndexInSelection(rangeRowData);
      this._selection = this.selection.filter((val, i) => i != selectionIndex);
      let dataKeyValue = this.dataKey ? String(primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(rangeRowData, this.dataKey)) : null;

      if (dataKeyValue) {
        delete this.selectionKeys[dataKeyValue];
      }

      this.onRowUnselect.emit({
        originalEvent: event,
        data: rangeRowData,
        type: 'row'
      });
    }
  }

  isSelected(rowData) {
    if (rowData && this.selection) {
      if (this.dataKey) {
        return this.selectionKeys[primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(rowData, this.dataKey)] !== undefined;
      } else {
        if (this.selection instanceof Array) return this.findIndexInSelection(rowData) > -1;else return this.equals(rowData, this.selection);
      }
    }

    return false;
  }

  findIndexInSelection(rowData) {
    let index = -1;

    if (this.selection && this.selection.length) {
      for (let i = 0; i < this.selection.length; i++) {
        if (this.equals(rowData, this.selection[i])) {
          index = i;
          break;
        }
      }
    }

    return index;
  }

  isRowSelectable(data, index) {
    if (this.rowSelectable && !this.rowSelectable({
      data,
      index
    })) {
      return false;
    }

    return true;
  }

  toggleRowWithRadio(event, rowData) {
    this.preventSelectionSetterPropagation = true;

    if (this.selection != rowData) {
      if (!this.isRowSelectable(rowData, event.rowIndex)) {
        return;
      }

      this._selection = rowData;
      this.selectionChange.emit(this.selection);
      this.onRowSelect.emit({
        originalEvent: event.originalEvent,
        index: event.rowIndex,
        data: rowData,
        type: 'radiobutton'
      });

      if (this.dataKey) {
        this.selectionKeys = {};
        this.selectionKeys[String(primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(rowData, this.dataKey))] = 1;
      }
    } else {
      this._selection = null;
      this.selectionChange.emit(this.selection);
      this.onRowUnselect.emit({
        originalEvent: event.originalEvent,
        index: event.rowIndex,
        data: rowData,
        type: 'radiobutton'
      });
    }

    this.tableService.onSelectionChange();

    if (this.isStateful()) {
      this.saveState();
    }
  }

  toggleRowWithCheckbox(event, rowData) {
    this.selection = this.selection || [];
    let selected = this.isSelected(rowData);
    let dataKeyValue = this.dataKey ? String(primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(rowData, this.dataKey)) : null;
    this.preventSelectionSetterPropagation = true;

    if (selected) {
      let selectionIndex = this.findIndexInSelection(rowData);
      this._selection = this.selection.filter((val, i) => i != selectionIndex);
      this.selectionChange.emit(this.selection);
      this.onRowUnselect.emit({
        originalEvent: event.originalEvent,
        index: event.rowIndex,
        data: rowData,
        type: 'checkbox'
      });

      if (dataKeyValue) {
        delete this.selectionKeys[dataKeyValue];
      }
    } else {
      if (!this.isRowSelectable(rowData, event.rowIndex)) {
        return;
      }

      this._selection = this.selection ? [...this.selection, rowData] : [rowData];
      this.selectionChange.emit(this.selection);
      this.onRowSelect.emit({
        originalEvent: event.originalEvent,
        index: event.rowIndex,
        data: rowData,
        type: 'checkbox'
      });

      if (dataKeyValue) {
        this.selectionKeys[dataKeyValue] = 1;
      }
    }

    this.tableService.onSelectionChange();

    if (this.isStateful()) {
      this.saveState();
    }
  }

  toggleRowsWithCheckbox(event, check) {
    if (this._selectAll !== null) {
      this.selectAllChange.emit({
        originalEvent: event,
        checked: check
      });
    } else {
      const data = this.selectionPageOnly ? this.dataToRender : this.filteredValue || this.value || [];
      let selection = this.selectionPageOnly && this._selection ? this._selection.filter(s => !data.some(d => this.equals(s, d))) : [];

      if (check) {
        selection = this.frozenValue ? [...selection, ...this.frozenValue, ...data] : [...selection, ...data];
        selection = this.rowSelectable ? selection.filter((data, index) => this.rowSelectable({
          data,
          index
        })) : selection;
      }

      this._selection = selection;
      this.preventSelectionSetterPropagation = true;
      this.updateSelectionKeys();
      this.selectionChange.emit(this._selection);
      this.tableService.onSelectionChange();
      this.onHeaderCheckboxToggle.emit({
        originalEvent: event,
        checked: check
      });

      if (this.isStateful()) {
        this.saveState();
      }
    }
  }

  equals(data1, data2) {
    return this.compareSelectionBy === 'equals' ? data1 === data2 : primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.equals(data1, data2, this.dataKey);
  }
  /* Legacy Filtering for custom elements */


  filter(value, field, matchMode) {
    if (this.filterTimeout) {
      clearTimeout(this.filterTimeout);
    }

    if (!this.isFilterBlank(value)) {
      this.filters[field] = {
        value: value,
        matchMode: matchMode
      };
    } else if (this.filters[field]) {
      delete this.filters[field];
    }

    this.filterTimeout = setTimeout(() => {
      this._filter();

      this.filterTimeout = null;
    }, this.filterDelay);
    this.anchorRowIndex = null;
  }

  filterGlobal(value, matchMode) {
    this.filter(value, 'global', matchMode);
  }

  isFilterBlank(filter) {
    if (filter !== null && filter !== undefined) {
      if (typeof filter === 'string' && filter.trim().length == 0 || filter instanceof Array && filter.length == 0) return true;else return false;
    }

    return true;
  }

  _filter() {
    if (!this.restoringFilter) {
      this.first = 0;
      this.firstChange.emit(this.first);
    }

    if (this.lazy) {
      this.onLazyLoad.emit(this.createLazyLoadMetadata());
    } else {
      if (!this.value) {
        return;
      }

      if (!this.hasFilter()) {
        this.filteredValue = null;

        if (this.paginator) {
          this.totalRecords = this.value ? this.value.length : 0;
        }
      } else {
        let globalFilterFieldsArray;

        if (this.filters['global']) {
          if (!this.columns && !this.globalFilterFields) throw new Error('Global filtering requires dynamic columns or globalFilterFields to be defined.');else globalFilterFieldsArray = this.globalFilterFields || this.columns;
        }

        this.filteredValue = [];

        for (let i = 0; i < this.value.length; i++) {
          let localMatch = true;
          let globalMatch = false;
          let localFiltered = false;

          for (let prop in this.filters) {
            if (this.filters.hasOwnProperty(prop) && prop !== 'global') {
              localFiltered = true;
              let filterField = prop;
              let filterMeta = this.filters[filterField];

              if (Array.isArray(filterMeta)) {
                for (let meta of filterMeta) {
                  localMatch = this.executeLocalFilter(filterField, this.value[i], meta);

                  if (meta.operator === primeng_api__WEBPACK_IMPORTED_MODULE_4__.FilterOperator.OR && localMatch || meta.operator === primeng_api__WEBPACK_IMPORTED_MODULE_4__.FilterOperator.AND && !localMatch) {
                    break;
                  }
                }
              } else {
                localMatch = this.executeLocalFilter(filterField, this.value[i], filterMeta);
              }

              if (!localMatch) {
                break;
              }
            }
          }

          if (this.filters['global'] && !globalMatch && globalFilterFieldsArray) {
            for (let j = 0; j < globalFilterFieldsArray.length; j++) {
              let globalFilterField = globalFilterFieldsArray[j].field || globalFilterFieldsArray[j];
              globalMatch = this.filterService.filters[this.filters['global'].matchMode](primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(this.value[i], globalFilterField), this.filters['global'].value, this.filterLocale);

              if (globalMatch) {
                break;
              }
            }
          }

          let matches;

          if (this.filters['global']) {
            matches = localFiltered ? localFiltered && localMatch && globalMatch : globalMatch;
          } else {
            matches = localFiltered && localMatch;
          }

          if (matches) {
            this.filteredValue.push(this.value[i]);
          }
        }

        if (this.filteredValue.length === this.value.length) {
          this.filteredValue = null;
        }

        if (this.paginator) {
          this.totalRecords = this.filteredValue ? this.filteredValue.length : this.value ? this.value.length : 0;
        }
      }
    }

    this.onFilter.emit({
      filters: this.filters,
      filteredValue: this.filteredValue || this.value
    });
    this.tableService.onValueChange(this.value);

    if (this.isStateful() && !this.restoringFilter) {
      this.saveState();
    }

    if (this.restoringFilter) {
      this.restoringFilter = false;
    }

    this.cd.markForCheck();

    if (this.scrollable) {
      this.resetScrollTop();
    }
  }

  executeLocalFilter(field, rowData, filterMeta) {
    let filterValue = filterMeta.value;
    let filterMatchMode = filterMeta.matchMode || primeng_api__WEBPACK_IMPORTED_MODULE_4__.FilterMatchMode.STARTS_WITH;
    let dataFieldValue = primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(rowData, field);
    let filterConstraint = this.filterService.filters[filterMatchMode];
    return filterConstraint(dataFieldValue, filterValue, this.filterLocale);
  }

  hasFilter() {
    let empty = true;

    for (let prop in this.filters) {
      if (this.filters.hasOwnProperty(prop)) {
        empty = false;
        break;
      }
    }

    return !empty;
  }

  createLazyLoadMetadata() {
    return {
      first: this.first,
      rows: this.rows,
      sortField: this.sortField,
      sortOrder: this.sortOrder,
      filters: this.filters,
      globalFilter: this.filters && this.filters['global'] ? this.filters['global'].value : null,
      multiSortMeta: this.multiSortMeta
    };
  }

  clear() {
    this._sortField = null;
    this._sortOrder = this.defaultSortOrder;
    this._multiSortMeta = null;
    this.tableService.onSort(null);

    if (this.filters['global']) {
      this.filters['global'].value = null;
    }

    this.filteredValue = null;
    this.tableService.onResetChange();
    this.first = 0;
    this.firstChange.emit(this.first);

    if (this.lazy) {
      this.onLazyLoad.emit(this.createLazyLoadMetadata());
    } else {
      this.totalRecords = this._value ? this._value.length : 0;
    }
  }

  reset() {
    this.clear();
  }

  getExportHeader(column) {
    return column[this.exportHeader] || column.header || column.field;
  }

  exportCSV(options) {
    let data;
    let csv = '';
    let columns = this.columns;

    if (options && options.selectionOnly) {
      data = this.selection || [];
    } else {
      data = this.filteredValue || this.value;

      if (this.frozenValue) {
        data = data ? [...this.frozenValue, ...data] : this.frozenValue;
      }
    } //headers


    for (let i = 0; i < columns.length; i++) {
      let column = columns[i];

      if (column.exportable !== false && column.field) {
        csv += '"' + this.getExportHeader(column) + '"';

        if (i < columns.length - 1) {
          csv += this.csvSeparator;
        }
      }
    } //body


    data.forEach((record, i) => {
      csv += '\n';

      for (let i = 0; i < columns.length; i++) {
        let column = columns[i];

        if (column.exportable !== false && column.field) {
          let cellData = primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(record, column.field);

          if (cellData != null) {
            if (this.exportFunction) {
              cellData = this.exportFunction({
                data: cellData,
                field: column.field
              });
            } else cellData = String(cellData).replace(/"/g, '""');
          } else cellData = '';

          csv += '"' + cellData + '"';

          if (i < columns.length - 1) {
            csv += this.csvSeparator;
          }
        }
      }
    });
    let blob = new Blob([csv], {
      type: 'text/csv;charset=utf-8;'
    });
    let link = document.createElement("a");
    link.style.display = 'none';
    document.body.appendChild(link);

    if (link.download !== undefined) {
      link.setAttribute('href', URL.createObjectURL(blob));
      link.setAttribute('download', this.exportFilename + '.csv');
      link.click();
    } else {
      csv = 'data:text/csv;charset=utf-8,' + csv;
      window.open(encodeURI(csv));
    }

    document.body.removeChild(link);
  }

  resetScrollTop() {
    if (this.virtualScroll) this.scrollToVirtualIndex(0);else this.scrollTo({
      top: 0
    });
  }

  scrollToVirtualIndex(index) {
    if (this.virtualScrollBody) {
      this.virtualScrollBody.scrollToIndex(index);
    }
  }

  onScrollIndexChange(index) {
    if (this.lazy) {
      if (this.virtualScrollTimeout) {
        clearTimeout(this.virtualScrollTimeout);
      }

      this.virtualScrollTimeout = setTimeout(() => {
        let page = Math.floor(index / this.rows);
        let virtualScrollOffset = page === 0 ? 0 : (page - 1) * this.rows;
        let virtualScrollChunkSize = page === 0 ? this.rows * 2 : this.rows * 3;

        if (page !== this.virtualPage) {
          this.virtualPage = page;

          if (this.lazyLoadOnInit || this.virtualScrollInitialized) {
            this.onLazyLoad.emit({
              first: virtualScrollOffset,
              rows: virtualScrollChunkSize,
              sortField: this.sortField,
              sortOrder: this.sortOrder,
              filters: this.filters,
              globalFilter: this.filters && this.filters['global'] ? this.filters['global'].value : null,
              multiSortMeta: this.multiSortMeta
            });
          } else {
            this.virtualScrollInitialized = true;
          }
        }
      }, this.virtualScrollDelay);
    }
  }

  scrollTo(options) {
    if (this.virtualScrollBody) {
      this.virtualScrollBody.scrollTo(options);
    } else if (this.wrapperViewChild && this.wrapperViewChild.nativeElement) {
      if (this.wrapperViewChild.nativeElement.scrollTo) {
        this.wrapperViewChild.nativeElement.scrollTo(options);
      } else {
        this.wrapperViewChild.nativeElement.scrollLeft = options.left;
        this.wrapperViewChild.nativeElement.scrollTop = options.top;
      }
    }
  }

  updateEditingCell(cell, data, field, index) {
    this.editingCell = cell;
    this.editingCellData = data;
    this.editingCellField = field;
    this.editingCellRowIndex = index;
    this.bindDocumentEditListener();
  }

  isEditingCellValid() {
    return this.editingCell && primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.find(this.editingCell, '.ng-invalid.ng-dirty').length === 0;
  }

  bindDocumentEditListener() {
    if (!this.documentEditListener) {
      this.documentEditListener = event => {
        if (this.editingCell && !this.selfClick && this.isEditingCellValid()) {
          primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.removeClass(this.editingCell, 'p-cell-editing');
          this.editingCell = null;
          this.onEditComplete.emit({
            field: this.editingCellField,
            data: this.editingCellData,
            originalEvent: event,
            index: this.editingCellRowIndex
          });
          this.editingCellField = null;
          this.editingCellData = null;
          this.editingCellRowIndex = null;
          this.unbindDocumentEditListener();
          this.cd.markForCheck();

          if (this.overlaySubscription) {
            this.overlaySubscription.unsubscribe();
          }
        }

        this.selfClick = false;
      };

      document.addEventListener('click', this.documentEditListener);
    }
  }

  unbindDocumentEditListener() {
    if (this.documentEditListener) {
      document.removeEventListener('click', this.documentEditListener);
      this.documentEditListener = null;
    }
  }

  initRowEdit(rowData) {
    let dataKeyValue = String(primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(rowData, this.dataKey));
    this.editingRowKeys[dataKeyValue] = true;
  }

  saveRowEdit(rowData, rowElement) {
    if (primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.find(rowElement, '.ng-invalid.ng-dirty').length === 0) {
      let dataKeyValue = String(primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(rowData, this.dataKey));
      delete this.editingRowKeys[dataKeyValue];
    }
  }

  cancelRowEdit(rowData) {
    let dataKeyValue = String(primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(rowData, this.dataKey));
    delete this.editingRowKeys[dataKeyValue];
  }

  toggleRow(rowData, event) {
    if (!this.dataKey) {
      throw new Error('dataKey must be defined to use row expansion');
    }

    let dataKeyValue = String(primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(rowData, this.dataKey));

    if (this.expandedRowKeys[dataKeyValue] != null) {
      delete this.expandedRowKeys[dataKeyValue];
      this.onRowCollapse.emit({
        originalEvent: event,
        data: rowData
      });
    } else {
      if (this.rowExpandMode === 'single') {
        this.expandedRowKeys = {};
      }

      this.expandedRowKeys[dataKeyValue] = true;
      this.onRowExpand.emit({
        originalEvent: event,
        data: rowData
      });
    }

    if (event) {
      event.preventDefault();
    }

    if (this.isStateful()) {
      this.saveState();
    }
  }

  isRowExpanded(rowData) {
    return this.expandedRowKeys[String(primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(rowData, this.dataKey))] === true;
  }

  isRowEditing(rowData) {
    return this.editingRowKeys[String(primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(rowData, this.dataKey))] === true;
  }

  isSingleSelectionMode() {
    return this.selectionMode === 'single';
  }

  isMultipleSelectionMode() {
    return this.selectionMode === 'multiple';
  }

  onColumnResizeBegin(event) {
    let containerLeft = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getOffset(this.containerViewChild.nativeElement).left;
    this.resizeColumnElement = event.target.parentElement;
    this.columnResizing = true;
    this.lastResizerHelperX = event.pageX - containerLeft + this.containerViewChild.nativeElement.scrollLeft;
    this.onColumnResize(event);
    event.preventDefault();
  }

  onColumnResize(event) {
    let containerLeft = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getOffset(this.containerViewChild.nativeElement).left;
    primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.addClass(this.containerViewChild.nativeElement, 'p-unselectable-text');
    this.resizeHelperViewChild.nativeElement.style.height = this.containerViewChild.nativeElement.offsetHeight + 'px';
    this.resizeHelperViewChild.nativeElement.style.top = 0 + 'px';
    this.resizeHelperViewChild.nativeElement.style.left = event.pageX - containerLeft + this.containerViewChild.nativeElement.scrollLeft + 'px';
    this.resizeHelperViewChild.nativeElement.style.display = 'block';
  }

  onColumnResizeEnd() {
    let delta = this.resizeHelperViewChild.nativeElement.offsetLeft - this.lastResizerHelperX;
    let columnWidth = this.resizeColumnElement.offsetWidth;
    let newColumnWidth = columnWidth + delta;
    let minWidth = this.resizeColumnElement.style.minWidth || 15;

    if (newColumnWidth >= minWidth) {
      if (this.columnResizeMode === 'fit') {
        let nextColumn = this.resizeColumnElement.nextElementSibling;
        let nextColumnWidth = nextColumn.offsetWidth - delta;

        if (newColumnWidth > 15 && nextColumnWidth > 15) {
          this.resizeTableCells(newColumnWidth, nextColumnWidth);
        }
      } else if (this.columnResizeMode === 'expand') {
        let tableWidth = this.tableViewChild.nativeElement.offsetWidth + delta;
        this.tableViewChild.nativeElement.style.width = tableWidth + 'px';
        this.tableViewChild.nativeElement.style.minWidth = tableWidth + 'px';
        this.resizeTableCells(newColumnWidth, null);
      }

      this.onColResize.emit({
        element: this.resizeColumnElement,
        delta: delta
      });

      if (this.isStateful()) {
        this.saveState();
      }
    }

    this.resizeHelperViewChild.nativeElement.style.display = 'none';
    primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.removeClass(this.containerViewChild.nativeElement, 'p-unselectable-text');
  }

  resizeTableCells(newColumnWidth, nextColumnWidth) {
    let colIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.index(this.resizeColumnElement);
    let widths = [];
    const tableHead = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.findSingle(this.containerViewChild.nativeElement, '.p-datatable-thead');
    let headers = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.find(tableHead, 'tr > th');
    headers.forEach(header => widths.push(primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getOuterWidth(header)));
    this.destroyStyleElement();
    this.createStyleElement();
    let innerHTML = '';
    widths.forEach((width, index) => {
      let colWidth = index === colIndex ? newColumnWidth : nextColumnWidth && index === colIndex + 1 ? nextColumnWidth : width;
      let style = this.scrollable ? `flex: 1 1 ${colWidth}px !important` : `width: ${colWidth}px !important`;
      innerHTML += `
                #${this.id} .p-datatable-thead > tr > th:nth-child(${index + 1}),
                #${this.id} .p-datatable-tbody > tr > td:nth-child(${index + 1}),
                #${this.id} .p-datatable-tfoot > tr > td:nth-child(${index + 1}) {
                    ${style}
                }
            `;
    });
    this.styleElement.innerHTML = innerHTML;
  }

  onColumnDragStart(event, columnElement) {
    this.reorderIconWidth = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getHiddenElementOuterWidth(this.reorderIndicatorUpViewChild.nativeElement);
    this.reorderIconHeight = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getHiddenElementOuterHeight(this.reorderIndicatorDownViewChild.nativeElement);
    this.draggedColumn = columnElement;
    event.dataTransfer.setData('text', 'b'); // For firefox
  }

  onColumnDragEnter(event, dropHeader) {
    if (this.reorderableColumns && this.draggedColumn && dropHeader) {
      event.preventDefault();
      let containerOffset = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getOffset(this.containerViewChild.nativeElement);
      let dropHeaderOffset = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getOffset(dropHeader);

      if (this.draggedColumn != dropHeader) {
        let dragIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.indexWithinGroup(this.draggedColumn, 'preorderablecolumn');
        let dropIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.indexWithinGroup(dropHeader, 'preorderablecolumn');
        let targetLeft = dropHeaderOffset.left - containerOffset.left;
        let targetTop = containerOffset.top - dropHeaderOffset.top;
        let columnCenter = dropHeaderOffset.left + dropHeader.offsetWidth / 2;
        this.reorderIndicatorUpViewChild.nativeElement.style.top = dropHeaderOffset.top - containerOffset.top - (this.reorderIconHeight - 1) + 'px';
        this.reorderIndicatorDownViewChild.nativeElement.style.top = dropHeaderOffset.top - containerOffset.top + dropHeader.offsetHeight + 'px';

        if (event.pageX > columnCenter) {
          this.reorderIndicatorUpViewChild.nativeElement.style.left = targetLeft + dropHeader.offsetWidth - Math.ceil(this.reorderIconWidth / 2) + 'px';
          this.reorderIndicatorDownViewChild.nativeElement.style.left = targetLeft + dropHeader.offsetWidth - Math.ceil(this.reorderIconWidth / 2) + 'px';
          this.dropPosition = 1;
        } else {
          this.reorderIndicatorUpViewChild.nativeElement.style.left = targetLeft - Math.ceil(this.reorderIconWidth / 2) + 'px';
          this.reorderIndicatorDownViewChild.nativeElement.style.left = targetLeft - Math.ceil(this.reorderIconWidth / 2) + 'px';
          this.dropPosition = -1;
        }

        if (dropIndex - dragIndex === 1 && this.dropPosition === -1 || dropIndex - dragIndex === -1 && this.dropPosition === 1) {
          this.reorderIndicatorUpViewChild.nativeElement.style.display = 'none';
          this.reorderIndicatorDownViewChild.nativeElement.style.display = 'none';
        } else {
          this.reorderIndicatorUpViewChild.nativeElement.style.display = 'block';
          this.reorderIndicatorDownViewChild.nativeElement.style.display = 'block';
        }
      } else {
        event.dataTransfer.dropEffect = 'none';
      }
    }
  }

  onColumnDragLeave(event) {
    if (this.reorderableColumns && this.draggedColumn) {
      event.preventDefault();
      this.reorderIndicatorUpViewChild.nativeElement.style.display = 'none';
      this.reorderIndicatorDownViewChild.nativeElement.style.display = 'none';
    }
  }

  onColumnDrop(event, dropColumn) {
    event.preventDefault();

    if (this.draggedColumn) {
      let dragIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.indexWithinGroup(this.draggedColumn, 'preorderablecolumn');
      let dropIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.indexWithinGroup(dropColumn, 'preorderablecolumn');
      let allowDrop = dragIndex != dropIndex;

      if (allowDrop && (dropIndex - dragIndex == 1 && this.dropPosition === -1 || dragIndex - dropIndex == 1 && this.dropPosition === 1)) {
        allowDrop = false;
      }

      if (allowDrop && dropIndex < dragIndex && this.dropPosition === 1) {
        dropIndex = dropIndex + 1;
      }

      if (allowDrop && dropIndex > dragIndex && this.dropPosition === -1) {
        dropIndex = dropIndex - 1;
      }

      if (allowDrop) {
        primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.reorderArray(this.columns, dragIndex, dropIndex);
        this.onColReorder.emit({
          dragIndex: dragIndex,
          dropIndex: dropIndex,
          columns: this.columns
        });

        if (this.isStateful()) {
          this.zone.runOutsideAngular(() => {
            setTimeout(() => {
              this.saveState();
            });
          });
        }
      }

      this.reorderIndicatorUpViewChild.nativeElement.style.display = 'none';
      this.reorderIndicatorDownViewChild.nativeElement.style.display = 'none';
      this.draggedColumn.draggable = false;
      this.draggedColumn = null;
      this.dropPosition = null;
    }
  }

  onRowDragStart(event, index) {
    this.rowDragging = true;
    this.draggedRowIndex = index;
    event.dataTransfer.setData('text', 'b'); // For firefox
  }

  onRowDragOver(event, index, rowElement) {
    if (this.rowDragging && this.draggedRowIndex !== index) {
      let rowY = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getOffset(rowElement).top + primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getWindowScrollTop();
      let pageY = event.pageY;
      let rowMidY = rowY + primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getOuterHeight(rowElement) / 2;
      let prevRowElement = rowElement.previousElementSibling;

      if (pageY < rowMidY) {
        primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.removeClass(rowElement, 'p-datatable-dragpoint-bottom');
        this.droppedRowIndex = index;
        if (prevRowElement) primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.addClass(prevRowElement, 'p-datatable-dragpoint-bottom');else primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.addClass(rowElement, 'p-datatable-dragpoint-top');
      } else {
        if (prevRowElement) primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.removeClass(prevRowElement, 'p-datatable-dragpoint-bottom');else primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.addClass(rowElement, 'p-datatable-dragpoint-top');
        this.droppedRowIndex = index + 1;
        primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.addClass(rowElement, 'p-datatable-dragpoint-bottom');
      }
    }
  }

  onRowDragLeave(event, rowElement) {
    let prevRowElement = rowElement.previousElementSibling;

    if (prevRowElement) {
      primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.removeClass(prevRowElement, 'p-datatable-dragpoint-bottom');
    }

    primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.removeClass(rowElement, 'p-datatable-dragpoint-bottom');
    primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.removeClass(rowElement, 'p-datatable-dragpoint-top');
  }

  onRowDragEnd(event) {
    this.rowDragging = false;
    this.draggedRowIndex = null;
    this.droppedRowIndex = null;
  }

  onRowDrop(event, rowElement) {
    if (this.droppedRowIndex != null) {
      let dropIndex = this.draggedRowIndex > this.droppedRowIndex ? this.droppedRowIndex : this.droppedRowIndex === 0 ? 0 : this.droppedRowIndex - 1;
      primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.reorderArray(this.value, this.draggedRowIndex, dropIndex);
      this.onRowReorder.emit({
        dragIndex: this.draggedRowIndex,
        dropIndex: dropIndex
      });
    } //cleanup


    this.onRowDragLeave(event, rowElement);
    this.onRowDragEnd(event);
  }

  isEmpty() {
    let data = this.filteredValue || this.value;
    return data == null || data.length == 0;
  }

  getBlockableElement() {
    return this.el.nativeElement.children[0];
  }

  getStorage() {
    switch (this.stateStorage) {
      case 'local':
        return window.localStorage;

      case 'session':
        return window.sessionStorage;

      default:
        throw new Error(this.stateStorage + ' is not a valid value for the state storage, supported values are "local" and "session".');
    }
  }

  isStateful() {
    return this.stateKey != null;
  }

  saveState() {
    const storage = this.getStorage();
    let state = {};

    if (this.paginator) {
      state.first = this.first;
      state.rows = this.rows;
    }

    if (this.sortField) {
      state.sortField = this.sortField;
      state.sortOrder = this.sortOrder;
    }

    if (this.multiSortMeta) {
      state.multiSortMeta = this.multiSortMeta;
    }

    if (this.hasFilter()) {
      state.filters = this.filters;
    }

    if (this.resizableColumns) {
      this.saveColumnWidths(state);
    }

    if (this.reorderableColumns) {
      this.saveColumnOrder(state);
    }

    if (this.selection) {
      state.selection = this.selection;
    }

    if (Object.keys(this.expandedRowKeys).length) {
      state.expandedRowKeys = this.expandedRowKeys;
    }

    storage.setItem(this.stateKey, JSON.stringify(state));
    this.onStateSave.emit(state);
  }

  clearState() {
    const storage = this.getStorage();

    if (this.stateKey) {
      storage.removeItem(this.stateKey);
    }
  }

  restoreState() {
    const storage = this.getStorage();
    const stateString = storage.getItem(this.stateKey);
    const dateFormat = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/;

    const reviver = function (key, value) {
      if (typeof value === "string" && dateFormat.test(value)) {
        return new Date(value);
      }

      return value;
    };

    if (stateString) {
      let state = JSON.parse(stateString, reviver);

      if (this.paginator) {
        if (this.first !== undefined) {
          this.first = state.first;
          this.firstChange.emit(this.first);
        }

        if (this.rows !== undefined) {
          this.rows = state.rows;
          this.rowsChange.emit(this.rows);
        }
      }

      if (state.sortField) {
        this.restoringSort = true;
        this._sortField = state.sortField;
        this._sortOrder = state.sortOrder;
      }

      if (state.multiSortMeta) {
        this.restoringSort = true;
        this._multiSortMeta = state.multiSortMeta;
      }

      if (state.filters) {
        this.restoringFilter = true;
        this.filters = state.filters;
      }

      if (this.resizableColumns) {
        this.columnWidthsState = state.columnWidths;
        this.tableWidthState = state.tableWidth;
      }

      if (state.expandedRowKeys) {
        this.expandedRowKeys = state.expandedRowKeys;
      }

      if (state.selection) {
        Promise.resolve(null).then(() => this.selectionChange.emit(state.selection));
      }

      this.stateRestored = true;
      this.onStateRestore.emit(state);
    }
  }

  saveColumnWidths(state) {
    let widths = [];
    let headers = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.find(this.containerViewChild.nativeElement, '.p-datatable-thead > tr > th');
    headers.forEach(header => widths.push(primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getOuterWidth(header)));
    state.columnWidths = widths.join(',');

    if (this.columnResizeMode === 'expand') {
      state.tableWidth = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getOuterWidth(this.tableViewChild.nativeElement) + 'px';
    }
  }

  restoreColumnWidths() {
    if (this.columnWidthsState) {
      let widths = this.columnWidthsState.split(',');

      if (this.columnResizeMode === 'expand' && this.tableWidthState) {
        this.tableViewChild.nativeElement.style.width = this.tableWidthState;
        this.tableViewChild.nativeElement.style.minWidth = this.tableWidthState;
        this.containerViewChild.nativeElement.style.width = this.tableWidthState;
      }

      if (primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.isNotEmpty(widths)) {
        this.createStyleElement();
        let innerHTML = '';
        widths.forEach((width, index) => {
          let style = this.scrollable ? `flex: 1 1 ${width}px !important` : `width: ${width}px !important`;
          innerHTML += `
                        #${this.id} .p-datatable-thead > tr > th:nth-child(${index + 1}),
                        #${this.id} .p-datatable-tbody > tr > td:nth-child(${index + 1}),
                        #${this.id} .p-datatable-tfoot > tr > td:nth-child(${index + 1}) {
                            ${style}
                        }
                    `;
        });
        this.styleElement.innerHTML = innerHTML;
      }
    }
  }

  saveColumnOrder(state) {
    if (this.columns) {
      let columnOrder = [];
      this.columns.map(column => {
        columnOrder.push(column.field || column.key);
      });
      state.columnOrder = columnOrder;
    }
  }

  restoreColumnOrder() {
    const storage = this.getStorage();
    const stateString = storage.getItem(this.stateKey);

    if (stateString) {
      let state = JSON.parse(stateString);
      let columnOrder = state.columnOrder;

      if (columnOrder) {
        let reorderedColumns = [];
        columnOrder.map(key => {
          let col = this.findColumnByKey(key);

          if (col) {
            reorderedColumns.push(col);
          }
        });
        this.columnOrderStateRestored = true;
        this.columns = reorderedColumns;
      }
    }
  }

  findColumnByKey(key) {
    if (this.columns) {
      for (let col of this.columns) {
        if (col.key === key || col.field === key) return col;else continue;
      }
    } else {
      return null;
    }
  }

  createStyleElement() {
    this.styleElement = document.createElement('style');
    this.styleElement.type = 'text/css';
    document.head.appendChild(this.styleElement);
  }

  getGroupRowsMeta() {
    return {
      field: this.groupRowsBy,
      order: this.groupRowsByOrder
    };
  }

  createResponsiveStyle() {
    if (!this.responsiveStyleElement) {
      this.responsiveStyleElement = document.createElement('style');
      this.responsiveStyleElement.type = 'text/css';
      document.head.appendChild(this.responsiveStyleElement);
      let innerHTML = `
@media screen and (max-width: ${this.breakpoint}) {
    #${this.id} .p-datatable-thead > tr > th,
    #${this.id} .p-datatable-tfoot > tr > td {
        display: none !important;
    }

    #${this.id} .p-datatable-tbody > tr > td {
        display: flex;
        width: 100% !important;
        align-items: center;
        justify-content: space-between;
    }

    #${this.id} .p-datatable-tbody > tr > td:not(:last-child) {
        border: 0 none;
    }

    #${this.id}.p-datatable-gridlines .p-datatable-tbody > tr > td:last-child {
        border-top: 0;
        border-right: 0;
        border-left: 0;
    }

    #${this.id} .p-datatable-tbody > tr > td > .p-column-title {
        display: block;
    }
}
`;
      this.responsiveStyleElement.innerHTML = innerHTML;
    }
  }

  destroyResponsiveStyle() {
    if (this.responsiveStyleElement) {
      document.head.removeChild(this.responsiveStyleElement);
      this.responsiveStyleElement = null;
    }
  }

  destroyStyleElement() {
    if (this.styleElement) {
      document.head.removeChild(this.styleElement);
      this.styleElement = null;
    }
  }

  ngOnDestroy() {
    this.unbindDocumentEditListener();
    this.editingCell = null;
    this.initialized = null;
    this.virtualScrollInitialized = null;

    if (this.virtualScrollSubscription) {
      this.virtualScrollSubscription.unsubscribe();
    }

    this.destroyStyleElement();
    this.destroyResponsiveStyle();
  }

}

Table.ɵfac = function Table_Factory(t) {
  return new (t || Table)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TableService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__.FilterService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__.OverlayService));
};

Table.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: Table,
  selectors: [["p-table"]],
  contentQueries: function Table_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate, 4);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
    }
  },
  viewQuery: function Table_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c5, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c6, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__.CdkVirtualScrollViewport, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.containerViewChild = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.resizeHelperViewChild = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.reorderIndicatorUpViewChild = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.reorderIndicatorDownViewChild = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.wrapperViewChild = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tableViewChild = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tableHeaderViewChild = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.virtualScrollBody = _t.first);
    }
  },
  hostAttrs: [1, "p-element"],
  inputs: {
    frozenColumns: "frozenColumns",
    frozenValue: "frozenValue",
    style: "style",
    styleClass: "styleClass",
    tableStyle: "tableStyle",
    tableStyleClass: "tableStyleClass",
    paginator: "paginator",
    pageLinks: "pageLinks",
    rowsPerPageOptions: "rowsPerPageOptions",
    alwaysShowPaginator: "alwaysShowPaginator",
    paginatorPosition: "paginatorPosition",
    paginatorDropdownAppendTo: "paginatorDropdownAppendTo",
    paginatorDropdownScrollHeight: "paginatorDropdownScrollHeight",
    currentPageReportTemplate: "currentPageReportTemplate",
    showCurrentPageReport: "showCurrentPageReport",
    showJumpToPageDropdown: "showJumpToPageDropdown",
    showJumpToPageInput: "showJumpToPageInput",
    showFirstLastIcon: "showFirstLastIcon",
    showPageLinks: "showPageLinks",
    defaultSortOrder: "defaultSortOrder",
    sortMode: "sortMode",
    resetPageOnSort: "resetPageOnSort",
    selectionMode: "selectionMode",
    selectionPageOnly: "selectionPageOnly",
    contextMenuSelection: "contextMenuSelection",
    contextMenuSelectionMode: "contextMenuSelectionMode",
    dataKey: "dataKey",
    metaKeySelection: "metaKeySelection",
    rowSelectable: "rowSelectable",
    rowTrackBy: "rowTrackBy",
    lazy: "lazy",
    lazyLoadOnInit: "lazyLoadOnInit",
    compareSelectionBy: "compareSelectionBy",
    csvSeparator: "csvSeparator",
    exportFilename: "exportFilename",
    filters: "filters",
    globalFilterFields: "globalFilterFields",
    filterDelay: "filterDelay",
    filterLocale: "filterLocale",
    expandedRowKeys: "expandedRowKeys",
    editingRowKeys: "editingRowKeys",
    rowExpandMode: "rowExpandMode",
    scrollable: "scrollable",
    scrollDirection: "scrollDirection",
    rowGroupMode: "rowGroupMode",
    scrollHeight: "scrollHeight",
    virtualScroll: "virtualScroll",
    virtualScrollDelay: "virtualScrollDelay",
    virtualRowHeight: "virtualRowHeight",
    frozenWidth: "frozenWidth",
    responsive: "responsive",
    contextMenu: "contextMenu",
    resizableColumns: "resizableColumns",
    columnResizeMode: "columnResizeMode",
    reorderableColumns: "reorderableColumns",
    loading: "loading",
    loadingIcon: "loadingIcon",
    showLoader: "showLoader",
    rowHover: "rowHover",
    customSort: "customSort",
    showInitialSortBadge: "showInitialSortBadge",
    autoLayout: "autoLayout",
    exportFunction: "exportFunction",
    exportHeader: "exportHeader",
    stateKey: "stateKey",
    stateStorage: "stateStorage",
    editMode: "editMode",
    groupRowsBy: "groupRowsBy",
    groupRowsByOrder: "groupRowsByOrder",
    minBufferPx: "minBufferPx",
    maxBufferPx: "maxBufferPx",
    responsiveLayout: "responsiveLayout",
    breakpoint: "breakpoint",
    value: "value",
    columns: "columns",
    first: "first",
    rows: "rows",
    totalRecords: "totalRecords",
    sortField: "sortField",
    sortOrder: "sortOrder",
    multiSortMeta: "multiSortMeta",
    selection: "selection",
    selectAll: "selectAll"
  },
  outputs: {
    selectAllChange: "selectAllChange",
    selectionChange: "selectionChange",
    contextMenuSelectionChange: "contextMenuSelectionChange",
    onRowSelect: "onRowSelect",
    onRowUnselect: "onRowUnselect",
    onPage: "onPage",
    onSort: "onSort",
    onFilter: "onFilter",
    onLazyLoad: "onLazyLoad",
    onRowExpand: "onRowExpand",
    onRowCollapse: "onRowCollapse",
    onContextMenuSelect: "onContextMenuSelect",
    onColResize: "onColResize",
    onColReorder: "onColReorder",
    onRowReorder: "onRowReorder",
    onEditInit: "onEditInit",
    onEditComplete: "onEditComplete",
    onEditCancel: "onEditCancel",
    onHeaderCheckboxToggle: "onHeaderCheckboxToggle",
    sortFunction: "sortFunction",
    firstChange: "firstChange",
    rowsChange: "rowsChange",
    onStateSave: "onStateSave",
    onStateRestore: "onStateRestore"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([TableService]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  decls: 14,
  vars: 33,
  consts: [[3, "ngStyle", "ngClass"], ["container", ""], ["class", "p-datatable-loading-overlay p-component-overlay", 4, "ngIf"], ["class", "p-datatable-header", 4, "ngIf"], ["styleClass", "p-paginator-top", 3, "rows", "first", "totalRecords", "pageLinkSize", "alwaysShow", "rowsPerPageOptions", "templateLeft", "templateRight", "dropdownAppendTo", "dropdownScrollHeight", "currentPageReportTemplate", "showFirstLastIcon", "dropdownItemTemplate", "showCurrentPageReport", "showJumpToPageDropdown", "showJumpToPageInput", "showPageLinks", "onPageChange", 4, "ngIf"], [1, "p-datatable-wrapper", 3, "ngStyle"], ["wrapper", ""], ["role", "table", "class", "p-datatable-table", 3, "ngClass", "ngStyle", 4, "ngIf"], ["tabindex", "0", "class", "p-datatable-virtual-scrollable-body", 3, "itemSize", "height", "minBufferPx", "maxBufferPx", "scrolledIndexChange", 4, "ngIf"], ["styleClass", "p-paginator-bottom", 3, "rows", "first", "totalRecords", "pageLinkSize", "alwaysShow", "rowsPerPageOptions", "templateLeft", "templateRight", "dropdownAppendTo", "dropdownScrollHeight", "currentPageReportTemplate", "showFirstLastIcon", "dropdownItemTemplate", "showCurrentPageReport", "showJumpToPageDropdown", "showJumpToPageInput", "showPageLinks", "onPageChange", 4, "ngIf"], ["class", "p-datatable-footer", 4, "ngIf"], ["class", "p-column-resizer-helper", "style", "display:none", 4, "ngIf"], ["class", "pi pi-arrow-down p-datatable-reorder-indicator-up", "style", "display:none", 4, "ngIf"], ["class", "pi pi-arrow-up p-datatable-reorder-indicator-down", "style", "display:none", 4, "ngIf"], [1, "p-datatable-loading-overlay", "p-component-overlay"], [1, "p-datatable-header"], [4, "ngTemplateOutlet"], ["styleClass", "p-paginator-top", 3, "rows", "first", "totalRecords", "pageLinkSize", "alwaysShow", "rowsPerPageOptions", "templateLeft", "templateRight", "dropdownAppendTo", "dropdownScrollHeight", "currentPageReportTemplate", "showFirstLastIcon", "dropdownItemTemplate", "showCurrentPageReport", "showJumpToPageDropdown", "showJumpToPageInput", "showPageLinks", "onPageChange"], ["role", "table", 1, "p-datatable-table", 3, "ngClass", "ngStyle"], ["table", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-datatable-thead"], ["class", "p-datatable-tbody p-datatable-frozen-tbody", 3, "value", "frozenRows", "pTableBody", "pTableBodyTemplate", "frozen", 4, "ngIf"], [1, "p-datatable-tbody", 3, "value", "pTableBody", "pTableBodyTemplate"], ["class", "p-datatable-tfoot", 4, "ngIf"], [1, "p-datatable-tbody", "p-datatable-frozen-tbody", 3, "value", "frozenRows", "pTableBody", "pTableBodyTemplate", "frozen"], [1, "p-datatable-tfoot"], ["tabindex", "0", 1, "p-datatable-virtual-scrollable-body", 3, "itemSize", "minBufferPx", "maxBufferPx", "scrolledIndexChange"], ["tableHeader", ""], ["styleClass", "p-paginator-bottom", 3, "rows", "first", "totalRecords", "pageLinkSize", "alwaysShow", "rowsPerPageOptions", "templateLeft", "templateRight", "dropdownAppendTo", "dropdownScrollHeight", "currentPageReportTemplate", "showFirstLastIcon", "dropdownItemTemplate", "showCurrentPageReport", "showJumpToPageDropdown", "showJumpToPageInput", "showPageLinks", "onPageChange"], [1, "p-datatable-footer"], [1, "p-column-resizer-helper", 2, "display", "none"], ["resizeHelper", ""], [1, "pi", "pi-arrow-down", "p-datatable-reorder-indicator-up", 2, "display", "none"], ["reorderIndicatorUp", ""], [1, "pi", "pi-arrow-up", "p-datatable-reorder-indicator-down", 2, "display", "none"], ["reorderIndicatorDown", ""]],
  template: function Table_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Table_div_2_Template, 2, 2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, Table_div_3_Template, 2, 1, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, Table_p_paginator_4_Template, 1, 17, "p-paginator", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, Table_table_7_Template, 8, 16, "table", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, Table_cdk_virtual_scroll_viewport_8_Template, 10, 21, "cdk-virtual-scroll-viewport", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, Table_p_paginator_9_Template, 1, 17, "p-paginator", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, Table_div_10_Template, 2, 1, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, Table_div_11_Template, 2, 0, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, Table_span_12_Template, 2, 0, "span", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, Table_span_13_Template, 2, 0, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.style)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunctionV"](16, _c8, [ctx.rowHover || ctx.selectionMode, ctx.autoLayout, ctx.resizableColumns, ctx.resizableColumns && ctx.columnResizeMode === "fit", ctx.scrollable, ctx.scrollable && ctx.scrollDirection === "vertical", ctx.scrollable && ctx.scrollDirection === "horizontal", ctx.scrollable && ctx.scrollDirection === "both", ctx.scrollable && ctx.scrollHeight === "flex", ctx.responsiveLayout === "stack", ctx.responsiveLayout === "scroll", ctx.responsive, ctx.headerGroupedTemplate != null, ctx.footerGroupedTemplate != null]));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.id);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading && ctx.showLoader);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.captionTemplate);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.paginator && (ctx.paginatorPosition === "top" || ctx.paginatorPosition == "both"));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](31, _c9, ctx.scrollHeight));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.virtualScroll);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.virtualScroll);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.paginator && (ctx.paginatorPosition === "bottom" || ctx.paginatorPosition == "both"));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.summaryTemplate);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.resizableColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reorderableColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reorderableColumns);
    }
  },
  directives: function () {
    return [primeng_paginator__WEBPACK_IMPORTED_MODULE_6__.Paginator, TableBody, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__.CdkVirtualScrollViewport, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgTemplateOutlet, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__.CdkFixedSizeVirtualScroll];
  },
  styles: [".p-datatable{position:relative}.p-datatable table{border-collapse:collapse;min-width:100%;table-layout:fixed}.p-datatable .p-sortable-column{cursor:pointer;-webkit-user-select:none;user-select:none}.p-datatable .p-sortable-column .p-column-title,.p-datatable .p-sortable-column .p-sortable-column-icon,.p-datatable .p-sortable-column .p-sortable-column-badge{vertical-align:middle}.p-datatable .p-sortable-column .p-sortable-column-badge{display:inline-flex;align-items:center;justify-content:center}.p-datatable-auto-layout>.p-datatable-wrapper{overflow-x:auto}.p-datatable-auto-layout>.p-datatable-wrapper>table{table-layout:auto}.p-datatable-responsive-scroll>.p-datatable-wrapper{overflow-x:auto}.p-datatable-responsive-scroll>.p-datatable-wrapper>table,.p-datatable-auto-layout>.p-datatable-wrapper>table{table-layout:auto}.p-datatable-hoverable-rows .p-selectable-row{cursor:pointer}.p-datatable-scrollable .p-datatable-wrapper{position:relative;overflow:auto}.p-datatable-scrollable .p-datatable-thead,.p-datatable-scrollable .p-datatable-tbody,.p-datatable-scrollable .p-datatable-tfoot{display:block}.p-datatable-scrollable .p-datatable-thead>tr,.p-datatable-scrollable .p-datatable-tbody>tr,.p-datatable-scrollable .p-datatable-tfoot>tr{display:flex;flex-wrap:nowrap;width:100%}.p-datatable-scrollable .p-datatable-thead>tr>th,.p-datatable-scrollable .p-datatable-tbody>tr>td,.p-datatable-scrollable .p-datatable-tfoot>tr>td{display:flex;flex:1 1 0;align-items:center}.p-datatable-scrollable>.p-datatable-wrapper>.p-datatable-table>.p-datatable-thead,.p-datatable-scrollable>.p-datatable-wrapper>.p-datatable-virtual-scrollable-body>.cdk-virtual-scroll-content-wrapper>.p-datatable-table>.p-datatable-thead{position:sticky;top:0;z-index:1}.p-datatable-scrollable>.p-datatable-wrapper>.p-datatable-table>.p-datatable-frozen-tbody{position:sticky;z-index:1}.p-datatable-scrollable>.p-datatable-wrapper>.p-datatable-table>.p-datatable-tfoot{position:sticky;bottom:0;z-index:1}.p-datatable-scrollable .p-frozen-column{position:sticky;background:inherit}.p-datatable-scrollable th.p-frozen-column{z-index:1}.p-datatable-scrollable-both .p-datatable-thead>tr>th,.p-datatable-scrollable-both .p-datatable-tbody>tr>td,.p-datatable-scrollable-both .p-datatable-tfoot>tr>td,.p-datatable-scrollable-horizontal .p-datatable-thead>tr>th .p-datatable-scrollable-horizontal .p-datatable-tbody>tr>td,.p-datatable-scrollable-horizontal .p-datatable-tfoot>tr>td{flex:0 0 auto}.p-datatable-flex-scrollable{display:flex;flex-direction:column;height:100%}.p-datatable-flex-scrollable .p-datatable-wrapper{display:flex;flex-direction:column;flex:1;height:100%}.p-datatable-scrollable .p-rowgroup-header{position:sticky;z-index:1}.p-datatable-scrollable.p-datatable-grouped-header .p-datatable-thead,.p-datatable-scrollable.p-datatable-grouped-footer .p-datatable-tfoot{display:table;border-collapse:collapse;width:100%;table-layout:fixed}.p-datatable-scrollable.p-datatable-grouped-header .p-datatable-thead>tr,.p-datatable-scrollable.p-datatable-grouped-footer .p-datatable-tfoot>tr{display:table-row}.p-datatable-scrollable.p-datatable-grouped-header .p-datatable-thead>tr>th,.p-datatable-scrollable.p-datatable-grouped-footer .p-datatable-tfoot>tr>td{display:table-cell}.p-datatable-flex-scrollable{display:flex;flex-direction:column;flex:1;height:100%}.p-datatable-flex-scrollable .p-datatable-virtual-scrollable-body{flex:1}.p-datatable-resizable>.p-datatable-wrapper{overflow-x:auto}.p-datatable-resizable .p-datatable-thead>tr>th,.p-datatable-resizable .p-datatable-tfoot>tr>td,.p-datatable-resizable .p-datatable-tbody>tr>td{overflow:hidden;white-space:nowrap}.p-datatable-resizable .p-resizable-column:not(.p-frozen-column){background-clip:padding-box;position:relative}.p-datatable-resizable-fit .p-resizable-column:last-child .p-column-resizer{display:none}.p-datatable .p-column-resizer{display:block;position:absolute!important;top:0;right:0;margin:0;width:.5rem;height:100%;padding:0;cursor:col-resize;border:1px solid transparent}.p-datatable .p-column-resizer-helper{width:1px;position:absolute;z-index:10;display:none}.p-datatable .p-row-editor-init,.p-datatable .p-row-editor-save,.p-datatable .p-row-editor-cancel,.p-datatable .p-row-toggler{display:inline-flex;align-items:center;justify-content:center;overflow:hidden;position:relative}.p-datatable-reorder-indicator-up,.p-datatable-reorder-indicator-down{position:absolute;display:none}.p-datatable-reorderablerow-handle,[pReorderableColumn]{cursor:move}.p-datatable .p-datatable-loading-overlay{position:absolute;display:flex;align-items:center;justify-content:center;z-index:2}.p-column-filter-row{display:flex;align-items:center;width:100%}.p-column-filter-menu{display:inline-flex}.p-column-filter-row p-columnfilterformelement{flex:1 1 auto;width:1%}.p-column-filter-menu-button,.p-column-filter-clear-button{display:inline-flex;justify-content:center;align-items:center;cursor:pointer;text-decoration:none;overflow:hidden;position:relative}.p-column-filter-overlay{position:absolute;top:0;left:0}.p-column-filter-row-items{margin:0;padding:0;list-style:none}.p-column-filter-row-item{cursor:pointer}.p-column-filter-add-button,.p-column-filter-remove-button{justify-content:center}.p-column-filter-add-button .p-button-label,.p-column-filter-remove-button .p-button-label{flex-grow:0}.p-column-filter-buttonbar{display:flex;align-items:center;justify-content:space-between}.p-column-filter-buttonbar .p-button{width:auto}.p-datatable .p-datatable-tbody>tr>td>.p-column-title{display:none}cdk-virtual-scroll-viewport{outline:0 none}\n"],
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Table, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'p-table',
      template: `
        <div #container [ngStyle]="style" [class]="styleClass"
            [ngClass]="{'p-datatable p-component': true,
                'p-datatable-hoverable-rows': (rowHover||selectionMode),
                'p-datatable-auto-layout': autoLayout,
                'p-datatable-resizable': resizableColumns,
                'p-datatable-resizable-fit': (resizableColumns && columnResizeMode === 'fit'),
                'p-datatable-scrollable': scrollable,
                'p-datatable-scrollable-vertical': scrollable && scrollDirection === 'vertical',
                'p-datatable-scrollable-horizontal': scrollable && scrollDirection === 'horizontal',
                'p-datatable-scrollable-both': scrollable && scrollDirection === 'both',
                'p-datatable-flex-scrollable': (scrollable && scrollHeight === 'flex'),
                'p-datatable-responsive-stack': responsiveLayout === 'stack',
                'p-datatable-responsive-scroll': responsiveLayout === 'scroll',
                'p-datatable-responsive': responsive,
                'p-datatable-grouped-header': headerGroupedTemplate != null,
                'p-datatable-grouped-footer': footerGroupedTemplate != null}" [attr.id]="id">
            <div class="p-datatable-loading-overlay p-component-overlay" *ngIf="loading && showLoader">
                <i [class]="'p-datatable-loading-icon pi-spin ' + loadingIcon"></i>
            </div>
            <div *ngIf="captionTemplate" class="p-datatable-header">
                <ng-container *ngTemplateOutlet="captionTemplate"></ng-container>
            </div>
            <p-paginator [rows]="rows" [first]="first" [totalRecords]="totalRecords" [pageLinkSize]="pageLinks" styleClass="p-paginator-top" [alwaysShow]="alwaysShowPaginator"
                (onPageChange)="onPageChange($event)" [rowsPerPageOptions]="rowsPerPageOptions" *ngIf="paginator && (paginatorPosition === 'top' || paginatorPosition =='both')"
                [templateLeft]="paginatorLeftTemplate" [templateRight]="paginatorRightTemplate" [dropdownAppendTo]="paginatorDropdownAppendTo" [dropdownScrollHeight]="paginatorDropdownScrollHeight"
                [currentPageReportTemplate]="currentPageReportTemplate" [showFirstLastIcon]="showFirstLastIcon" [dropdownItemTemplate]="paginatorDropdownItemTemplate" [showCurrentPageReport]="showCurrentPageReport" [showJumpToPageDropdown]="showJumpToPageDropdown" [showJumpToPageInput]="showJumpToPageInput" [showPageLinks]="showPageLinks"></p-paginator>

            <div #wrapper class="p-datatable-wrapper" [ngStyle]="{height: scrollHeight}">
                <table #table *ngIf="!virtualScroll" role="table" class="p-datatable-table" [ngClass]="tableStyleClass" [ngStyle]="tableStyle" [attr.id]="id+'-table'">
                    <ng-container *ngTemplateOutlet="colGroupTemplate; context {$implicit: columns}"></ng-container>
                    <thead class="p-datatable-thead">
                        <ng-container *ngTemplateOutlet="headerGroupedTemplate||headerTemplate; context: {$implicit: columns}"></ng-container>
                    </thead>
                    <tbody class="p-datatable-tbody p-datatable-frozen-tbody" *ngIf="frozenValue||frozenBodyTemplate" [value]="frozenValue" [frozenRows]="true" [pTableBody]="columns" [pTableBodyTemplate]="frozenBodyTemplate" [frozen]="true"></tbody>
                    <tbody class="p-datatable-tbody" [value]="dataToRender" [pTableBody]="columns" [pTableBodyTemplate]="bodyTemplate"></tbody>
                    <tfoot *ngIf="footerGroupedTemplate||footerTemplate" class="p-datatable-tfoot">
                        <ng-container *ngTemplateOutlet="footerGroupedTemplate||footerTemplate; context {$implicit: columns}"></ng-container>
                    </tfoot>
                </table>
                <cdk-virtual-scroll-viewport *ngIf="virtualScroll" [itemSize]="virtualRowHeight" tabindex="0" [style.height]="scrollHeight !== 'flex' ? scrollHeight : undefined" [minBufferPx]="minBufferPx" [maxBufferPx]="maxBufferPx" (scrolledIndexChange)="onScrollIndexChange($event)" class="p-datatable-virtual-scrollable-body">
                    <table #table role="table" class="p-datatable-table" [ngClass]="tableStyleClass" [ngStyle]="tableStyle" [attr.id]="id+'-table'">
                        <ng-container *ngTemplateOutlet="colGroupTemplate; context {$implicit: columns}"></ng-container>
                        <thead #tableHeader class="p-datatable-thead">
                            <ng-container *ngTemplateOutlet="headerGroupedTemplate||headerTemplate; context: {$implicit: columns}"></ng-container>
                        </thead>
                        <tbody class="p-datatable-tbody p-datatable-frozen-tbody" *ngIf="frozenValue||frozenBodyTemplate" [value]="frozenValue" [frozenRows]="true" [pTableBody]="columns" [pTableBodyTemplate]="bodyTemplate" [frozen]="true"></tbody>
                        <tbody class="p-datatable-tbody" [value]="dataToRender" [pTableBody]="columns" [pTableBodyTemplate]="bodyTemplate"></tbody>
                        <tfoot *ngIf="footerGroupedTemplate||footerTemplate" class="p-datatable-tfoot">
                            <ng-container *ngTemplateOutlet="footerGroupedTemplate||footerTemplate; context {$implicit: columns}"></ng-container>
                        </tfoot>
                    </table>
                </cdk-virtual-scroll-viewport>
            </div>

            <p-paginator [rows]="rows" [first]="first" [totalRecords]="totalRecords" [pageLinkSize]="pageLinks" styleClass="p-paginator-bottom" [alwaysShow]="alwaysShowPaginator"
                (onPageChange)="onPageChange($event)" [rowsPerPageOptions]="rowsPerPageOptions" *ngIf="paginator && (paginatorPosition === 'bottom' || paginatorPosition =='both')"
                [templateLeft]="paginatorLeftTemplate" [templateRight]="paginatorRightTemplate" [dropdownAppendTo]="paginatorDropdownAppendTo" [dropdownScrollHeight]="paginatorDropdownScrollHeight"
                [currentPageReportTemplate]="currentPageReportTemplate" [showFirstLastIcon]="showFirstLastIcon" [dropdownItemTemplate]="paginatorDropdownItemTemplate" [showCurrentPageReport]="showCurrentPageReport" [showJumpToPageDropdown]="showJumpToPageDropdown" [showJumpToPageInput]="showJumpToPageInput" [showPageLinks]="showPageLinks"></p-paginator>

            <div *ngIf="summaryTemplate" class="p-datatable-footer">
                <ng-container *ngTemplateOutlet="summaryTemplate"></ng-container>
            </div>

            <div #resizeHelper class="p-column-resizer-helper" style="display:none" *ngIf="resizableColumns"></div>
            <span #reorderIndicatorUp class="pi pi-arrow-down p-datatable-reorder-indicator-up" style="display:none" *ngIf="reorderableColumns"></span>
            <span #reorderIndicatorDown class="pi pi-arrow-up p-datatable-reorder-indicator-down" style="display:none" *ngIf="reorderableColumns"></span>
        </div>
    `,
      providers: [TableService],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.Default,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        'class': 'p-element'
      },
      styles: [".p-datatable{position:relative}.p-datatable table{border-collapse:collapse;min-width:100%;table-layout:fixed}.p-datatable .p-sortable-column{cursor:pointer;-webkit-user-select:none;user-select:none}.p-datatable .p-sortable-column .p-column-title,.p-datatable .p-sortable-column .p-sortable-column-icon,.p-datatable .p-sortable-column .p-sortable-column-badge{vertical-align:middle}.p-datatable .p-sortable-column .p-sortable-column-badge{display:inline-flex;align-items:center;justify-content:center}.p-datatable-auto-layout>.p-datatable-wrapper{overflow-x:auto}.p-datatable-auto-layout>.p-datatable-wrapper>table{table-layout:auto}.p-datatable-responsive-scroll>.p-datatable-wrapper{overflow-x:auto}.p-datatable-responsive-scroll>.p-datatable-wrapper>table,.p-datatable-auto-layout>.p-datatable-wrapper>table{table-layout:auto}.p-datatable-hoverable-rows .p-selectable-row{cursor:pointer}.p-datatable-scrollable .p-datatable-wrapper{position:relative;overflow:auto}.p-datatable-scrollable .p-datatable-thead,.p-datatable-scrollable .p-datatable-tbody,.p-datatable-scrollable .p-datatable-tfoot{display:block}.p-datatable-scrollable .p-datatable-thead>tr,.p-datatable-scrollable .p-datatable-tbody>tr,.p-datatable-scrollable .p-datatable-tfoot>tr{display:flex;flex-wrap:nowrap;width:100%}.p-datatable-scrollable .p-datatable-thead>tr>th,.p-datatable-scrollable .p-datatable-tbody>tr>td,.p-datatable-scrollable .p-datatable-tfoot>tr>td{display:flex;flex:1 1 0;align-items:center}.p-datatable-scrollable>.p-datatable-wrapper>.p-datatable-table>.p-datatable-thead,.p-datatable-scrollable>.p-datatable-wrapper>.p-datatable-virtual-scrollable-body>.cdk-virtual-scroll-content-wrapper>.p-datatable-table>.p-datatable-thead{position:sticky;top:0;z-index:1}.p-datatable-scrollable>.p-datatable-wrapper>.p-datatable-table>.p-datatable-frozen-tbody{position:sticky;z-index:1}.p-datatable-scrollable>.p-datatable-wrapper>.p-datatable-table>.p-datatable-tfoot{position:sticky;bottom:0;z-index:1}.p-datatable-scrollable .p-frozen-column{position:sticky;background:inherit}.p-datatable-scrollable th.p-frozen-column{z-index:1}.p-datatable-scrollable-both .p-datatable-thead>tr>th,.p-datatable-scrollable-both .p-datatable-tbody>tr>td,.p-datatable-scrollable-both .p-datatable-tfoot>tr>td,.p-datatable-scrollable-horizontal .p-datatable-thead>tr>th .p-datatable-scrollable-horizontal .p-datatable-tbody>tr>td,.p-datatable-scrollable-horizontal .p-datatable-tfoot>tr>td{flex:0 0 auto}.p-datatable-flex-scrollable{display:flex;flex-direction:column;height:100%}.p-datatable-flex-scrollable .p-datatable-wrapper{display:flex;flex-direction:column;flex:1;height:100%}.p-datatable-scrollable .p-rowgroup-header{position:sticky;z-index:1}.p-datatable-scrollable.p-datatable-grouped-header .p-datatable-thead,.p-datatable-scrollable.p-datatable-grouped-footer .p-datatable-tfoot{display:table;border-collapse:collapse;width:100%;table-layout:fixed}.p-datatable-scrollable.p-datatable-grouped-header .p-datatable-thead>tr,.p-datatable-scrollable.p-datatable-grouped-footer .p-datatable-tfoot>tr{display:table-row}.p-datatable-scrollable.p-datatable-grouped-header .p-datatable-thead>tr>th,.p-datatable-scrollable.p-datatable-grouped-footer .p-datatable-tfoot>tr>td{display:table-cell}.p-datatable-flex-scrollable{display:flex;flex-direction:column;flex:1;height:100%}.p-datatable-flex-scrollable .p-datatable-virtual-scrollable-body{flex:1}.p-datatable-resizable>.p-datatable-wrapper{overflow-x:auto}.p-datatable-resizable .p-datatable-thead>tr>th,.p-datatable-resizable .p-datatable-tfoot>tr>td,.p-datatable-resizable .p-datatable-tbody>tr>td{overflow:hidden;white-space:nowrap}.p-datatable-resizable .p-resizable-column:not(.p-frozen-column){background-clip:padding-box;position:relative}.p-datatable-resizable-fit .p-resizable-column:last-child .p-column-resizer{display:none}.p-datatable .p-column-resizer{display:block;position:absolute!important;top:0;right:0;margin:0;width:.5rem;height:100%;padding:0;cursor:col-resize;border:1px solid transparent}.p-datatable .p-column-resizer-helper{width:1px;position:absolute;z-index:10;display:none}.p-datatable .p-row-editor-init,.p-datatable .p-row-editor-save,.p-datatable .p-row-editor-cancel,.p-datatable .p-row-toggler{display:inline-flex;align-items:center;justify-content:center;overflow:hidden;position:relative}.p-datatable-reorder-indicator-up,.p-datatable-reorder-indicator-down{position:absolute;display:none}.p-datatable-reorderablerow-handle,[pReorderableColumn]{cursor:move}.p-datatable .p-datatable-loading-overlay{position:absolute;display:flex;align-items:center;justify-content:center;z-index:2}.p-column-filter-row{display:flex;align-items:center;width:100%}.p-column-filter-menu{display:inline-flex}.p-column-filter-row p-columnfilterformelement{flex:1 1 auto;width:1%}.p-column-filter-menu-button,.p-column-filter-clear-button{display:inline-flex;justify-content:center;align-items:center;cursor:pointer;text-decoration:none;overflow:hidden;position:relative}.p-column-filter-overlay{position:absolute;top:0;left:0}.p-column-filter-row-items{margin:0;padding:0;list-style:none}.p-column-filter-row-item{cursor:pointer}.p-column-filter-add-button,.p-column-filter-remove-button{justify-content:center}.p-column-filter-add-button .p-button-label,.p-column-filter-remove-button .p-button-label{flex-grow:0}.p-column-filter-buttonbar{display:flex;align-items:center;justify-content:space-between}.p-column-filter-buttonbar .p-button{width:auto}.p-datatable .p-datatable-tbody>tr>td>.p-column-title{display:none}cdk-virtual-scroll-viewport{outline:0 none}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: TableService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: primeng_api__WEBPACK_IMPORTED_MODULE_4__.FilterService
    }, {
      type: primeng_api__WEBPACK_IMPORTED_MODULE_4__.OverlayService
    }];
  }, {
    frozenColumns: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    frozenValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    style: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    styleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    tableStyle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    tableStyleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    paginator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pageLinks: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    rowsPerPageOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    alwaysShowPaginator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    paginatorPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    paginatorDropdownAppendTo: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    paginatorDropdownScrollHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    currentPageReportTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showCurrentPageReport: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showJumpToPageDropdown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showJumpToPageInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showFirstLastIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showPageLinks: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    defaultSortOrder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    sortMode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    resetPageOnSort: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectionMode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectionPageOnly: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectAllChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    selectionChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    contextMenuSelection: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    contextMenuSelectionChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    contextMenuSelectionMode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dataKey: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    metaKeySelection: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    rowSelectable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    rowTrackBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    lazy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    lazyLoadOnInit: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    compareSelectionBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    csvSeparator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    exportFilename: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    filters: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    globalFilterFields: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    filterDelay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    filterLocale: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    expandedRowKeys: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    editingRowKeys: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    rowExpandMode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    scrollable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    scrollDirection: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    rowGroupMode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    scrollHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    virtualScroll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    virtualScrollDelay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    virtualRowHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    frozenWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    responsive: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    contextMenu: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    resizableColumns: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    columnResizeMode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    reorderableColumns: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    loading: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    loadingIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showLoader: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    rowHover: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    customSort: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showInitialSortBadge: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    autoLayout: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    exportFunction: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    exportHeader: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    stateKey: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    stateStorage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    editMode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    groupRowsBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    groupRowsByOrder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    minBufferPx: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    maxBufferPx: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    responsiveLayout: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    breakpoint: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onRowSelect: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onRowUnselect: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onPage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onSort: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onFilter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onLazyLoad: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onRowExpand: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onRowCollapse: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onContextMenuSelect: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onColResize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onColReorder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onRowReorder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onEditInit: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onEditComplete: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onEditCancel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onHeaderCheckboxToggle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    sortFunction: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    firstChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    rowsChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onStateSave: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onStateRestore: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    containerViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['container']
    }],
    resizeHelperViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['resizeHelper']
    }],
    reorderIndicatorUpViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['reorderIndicatorUp']
    }],
    reorderIndicatorDownViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['reorderIndicatorDown']
    }],
    wrapperViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['wrapper']
    }],
    tableViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['table']
    }],
    tableHeaderViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['tableHeader']
    }],
    virtualScrollBody: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__.CdkVirtualScrollViewport]
    }],
    templates: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate]
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    columns: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    first: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    rows: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    totalRecords: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    sortField: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    sortOrder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    multiSortMeta: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selection: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectAll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

class TableBody {
  constructor(dt, tableService, cd, el) {
    this.dt = dt;
    this.tableService = tableService;
    this.cd = cd;
    this.el = el;
    this.subscription = this.dt.tableService.valueSource$.subscribe(() => {
      if (this.dt.virtualScroll) {
        this.cd.detectChanges();
      }
    });
  }

  get value() {
    return this._value;
  }

  set value(val) {
    this._value = val;

    if (this.frozenRows) {
      this.updateFrozenRowStickyPosition();
    }

    if (this.dt.scrollable && this.dt.rowGroupMode === 'subheader') {
      this.updateFrozenRowGroupHeaderStickyPosition();
    }
  }

  ngAfterViewInit() {
    if (this.frozenRows) {
      this.updateFrozenRowStickyPosition();
    }

    if (this.dt.scrollable && this.dt.rowGroupMode === 'subheader') {
      this.updateFrozenRowGroupHeaderStickyPosition();
    }
  }

  shouldRenderRowGroupHeader(value, rowData, i) {
    let currentRowFieldData = primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(rowData, this.dt.groupRowsBy);
    let prevRowData = value[i - 1];

    if (prevRowData) {
      let previousRowFieldData = primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(prevRowData, this.dt.groupRowsBy);
      return currentRowFieldData !== previousRowFieldData;
    } else {
      return true;
    }
  }

  shouldRenderRowGroupFooter(value, rowData, i) {
    let currentRowFieldData = primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(rowData, this.dt.groupRowsBy);
    let nextRowData = value[i + 1];

    if (nextRowData) {
      let nextRowFieldData = primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(nextRowData, this.dt.groupRowsBy);
      return currentRowFieldData !== nextRowFieldData;
    } else {
      return true;
    }
  }

  shouldRenderRowspan(value, rowData, i) {
    let currentRowFieldData = primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(rowData, this.dt.groupRowsBy);
    let prevRowData = value[i - 1];

    if (prevRowData) {
      let previousRowFieldData = primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(prevRowData, this.dt.groupRowsBy);
      return currentRowFieldData !== previousRowFieldData;
    } else {
      return true;
    }
  }

  calculateRowGroupSize(value, rowData, index) {
    let currentRowFieldData = primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(rowData, this.dt.groupRowsBy);
    let nextRowFieldData = currentRowFieldData;
    let groupRowSpan = 0;

    while (currentRowFieldData === nextRowFieldData) {
      groupRowSpan++;
      let nextRowData = value[++index];

      if (nextRowData) {
        nextRowFieldData = primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(nextRowData, this.dt.groupRowsBy);
      } else {
        break;
      }
    }

    return groupRowSpan === 1 ? null : groupRowSpan;
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  updateFrozenRowStickyPosition() {
    this.el.nativeElement.style.top = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getOuterHeight(this.el.nativeElement.previousElementSibling) + 'px';
  }

  updateFrozenRowGroupHeaderStickyPosition() {
    if (this.el.nativeElement.previousElementSibling) {
      let tableHeaderHeight = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getOuterHeight(this.el.nativeElement.previousElementSibling);
      this.dt.rowGroupHeaderStyleObject.top = tableHeaderHeight + 'px';
    }
  }

}

TableBody.ɵfac = function TableBody_Factory(t) {
  return new (t || TableBody)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Table), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TableService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};

TableBody.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: TableBody,
  selectors: [["", "pTableBody", ""]],
  hostAttrs: [1, "p-element"],
  inputs: {
    columns: ["pTableBody", "columns"],
    template: ["pTableBodyTemplate", "template"],
    value: "value",
    frozen: "frozen",
    frozenRows: "frozenRows"
  },
  attrs: _c10,
  decls: 6,
  vars: 6,
  consts: [[4, "ngIf"], ["ngFor", "", 3, "ngForOf", "ngForTrackBy"], ["role", "row", 4, "ngIf"], ["role", "row"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["cdkVirtualFor", "", 3, "cdkVirtualForOf", "cdkVirtualForTrackBy", "cdkVirtualForTemplateCacheSize"]],
  template: function TableBody_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TableBody_ng_container_0_Template, 2, 2, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableBody_ng_container_1_Template, 2, 3, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TableBody_ng_container_2_Template, 2, 2, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TableBody_ng_container_3_Template, 2, 2, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TableBody_ng_container_4_Template, 2, 5, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TableBody_ng_container_5_Template, 2, 5, "ng-container", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.dt.expandedRowTemplate && !ctx.dt.virtualScroll);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.dt.expandedRowTemplate && ctx.dt.virtualScroll);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dt.expandedRowTemplate && !(ctx.frozen && ctx.dt.frozenExpandedRowTemplate));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dt.frozenExpandedRowTemplate && ctx.frozen);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dt.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dt.isEmpty() && !ctx.dt.loading);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgTemplateOutlet, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__.CdkVirtualForOf],
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableBody, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: '[pTableBody]',
      template: `
        <ng-container *ngIf="!dt.expandedRowTemplate && !dt.virtualScroll">
            <ng-template ngFor let-rowData let-rowIndex="index" [ngForOf]="value" [ngForTrackBy]="dt.rowTrackBy">
                <ng-container *ngIf="dt.groupHeaderTemplate && dt.rowGroupMode === 'subheader' && shouldRenderRowGroupHeader(value, rowData, rowIndex)" role="row">
                    <ng-container *ngTemplateOutlet="dt.groupHeaderTemplate; context: {$implicit: rowData, rowIndex: dt.paginator ? (dt.first + rowIndex) : rowIndex, columns: columns, editing: (dt.editMode === 'row' && dt.isRowEditing(rowData)), frozen: frozen}"></ng-container>
                </ng-container>
                <ng-container *ngIf="dt.rowGroupMode !== 'rowspan'">
                    <ng-container *ngTemplateOutlet="template; context: {$implicit: rowData, rowIndex: dt.paginator ? (dt.first + rowIndex) : rowIndex, columns: columns, editing: (dt.editMode === 'row' && dt.isRowEditing(rowData)), frozen: frozen}"></ng-container>
                </ng-container>
                <ng-container *ngIf="dt.rowGroupMode === 'rowspan'">
                    <ng-container *ngTemplateOutlet="template; context: {$implicit: rowData, rowIndex: dt.paginator ? (dt.first + rowIndex) : rowIndex, columns: columns, editing: (dt.editMode === 'row' && dt.isRowEditing(rowData)), frozen: frozen, rowgroup: shouldRenderRowspan(value, rowData, rowIndex), rowspan: calculateRowGroupSize(value, rowData, rowIndex)}"></ng-container>
                </ng-container>
                <ng-container *ngIf="dt.groupFooterTemplate && dt.rowGroupMode === 'subheader' && shouldRenderRowGroupFooter(value, rowData, rowIndex)" role="row">
                    <ng-container *ngTemplateOutlet="dt.groupFooterTemplate; context: {$implicit: rowData, rowIndex: dt.paginator ? (dt.first + rowIndex) : rowIndex, columns: columns, editing: (dt.editMode === 'row' && dt.isRowEditing(rowData)), frozen: frozen}"></ng-container>
                </ng-container>
            </ng-template>
        </ng-container>
        <ng-container *ngIf="!dt.expandedRowTemplate && dt.virtualScroll">
            <ng-template cdkVirtualFor let-rowData let-rowIndex="index" [cdkVirtualForOf]="dt.filteredValue||dt.value" [cdkVirtualForTrackBy]="dt.rowTrackBy" [cdkVirtualForTemplateCacheSize]="0">
                <ng-container *ngTemplateOutlet="rowData ? template: dt.loadingBodyTemplate; context: {$implicit: rowData, rowIndex: dt.paginator ? (dt.first + rowIndex) : rowIndex, columns: columns, editing: (dt.editMode === 'row' && dt.isRowEditing(rowData)), frozen: frozen}"></ng-container>
            </ng-template>
        </ng-container>
        <ng-container *ngIf="dt.expandedRowTemplate && !(frozen && dt.frozenExpandedRowTemplate)">
            <ng-template ngFor let-rowData let-rowIndex="index" [ngForOf]="value" [ngForTrackBy]="dt.rowTrackBy">
                <ng-container *ngIf="!dt.groupHeaderTemplate">
                    <ng-container *ngTemplateOutlet="template; context: {$implicit: rowData, rowIndex: dt.paginator ? (dt.first + rowIndex) : rowIndex, columns: columns, expanded: dt.isRowExpanded(rowData), editing: (dt.editMode === 'row' && dt.isRowEditing(rowData)), frozen: frozen}"></ng-container>
                </ng-container>
                <ng-container *ngIf="dt.groupHeaderTemplate && dt.rowGroupMode === 'subheader' && shouldRenderRowGroupHeader(value, rowData, rowIndex)" role="row">
                    <ng-container *ngTemplateOutlet="dt.groupHeaderTemplate; context: {$implicit: rowData, rowIndex: dt.paginator ? (dt.first + rowIndex) : rowIndex, columns: columns, expanded: dt.isRowExpanded(rowData), editing: (dt.editMode === 'row' && dt.isRowEditing(rowData)), frozen: frozen}"></ng-container>
                </ng-container>
                <ng-container *ngIf="dt.isRowExpanded(rowData)">
                    <ng-container *ngTemplateOutlet="dt.expandedRowTemplate; context: {$implicit: rowData, rowIndex: dt.paginator ? (dt.first + rowIndex) : rowIndex, columns: columns, frozen: frozen}"></ng-container>
                    <ng-container *ngIf="dt.groupFooterTemplate && dt.rowGroupMode === 'subheader' && shouldRenderRowGroupFooter(value, rowData, rowIndex)" role="row">
                        <ng-container *ngTemplateOutlet="dt.groupFooterTemplate; context: {$implicit: rowData, rowIndex: dt.paginator ? (dt.first + rowIndex) : rowIndex, columns: columns, expanded: dt.isRowExpanded(rowData), editing: (dt.editMode === 'row' && dt.isRowEditing(rowData)), frozen: frozen}"></ng-container>
                    </ng-container>
                </ng-container>
            </ng-template>
        </ng-container>
        <ng-container *ngIf="dt.frozenExpandedRowTemplate && frozen">
            <ng-template ngFor let-rowData let-rowIndex="index" [ngForOf]="value" [ngForTrackBy]="dt.rowTrackBy">
                <ng-container *ngTemplateOutlet="template; context: {$implicit: rowData, rowIndex: dt.paginator ? (dt.first + rowIndex) : rowIndex, columns: columns, expanded: dt.isRowExpanded(rowData), editing: (dt.editMode === 'row' && dt.isRowEditing(rowData)), frozen: frozen}"></ng-container>
                <ng-container *ngIf="dt.isRowExpanded(rowData)">
                    <ng-container *ngTemplateOutlet="dt.frozenExpandedRowTemplate; context: {$implicit: rowData, rowIndex: dt.paginator ? (dt.first + rowIndex) : rowIndex, columns: columns, frozen: frozen}"></ng-container>
                </ng-container>
            </ng-template>
        </ng-container>
        <ng-container *ngIf="dt.loading">
            <ng-container *ngTemplateOutlet="dt.loadingBodyTemplate; context: {$implicit: columns, frozen: frozen}"></ng-container>
        </ng-container>
        <ng-container *ngIf="dt.isEmpty() && !dt.loading">
            <ng-container *ngTemplateOutlet="dt.emptyMessageTemplate; context: {$implicit: columns, frozen: frozen}"></ng-container>
        </ng-container>
    `,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.Default,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        'class': 'p-element'
      }
    }]
  }], function () {
    return [{
      type: Table
    }, {
      type: TableService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }];
  }, {
    columns: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ["pTableBody"]
    }],
    template: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ["pTableBodyTemplate"]
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    frozen: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    frozenRows: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

class RowGroupHeader {
  constructor(dt) {
    this.dt = dt;
  }

  get getFrozenRowGroupHeaderStickyPosition() {
    return this.dt.rowGroupHeaderStyleObject ? this.dt.rowGroupHeaderStyleObject.top : '';
  }

}

RowGroupHeader.ɵfac = function RowGroupHeader_Factory(t) {
  return new (t || RowGroupHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Table));
};

RowGroupHeader.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: RowGroupHeader,
  selectors: [["", "pRowGroupHeader", ""]],
  hostAttrs: [1, "p-rowgroup-header", "p-element"],
  hostVars: 2,
  hostBindings: function RowGroupHeader_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("top", ctx.getFrozenRowGroupHeaderStickyPosition);
    }
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RowGroupHeader, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[pRowGroupHeader]',
      host: {
        'class': 'p-rowgroup-header p-element',
        '[style.top]': "getFrozenRowGroupHeaderStickyPosition"
      }
    }]
  }], function () {
    return [{
      type: Table
    }];
  }, null);
})();

class FrozenColumn {
  constructor(el) {
    this.el = el;
    this.alignFrozen = "left";
    this._frozen = true;
  }

  get frozen() {
    return this._frozen;
  }

  set frozen(val) {
    this._frozen = val;
    this.updateStickyPosition();
  }

  ngAfterViewInit() {
    this.updateStickyPosition();
  }

  updateStickyPosition() {
    if (this._frozen) {
      if (this.alignFrozen === 'right') {
        let right = 0;
        let next = this.el.nativeElement.nextElementSibling;

        if (next) {
          right = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getOuterWidth(next) + (parseFloat(next.style.right) || 0);
        }

        this.el.nativeElement.style.right = right + 'px';
      } else {
        let left = 0;
        let prev = this.el.nativeElement.previousElementSibling;

        if (prev) {
          left = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getOuterWidth(prev) + (parseFloat(prev.style.left) || 0);
        }

        this.el.nativeElement.style.left = left + 'px';
      }

      let filterRow = this.el.nativeElement.parentElement.nextElementSibling;

      if (filterRow) {
        let index = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.index(this.el.nativeElement);

        if (filterRow.children && filterRow.children[index]) {
          filterRow.children[index].style.left = this.el.nativeElement.style.left;
          filterRow.children[index].style.right = this.el.nativeElement.style.right;
        }
      }
    }
  }

}

FrozenColumn.ɵfac = function FrozenColumn_Factory(t) {
  return new (t || FrozenColumn)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};

FrozenColumn.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: FrozenColumn,
  selectors: [["", "pFrozenColumn", ""]],
  hostAttrs: [1, "p-element"],
  hostVars: 2,
  hostBindings: function FrozenColumn_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("p-frozen-column", ctx.frozen);
    }
  },
  inputs: {
    frozen: "frozen",
    alignFrozen: "alignFrozen"
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FrozenColumn, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[pFrozenColumn]',
      host: {
        'class': 'p-element',
        '[class.p-frozen-column]': 'frozen'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }];
  }, {
    frozen: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    alignFrozen: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

class SortableColumn {
  constructor(dt) {
    this.dt = dt;

    if (this.isEnabled()) {
      this.subscription = this.dt.tableService.sortSource$.subscribe(sortMeta => {
        this.updateSortState();
      });
    }
  }

  ngOnInit() {
    if (this.isEnabled()) {
      this.updateSortState();
    }
  }

  updateSortState() {
    this.sorted = this.dt.isSorted(this.field);
    this.sortOrder = this.sorted ? this.dt.sortOrder === 1 ? 'ascending' : 'descending' : 'none';
  }

  onClick(event) {
    if (this.isEnabled() && !this.isFilterElement(event.target)) {
      this.updateSortState();
      this.dt.sort({
        originalEvent: event,
        field: this.field
      });
      primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.clearSelection();
    }
  }

  onEnterKey(event) {
    this.onClick(event);
  }

  isEnabled() {
    return this.pSortableColumnDisabled !== true;
  }

  isFilterElement(element) {
    return primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.hasClass(element, 'pi-filter-icon') || primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.hasClass(element, 'p-column-filter-menu-button');
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}

SortableColumn.ɵfac = function SortableColumn_Factory(t) {
  return new (t || SortableColumn)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Table));
};

SortableColumn.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: SortableColumn,
  selectors: [["", "pSortableColumn", ""]],
  hostAttrs: [1, "p-element"],
  hostVars: 7,
  hostBindings: function SortableColumn_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SortableColumn_click_HostBindingHandler($event) {
        return ctx.onClick($event);
      })("keydown.enter", function SortableColumn_keydown_enter_HostBindingHandler($event) {
        return ctx.onEnterKey($event);
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx.isEnabled() ? "0" : null)("role", "columnheader")("aria-sort", ctx.sortOrder);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("p-sortable-column", ctx.isEnabled())("p-highlight", ctx.sorted);
    }
  },
  inputs: {
    field: ["pSortableColumn", "field"],
    pSortableColumnDisabled: "pSortableColumnDisabled"
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SortableColumn, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[pSortableColumn]',
      host: {
        'class': 'p-element',
        '[class.p-sortable-column]': 'isEnabled()',
        '[class.p-highlight]': 'sorted',
        '[attr.tabindex]': 'isEnabled() ? "0" : null',
        '[attr.role]': '"columnheader"',
        '[attr.aria-sort]': 'sortOrder'
      }
    }]
  }], function () {
    return [{
      type: Table
    }];
  }, {
    field: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ["pSortableColumn"]
    }],
    pSortableColumnDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['click', ['$event']]
    }],
    onEnterKey: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['keydown.enter', ['$event']]
    }]
  });
})();

class SortIcon {
  constructor(dt, cd) {
    this.dt = dt;
    this.cd = cd;
    this.subscription = this.dt.tableService.sortSource$.subscribe(sortMeta => {
      this.updateSortState();
    });
  }

  ngOnInit() {
    this.updateSortState();
  }

  onClick(event) {
    event.preventDefault();
  }

  updateSortState() {
    if (this.dt.sortMode === 'single') {
      this.sortOrder = this.dt.isSorted(this.field) ? this.dt.sortOrder : 0;
    } else if (this.dt.sortMode === 'multiple') {
      let sortMeta = this.dt.getSortMeta(this.field);
      this.sortOrder = sortMeta ? sortMeta.order : 0;
    }

    this.cd.markForCheck();
  }

  getMultiSortMetaIndex() {
    let multiSortMeta = this.dt._multiSortMeta;
    let index = -1;

    if (multiSortMeta && this.dt.sortMode === 'multiple' && (this.dt.showInitialSortBadge || multiSortMeta.length > 1)) {
      for (let i = 0; i < multiSortMeta.length; i++) {
        let meta = multiSortMeta[i];

        if (meta.field === this.field || meta.field === this.field) {
          index = i;
          break;
        }
      }
    }

    return index;
  }

  getBadgeValue() {
    let index = this.getMultiSortMetaIndex();
    return this.dt.groupRowsBy && index > -1 ? index : index + 1;
  }

  isMultiSorted() {
    return this.dt.sortMode === 'multiple' && this.getMultiSortMetaIndex() > -1;
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}

SortIcon.ɵfac = function SortIcon_Factory(t) {
  return new (t || SortIcon)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Table), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
};

SortIcon.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: SortIcon,
  selectors: [["p-sortIcon"]],
  hostAttrs: [1, "p-element"],
  inputs: {
    field: "field"
  },
  decls: 2,
  vars: 6,
  consts: [[1, "p-sortable-column-icon", "pi", "pi-fw", 3, "ngClass"], ["class", "p-sortable-column-badge", 4, "ngIf"], [1, "p-sortable-column-badge"]],
  template: function SortIcon_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SortIcon_span_1_Template, 2, 1, "span", 1);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](2, _c16, ctx.sortOrder === 1, ctx.sortOrder === -1, ctx.sortOrder === 0));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMultiSorted());
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SortIcon, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'p-sortIcon',
      template: `
        <i class="p-sortable-column-icon pi pi-fw" [ngClass]="{'pi-sort-amount-up-alt': sortOrder === 1, 'pi-sort-amount-down': sortOrder === -1, 'pi-sort-alt': sortOrder === 0}"></i>
        <span *ngIf="isMultiSorted()" class="p-sortable-column-badge">{{getBadgeValue()}}</span>
    `,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        'class': 'p-element'
      }
    }]
  }], function () {
    return [{
      type: Table
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }];
  }, {
    field: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

class SelectableRow {
  constructor(dt, tableService) {
    this.dt = dt;
    this.tableService = tableService;

    if (this.isEnabled()) {
      this.subscription = this.dt.tableService.selectionSource$.subscribe(() => {
        this.selected = this.dt.isSelected(this.data);
      });
    }
  }

  ngOnInit() {
    if (this.isEnabled()) {
      this.selected = this.dt.isSelected(this.data);
    }
  }

  onClick(event) {
    if (this.isEnabled()) {
      this.dt.handleRowClick({
        originalEvent: event,
        rowData: this.data,
        rowIndex: this.index
      });
    }
  }

  onTouchEnd(event) {
    if (this.isEnabled()) {
      this.dt.handleRowTouchEnd(event);
    }
  }

  onArrowDownKeyDown(event) {
    if (!this.isEnabled()) {
      return;
    }

    const row = event.currentTarget;
    const nextRow = this.findNextSelectableRow(row);

    if (nextRow) {
      nextRow.focus();
    }

    event.preventDefault();
  }

  onArrowUpKeyDown(event) {
    if (!this.isEnabled()) {
      return;
    }

    const row = event.currentTarget;
    const prevRow = this.findPrevSelectableRow(row);

    if (prevRow) {
      prevRow.focus();
    }

    event.preventDefault();
  }

  onEnterKeyDown(event) {
    if (!this.isEnabled()) {
      return;
    }

    this.dt.handleRowClick({
      originalEvent: event,
      rowData: this.data,
      rowIndex: this.index
    });
  }

  onPageDownKeyDown() {
    if (this.dt.virtualScroll) {
      this.dt.virtualScrollBody.elementRef.nativeElement.focus();
    }
  }

  onSpaceKeydown() {
    if (this.dt.virtualScroll && !this.dt.editingCell) {
      this.dt.virtualScrollBody.elementRef.nativeElement.focus();
    }
  }

  findNextSelectableRow(row) {
    let nextRow = row.nextElementSibling;

    if (nextRow) {
      if (primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.hasClass(nextRow, 'p-selectable-row')) return nextRow;else return this.findNextSelectableRow(nextRow);
    } else {
      return null;
    }
  }

  findPrevSelectableRow(row) {
    let prevRow = row.previousElementSibling;

    if (prevRow) {
      if (primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.hasClass(prevRow, 'p-selectable-row')) return prevRow;else return this.findPrevSelectableRow(prevRow);
    } else {
      return null;
    }
  }

  isEnabled() {
    return this.pSelectableRowDisabled !== true;
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}

SelectableRow.ɵfac = function SelectableRow_Factory(t) {
  return new (t || SelectableRow)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Table), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TableService));
};

SelectableRow.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: SelectableRow,
  selectors: [["", "pSelectableRow", ""]],
  hostAttrs: [1, "p-element"],
  hostVars: 5,
  hostBindings: function SelectableRow_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectableRow_click_HostBindingHandler($event) {
        return ctx.onClick($event);
      })("touchend", function SelectableRow_touchend_HostBindingHandler($event) {
        return ctx.onTouchEnd($event);
      })("keydown.arrowdown", function SelectableRow_keydown_arrowdown_HostBindingHandler($event) {
        return ctx.onArrowDownKeyDown($event);
      })("keydown.arrowup", function SelectableRow_keydown_arrowup_HostBindingHandler($event) {
        return ctx.onArrowUpKeyDown($event);
      })("keydown.enter", function SelectableRow_keydown_enter_HostBindingHandler($event) {
        return ctx.onEnterKeyDown($event);
      })("keydown.shift.enter", function SelectableRow_keydown_shift_enter_HostBindingHandler($event) {
        return ctx.onEnterKeyDown($event);
      })("keydown.meta.enter", function SelectableRow_keydown_meta_enter_HostBindingHandler($event) {
        return ctx.onEnterKeyDown($event);
      })("keydown.pagedown", function SelectableRow_keydown_pagedown_HostBindingHandler() {
        return ctx.onPageDownKeyDown();
      })("keydown.pageup", function SelectableRow_keydown_pageup_HostBindingHandler() {
        return ctx.onPageDownKeyDown();
      })("keydown.home", function SelectableRow_keydown_home_HostBindingHandler() {
        return ctx.onPageDownKeyDown();
      })("keydown.end", function SelectableRow_keydown_end_HostBindingHandler() {
        return ctx.onPageDownKeyDown();
      })("keydown.space", function SelectableRow_keydown_space_HostBindingHandler() {
        return ctx.onSpaceKeydown();
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx.isEnabled() ? 0 : undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("p-selectable-row", ctx.isEnabled())("p-highlight", ctx.selected);
    }
  },
  inputs: {
    data: ["pSelectableRow", "data"],
    index: ["pSelectableRowIndex", "index"],
    pSelectableRowDisabled: "pSelectableRowDisabled"
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectableRow, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[pSelectableRow]',
      host: {
        'class': 'p-element',
        '[class.p-selectable-row]': 'isEnabled()',
        '[class.p-highlight]': 'selected',
        '[attr.tabindex]': 'isEnabled() ? 0 : undefined'
      }
    }]
  }], function () {
    return [{
      type: Table
    }, {
      type: TableService
    }];
  }, {
    data: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ["pSelectableRow"]
    }],
    index: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ["pSelectableRowIndex"]
    }],
    pSelectableRowDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['click', ['$event']]
    }],
    onTouchEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['touchend', ['$event']]
    }],
    onArrowDownKeyDown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['keydown.arrowdown', ['$event']]
    }],
    onArrowUpKeyDown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['keydown.arrowup', ['$event']]
    }],
    onEnterKeyDown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['keydown.enter', ['$event']]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['keydown.shift.enter', ['$event']]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['keydown.meta.enter', ['$event']]
    }],
    onPageDownKeyDown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['keydown.pagedown']
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['keydown.pageup']
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['keydown.home']
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['keydown.end']
    }],
    onSpaceKeydown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['keydown.space']
    }]
  });
})();

class SelectableRowDblClick {
  constructor(dt, tableService) {
    this.dt = dt;
    this.tableService = tableService;

    if (this.isEnabled()) {
      this.subscription = this.dt.tableService.selectionSource$.subscribe(() => {
        this.selected = this.dt.isSelected(this.data);
      });
    }
  }

  ngOnInit() {
    if (this.isEnabled()) {
      this.selected = this.dt.isSelected(this.data);
    }
  }

  onClick(event) {
    if (this.isEnabled()) {
      this.dt.handleRowClick({
        originalEvent: event,
        rowData: this.data,
        rowIndex: this.index
      });
    }
  }

  isEnabled() {
    return this.pSelectableRowDisabled !== true;
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}

SelectableRowDblClick.ɵfac = function SelectableRowDblClick_Factory(t) {
  return new (t || SelectableRowDblClick)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Table), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TableService));
};

SelectableRowDblClick.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: SelectableRowDblClick,
  selectors: [["", "pSelectableRowDblClick", ""]],
  hostAttrs: [1, "p-element"],
  hostVars: 4,
  hostBindings: function SelectableRowDblClick_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dblclick", function SelectableRowDblClick_dblclick_HostBindingHandler($event) {
        return ctx.onClick($event);
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("p-selectable-row", ctx.isEnabled())("p-highlight", ctx.selected);
    }
  },
  inputs: {
    data: ["pSelectableRowDblClick", "data"],
    index: ["pSelectableRowIndex", "index"],
    pSelectableRowDisabled: "pSelectableRowDisabled"
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectableRowDblClick, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[pSelectableRowDblClick]',
      host: {
        'class': 'p-element',
        '[class.p-selectable-row]': 'isEnabled()',
        '[class.p-highlight]': 'selected'
      }
    }]
  }], function () {
    return [{
      type: Table
    }, {
      type: TableService
    }];
  }, {
    data: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ["pSelectableRowDblClick"]
    }],
    index: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ["pSelectableRowIndex"]
    }],
    pSelectableRowDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['dblclick', ['$event']]
    }]
  });
})();

class ContextMenuRow {
  constructor(dt, tableService, el) {
    this.dt = dt;
    this.tableService = tableService;
    this.el = el;

    if (this.isEnabled()) {
      this.subscription = this.dt.tableService.contextMenuSource$.subscribe(data => {
        this.selected = this.dt.equals(this.data, data);
      });
    }
  }

  onContextMenu(event) {
    if (this.isEnabled()) {
      this.dt.handleRowRightClick({
        originalEvent: event,
        rowData: this.data,
        rowIndex: this.index
      });
      this.el.nativeElement.focus();
      event.preventDefault();
    }
  }

  isEnabled() {
    return this.pContextMenuRowDisabled !== true;
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}

ContextMenuRow.ɵfac = function ContextMenuRow_Factory(t) {
  return new (t || ContextMenuRow)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Table), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TableService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};

ContextMenuRow.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: ContextMenuRow,
  selectors: [["", "pContextMenuRow", ""]],
  hostAttrs: [1, "p-element"],
  hostVars: 3,
  hostBindings: function ContextMenuRow_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextmenu", function ContextMenuRow_contextmenu_HostBindingHandler($event) {
        return ctx.onContextMenu($event);
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx.isEnabled() ? 0 : undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("p-highlight-contextmenu", ctx.selected);
    }
  },
  inputs: {
    data: ["pContextMenuRow", "data"],
    index: ["pContextMenuRowIndex", "index"],
    pContextMenuRowDisabled: "pContextMenuRowDisabled"
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContextMenuRow, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[pContextMenuRow]',
      host: {
        'class': 'p-element',
        '[class.p-highlight-contextmenu]': 'selected',
        '[attr.tabindex]': 'isEnabled() ? 0 : undefined'
      }
    }]
  }], function () {
    return [{
      type: Table
    }, {
      type: TableService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }];
  }, {
    data: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ["pContextMenuRow"]
    }],
    index: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ["pContextMenuRowIndex"]
    }],
    pContextMenuRowDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onContextMenu: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['contextmenu', ['$event']]
    }]
  });
})();

class RowToggler {
  constructor(dt) {
    this.dt = dt;
  }

  onClick(event) {
    if (this.isEnabled()) {
      this.dt.toggleRow(this.data, event);
      event.preventDefault();
    }
  }

  isEnabled() {
    return this.pRowTogglerDisabled !== true;
  }

}

RowToggler.ɵfac = function RowToggler_Factory(t) {
  return new (t || RowToggler)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Table));
};

RowToggler.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: RowToggler,
  selectors: [["", "pRowToggler", ""]],
  hostAttrs: [1, "p-element"],
  hostBindings: function RowToggler_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RowToggler_click_HostBindingHandler($event) {
        return ctx.onClick($event);
      });
    }
  },
  inputs: {
    data: ["pRowToggler", "data"],
    pRowTogglerDisabled: "pRowTogglerDisabled"
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RowToggler, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[pRowToggler]',
      host: {
        'class': 'p-element'
      }
    }]
  }], function () {
    return [{
      type: Table
    }];
  }, {
    data: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['pRowToggler']
    }],
    pRowTogglerDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['click', ['$event']]
    }]
  });
})();

class ResizableColumn {
  constructor(dt, el, zone) {
    this.dt = dt;
    this.el = el;
    this.zone = zone;
  }

  ngAfterViewInit() {
    if (this.isEnabled()) {
      primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.addClass(this.el.nativeElement, 'p-resizable-column');
      this.resizer = document.createElement('span');
      this.resizer.className = 'p-column-resizer';
      this.el.nativeElement.appendChild(this.resizer);
      this.zone.runOutsideAngular(() => {
        this.resizerMouseDownListener = this.onMouseDown.bind(this);
        this.resizer.addEventListener('mousedown', this.resizerMouseDownListener);
      });
    }
  }

  bindDocumentEvents() {
    this.zone.runOutsideAngular(() => {
      this.documentMouseMoveListener = this.onDocumentMouseMove.bind(this);
      document.addEventListener('mousemove', this.documentMouseMoveListener);
      this.documentMouseUpListener = this.onDocumentMouseUp.bind(this);
      document.addEventListener('mouseup', this.documentMouseUpListener);
    });
  }

  unbindDocumentEvents() {
    if (this.documentMouseMoveListener) {
      document.removeEventListener('mousemove', this.documentMouseMoveListener);
      this.documentMouseMoveListener = null;
    }

    if (this.documentMouseUpListener) {
      document.removeEventListener('mouseup', this.documentMouseUpListener);
      this.documentMouseUpListener = null;
    }
  }

  onMouseDown(event) {
    if (event.which === 1) {
      this.dt.onColumnResizeBegin(event);
      this.bindDocumentEvents();
    }
  }

  onDocumentMouseMove(event) {
    this.dt.onColumnResize(event);
  }

  onDocumentMouseUp(event) {
    this.dt.onColumnResizeEnd();
    this.unbindDocumentEvents();
  }

  isEnabled() {
    return this.pResizableColumnDisabled !== true;
  }

  ngOnDestroy() {
    if (this.resizerMouseDownListener) {
      this.resizer.removeEventListener('mousedown', this.resizerMouseDownListener);
    }

    this.unbindDocumentEvents();
  }

}

ResizableColumn.ɵfac = function ResizableColumn_Factory(t) {
  return new (t || ResizableColumn)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Table), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
};

ResizableColumn.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: ResizableColumn,
  selectors: [["", "pResizableColumn", ""]],
  hostAttrs: [1, "p-element"],
  inputs: {
    pResizableColumnDisabled: "pResizableColumnDisabled"
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResizableColumn, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[pResizableColumn]',
      host: {
        'class': 'p-element'
      }
    }]
  }], function () {
    return [{
      type: Table
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }];
  }, {
    pResizableColumnDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

class ReorderableColumn {
  constructor(dt, el, zone) {
    this.dt = dt;
    this.el = el;
    this.zone = zone;
  }

  ngAfterViewInit() {
    if (this.isEnabled()) {
      this.bindEvents();
    }
  }

  bindEvents() {
    this.zone.runOutsideAngular(() => {
      this.mouseDownListener = this.onMouseDown.bind(this);
      this.el.nativeElement.addEventListener('mousedown', this.mouseDownListener);
      this.dragStartListener = this.onDragStart.bind(this);
      this.el.nativeElement.addEventListener('dragstart', this.dragStartListener);
      this.dragOverListener = this.onDragEnter.bind(this);
      this.el.nativeElement.addEventListener('dragover', this.dragOverListener);
      this.dragEnterListener = this.onDragEnter.bind(this);
      this.el.nativeElement.addEventListener('dragenter', this.dragEnterListener);
      this.dragLeaveListener = this.onDragLeave.bind(this);
      this.el.nativeElement.addEventListener('dragleave', this.dragLeaveListener);
    });
  }

  unbindEvents() {
    if (this.mouseDownListener) {
      document.removeEventListener('mousedown', this.mouseDownListener);
      this.mouseDownListener = null;
    }

    if (this.dragOverListener) {
      document.removeEventListener('dragover', this.dragOverListener);
      this.dragOverListener = null;
    }

    if (this.dragEnterListener) {
      document.removeEventListener('dragenter', this.dragEnterListener);
      this.dragEnterListener = null;
    }

    if (this.dragEnterListener) {
      document.removeEventListener('dragenter', this.dragEnterListener);
      this.dragEnterListener = null;
    }

    if (this.dragLeaveListener) {
      document.removeEventListener('dragleave', this.dragLeaveListener);
      this.dragLeaveListener = null;
    }
  }

  onMouseDown(event) {
    if (event.target.nodeName === 'INPUT' || event.target.nodeName === 'TEXTAREA' || primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.hasClass(event.target, 'p-column-resizer')) this.el.nativeElement.draggable = false;else this.el.nativeElement.draggable = true;
  }

  onDragStart(event) {
    this.dt.onColumnDragStart(event, this.el.nativeElement);
  }

  onDragOver(event) {
    event.preventDefault();
  }

  onDragEnter(event) {
    this.dt.onColumnDragEnter(event, this.el.nativeElement);
  }

  onDragLeave(event) {
    this.dt.onColumnDragLeave(event);
  }

  onDrop(event) {
    if (this.isEnabled()) {
      this.dt.onColumnDrop(event, this.el.nativeElement);
    }
  }

  isEnabled() {
    return this.pReorderableColumnDisabled !== true;
  }

  ngOnDestroy() {
    this.unbindEvents();
  }

}

ReorderableColumn.ɵfac = function ReorderableColumn_Factory(t) {
  return new (t || ReorderableColumn)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Table), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
};

ReorderableColumn.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: ReorderableColumn,
  selectors: [["", "pReorderableColumn", ""]],
  hostAttrs: [1, "p-element"],
  hostBindings: function ReorderableColumn_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function ReorderableColumn_drop_HostBindingHandler($event) {
        return ctx.onDrop($event);
      });
    }
  },
  inputs: {
    pReorderableColumnDisabled: "pReorderableColumnDisabled"
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReorderableColumn, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[pReorderableColumn]',
      host: {
        'class': 'p-element'
      }
    }]
  }], function () {
    return [{
      type: Table
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }];
  }, {
    pReorderableColumnDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onDrop: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['drop', ['$event']]
    }]
  });
})();

class EditableColumn {
  constructor(dt, el, zone) {
    this.dt = dt;
    this.el = el;
    this.zone = zone;
  }

  ngAfterViewInit() {
    if (this.isEnabled()) {
      primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.addClass(this.el.nativeElement, 'p-editable-column');
    }
  }

  onClick(event) {
    if (this.isEnabled()) {
      this.dt.selfClick = true;

      if (this.dt.editingCell) {
        if (this.dt.editingCell !== this.el.nativeElement) {
          if (!this.dt.isEditingCellValid()) {
            return;
          }

          this.closeEditingCell(true, event);
          this.openCell();
        }
      } else {
        this.openCell();
      }
    }
  }

  openCell() {
    this.dt.updateEditingCell(this.el.nativeElement, this.data, this.field, this.rowIndex);
    primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.addClass(this.el.nativeElement, 'p-cell-editing');
    this.dt.onEditInit.emit({
      field: this.field,
      data: this.data,
      index: this.rowIndex
    });
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        let focusCellSelector = this.pFocusCellSelector || 'input, textarea, select';
        let focusableElement = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.findSingle(this.el.nativeElement, focusCellSelector);

        if (focusableElement) {
          focusableElement.focus();
        }
      }, 50);
    });

    this.overlayEventListener = e => {
      if (this.el && this.el.nativeElement.contains(e.target)) {
        this.dt.selfClick = true;
      }
    };

    this.dt.overlaySubscription = this.dt.overlayService.clickObservable.subscribe(this.overlayEventListener);
  }

  closeEditingCell(completed, event) {
    if (completed) this.dt.onEditComplete.emit({
      field: this.dt.editingCellField,
      data: this.dt.editingCellData,
      originalEvent: event,
      index: this.dt.editingCellRowIndex
    });else this.dt.onEditCancel.emit({
      field: this.dt.editingCellField,
      data: this.dt.editingCellData,
      originalEvent: event,
      index: this.dt.editingCellRowIndex
    });
    primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.removeClass(this.dt.editingCell, 'p-cell-editing');
    this.dt.editingCell = null;
    this.dt.editingCellData = null;
    this.dt.editingCellField = null;
    this.dt.unbindDocumentEditListener();

    if (this.dt.overlaySubscription) {
      this.dt.overlaySubscription.unsubscribe();
    }
  }

  onEnterKeyDown(event) {
    if (this.isEnabled()) {
      if (this.dt.isEditingCellValid()) {
        this.closeEditingCell(true, event);
      }

      event.preventDefault();
    }
  }

  onEscapeKeyDown(event) {
    if (this.isEnabled()) {
      if (this.dt.isEditingCellValid()) {
        this.closeEditingCell(false, event);
      }

      event.preventDefault();
    }
  }

  onShiftKeyDown(event) {
    if (this.isEnabled()) {
      if (event.shiftKey) this.moveToPreviousCell(event);else {
        this.moveToNextCell(event);
      }
    }
  }

  onArrowDown(event) {
    if (this.isEnabled()) {
      let currentCell = this.findCell(event.target);

      if (currentCell) {
        let cellIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.index(currentCell);
        let targetCell = this.findNextEditableColumnByIndex(currentCell, cellIndex);

        if (targetCell) {
          if (this.dt.isEditingCellValid()) {
            this.closeEditingCell(true, event);
          }

          primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.invokeElementMethod(event.target, 'blur');
          primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.invokeElementMethod(targetCell, 'click');
        }

        event.preventDefault();
      }
    }
  }

  onArrowUp(event) {
    if (this.isEnabled()) {
      let currentCell = this.findCell(event.target);

      if (currentCell) {
        let cellIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.index(currentCell);
        let targetCell = this.findPrevEditableColumnByIndex(currentCell, cellIndex);

        if (targetCell) {
          if (this.dt.isEditingCellValid()) {
            this.closeEditingCell(true, event);
          }

          primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.invokeElementMethod(event.target, 'blur');
          primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.invokeElementMethod(targetCell, 'click');
        }

        event.preventDefault();
      }
    }
  }

  onArrowLeft(event) {
    if (this.isEnabled()) {
      this.moveToPreviousCell(event);
    }
  }

  onArrowRight(event) {
    if (this.isEnabled()) {
      this.moveToNextCell(event);
    }
  }

  findCell(element) {
    if (element) {
      let cell = element;

      while (cell && !primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.hasClass(cell, 'p-cell-editing')) {
        cell = cell.parentElement;
      }

      return cell;
    } else {
      return null;
    }
  }

  moveToPreviousCell(event) {
    let currentCell = this.findCell(event.target);

    if (currentCell) {
      let targetCell = this.findPreviousEditableColumn(currentCell);

      if (targetCell) {
        if (this.dt.isEditingCellValid()) {
          this.closeEditingCell(true, event);
        }

        primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.invokeElementMethod(event.target, 'blur');
        primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.invokeElementMethod(targetCell, 'click');
        event.preventDefault();
      }
    }
  }

  moveToNextCell(event) {
    let currentCell = this.findCell(event.target);

    if (currentCell) {
      let targetCell = this.findNextEditableColumn(currentCell);

      if (targetCell) {
        if (this.dt.isEditingCellValid()) {
          this.closeEditingCell(true, event);
        }

        primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.invokeElementMethod(event.target, 'blur');
        primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.invokeElementMethod(targetCell, 'click');
        event.preventDefault();
      }
    }
  }

  findPreviousEditableColumn(cell) {
    let prevCell = cell.previousElementSibling;

    if (!prevCell) {
      let previousRow = cell.parentElement.previousElementSibling;

      if (previousRow) {
        prevCell = previousRow.lastElementChild;
      }
    }

    if (prevCell) {
      if (primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.hasClass(prevCell, 'p-editable-column')) return prevCell;else return this.findPreviousEditableColumn(prevCell);
    } else {
      return null;
    }
  }

  findNextEditableColumn(cell) {
    let nextCell = cell.nextElementSibling;

    if (!nextCell) {
      let nextRow = cell.parentElement.nextElementSibling;

      if (nextRow) {
        nextCell = nextRow.firstElementChild;
      }
    }

    if (nextCell) {
      if (primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.hasClass(nextCell, 'p-editable-column')) return nextCell;else return this.findNextEditableColumn(nextCell);
    } else {
      return null;
    }
  }

  findNextEditableColumnByIndex(cell, index) {
    let nextRow = cell.parentElement.nextElementSibling;

    if (nextRow) {
      let nextCell = nextRow.children[index];

      if (nextCell && primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.hasClass(nextCell, 'p-editable-column')) {
        return nextCell;
      }

      return null;
    } else {
      return null;
    }
  }

  findPrevEditableColumnByIndex(cell, index) {
    let prevRow = cell.parentElement.previousElementSibling;

    if (prevRow) {
      let prevCell = prevRow.children[index];

      if (prevCell && primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.hasClass(prevCell, 'p-editable-column')) {
        return prevCell;
      }

      return null;
    } else {
      return null;
    }
  }

  isEnabled() {
    return this.pEditableColumnDisabled !== true;
  }

  ngOnDestroy() {
    if (this.dt.overlaySubscription) {
      this.dt.overlaySubscription.unsubscribe();
    }
  }

}

EditableColumn.ɵfac = function EditableColumn_Factory(t) {
  return new (t || EditableColumn)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Table), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
};

EditableColumn.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: EditableColumn,
  selectors: [["", "pEditableColumn", ""]],
  hostAttrs: [1, "p-element"],
  hostBindings: function EditableColumn_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditableColumn_click_HostBindingHandler($event) {
        return ctx.onClick($event);
      })("keydown.enter", function EditableColumn_keydown_enter_HostBindingHandler($event) {
        return ctx.onEnterKeyDown($event);
      })("keydown.escape", function EditableColumn_keydown_escape_HostBindingHandler($event) {
        return ctx.onEscapeKeyDown($event);
      })("keydown.tab", function EditableColumn_keydown_tab_HostBindingHandler($event) {
        return ctx.onShiftKeyDown($event);
      })("keydown.shift.tab", function EditableColumn_keydown_shift_tab_HostBindingHandler($event) {
        return ctx.onShiftKeyDown($event);
      })("keydown.meta.tab", function EditableColumn_keydown_meta_tab_HostBindingHandler($event) {
        return ctx.onShiftKeyDown($event);
      })("keydown.arrowdown", function EditableColumn_keydown_arrowdown_HostBindingHandler($event) {
        return ctx.onArrowDown($event);
      })("keydown.arrowup", function EditableColumn_keydown_arrowup_HostBindingHandler($event) {
        return ctx.onArrowUp($event);
      })("keydown.arrowleft", function EditableColumn_keydown_arrowleft_HostBindingHandler($event) {
        return ctx.onArrowLeft($event);
      })("keydown.arrowright", function EditableColumn_keydown_arrowright_HostBindingHandler($event) {
        return ctx.onArrowRight($event);
      });
    }
  },
  inputs: {
    data: ["pEditableColumn", "data"],
    field: ["pEditableColumnField", "field"],
    rowIndex: ["pEditableColumnRowIndex", "rowIndex"],
    pEditableColumnDisabled: "pEditableColumnDisabled",
    pFocusCellSelector: "pFocusCellSelector"
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditableColumn, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[pEditableColumn]',
      host: {
        'class': 'p-element'
      }
    }]
  }], function () {
    return [{
      type: Table
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }];
  }, {
    data: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ["pEditableColumn"]
    }],
    field: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ["pEditableColumnField"]
    }],
    rowIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ["pEditableColumnRowIndex"]
    }],
    pEditableColumnDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pFocusCellSelector: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['click', ['$event']]
    }],
    onEnterKeyDown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['keydown.enter', ['$event']]
    }],
    onEscapeKeyDown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['keydown.escape', ['$event']]
    }],
    onShiftKeyDown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['keydown.tab', ['$event']]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['keydown.shift.tab', ['$event']]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['keydown.meta.tab', ['$event']]
    }],
    onArrowDown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['keydown.arrowdown', ['$event']]
    }],
    onArrowUp: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['keydown.arrowup', ['$event']]
    }],
    onArrowLeft: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['keydown.arrowleft', ['$event']]
    }],
    onArrowRight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['keydown.arrowright', ['$event']]
    }]
  });
})();

class EditableRow {
  constructor(el) {
    this.el = el;
  }

  isEnabled() {
    return this.pEditableRowDisabled !== true;
  }

}

EditableRow.ɵfac = function EditableRow_Factory(t) {
  return new (t || EditableRow)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};

EditableRow.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: EditableRow,
  selectors: [["", "pEditableRow", ""]],
  hostAttrs: [1, "p-element"],
  inputs: {
    data: ["pEditableRow", "data"],
    pEditableRowDisabled: "pEditableRowDisabled"
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditableRow, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[pEditableRow]',
      host: {
        'class': 'p-element'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }];
  }, {
    data: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ["pEditableRow"]
    }],
    pEditableRowDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

class InitEditableRow {
  constructor(dt, editableRow) {
    this.dt = dt;
    this.editableRow = editableRow;
  }

  onClick(event) {
    this.dt.initRowEdit(this.editableRow.data);
    event.preventDefault();
  }

}

InitEditableRow.ɵfac = function InitEditableRow_Factory(t) {
  return new (t || InitEditableRow)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Table), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](EditableRow));
};

InitEditableRow.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: InitEditableRow,
  selectors: [["", "pInitEditableRow", ""]],
  hostAttrs: [1, "p-element"],
  hostBindings: function InitEditableRow_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InitEditableRow_click_HostBindingHandler($event) {
        return ctx.onClick($event);
      });
    }
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InitEditableRow, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[pInitEditableRow]',
      host: {
        'class': 'p-element'
      }
    }]
  }], function () {
    return [{
      type: Table
    }, {
      type: EditableRow
    }];
  }, {
    onClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['click', ['$event']]
    }]
  });
})();

class SaveEditableRow {
  constructor(dt, editableRow) {
    this.dt = dt;
    this.editableRow = editableRow;
  }

  onClick(event) {
    this.dt.saveRowEdit(this.editableRow.data, this.editableRow.el.nativeElement);
    event.preventDefault();
  }

}

SaveEditableRow.ɵfac = function SaveEditableRow_Factory(t) {
  return new (t || SaveEditableRow)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Table), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](EditableRow));
};

SaveEditableRow.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: SaveEditableRow,
  selectors: [["", "pSaveEditableRow", ""]],
  hostAttrs: [1, "p-element"],
  hostBindings: function SaveEditableRow_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SaveEditableRow_click_HostBindingHandler($event) {
        return ctx.onClick($event);
      });
    }
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SaveEditableRow, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[pSaveEditableRow]',
      host: {
        'class': 'p-element'
      }
    }]
  }], function () {
    return [{
      type: Table
    }, {
      type: EditableRow
    }];
  }, {
    onClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['click', ['$event']]
    }]
  });
})();

class CancelEditableRow {
  constructor(dt, editableRow) {
    this.dt = dt;
    this.editableRow = editableRow;
  }

  onClick(event) {
    this.dt.cancelRowEdit(this.editableRow.data);
    event.preventDefault();
  }

}

CancelEditableRow.ɵfac = function CancelEditableRow_Factory(t) {
  return new (t || CancelEditableRow)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Table), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](EditableRow));
};

CancelEditableRow.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: CancelEditableRow,
  selectors: [["", "pCancelEditableRow", ""]],
  hostAttrs: [1, "p-element"],
  hostBindings: function CancelEditableRow_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CancelEditableRow_click_HostBindingHandler($event) {
        return ctx.onClick($event);
      });
    }
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CancelEditableRow, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[pCancelEditableRow]',
      host: {
        'class': 'p-element'
      }
    }]
  }], function () {
    return [{
      type: Table
    }, {
      type: EditableRow
    }];
  }, {
    onClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['click', ['$event']]
    }]
  });
})();

class CellEditor {
  constructor(dt, editableColumn, editableRow) {
    this.dt = dt;
    this.editableColumn = editableColumn;
    this.editableRow = editableRow;
  }

  ngAfterContentInit() {
    this.templates.forEach(item => {
      switch (item.getType()) {
        case 'input':
          this.inputTemplate = item.template;
          break;

        case 'output':
          this.outputTemplate = item.template;
          break;
      }
    });
  }

  get editing() {
    return this.dt.editingCell && this.editableColumn && this.dt.editingCell === this.editableColumn.el.nativeElement || this.editableRow && this.dt.editMode === 'row' && this.dt.isRowEditing(this.editableRow.data);
  }

}

CellEditor.ɵfac = function CellEditor_Factory(t) {
  return new (t || CellEditor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Table), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](EditableColumn, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](EditableRow, 8));
};

CellEditor.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: CellEditor,
  selectors: [["p-cellEditor"]],
  contentQueries: function CellEditor_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate, 4);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
    }
  },
  hostAttrs: [1, "p-element"],
  decls: 2,
  vars: 2,
  consts: [[4, "ngIf"], [4, "ngTemplateOutlet"]],
  template: function CellEditor_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CellEditor_ng_container_0_Template, 2, 1, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CellEditor_ng_container_1_Template, 2, 1, "ng-container", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editing);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.editing);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgTemplateOutlet],
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CellEditor, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'p-cellEditor',
      template: `
        <ng-container *ngIf="editing">
            <ng-container *ngTemplateOutlet="inputTemplate"></ng-container>
        </ng-container>
        <ng-container *ngIf="!editing">
            <ng-container *ngTemplateOutlet="outputTemplate"></ng-container>
        </ng-container>
    `,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        'class': 'p-element'
      }
    }]
  }], function () {
    return [{
      type: Table
    }, {
      type: EditableColumn,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: EditableRow,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }];
  }, {
    templates: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate]
    }]
  });
})();

class TableRadioButton {
  constructor(dt, tableService, cd) {
    this.dt = dt;
    this.tableService = tableService;
    this.cd = cd;
    this.subscription = this.dt.tableService.selectionSource$.subscribe(() => {
      this.checked = this.dt.isSelected(this.value);
      this.cd.markForCheck();
    });
  }

  ngOnInit() {
    this.checked = this.dt.isSelected(this.value);
  }

  onClick(event) {
    if (!this.disabled) {
      this.dt.toggleRowWithRadio({
        originalEvent: event,
        rowIndex: this.index
      }, this.value);
    }

    primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.clearSelection();
  }

  onFocus() {
    this.focused = true;
  }

  onBlur() {
    this.focused = false;
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}

TableRadioButton.ɵfac = function TableRadioButton_Factory(t) {
  return new (t || TableRadioButton)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Table), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TableService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
};

TableRadioButton.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: TableRadioButton,
  selectors: [["p-tableRadioButton"]],
  hostAttrs: [1, "p-element"],
  inputs: {
    disabled: "disabled",
    value: "value",
    index: "index",
    inputId: "inputId",
    name: "name",
    ariaLabel: "ariaLabel"
  },
  decls: 6,
  vars: 15,
  consts: [[1, "p-radiobutton", "p-component", 3, "ngClass", "click"], [1, "p-hidden-accessible"], ["type", "radio", 3, "checked", "disabled", "focus", "blur"], ["role", "radio", 3, "ngClass"], ["box", ""], [1, "p-radiobutton-icon"]],
  template: function TableRadioButton_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableRadioButton_Template_div_click_0_listener($event) {
        return ctx.onClick($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1)(2, "input", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function TableRadioButton_Template_input_focus_2_listener() {
        return ctx.onFocus();
      })("blur", function TableRadioButton_Template_input_blur_2_listener() {
        return ctx.onBlur();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](8, _c17, ctx.focused, ctx.disabled));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.checked)("disabled", ctx.disabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.inputId)("name", ctx.name)("aria-label", ctx.ariaLabel);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](11, _c18, ctx.checked, ctx.focused, ctx.disabled));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-checked", ctx.checked);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableRadioButton, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'p-tableRadioButton',
      template: `
        <div class="p-radiobutton p-component" [ngClass]="{'p-radiobutton-focused':focused, 'p-radiobutton-disabled': disabled}" (click)="onClick($event)">
            <div class="p-hidden-accessible">
                <input type="radio" [attr.id]="inputId" [attr.name]="name" [checked]="checked" (focus)="onFocus()" (blur)="onBlur()"
                [disabled]="disabled" [attr.aria-label]="ariaLabel">
            </div>
            <div #box [ngClass]="{'p-radiobutton-box p-component':true, 'p-highlight':checked, 'p-focus':focused, 'p-disabled':disabled}" role="radio" [attr.aria-checked]="checked">
                <div class="p-radiobutton-icon"></div>
            </div>
        </div>
    `,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        'class': 'p-element'
      }
    }]
  }], function () {
    return [{
      type: Table
    }, {
      type: TableService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }];
  }, {
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    index: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    inputId: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    ariaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

class TableCheckbox {
  constructor(dt, tableService, cd) {
    this.dt = dt;
    this.tableService = tableService;
    this.cd = cd;
    this.subscription = this.dt.tableService.selectionSource$.subscribe(() => {
      this.checked = this.dt.isSelected(this.value);
      this.cd.markForCheck();
    });
  }

  ngOnInit() {
    this.checked = this.dt.isSelected(this.value);
  }

  onClick(event) {
    if (!this.disabled) {
      this.dt.toggleRowWithCheckbox({
        originalEvent: event,
        rowIndex: this.index
      }, this.value);
    }

    primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.clearSelection();
  }

  onFocus() {
    this.focused = true;
  }

  onBlur() {
    this.focused = false;
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}

TableCheckbox.ɵfac = function TableCheckbox_Factory(t) {
  return new (t || TableCheckbox)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Table), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TableService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
};

TableCheckbox.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: TableCheckbox,
  selectors: [["p-tableCheckbox"]],
  hostAttrs: [1, "p-element"],
  inputs: {
    disabled: "disabled",
    value: "value",
    index: "index",
    inputId: "inputId",
    name: "name",
    required: "required",
    ariaLabel: "ariaLabel"
  },
  decls: 6,
  vars: 19,
  consts: [[1, "p-checkbox", "p-component", 3, "ngClass", "click"], [1, "p-hidden-accessible"], ["type", "checkbox", 3, "checked", "disabled", "focus", "blur"], ["role", "checkbox", 3, "ngClass"], ["box", ""], [1, "p-checkbox-icon", 3, "ngClass"]],
  template: function TableCheckbox_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableCheckbox_Template_div_click_0_listener($event) {
        return ctx.onClick($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1)(2, "input", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function TableCheckbox_Template_input_focus_2_listener() {
        return ctx.onFocus();
      })("blur", function TableCheckbox_Template_input_blur_2_listener() {
        return ctx.onBlur();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](10, _c19, ctx.focused, ctx.disabled));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.checked)("disabled", ctx.disabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.inputId)("name", ctx.name)("required", ctx.required)("aria-label", ctx.ariaLabel);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](13, _c20, ctx.checked, ctx.focused, ctx.disabled));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-checked", ctx.checked);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c21, ctx.checked));
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableCheckbox, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'p-tableCheckbox',
      template: `
        <div class="p-checkbox p-component" [ngClass]="{'p-checkbox-focused':focused, 'p-checkbox-disabled': disabled}" (click)="onClick($event)">
            <div class="p-hidden-accessible">
                <input type="checkbox" [attr.id]="inputId" [attr.name]="name" [checked]="checked" (focus)="onFocus()" (blur)="onBlur()" [disabled]="disabled"
                [attr.required]="required" [attr.aria-label]="ariaLabel">
            </div>
            <div #box [ngClass]="{'p-checkbox-box p-component':true,
                'p-highlight':checked, 'p-focus':focused, 'p-disabled':disabled}" role="checkbox" [attr.aria-checked]="checked">
                <span class="p-checkbox-icon" [ngClass]="{'pi pi-check':checked}"></span>
            </div>
        </div>
    `,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        'class': 'p-element'
      }
    }]
  }], function () {
    return [{
      type: Table
    }, {
      type: TableService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }];
  }, {
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    index: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    inputId: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    required: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    ariaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

class TableHeaderCheckbox {
  constructor(dt, tableService, cd) {
    this.dt = dt;
    this.tableService = tableService;
    this.cd = cd;
    this.valueChangeSubscription = this.dt.tableService.valueSource$.subscribe(() => {
      this.checked = this.updateCheckedState();
    });
    this.selectionChangeSubscription = this.dt.tableService.selectionSource$.subscribe(() => {
      this.checked = this.updateCheckedState();
    });
  }

  ngOnInit() {
    this.checked = this.updateCheckedState();
  }

  onClick(event) {
    if (!this.disabled) {
      if (this.dt.value && this.dt.value.length > 0) {
        this.dt.toggleRowsWithCheckbox(event, !this.checked);
      }
    }

    primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.clearSelection();
  }

  onFocus() {
    this.focused = true;
  }

  onBlur() {
    this.focused = false;
  }

  isDisabled() {
    return this.disabled || !this.dt.value || !this.dt.value.length;
  }

  ngOnDestroy() {
    if (this.selectionChangeSubscription) {
      this.selectionChangeSubscription.unsubscribe();
    }

    if (this.valueChangeSubscription) {
      this.valueChangeSubscription.unsubscribe();
    }
  }

  updateCheckedState() {
    this.cd.markForCheck();

    if (this.dt._selectAll !== null) {
      return this.dt._selectAll;
    } else {
      const data = this.dt.selectionPageOnly ? this.dt.dataToRender : this.dt.filteredValue || this.dt.value || [];
      const val = this.dt.frozenValue ? [...this.dt.frozenValue, ...data] : data;
      const selectableVal = this.dt.rowSelectable ? val.filter((data, index) => this.dt.rowSelectable({
        data,
        index
      })) : val;
      return primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.isNotEmpty(selectableVal) && primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.isNotEmpty(this.dt.selection) && selectableVal.every(v => this.dt.selection.some(s => this.dt.equals(v, s)));
    }
  }

}

TableHeaderCheckbox.ɵfac = function TableHeaderCheckbox_Factory(t) {
  return new (t || TableHeaderCheckbox)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Table), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TableService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
};

TableHeaderCheckbox.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: TableHeaderCheckbox,
  selectors: [["p-tableHeaderCheckbox"]],
  hostAttrs: [1, "p-element"],
  inputs: {
    disabled: "disabled",
    inputId: "inputId",
    name: "name",
    ariaLabel: "ariaLabel"
  },
  decls: 7,
  vars: 18,
  consts: [[1, "p-checkbox", "p-component", 3, "ngClass", "click"], [1, "p-hidden-accessible"], ["type", "checkbox", 3, "checked", "disabled", "focus", "blur"], ["cb", ""], ["role", "checkbox", 3, "ngClass"], ["box", ""], [1, "p-checkbox-icon", 3, "ngClass"]],
  template: function TableHeaderCheckbox_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableHeaderCheckbox_Template_div_click_0_listener($event) {
        return ctx.onClick($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1)(2, "input", 2, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function TableHeaderCheckbox_Template_input_focus_2_listener() {
        return ctx.onFocus();
      })("blur", function TableHeaderCheckbox_Template_input_blur_2_listener() {
        return ctx.onBlur();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](9, _c19, ctx.focused, ctx.isDisabled()));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.checked)("disabled", ctx.isDisabled());
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.inputId)("name", ctx.name)("aria-label", ctx.ariaLabel);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](12, _c22, ctx.checked, ctx.focused, ctx.isDisabled()));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-checked", ctx.checked);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c21, ctx.checked));
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableHeaderCheckbox, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'p-tableHeaderCheckbox',
      template: `
        <div class="p-checkbox p-component" [ngClass]="{'p-checkbox-focused':focused, 'p-checkbox-disabled': isDisabled()}" (click)="onClick($event)">
            <div class="p-hidden-accessible">
                <input #cb type="checkbox" [attr.id]="inputId" [attr.name]="name" [checked]="checked" (focus)="onFocus()" (blur)="onBlur()"
                [disabled]="isDisabled()" [attr.aria-label]="ariaLabel">
            </div>
            <div #box [ngClass]="{'p-checkbox-box':true,
                'p-highlight':checked, 'p-focus':focused, 'p-disabled': isDisabled()}" role="checkbox" [attr.aria-checked]="checked">
                <span class="p-checkbox-icon" [ngClass]="{'pi pi-check':checked}"></span>
            </div>
        </div>
    `,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        'class': 'p-element'
      }
    }]
  }], function () {
    return [{
      type: Table
    }, {
      type: TableService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }];
  }, {
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    inputId: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    ariaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

class ReorderableRowHandle {
  constructor(el) {
    this.el = el;
  }

  ngAfterViewInit() {
    primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.addClass(this.el.nativeElement, 'p-datatable-reorderablerow-handle');
  }

}

ReorderableRowHandle.ɵfac = function ReorderableRowHandle_Factory(t) {
  return new (t || ReorderableRowHandle)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};

ReorderableRowHandle.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: ReorderableRowHandle,
  selectors: [["", "pReorderableRowHandle", ""]],
  hostAttrs: [1, "p-element"],
  inputs: {
    index: ["pReorderableRowHandle", "index"]
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReorderableRowHandle, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[pReorderableRowHandle]',
      host: {
        'class': 'p-element'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }];
  }, {
    index: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ["pReorderableRowHandle"]
    }]
  });
})();

class ReorderableRow {
  constructor(dt, el, zone) {
    this.dt = dt;
    this.el = el;
    this.zone = zone;
  }

  ngAfterViewInit() {
    if (this.isEnabled()) {
      this.el.nativeElement.droppable = true;
      this.bindEvents();
    }
  }

  bindEvents() {
    this.zone.runOutsideAngular(() => {
      this.mouseDownListener = this.onMouseDown.bind(this);
      this.el.nativeElement.addEventListener('mousedown', this.mouseDownListener);
      this.dragStartListener = this.onDragStart.bind(this);
      this.el.nativeElement.addEventListener('dragstart', this.dragStartListener);
      this.dragEndListener = this.onDragEnd.bind(this);
      this.el.nativeElement.addEventListener('dragend', this.dragEndListener);
      this.dragOverListener = this.onDragOver.bind(this);
      this.el.nativeElement.addEventListener('dragover', this.dragOverListener);
      this.dragLeaveListener = this.onDragLeave.bind(this);
      this.el.nativeElement.addEventListener('dragleave', this.dragLeaveListener);
    });
  }

  unbindEvents() {
    if (this.mouseDownListener) {
      document.removeEventListener('mousedown', this.mouseDownListener);
      this.mouseDownListener = null;
    }

    if (this.dragStartListener) {
      document.removeEventListener('dragstart', this.dragStartListener);
      this.dragStartListener = null;
    }

    if (this.dragEndListener) {
      document.removeEventListener('dragend', this.dragEndListener);
      this.dragEndListener = null;
    }

    if (this.dragOverListener) {
      document.removeEventListener('dragover', this.dragOverListener);
      this.dragOverListener = null;
    }

    if (this.dragLeaveListener) {
      document.removeEventListener('dragleave', this.dragLeaveListener);
      this.dragLeaveListener = null;
    }
  }

  onMouseDown(event) {
    if (primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.hasClass(event.target, 'p-datatable-reorderablerow-handle')) this.el.nativeElement.draggable = true;else this.el.nativeElement.draggable = false;
  }

  onDragStart(event) {
    this.dt.onRowDragStart(event, this.index);
  }

  onDragEnd(event) {
    this.dt.onRowDragEnd(event);
    this.el.nativeElement.draggable = false;
  }

  onDragOver(event) {
    this.dt.onRowDragOver(event, this.index, this.el.nativeElement);
    event.preventDefault();
  }

  onDragLeave(event) {
    this.dt.onRowDragLeave(event, this.el.nativeElement);
  }

  isEnabled() {
    return this.pReorderableRowDisabled !== true;
  }

  onDrop(event) {
    if (this.isEnabled() && this.dt.rowDragging) {
      this.dt.onRowDrop(event, this.el.nativeElement);
    }

    event.preventDefault();
  }

}

ReorderableRow.ɵfac = function ReorderableRow_Factory(t) {
  return new (t || ReorderableRow)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Table), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
};

ReorderableRow.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: ReorderableRow,
  selectors: [["", "pReorderableRow", ""]],
  hostAttrs: [1, "p-element"],
  hostBindings: function ReorderableRow_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function ReorderableRow_drop_HostBindingHandler($event) {
        return ctx.onDrop($event);
      });
    }
  },
  inputs: {
    index: ["pReorderableRow", "index"],
    pReorderableRowDisabled: "pReorderableRowDisabled"
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReorderableRow, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[pReorderableRow]',
      host: {
        'class': 'p-element'
      }
    }]
  }], function () {
    return [{
      type: Table
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }];
  }, {
    index: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ["pReorderableRow"]
    }],
    pReorderableRowDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onDrop: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['drop', ['$event']]
    }]
  });
})();

class ColumnFilterFormElement {
  constructor(dt) {
    this.dt = dt;
    this.useGrouping = true;
  }

  ngOnInit() {
    this.filterCallback = value => {
      this.filterConstraint.value = value;

      this.dt._filter();
    };
  }

  onModelChange(value) {
    this.filterConstraint.value = value;

    if (this.type === 'boolean' || value === '') {
      this.dt._filter();
    }
  }

  onTextInputEnterKeyDown(event) {
    this.dt._filter();

    event.preventDefault();
  }

  onNumericInputKeyDown(event) {
    if (event.key === 'Enter') {
      this.dt._filter();

      event.preventDefault();
    }
  }

}

ColumnFilterFormElement.ɵfac = function ColumnFilterFormElement_Factory(t) {
  return new (t || ColumnFilterFormElement)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Table));
};

ColumnFilterFormElement.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ColumnFilterFormElement,
  selectors: [["p-columnFilterFormElement"]],
  hostAttrs: [1, "p-element"],
  inputs: {
    field: "field",
    type: "type",
    filterConstraint: "filterConstraint",
    filterTemplate: "filterTemplate",
    placeholder: "placeholder",
    minFractionDigits: "minFractionDigits",
    maxFractionDigits: "maxFractionDigits",
    prefix: "prefix",
    suffix: "suffix",
    locale: "locale",
    localeMatcher: "localeMatcher",
    currency: "currency",
    currencyDisplay: "currencyDisplay",
    useGrouping: "useGrouping"
  },
  decls: 3,
  vars: 2,
  consts: [[4, "ngIf", "ngIfElse"], ["builtInElement", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngSwitch"], ["type", "text", "pInputText", "", 3, "value", "input", "keydown.enter", 4, "ngSwitchCase"], [3, "ngModel", "showButtons", "minFractionDigits", "maxFractionDigits", "prefix", "suffix", "placeholder", "mode", "locale", "localeMatcher", "currency", "currencyDisplay", "useGrouping", "ngModelChange", "onKeyDown", 4, "ngSwitchCase"], [3, "ngModel", "ngModelChange", 4, "ngSwitchCase"], [3, "placeholder", "ngModel", "ngModelChange", 4, "ngSwitchCase"], ["type", "text", "pInputText", "", 3, "value", "input", "keydown.enter"], [3, "ngModel", "showButtons", "minFractionDigits", "maxFractionDigits", "prefix", "suffix", "placeholder", "mode", "locale", "localeMatcher", "currency", "currencyDisplay", "useGrouping", "ngModelChange", "onKeyDown"], [3, "ngModel", "ngModelChange"], [3, "placeholder", "ngModel", "ngModelChange"]],
  template: function ColumnFilterFormElement_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ColumnFilterFormElement_ng_container_0_Template, 2, 5, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ColumnFilterFormElement_ng_template_1_Template, 5, 5, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    }

    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filterTemplate)("ngIfElse", _r1);
    }
  },
  directives: [primeng_inputnumber__WEBPACK_IMPORTED_MODULE_8__.InputNumber, primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_9__.TriStateCheckbox, primeng_calendar__WEBPACK_IMPORTED_MODULE_10__.Calendar, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgSwitchCase, primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__.InputText, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel],
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ColumnFilterFormElement, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'p-columnFilterFormElement',
      template: `
        <ng-container *ngIf="filterTemplate; else builtInElement">
            <ng-container *ngTemplateOutlet="filterTemplate; context: {$implicit: filterConstraint.value, filterCallback: filterCallback}"></ng-container>
        </ng-container>
        <ng-template #builtInElement>
            <ng-container [ngSwitch]="type">
                <input *ngSwitchCase="'text'" type="text" pInputText [value]="filterConstraint?.value" (input)="onModelChange($event.target.value)"
                    (keydown.enter)="onTextInputEnterKeyDown($event)" [attr.placeholder]="placeholder">
                <p-inputNumber *ngSwitchCase="'numeric'" [ngModel]="filterConstraint?.value" (ngModelChange)="onModelChange($event)" (onKeyDown)="onNumericInputKeyDown($event)" [showButtons]="true"
                    [minFractionDigits]="minFractionDigits" [maxFractionDigits]="maxFractionDigits" [prefix]="prefix" [suffix]="suffix" [placeholder]="placeholder"
                    [mode]="currency ? 'currency' : 'decimal'" [locale]="locale" [localeMatcher]="localeMatcher" [currency]="currency" [currencyDisplay]="currencyDisplay" [useGrouping]="useGrouping"></p-inputNumber>
                <p-triStateCheckbox *ngSwitchCase="'boolean'" [ngModel]="filterConstraint?.value" (ngModelChange)="onModelChange($event)"></p-triStateCheckbox>
                <p-calendar *ngSwitchCase="'date'" [placeholder]="placeholder" [ngModel]="filterConstraint?.value" (ngModelChange)="onModelChange($event)"></p-calendar>
            </ng-container>
        </ng-template>
    `,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        'class': 'p-element'
      }
    }]
  }], function () {
    return [{
      type: Table
    }];
  }, {
    field: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    type: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    filterConstraint: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    filterTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    placeholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    minFractionDigits: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    maxFractionDigits: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    prefix: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    suffix: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    locale: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    localeMatcher: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    currency: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    currencyDisplay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    useGrouping: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

class ColumnFilter {
  constructor(el, dt, renderer, config, overlayService) {
    this.el = el;
    this.dt = dt;
    this.renderer = renderer;
    this.config = config;
    this.overlayService = overlayService;
    this.type = 'text';
    this.display = 'row';
    this.showMenu = true;
    this.operator = primeng_api__WEBPACK_IMPORTED_MODULE_4__.FilterOperator.AND;
    this.showOperator = true;
    this.showClearButton = true;
    this.showApplyButton = true;
    this.showMatchModes = true;
    this.showAddButton = true;
    this.hideOnClear = false;
    this.maxConstraints = 2;
    this.useGrouping = true;
  }

  ngOnInit() {
    if (!this.dt.filters[this.field]) {
      this.initFieldFilterConstraint();
    }

    this.translationSubscription = this.config.translationObserver.subscribe(() => {
      this.generateMatchModeOptions();
      this.generateOperatorOptions();
    });
    this.resetSubscription = this.dt.tableService.resetSource$.subscribe(() => {
      this.initFieldFilterConstraint();
    });
    this.generateMatchModeOptions();
    this.generateOperatorOptions();
  }

  generateMatchModeOptions() {
    var _a;

    this.matchModes = this.matchModeOptions || ((_a = this.config.filterMatchModeOptions[this.type]) === null || _a === void 0 ? void 0 : _a.map(key => {
      return {
        label: this.config.getTranslation(key),
        value: key
      };
    }));
  }

  generateOperatorOptions() {
    this.operatorOptions = [{
      label: this.config.getTranslation(primeng_api__WEBPACK_IMPORTED_MODULE_4__.TranslationKeys.MATCH_ALL),
      value: primeng_api__WEBPACK_IMPORTED_MODULE_4__.FilterOperator.AND
    }, {
      label: this.config.getTranslation(primeng_api__WEBPACK_IMPORTED_MODULE_4__.TranslationKeys.MATCH_ANY),
      value: primeng_api__WEBPACK_IMPORTED_MODULE_4__.FilterOperator.OR
    }];
  }

  ngAfterContentInit() {
    this.templates.forEach(item => {
      switch (item.getType()) {
        case 'header':
          this.headerTemplate = item.template;
          break;

        case 'filter':
          this.filterTemplate = item.template;
          break;

        case 'footer':
          this.footerTemplate = item.template;
          break;

        default:
          this.filterTemplate = item.template;
          break;
      }
    });
  }

  initFieldFilterConstraint() {
    let defaultMatchMode = this.getDefaultMatchMode();
    this.dt.filters[this.field] = this.display == 'row' ? {
      value: null,
      matchMode: defaultMatchMode
    } : [{
      value: null,
      matchMode: defaultMatchMode,
      operator: this.operator
    }];
  }

  onMenuMatchModeChange(value, filterMeta) {
    filterMeta.matchMode = value;

    if (!this.showApplyButton) {
      this.dt._filter();
    }
  }

  onRowMatchModeChange(matchMode) {
    this.dt.filters[this.field].matchMode = matchMode;

    this.dt._filter();

    this.hide();
  }

  onRowMatchModeKeyDown(event) {
    let item = event.target;

    switch (event.key) {
      case 'ArrowDown':
        var nextItem = this.findNextItem(item);

        if (nextItem) {
          item.removeAttribute('tabindex');
          nextItem.tabIndex = '0';
          nextItem.focus();
        }

        event.preventDefault();
        break;

      case 'ArrowUp':
        var prevItem = this.findPrevItem(item);

        if (prevItem) {
          item.removeAttribute('tabindex');
          prevItem.tabIndex = '0';
          prevItem.focus();
        }

        event.preventDefault();
        break;
    }
  }

  onRowClearItemClick() {
    this.clearFilter();
    this.hide();
  }

  isRowMatchModeSelected(matchMode) {
    return this.dt.filters[this.field].matchMode === matchMode;
  }

  addConstraint() {
    this.dt.filters[this.field].push({
      value: null,
      matchMode: this.getDefaultMatchMode(),
      operator: this.getDefaultOperator()
    });

    this.dt._filter();
  }

  removeConstraint(filterMeta) {
    this.dt.filters[this.field] = this.dt.filters[this.field].filter(meta => meta !== filterMeta);

    this.dt._filter();
  }

  onOperatorChange(value) {
    this.dt.filters[this.field].forEach(filterMeta => {
      filterMeta.operator = value;
      this.operator = value;
    });

    if (!this.showApplyButton) {
      this.dt._filter();
    }
  }

  toggleMenu() {
    this.overlayVisible = !this.overlayVisible;
  }

  onToggleButtonKeyDown(event) {
    switch (event.key) {
      case 'Escape':
      case 'Tab':
        this.overlayVisible = false;
        break;

      case 'ArrowDown':
        if (this.overlayVisible) {
          let focusable = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getFocusableElements(this.overlay);

          if (focusable) {
            focusable[0].focus();
          }

          event.preventDefault();
        } else if (event.altKey) {
          this.overlayVisible = true;
          event.preventDefault();
        }

        break;
    }
  }

  onEscape() {
    this.overlayVisible = false;
    this.icon.nativeElement.focus();
  }

  findNextItem(item) {
    let nextItem = item.nextElementSibling;
    if (nextItem) return primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.hasClass(nextItem, 'p-column-filter-separator') ? this.findNextItem(nextItem) : nextItem;else return item.parentElement.firstElementChild;
  }

  findPrevItem(item) {
    let prevItem = item.previousElementSibling;
    if (prevItem) return primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.hasClass(prevItem, 'p-column-filter-separator') ? this.findPrevItem(prevItem) : prevItem;else return item.parentElement.lastElementChild;
  }

  onContentClick() {
    this.selfClick = true;
  }

  onOverlayAnimationStart(event) {
    switch (event.toState) {
      case 'visible':
        this.overlay = event.element;
        document.body.appendChild(this.overlay);
        primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ZIndexUtils.set('overlay', this.overlay, this.config.zIndex.overlay);
        primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.absolutePosition(this.overlay, this.icon.nativeElement);
        this.bindDocumentClickListener();
        this.bindDocumentResizeListener();
        this.bindScrollListener();

        this.overlayEventListener = e => {
          if (this.overlay && this.overlay.contains(e.target)) {
            this.selfClick = true;
          }
        };

        this.overlaySubscription = this.overlayService.clickObservable.subscribe(this.overlayEventListener);
        break;

      case 'void':
        this.onOverlayHide();

        if (this.overlaySubscription) {
          this.overlaySubscription.unsubscribe();
        }

        break;
    }
  }

  onOverlayAnimationEnd(event) {
    switch (event.toState) {
      case 'void':
        primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ZIndexUtils.clear(event.element);
        break;
    }
  }

  getDefaultMatchMode() {
    if (this.matchMode) {
      return this.matchMode;
    } else {
      if (this.type === 'text') return primeng_api__WEBPACK_IMPORTED_MODULE_4__.FilterMatchMode.STARTS_WITH;else if (this.type === 'numeric') return primeng_api__WEBPACK_IMPORTED_MODULE_4__.FilterMatchMode.EQUALS;else if (this.type === 'date') return primeng_api__WEBPACK_IMPORTED_MODULE_4__.FilterMatchMode.DATE_IS;else return primeng_api__WEBPACK_IMPORTED_MODULE_4__.FilterMatchMode.CONTAINS;
    }
  }

  getDefaultOperator() {
    return this.dt.filters ? this.dt.filters[this.field][0].operator : this.operator;
  }

  hasRowFilter() {
    return this.dt.filters[this.field] && !this.dt.isFilterBlank(this.dt.filters[this.field].value);
  }

  get fieldConstraints() {
    return this.dt.filters ? this.dt.filters[this.field] : null;
  }

  get showRemoveIcon() {
    return this.fieldConstraints ? this.fieldConstraints.length > 1 : false;
  }

  get showMenuButton() {
    return this.showMenu && (this.display === 'row' ? this.type !== 'boolean' : true);
  }

  get isShowOperator() {
    return this.showOperator && this.type !== 'boolean';
  }

  get isShowAddConstraint() {
    return this.showAddButton && this.type !== 'boolean' && this.fieldConstraints && this.fieldConstraints.length < this.maxConstraints;
  }

  get applyButtonLabel() {
    return this.config.getTranslation(primeng_api__WEBPACK_IMPORTED_MODULE_4__.TranslationKeys.APPLY);
  }

  get clearButtonLabel() {
    return this.config.getTranslation(primeng_api__WEBPACK_IMPORTED_MODULE_4__.TranslationKeys.CLEAR);
  }

  get addRuleButtonLabel() {
    return this.config.getTranslation(primeng_api__WEBPACK_IMPORTED_MODULE_4__.TranslationKeys.ADD_RULE);
  }

  get removeRuleButtonLabel() {
    return this.config.getTranslation(primeng_api__WEBPACK_IMPORTED_MODULE_4__.TranslationKeys.REMOVE_RULE);
  }

  get noFilterLabel() {
    return this.config.getTranslation(primeng_api__WEBPACK_IMPORTED_MODULE_4__.TranslationKeys.NO_FILTER);
  }

  hasFilter() {
    let fieldFilter = this.dt.filters[this.field];

    if (fieldFilter) {
      if (Array.isArray(fieldFilter)) return !this.dt.isFilterBlank(fieldFilter[0].value);else return !this.dt.isFilterBlank(fieldFilter.value);
    }

    return false;
  }

  isOutsideClicked(event) {
    return !(this.overlay.isSameNode(event.target) || this.overlay.contains(event.target) || this.icon.nativeElement.isSameNode(event.target) || this.icon.nativeElement.contains(event.target) || primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.hasClass(event.target, 'p-column-filter-add-button') || primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.hasClass(event.target.parentElement, 'p-column-filter-add-button') || primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.hasClass(event.target, 'p-column-filter-remove-button') || primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.hasClass(event.target.parentElement, 'p-column-filter-remove-button'));
  }

  bindDocumentClickListener() {
    if (!this.documentClickListener) {
      const documentTarget = this.el ? this.el.nativeElement.ownerDocument : 'document';
      this.documentClickListener = this.renderer.listen(documentTarget, 'mousedown', event => {
        if (this.overlayVisible && !this.selfClick && this.isOutsideClicked(event)) {
          this.hide();
        }

        this.selfClick = false;
      });
    }
  }

  unbindDocumentClickListener() {
    if (this.documentClickListener) {
      this.documentClickListener();
      this.documentClickListener = null;
      this.selfClick = false;
    }
  }

  bindDocumentResizeListener() {
    this.documentResizeListener = () => this.hide();

    window.addEventListener('resize', this.documentResizeListener);
  }

  unbindDocumentResizeListener() {
    if (this.documentResizeListener) {
      window.removeEventListener('resize', this.documentResizeListener);
      this.documentResizeListener = null;
    }
  }

  bindScrollListener() {
    if (!this.scrollHandler) {
      this.scrollHandler = new primeng_dom__WEBPACK_IMPORTED_MODULE_3__.ConnectedOverlayScrollHandler(this.icon.nativeElement, () => {
        if (this.overlayVisible) {
          this.hide();
        }
      });
    }

    this.scrollHandler.bindScrollListener();
  }

  unbindScrollListener() {
    if (this.scrollHandler) {
      this.scrollHandler.unbindScrollListener();
    }
  }

  hide() {
    this.overlayVisible = false;
  }

  onOverlayHide() {
    this.unbindDocumentClickListener();
    this.unbindDocumentResizeListener();
    this.unbindScrollListener();
    this.overlay = null;
  }

  clearFilter() {
    this.initFieldFilterConstraint();

    this.dt._filter();

    if (this.hideOnClear) this.hide();
  }

  applyFilter() {
    this.dt._filter();

    this.hide();
  }

  ngOnDestroy() {
    if (this.overlay) {
      this.el.nativeElement.appendChild(this.overlay);
      primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ZIndexUtils.clear(this.overlay);
      this.onOverlayHide();
    }

    if (this.translationSubscription) {
      this.translationSubscription.unsubscribe();
    }

    if (this.resetSubscription) {
      this.resetSubscription.unsubscribe();
    }

    if (this.overlaySubscription) {
      this.overlaySubscription.unsubscribe();
    }
  }

}

ColumnFilter.ɵfac = function ColumnFilter_Factory(t) {
  return new (t || ColumnFilter)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Table), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeNGConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__.OverlayService));
};

ColumnFilter.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ColumnFilter,
  selectors: [["p-columnFilter"]],
  contentQueries: function ColumnFilter_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate, 4);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
    }
  },
  viewQuery: function ColumnFilter_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c24, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.icon = _t.first);
    }
  },
  hostAttrs: [1, "p-element"],
  inputs: {
    field: "field",
    type: "type",
    display: "display",
    showMenu: "showMenu",
    matchMode: "matchMode",
    operator: "operator",
    showOperator: "showOperator",
    showClearButton: "showClearButton",
    showApplyButton: "showApplyButton",
    showMatchModes: "showMatchModes",
    showAddButton: "showAddButton",
    hideOnClear: "hideOnClear",
    placeholder: "placeholder",
    matchModeOptions: "matchModeOptions",
    maxConstraints: "maxConstraints",
    minFractionDigits: "minFractionDigits",
    maxFractionDigits: "maxFractionDigits",
    prefix: "prefix",
    suffix: "suffix",
    locale: "locale",
    localeMatcher: "localeMatcher",
    currency: "currency",
    currencyDisplay: "currencyDisplay",
    useGrouping: "useGrouping"
  },
  decls: 5,
  vars: 8,
  consts: [[1, "p-column-filter", 3, "ngClass"], ["class", "p-fluid", 3, "type", "field", "filterConstraint", "filterTemplate", "placeholder", "minFractionDigits", "maxFractionDigits", "prefix", "suffix", "locale", "localeMatcher", "currency", "currencyDisplay", "useGrouping", 4, "ngIf"], ["type", "button", "class", "p-column-filter-menu-button p-link", "aria-haspopup", "true", 3, "ngClass", "click", "keydown", 4, "ngIf"], ["type", "button", "class", "p-column-filter-clear-button p-link", 3, "ngClass", "click", 4, "ngIf"], [3, "ngClass", "click", "keydown.escape", 4, "ngIf"], [1, "p-fluid", 3, "type", "field", "filterConstraint", "filterTemplate", "placeholder", "minFractionDigits", "maxFractionDigits", "prefix", "suffix", "locale", "localeMatcher", "currency", "currencyDisplay", "useGrouping"], ["type", "button", "aria-haspopup", "true", 1, "p-column-filter-menu-button", "p-link", 3, "ngClass", "click", "keydown"], ["icon", ""], [1, "pi", "pi-filter-icon", "pi-filter"], ["type", "button", 1, "p-column-filter-clear-button", "p-link", 3, "ngClass", "click"], [1, "pi", "pi-filter-slash"], [3, "ngClass", "click", "keydown.escape"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "p-column-filter-row-items", 4, "ngIf", "ngIfElse"], ["menu", ""], [1, "p-column-filter-row-items"], ["class", "p-column-filter-row-item", 3, "ngClass", "click", "keydown", "keydown.enter", 4, "ngFor", "ngForOf"], [1, "p-column-filter-separator"], [1, "p-column-filter-row-item", 3, "click", "keydown", "keydown.enter"], [1, "p-column-filter-row-item", 3, "ngClass", "click", "keydown", "keydown.enter"], ["class", "p-column-filter-operator", 4, "ngIf"], [1, "p-column-filter-constraints"], ["class", "p-column-filter-constraint", 4, "ngFor", "ngForOf"], ["class", "p-column-filter-add-rule", 4, "ngIf"], [1, "p-column-filter-buttonbar"], ["type", "button", "pButton", "", "class", "p-button-outlined p-button-sm", "pRipple", "", 3, "label", "click", 4, "ngIf"], ["type", "button", "pButton", "", "class", "p-button-sm", "pRipple", "", 3, "label", "click", 4, "ngIf"], [1, "p-column-filter-operator"], ["styleClass", "p-column-filter-operator-dropdown", 3, "options", "ngModel", "ngModelChange"], [1, "p-column-filter-constraint"], ["styleClass", "p-column-filter-matchmode-dropdown", 3, "options", "ngModel", "ngModelChange", 4, "ngIf"], [3, "type", "field", "filterConstraint", "filterTemplate", "placeholder", "minFractionDigits", "maxFractionDigits", "prefix", "suffix", "locale", "localeMatcher", "currency", "currencyDisplay", "useGrouping"], ["type", "button", "pButton", "", "icon", "pi pi-trash", "class", "p-column-filter-remove-button p-button-text p-button-danger p-button-sm", "pRipple", "", 3, "label", "click", 4, "ngIf"], ["styleClass", "p-column-filter-matchmode-dropdown", 3, "options", "ngModel", "ngModelChange"], ["type", "button", "pButton", "", "icon", "pi pi-trash", "pRipple", "", 1, "p-column-filter-remove-button", "p-button-text", "p-button-danger", "p-button-sm", 3, "label", "click"], [1, "p-column-filter-add-rule"], ["type", "button", "pButton", "", "icon", "pi pi-plus", "pRipple", "", 1, "p-column-filter-add-button", "p-button-text", "p-button-sm", 3, "label", "click"], ["type", "button", "pButton", "", "pRipple", "", 1, "p-button-outlined", "p-button-sm", 3, "label", "click"], ["type", "button", "pButton", "", "pRipple", "", 1, "p-button-sm", 3, "label", "click"]],
  template: function ColumnFilter_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ColumnFilter_p_columnFilterFormElement_1_Template, 1, 14, "p-columnFilterFormElement", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ColumnFilter_button_2_Template, 3, 5, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ColumnFilter_button_3_Template, 3, 3, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ColumnFilter_div_4_Template, 6, 14, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c29, ctx.display === "row", ctx.display === "menu"));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.display === "row");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMenuButton);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showClearButton && ctx.display === "row");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMenu && ctx.overlayVisible);
    }
  },
  directives: [ColumnFilterFormElement, primeng_dropdown__WEBPACK_IMPORTED_MODULE_13__.Dropdown, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, primeng_button__WEBPACK_IMPORTED_MODULE_14__.ButtonDirective],
  encapsulation: 2,
  data: {
    animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.trigger)('overlayAnimation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.style)({
      opacity: 0,
      transform: 'scaleY(0.8)'
    }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.animate)('.12s cubic-bezier(0, 0, 0.2, 1)')]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.animate)('.1s linear', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.style)({
      opacity: 0
    }))])])]
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ColumnFilter, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'p-columnFilter',
      template: `
        <div class="p-column-filter" [ngClass]="{'p-column-filter-row': display === 'row', 'p-column-filter-menu': display === 'menu'}">
            <p-columnFilterFormElement *ngIf="display === 'row'" class="p-fluid" [type]="type" [field]="field" [filterConstraint]="dt.filters[field]" [filterTemplate]="filterTemplate" [placeholder]="placeholder" [minFractionDigits]="minFractionDigits" [maxFractionDigits]="maxFractionDigits" [prefix]="prefix" [suffix]="suffix"
                                    [locale]="locale"  [localeMatcher]="localeMatcher" [currency]="currency" [currencyDisplay]="currencyDisplay" [useGrouping]="useGrouping"></p-columnFilterFormElement>
            <button #icon *ngIf="showMenuButton" type="button" class="p-column-filter-menu-button p-link" aria-haspopup="true" [attr.aria-expanded]="overlayVisible"
                [ngClass]="{'p-column-filter-menu-button-open': overlayVisible, 'p-column-filter-menu-button-active': hasFilter()}"
                (click)="toggleMenu()" (keydown)="onToggleButtonKeyDown($event)"><span class="pi pi-filter-icon pi-filter"></span></button>
            <button #icon *ngIf="showClearButton && display === 'row'" [ngClass]="{'p-hidden-space': !hasRowFilter()}" type="button" class="p-column-filter-clear-button p-link" (click)="clearFilter()"><span class="pi pi-filter-slash"></span></button>
            <div *ngIf="showMenu && overlayVisible" [ngClass]="{'p-column-filter-overlay p-component p-fluid': true, 'p-column-filter-overlay-menu': display === 'menu'}" (click)="onContentClick()"
                [@overlayAnimation]="'visible'" (@overlayAnimation.start)="onOverlayAnimationStart($event)" (@overlayAnimation.done)="onOverlayAnimationEnd($event)" (keydown.escape)="onEscape()">
                <ng-container *ngTemplateOutlet="headerTemplate; context: {$implicit: field}"></ng-container>
                <ul *ngIf="display === 'row'; else menu" class="p-column-filter-row-items">
                    <li class="p-column-filter-row-item" *ngFor="let matchMode of matchModes; let i = index;" (click)="onRowMatchModeChange(matchMode.value)" (keydown)="onRowMatchModeKeyDown($event)" (keydown.enter)="this.onRowMatchModeChange(matchMode.value)"
                        [ngClass]="{'p-highlight': isRowMatchModeSelected(matchMode.value)}" [attr.tabindex]="i === 0 ? '0' : null">{{matchMode.label}}</li>
                    <li class="p-column-filter-separator"></li>
                    <li class="p-column-filter-row-item" (click)="onRowClearItemClick()" (keydown)="onRowMatchModeKeyDown($event)" (keydown.enter)="onRowClearItemClick()">{{noFilterLabel}}</li>
                </ul>
                <ng-template #menu>
                    <div class="p-column-filter-operator" *ngIf="isShowOperator">
                        <p-dropdown [options]="operatorOptions" [ngModel]="operator" (ngModelChange)="onOperatorChange($event)" styleClass="p-column-filter-operator-dropdown"></p-dropdown>
                    </div>
                    <div class="p-column-filter-constraints">
                        <div *ngFor="let fieldConstraint of fieldConstraints; let i = index" class="p-column-filter-constraint">
                            <p-dropdown  *ngIf="showMatchModes && matchModes" [options]="matchModes" [ngModel]="fieldConstraint.matchMode" (ngModelChange)="onMenuMatchModeChange($event, fieldConstraint)" styleClass="p-column-filter-matchmode-dropdown"></p-dropdown>
                            <p-columnFilterFormElement [type]="type" [field]="field" [filterConstraint]="fieldConstraint" [filterTemplate]="filterTemplate" [placeholder]="placeholder"
                            [minFractionDigits]="minFractionDigits" [maxFractionDigits]="maxFractionDigits" [prefix]="prefix" [suffix]="suffix"
                            [locale]="locale"  [localeMatcher]="localeMatcher" [currency]="currency" [currencyDisplay]="currencyDisplay" [useGrouping]="useGrouping"></p-columnFilterFormElement>
                            <div>
                                <button *ngIf="showRemoveIcon" type="button" pButton icon="pi pi-trash" class="p-column-filter-remove-button p-button-text p-button-danger p-button-sm" (click)="removeConstraint(fieldConstraint)" pRipple [label]="removeRuleButtonLabel"></button>
                            </div>
                        </div>
                    </div>
                    <div class="p-column-filter-add-rule" *ngIf="isShowAddConstraint">
                        <button type="button" pButton [label]="addRuleButtonLabel" icon="pi pi-plus" class="p-column-filter-add-button p-button-text p-button-sm" (click)="addConstraint()" pRipple></button>
                    </div>
                    <div class="p-column-filter-buttonbar">
                        <button *ngIf="showClearButton" type="button" pButton class="p-button-outlined p-button-sm" (click)="clearFilter()" [label]="clearButtonLabel" pRipple></button>
                        <button *ngIf="showApplyButton" type="button" pButton (click)="applyFilter()" class="p-button-sm" [label]="applyButtonLabel" pRipple></button>
                    </div>
                </ng-template>
                <ng-container *ngTemplateOutlet="footerTemplate; context: {$implicit: field}"></ng-container>
            </div>
        </div>
    `,
      animations: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.trigger)('overlayAnimation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.style)({
        opacity: 0,
        transform: 'scaleY(0.8)'
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.animate)('.12s cubic-bezier(0, 0, 0.2, 1)')]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.animate)('.1s linear', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.style)({
        opacity: 0
      }))])])],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        'class': 'p-element'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: Table
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }, {
      type: primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeNGConfig
    }, {
      type: primeng_api__WEBPACK_IMPORTED_MODULE_4__.OverlayService
    }];
  }, {
    field: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    type: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    display: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showMenu: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    matchMode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    operator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showOperator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showClearButton: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showApplyButton: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showMatchModes: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showAddButton: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    hideOnClear: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    placeholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    matchModeOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    maxConstraints: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    minFractionDigits: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    maxFractionDigits: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    prefix: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    suffix: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    locale: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    localeMatcher: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    currency: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    currencyDisplay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    useGrouping: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    icon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['icon']
    }],
    templates: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate]
    }]
  });
})();

class TableModule {}

TableModule.ɵfac = function TableModule_Factory(t) {
  return new (t || TableModule)();
};

TableModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: TableModule
});
TableModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, primeng_paginator__WEBPACK_IMPORTED_MODULE_6__.PaginatorModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__.InputTextModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_13__.DropdownModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__.ScrollingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, primeng_button__WEBPACK_IMPORTED_MODULE_14__.ButtonModule, primeng_selectbutton__WEBPACK_IMPORTED_MODULE_16__.SelectButtonModule, primeng_calendar__WEBPACK_IMPORTED_MODULE_10__.CalendarModule, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_8__.InputNumberModule, primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_9__.TriStateCheckboxModule], primeng_api__WEBPACK_IMPORTED_MODULE_4__.SharedModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__.ScrollingModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, primeng_paginator__WEBPACK_IMPORTED_MODULE_6__.PaginatorModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__.InputTextModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_13__.DropdownModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__.ScrollingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, primeng_button__WEBPACK_IMPORTED_MODULE_14__.ButtonModule, primeng_selectbutton__WEBPACK_IMPORTED_MODULE_16__.SelectButtonModule, primeng_calendar__WEBPACK_IMPORTED_MODULE_10__.CalendarModule, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_8__.InputNumberModule, primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_9__.TriStateCheckboxModule],
      exports: [Table, primeng_api__WEBPACK_IMPORTED_MODULE_4__.SharedModule, SortableColumn, FrozenColumn, RowGroupHeader, SelectableRow, RowToggler, ContextMenuRow, ResizableColumn, ReorderableColumn, EditableColumn, CellEditor, SortIcon, TableRadioButton, TableCheckbox, TableHeaderCheckbox, ReorderableRowHandle, ReorderableRow, SelectableRowDblClick, EditableRow, InitEditableRow, SaveEditableRow, CancelEditableRow, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__.ScrollingModule, ColumnFilter],
      declarations: [Table, SortableColumn, FrozenColumn, RowGroupHeader, SelectableRow, RowToggler, ContextMenuRow, ResizableColumn, ReorderableColumn, EditableColumn, CellEditor, TableBody, SortIcon, TableRadioButton, TableCheckbox, TableHeaderCheckbox, ReorderableRowHandle, ReorderableRow, SelectableRowDblClick, EditableRow, InitEditableRow, SaveEditableRow, CancelEditableRow, ColumnFilter, ColumnFilterFormElement]
    }]
  }], null, null);
})();
/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 80371:
/*!********************************************************************!*\
  !*** ./node_modules/primeng/fesm2015/primeng-tristatecheckbox.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TRISTATECHECKBOX_VALUE_ACCESSOR": () => (/* binding */ TRISTATECHECKBOX_VALUE_ACCESSOR),
/* harmony export */   "TriStateCheckbox": () => (/* binding */ TriStateCheckbox),
/* harmony export */   "TriStateCheckboxModule": () => (/* binding */ TriStateCheckboxModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 90587);






const _c0 = function (a0, a1, a2) {
  return {
    "p-checkbox-label-active": a0,
    "p-disabled": a1,
    "p-checkbox-label-focus": a2
  };
};

function TriStateCheckbox_label_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TriStateCheckbox_label_6_Template_label_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

      return ctx_r2.onClick($event, _r0);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](3, _c0, ctx_r1.value != null, ctx_r1.disabled, ctx_r1.focused));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("for", ctx_r1.inputId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.label);
  }
}

const _c1 = function (a1, a2) {
  return {
    "p-checkbox p-component": true,
    "p-checkbox-disabled": a1,
    "p-checkbox-focused": a2
  };
};

const _c2 = function (a0, a1, a2) {
  return {
    "p-highlight": a0,
    "p-disabled": a1,
    "p-focus": a2
  };
};

const TRISTATECHECKBOX_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => TriStateCheckbox),
  multi: true
};

class TriStateCheckbox {
  constructor(cd) {
    this.cd = cd;
    this.checkboxTrueIcon = 'pi pi-check';
    this.checkboxFalseIcon = 'pi pi-times';
    this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();

    this.onModelChange = () => {};

    this.onModelTouched = () => {};
  }

  onClick(event, input) {
    if (!this.disabled && !this.readonly) {
      this.toggle(event);
      this.focused = true;
      input.focus();
    }
  }

  onKeydown(event) {
    if (event.keyCode == 32) {
      event.preventDefault();
    }
  }

  onKeyup(event) {
    if (event.keyCode == 32 && !this.readonly) {
      this.toggle(event);
      event.preventDefault();
    }
  }

  toggle(event) {
    if (this.value == null || this.value == undefined) this.value = true;else if (this.value == true) this.value = false;else if (this.value == false) this.value = null;
    this.onModelChange(this.value);
    this.onChange.emit({
      originalEvent: event,
      value: this.value
    });
  }

  onFocus() {
    this.focused = true;
  }

  onBlur() {
    this.focused = false;
    this.onModelTouched();
  }

  registerOnChange(fn) {
    this.onModelChange = fn;
  }

  registerOnTouched(fn) {
    this.onModelTouched = fn;
  }

  writeValue(value) {
    this.value = value;
    this.cd.markForCheck();
  }

  setDisabledState(disabled) {
    this.disabled = disabled;
    this.cd.markForCheck();
  }

}

TriStateCheckbox.ɵfac = function TriStateCheckbox_Factory(t) {
  return new (t || TriStateCheckbox)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
};

TriStateCheckbox.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: TriStateCheckbox,
  selectors: [["p-triStateCheckbox"]],
  hostAttrs: [1, "p-element"],
  inputs: {
    disabled: "disabled",
    name: "name",
    ariaLabelledBy: "ariaLabelledBy",
    tabindex: "tabindex",
    inputId: "inputId",
    style: "style",
    styleClass: "styleClass",
    label: "label",
    readonly: "readonly",
    checkboxTrueIcon: "checkboxTrueIcon",
    checkboxFalseIcon: "checkboxFalseIcon"
  },
  outputs: {
    onChange: "onChange"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([TRISTATECHECKBOX_VALUE_ACCESSOR])],
  decls: 7,
  vars: 21,
  consts: [[3, "ngStyle", "ngClass"], [1, "p-hidden-accessible"], ["type", "text", "inputmode", "none", 3, "name", "readonly", "disabled", "keyup", "keydown", "focus", "blur"], ["input", ""], ["role", "checkbox", 1, "p-checkbox-box", 3, "ngClass", "click"], [1, "p-checkbox-icon", 3, "ngClass"], ["class", "p-checkbox-label", 3, "ngClass", "click", 4, "ngIf"], [1, "p-checkbox-label", 3, "ngClass", "click"]],
  template: function TriStateCheckbox_Template(rf, ctx) {
    if (rf & 1) {
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "input", 2, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function TriStateCheckbox_Template_input_keyup_2_listener($event) {
        return ctx.onKeyup($event);
      })("keydown", function TriStateCheckbox_Template_input_keydown_2_listener($event) {
        return ctx.onKeydown($event);
      })("focus", function TriStateCheckbox_Template_input_focus_2_listener() {
        return ctx.onFocus();
      })("blur", function TriStateCheckbox_Template_input_blur_2_listener() {
        return ctx.onBlur();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TriStateCheckbox_Template_div_click_4_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

        return ctx.onClick($event, _r0);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TriStateCheckbox_label_6_Template, 2, 7, "label", 6);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.style)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](14, _c1, ctx.disabled, ctx.focused));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx.name)("readonly", ctx.readonly)("disabled", ctx.disabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.inputId)("tabindex", ctx.tabindex)("aria-labelledby", ctx.ariaLabelledBy);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](17, _c2, ctx.value != null, ctx.disabled, ctx.focused));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-checked", ctx.value === true);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.value === true ? ctx.checkboxTrueIcon : ctx.value === false ? ctx.checkboxFalseIcon : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.label);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TriStateCheckbox, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'p-triStateCheckbox',
      template: `
        <div [ngStyle]="style" [ngClass]="{'p-checkbox p-component': true,'p-checkbox-disabled': disabled, 'p-checkbox-focused': focused}" [class]="styleClass">
            <div class="p-hidden-accessible">
                <input #input type="text" [attr.id]="inputId" [name]="name" [attr.tabindex]="tabindex" [readonly]="readonly" [disabled]="disabled" (keyup)="onKeyup($event)" (keydown)="onKeydown($event)" (focus)="onFocus()" (blur)="onBlur()" [attr.aria-labelledby]="ariaLabelledBy" inputmode="none">
            </div>
            <div class="p-checkbox-box" (click)="onClick($event,input)"  role="checkbox" [attr.aria-checked]="value === true"
                [ngClass]="{'p-highlight':value!=null,'p-disabled':disabled,'p-focus':focused}">
                <span class="p-checkbox-icon" [ngClass]="value === true ? checkboxTrueIcon : value === false ? checkboxFalseIcon : ''"></span>
            </div>
        </div>
        <label class="p-checkbox-label" (click)="onClick($event,input)"
               [ngClass]="{'p-checkbox-label-active':value!=null, 'p-disabled':disabled, 'p-checkbox-label-focus':focused}"
               *ngIf="label" [attr.for]="inputId">{{label}}</label>
    `,
      providers: [TRISTATECHECKBOX_VALUE_ACCESSOR],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        'class': 'p-element'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }];
  }, {
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    ariaLabelledBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    tabindex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    inputId: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    style: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    styleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    label: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    readonly: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    checkboxTrueIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    checkboxFalseIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();

class TriStateCheckboxModule {}

TriStateCheckboxModule.ɵfac = function TriStateCheckboxModule_Factory(t) {
  return new (t || TriStateCheckboxModule)();
};

TriStateCheckboxModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: TriStateCheckboxModule
});
TriStateCheckboxModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TriStateCheckboxModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
      exports: [TriStateCheckbox],
      declarations: [TriStateCheckbox]
    }]
  }], null, null);
})();
/**
 * Generated bundle index. Do not edit.
 */




/***/ })

}]);
//# sourceMappingURL=src_app_modules_provider_modules_order_order_module_ts.js.map