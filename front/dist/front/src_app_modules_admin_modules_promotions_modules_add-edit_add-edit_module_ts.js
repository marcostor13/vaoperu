"use strict";
(self["webpackChunkfront"] = self["webpackChunkfront"] || []).push([["src_app_modules_admin_modules_promotions_modules_add-edit_add-edit_module_ts"],{

/***/ 94569:
/*!************************************************************************************!*\
  !*** ./src/app/modules/admin/modules/promotions/interfaces/promotion.interface.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CPromotion": () => (/* binding */ CPromotion),
/* harmony export */   "CPromotionInvalid": () => (/* binding */ CPromotionInvalid)
/* harmony export */ });
class CPromotion {
    constructor() {
        this._id = '';
        this.name = '';
        this.profileProviderId = '';
        this.description = '';
        this.images = [];
        this.price = null;
    }
}
class CPromotionInvalid {
    constructor() {
        this.name = false;
        this.profileProviderId = false;
        this.description = false;
        this.images = false;
        this.price = false;
    }
}


/***/ }),

/***/ 79983:
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/admin/modules/promotions/modules/add-edit/add-edit-routing.module.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddEditRoutingModule": () => (/* binding */ AddEditRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _add_edit_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-edit.component */ 4401);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _add_edit_component__WEBPACK_IMPORTED_MODULE_0__.AddEditComponent
    }
];
class AddEditRoutingModule {
}
AddEditRoutingModule.ɵfac = function AddEditRoutingModule_Factory(t) { return new (t || AddEditRoutingModule)(); };
AddEditRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AddEditRoutingModule });
AddEditRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AddEditRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 4401:
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/admin/modules/promotions/modules/add-edit/add-edit.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddEditComponent": () => (/* binding */ AddEditComponent)
/* harmony export */ });
/* harmony import */ var _interfaces_promotion_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../interfaces/promotion.interface */ 94569);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _services_general_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/general.service */ 21864);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ 81122);
/* harmony import */ var _services_promotion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/promotion.service */ 11460);
/* harmony import */ var src_app_modules_provider_modules_profile_provider_services_profile_provider_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/provider/modules/profile-provider/services/profile-provider.service */ 35650);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/fileupload */ 17197);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/dialog */ 33489);
/* harmony import */ var angular_cropperjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-cropperjs */ 47739);
/* harmony import */ var primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/confirmpopup */ 84296);













