"use strict";
(self["webpackChunkfront"] = self["webpackChunkfront"] || []).push([["src_app_modules_home_modules_categories_categories_module_ts"],{

/***/ 71889:
/*!******************************************************************************!*\
  !*** ./src/app/modules/home/modules/categories/categories-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriesRoutingModule": () => (/* binding */ CategoriesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _categories_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categories.component */ 30702);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _categories_component__WEBPACK_IMPORTED_MODULE_0__.CategoriesComponent
    }
];
class CategoriesRoutingModule {
}
CategoriesRoutingModule.ɵfac = function CategoriesRoutingModule_Factory(t) { return new (t || CategoriesRoutingModule)(); };
CategoriesRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CategoriesRoutingModule });
CategoriesRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CategoriesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 30702:
/*!*************************************************************************!*\
  !*** ./src/app/modules/home/modules/categories/categories.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriesComponent": () => (/* binding */ CategoriesComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 70655);
/* harmony import */ var subsink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! subsink */ 87478);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ 81122);
/* harmony import */ var _admin_modules_category_services_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../admin/modules/category/services/category.service */ 57828);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/header/header.component */ 36290);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 40398);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);









const _c0 = function (a0) { return [a0]; };
const _c1 = function (a0) { return { "background-image": a0 }; };
function CategoriesComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h6", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c0, "/resultados/" + item_r1.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](5, _c1, "url(" + item_r1.image + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r1.name);
} }
class CategoriesComponent {
    constructor(messageService, categoryService, router) {
        this.messageService = messageService;
        this.categoryService = categoryService;
        this.router = router;
        this.faArrowLeft = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faArrowLeft;
        this.subs = new subsink__WEBPACK_IMPORTED_MODULE_0__.SubSink();
        this.isMobile = (window.innerWidth > 768) ? false : true;
        this.items = [];
    }
    ngAfterViewInit() {
        this.getCategories();
    }
    ngOnInit() {
    }
    getCategories() {
        this.subs.add(this.categoryService.get().subscribe((response) => {
            this.categories = response.data;
        }, error => {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
        }));
    }
    getMenu() {
        var _a;
        (_a = this.categories) === null || _a === void 0 ? void 0 : _a.map((cat) => {
            let subItems = [];
            this.subcategories.map((subcat) => {
                if (subcat.categoryId === cat._id) {
                    subItems = [...subItems,
                        {
                            label: `
                  <div class="row justify-content-between align-items-center p-0 m-0 pl-2 pr-2 mt-2">
                    <label>${subcat.name}</label>
                    <img width="26" height="auto" src="${subcat.image}">
                  </div>
                  `,
                            styleClass: 'item-subcategory',
                            escape: false,
                            command: _ => {
                                if (this.isMobile) {
                                    this.router.navigate([`/resultados/` + subcat.name]);
                                }
                            }
                        }
                    ];
                }
            });
            this.items = [...this.items,
                {
                    label: `
                <div class="row justify-content-between align-items-center p-0 m-0 pl-2 pr-2 mt-2">
                  <label>${cat.name}</label>
                  <img width="30" height="auto" src="${cat.image}">
                </div>
                `,
                    escape: false,
                    styleClass: 'item-category',
                    items: subItems.length > 0 ? subItems : null,
                    command: _ => {
                        if (subItems.length === 0) {
                            if (this.isMobile) {
                                this.router.navigate([`/resultados/` + cat.name]);
                            }
                        }
                    }
                }
            ];
        });
    }
    allproduct() {
        this.router.navigate(['/']);
    }
}
CategoriesComponent.ɵfac = function CategoriesComponent_Factory(t) { return new (t || CategoriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_5__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_admin_modules_category_services_category_service__WEBPACK_IMPORTED_MODULE_1__.CategoryService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router)); };
CategoriesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CategoriesComponent, selectors: [["app-categories"]], decls: 10, vars: 3, consts: [[3, "eventHeader"], [1, "w-100", "mt-2", "mb-3", "pl-3", "d-flex", "justify-content-start"], [1, "mt-4", "bg-transparent", "px-2", "f-14", "font-500", "border-0", "d-flex", "align-items-center", "justify-content-center", "rounded-pill", "text-color5", 3, "click"], [1, "f-14", "icon-search", "ml-2", "text-color5", 3, "icon"], [1, "ml-3", "mb-3"], [1, "title", "f-14", "text-color1", "bold", "my-2"], [1, "d-flex", "flex-wrap"], [4, "ngFor", "ngForOf"], [1, "card-categories", "align-items-center", "justify-content-center", "text-center", "py-1", "mt-3", "mr-3", "radius-5", "shadow", "card", "cursor", 3, "routerLink"], [1, "image-categories", 3, "ngStyle"], [1, "f-8", "text-color1", "mt-2"]], template: function CategoriesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CategoriesComponent_Template_button_click_2_listener() { return ctx.allproduct(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Atr\u00E1s ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4)(6, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "CATEGORIAS");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, CategoriesComponent_div_9_Template, 5, 7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("eventHeader", ctx.eventHeader);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx.faArrowLeft);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.categories);
    } }, directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FaIconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgStyle], styles: [".image-categories[_ngcontent-%COMP%] {\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  min-width: 60px;\n  min-height: 60px;\n}\n@media (max-width: 504px) {\n  .image-categories[_ngcontent-%COMP%] {\n    min-width: 40px;\n    min-height: 40px;\n  }\n}\n.card-categories[_ngcontent-%COMP%] {\n  width: 135px;\n  height: 135px;\n}\n.card-categories[_ngcontent-%COMP%]   .f-8[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n@media (max-width: 472px) {\n  .card-categories[_ngcontent-%COMP%] {\n    width: 97px;\n    height: 97px;\n  }\n  .card-categories[_ngcontent-%COMP%]   .f-8[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .card-categories[_ngcontent-%COMP%]   .f-16[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n.radius-5[_ngcontent-%COMP%] {\n  border-radius: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3JpZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFDRjtBQUFFO0VBTkY7SUFPSSxlQUFBO0lBQ0EsZ0JBQUE7RUFHRjtBQUNGO0FBQUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQUdGO0FBRkU7RUFDRSxlQUFBO0FBSUo7QUFGRTtFQU5GO0lBT0ksV0FBQTtJQUNBLFlBQUE7RUFLRjtFQUpFO0lBQ0UsZUFBQTtFQU1KO0VBSkU7SUFDRSxlQUFBO0VBTUo7QUFDRjtBQUhBO0VBQ0UsbUJBQUE7QUFNRiIsImZpbGUiOiJjYXRlZ29yaWVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdlLWNhdGVnb3JpZXN7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBtaW4td2lkdGg6IDYwcHg7XHJcbiAgbWluLWhlaWdodDogNjBweDtcclxuICBAbWVkaWEgKG1heC13aWR0aDogNTA0cHgpIHtcclxuICAgIG1pbi13aWR0aDogNDBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDQwcHg7XHJcbiAgfVxyXG5cclxufVxyXG4uY2FyZC1jYXRlZ29yaWVze1xyXG4gIHdpZHRoOiAxMzVweDtcclxuICBoZWlnaHQ6IDEzNXB4O1xyXG4gIC5mLTh7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA0NzJweCkge1xyXG4gICAgd2lkdGg6IDk3cHg7XHJcbiAgICBoZWlnaHQ6IDk3cHg7XHJcbiAgICAuZi04e1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcbiAgICAuZi0xNntcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4ucmFkaXVzLTV7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 68397:
/*!**********************************************************************!*\
  !*** ./src/app/modules/home/modules/categories/categories.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriesModule": () => (/* binding */ CategoriesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _categories_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categories-routing.module */ 71889);
/* harmony import */ var _categories_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categories.component */ 30702);
/* harmony import */ var _shared_components_header_header_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../shared/components/header/header.module */ 3778);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 40398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);






class CategoriesModule {
}
CategoriesModule.ɵfac = function CategoriesModule_Factory(t) { return new (t || CategoriesModule)(); };
CategoriesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: CategoriesModule });
CategoriesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _categories_routing_module__WEBPACK_IMPORTED_MODULE_0__.CategoriesRoutingModule,
            _shared_components_header_header_module__WEBPACK_IMPORTED_MODULE_2__.HeaderModule,
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CategoriesModule, { declarations: [_categories_component__WEBPACK_IMPORTED_MODULE_1__.CategoriesComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _categories_routing_module__WEBPACK_IMPORTED_MODULE_0__.CategoriesRoutingModule,
        _shared_components_header_header_module__WEBPACK_IMPORTED_MODULE_2__.HeaderModule,
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_modules_home_modules_categories_categories_module_ts.js.map