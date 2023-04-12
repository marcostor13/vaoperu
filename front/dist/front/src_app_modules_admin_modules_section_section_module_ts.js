"use strict";
(self["webpackChunkfront"] = self["webpackChunkfront"] || []).push([["src_app_modules_admin_modules_section_section_module_ts"],{

/***/ 33291:
/*!*****************************************************************!*\
  !*** ./src/app/modules/admin/modules/section/models/section.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CItem": () => (/* binding */ CItem),
/* harmony export */   "CItemInvalid": () => (/* binding */ CItemInvalid),
/* harmony export */   "CSection": () => (/* binding */ CSection),
/* harmony export */   "CSectionInvalid": () => (/* binding */ CSectionInvalid),
/* harmony export */   "CSubitem": () => (/* binding */ CSubitem),
/* harmony export */   "CSubitemInvalid": () => (/* binding */ CSubitemInvalid)
/* harmony export */ });
class CSection {
    constructor() {
        this.name = '';
        this.primaryItemId = '';
        this.type = 0;
    }
}
class CItem {
    constructor() {
        this.name = '';
        this.image = '';
        this.sectionId = '';
    }
}
class CSubitem {
    constructor() {
        this.name = '';
        this.image = '';
        this.itemId = '';
    }
}
class CSectionInvalid {
    constructor() {
        this.name = false;
        this.primaryItemId = false;
        this.type = false;
    }
}
class CItemInvalid {
    constructor() {
        this.name = false;
        this.image = false;
        this.sectionId = false;
    }
}
class CSubitemInvalid {
    constructor() {
        this.name = false;
        this.image = false;
        this.itemId = false;
    }
}


/***/ }),

/***/ 15002:
/*!*************************************************************************!*\
  !*** ./src/app/modules/admin/modules/section/section-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SectionRoutingModule": () => (/* binding */ SectionRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _section_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./section.component */ 99908);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _section_component__WEBPACK_IMPORTED_MODULE_0__.SectionComponent
    }
];
class SectionRoutingModule {
}
SectionRoutingModule.ɵfac = function SectionRoutingModule_Factory(t) { return new (t || SectionRoutingModule)(); };
SectionRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SectionRoutingModule });
SectionRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SectionRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 99908:
/*!********************************************************************!*\
  !*** ./src/app/modules/admin/modules/section/section.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SectionComponent": () => (/* binding */ SectionComponent)
/* harmony export */ });
/* harmony import */ var subsink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! subsink */ 87478);
/* harmony import */ var _models_section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/section */ 33291);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_section_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/section.service */ 27858);
/* harmony import */ var _services_general_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/general.service */ 21864);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ 81122);
/* harmony import */ var primeng_orderlist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/orderlist */ 21046);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/dialog */ 33489);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/fileupload */ 17197);
/* harmony import */ var primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/confirmpopup */ 84296);












function SectionComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 12)(1, "div")(2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Nombre :");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div")(7, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SectionComponent_ng_template_15_Template_button_click_7_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8); const item_r6 = restoredCtx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r7.addEdit(item_r6, "section"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Editar");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r6.name);
} }
function SectionComponent_div_16_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 12)(1, "div")(2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Nombre :");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div")(7, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SectionComponent_div_16_ng_template_2_Template_button_click_7_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12); const item_r10 = restoredCtx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r11.addEdit(item_r10, "item"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Editar");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r10.name);
} }
const _c0 = function () { return { "max-height": "30rem" }; };
function SectionComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 4)(1, "p-orderList", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onReorder", function SectionComponent_div_16_Template_p_orderList_onReorder_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r13.updateAll("item"); })("onSelectionChange", function SectionComponent_div_16_Template_p_orderList_onSelectionChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r15.selectionChangeSubitem($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, SectionComponent_div_16_ng_template_2_Template, 9, 1, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx_r1.listItems)("listStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](3, _c0))("dragdrop", true);
} }
function SectionComponent_div_17_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 12)(1, "div")(2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Nombre :");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div")(7, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SectionComponent_div_17_ng_template_2_Template_button_click_7_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19); const item_r17 = restoredCtx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r18.addEdit(item_r17, "subitem"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Editar");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r17.name);
} }
function SectionComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 4)(1, "p-orderList", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onReorder", function SectionComponent_div_17_Template_p_orderList_onReorder_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r20.updateAll("subitem"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, SectionComponent_div_17_ng_template_2_Template, 9, 1, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx_r2.listSubitems)("listStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](3, _c0))("dragdrop", true);
} }
function SectionComponent_div_20_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", item_r24._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r24.name);
} }
function SectionComponent_div_20_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SectionComponent_div_20_button_9_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r25.confirm($event, ctx_r25.currentSection); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Eliminar");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
const _c1 = function (a0) { return { "invalid": a0 }; };
function SectionComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 18)(1, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keyup.enter", function SectionComponent_div_20_Template_input_keyup_enter_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r27.add(); })("ngModelChange", function SectionComponent_div_20_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r28); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r29.currentSection.name = $event; })("keyup", function SectionComponent_div_20_Template_input_keyup_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r28); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r30.invalidSection.name = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "select", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function SectionComponent_div_20_Template_select_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r28); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r31.currentSection.primaryItemId = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Selecione el item destacado");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, SectionComponent_div_20_option_5_Template, 2, 2, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function SectionComponent_div_20_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r28); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r32.currentSection.type = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SectionComponent_div_20_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r28); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r33.presave(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Guardar");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, SectionComponent_div_20_button_9_Template, 2, 0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r3.currentSection.name)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](9, _c1, ctx_r3.invalidSection.name))("placeholder", "Secci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](11, _c1, ctx_r3.invalidSection.primaryItemId))("ngModel", ctx_r3.currentSection.primaryItemId);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r3.currentItemsList);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](13, _c1, ctx_r3.invalidSection.type))("ngModel", ctx_r3.currentSection.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.currentSection._id);
} }
const _c2 = function (a0) { return { "background-image": a0 }; };
function SectionComponent_div_21_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 33)(1, "div", 34)(2, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SectionComponent_div_21_div_5_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r37.removeImage(ctx_r37.currentImage); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](1, _c2, "url(" + ctx_r34.getBlobOrImage(ctx_r34.currentImage) + ")"));
} }
function SectionComponent_div_21_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const section_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", section_r39._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](section_r39.name);
} }
function SectionComponent_div_21_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SectionComponent_div_21_button_12_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r41); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r40.confirm($event, ctx_r40.currentItem); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Eliminar");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
const _c3 = function (a0) { return { "width": a0 }; };
function SectionComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 18)(1, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keyup.enter", function SectionComponent_div_21_Template_input_keyup_enter_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r42.add(); })("ngModelChange", function SectionComponent_div_21_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r43); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r44.currentItem.name = $event; })("keyup", function SectionComponent_div_21_Template_input_keyup_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r43); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r45.invalidItem.name = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 28)(3, "p-fileUpload", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onSelect", function SectionComponent_div_21_Template_p_fileUpload_onSelect_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r43); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); ctx_r46.onUpload($event); return ctx_r46.invalidItem.image = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, SectionComponent_div_21_div_5_Template, 4, 3, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "select", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function SectionComponent_div_21_Template_select_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r43); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r47.currentItem.sectionId = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Seleccione una secci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, SectionComponent_div_21_option_9_Template, 2, 2, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SectionComponent_div_21_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r43); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r48.presave(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Guardar");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, SectionComponent_div_21_button_12_Template, 2, 0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r4.currentItem.name)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](18, _c1, ctx_r4.invalidItem.name))("placeholder", "Item");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](20, _c1, ctx_r4.invalidItem.image));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("fileLimit", 1)("maxFileSize", 10000000)("chooseLabel", "Subir imagen")("files", ctx_r4.images)("auto", false)("disabled", ctx_r4.currentImage ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](22, _c3, ctx_r4.uploadPercent + "%"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.currentImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](24, _c1, ctx_r4.invalidItem.sectionId))("ngModel", ctx_r4.currentItem.sectionId);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r4.sectionsList);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r4.buttonDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.currentItem._id);
} }
function SectionComponent_div_22_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r52 = ctx.$implicit;
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", item_r52._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", item_r52.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" -- ", ctx_r49.getNameSection(item_r52.sectionId), "");
} }
function SectionComponent_div_22_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 33)(1, "div", 34)(2, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SectionComponent_div_22_div_9_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r54); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r53.removeImage(ctx_r53.currentImage); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](1, _c2, "url(" + ctx_r50.getBlobOrImage(ctx_r50.currentImage) + ")"));
} }
function SectionComponent_div_22_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SectionComponent_div_22_button_12_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r56); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r55.confirm($event, ctx_r55.currentSubitem); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Eliminar");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function SectionComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 18)(1, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keyup.enter", function SectionComponent_div_22_Template_input_keyup_enter_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r58); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r57.add(); })("ngModelChange", function SectionComponent_div_22_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r58); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r59.currentSubitem.name = $event; })("keyup", function SectionComponent_div_22_Template_input_keyup_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r58); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r60.invalidSubitem.name = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 28)(3, "p-fileUpload", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onSelect", function SectionComponent_div_22_Template_p_fileUpload_onSelect_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r58); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); ctx_r61.onUpload($event); return ctx_r61.invalidSubitem.image = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "select", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function SectionComponent_div_22_Template_select_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r58); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r62.currentSubitem.itemId = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Seleccione un item");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, SectionComponent_div_22_option_8_Template, 4, 3, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, SectionComponent_div_22_div_9_Template, 4, 3, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SectionComponent_div_22_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r58); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r63.presave(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Guardar");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, SectionComponent_div_22_button_12_Template, 2, 0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r5.currentSubitem.name)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](18, _c1, ctx_r5.invalidSubitem.name))("placeholder", "SubItem");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](20, _c1, ctx_r5.invalidSubitem.image));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("fileLimit", 1)("maxFileSize", 10000000)("chooseLabel", "Subir imagen")("files", ctx_r5.images)("auto", false)("disabled", ctx_r5.currentImage ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](22, _c3, ctx_r5.uploadPercent + "%"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](24, _c1, ctx_r5.invalidSubitem.itemId))("ngModel", ctx_r5.currentSubitem.itemId);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r5.itemsList);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r5.currentImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r5.buttonDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r5.currentSubitem._id);
} }
class SectionComponent {
    constructor(sectionService, general, confirmationService, messageService) {
        this.sectionService = sectionService;
        this.general = general;
        this.confirmationService = confirmationService;
        this.messageService = messageService;
        this.subs = new subsink__WEBPACK_IMPORTED_MODULE_0__.SubSink();
        this.displayModal = false;
        this.sectionsList = [];
        this.itemsList = [];
        this.currentSection = new _models_section__WEBPACK_IMPORTED_MODULE_1__.CSection;
        this.currentItem = new _models_section__WEBPACK_IMPORTED_MODULE_1__.CItem;
        this.currentSubitem = new _models_section__WEBPACK_IMPORTED_MODULE_1__.CSubitem;
        this.invalidSection = new _models_section__WEBPACK_IMPORTED_MODULE_1__.CSectionInvalid;
        this.invalidItem = new _models_section__WEBPACK_IMPORTED_MODULE_1__.CItemInvalid;
        this.invalidSubitem = new _models_section__WEBPACK_IMPORTED_MODULE_1__.CSubitemInvalid;
        this.images = [];
        this.currentType = '';
        this.buttonDisabled = false;
    }
    ngOnInit() {
        this.getSectionsAndItems();
    }
    getSectionsAndItems() {
        this.subs.add(this.sectionService.getAllSectionsAndItems().subscribe((response) => {
            this.items = [...response.data];
            this.sectionsList = [...this.items.map(i => { return i.section; })];
            this.items.map(i => {
                this.itemsList = [...this.itemsList, ...i.items.map(i => { return i.item; })];
            });
        }, error => {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
        }));
    }
    getNameSection(id) {
        return this.sectionsList.find(s => s._id === id).name;
    }
    resetInvalid() {
        switch (this.currentType) {
            case 'section':
                this.invalidSection = {
                    name: false,
                    primaryItemId: false
                };
                break;
            case 'item':
                this.invalidItem = {
                    name: false,
                    image: false,
                    sectionId: false
                };
                break;
            case 'subitem':
                this.invalidSubitem = {
                    name: false,
                    image: false,
                    itemId: false
                };
                break;
            default:
                break;
        }
    }
    reset() {
        this.currentImage = null;
        this.uploadPercent = 0;
        this.listItems = undefined;
        this.listSubitems = undefined;
        switch (this.currentType) {
            case 'section':
                this.currentSection = {
                    name: '',
                    primaryItemId: '',
                    type: 0
                };
                break;
            case 'item':
                this.currentItem = {
                    name: '',
                    image: '',
                    sectionId: ''
                };
                break;
            case 'subitem':
                this.currentSubitem = {
                    name: '',
                    image: '',
                    itemId: ''
                };
                break;
            default:
                break;
        }
    }
    validateSection() {
        this.resetInvalid();
        let invalid = false;
        if (!this.currentSection.name) {
            invalid = true;
            this.invalidSection.name = true;
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Revise los campos' });
        }
        return invalid;
    }
    validateItem() {
        this.resetInvalid();
        let invalid = false;
        if (!this.currentItem.name) {
            invalid = true;
            this.invalidItem.name = true;
        }
        if (!this.currentImage) {
            invalid = true;
            this.invalidItem.image = true;
        }
        if (!this.currentItem.sectionId) {
            invalid = true;
            this.invalidItem.sectionId = true;
        }
        if (invalid) {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Revise los campos' });
        }
        return invalid;
    }
    validateSubitem() {
        this.resetInvalid();
        let invalid = false;
        if (!this.currentSubitem.name) {
            invalid = true;
            this.invalidSubitem.name = true;
        }
        if (!this.currentImage) {
            invalid = true;
            this.invalidSubitem.image = true;
        }
        if (!this.currentSubitem.itemId) {
            invalid = true;
            this.invalidSubitem.itemId = true;
        }
        if (invalid) {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Revise los campos' });
        }
        return invalid;
    }
    initAdd(type) {
        this.addEdit(null, type);
    }
    addEdit(item, type) {
        this.currentType = type;
        if (item) {
            switch (this.currentType) {
                case 'section':
                    this.currentSection = item;
                    this.currentItemsList = [...this.itemsList.filter(i => i.sectionId === item._id)];
                    break;
                case 'item':
                    this.currentItem = item;
                    break;
                case 'subitem':
                    this.currentSubitem = item;
                    break;
                default:
                    break;
            }
            if (item.image) {
                this.currentImage = { file: null, blob: null, url: item.image };
            }
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
        let payload;
        let type;
        switch (this.currentType) {
            case 'section':
                payload = this.currentSection;
                type = 'section';
                break;
            case 'item':
                payload = this.currentItem;
                type = 'item-section';
                break;
            case 'subitem':
                payload = this.currentSubitem;
                type = 'subitem-section';
                break;
            default:
                break;
        }
        this.sectionService.save(payload, type).subscribe((response) => {
            this.messageService.add({ severity: 'success', summary: 'Mensaje', detail: response.message });
            this.reset();
            this.getSectionsAndItems();
            this.displayModal = false;
        }, error => {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
        });
    }
    updateAll(type) {
        let payload;
        switch (type) {
            case 'section':
                payload = this.sectionsList;
                type = 'section';
                break;
            case 'item':
                payload = this.listItems;
                type = 'item-section';
                break;
            case 'subitem':
                payload = this.listSubitems;
                type = 'subitem-section';
                break;
            default:
                break;
        }
        this.sectionService.updateAll(payload, type).subscribe((response) => {
            this.messageService.add({ severity: 'success', summary: 'Mensaje', detail: response.message });
            this.reset();
            this.getSectionsAndItems();
            this.displayModal = false;
        }, error => {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
        });
    }
    selectionChangeItem($event) {
        this.listItemsData = undefined;
        this.listItems = undefined;
        const itemsData = this.items.find(i => i.section._id === $event.value[0]._id).items;
        this.listItemsData = itemsData;
        this.listItems = itemsData.map(i => { return i.item; });
    }
    selectionChangeSubitem($event) {
        this.listSubitems = undefined;
        const itemId = $event.value[0]._id;
        this.listSubitems = this.listItemsData.find(i => i.item._id === itemId).subitems;
    }
    delete(item) {
        let type;
        switch (this.currentType) {
            case 'section':
                type = 'section';
                break;
            case 'item':
                type = 'item-section';
                break;
            case 'subitem':
                type = 'subitem-section';
                break;
            default:
                break;
        }
        if (item.image) {
            this.general.deleteImage(item.image).then(() => {
                this.currentImage = null;
                this.sectionService.delete(item._id, type).subscribe((response) => {
                    this.messageService.add({ severity: 'success', summary: 'Mensaje', detail: response.message });
                    this.reset();
                    this.getSectionsAndItems();
                }, error => {
                    this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
                });
            }).catch(_ => {
                this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al eliminar la imagen' });
            });
        }
        else {
            this.sectionService.delete(item._id, type).subscribe((response) => {
                this.messageService.add({ severity: 'success', summary: 'Mensaje', detail: response.message });
                this.reset();
                this.getSectionsAndItems();
            }, error => {
                this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
            });
        }
    }
    //IMAGE
    removeImage(image) {
        if (image.url) {
            this.deleteImage = image;
            this.currentItem.image = '';
        }
        this.currentImage = null;
    }
    onUpload(event) {
        this.buttonDisabled = true;
        event.currentFiles.map((file) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                this.currentImage = { file: file, blob: reader.result, url: null };
                this.buttonDisabled = false;
            };
        });
        this.images = [];
    }
    validate() {
        switch (this.currentType) {
            case 'section':
                return this.validateSection();
            case 'item':
                return this.validateItem();
            case 'subitem':
                return this.validateSubitem();
        }
    }
    presave() {
        var _a;
        if (!this.validate()) {
            if (this.deleteImage) {
                this.general.deleteImage(this.deleteImage.url).then(() => {
                    this.currentImage = null;
                }).catch(_ => {
                    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al eliminar la imagen' });
                });
            }
            if (this.currentType !== 'section') {
                if ((_a = this.currentImage) === null || _a === void 0 ? void 0 : _a.file) {
                    this.general.uploadImage(this.currentImage.file, `${this.currentType}/`).subscribe((res) => {
                        if (typeof res === 'number') {
                            this.uploadPercent = res;
                        }
                        else {
                            this.currentImage = { file: null, blob: null, url: res };
                            if (this.currentType === 'item') {
                                this.currentItem.image = res;
                            }
                            else if (this.currentType === 'subitem') {
                                this.currentSubitem.image = res;
                            }
                            this.add();
                        }
                    });
                }
                else {
                    this.add();
                }
            }
            else {
                this.add();
            }
        }
    }
    getBlobOrImage(image) {
        return image.blob || image.url;
    }
}
SectionComponent.ɵfac = function SectionComponent_Factory(t) { return new (t || SectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_section_service__WEBPACK_IMPORTED_MODULE_2__.SectionService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_general_service__WEBPACK_IMPORTED_MODULE_3__.GeneralService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_5__.ConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_5__.MessageService)); };
SectionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: SectionComponent, selectors: [["app-section"]], decls: 24, vars: 19, consts: [[1, "p-5"], [1, "row", "m-0", "justify-content-between", "align-items-center"], [1, "btn2", 3, "click"], [1, "pi", "pi-plus", "mr-2"], [1, "mt-5"], ["header", "Lista de secciones", "filterPlaceholder", "Buscar por nombre", "filterBy", "name", 3, "value", "listStyle", "dragdrop", "onReorder", "onSelectionChange"], ["pTemplate", "item", "class", "mt-3"], ["class", "mt-5", 4, "ngIf"], ["header", "", 3, "visible", "modal", "styleClass", "baseZIndex", "autoZIndex", "draggable", "resizable", "visibleChange"], [1, "col-12", "row", "m-0", "justify-content-center", 3, "ngSwitch"], ["class", "row m-0 p-0 flex-column col-12 col-md-6", 4, "ngSwitchCase"], [3, "autoZIndex", "baseZIndex"], ["draggable", "true", 1, "item-list", "row", "justify-content-between", "align-items-center", "m-0", "pl-2", "pr-2"], [1, "font-700"], [1, "ml-3"], [1, "btn2", "p-0", "pl-3", "pr-3", 3, "click"], ["header", "Lista de items", "filterPlaceholder", "Buscar por nombre", "filterBy", "name", 3, "value", "listStyle", "dragdrop", "onReorder", "onSelectionChange"], ["header", "Lista de subitems", "filterPlaceholder", "Buscar por nombre", "filterBy", "name", 3, "value", "listStyle", "dragdrop", "onReorder"], [1, "row", "m-0", "p-0", "flex-column", "col-12", "col-md-6"], ["type", "text", 3, "ngModel", "ngClass", "placeholder", "keyup.enter", "ngModelChange", "keyup"], [1, "mt-2", 3, "ngClass", "ngModel", "ngModelChange"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["type", "number", "min", "0", "max", "4", 1, "mt-2", 3, "ngClass", "ngModel", "ngModelChange"], [1, "btn1", "mt-4", "mb-5", 3, "click"], ["class", "btn3 bg-color6 pt-2 pb-2 mt-2 mb-5", 3, "click", 4, "ngIf"], [3, "value"], [1, "btn3", "bg-color6", "pt-2", "pb-2", "mt-2", "mb-5", 3, "click"], [1, "mt-2", 3, "ngClass"], ["styleClass", "col-12 btn2", "mode", "basic", "accept", "image/*", "uploadLabel", "Subir", "cancelLabel", "Cancelar", "invalidFileSizeMessageDetail", "El tama\u00F1o m\u00E1ximo es {0}.", 3, "fileLimit", "maxFileSize", "chooseLabel", "files", "auto", "disabled", "onSelect"], [1, "loading"], ["class", "row m-0 justify-content-center align-items-center mt-2", 4, "ngIf"], [1, "btn1", "mt-4", "mb-5", 3, "disabled", "click"], [1, "row", "m-0", "justify-content-center", "align-items-center", "mt-2"], [1, "bg-color6", "image-miniature", 3, "ngStyle"], [1, "delete", 3, "click"], [1, "pi", "pi-trash", "text-white", "f-20"], [1, "text-color5", "bold"]], template: function SectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Secciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SectionComponent_Template_button_click_4_listener() { return ctx.initAdd("section"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " Agregar secci\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SectionComponent_Template_button_click_7_listener() { return ctx.initAdd("item"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " Agregar items ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SectionComponent_Template_button_click_10_listener() { return ctx.initAdd("subitem"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, " Agregar subitems ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 4)(14, "p-orderList", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onReorder", function SectionComponent_Template_p_orderList_onReorder_14_listener() { return ctx.updateAll("section"); })("onSelectionChange", function SectionComponent_Template_p_orderList_onSelectionChange_14_listener($event) { return ctx.selectionChangeItem($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, SectionComponent_ng_template_15_Template, 9, 1, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, SectionComponent_div_16_Template, 3, 4, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, SectionComponent_div_17_Template, 3, 4, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "p-dialog", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("visibleChange", function SectionComponent_Template_p_dialog_visibleChange_18_listener($event) { return ctx.displayModal = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, SectionComponent_div_20_Template, 10, 15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, SectionComponent_div_21_Template, 13, 26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, SectionComponent_div_22_Template, 13, 26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "p-confirmPopup", 11);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx.sectionsList)("listStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](18, _c0))("dragdrop", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx.listItems == null ? null : ctx.listItems.length) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx.listSubitems == null ? null : ctx.listSubitems.length) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("visible", ctx.displayModal)("modal", true)("styleClass", "modalLogin")("baseZIndex", 10000)("autoZIndex", false)("draggable", false)("resizable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitch", ctx.currentType);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "item");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "subitem");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("autoZIndex", false)("baseZIndex", 1000001);
    } }, directives: [primeng_orderlist__WEBPACK_IMPORTED_MODULE_6__.OrderList, primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeTemplate, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, primeng_dialog__WEBPACK_IMPORTED_MODULE_8__.Dialog, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgSwitchCase, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NumberValueAccessor, primeng_fileupload__WEBPACK_IMPORTED_MODULE_10__.FileUpload, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgStyle, primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_11__.ConfirmPopup], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWN0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 54430:
/*!*****************************************************************!*\
  !*** ./src/app/modules/admin/modules/section/section.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SectionModule": () => (/* binding */ SectionModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _section_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./section-routing.module */ 15002);
/* harmony import */ var _section_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./section.component */ 99908);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ 81122);
/* harmony import */ var primeng_orderlist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/orderlist */ 21046);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/dialog */ 33489);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/toast */ 72802);
/* harmony import */ var primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/confirmpopup */ 84296);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/fileupload */ 17197);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);











