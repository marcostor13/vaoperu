"use strict";
(self["webpackChunkfront"] = self["webpackChunkfront"] || []).push([["default-src_app_modules_provider_components_header-provider_header-provider_module_ts"],{

/***/ 10756:
/*!******************************************************************************************!*\
  !*** ./src/app/modules/provider/components/header-provider/header-provider.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderProviderComponent": () => (/* binding */ HeaderProviderComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 70655);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/modules/auth/services/auth.service */ 12542);
/* harmony import */ var _services_general_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/general.service */ 21864);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 40398);
/* harmony import */ var _menu_provider_menu_provider_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menu-provider/menu-provider.component */ 39493);







function HeaderProviderComponent_fa_icon_8_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "fa-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderProviderComponent_fa_icon_8_Template_fa_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r2.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx_r0.faSignOutAlt);
} }
const _c0 = function (a0, a1) { return { "slide-left": a0, "slide-right": a1 }; };
function HeaderProviderComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7)(1, "div", 8)(2, "fa-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderProviderComponent_div_9_Template_fa_icon_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r4.slideMenu(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "app-menu-provider", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](3, _c0, !ctx_r1.menu, ctx_r1.menu));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx_r1.faTimes);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](6, _c0, !ctx_r1.menu, ctx_r1.menu));
} }
class HeaderProviderComponent {
    constructor(authService, general) {
        this.authService = authService;
        this.general = general;
        this.faSearch = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faSearch;
        this.faChevronDown = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faChevronDown;
        this.faSignOutAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faSignOutAlt;
        this.faTimes = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faTimes;
        this.menu = false;
    }
    ngOnInit() {
        this.validateSession();
    }
    validateSession() {
        this.user = this.authService.isLoginUser();
    }
    slideMenu() {
        this.menu = this.menu ? false : true;
    }
    logout() {
        this.authService.logout();
    }
}
HeaderProviderComponent.ɵfac = function HeaderProviderComponent_Factory(t) { return new (t || HeaderProviderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_general_service__WEBPACK_IMPORTED_MODULE_1__.GeneralService)); };
HeaderProviderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: HeaderProviderComponent, selectors: [["app-header-provider"]], decls: 10, vars: 2, consts: [[1, "bg-color1", "pt-2", "pb-2", "pt-md-4", "pb-md-4", "pl-5", "pr-5", "row", "m-0", "justify-content-between", "align-items-center"], [1, "row", "align-items-center"], [1, "d-flex", "d-md-none", "hamburger", "cursor", 3, "click"], ["width", "57", "src", "assets/img/logo.png", "alt", "VaoPEr\u00FA", 1, "ml-5"], ["class", "f-18 ml-4 cursor row text-white", 3, "icon", "click", 4, "ngIf"], ["class", "d-flex d-md-none menu-provider-container", 4, "ngIf"], [1, "f-18", "ml-4", "cursor", "row", "text-white", 3, "icon", "click"], [1, "d-flex", "d-md-none", "menu-provider-container"], [1, "close", "row", "justify-content-end", "pr-4", "pt-4", 3, "ngClass"], [1, "f-18", "ml-4", "cursor", "row", 3, "icon", "click"], [1, "menu-provider", 3, "ngClass"]], template: function HeaderProviderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "header", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderProviderComponent_Template_div_click_2_listener() { return ctx.slideMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "label")(4, "label")(5, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, HeaderProviderComponent_fa_icon_8_Template, 1, 1, "fa-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, HeaderProviderComponent_div_9_Template, 4, 9, "div", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.menu);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FaIconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _menu_provider_menu_provider_component__WEBPACK_IMPORTED_MODULE_2__.MenuProviderComponent], styles: ["header[_ngcontent-%COMP%] {\n  width: 100%;\n}\nheader[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\nheader[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  background-color: white;\n  min-height: 3px;\n  min-width: 26px;\n}\n.menu-provider-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.2);\n  min-width: 100vw;\n  min-height: 100vh;\n  z-index: 1;\n}\n.menu-provider-container[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: -260px;\n  z-index: 2;\n  min-width: 240px;\n}\n.menu-provider-container[_ngcontent-%COMP%]   .menu-provider[_ngcontent-%COMP%] {\n  background-color: white;\n  position: absolute;\n  top: 0;\n  left: -260px;\n}\n.slide-left[_ngcontent-%COMP%] {\n  animation: slide-left 0.3s normal forwards ease-in-out;\n  animation-iteration-count: 1;\n}\n.slide-right[_ngcontent-%COMP%] {\n  animation: slide-right 0.3s normal forwards ease-in-out;\n  animation-iteration-count: 1;\n}\n@keyframes slide-left {\n  0% {\n    left: 0;\n  }\n  100% {\n    left: -260px;\n  }\n}\n@keyframes slide-right {\n  0% {\n    left: -260px;\n  }\n  100% {\n    left: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci1wcm92aWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUFDSjtBQUFJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FBRVI7QUFEUTtFQUNJLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFHWjtBQUlBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUFESjtBQUVJO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsWUFiRDtFQWNDLFVBQUE7RUFDQSxnQkFBQTtBQUFSO0FBR0k7RUFDSSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFlBdEJEO0FBcUJQO0FBTUE7RUFDSSxzREFBQTtFQUNBLDRCQUFBO0FBSEo7QUFNQTtFQUNJLHVEQUFBO0VBQ0EsNEJBQUE7QUFISjtBQXFCQTtFQUNFO0lBQU8sT0FBQTtFQU9QO0VBTkE7SUFBTyxZQXRERjtFQStETDtBQUNGO0FBS0E7RUFDRTtJQUFPLFlBdEVGO0VBNEZMO0VBckJBO0lBQU8sT0FBQTtFQXdCUDtBQUNGIiwiZmlsZSI6ImhlYWRlci1wcm92aWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImhlYWRlcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLmhhbWJ1cmdlcntcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgbGFiZWx7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAzcHg7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogMjZweDsgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiRsZWZ0OiAtMjYwcHg7XHJcblxyXG4ubWVudS1wcm92aWRlci1jb250YWluZXJ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICMwMDAwMDAsICRhbHBoYTogLjIpO1xyXG4gICAgbWluLXdpZHRoOiAxMDB2dztcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgei1pbmRleDogMTsgICBcclxuICAgIC5jbG9zZXtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7ICBcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogJGxlZnQ7XHJcbiAgICAgICAgei1pbmRleDogMjsgIFxyXG4gICAgICAgIG1pbi13aWR0aDogMjQwcHg7ICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC5tZW51LXByb3ZpZGVye1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAgICAgICAgXHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAkbGVmdDsgICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLnNsaWRlLWxlZnR7XHJcbiAgICBhbmltYXRpb246IHNsaWRlLWxlZnQgLjNzIG5vcm1hbCBmb3J3YXJkcyBlYXNlLWluLW91dDtcclxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XHJcbn1cclxuXHJcbi5zbGlkZS1yaWdodHtcclxuICAgIGFuaW1hdGlvbjogc2xpZGUtcmlnaHQgLjNzIG5vcm1hbCBmb3J3YXJkcyBlYXNlLWluLW91dDtcclxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBzbGlkZS1sZWZ0IHtcclxuICAwJSAgIHsgbGVmdDogMH1cclxuICAxMDAlIHsgbGVmdDogJGxlZnR9XHJcbn1cclxuQC1tb3ota2V5ZnJhbWVzIHNsaWRlLWxlZnQge1xyXG4gIDAlICAgeyBsZWZ0OiAwfVxyXG4gIDEwMCUgeyBsZWZ0OiAkbGVmdH1cclxufVxyXG5ALW8ta2V5ZnJhbWVzIHNsaWRlLWxlZnQge1xyXG4gIDAlICAgeyBsZWZ0OiAwfVxyXG4gIDEwMCUgeyBsZWZ0OiAkbGVmdH1cclxufVxyXG5Aa2V5ZnJhbWVzIHNsaWRlLWxlZnQge1xyXG4gIDAlICAgeyBsZWZ0OiAwfVxyXG4gIDEwMCUgeyBsZWZ0OiAkbGVmdH1cclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlLXJpZ2h0IHtcclxuICAwJSAgIHsgbGVmdDogJGxlZnR9XHJcbiAgMTAwJSB7IGxlZnQ6IDB9XHJcbn1cclxuQC1tb3ota2V5ZnJhbWVzIHNsaWRlLXJpZ2h0IHtcclxuICAwJSAgIHsgbGVmdDogJGxlZnR9XHJcbiAgMTAwJSB7IGxlZnQ6IDB9XHJcbn1cclxuQC1vLWtleWZyYW1lcyBzbGlkZS1yaWdodCB7XHJcbiAgMCUgICB7IGxlZnQ6ICRsZWZ0fVxyXG4gIDEwMCUgeyBsZWZ0OiAwfVxyXG59XHJcbkBrZXlmcmFtZXMgc2xpZGUtcmlnaHQge1xyXG4gIDAlICAgeyBsZWZ0OiAkbGVmdH1cclxuICAxMDAlIHsgbGVmdDogMH1cclxufSJdfQ== */"] });


/***/ }),

