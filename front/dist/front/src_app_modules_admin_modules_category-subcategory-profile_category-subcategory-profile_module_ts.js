"use strict";
(self["webpackChunkfront"] = self["webpackChunkfront"] || []).push([["src_app_modules_admin_modules_category-subcategory-profile_category-subcategory-profile_module_ts"],{

/***/ 61655:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/modules/admin/modules/category-subcategory-profile/category-subcategory-profile-routing.module.ts ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategorySubcategoryProfileRoutingModule": () => (/* binding */ CategorySubcategoryProfileRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _category_subcategory_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category-subcategory-profile.component */ 48036);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _category_subcategory_profile_component__WEBPACK_IMPORTED_MODULE_0__.CategorySubcategoryProfileComponent
    }
];
class CategorySubcategoryProfileRoutingModule {
}
CategorySubcategoryProfileRoutingModule.ɵfac = function CategorySubcategoryProfileRoutingModule_Factory(t) { return new (t || CategorySubcategoryProfileRoutingModule)(); };
CategorySubcategoryProfileRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CategorySubcategoryProfileRoutingModule });
CategorySubcategoryProfileRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CategorySubcategoryProfileRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 48036:
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/admin/modules/category-subcategory-profile/category-subcategory-profile.component.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategorySubcategoryProfileComponent": () => (/* binding */ CategorySubcategoryProfileComponent)
/* harmony export */ });
/* harmony import */ var _interfaces_category_subcategory_profile_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interfaces/category-subcategory-profile.interfaces */ 57086);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 70655);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_category_subcategory_profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/category-subcategory-profile.service */ 61926);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ 81122);
/* harmony import */ var src_app_modules_provider_modules_profile_provider_services_profile_provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/provider/modules/profile-provider/services/profile-provider.service */ 35650);
/* harmony import */ var _section_services_section_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../section/services/section.service */ 27858);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var primeng_orderlist__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/orderlist */ 21046);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/dialog */ 33489);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 40398);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/confirmdialog */ 46625);