class SectionModule {
}
SectionModule.ɵfac = function SectionModule_Factory(t) { return new (t || SectionModule)(); };
SectionModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SectionModule });
SectionModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [primeng_api__WEBPACK_IMPORTED_MODULE_3__.ConfirmationService], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _section_routing_module__WEBPACK_IMPORTED_MODULE_0__.SectionRoutingModule,
            primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_5__.ConfirmPopupModule,
            primeng_orderlist__WEBPACK_IMPORTED_MODULE_6__.OrderListModule,
            primeng_dialog__WEBPACK_IMPORTED_MODULE_7__.DialogModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            primeng_toast__WEBPACK_IMPORTED_MODULE_9__.ToastModule,
            primeng_fileupload__WEBPACK_IMPORTED_MODULE_10__.FileUploadModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SectionModule, { declarations: [_section_component__WEBPACK_IMPORTED_MODULE_1__.SectionComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _section_routing_module__WEBPACK_IMPORTED_MODULE_0__.SectionRoutingModule,
        primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_5__.ConfirmPopupModule,
        primeng_orderlist__WEBPACK_IMPORTED_MODULE_6__.OrderListModule,
        primeng_dialog__WEBPACK_IMPORTED_MODULE_7__.DialogModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        primeng_toast__WEBPACK_IMPORTED_MODULE_9__.ToastModule,
        primeng_fileupload__WEBPACK_IMPORTED_MODULE_10__.FileUploadModule] }); })();


