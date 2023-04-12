"use strict";
(self["webpackChunkfront"] = self["webpackChunkfront"] || []).push([["src_app_modules_home_modules_category-view_category-view_module_ts"],{

/***/ 97976:
/*!************************************************************************************!*\
  !*** ./src/app/modules/home/modules/category-view/category-view-routing.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryViewRoutingModule": () => (/* binding */ CategoryViewRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _category_view_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category-view.component */ 26926);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: ':id',
        component: _category_view_component__WEBPACK_IMPORTED_MODULE_0__.CategoryViewComponent
    },
    {
        path: '',
        component: _category_view_component__WEBPACK_IMPORTED_MODULE_0__.CategoryViewComponent
    }
];
class CategoryViewRoutingModule {
}
CategoryViewRoutingModule.ɵfac = function CategoryViewRoutingModule_Factory(t) { return new (t || CategoryViewRoutingModule)(); };
CategoryViewRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CategoryViewRoutingModule });
CategoryViewRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CategoryViewRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 26926:
/*!*******************************************************************************!*\
  !*** ./src/app/modules/home/modules/category-view/category-view.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryViewComponent": () => (/* binding */ CategoryViewComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 70655);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_modules_admin_modules_category_services_category_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/modules/admin/modules/category/services/category.service */ 57828);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/api */ 81122);
/* harmony import */ var src_app_modules_provider_modules_profile_provider_services_profile_provider_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/provider/modules/profile-provider/services/profile-provider.service */ 35650);
/* harmony import */ var src_app_modules_admin_modules_district_services_district_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/admin/modules/district/services/district.service */ 28949);
/* harmony import */ var src_app_modules_admin_modules_promotions_services_promotion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/admin/modules/promotions/services/promotion.service */ 11460);
/* harmony import */ var _admin_modules_section_services_section_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../admin/modules/section/services/section.service */ 27858);
/* harmony import */ var _services_general_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/general.service */ 21864);
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/header/header.component */ 36290);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 40398);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_components_promotion_list_promotion_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/promotion-list/promotion-list.component */ 33046);
/* harmony import */ var _shared_components_company_list_company_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/company-list/company-list.component */ 83183);
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/components/footer/footer.component */ 66526);
















const _c0 = function (a0, a1) { return { "d-none": a0, "mb-1": a1 }; };
const _c1 = function (a0, a1) { return { "d-none": a0, "bg-white": a1 }; };
const _c2 = function (a0) { return { "background-image": a0 }; };
function CategoryViewComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 14)(1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CategoryViewComponent_div_9_Template_div_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r8); const item_r6 = restoredCtx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r7.redirectCarousel(item_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](4, _c0, ctx_r0.classCarrousel && item_r6, !ctx_r0.classCarrousel));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](7, _c1, ctx_r0.classCarrousel && item_r6, !ctx_r0.classCarrousel))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](10, _c2, "url(" + item_r6.image + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](item_r6.name);
} }
function CategoryViewComponent_h5_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "h5", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r1.title);
} }
function CategoryViewComponent_app_promotion_list_13_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "app-promotion-list", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("emitEvent", function CategoryViewComponent_app_promotion_list_13_Template_app_promotion_list_emitEvent_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r9.companyListEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("items", ctx_r2.currentPromotions)("profileProviders", ctx_r2.profileProviders);
} }
function CategoryViewComponent_p_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "No se encontraron resultados");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function CategoryViewComponent_app_company_list_15_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "app-company-list", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("emitEvent", function CategoryViewComponent_app_company_list_15_Template_app_company_list_emitEvent_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r11.companyListEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("items", ctx_r4.currentProfileProviders);
} }
function CategoryViewComponent_p_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "No se encontraron resultados");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
class CategoryViewComponent {
    constructor(route, categoryService, messageService, profileProviderService, districtService, promotionsService, router, sectionService, generalService) {
        this.route = route;
        this.categoryService = categoryService;
        this.messageService = messageService;
        this.profileProviderService = profileProviderService;
        this.districtService = districtService;
        this.promotionsService = promotionsService;
        this.router = router;
        this.sectionService = sectionService;
        this.generalService = generalService;
        this.subcategoriesFilter = [];
        this.switch = 'companies';
        this.faArrowLeft = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__.faArrowLeft;
        this.section = this.generalService.diacriticSensitiveRegex(this.route.snapshot.paramMap.get('section'));
        this.item = this.generalService.diacriticSensitiveRegex(this.route.snapshot.paramMap.get('item'));
        this.subitem = this.generalService.diacriticSensitiveRegex(this.route.snapshot.paramMap.get('subitem'));
        this.id = this.generalService.diacriticSensitiveRegex(this.route.snapshot.paramMap.get('id'));
    }
    ngOnInit() {
        this.getCarrousel();
        this.getDistricts();
        this.getPromotions();
        this.search();
    }
    getCarrousel() {
        if (this.category) {
            this.getByNameCategories();
        }
        else if (this.subcategory) {
            this.getAllCategories();
            this.classCarrousel = true;
        }
        else if (this.subitem) {
            this.getItemsBySubitemName();
        }
        else if (this.item) {
            this.getSectionsAndItems();
        }
    }
    getByNameCategories() {
        this.categoryService.getByNameCategories(this.category).subscribe((response) => {
            var _a;
            this.itemsCarousel = response.data;
            if ((_a = this.itemsCarousel[0]) === null || _a === void 0 ? void 0 : _a.categoryId) {
                this.classCarrousel = false;
            }
            else {
                this.classCarrousel = true;
            }
        });
    }
    getAllCategories() {
        this.categoryService.get().subscribe((response) => {
            this.itemsCarousel = response.data;
        });
    }
    getDistricts() {
        this.districtService.get().subscribe((response) => {
            this.districts = response.data;
        });
    }
    getItemsBySubitemName() {
        this.sectionService.getItemsBySubitemName(this.subitem).subscribe((response) => {
            var _a;
            this.itemsCarousel = response.data;
            if ((_a = this.itemsCarousel[0]) === null || _a === void 0 ? void 0 : _a.itemId) {
                this.classCarrousel = false;
            }
            else {
                this.classCarrousel = true;
            }
        });
    }
    getSectionsAndItems() {
        this.sectionService.getSectionsAndItems(this.item).subscribe((response) => {
            var _a;
            this.itemsCarousel = response.data;
            if ((_a = this.itemsCarousel[0]) === null || _a === void 0 ? void 0 : _a.itemId) {
                this.classCarrousel = false;
            }
            else {
                this.classCarrousel = true;
            }
        });
    }
    getTitle(title) {
        return title.replace(/-/g, ' ');
    }
    search() {
        let type = '';
        this.keyword = this.id;
        if (this.category) {
            type = 'category';
            this.keyword = this.category;
        }
        else if (this.subcategory) {
            type = 'subcategory';
            this.keyword = this.subcategory;
        }
        else if (this.subitem) {
            type = 'subitem';
            this.keyword = this.subitem;
        }
        else if (this.item) {
            type = 'item';
            this.keyword = this.item;
        }
        this.getProfileProviders(this.keyword, type);
    }
    resetIds() {
        this.category = '';
        this.subcategory = '';
        this.subitem = '';
        this.item = '';
    }
    getProfileProviders(keyword, type) {
        this.profileProviderService.search({ keyword, type }).subscribe((response) => {
            this.profileProviders = response.data;
            this.currentProfileProviders = this.profileProviders;
        }, error => {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
        });
    }
    getPromotions() {
        this.promotionsService.get().subscribe((response) => {
            var _a;
            this.promotions = response.data;
            if (((_a = response.data) === null || _a === void 0 ? void 0 : _a.length) === 0) {
                this.messageService.add({ severity: 'success', summary: 'Mensaje', detail: 'No hay productos disponibles' });
            }
            else {
                this.currentPromotions = response.data;
            }
        }, error => {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
        });
    }
    companyListEvent($event) {
        switch ($event.event) {
            case 'open-login':
                this.eventHeader = $event;
                break;
            default:
                break;
        }
    }
    toogleSwitch(type) {
        this.switch = type;
    }
    redirectCarousel(subitem) {
        this.router.navigate([`/${this.section}/${this.item}/${subitem.name}`]);
    }
    returnCaterogies() {
        if (this.router.url.indexOf('0/des/1') > -1) {
            history.go(-1);
        }
        else {
            const urlParts = this.router.url.split('/');
            if (urlParts[3]) {
                urlParts.pop();
            }
            else {
                urlParts.splice(urlParts.length - 2, 2);
            }
            const newUrl = urlParts.join('/');
            this.router.navigate([newUrl]);
        }
    }
}
CategoryViewComponent.ɵfac = function CategoryViewComponent_Factory(t) { return new (t || CategoryViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_modules_admin_modules_category_services_category_service__WEBPACK_IMPORTED_MODULE_0__.CategoryService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_13__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_modules_provider_modules_profile_provider_services_profile_provider_service__WEBPACK_IMPORTED_MODULE_1__.ProfileProviderService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_modules_admin_modules_district_services_district_service__WEBPACK_IMPORTED_MODULE_2__.DistrictService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_modules_admin_modules_promotions_services_promotion_service__WEBPACK_IMPORTED_MODULE_3__.PromotionService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_admin_modules_section_services_section_service__WEBPACK_IMPORTED_MODULE_4__.SectionService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_general_service__WEBPACK_IMPORTED_MODULE_5__.GeneralService)); };
CategoryViewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: CategoryViewComponent, selectors: [["app-category-view"]], decls: 18, vars: 9, consts: [[3, "eventHeader"], [1, "py-3"], [1, "w-100", "mt-2", "mb-3", "px-3", "d-flex", "justify-content-between", "align-items-center"], [1, "bg-transparent", "px-2", "f-12", "font-500", "border-0", "d-flex", "align-items-center", "justify-content-center", "rounded-pill", "text-color5", 3, "click"], [1, "f-12", "icon-search", "mr-2", "text-color5", 3, "icon"], [1, "bold", "text-capitalize", "title-label"], [1, "d-flex", "justify-content-start", "flex-wrap", "px-3"], ["class", "list-subcategory", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "text-center"], ["class", "mt-3 text-color1 pl-4 pl-md-5 text-left text-capitalize", 4, "ngIf"], [1, "d-flex", "justify-content-center", "mt-3"], [3, "items", "profileProviders", "emitEvent", 4, "ngIf"], ["class", "f-13  text-center text-color5 mt-5", 4, "ngIf"], [3, "items", "emitEvent", 4, "ngIf"], [1, "list-subcategory", 3, "ngClass"], [1, "p-2", "cursor", 3, "click"], [1, "icon-category", "image", 3, "ngClass", "ngStyle"], [1, "label-category", "text-capitalize", "text-center", "f-7", "mt-1", "m-0"], [1, "mt-3", "text-color1", "pl-4", "pl-md-5", "text-left", "text-capitalize"], [3, "items", "profileProviders", "emitEvent"], [1, "f-13", "text-center", "text-color5", "mt-5"], [3, "items", "emitEvent"]], template: function CategoryViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CategoryViewComponent_Template_button_click_3_listener() { return ctx.returnCaterogies(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "fa-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, " Atr\u00E1s ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, CategoryViewComponent_div_9_Template, 5, 12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](11, CategoryViewComponent_h5_11_Template, 2, 1, "h5", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](13, CategoryViewComponent_app_promotion_list_13_Template, 1, 2, "app-promotion-list", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](14, CategoryViewComponent_p_14_Template, 2, 0, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](15, CategoryViewComponent_app_company_list_15_Template, 1, 1, "app-company-list", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](16, CategoryViewComponent_p_16_Template, 2, 0, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](17, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("eventHeader", ctx.eventHeader);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("icon", ctx.faArrowLeft);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx.getTitle(ctx.keyword));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.itemsCarousel);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (ctx.currentPromotions == null ? null : ctx.currentPromotions.length) > 0 && ctx.profileProviders && ctx.switch === "promotions");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (!ctx.currentPromotions || (ctx.currentPromotions == null ? null : ctx.currentPromotions.length) === 0) && ctx.switch === "promotions");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (ctx.currentProfileProviders == null ? null : ctx.currentProfileProviders.length) > 0 && ctx.switch === "companies");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (!ctx.currentProfileProviders || (ctx.currentProfileProviders == null ? null : ctx.currentProfileProviders.length) === 0) && ctx.switch === "companies");
    } }, directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_6__.HeaderComponent, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__.FaIconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _shared_components_promotion_list_promotion_list_component__WEBPACK_IMPORTED_MODULE_7__.PromotionListComponent, _shared_components_company_list_company_list_component__WEBPACK_IMPORTED_MODULE_8__.CompanyListComponent, _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__.FooterComponent], styles: [".icon-category[_ngcontent-%COMP%] {\n  min-width: 90px;\n  min-height: 90px;\n  max-width: 90px;\n  max-height: 90px;\n  border-radius: 8px;\n  background-position: center;\n  background-size: 80%;\n  box-shadow: 0px -1px 5px 1px rgba(166, 166, 166, 0.84);\n  -webkit-box-shadow: 0px -1px 5px 1px rgba(166, 166, 166, 0.84);\n  -moz-box-shadow: 0px -1px 5px 1px rgba(166, 166, 166, 0.84);\n}\n\n.label-category[_ngcontent-%COMP%] {\n  width: 90px;\n  overflow: hidden;\n  overflow-wrap: break-word;\n}\n\n.list-subcategory[_ngcontent-%COMP%] {\n  width: 33.3333%;\n}\n\n.title-label[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3J5LXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxlQUZHO0VBR0gsZ0JBSEc7RUFJSCxlQUpHO0VBS0gsZ0JBTEc7RUFNSCxrQkFBQTtFQUNBLDJCQUFBO0VBQ0Esb0JBQUE7RUFDQSxzREFBQTtFQUNBLDhEQUFBO0VBQ0EsMkRBQUE7QUFESjs7QUFHQTtFQUNJLFdBZEc7RUFlSCxnQkFBQTtFQUNBLHlCQUFBO0FBQUo7O0FBR0E7RUFDRSxlQUFBO0FBQUY7O0FBR0E7RUFDRSxnQkFBQTtBQUFGIiwiZmlsZSI6ImNhdGVnb3J5LXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuJHNpemU6IDkwcHg7XHJcbi5pY29uLWNhdGVnb3J5e1xyXG4gICAgbWluLXdpZHRoOiAkc2l6ZTtcclxuICAgIG1pbi1oZWlnaHQ6ICRzaXplO1xyXG4gICAgbWF4LXdpZHRoOiAkc2l6ZTtcclxuICAgIG1heC1oZWlnaHQ6ICRzaXplO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiA4MCU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggLTFweCA1cHggMXB4IHJnYmEoMTY2LDE2NiwxNjYsMC44NCk7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAtMXB4IDVweCAxcHggcmdiYSgxNjYsMTY2LDE2NiwwLjg0KTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMHB4IC0xcHggNXB4IDFweCByZ2JhKDE2NiwxNjYsMTY2LDAuODQpO1xyXG59XHJcbi5sYWJlbC1jYXRlZ29yeXtcclxuICAgIHdpZHRoOiAkc2l6ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG59XHJcblxyXG4ubGlzdC1zdWJjYXRlZ29yeSB7XHJcbiAgd2lkdGg6IDMzLjMzMzMlO1xyXG59XHJcblxyXG4udGl0bGUtbGFiZWwge1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 19983:
/*!****************************************************************************!*\
  !*** ./src/app/modules/home/modules/category-view/category-view.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryViewModule": () => (/* binding */ CategoryViewModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _category_view_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category-view-routing.module */ 97976);
