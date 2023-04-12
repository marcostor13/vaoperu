"use strict";
(self["webpackChunkfront"] = self["webpackChunkfront"] || []).push([["src_app_modules_provider_modules_dashboard_dashboard_module_ts"],{

/***/ 50552:
/*!********************************************************************************!*\
  !*** ./src/app/modules/provider/modules/dashboard/dashboard-routing.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardRoutingModule": () => (/* binding */ DashboardRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component */ 89801);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent
    }
];
class DashboardRoutingModule {
}
DashboardRoutingModule.ɵfac = function DashboardRoutingModule_Factory(t) { return new (t || DashboardRoutingModule)(); };
DashboardRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DashboardRoutingModule });
DashboardRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DashboardRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 89801:
/*!***************************************************************************!*\
  !*** ./src/app/modules/provider/modules/dashboard/dashboard.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _components_menu_provider_menu_provider_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/menu-provider/menu-provider.component */ 39493);
/* harmony import */ var _components_header_provider_header_provider_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/header-provider/header-provider.component */ 10756);



class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
DashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 35, vars: 0, consts: [[1, "row", "m-0"], [1, "d-none", "d-md-flex"], [1, "flex-1"], [1, "p-5"], [1, "line", "mt-3"], [1, "mt-5", "d-flex", "w-100"], ["type", "date"], ["type", "date", 1, "ml-md-5"], [1, "mt-5"], [1, "d-flex", "mt-4"], [1, "rounded-left", "w-100", "bg-color1", "p-2", "p-md-5", "text-white", "text-center"], [1, "font-300"], [1, "bold"], [1, "rounded-right", "w-100", "border-2", "border-left", "bg-color1", "p-2", "p-md-5", "text-white", "text-center"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-menu-provider", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-header-provider");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3)(5, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "hr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "input", 6)(10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Vistas por d\u00EDa");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 9)(14, "div", 10)(15, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Vistas");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "h1", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 13)(20, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Llamadas");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "h1", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 9)(25, "div", 10)(26, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Calificaciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "h1", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 13)(31, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Mensajes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "h1", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    } }, directives: [_components_menu_provider_menu_provider_component__WEBPACK_IMPORTED_MODULE_0__.MenuProviderComponent, _components_header_provider_header_provider_component__WEBPACK_IMPORTED_MODULE_1__.HeaderProviderComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 31940:
/*!************************************************************************!*\
  !*** ./src/app/modules/provider/modules/dashboard/dashboard.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardModule": () => (/* binding */ DashboardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-routing.module */ 50552);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.component */ 89801);
/* harmony import */ var _components_menu_provider_menu_provider_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/menu-provider/menu-provider.module */ 60636);
/* harmony import */ var _components_header_provider_header_provider_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/header-provider/header-provider.module */ 27118);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);






class DashboardModule {
}
DashboardModule.ɵfac = function DashboardModule_Factory(t) { return new (t || DashboardModule)(); };
DashboardModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: DashboardModule });
DashboardModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardRoutingModule,
            _components_menu_provider_menu_provider_module__WEBPACK_IMPORTED_MODULE_2__.MenuProviderModule,
            _components_header_provider_header_provider_module__WEBPACK_IMPORTED_MODULE_3__.HeaderProviderModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](DashboardModule, { declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardRoutingModule,
        _components_menu_provider_menu_provider_module__WEBPACK_IMPORTED_MODULE_2__.MenuProviderModule,
        _components_header_provider_header_provider_module__WEBPACK_IMPORTED_MODULE_3__.HeaderProviderModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_modules_provider_modules_dashboard_dashboard_module_ts.js.map