const _c0 = ["angularCropper"];
function AddEditComponent_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const profileProvider_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", profileProvider_r5._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", profileProvider_r5.comercialName, " ");
} }
const _c1 = function (a0) { return { "background-image": a0 }; };
function AddEditComponent_div_16_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 30)(1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddEditComponent_div_16_div_1_Template_div_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9); const currentImage_r7 = restoredCtx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r8.removeImage(currentImage_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const currentImage_r7 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](1, _c1, "url(" + ctx_r6.getBlobOrImage(currentImage_r7) + ")"));
} }
function AddEditComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AddEditComponent_div_16_div_1_Template, 3, 3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r2.currentImages);
} }
function AddEditComponent_button_20_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddEditComponent_button_20_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r10.confirm($event, ctx_r10.currentItem); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Eliminar");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
const _c2 = function (a0) { return { "invalid": a0 }; };
const _c3 = function (a0) { return { "width": a0 }; };
class AddEditComponent {
    constructor(route, generalService, messageService, promotionsService, router, profileProviderService, confirmationService) {
        this.route = route;
        this.generalService = generalService;
        this.messageService = messageService;
        this.promotionsService = promotionsService;
        this.router = router;
        this.profileProviderService = profileProviderService;
        this.confirmationService = confirmationService;
        this.displayModal = false;
        this.invalid = new _interfaces_promotion_interface__WEBPACK_IMPORTED_MODULE_0__.CPromotionInvalid;
        this.currentItem = new _interfaces_promotion_interface__WEBPACK_IMPORTED_MODULE_0__.CPromotion;
        this.currentImages = [];
        this.images = [];
        this.config = {
            aspectRatio: 16 / 16,
            dragMode: 'none',
            autoCropArea: 100
        };
        this.deleteImages = [];
        this.promotionId = this.route.snapshot.paramMap.get('id');
    }
    ngOnInit() {
        this.getCompanies();
        this.getPromotion();
    }
    getPromotion() {
        if (this.promotionId) {
            this.promotionsService.getById(this.promotionId).subscribe((response) => {
                this.currentItem = response.data;
                if (this.currentItem) {
                    this.replaceCurrentImagesByUrls();
                }
                else {
                    this.router.navigate(['/admin/promotions']);
                }
            }, error => {
                this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
            });
        }
    }
    getCompanies() {
        this.profileProviderService.getAllCompanies().subscribe((response) => {
            this.profileProviders = response.data;
        }, error => {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
        });
    }
    onUpload(event, fileUpload) {
        event.currentFiles.map((file) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                this.currentFile = file;
                this.openModalCrroper(reader.result);
                this.fileUpload = fileUpload;
            };
        });
    }
    moveCropper() {
        this.dataImage = this.angularCropper.cropper.crop().getCroppedCanvas({
            width: 400,
            height: 400
        }).toDataURL();
    }
    openModalCrroper(image) {
        this.imageUrl = image;
        this.dataImage = image;
        this.displayModal = true;
    }
    cropper() {
        this.currentImages = [...this.currentImages, { file: this.currentFile, blob: this.dataImage, url: null }];
        this.displayModal = false;
        this.fileUpload.clear();
    }
    uploadImages() {
        this.generalService.isLoad(true);
        this.generalService.uploadImageMultipleByBlob(this.currentImages, 'promotions/').subscribe((res) => {
            this.generalService.isLoad(false);
            if (typeof res === 'number') {
                this.uploadPercent = res;
            }
            else {
                this.currentItem.images = [...this.currentItem.images, res];
                this.add();
            }
        });
    }
    presave() {
        var _a;
        if (!this.validate()) {
            if (((_a = this.deleteImages) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                this.generalService.deleteImages(this.deleteImages.map(d => { return d.url; })).then(() => {
                    this.uploadImages();
                }).catch(_ => {
                    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al eliminar la imagenes' });
                });
            }
            else {
                this.uploadImages();
            }
        }
    }
    resetForm() {
        this.currentItem = new _interfaces_promotion_interface__WEBPACK_IMPORTED_MODULE_0__.CPromotion;
        this.currentImages = [];
    }
    add() {
        if (!this.currentItem._id) {
            delete this.currentItem._id;
        }
        this.promotionsService.save(this.currentItem).subscribe((response) => {
            this.messageService.add({ severity: 'success', summary: 'Mensaje', detail: response.message });
            this.replaceCurrentImagesByUrls();
            if (!this.promotionId) {
                this.resetForm();
            }
            this.displayModal = false;
            this.getPromotion();
        }, error => {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
        });
    }
    replaceCurrentImagesByUrls() {
        this.currentImages = [...this.currentItem.images.map(img => {
                return { file: null, blob: null, url: img };
            })];
    }
    removeImage(image) {
        if (image.url) {
            this.deleteImages.push(image);
            this.currentItem.images = this.currentItem.images.filter(img => img !== image.url);
            this.replaceCurrentImagesByUrls();
        }
        else {
            this.currentImages = this.currentImages.filter(img => img !== image);
        }
    }
    validate() {
        this.invalid = new _interfaces_promotion_interface__WEBPACK_IMPORTED_MODULE_0__.CPromotionInvalid;
        let invalid = false;
        if (!this.currentItem.name) {
            invalid = true;
            this.invalid.name = true;
        }
        if (!this.currentItem.profileProviderId) {
            invalid = true;
            this.invalid.profileProviderId = true;
        }
        if (!this.currentItem.description) {
            invalid = true;
            this.invalid.description = true;
        }
        if (!this.currentImages || this.currentImages.length === 0) {
            invalid = true;
            this.invalid.images = true;
        }
        if (invalid) {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Revise los campos' });
        }
        return invalid;
    }
    resetUploadButton() {
        this.fileUpload.clear();
    }
    getBlobOrImage(image) {
        return image.blob || image.url;
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
            }
        });
    }
    preDelete(item) {
        var _a;
        if (((_a = item.images) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            this.generalService.deleteImages(item.images).then(() => {
                this.currentImages = [];
                this.delete(item);
            }).catch(_ => {
                this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al eliminar la imagen' });
                this.delete(item);
            });
        }
        else {
            this.delete(item);
        }
    }
    delete(item) {
        this.promotionsService.delete(item._id).subscribe((response) => {
            this.generalService.c('Delete', response);
            this.messageService.add({ severity: 'success', summary: 'Mensaje', detail: response.message });
            this.router.navigate(['admin/promotions']);
        }, error => {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
        });
    }
    back() {
        this.router.navigate(['/admin/promotions']);
    }
}
AddEditComponent.ɵfac = function AddEditComponent_Factory(t) { return new (t || AddEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_general_service__WEBPACK_IMPORTED_MODULE_1__.GeneralService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_6__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_promotion_service__WEBPACK_IMPORTED_MODULE_2__.PromotionService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_modules_provider_modules_profile_provider_services_profile_provider_service__WEBPACK_IMPORTED_MODULE_3__.ProfileProviderService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_6__.ConfirmationService)); };
AddEditComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AddEditComponent, selectors: [["app-add-edit"]], viewQuery: function AddEditComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.angularCropper = _t.first);
    } }, decls: 32, vars: 44, consts: [[1, "p-5", "col-12", "col-md-6"], [1, "btn2", 3, "click"], [1, "text-color1", "mt-5"], ["type", "text", "placeholder", "Nombre", 1, "mt-5", 3, "ngClass", "ngModel", "keyup", "ngModelChange"], ["placeholder", "Descripci\u00F3n", 1, "mt-2", 3, "ngClass", "ngModel", "keyup", "ngModelChange"], [1, "mt-1", 3, "ngClass", "ngModel", "change", "ngModelChange"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["type", "number", "placeholder", "S/ Precio (opcional)", 1, "mt-2", 3, "ngModel", "ngModelChange"], [1, "mt-5", 3, "ngClass"], ["styleClass", "col-12 btn2", "mode", "basic", "accept", "image/*", "uploadLabel", "Subir", "cancelLabel", "Cancelar", "invalidFileSizeMessageDetail", "El tama\u00F1o m\u00E1ximo es {0}.", 3, "fileLimit", "maxFileSize", "chooseLabel", "multiple", "files", "auto", "onSelect"], ["fileUpload", ""], [1, "loading"], ["class", "row m-0 justify-content-center align-items-center mt-2", 4, "ngIf"], [1, "row", "justify-content-center", "mt-4"], [1, "btn1", "mr-2", 3, "click"], ["class", "btn3 bg-color6", 3, "click", 4, "ngIf"], ["header", "", 3, "visible", "modal", "styleClass", "baseZIndex", "autoZIndex", "draggable", "resizable", "visibleChange", "onHide"], [1, "d-flex", "justify-content-center"], [1, "container-cropper", "p-3"], [3, "cropperOptions", "imageUrl", "cropmove"], ["angularCropper", ""], [1, "p-3"], [1, "image", "image2", 3, "ngStyle"], [1, "col-12", "d-flex", "justify-content-center", "pb-5"], [1, "btn1", 3, "click"], [3, "autoZIndex", "baseZIndex"], [3, "value"], [1, "row", "m-0", "justify-content-center", "align-items-center", "mt-2"], ["class", "bg-color6 image image-miniature", 3, "ngStyle", 4, "ngFor", "ngForOf"], [1, "bg-color6", "image", "image-miniature", 3, "ngStyle"], [1, "delete", 3, "click"], [1, "pi", "pi-trash", "text-white", "f-20"], [1, "btn3", "bg-color6", 3, "click"]], template: function AddEditComponent_Template(rf, ctx) { if (rf & 1) {
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddEditComponent_Template_button_click_1_listener() { return ctx.back(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Atr\u00E1s");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keyup", function AddEditComponent_Template_input_keyup_5_listener() { return ctx.invalid.name = false; })("ngModelChange", function AddEditComponent_Template_input_ngModelChange_5_listener($event) { return ctx.currentItem.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "textarea", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keyup", function AddEditComponent_Template_textarea_keyup_6_listener() { return ctx.invalid.description = false; })("ngModelChange", function AddEditComponent_Template_textarea_ngModelChange_6_listener($event) { return ctx.currentItem.description = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function AddEditComponent_Template_select_change_7_listener() { return ctx.invalid.profileProviderId = false; })("ngModelChange", function AddEditComponent_Template_select_ngModelChange_7_listener($event) { return ctx.currentItem.profileProviderId = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Seleccionar negocio");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, AddEditComponent_option_10_Template, 2, 2, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AddEditComponent_Template_input_ngModelChange_11_listener($event) { return ctx.currentItem.price = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 9)(13, "p-fileUpload", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onSelect", function AddEditComponent_Template_p_fileUpload_onSelect_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](14); ctx.onUpload($event, _r1); return ctx.invalid.images = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, AddEditComponent_div_16_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 14)(18, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddEditComponent_Template_button_click_18_listener() { return ctx.presave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Guardar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, AddEditComponent_button_20_Template, 2, 0, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "p-dialog", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("visibleChange", function AddEditComponent_Template_p_dialog_visibleChange_21_listener($event) { return ctx.displayModal = $event; })("onHide", function AddEditComponent_Template_p_dialog_onHide_21_listener() { return ctx.resetUploadButton(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 18)(23, "div", 19)(24, "angular-cropper", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("cropmove", function AddEditComponent_Template_angular_cropper_cropmove_24_listener() { return ctx.moveCropper(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](27, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 24)(29, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddEditComponent_Template_button_click_29_listener() { return ctx.cropper(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "Subir");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "p-confirmPopup", 26);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx.promotionId ? "Editar" : "Agregar", " promoci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](32, _c2, ctx.invalid.name))("ngModel", ctx.currentItem.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](34, _c2, ctx.invalid.description))("ngModel", ctx.currentItem.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](36, _c2, ctx.invalid.profileProviderId))("ngModel", ctx.currentItem.profileProviderId);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.profileProviders);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.currentItem.price);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](38, _c2, ctx.invalid.images));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("fileLimit", 1)("maxFileSize", 2048000)("chooseLabel", "Subir imagen")("multiple", false)("files", ctx.images)("auto", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](40, _c3, ctx.uploadPercent + "%"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx.currentImages == null ? null : ctx.currentImages.length) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.currentItem._id);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("visible", ctx.displayModal)("modal", true)("styleClass", "modalLogin")("baseZIndex", 10000)("autoZIndex", true)("draggable", false)("resizable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("cropperOptions", ctx.config)("imageUrl", ctx.imageUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](42, _c1, "url(" + ctx.dataImage + ")"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("autoZIndex", false)("baseZIndex", 1000001);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NumberValueAccessor, primeng_fileupload__WEBPACK_IMPORTED_MODULE_9__.FileUpload, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgStyle, primeng_dialog__WEBPACK_IMPORTED_MODULE_10__.Dialog, angular_cropperjs__WEBPACK_IMPORTED_MODULE_11__.CropperComponent, primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_12__.ConfirmPopup], styles: [".container-cropper[_ngcontent-%COMP%] {\n  max-width: 300px;\n}\n\n.image2[_ngcontent-%COMP%] {\n  min-width: 300px;\n  min-height: 300px;\n}\n\n.image-miniature[_ngcontent-%COMP%] {\n  min-height: 100px;\n  min-width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1lZGl0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUFDSiIsImZpbGUiOiJhZGQtZWRpdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItY3JvcHBlcntcclxuICAgIG1heC13aWR0aDogMzAwcHg7XHJcbn1cclxuXHJcbi5pbWFnZTJ7XHJcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xyXG4gICAgbWluLWhlaWdodDogMzAwcHg7XHJcbn1cclxuXHJcbi5pbWFnZS1taW5pYXR1cmV7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcclxuICAgIG1pbi13aWR0aDogMTAwcHg7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 89750:
/*!**************************************************************************************!*\
  !*** ./src/app/modules/admin/modules/promotions/modules/add-edit/add-edit.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddEditModule": () => (/* binding */ AddEditModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _add_edit_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-edit-routing.module */ 79983);
/* harmony import */ var _add_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-edit.component */ 4401);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/dialog */ 33489);
/* harmony import */ var angular_cropperjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-cropperjs */ 47739);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/fileupload */ 17197);
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-image-cropper */ 92133);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/confirmpopup */ 84296);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);