/* harmony import */ var _category_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category-view.component */ 26926);
/* harmony import */ var _shared_components_header_header_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/components/header/header.module */ 3778);
/* harmony import */ var _shared_components_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/components/footer/footer.module */ 62735);
/* harmony import */ var _shared_components_company_list_company_list_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/components/company-list/company-list.module */ 24757);
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/multiselect */ 22460);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _shared_components_promotion_list_promotion_list_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/components/promotion-list/promotion-list.module */ 94548);
/* harmony import */ var primeng_carousel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/carousel */ 30087);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 40398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);












class CategoryViewModule {
}
CategoryViewModule.ɵfac = function CategoryViewModule_Factory(t) { return new (t || CategoryViewModule)(); };
CategoryViewModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: CategoryViewModule });
CategoryViewModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _category_view_routing_module__WEBPACK_IMPORTED_MODULE_0__.CategoryViewRoutingModule,
            _shared_components_header_header_module__WEBPACK_IMPORTED_MODULE_2__.HeaderModule,
            _shared_components_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__.FooterModule,
            _shared_components_company_list_company_list_module__WEBPACK_IMPORTED_MODULE_4__.CompanyListModule,
            primeng_multiselect__WEBPACK_IMPORTED_MODULE_8__.MultiSelectModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _shared_components_promotion_list_promotion_list_module__WEBPACK_IMPORTED_MODULE_5__.PromotionListModule,
            primeng_carousel__WEBPACK_IMPORTED_MODULE_10__.CarouselModule,
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__.FontAwesomeModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](CategoryViewModule, { declarations: [_category_view_component__WEBPACK_IMPORTED_MODULE_1__.CategoryViewComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _category_view_routing_module__WEBPACK_IMPORTED_MODULE_0__.CategoryViewRoutingModule,
        _shared_components_header_header_module__WEBPACK_IMPORTED_MODULE_2__.HeaderModule,
        _shared_components_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__.FooterModule,
        _shared_components_company_list_company_list_module__WEBPACK_IMPORTED_MODULE_4__.CompanyListModule,
        primeng_multiselect__WEBPACK_IMPORTED_MODULE_8__.MultiSelectModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
        _shared_components_promotion_list_promotion_list_module__WEBPACK_IMPORTED_MODULE_5__.PromotionListModule,
        primeng_carousel__WEBPACK_IMPORTED_MODULE_10__.CarouselModule,
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__.FontAwesomeModule] }); })();


/***/ }),

/***/ 22460:
/*!***************************************************************!*\
  !*** ./node_modules/primeng/fesm2015/primeng-multiselect.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MULTISELECT_VALUE_ACCESSOR": () => (/* binding */ MULTISELECT_VALUE_ACCESSOR),
/* harmony export */   "MultiSelect": () => (/* binding */ MultiSelect),
/* harmony export */   "MultiSelectItem": () => (/* binding */ MultiSelectItem),
/* harmony export */   "MultiSelectModule": () => (/* binding */ MultiSelectModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/animations */ 31631);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/dom */ 55128);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/utils */ 50354);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ 81122);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/scrolling */ 95752);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/tooltip */ 71210);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/ripple */ 22875);

















function MultiSelectItem_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.label);
  }
}

function MultiSelectItem_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

const _c0 = function (a0) {
  return {
    "height": a0
  };
};

const _c1 = function (a0, a1) {
  return {
    "p-highlight": a0,
    "p-disabled": a1
  };
};

const _c2 = function (a0) {
  return {
    "p-highlight": a0
  };
};

const _c3 = function (a0) {
  return {
    "pi pi-check": a0
  };
};

const _c4 = function (a0) {
  return {
    $implicit: a0
  };
};

const _c5 = ["container"];
const _c6 = ["filterInput"];
const _c7 = ["in"];

function MultiSelect_ng_container_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.valuesAsString || "empty");
  }
}

function MultiSelect_ng_container_7_ng_container_2_div_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiSelect_ng_container_7_ng_container_2_div_1_span_4_Template_span_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);
      const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return ctx_r13.removeChip(item_r9, $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}