/***/ 27118:
/*!***************************************************************************************!*\
  !*** ./src/app/modules/provider/components/header-provider/header-provider.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderProviderModule": () => (/* binding */ HeaderProviderModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _header_provider_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header-provider.component */ 10756);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 40398);
/* harmony import */ var _menu_provider_menu_provider_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../menu-provider/menu-provider.module */ 60636);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





class HeaderProviderModule {
}
HeaderProviderModule.ɵfac = function HeaderProviderModule_Factory(t) { return new (t || HeaderProviderModule)(); };
HeaderProviderModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: HeaderProviderModule });
HeaderProviderModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeModule,
            _menu_provider_menu_provider_module__WEBPACK_IMPORTED_MODULE_1__.MenuProviderModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](HeaderProviderModule, { declarations: [_header_provider_component__WEBPACK_IMPORTED_MODULE_0__.HeaderProviderComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeModule,
        _menu_provider_menu_provider_module__WEBPACK_IMPORTED_MODULE_1__.MenuProviderModule], exports: [_header_provider_component__WEBPACK_IMPORTED_MODULE_0__.HeaderProviderComponent] }); })();


/***/ }),

/***/ 39493:
/*!**************************************************************************************!*\
  !*** ./src/app/modules/provider/components/menu-provider/menu-provider.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuProviderComponent": () => (/* binding */ MenuProviderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/modules/auth/services/auth.service */ 12542);