function CategorySubcategoryProfileComponent_div_4_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 10)(1, "div")(2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Negocio :");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div")(7, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CategorySubcategoryProfileComponent_div_4_ng_template_2_Template_button_click_7_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5); const item_r3 = restoredCtx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r4.addEdit(item_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Editar");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r3.comercialName);
} }
const _c0 = function () { return { "max-height": "30rem" }; };
function CategorySubcategoryProfileComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 7)(1, "p-orderList", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, CategorySubcategoryProfileComponent_div_4_ng_template_2_Template, 9, 1, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx_r0.profileProviders)("listStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](3, _c0))("dragdrop", true);
} }
function CategorySubcategoryProfileComponent_div_7_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", item_r9.item._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r9.item.name);
} }
function CategorySubcategoryProfileComponent_div_7_select_7_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subitem_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", subitem_r11 == null ? null : subitem_r11._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](subitem_r11 == null ? null : subitem_r11.name);
} }
function CategorySubcategoryProfileComponent_div_7_select_7_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "select", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function CategorySubcategoryProfileComponent_div_7_select_7_Template_select_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r12.currentSubitemId = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Seleccione el subitem");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, CategorySubcategoryProfileComponent_div_7_select_7_option_3_Template, 2, 2, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r7.currentSubitemId);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r7.currentSubitems);
} }
const _c1 = function (a0, a1, a2, a3) { return { "bg-color8": a0, "bg-color1": a1, "bg-color6": a2, "bg-color7": a3 }; };
function CategorySubcategoryProfileComponent_div_7_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "fa-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CategorySubcategoryProfileComponent_div_7_div_10_div_1_Template_fa_icon_click_2_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17); const item_r15 = restoredCtx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return ctx_r16.confirm($event, item_r15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r15 = ctx.$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction4"](3, _c1, item_r15.type === "subcategory", item_r15.type === "category", item_r15.type == "item", item_r15.type == "subitem"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", item_r15.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx_r14.faTrash);
} }
function CategorySubcategoryProfileComponent_div_7_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CategorySubcategoryProfileComponent_div_7_div_10_div_1_Template, 3, 8, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r8.currentList);
} }
function CategorySubcategoryProfileComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 14)(1, "h5", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "select", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function CategorySubcategoryProfileComponent_div_7_Template_select_change_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r18.toogleItems($event); })("ngModelChange", function CategorySubcategoryProfileComponent_div_7_Template_select_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r20.currentItemSectionId = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Seleccione el item");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, CategorySubcategoryProfileComponent_div_7_option_6_Template, 2, 2, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, CategorySubcategoryProfileComponent_div_7_select_7_Template, 4, 2, "select", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CategorySubcategoryProfileComponent_div_7_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r21.add2(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Agregar");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, CategorySubcategoryProfileComponent_div_7_div_10_Template, 2, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.currentProfileProvider.comercialName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r1.currentItemSectionId);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx_r1.currentSubitems == null ? null : ctx_r1.currentSubitems.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !(ctx_r1.currentItemSectionId && (ctx_r1.currentSubitems == null ? null : ctx_r1.currentSubitems.length) === 0 || ctx_r1.currentItemSectionId && ctx_r1.currentSubitemId));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.currentList);
} }
class CategorySubcategoryProfileComponent {
    constructor(categorySubcategoryProfileService, messageService, confirmationService, profileProviderService, sectionService) {
        this.categorySubcategoryProfileService = categorySubcategoryProfileService;
        this.messageService = messageService;
        this.confirmationService = confirmationService;
        this.profileProviderService = profileProviderService;
        this.sectionService = sectionService;
        this.currentList = [];
        this.currentItem = {
            name: '',
            categorySubcategoryId: '',
            type: '',
            profileProviderId: ''
        };
        this.displayModal = false;
        this.invalid = new _interfaces_category_subcategory_profile_interfaces__WEBPACK_IMPORTED_MODULE_0__.CCategorySubcategoryProfileInvalid;
        this.currentItemSectionId = '';
        this.currentSubitemId = '';
        this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faTrash;
    }
    ngOnInit() {
        this.getProfiles();
        this.getSections();
    }
    getProfiles() {
        this.profileProviderService.getAllCompanies().subscribe((response) => {
            this.profileProviders = response.data;
        }, error => {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: error.message });
        });
    }
    getCategoriesAndSubcategoriesByProfileProfiderId(profileProviderId) {
        this.categorySubcategoryProfileService.getByProfileProviderId(profileProviderId).subscribe((response) => {
            this.currentList = response.data;
        }, error => {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: error.message });
        });
    }
    reset() {
        this.currentList = null;
    }
    addEdit(item = null) {
        if (item) {
            this.currentProfileProvider = item;
            this.getCategoriesAndSubcategoriesByProfileProfiderId(item._id);
        }
        else {
            this.reset();
        }
        this.displayModal = true;
    }
    add2() {
        var _a;
        if ((this.currentItemSectionId && ((_a = this.currentSubitems) === null || _a === void 0 ? void 0 : _a.length) === 0) || (this.currentItemSectionId && this.currentSubitemId)) {
            const payload = {
                profileProviderId: this.currentProfileProvider._id,
                categorySubcategoryId: this.currentSubitemId ? this.currentSubitemId : this.currentItemSectionId,
                type: this.currentSubitemId ? 'subitem' : 'item',
                name: this.currentSubitemId ?
                    this.currentSubitems.find(s => s._id === this.currentSubitemId).name :
                    this.items.find(i => i.item._id === this.currentItemSectionId).item.name
            };
            this.categorySubcategoryProfileService.save(payload).subscribe((response) => {
                this.messageService.add({ severity: 'success', summary: 'Éxito', detail: response.message });
                this.getCategoriesAndSubcategoriesByProfileProfiderId(this.currentProfileProvider._id);
                this.reset2();
            }, error => {
                this.messageService.add({ severity: 'error', summary: 'Error', detail: error.message });
            });
        }
        else {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Debe completar todos los campos' });
        }
    }
    reset2() {
        this.currentItemSectionId = '';
        this.currentSubitemId = '';
    }
    confirm(event, item) {
        this.confirmationService.confirm({
            target: event.target,
            message: "¿Segúro que desea eliminar?",
            icon: "pi pi-exclamation-triangle",
            acceptLabel: "Sí",
            rejectLabel: "No",
            accept: () => {
                this.delete(item);
            },
            reject: () => {
                // Nothing
            }
        });
    }
    delete(item) {
        this.categorySubcategoryProfileService.delete(item._id).subscribe((response) => {
            this.messageService.add({ severity: 'success', summary: 'Éxito', detail: response.message });
            this.getCategoriesAndSubcategoriesByProfileProfiderId(item.profileProviderId);
        }, error => {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: error.message });
        });
    }
    getSections() {
        this.sectionService.get().subscribe((response) => {
            this.sections = response.data;
            this.items = [].concat.apply([], this.sections.map(s => s.items));
        });
    }
    toogleItems($event) {
        this.currentSubitems = null;
        const val = $event.target.value;
        this.currentSubitems = [].concat.apply([], this.items.map(i => {
            if (i.item._id === val) {
                return i.subitems;
            }
        })).filter(c => c);
    }
}
CategorySubcategoryProfileComponent.ɵfac = function CategorySubcategoryProfileComponent_Factory(t) { return new (t || CategorySubcategoryProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_category_subcategory_profile_service__WEBPACK_IMPORTED_MODULE_1__.CategorySubcategoryProfileService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_6__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_6__.ConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_modules_provider_modules_profile_provider_services_profile_provider_service__WEBPACK_IMPORTED_MODULE_2__.ProfileProviderService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_section_services_section_service__WEBPACK_IMPORTED_MODULE_3__.SectionService)); };
CategorySubcategoryProfileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CategorySubcategoryProfileComponent, selectors: [["app-category-subcategory-profile"]], decls: 9, vars: 9, consts: [[1, "p-5"], [1, "row", "m-0", "justify-content-between", "align-items-center"], ["class", "mt-5", 4, "ngIf"], ["header", "", 3, "visible", "modal", "styleClass", "baseZIndex", "autoZIndex", "draggable", "resizable", "visibleChange"], [1, "w-100", "d-flex", "m-0", "justify-content-center", "pb-5"], ["class", "row m-0 p-0 flex-column col-12 col-md-6", 4, "ngIf"], ["header", "Confirmaci\u00F3n", "icon", "pi pi-exclamation-triangle"], [1, "mt-5"], ["header", "Lista de perfiles", "filterPlaceholder", "Buscar por nombre", "filterBy", "comercialName", 3, "value", "listStyle", "dragdrop"], ["pTemplate", "item", "class", "mt-3"], ["draggable", "true", 1, "item-list", "row", "justify-content-between", "align-items-center", "m-0", "pl-2", "pr-2"], [1, "font-700"], [1, "ml-3"], [1, "btn2", "p-0", "pl-3", "pr-3", 3, "click"], [1, "row", "m-0", "p-0", "flex-column", "col-12", "col-md-6"], [1, "text-center"], [1, "mt-4", 3, "ngModel", "change", "ngModelChange"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "mt-2", 3, "ngModel", "ngModelChange", 4, "ngIf"], [1, "btn1", "mt-2", 3, "disabled", "click"], ["class", "mt-3 d-flex justify-content-center align-items-center flex-wrap border rounded", 4, "ngIf"], [3, "value"], [1, "mt-2", 3, "ngModel", "ngModelChange"], [1, "mt-3", "d-flex", "justify-content-center", "align-items-center", "flex-wrap", "border", "rounded"], ["class", "m-2 p-2 px-4 rounded", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "m-2", "p-2", "px-4", "rounded", 3, "ngClass"], [1, "f-15", "text-color4", "cursor", 3, "icon", "click"]], template: function CategorySubcategoryProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Agregar categor\u00EDas y/o subcategor\u00EDas");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, CategorySubcategoryProfileComponent_div_4_Template, 3, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "p-dialog", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("visibleChange", function CategorySubcategoryProfileComponent_Template_p_dialog_visibleChange_5_listener($event) { return ctx.displayModal = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, CategorySubcategoryProfileComponent_div_7_Template, 11, 6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "p-confirmDialog", 6);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.profileProviders);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("visible", ctx.displayModal)("modal", true)("styleClass", "modalLogin")("baseZIndex", 10000)("autoZIndex", false)("draggable", false)("resizable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.currentProfileProvider);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, primeng_orderlist__WEBPACK_IMPORTED_MODULE_8__.OrderList, primeng_api__WEBPACK_IMPORTED_MODULE_6__.PrimeTemplate, primeng_dialog__WEBPACK_IMPORTED_MODULE_9__.Dialog, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__.FaIconComponent, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_12__.ConfirmDialog], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRlZ29yeS1zdWJjYXRlZ29yeS1wcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 63636:
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/admin/modules/category-subcategory-profile/category-subcategory-profile.module.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategorySubcategoryProfileModule": () => (/* binding */ CategorySubcategoryProfileModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _category_subcategory_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category-subcategory-profile-routing.module */ 61655);
/* harmony import */ var _category_subcategory_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category-subcategory-profile.component */ 48036);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/dialog */ 33489);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var primeng_orderlist__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/orderlist */ 21046);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ 81122);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 40398);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/confirmdialog */ 46625);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);