function MultiSelect_ng_container_7_ng_container_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13, 14)(2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MultiSelect_ng_container_7_ng_container_2_div_1_span_4_Template, 1, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.findLabelByValue(item_r9));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r7.disabled);
  }
}

function MultiSelect_ng_container_7_ng_container_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.placeholder || ctx_r8.defaultLabel || "empty");
  }
}

function MultiSelect_ng_container_7_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiSelect_ng_container_7_ng_container_2_div_1_Template, 5, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MultiSelect_ng_container_7_ng_container_2_ng_container_2_Template, 2, 1, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.value || ctx_r6.value.length === 0);
  }
}

function MultiSelect_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiSelect_ng_container_7_ng_container_1_Template, 2, 1, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MultiSelect_ng_container_7_ng_container_2_Template, 3, 2, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.display === "comma");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.display === "chip");
  }
}

function MultiSelect_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

function MultiSelect_div_11_div_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

const _c8 = function (a0) {
  return {
    "p-checkbox-disabled": a0
  };
};

const _c9 = function (a0, a1, a2) {
  return {
    "p-highlight": a0,
    "p-focus": a1,
    "p-disabled": a2
  };
};

function MultiSelect_div_11_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30)(1, "div", 2)(2, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function MultiSelect_div_11_div_1_div_3_Template_input_focus_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return ctx_r25.onHeaderCheckboxFocus();
    })("blur", function MultiSelect_div_11_div_1_div_3_Template_input_blur_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return ctx_r27.onHeaderCheckboxBlur();
    })("keydown.space", function MultiSelect_div_11_div_1_div_3_Template_input_keydown_space_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return ctx_r28.toggleAll($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiSelect_div_11_div_1_div_3_Template_div_click_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return ctx_r29.toggleAll($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c8, ctx_r23.disabled || ctx_r23.toggleAllDisabled));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r23.allChecked)("disabled", ctx_r23.disabled || ctx_r23.toggleAllDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](8, _c9, ctx_r23.allChecked, ctx_r23.headerCheckboxFocus, ctx_r23.disabled || ctx_r23.toggleAllDisabled));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-checked", ctx_r23.allChecked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c3, ctx_r23.allChecked));
  }
}

function MultiSelect_div_11_div_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34)(1, "input", 35, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function MultiSelect_div_11_div_1_div_4_Template_input_input_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return ctx_r31.onFilterInputChange($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r24.filterValue || "")("disabled", ctx_r24.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("autocomplete", ctx_r24.autocomplete)("placeholder", ctx_r24.filterPlaceHolder)("aria-label", ctx_r24.ariaFilterLabel);
  }
}

function MultiSelect_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MultiSelect_div_11_div_1_ng_container_2_Template, 1, 0, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MultiSelect_div_11_div_1_div_3_Template, 5, 14, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MultiSelect_div_11_div_1_div_4_Template, 4, 5, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiSelect_div_11_div_1_Template_button_click_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r33.close($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r16.headerTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.showToggleAll && !ctx_r16.selectionLimit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.filter);
  }
}

function MultiSelect_div_11_ng_container_4_ng_template_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const optgroup_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r37.getOptionGroupLabel(optgroup_r36) || "empty");
  }
}

function MultiSelect_div_11_ng_container_4_ng_template_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

function MultiSelect_div_11_ng_container_4_ng_template_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

function MultiSelect_div_11_ng_container_4_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiSelect_div_11_ng_container_4_ng_template_1_span_1_Template, 2, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MultiSelect_div_11_ng_container_4_ng_template_1_ng_container_2_Template, 1, 0, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MultiSelect_div_11_ng_container_4_ng_template_1_ng_container_3_Template, 1, 0, "ng-container", 8);
  }

  if (rf & 2) {
    const optgroup_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r35.groupTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r35.groupTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c4, optgroup_r36));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r19)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c4, ctx_r35.getOptionGroupChildren(optgroup_r36)));
  }
}

function MultiSelect_div_11_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiSelect_div_11_ng_container_4_ng_template_1_Template, 4, 9, "ng-template", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r17.optionsToRender);
  }
}

function MultiSelect_div_11_ng_container_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

function MultiSelect_div_11_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiSelect_div_11_ng_container_5_ng_container_1_Template, 1, 0, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r19)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c4, ctx_r18.optionsToRender));
  }
}

function MultiSelect_div_11_ng_template_6_ng_container_0_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-multiSelectItem", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function MultiSelect_div_11_ng_template_6_ng_container_0_ng_template_1_Template_p_multiSelectItem_onClick_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return ctx_r52.onOptionClick($event);
    })("onKeydown", function MultiSelect_div_11_ng_template_6_ng_container_0_ng_template_1_Template_p_multiSelectItem_onKeydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53);
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return ctx_r54.onOptionKeydown($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r50 = ctx.$implicit;
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("option", option_r50)("selected", ctx_r49.isSelected(option_r50))("label", ctx_r49.getOptionLabel(option_r50))("disabled", ctx_r49.isOptionDisabled(option_r50))("template", ctx_r49.itemTemplate);
  }
}

function MultiSelect_div_11_ng_template_6_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiSelect_div_11_ng_template_6_ng_container_0_ng_template_1_Template, 1, 5, "ng-template", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const optionsToDisplay_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", optionsToDisplay_r42);
  }
}

function MultiSelect_div_11_ng_template_6_ng_template_1_cdk_virtual_scroll_viewport_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-multiSelectItem", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function MultiSelect_div_11_ng_template_6_ng_template_1_cdk_virtual_scroll_viewport_0_ng_container_2_Template_p_multiSelectItem_onClick_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r67);
      const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
      return ctx_r66.onOptionClick($event);
    })("onKeydown", function MultiSelect_div_11_ng_template_6_ng_template_1_cdk_virtual_scroll_viewport_0_ng_container_2_Template_p_multiSelectItem_onKeydown_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r67);
      const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
      return ctx_r68.onOptionKeydown($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const option_r59 = ctx.$implicit;
    const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("option", option_r59)("selected", ctx_r58.isSelected(option_r59))("label", ctx_r58.getOptionLabel(option_r59))("disabled", ctx_r58.isOptionDisabled(option_r59))("template", ctx_r58.itemTemplate)("itemSize", ctx_r58.itemSize);
  }
}

function MultiSelect_div_11_ng_template_6_ng_template_1_cdk_virtual_scroll_viewport_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "cdk-virtual-scroll-viewport", 45, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MultiSelect_div_11_ng_template_6_ng_template_1_cdk_virtual_scroll_viewport_0_ng_container_2_Template, 2, 6, "ng-container", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const optionsToDisplay_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r56.scrollHeight))("itemSize", ctx_r56.itemSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkVirtualForOf", optionsToDisplay_r42);
  }
}

function MultiSelect_div_11_ng_template_6_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MultiSelect_div_11_ng_template_6_ng_template_1_cdk_virtual_scroll_viewport_0_Template, 3, 5, "cdk-virtual-scroll-viewport", 44);
  }

  if (rf & 2) {
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r46.virtualScroll && !ctx_r46.emptyOptions);
  }
}

function MultiSelect_div_11_ng_template_6_li_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r70.emptyFilterMessageLabel, " ");
  }
}

function MultiSelect_div_11_ng_template_6_li_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, null, 50);
  }
}

function MultiSelect_div_11_ng_template_6_li_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiSelect_div_11_ng_template_6_li_3_ng_container_1_Template, 2, 1, "ng-container", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MultiSelect_div_11_ng_template_6_li_3_ng_container_2_Template, 2, 0, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r47.emptyFilterTemplate && !ctx_r47.emptyTemplate)("ngIfElse", ctx_r47.emptyFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r47.emptyFilterTemplate || ctx_r47.emptyTemplate);
  }
}

function MultiSelect_div_11_ng_template_6_li_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r73.emptyMessageLabel, " ");
  }
}

function MultiSelect_div_11_ng_template_6_li_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, null, 51);
  }
}

function MultiSelect_div_11_ng_template_6_li_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiSelect_div_11_ng_template_6_li_4_ng_container_1_Template, 2, 1, "ng-container", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MultiSelect_div_11_ng_template_6_li_4_ng_container_2_Template, 2, 0, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r48.emptyTemplate)("ngIfElse", ctx_r48.empty);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r48.emptyTemplate);
  }
}

function MultiSelect_div_11_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MultiSelect_div_11_ng_template_6_ng_container_0_Template, 2, 1, "ng-container", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiSelect_div_11_ng_template_6_ng_template_1_Template, 1, 1, "ng-template", null, 41, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MultiSelect_div_11_ng_template_6_li_3_Template, 3, 3, "li", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MultiSelect_div_11_ng_template_6_li_4_Template, 3, 3, "li", 42);
  }

  if (rf & 2) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r20.virtualScroll)("ngIfElse", _r45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r20.hasFilter() && ctx_r20.emptyOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r20.hasFilter() && ctx_r20.emptyOptions);
  }
}

function MultiSelect_div_11_div_8_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

function MultiSelect_div_11_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MultiSelect_div_11_div_8_ng_container_2_Template, 1, 0, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r21.footerTemplate);
  }
}

const _c10 = function () {
  return ["p-multiselect-panel p-component"];
};

const _c11 = function (a0, a1) {
  return {
    showTransitionParams: a0,
    hideTransitionParams: a1
  };
};

const _c12 = function (a1) {
  return {
    value: "visible",
    params: a1
  };
};

const _c13 = function (a0) {
  return {
    "p-multiselect-virtualscroll": a0
  };
};