/* harmony import */ var _services_general_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/general.service */ 21864);
/* harmony import */ var primeng_panelmenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/panelmenu */ 71862);





class MenuProviderComponent {
    constructor(authService, general) {
        this.authService = authService;
        this.general = general;
        this.output = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() {
        this.items = [
            {
                label: 'Panel',
                routerLink: '/provider/dashboard',
            },
            {
                label: 'Perfil',
                routerLink: '/provider/profile',
            },
            {
                label: 'Productos',
                routerLink: '/provider/products',
            },
            {
                label: 'Ofertas',
                routerLink: '/provider/offers',
            },
            {
                label: 'Ordenes',
                routerLink: '/provider/orders',
            },
            {
                separator: true,
            },
            {
                label: 'Salir',
                icon: 'pi arrow-left',
                styleClass: 'bg-color1 text-color1',
                command: () => this.logout()
            },
        ];
        this.validateSession();
    }
    validateSession() {
        this.user = this.authService.isLoginUser();
    }
    logout() {
        this.authService.logout();
    }
}
MenuProviderComponent.ɵfac = function MenuProviderComponent_Factory(t) { return new (t || MenuProviderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_general_service__WEBPACK_IMPORTED_MODULE_1__.GeneralService)); };
MenuProviderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MenuProviderComponent, selectors: [["app-menu-provider"]], outputs: { output: "output" }, decls: 5, vars: 4, consts: [[1, "menu", "pt-4"], [1, "p-5"], [1, "text-center"], [3, "transitionOptions", "model", "styleClass"]], template: function MenuProviderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "p-panelMenu", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Hola! ", ctx.user.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("transitionOptions", "100ms")("model", ctx.items)("styleClass", "panel-menu");
    } }, directives: [primeng_panelmenu__WEBPACK_IMPORTED_MODULE_3__.PanelMenu], styles: [".menu[_ngcontent-%COMP%] {\n  max-width: 250px;\n  min-width: 250px;\n  min-height: 100vh;\n  border-right: solid 1px #14d4ae;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVzXFxfdmFyaWFibGVzLnNjc3MiLCJtZW51LXByb3ZpZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFVBQUE7QUNFQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0FBQUoiLCJmaWxlIjoibWVudS1wcm92aWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEZPTlRTICovXHJcblxyXG4kZm9udE06IE15cmlhZFBybztcclxuJGZvbnRUOiBUcmVidWNoZXRNUztcclxuJGZvbnRQOiBQb3BwaW5zO1xyXG5cclxuXHJcbi8vIENPTE9SU1xyXG5cclxuXHJcbiRjb2xvcjE6ICMxNGQ0YWU7XHJcbiRjb2xvcjI6ICNmZmUyNjY7XHJcbiRjb2xvcjM6ICMzMzMzMzM7XHJcbiRjb2xvcjQ6ICM0ZDRkNGQ7XHJcbiRjb2xvcjU6ICM4MDgwODA7XHJcbiRjb2xvcjY6ICNBOUFCQUU7XHJcbiRjb2xvcjc6ICNlNmU2ZTY7XHJcbiRjb2xvcjg6ICNlYzdjOGI7XHJcbiRjb2xvcjk6ICMwMGExOTg7XHJcbiRjb2xvcjEwOiAjMzE0ODhhO1xyXG4kY29sb3IxMTogI0Y5RjlGOTtcclxuIiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcyc7XHJcblxyXG4ubWVudXtcclxuICAgIG1heC13aWR0aDogMjUwcHg7XHJcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCAkY29sb3IxO1xyXG59Il19 */"] });


/***/ }),

/***/ 60636:
/*!***********************************************************************************!*\
  !*** ./src/app/modules/provider/components/menu-provider/menu-provider.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuProviderModule": () => (/* binding */ MenuProviderModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _menu_provider_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-provider.component */ 39493);
/* harmony import */ var primeng_panelmenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/panelmenu */ 71862);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




class MenuProviderModule {
}
MenuProviderModule.ɵfac = function MenuProviderModule_Factory(t) { return new (t || MenuProviderModule)(); };
MenuProviderModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MenuProviderModule });
MenuProviderModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            primeng_panelmenu__WEBPACK_IMPORTED_MODULE_3__.PanelMenuModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MenuProviderModule, { declarations: [_menu_provider_component__WEBPACK_IMPORTED_MODULE_0__.MenuProviderComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        primeng_panelmenu__WEBPACK_IMPORTED_MODULE_3__.PanelMenuModule], exports: [_menu_provider_component__WEBPACK_IMPORTED_MODULE_0__.MenuProviderComponent] }); })();


/***/ })

}]);
//# sourceMappingURL=default-src_app_modules_provider_components_header-provider_header-provider_module_ts.js.map