/***/ }),

/***/ 27858:
/*!***************************************************************************!*\
  !*** ./src/app/modules/admin/modules/section/services/section.service.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SectionService": () => (/* binding */ SectionService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../services/api.service */ 5830);


class SectionService {
    constructor(api) {
        this.api = api;
        this.model = 'section';
        this.model2 = 'item-section';
        this.model3 = 'subitem-section';
    }
    save(element, type) {
        const data = {
            service: element._id ? `update-${type}/${element._id}` : `save-${type}`,
            type: element._id ? 'patch' : 'post',
            data: element
        };
        return this.api.api(data);
    }
    updateAll(items, type) {
        const data = {
            service: `update-${type}-all`,
            type: 'patch',
            data: items
        };
        return this.api.api(data);
    }
    get() {
        const data = {
            service: `get-sections-and-items-${this.model}`,
            type: 'get',
            data: null
        };
        return this.api.api(data);
    }
    delete(id, type) {
        const data = {
            service: `delete-${type}/${id}`,
            type: 'delete',
            data: null
        };
        return this.api.api(data);
    }
    getItemsBySubitemName(subitemName) {
        const data = {
            service: `get-items-by-subitem-name/${subitemName}`,
            type: 'get',
            data: null
        };
        return this.api.api(data);
    }
    getAllSectionsAndItems() {
        const data = {
            service: `get-sections-and-items-section`,
            type: 'get',
            data: null
        };
        return this.api.api(data);
    }
    getSectionsAndItems(itemName) {
        const data = {
            service: `get-section-and-items/${itemName}`,
            type: 'get',
            data: null
        };
        return this.api.api(data);
    }
}
SectionService.ɵfac = function SectionService_Factory(t) { return new (t || SectionService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService)); };
SectionService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SectionService, factory: SectionService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_modules_admin_modules_section_section_module_ts.js.map