class CategorySubcategoryProfileModule {
}
CategorySubcategoryProfileModule.ɵfac = function CategorySubcategoryProfileModule_Factory(t) { return new (t || CategorySubcategoryProfileModule)(); };
CategorySubcategoryProfileModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: CategorySubcategoryProfileModule });
CategorySubcategoryProfileModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [
        primeng_api__WEBPACK_IMPORTED_MODULE_3__.ConfirmationService
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _category_subcategory_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.CategorySubcategoryProfileRoutingModule,
            primeng_dialog__WEBPACK_IMPORTED_MODULE_5__.DialogModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_7__.ConfirmDialogModule,
            primeng_orderlist__WEBPACK_IMPORTED_MODULE_8__.OrderListModule,
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__.FontAwesomeModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CategorySubcategoryProfileModule, { declarations: [_category_subcategory_profile_component__WEBPACK_IMPORTED_MODULE_1__.CategorySubcategoryProfileComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _category_subcategory_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.CategorySubcategoryProfileRoutingModule,
        primeng_dialog__WEBPACK_IMPORTED_MODULE_5__.DialogModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_7__.ConfirmDialogModule,
        primeng_orderlist__WEBPACK_IMPORTED_MODULE_8__.OrderListModule,
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__.FontAwesomeModule] }); })();