class AddEditModule {
}
AddEditModule.ɵfac = function AddEditModule_Factory(t) { return new (t || AddEditModule)(); };
AddEditModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AddEditModule });
AddEditModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _add_edit_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddEditRoutingModule,
            primeng_dialog__WEBPACK_IMPORTED_MODULE_4__.DialogModule,
            primeng_fileupload__WEBPACK_IMPORTED_MODULE_5__.FileUploadModule,
            ngx_image_cropper__WEBPACK_IMPORTED_MODULE_6__.ImageCropperModule,
            angular_cropperjs__WEBPACK_IMPORTED_MODULE_7__.AngularCropperjsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_9__.ConfirmPopupModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AddEditModule, { declarations: [_add_edit_component__WEBPACK_IMPORTED_MODULE_1__.AddEditComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _add_edit_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddEditRoutingModule,
        primeng_dialog__WEBPACK_IMPORTED_MODULE_4__.DialogModule,
        primeng_fileupload__WEBPACK_IMPORTED_MODULE_5__.FileUploadModule,
        ngx_image_cropper__WEBPACK_IMPORTED_MODULE_6__.ImageCropperModule,
        angular_cropperjs__WEBPACK_IMPORTED_MODULE_7__.AngularCropperjsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_9__.ConfirmPopupModule] }); })();


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
//# sourceMappingURL=src_app_modules_admin_modules_promotions_modules_add-edit_add-edit_module_ts.js.map