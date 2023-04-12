"use strict";
(self["webpackChunkfront"] = self["webpackChunkfront"] || []).push([["src_app_modules_admin_modules_district_district_module_ts"],{

/***/ 61411:
/*!***************************************************************************!*\
  !*** ./src/app/modules/admin/modules/district/district-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DistrictRoutingModule": () => (/* binding */ DistrictRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _district_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./district.component */ 90153);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _district_component__WEBPACK_IMPORTED_MODULE_0__.DistrictComponent
    }
];
class DistrictRoutingModule {
}
DistrictRoutingModule.ɵfac = function DistrictRoutingModule_Factory(t) { return new (t || DistrictRoutingModule)(); };
DistrictRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DistrictRoutingModule });
DistrictRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DistrictRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 90153:
/*!**********************************************************************!*\
  !*** ./src/app/modules/admin/modules/district/district.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DistrictComponent": () => (/* binding */ DistrictComponent)
/* harmony export */ });
/* harmony import */ var subsink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! subsink */ 87478);
/* harmony import */ var _models_district__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/district */ 72298);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_district_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/district.service */ 28949);
/* harmony import */ var _services_general_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/general.service */ 21864);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ 81122);
/* harmony import */ var primeng_orderlist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/orderlist */ 21046);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/dialog */ 33489);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/confirmpopup */ 84296);











function DistrictComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 14)(1, "div")(2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Nombre :");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div")(7, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DistrictComponent_ng_template_9_Template_button_click_7_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const item_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r3.addEdit(item_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Editar");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r2.name);
} }
function DistrictComponent_button_16_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DistrictComponent_button_16_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r5.confirm($event, ctx_r5.currentItem); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Eliminar");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { "max-height": "30rem" }; };
const _c1 = function (a0) { return { "invalid": a0 }; };
class DistrictComponent {
    constructor(districtService, general, confirmationService, messageService) {
        this.districtService = districtService;
        this.general = general;
        this.confirmationService = confirmationService;
        this.messageService = messageService;
        this.subs = new subsink__WEBPACK_IMPORTED_MODULE_0__.SubSink();
        this.displayModal = false;
        this.currentItem = new _models_district__WEBPACK_IMPORTED_MODULE_1__.CDistrict;
        this.invalid = new _models_district__WEBPACK_IMPORTED_MODULE_1__.CDistrictInvalid;
    }
    ngOnInit() {
        this.get();
    }
    get() {
        this.subs.add(this.districtService.get().subscribe((response) => {
            this.items = response.data;
        }, error => {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
        }));
    }
    validate() {
        this.invalid = new _models_district__WEBPACK_IMPORTED_MODULE_1__.CDistrictInvalid;
        let invalid = false;
        if (!this.currentItem.name) {
            invalid = true;
            this.invalid.name = true;
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Debe completar todos los campos requeridos' });
        }
        return invalid;
    }
    reset() {
        this.currentItem = new _models_district__WEBPACK_IMPORTED_MODULE_1__.CDistrict;
    }
    addEdit(item = null) {
        if (item) {
            this.currentItem = item;
        }
        else {
            this.reset();
        }
        this.displayModal = true;
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
    add() {
        if (!this.validate()) {
            this.subs.add(this.districtService.save(this.currentItem).subscribe((response) => {
                this.messageService.add({ severity: 'success', summary: 'Mensaje', detail: response.message });
                this.currentItem = new _models_district__WEBPACK_IMPORTED_MODULE_1__.CDistrict;
                this.get();
            }, error => {
                this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
            }));
        }
    }
    updateAll() {
        this.subs.add(this.districtService.updateAll(this.items).subscribe((response) => {
            this.messageService.add({ severity: 'success', summary: 'Mensaje', detail: response.message });
            this.currentItem = new _models_district__WEBPACK_IMPORTED_MODULE_1__.CDistrict;
            this.get();
        }, error => {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
        }));
    }
    delete(item) {
        this.subs.add(this.districtService.delete(item._id).subscribe((response) => {
            this.messageService.add({ severity: 'success', summary: 'Mensaje', detail: response.message });
            this.currentItem = new _models_district__WEBPACK_IMPORTED_MODULE_1__.CDistrict;
            this.get();
        }, error => {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
        }));
    }
    getElementByID(id) {
        return this.items.filter((item) => item._id === id);
    }
}
DistrictComponent.ɵfac = function DistrictComponent_Factory(t) { return new (t || DistrictComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_district_service__WEBPACK_IMPORTED_MODULE_2__.DistrictService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_general_service__WEBPACK_IMPORTED_MODULE_3__.GeneralService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_5__.ConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_5__.MessageService)); };
DistrictComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: DistrictComponent, selectors: [["app-district"]], decls: 18, vars: 19, consts: [[1, "p-5"], [1, "row", "m-0", "justify-content-between", "align-items-center"], [1, "btn2", 3, "click"], [1, "pi", "pi-plus", "mr-2"], [1, "mt-5"], ["header", "Lista de distritos", "filterPlaceholder", "Buscar por nombre", "filterBy", "name", 3, "value", "listStyle", "dragdrop", "onReorder"], ["pTemplate", "item", "class", "mt-3"], ["header", "", 3, "visible", "modal", "styleClass", "baseZIndex", "autoZIndex", "draggable", "resizable", "visibleChange"], [1, "col-12", "row", "m-0", "justify-content-center"], [1, "row", "m-0", "p-0", "flex-column", "col-12", "col-md-6"], ["type", "text", 1, "invalid", "mt-5", "input-login", 3, "ngModel", "ngClass", "placeholder", "keyup.enter", "keyup", "ngModelChange"], [1, "btn1", "mt-4", 3, "click"], ["class", "btn3 bg-color6 pt-2 pb-2 mt-2", 3, "click", 4, "ngIf"], [3, "autoZIndex", "baseZIndex"], ["draggable", "true", 1, "item-list", "row", "justify-content-between", "align-items-center", "m-0", "pl-2", "pr-2"], [1, "font-700"], [1, "ml-3"], [1, "btn2", "p-0", "pl-3", "pr-3", 3, "click"], [1, "btn3", "bg-color6", "pt-2", "pb-2", "mt-2", 3, "click"]], template: function DistrictComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Distritos");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DistrictComponent_Template_button_click_4_listener() { return ctx.addEdit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " Agregar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 4)(8, "p-orderList", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onReorder", function DistrictComponent_Template_p_orderList_onReorder_8_listener() { return ctx.updateAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, DistrictComponent_ng_template_9_Template, 9, 1, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "p-dialog", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("visibleChange", function DistrictComponent_Template_p_dialog_visibleChange_10_listener($event) { return ctx.displayModal = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 8)(12, "div", 9)(13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keyup.enter", function DistrictComponent_Template_input_keyup_enter_13_listener() { return ctx.add(); })("keyup", function DistrictComponent_Template_input_keyup_13_listener() { return ctx.invalid.name = false; })("ngModelChange", function DistrictComponent_Template_input_ngModelChange_13_listener($event) { return ctx.currentItem.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DistrictComponent_Template_button_click_14_listener() { return ctx.add(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Guardar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, DistrictComponent_button_16_Template, 2, 0, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "p-confirmPopup", 13);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx.items)("listStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](16, _c0))("dragdrop", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("visible", ctx.displayModal)("modal", true)("styleClass", "modalLogin")("baseZIndex", 10000)("autoZIndex", false)("draggable", false)("resizable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.currentItem.name)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](17, _c1, ctx.invalid.name))("placeholder", "Distrito");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.currentItem._id);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("autoZIndex", false)("baseZIndex", 1000001);
    } }, directives: [primeng_orderlist__WEBPACK_IMPORTED_MODULE_6__.OrderList, primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeTemplate, primeng_dialog__WEBPACK_IMPORTED_MODULE_7__.Dialog, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_10__.ConfirmPopup], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaXN0cmljdC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 21388:
/*!*******************************************************************!*\
  !*** ./src/app/modules/admin/modules/district/district.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DistrictModule": () => (/* binding */ DistrictModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _district_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./district-routing.module */ 61411);
/* harmony import */ var _district_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./district.component */ 90153);
/* harmony import */ var primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/confirmpopup */ 84296);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ 81122);
/* harmony import */ var primeng_orderlist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/orderlist */ 21046);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/dialog */ 33489);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);









class DistrictModule {
}
DistrictModule.ɵfac = function DistrictModule_Factory(t) { return new (t || DistrictModule)(); };
DistrictModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: DistrictModule });
DistrictModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [primeng_api__WEBPACK_IMPORTED_MODULE_3__.ConfirmationService], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _district_routing_module__WEBPACK_IMPORTED_MODULE_0__.DistrictRoutingModule,
            primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_5__.ConfirmPopupModule,
            primeng_orderlist__WEBPACK_IMPORTED_MODULE_6__.OrderListModule,
            primeng_dialog__WEBPACK_IMPORTED_MODULE_7__.DialogModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DistrictModule, { declarations: [_district_component__WEBPACK_IMPORTED_MODULE_1__.DistrictComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _district_routing_module__WEBPACK_IMPORTED_MODULE_0__.DistrictRoutingModule,
        primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_5__.ConfirmPopupModule,
        primeng_orderlist__WEBPACK_IMPORTED_MODULE_6__.OrderListModule,
        primeng_dialog__WEBPACK_IMPORTED_MODULE_7__.DialogModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule] }); })();


/***/ }),

/***/ 72298:
/*!*******************************************************************!*\
  !*** ./src/app/modules/admin/modules/district/models/district.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CDistrict": () => (/* binding */ CDistrict),
/* harmony export */   "CDistrictInvalid": () => (/* binding */ CDistrictInvalid)
/* harmony export */ });
class CDistrict {
    constructor() {
        this.name = '';
    }
}
class CDistrictInvalid {
    constructor() {
        this._id = false;
        this.name = false;
    }
}


/***/ })

}]);
//# sourceMappingURL=src_app_modules_admin_modules_district_district_module_ts.js.map