function MultiSelect_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@overlayAnimation.start", function MultiSelect_div_11_Template_div_animation_overlayAnimation_start_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r78);
      const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r77.onOverlayAnimationStart($event);
    })("@overlayAnimation.done", function MultiSelect_div_11_Template_div_animation_overlayAnimation_done_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r78);
      const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r79.onOverlayAnimationEnd($event);
    })("keydown", function MultiSelect_div_11_Template_div_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r78);
      const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r80.onKeydown($event);
    })("click", function MultiSelect_div_11_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r78);
      const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r81.onOverlayClick($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiSelect_div_11_div_1_Template, 7, 3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 20)(3, "ul", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MultiSelect_div_11_ng_container_4_Template, 2, 1, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MultiSelect_div_11_ng_container_5_Template, 2, 4, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MultiSelect_div_11_ng_template_6_Template, 5, 4, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MultiSelect_div_11_div_8_Template, 3, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r4.panelStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c10))("@overlayAnimation", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](13, _c11, ctx_r4.showTransitionOptions, ctx_r4.hideTransitionOptions)))("ngStyle", ctx_r4.panelStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.showHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("max-height", ctx_r4.virtualScroll ? "auto" : ctx_r4.scrollHeight || "auto");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c13, ctx_r4.virtualScroll));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.group);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.group);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.footerFacet || ctx_r4.footerTemplate);
  }
}

const _c14 = [[["p-header"]], [["p-footer"]]];

const _c15 = function (a1, a2, a3, a4) {
  return {
    "p-multiselect p-component": true,
    "p-multiselect-open": a1,
    "p-multiselect-chip": a2,
    "p-focus": a3,
    "p-disabled": a4
  };
};

const _c16 = function (a0, a1) {
  return {
    "p-placeholder": a0,
    "p-multiselect-label-empty": a1
  };
};

const _c17 = function () {
  return {
    "p-multiselect-trigger": true
  };
};

const _c18 = ["p-header", "p-footer"];
const MULTISELECT_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MultiSelect),
  multi: true
};

class MultiSelectItem {
  constructor() {
    this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onKeydown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }

  onOptionClick(event) {
    this.onClick.emit({
      originalEvent: event,
      option: this.option
    });
  }

  onOptionKeydown(event) {
    this.onKeydown.emit({
      originalEvent: event,
      option: this.option
    });
  }

}

MultiSelectItem.ɵfac = function MultiSelectItem_Factory(t) {
  return new (t || MultiSelectItem)();
};