/***/ }),

/***/ 57086:
/*!**************************************************************************************************************************!*\
  !*** ./src/app/modules/admin/modules/category-subcategory-profile/interfaces/category-subcategory-profile.interfaces.ts ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CCategorySubcategoryProfileInvalid": () => (/* binding */ CCategorySubcategoryProfileInvalid)
/* harmony export */ });
class CCategorySubcategoryProfileInvalid {
    constructor() {
        this._id = false;
        this.name = false;
        this.categorySubcategoryId = false;
        this.type = false;
        this.profileProviderId = false;
    }
}


/***/ }),

/***/ 35650:
/*!************************************************************************************************!*\
  !*** ./src/app/modules/provider/modules/profile-provider/services/profile-provider.service.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileProviderService": () => (/* binding */ ProfileProviderService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../../services/api.service */ 5830);
/* harmony import */ var _services_general_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/general.service */ 21864);
/* harmony import */ var src_app_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/auth/services/auth.service */ 12542);




class ProfileProviderService {
    constructor(api, general, authService) {
        this.api = api;
        this.general = general;
        this.authService = authService;
        this.model = 'profile-provider';
    }
    save(element) {
        const data = {
            service: element._id ? `update-${this.model}/${element._id}` : `save-${this.model}`,
            type: element._id ? 'patch' : 'post',
            data: element
        };
        return this.api.api(data);
    }
    search(payload) {
        const data = {
            service: `search-${this.model}`,
            type: 'post',
            data: payload
        };
        return this.api.api(data);
    }
    get() {
        const data = {
            service: `get-${this.model}-by-user-id/${this.authService.getUserID()}`,
            type: 'get',
            data: null
        };
        return this.api.api(data);
    }
    getById(id) {
        const data = {
            service: `get-${this.model}-by-id/${id}`,
            type: 'get',
            data: null
        };
        return this.api.api(data);
    }
    getAllById(id) {
        const data = {
            service: `get-all-${this.model}-by-id/${id}`,
            type: 'get',
            data: null
        };
        return this.api.api(data);
    }
    getByUserId(id) {
        const data = {
            service: `get-${this.model}-by-user-id/${id}`,
            type: 'get',
            data: null
        };
        return this.api.api(data);
    }
    getAllCompanies() {
        const data = {
            service: `get-${this.model}`,
            type: 'get',
            data: null
        };
        return this.api.api(data);
    }
    delete(id) {
        const data = {
            service: `delete-${this.model}/${id}`,
            type: 'delete',
            data: null
        };
        return this.api.api(data);
    }
    getUrlByProfileProviderId(id) {
        const data = {
            service: `get-url-by-profile-provider-id/${id}`,
            type: 'get',
            data: null
        };
        return this.api.api(data);
    }
    getByArray(profileProviders) {
        const data = {
            service: `get-${this.model}-by-array`,
            type: 'post',
            data: { profileProviders }
        };
        return this.api.api(data);
    }
    getUrlByUrl(url) {
        const data = {
            service: `get-url-by-url/${url}`,
            type: 'get',
            data: null
        };
        return this.api.api(data);
    }
}
ProfileProviderService.ɵfac = function ProfileProviderService_Factory(t) { return new (t || ProfileProviderService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_general_service__WEBPACK_IMPORTED_MODULE_1__.GeneralService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_app_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService)); };
ProfileProviderService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ProfileProviderService, factory: ProfileProviderService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_modules_admin_modules_category-subcategory-profile_category-subcategory-profile_module_ts.js.map