MultiSelectItem.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MultiSelectItem,
  selectors: [["p-multiSelectItem"]],
  hostAttrs: [1, "p-element"],
  inputs: {
    option: "option",
    selected: "selected",
    label: "label",
    disabled: "disabled",
    itemSize: "itemSize",
    template: "template"
  },
  outputs: {
    onClick: "onClick",
    onKeydown: "onKeydown"
  },
  decls: 6,
  vars: 20,
  consts: [["pRipple", "", 1, "p-multiselect-item", 3, "ngStyle", "ngClass", "click", "keydown"], [1, "p-checkbox", "p-component"], [1, "p-checkbox-box", 3, "ngClass"], [1, "p-checkbox-icon", 3, "ngClass"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
  template: function MultiSelectItem_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiSelectItem_Template_li_click_0_listener($event) {
        return ctx.onOptionClick($event);
      })("keydown", function MultiSelectItem_Template_li_keydown_0_listener($event) {
        return ctx.onOptionKeydown($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MultiSelectItem_span_4_Template, 2, 1, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MultiSelectItem_ng_container_5_Template, 1, 0, "ng-container", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.itemSize + "px"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](11, _c1, ctx.selected, ctx.disabled));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.label)("tabindex", ctx.disabled ? null : "0");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c2, ctx.selected));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c3, ctx.selected));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.template);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.template)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c4, ctx.option));
    }
  },
  directives: [primeng_ripple__WEBPACK_IMPORTED_MODULE_2__.Ripple, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet],
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MultiSelectItem, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'p-multiSelectItem',
      template: `
        <li class="p-multiselect-item" (click)="onOptionClick($event)" (keydown)="onOptionKeydown($event)" [attr.aria-label]="label"
            [attr.tabindex]="disabled ? null : '0'" [ngStyle]="{'height': itemSize + 'px'}"
            [ngClass]="{'p-highlight': selected, 'p-disabled': disabled}" pRipple>
            <div class="p-checkbox p-component">
                <div class="p-checkbox-box" [ngClass]="{'p-highlight': selected}">
                    <span class="p-checkbox-icon" [ngClass]="{'pi pi-check': selected}"></span>
                </div>
            </div>
            <span *ngIf="!template">{{label}}</span>
            <ng-container *ngTemplateOutlet="template; context: {$implicit: option}"></ng-container>
        </li>
    `,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        'class': 'p-element'
      }
    }]
  }], null, {
    option: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    label: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    itemSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    template: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onKeydown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();

class MultiSelect {
  constructor(el, renderer, cd, filterService, config, overlayService) {
    this.el = el;
    this.renderer = renderer;
    this.cd = cd;
    this.filterService = filterService;
    this.config = config;
    this.overlayService = overlayService;
    this.filter = true;
    this.displaySelectedLabel = true;
    this.maxSelectedLabels = 3;
    this.selectedItemsLabel = 'ellipsis';
    this.showToggleAll = true;
    this.emptyFilterMessage = '';
    this.emptyMessage = '';
    this.resetFilterOnHide = false;
    this.dropdownIcon = 'pi pi-chevron-down';
    this.optionGroupChildren = "items";
    this.showHeader = true;
    this.autoZIndex = true;
    this.baseZIndex = 0;
    this.showTransitionOptions = '.12s cubic-bezier(0, 0, 0.2, 1)';
    this.hideTransitionOptions = '.1s linear';
    this.filterMatchMode = "contains";
    this.tooltip = '';
    this.tooltipPosition = 'right';
    this.tooltipPositionStyle = 'absolute';
    this.autofocusFilter = true;
    this.display = 'comma';
    this.autocomplete = 'on';
    this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onPanelShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onPanelHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.scrollHeight = '200px';

    this.onModelChange = () => {};

    this.onModelTouched = () => {};
  }

  set defaultLabel(val) {
    this._defaultLabel = val;
    this.updateLabel();
  }

  get defaultLabel() {
    return this._defaultLabel;
  }

  set placeholder(val) {
    this._placeholder = val;
    this.updateLabel();
  }

  get placeholder() {
    return this._placeholder;
  }

  get options() {
    return this._options;
  }

  set options(val) {
    this._options = val;
    this.updateLabel();
  }

  get filterValue() {
    return this._filterValue;
  }

  set filterValue(val) {
    this._filterValue = val;
    this.activateFilter();
  }

  ngOnInit() {
    this.updateLabel();
  }

  ngAfterContentInit() {
    this.templates.forEach(item => {
      switch (item.getType()) {
        case 'item':
          this.itemTemplate = item.template;
          break;

        case 'group':
          this.groupTemplate = item.template;
          break;

        case 'selectedItems':
          this.selectedItemsTemplate = item.template;
          break;

        case 'header':
          this.headerTemplate = item.template;
          break;

        case 'emptyfilter':
          this.emptyFilterTemplate = item.template;
          break;

        case 'empty':
          this.emptyTemplate = item.template;
          break;

        case 'footer':
          this.footerTemplate = item.template;
          break;

        default:
          this.itemTemplate = item.template;
          break;
      }
    });
  }

  ngAfterViewInit() {
    if (this.overlayVisible) {
      this.show();
    }
  }

  ngAfterViewChecked() {
    if (this.filtered) {
      this.alignOverlay();
      this.filtered = false;
    }
  }

  getOptionLabel(option) {
    return this.optionLabel ? primeng_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.resolveFieldData(option, this.optionLabel) : option.label != undefined ? option.label : option;
  }

  getOptionValue(option) {
    return this.optionValue ? primeng_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.resolveFieldData(option, this.optionValue) : this.optionLabel || option.value === undefined ? option : option.value;
  }

  getOptionGroupLabel(optionGroup) {
    return this.optionGroupLabel ? primeng_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.resolveFieldData(optionGroup, this.optionGroupLabel) : optionGroup.label != undefined ? optionGroup.label : optionGroup;
  }

  getOptionGroupChildren(optionGroup) {
    return this.optionGroupChildren ? primeng_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.resolveFieldData(optionGroup, this.optionGroupChildren) : optionGroup.items;
  }

  isOptionDisabled(option) {
    let disabled = this.optionDisabled ? primeng_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.resolveFieldData(option, this.optionDisabled) : option.disabled !== undefined ? option.disabled : false;
    return disabled || this.maxSelectionLimitReached && !this.isSelected(option);
  }

  writeValue(value) {
    this.value = value;
    this.updateLabel();
    this.updateFilledState();
    this.checkSelectionLimit();
    this.cd.markForCheck();
  }

  checkSelectionLimit() {
    if (this.selectionLimit && this.value && this.value.length === this.selectionLimit) {
      this.maxSelectionLimitReached = true;
    } else {
      this.maxSelectionLimitReached = false;
    }
  }

  updateFilledState() {
    this.filled = this.value && this.value.length > 0;
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

  onOptionClick(event) {
    let option = event.option;

    if (this.isOptionDisabled(option)) {
      return;
    }

    let optionValue = this.getOptionValue(option);
    let selectionIndex = this.findSelectionIndex(optionValue);

    if (selectionIndex != -1) {
      this.value = this.value.filter((val, i) => i != selectionIndex);

      if (this.selectionLimit) {
        this.maxSelectionLimitReached = false;
      }
    } else {
      if (!this.selectionLimit || !this.value || this.value.length < this.selectionLimit) {
        this.value = [...(this.value || []), optionValue];
      }

      this.checkSelectionLimit();
    }

    this.onModelChange(this.value);
    this.onChange.emit({
      originalEvent: event.originalEvent,
      value: this.value,
      itemValue: optionValue
    });
    this.updateLabel();
    this.updateFilledState();
  }

  isSelected(option) {
    return this.findSelectionIndex(this.getOptionValue(option)) != -1;
  }

  findSelectionIndex(val) {
    let index = -1;

    if (this.value) {
      for (let i = 0; i < this.value.length; i++) {
        if (primeng_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.equals(this.value[i], val, this.dataKey)) {
          index = i;
          break;
        }
      }
    }

    return index;
  }

  get toggleAllDisabled() {
    let optionsToRender = this.optionsToRender;

    if (!optionsToRender || optionsToRender.length === 0) {
      return true;
    } else {
      for (let option of optionsToRender) {
        if (!this.isOptionDisabled(option)) return false;
      }

      return true;
    }
  }

  toggleAll(event) {
    if (this.disabled || this.toggleAllDisabled || this.readonly) {
      return;
    }

    let allChecked = this.allChecked;
    if (allChecked) this.uncheckAll();else this.checkAll();
    this.onModelChange(this.value);
    this.onChange.emit({
      originalEvent: event,
      value: this.value
    });
    this.updateFilledState();
    this.updateLabel();
    event.preventDefault();
  }

  checkAll() {
    let optionsToRender = this.optionsToRender;
    let val = [];
    optionsToRender.forEach(opt => {
      if (!this.group) {
        let optionDisabled = this.isOptionDisabled(opt);

        if (!optionDisabled || optionDisabled && this.isSelected(opt)) {
          val.push(this.getOptionValue(opt));
        }
      } else {
        let subOptions = this.getOptionGroupChildren(opt);

        if (subOptions) {
          subOptions.forEach(option => {
            let optionDisabled = this.isOptionDisabled(option);

            if (!optionDisabled || optionDisabled && this.isSelected(option)) {
              val.push(this.getOptionValue(option));
            }
          });
        }
      }
    });
    this.value = val;
  }

  uncheckAll() {
    let optionsToRender = this.optionsToRender;
    let val = [];
    optionsToRender.forEach(opt => {
      if (!this.group) {
        let optionDisabled = this.isOptionDisabled(opt);

        if (optionDisabled && this.isSelected(opt)) {
          val.push(this.getOptionValue(opt));
        }
      } else {
        if (opt.items) {
          opt.items.forEach(option => {
            let optionDisabled = this.isOptionDisabled(option);

            if (optionDisabled && this.isSelected(option)) {
              val.push(this.getOptionValue(option));
            }
          });
        }
      }
    });
    this.value = val;
  }

  show() {
    if (!this.overlayVisible) {
      this.overlayVisible = true;
      this.preventDocumentDefault = true;
      this.cd.markForCheck();
    }
  }

  onOverlayClick(event) {
    this.overlayService.add({
      originalEvent: event,
      target: this.el.nativeElement
    });
  }

  onOverlayAnimationStart(event) {
    switch (event.toState) {
      case 'visible':
        this.overlay = event.element;
        this.appendOverlay();

        if (this.autoZIndex) {
          primeng_utils__WEBPACK_IMPORTED_MODULE_4__.ZIndexUtils.set('overlay', this.overlay, this.baseZIndex + this.config.zIndex.overlay);
        }

        this.alignOverlay();
        this.bindDocumentClickListener();
        this.bindDocumentResizeListener();
        this.bindScrollListener();

        if (this.filterInputChild && this.filterInputChild.nativeElement) {
          this.preventModelTouched = true;

          if (this.autofocusFilter) {
            this.filterInputChild.nativeElement.focus();
          }
        }

        this.onPanelShow.emit();
        break;

      case 'void':
        this.onOverlayHide();
        break;
    }
  }

  onOverlayAnimationEnd(event) {
    switch (event.toState) {
      case 'void':
        primeng_utils__WEBPACK_IMPORTED_MODULE_4__.ZIndexUtils.clear(event.element);
        break;
    }
  }

  appendOverlay() {
    if (this.appendTo) {
      if (this.appendTo === 'body') document.body.appendChild(this.overlay);else primeng_dom__WEBPACK_IMPORTED_MODULE_5__.DomHandler.appendChild(this.overlay, this.appendTo);

      if (!this.overlay.style.minWidth) {
        this.overlay.style.minWidth = primeng_dom__WEBPACK_IMPORTED_MODULE_5__.DomHandler.getWidth(this.containerViewChild.nativeElement) + 'px';
      }
    }
  }

  restoreOverlayAppend() {
    if (this.overlay && this.appendTo) {
      this.el.nativeElement.appendChild(this.overlay);
    }
  }

  alignOverlay() {
    if (this.overlay) {
      if (this.appendTo) primeng_dom__WEBPACK_IMPORTED_MODULE_5__.DomHandler.absolutePosition(this.overlay, this.containerViewChild.nativeElement);else primeng_dom__WEBPACK_IMPORTED_MODULE_5__.DomHandler.relativePosition(this.overlay, this.containerViewChild.nativeElement);
    }
  }

  hide() {
    this.overlayVisible = false;
    this.unbindDocumentClickListener();

    if (this.resetFilterOnHide) {
      this.filterInputChild.nativeElement.value = '';
      this._filterValue = null;
      this._filteredOptions = null;
    }

    this.onPanelHide.emit();
    this.cd.markForCheck();
  }

  close(event) {
    this.hide();
    event.preventDefault();
    event.stopPropagation();
  }

  onMouseclick(event, input) {
    if (this.disabled || this.readonly || event.target.isSameNode(this.accessibleViewChild.nativeElement)) {
      return;
    }

    this.onClick.emit(event);

    if (!this.isOverlayClick(event) && !primeng_dom__WEBPACK_IMPORTED_MODULE_5__.DomHandler.hasClass(event.target, 'p-multiselect-token-icon')) {
      if (this.overlayVisible) {
        this.hide();
      } else {
        input.focus();
        this.show();
      }
    }
  }

  removeChip(chip, event) {
    this.value = this.value.filter(val => !primeng_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.equals(val, chip, this.dataKey));
    this.onModelChange(this.value);
    this.checkSelectionLimit();
    this.onChange.emit({
      originalEvent: event,
      value: this.value,
      itemValue: chip
    });
    this.updateLabel();
    this.updateFilledState();
  }

  isOverlayClick(event) {
    let targetNode = event.target;
    return this.overlay ? this.overlay.isSameNode(targetNode) || this.overlay.contains(targetNode) : false;
  }

  isOutsideClicked(event) {
    return !(this.el.nativeElement.isSameNode(event.target) || this.el.nativeElement.contains(event.target) || this.isOverlayClick(event));
  }

  onInputFocus(event) {
    this.focus = true;
    this.onFocus.emit({
      originalEvent: event
    });
  }

  onInputBlur(event) {
    this.focus = false;
    this.onBlur.emit({
      originalEvent: event
    });

    if (!this.preventModelTouched) {
      this.onModelTouched();
    }

    this.preventModelTouched = false;
  }

  onOptionKeydown(event) {
    if (this.readonly) {
      return;
    }

    switch (event.originalEvent.which) {
      //down
      case 40:
        var nextItem = this.findNextItem(event.originalEvent.target.parentElement);

        if (nextItem) {
          nextItem.focus();
        }

        event.originalEvent.preventDefault();
        break;
      //up

      case 38:
        var prevItem = this.findPrevItem(event.originalEvent.target.parentElement);

        if (prevItem) {
          prevItem.focus();
        }

        event.originalEvent.preventDefault();
        break;
      //enter

      case 13:
        this.onOptionClick(event);
        event.originalEvent.preventDefault();
        break;

      case 9:
        this.hide();
        break;
    }
  }

  findNextItem(item) {
    let nextItem = item.nextElementSibling;
    if (nextItem) return primeng_dom__WEBPACK_IMPORTED_MODULE_5__.DomHandler.hasClass(nextItem.children[0], 'p-disabled') || primeng_dom__WEBPACK_IMPORTED_MODULE_5__.DomHandler.isHidden(nextItem.children[0]) || primeng_dom__WEBPACK_IMPORTED_MODULE_5__.DomHandler.hasClass(nextItem, 'p-multiselect-item-group') ? this.findNextItem(nextItem) : nextItem.children[0];else return null;
  }

  findPrevItem(item) {
    let prevItem = item.previousElementSibling;
    if (prevItem) return primeng_dom__WEBPACK_IMPORTED_MODULE_5__.DomHandler.hasClass(prevItem.children[0], 'p-disabled') || primeng_dom__WEBPACK_IMPORTED_MODULE_5__.DomHandler.isHidden(prevItem.children[0]) || primeng_dom__WEBPACK_IMPORTED_MODULE_5__.DomHandler.hasClass(prevItem, 'p-multiselect-item-group') ? this.findPrevItem(prevItem) : prevItem.children[0];else return null;
  }

  onKeydown(event) {
    switch (event.which) {
      //down
      case 40:
        if (!this.overlayVisible && event.altKey) {
          this.show();
          event.preventDefault();
        }

        break;
      //space

      case 32:
        if (!this.overlayVisible) {
          this.show();
          event.preventDefault();
        }

        break;
      //escape

      case 27:
        this.hide();
        break;
    }
  }

  updateLabel() {
    if (this.value && this.options && this.value.length && this.displaySelectedLabel) {
      let label = '';

      for (let i = 0; i < this.value.length; i++) {
        let itemLabel = this.findLabelByValue(this.value[i]);

        if (itemLabel) {
          if (label.length > 0) {
            label = label + ', ';
          }

          label = label + itemLabel;
        }
      }

      if (this.value.length <= this.maxSelectedLabels || this.selectedItemsLabel === 'ellipsis') {
        this.valuesAsString = label;
      } else {
        let pattern = /{(.*?)}/;

        if (pattern.test(this.selectedItemsLabel)) {
          this.valuesAsString = this.selectedItemsLabel.replace(this.selectedItemsLabel.match(pattern)[0], this.value.length + '');
        } else {
          this.valuesAsString = this.selectedItemsLabel;
        }
      }
    } else {
      this.valuesAsString = this.placeholder || this.defaultLabel;
    }
  }

  findLabelByValue(val) {
    if (this.group) {
      let label = null;

      for (let i = 0; i < this.options.length; i++) {
        let subOptions = this.getOptionGroupChildren(this.options[i]);

        if (subOptions) {
          label = this.searchLabelByValue(val, subOptions);

          if (label) {
            break;
          }
        }
      }

      return label;
    } else {
      return this.searchLabelByValue(val, this.options);
    }
  }

  searchLabelByValue(val, options) {
    let label = null;

    for (let i = 0; i < options.length; i++) {
      let option = options[i];
      let optionValue = this.getOptionValue(option);

      if (val == null && optionValue == null || primeng_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.equals(val, optionValue, this.dataKey)) {
        label = this.getOptionLabel(option);
        break;
      }
    }

    return label;
  }

  get allChecked() {
    let optionsToRender = this.optionsToRender;

    if (!optionsToRender || optionsToRender.length === 0) {
      return false;
    } else {
      let selectedDisabledItemsLength = 0;
      let unselectedDisabledItemsLength = 0;
      let selectedEnabledItemsLength = 0;
      let visibleOptionsLength = this.group ? 0 : this.optionsToRender.length;

      for (let option of optionsToRender) {
        if (!this.group) {
          let disabled = this.isOptionDisabled(option);
          let selected = this.isSelected(option);

          if (disabled) {
            if (selected) selectedDisabledItemsLength++;else unselectedDisabledItemsLength++;
          } else {
            if (selected) selectedEnabledItemsLength++;else return false;
          }
        } else {
          for (let opt of this.getOptionGroupChildren(option)) {
            let disabled = this.isOptionDisabled(opt);
            let selected = this.isSelected(opt);

            if (disabled) {
              if (selected) selectedDisabledItemsLength++;else unselectedDisabledItemsLength++;
            } else {
              if (selected) selectedEnabledItemsLength++;else {
                return false;
              }
            }

            visibleOptionsLength++;
          }
        }
      }

      return visibleOptionsLength === selectedDisabledItemsLength || visibleOptionsLength === selectedEnabledItemsLength || selectedEnabledItemsLength && visibleOptionsLength === selectedEnabledItemsLength + unselectedDisabledItemsLength + selectedDisabledItemsLength;
    }
  }

  get optionsToRender() {
    return this._filteredOptions || this.options;
  }

  get emptyOptions() {
    let optionsToRender = this.optionsToRender;
    return !optionsToRender || optionsToRender.length === 0;
  }

  get emptyMessageLabel() {
    return this.emptyMessage || this.config.getTranslation(primeng_api__WEBPACK_IMPORTED_MODULE_6__.TranslationKeys.EMPTY_MESSAGE);
  }

  get emptyFilterMessageLabel() {
    return this.emptyFilterMessage || this.config.getTranslation(primeng_api__WEBPACK_IMPORTED_MODULE_6__.TranslationKeys.EMPTY_FILTER_MESSAGE);
  }

  hasFilter() {
    return this._filterValue && this._filterValue.trim().length > 0;
  }

  onFilterInputChange(event) {
    this._filterValue = event.target.value;
    this.activateFilter();
    this.onFilter.emit({
      originalEvent: event,
      filter: this._filterValue
    });
    this.cd.detectChanges();
    this.alignOverlay();
  }

  activateFilter() {
    if (this.hasFilter() && this._options) {
      let searchFields = (this.filterBy || this.optionLabel || 'label').split(',');

      if (this.group) {
        let filteredGroups = [];

        for (let optgroup of this.options) {
          let filteredSubOptions = this.filterService.filter(this.getOptionGroupChildren(optgroup), searchFields, this.filterValue, this.filterMatchMode, this.filterLocale);

          if (filteredSubOptions && filteredSubOptions.length) {
            filteredGroups.push(Object.assign(Object.assign({}, optgroup), {
              [this.optionGroupChildren]: filteredSubOptions
            }));
          }
        }

        this._filteredOptions = filteredGroups;
      } else {
        this._filteredOptions = this.filterService.filter(this.options, searchFields, this._filterValue, this.filterMatchMode, this.filterLocale);
      }
    } else {
      this._filteredOptions = null;
    }
  }

  onHeaderCheckboxFocus() {
    this.headerCheckboxFocus = true;
  }

  onHeaderCheckboxBlur() {
    this.headerCheckboxFocus = false;
  }

  bindDocumentClickListener() {
    if (!this.documentClickListener) {
      const documentTarget = this.el ? this.el.nativeElement.ownerDocument : 'document';
      this.documentClickListener = this.renderer.listen(documentTarget, 'click', event => {
        if (!this.preventDocumentDefault && this.isOutsideClicked(event)) {
          this.hide();
        }

        this.preventDocumentDefault = false;
      });
    }
  }

  unbindDocumentClickListener() {
    if (this.documentClickListener) {
      this.documentClickListener();
      this.documentClickListener = null;
    }
  }

  bindDocumentResizeListener() {
    this.documentResizeListener = this.onWindowResize.bind(this);
    window.addEventListener('resize', this.documentResizeListener);
  }

  unbindDocumentResizeListener() {
    if (this.documentResizeListener) {
      window.removeEventListener('resize', this.documentResizeListener);
      this.documentResizeListener = null;
    }
  }

  onWindowResize() {
    if (!primeng_dom__WEBPACK_IMPORTED_MODULE_5__.DomHandler.isAndroid()) {
      this.hide();
    }
  }

  bindScrollListener() {
    if (!this.scrollHandler) {
      this.scrollHandler = new primeng_dom__WEBPACK_IMPORTED_MODULE_5__.ConnectedOverlayScrollHandler(this.containerViewChild.nativeElement, () => {
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

  onOverlayHide() {
    this.unbindDocumentClickListener();
    this.unbindDocumentResizeListener();
    this.unbindScrollListener();
    this.overlay = null;
    this.onModelTouched();
  }

  ngOnDestroy() {
    if (this.scrollHandler) {
      this.scrollHandler.destroy();
      this.scrollHandler = null;
    }

    if (this.overlay) {
      primeng_utils__WEBPACK_IMPORTED_MODULE_4__.ZIndexUtils.clear(this.overlay);
    }

    this.restoreOverlayAppend();
    this.onOverlayHide();
  }

}

MultiSelect.ɵfac = function MultiSelect_Factory(t) {
  return new (t || MultiSelect)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_6__.FilterService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_6__.PrimeNGConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_6__.OverlayService));
};

MultiSelect.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MultiSelect,
  selectors: [["p-multiSelect"]],
  contentQueries: function MultiSelect_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_6__.Footer, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_6__.Header, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_6__.PrimeTemplate, 4);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.footerFacet = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.headerFacet = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
    }
  },
  viewQuery: function MultiSelect_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c5, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c6, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c7, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.containerViewChild = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.filterInputChild = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.accessibleViewChild = _t.first);
    }
  },
  hostAttrs: [1, "p-element", "p-inputwrapper"],
  hostVars: 4,
  hostBindings: function MultiSelect_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("p-inputwrapper-filled", ctx.filled)("p-inputwrapper-focus", ctx.focus || ctx.overlayVisible);
    }
  },
  inputs: {
    style: "style",
    styleClass: "styleClass",
    panelStyle: "panelStyle",
    panelStyleClass: "panelStyleClass",
    inputId: "inputId",
    disabled: "disabled",
    readonly: "readonly",
    group: "group",
    filter: "filter",
    filterPlaceHolder: "filterPlaceHolder",
    filterLocale: "filterLocale",
    overlayVisible: "overlayVisible",
    tabindex: "tabindex",
    appendTo: "appendTo",
    dataKey: "dataKey",
    name: "name",
    label: "label",
    ariaLabelledBy: "ariaLabelledBy",
    displaySelectedLabel: "displaySelectedLabel",
    maxSelectedLabels: "maxSelectedLabels",
    selectionLimit: "selectionLimit",
    selectedItemsLabel: "selectedItemsLabel",
    showToggleAll: "showToggleAll",
    emptyFilterMessage: "emptyFilterMessage",
    emptyMessage: "emptyMessage",
    resetFilterOnHide: "resetFilterOnHide",
    dropdownIcon: "dropdownIcon",
    optionLabel: "optionLabel",
    optionValue: "optionValue",
    optionDisabled: "optionDisabled",
    optionGroupLabel: "optionGroupLabel",
    optionGroupChildren: "optionGroupChildren",
    showHeader: "showHeader",
    autoZIndex: "autoZIndex",
    baseZIndex: "baseZIndex",
    filterBy: "filterBy",
    virtualScroll: "virtualScroll",
    itemSize: "itemSize",
    showTransitionOptions: "showTransitionOptions",
    hideTransitionOptions: "hideTransitionOptions",
    ariaFilterLabel: "ariaFilterLabel",
    filterMatchMode: "filterMatchMode",
    tooltip: "tooltip",
    tooltipPosition: "tooltipPosition",
    tooltipPositionStyle: "tooltipPositionStyle",
    tooltipStyleClass: "tooltipStyleClass",
    autofocusFilter: "autofocusFilter",
    display: "display",
    autocomplete: "autocomplete",
    scrollHeight: "scrollHeight",
    defaultLabel: "defaultLabel",
    placeholder: "placeholder",
    options: "options",
    filterValue: "filterValue"
  },
  outputs: {
    onChange: "onChange",
    onFilter: "onFilter",
    onFocus: "onFocus",
    onBlur: "onBlur",
    onClick: "onClick",
    onPanelShow: "onPanelShow",
    onPanelHide: "onPanelHide"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([MULTISELECT_VALUE_ACCESSOR])],
  ngContentSelectors: _c18,
  decls: 12,
  vars: 33,
  consts: [[3, "ngClass", "ngStyle", "click"], ["container", ""], [1, "p-hidden-accessible"], ["type", "text", "readonly", "readonly", "aria-haspopup", "listbox", "role", "listbox", 3, "disabled", "focus", "blur", "keydown"], ["in", ""], [1, "p-multiselect-label-container", 3, "pTooltip", "tooltipPosition", "positionStyle", "tooltipStyleClass"], [1, "p-multiselect-label", 3, "ngClass"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngClass"], [1, "p-multiselect-trigger-icon", 3, "ngClass"], ["onOverlayAnimationEnd", "", 3, "ngClass", "ngStyle", "class", "keydown", "click", 4, "ngIf"], ["class", "p-multiselect-token", 4, "ngFor", "ngForOf"], [1, "p-multiselect-token"], ["token", ""], [1, "p-multiselect-token-label"], ["class", "p-multiselect-token-icon pi pi-times-circle", 3, "click", 4, "ngIf"], [1, "p-multiselect-token-icon", "pi", "pi-times-circle", 3, "click"], ["onOverlayAnimationEnd", "", 3, "ngClass", "ngStyle", "keydown", "click"], ["class", "p-multiselect-header", 4, "ngIf"], [1, "p-multiselect-items-wrapper"], ["role", "listbox", "aria-multiselectable", "true", 1, "p-multiselect-items", "p-component", 3, "ngClass"], ["itemslist", ""], ["class", "p-multiselect-footer", 4, "ngIf"], [1, "p-multiselect-header"], [4, "ngTemplateOutlet"], ["class", "p-checkbox p-component", 3, "ngClass", 4, "ngIf"], ["class", "p-multiselect-filter-container", 4, "ngIf"], ["type", "button", "pRipple", "", 1, "p-multiselect-close", "p-link", 3, "click"], [1, "p-multiselect-close-icon", "pi", "pi-times"], [1, "p-checkbox", "p-component", 3, "ngClass"], ["type", "checkbox", "readonly", "readonly", 3, "checked", "disabled", "focus", "blur", "keydown.space"], ["role", "checkbox", 1, "p-checkbox-box", 3, "ngClass", "click"], [1, "p-checkbox-icon", 3, "ngClass"], [1, "p-multiselect-filter-container"], ["type", "text", "role", "textbox", 1, "p-multiselect-filter", "p-inputtext", "p-component", 3, "value", "disabled", "input"], ["filterInput", ""], [1, "p-multiselect-filter-icon", "pi", "pi-search"], ["ngFor", "", 3, "ngForOf"], [1, "p-multiselect-item-group"], [4, "ngIf", "ngIfElse"], ["virtualScrollList", ""], ["class", "p-multiselect-empty-message", 4, "ngIf"], [3, "option", "selected", "label", "disabled", "template", "onClick", "onKeydown"], [3, "ngStyle", "itemSize", 4, "ngIf"], [3, "ngStyle", "itemSize"], ["viewport", ""], [4, "cdkVirtualFor", "cdkVirtualForOf"], [3, "option", "selected", "label", "disabled", "template", "itemSize", "onClick", "onKeydown"], [1, "p-multiselect-empty-message"], ["emptyFilter", ""], ["empty", ""], [1, "p-multiselect-footer"]],
  template: function MultiSelect_Template(rf, ctx) {
    if (rf & 1) {
      const _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiSelect_Template_div_click_0_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r82);

        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

        return ctx.onMouseclick($event, _r1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2)(3, "input", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function MultiSelect_Template_input_focus_3_listener($event) {
        return ctx.onInputFocus($event);
      })("blur", function MultiSelect_Template_input_blur_3_listener($event) {
        return ctx.onInputBlur($event);
      })("keydown", function MultiSelect_Template_input_keydown_3_listener($event) {
        return ctx.onKeydown($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5)(6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MultiSelect_ng_container_7_Template, 3, 2, "ng-container", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MultiSelect_ng_container_8_Template, 1, 0, "ng-container", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MultiSelect_div_11_Template, 9, 20, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](22, _c15, ctx.overlayVisible, ctx.display === "chip", ctx.focus, ctx.disabled))("ngStyle", ctx.style);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("label", ctx.label)("id", ctx.inputId)("name", ctx.name)("tabindex", ctx.tabindex)("aria-expanded", ctx.overlayVisible)("aria-labelledby", ctx.ariaLabelledBy);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pTooltip", ctx.tooltip)("tooltipPosition", ctx.tooltipPosition)("positionStyle", ctx.tooltipPositionStyle)("tooltipStyleClass", ctx.tooltipStyleClass);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](27, _c16, ctx.valuesAsString === (ctx.defaultLabel || ctx.placeholder), (ctx.valuesAsString == null || ctx.valuesAsString.length === 0) && (ctx.placeholder == null || ctx.placeholder.length === 0)));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.selectedItemsTemplate);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.selectedItemsTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](30, _c4, ctx.value));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](32, _c17));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.dropdownIcon);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.overlayVisible);
    }
  },
  directives: [MultiSelectItem, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__.CdkVirtualScrollViewport, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, primeng_tooltip__WEBPACK_IMPORTED_MODULE_8__.Tooltip, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, primeng_ripple__WEBPACK_IMPORTED_MODULE_2__.Ripple, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__.CdkFixedSizeVirtualScroll, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__.CdkVirtualForOf],
  styles: [".p-multiselect{display:inline-flex;cursor:pointer;position:relative;-webkit-user-select:none;user-select:none}.p-multiselect-trigger{display:flex;align-items:center;justify-content:center;flex-shrink:0}.p-multiselect-label-container{overflow:hidden;flex:1 1 auto;cursor:pointer}.p-multiselect-label{display:block;white-space:nowrap;cursor:pointer;overflow:hidden;text-overflow:ellipsis}.p-multiselect-label-empty{overflow:hidden;visibility:hidden}.p-multiselect-token{cursor:default;display:inline-flex;align-items:center;flex:0 0 auto}.p-multiselect-token-icon{cursor:pointer}.p-multiselect .p-multiselect-panel{min-width:100%}.p-multiselect-panel{position:absolute;top:0;left:0}.p-multiselect-items-wrapper{overflow:auto}.p-multiselect-items{margin:0;padding:0;list-style-type:none}.p-multiselect-item{cursor:pointer;display:flex;align-items:center;font-weight:400;white-space:nowrap;position:relative;overflow:hidden}.p-multiselect-header{display:flex;align-items:center;justify-content:space-between}.p-multiselect-filter-container{position:relative;flex:1 1 auto}.p-multiselect-filter-icon{position:absolute;top:50%;margin-top:-.5rem}.p-multiselect-filter-container .p-inputtext{width:100%}.p-multiselect-close{display:flex;align-items:center;justify-content:center;flex-shrink:0;overflow:hidden;position:relative}.p-fluid .p-multiselect{display:flex}\n"],
  encapsulation: 2,
  data: {
    animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.trigger)('overlayAnimation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.style)({
      opacity: 0,
      transform: 'scaleY(0.8)'
    }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.animate)('{{showTransitionParams}}')]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.animate)('{{hideTransitionParams}}', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.style)({
      opacity: 0
    }))])])]
  },
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MultiSelect, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'p-multiSelect',
      template: `
        <div #container [ngClass]="{'p-multiselect p-component':true,
            'p-multiselect-open':overlayVisible,
            'p-multiselect-chip': display === 'chip',
            'p-focus':focus,
            'p-disabled': disabled}" [ngStyle]="style" [class]="styleClass"
            (click)="onMouseclick($event,in)">
            <div class="p-hidden-accessible">
                <input #in type="text" [attr.label]="label" readonly="readonly" [attr.id]="inputId" [attr.name]="name" (focus)="onInputFocus($event)" (blur)="onInputBlur($event)"
                       [disabled]="disabled" [attr.tabindex]="tabindex" (keydown)="onKeydown($event)" aria-haspopup="listbox" [attr.aria-expanded]="overlayVisible"
                       [attr.aria-labelledby]="ariaLabelledBy" role="listbox">
            </div>
            <div class="p-multiselect-label-container" [pTooltip]="tooltip" [tooltipPosition]="tooltipPosition" [positionStyle]="tooltipPositionStyle" [tooltipStyleClass]="tooltipStyleClass">
                <div class="p-multiselect-label" [ngClass]="{'p-placeholder': valuesAsString === (defaultLabel || placeholder), 'p-multiselect-label-empty': ((valuesAsString == null || valuesAsString.length === 0) && (placeholder == null || placeholder.length === 0))}">
                    <ng-container *ngIf="!selectedItemsTemplate">
                        <ng-container *ngIf="display === 'comma'">{{valuesAsString || 'empty'}}</ng-container>
                        <ng-container *ngIf="display === 'chip'">
                            <div #token *ngFor="let item of value; let i = index;" class="p-multiselect-token">
                                <span class="p-multiselect-token-label">{{findLabelByValue(item)}}</span>
                                <span *ngIf="!disabled" class="p-multiselect-token-icon pi pi-times-circle" (click)="removeChip(item, $event)"></span>
                            </div>
                            <ng-container *ngIf="!value || value.length === 0">{{placeholder || defaultLabel || 'empty'}}</ng-container>
                        </ng-container>
                    </ng-container>
                    <ng-container *ngTemplateOutlet="selectedItemsTemplate; context: {$implicit: value}"></ng-container>
                </div>
            </div>
            <div [ngClass]="{'p-multiselect-trigger':true}">
                <span class="p-multiselect-trigger-icon" [ngClass]="dropdownIcon"></span>
            </div>
            <div *ngIf="overlayVisible" [ngClass]="['p-multiselect-panel p-component']" [@overlayAnimation]="{value: 'visible', params: {showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions}}" (@overlayAnimation.start)="onOverlayAnimationStart($event)"onOverlayAnimationEnd
                (@overlayAnimation.done)="onOverlayAnimationEnd($event)" [ngStyle]="panelStyle" [class]="panelStyleClass" (keydown)="onKeydown($event)" (click)="onOverlayClick($event)" >
                <div class="p-multiselect-header" *ngIf="showHeader">
                    <ng-content select="p-header"></ng-content>
                    <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
                    <div class="p-checkbox p-component" *ngIf="showToggleAll && !selectionLimit" [ngClass]="{'p-checkbox-disabled': disabled || toggleAllDisabled}">
                        <div class="p-hidden-accessible">
                            <input type="checkbox" readonly="readonly" [checked]="allChecked" (focus)="onHeaderCheckboxFocus()" (blur)="onHeaderCheckboxBlur()" (keydown.space)="toggleAll($event)" [disabled]="disabled || toggleAllDisabled">
                        </div>
                        <div class="p-checkbox-box" role="checkbox" [attr.aria-checked]="allChecked" [ngClass]="{'p-highlight':allChecked, 'p-focus': headerCheckboxFocus, 'p-disabled': disabled || toggleAllDisabled}" (click)="toggleAll($event)">
                            <span class="p-checkbox-icon" [ngClass]="{'pi pi-check':allChecked}"></span>
                        </div>
                    </div>
                    <div class="p-multiselect-filter-container" *ngIf="filter">
                        <input #filterInput type="text" [attr.autocomplete]="autocomplete" role="textbox" [value]="filterValue||''" (input)="onFilterInputChange($event)" class="p-multiselect-filter p-inputtext p-component" [disabled]="disabled" [attr.placeholder]="filterPlaceHolder" [attr.aria-label]="ariaFilterLabel">
                        <span class="p-multiselect-filter-icon pi pi-search"></span>
                    </div>
                    <button class="p-multiselect-close p-link" type="button" (click)="close($event)" pRipple>
                        <span class="p-multiselect-close-icon pi pi-times"></span>
                    </button>
                </div>
                <div class="p-multiselect-items-wrapper" [style.max-height]="virtualScroll ? 'auto' : (scrollHeight||'auto')">
                    <ul class="p-multiselect-items p-component" [ngClass]="{'p-multiselect-virtualscroll': virtualScroll}" role="listbox" aria-multiselectable="true">
                        <ng-container *ngIf="group">
                            <ng-template ngFor let-optgroup [ngForOf]="optionsToRender">
                                <li class="p-multiselect-item-group">
                                    <span *ngIf="!groupTemplate">{{getOptionGroupLabel(optgroup)||'empty'}}</span>
                                    <ng-container *ngTemplateOutlet="groupTemplate; context: {$implicit: optgroup}"></ng-container>
                                </li>
                                <ng-container *ngTemplateOutlet="itemslist; context: {$implicit: getOptionGroupChildren(optgroup)}"></ng-container>
                            </ng-template>
                        </ng-container>
                        <ng-container *ngIf="!group">
                            <ng-container *ngTemplateOutlet="itemslist; context: {$implicit: optionsToRender}"></ng-container>
                        </ng-container>
                        <ng-template #itemslist let-optionsToDisplay let-selectedOption="selectedOption">
                            <ng-container *ngIf="!virtualScroll; else virtualScrollList">
                                <ng-template ngFor let-option let-i="index" [ngForOf]="optionsToDisplay">
                                    <p-multiSelectItem [option]="option" [selected]="isSelected(option)" [label]="getOptionLabel(option)" [disabled]="isOptionDisabled(option)" (onClick)="onOptionClick($event)" (onKeydown)="onOptionKeydown($event)"
                                            [template]="itemTemplate"></p-multiSelectItem>
                                </ng-template>
                            </ng-container>
                            <ng-template #virtualScrollList>
                                <cdk-virtual-scroll-viewport #viewport [ngStyle]="{'height': scrollHeight}" [itemSize]="itemSize" *ngIf="virtualScroll && !emptyOptions">
                                    <ng-container *cdkVirtualFor="let option of optionsToDisplay; let i = index; let c = count; let f = first; let l = last; let e = even; let o = odd">
                                        <p-multiSelectItem [option]="option" [selected]="isSelected(option)" [label]="getOptionLabel(option)" [disabled]="isOptionDisabled(option)" (onClick)="onOptionClick($event)" (onKeydown)="onOptionKeydown($event)"
                                            [template]="itemTemplate" [itemSize]="itemSize"></p-multiSelectItem>
                                    </ng-container>
                                </cdk-virtual-scroll-viewport>
                            </ng-template>
                            <li *ngIf="hasFilter() && emptyOptions" class="p-multiselect-empty-message">
                                <ng-container *ngIf="!emptyFilterTemplate && !emptyTemplate; else emptyFilter">
                                    {{emptyFilterMessageLabel}}
                                </ng-container>
                                <ng-container #emptyFilter *ngTemplateOutlet="emptyFilterTemplate || emptyTemplate"></ng-container>
                            </li>
                            <li *ngIf="!hasFilter() && emptyOptions" class="p-multiselect-empty-message">
                                <ng-container *ngIf="!emptyTemplate; else empty">
                                    {{emptyMessageLabel}}
                                </ng-container>
                                <ng-container #empty *ngTemplateOutlet="emptyTemplate"></ng-container>
                            </li>
                        </ng-template>
                    </ul>
                </div>
                <div class="p-multiselect-footer" *ngIf="footerFacet || footerTemplate">
                    <ng-content select="p-footer"></ng-content>
                    <ng-container *ngTemplateOutlet="footerTemplate"></ng-container>
                </div>
            </div>
        </div>
    `,
      animations: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.trigger)('overlayAnimation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.style)({
        opacity: 0,
        transform: 'scaleY(0.8)'
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.animate)('{{showTransitionParams}}')]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.animate)('{{hideTransitionParams}}', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.style)({
        opacity: 0
      }))])])],
      host: {
        'class': 'p-element p-inputwrapper',
        '[class.p-inputwrapper-filled]': 'filled',
        '[class.p-inputwrapper-focus]': 'focus || overlayVisible'
      },
      providers: [MULTISELECT_VALUE_ACCESSOR],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      styles: [".p-multiselect{display:inline-flex;cursor:pointer;position:relative;-webkit-user-select:none;user-select:none}.p-multiselect-trigger{display:flex;align-items:center;justify-content:center;flex-shrink:0}.p-multiselect-label-container{overflow:hidden;flex:1 1 auto;cursor:pointer}.p-multiselect-label{display:block;white-space:nowrap;cursor:pointer;overflow:hidden;text-overflow:ellipsis}.p-multiselect-label-empty{overflow:hidden;visibility:hidden}.p-multiselect-token{cursor:default;display:inline-flex;align-items:center;flex:0 0 auto}.p-multiselect-token-icon{cursor:pointer}.p-multiselect .p-multiselect-panel{min-width:100%}.p-multiselect-panel{position:absolute;top:0;left:0}.p-multiselect-items-wrapper{overflow:auto}.p-multiselect-items{margin:0;padding:0;list-style-type:none}.p-multiselect-item{cursor:pointer;display:flex;align-items:center;font-weight:400;white-space:nowrap;position:relative;overflow:hidden}.p-multiselect-header{display:flex;align-items:center;justify-content:space-between}.p-multiselect-filter-container{position:relative;flex:1 1 auto}.p-multiselect-filter-icon{position:absolute;top:50%;margin-top:-.5rem}.p-multiselect-filter-container .p-inputtext{width:100%}.p-multiselect-close{display:flex;align-items:center;justify-content:center;flex-shrink:0;overflow:hidden;position:relative}.p-fluid .p-multiselect{display:flex}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: primeng_api__WEBPACK_IMPORTED_MODULE_6__.FilterService
    }, {
      type: primeng_api__WEBPACK_IMPORTED_MODULE_6__.PrimeNGConfig
    }, {
      type: primeng_api__WEBPACK_IMPORTED_MODULE_6__.OverlayService
    }];
  }, {
    style: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    styleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    panelStyle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    panelStyleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    inputId: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    readonly: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    group: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    filter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    filterPlaceHolder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    filterLocale: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    overlayVisible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    tabindex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    appendTo: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dataKey: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    label: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    ariaLabelledBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    displaySelectedLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    maxSelectedLabels: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectionLimit: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectedItemsLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showToggleAll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    emptyFilterMessage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    emptyMessage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    resetFilterOnHide: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dropdownIcon: [{
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
    optionGroupLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    optionGroupChildren: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showHeader: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    autoZIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    baseZIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    filterBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    virtualScroll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    itemSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showTransitionOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    hideTransitionOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    ariaFilterLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    filterMatchMode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    tooltip: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    tooltipPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    tooltipPositionStyle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    tooltipStyleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    autofocusFilter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    display: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    autocomplete: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    containerViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['container']
    }],
    filterInputChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['filterInput']
    }],
    accessibleViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['in']
    }],
    footerFacet: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [primeng_api__WEBPACK_IMPORTED_MODULE_6__.Footer]
    }],
    headerFacet: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [primeng_api__WEBPACK_IMPORTED_MODULE_6__.Header]
    }],
    templates: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [primeng_api__WEBPACK_IMPORTED_MODULE_6__.PrimeTemplate]
    }],
    onChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onFilter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onFocus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onBlur: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onPanelShow: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onPanelHide: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    scrollHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    defaultLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    placeholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    filterValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

class MultiSelectModule {}

MultiSelectModule.ɵfac = function MultiSelectModule_Factory(t) {
  return new (t || MultiSelectModule)();
};

MultiSelectModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: MultiSelectModule
});
MultiSelectModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, primeng_api__WEBPACK_IMPORTED_MODULE_6__.SharedModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__.ScrollingModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_8__.TooltipModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_2__.RippleModule], primeng_api__WEBPACK_IMPORTED_MODULE_6__.SharedModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__.ScrollingModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MultiSelectModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, primeng_api__WEBPACK_IMPORTED_MODULE_6__.SharedModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__.ScrollingModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_8__.TooltipModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_2__.RippleModule],
      exports: [MultiSelect, primeng_api__WEBPACK_IMPORTED_MODULE_6__.SharedModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__.ScrollingModule],
      declarations: [MultiSelect, MultiSelectItem]
    }]
  }], null, null);
})();
/**
 * Generated bundle index. Do not edit.
 */




/***/ })

}]);
//# sourceMappingURL=src_app_modules_home_modules_category-view_category-view_module_ts.js.map