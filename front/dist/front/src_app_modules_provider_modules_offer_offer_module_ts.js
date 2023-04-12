"use strict";
(self["webpackChunkfront"] = self["webpackChunkfront"] || []).push([["src_app_modules_provider_modules_offer_offer_module_ts"],{

/***/ 43103:
/*!****************************************************************!*\
  !*** ./src/app/modules/provider/modules/offer/models/offer.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "COffer": () => (/* binding */ COffer),
/* harmony export */   "COfferInvalid": () => (/* binding */ COfferInvalid)
/* harmony export */ });
class COffer {
    constructor() {
        this.name = '';
        this.profileProviderId = '';
        this.description = '';
        this.images = [];
        this.price = null;
        this.isActive = false;
        this.promotionalPrice = null;
    }
}
class COfferInvalid {
    constructor() {
        this.name = false;
        this.images = false;
        this.price = false;
        this.description = false;
    }
}


/***/ }),

/***/ 69361:
/*!************************************************************************!*\
  !*** ./src/app/modules/provider/modules/offer/offer-routing.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OfferRoutingModule": () => (/* binding */ OfferRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _offer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./offer.component */ 70669);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _offer_component__WEBPACK_IMPORTED_MODULE_0__.OfferComponent
    }
];
class OfferRoutingModule {
}
OfferRoutingModule.ɵfac = function OfferRoutingModule_Factory(t) { return new (t || OfferRoutingModule)(); };
OfferRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: OfferRoutingModule });
OfferRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](OfferRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 70669:
/*!*******************************************************************!*\
  !*** ./src/app/modules/provider/modules/offer/offer.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OfferComponent": () => (/* binding */ OfferComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var subsink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! subsink */ 87478);
/* harmony import */ var _models_offer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/offer */ 43103);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_offer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/offer.service */ 69062);
/* harmony import */ var _services_general_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/general.service */ 21864);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/api */ 81122);
/* harmony import */ var _profile_provider_services_profile_provider_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../profile-provider/services/profile-provider.service */ 35650);
/* harmony import */ var _components_menu_provider_menu_provider_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/menu-provider/menu-provider.component */ 39493);
/* harmony import */ var _components_header_provider_header_provider_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/header-provider/header-provider.component */ 10756);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/product-list/product-list.component */ 53957);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/dialog */ 33489);
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/inputswitch */ 82236);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _shared_components_crop_image_crop_image_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/crop-image/crop-image.component */ 92251);
/* harmony import */ var primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/confirmpopup */ 84296);

















function OfferComponent_app_product_list_12_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "app-product-list", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("productsEvent", function OfferComponent_app_product_list_12_Template_app_product_list_productsEvent_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r3.offerListEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("items", ctx_r0.items);
} }
const _c0 = function (a0) { return { "background-image": a0 }; };
function OfferComponent_div_24_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 28)(1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function OfferComponent_div_24_div_1_Template_div_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r8); const currentImage_r6 = restoredCtx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r7.removeImage(currentImage_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const currentImage_r6 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](1, _c0, "url(" + ctx_r5.getBlobOrImage(currentImage_r6) + ")"));
} }
function OfferComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, OfferComponent_div_24_div_1_Template, 3, 3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r1.currentImages);
} }
function OfferComponent_button_31_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function OfferComponent_button_31_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r9.confirm($event, ctx_r9.currentItem); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Eliminar");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
const _c1 = function (a0) { return { "invalid": a0 }; };
const _c2 = function (a0) { return { "width": a0 }; };
class OfferComponent {
    constructor(offerService, general, confirmationService, messageService, profileProviderService) {
        this.offerService = offerService;
        this.general = general;
        this.confirmationService = confirmationService;
        this.messageService = messageService;
        this.profileProviderService = profileProviderService;
        this.subs = new subsink__WEBPACK_IMPORTED_MODULE_0__.SubSink();
        this.displayModal = false;
        this.displayModalCropper = false;
        this.currentItem = new _models_offer__WEBPACK_IMPORTED_MODULE_1__.COffer;
        this.invalid = new _models_offer__WEBPACK_IMPORTED_MODULE_1__.COfferInvalid;
        this.config = {
            aspectRatio: 16 / 16,
            dragMode: 'crop',
            autoCropArea: 100
        };
        this.images = [];
        this.deleteImages = [];
    }
    ngOnInit() {
        this.get();
    }
    get() {
        this.profileProviderService.get().subscribe((response) => {
            var _a;
            this.profileProvider = response.data;
            this.getProducts();
            if (((_a = response.data) === null || _a === void 0 ? void 0 : _a.length) === 0) {
                this.messageService.add({ severity: 'success', summary: 'Mensaje', detail: 'No hay ofertas disponibles' });
            }
        }, error => {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
        });
    }
    getProducts() {
        this.offerService.getByProfileProviderId(this.profileProvider._id).subscribe((response) => {
            var _a;
            this.items = response.data;
            if (((_a = response.data) === null || _a === void 0 ? void 0 : _a.length) === 0) {
                this.messageService.add({ severity: 'success', summary: 'Mensaje', detail: 'No hay productos disponibles' });
            }
        }, error => {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
        });
    }
    validate() {
        var _a;
        this.invalid = new _models_offer__WEBPACK_IMPORTED_MODULE_1__.COfferInvalid;
        let invalid = false;
        if (!this.currentItem.name) {
            invalid = true;
            this.invalid.name = true;
        }
        if (((_a = this.currentImages) === null || _a === void 0 ? void 0 : _a.length) === 0) {
            invalid = true;
            this.invalid.images = true;
        }
        if (invalid) {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Revise los campos' });
        }
        return invalid;
    }
    reset() {
        this.currentItem = new _models_offer__WEBPACK_IMPORTED_MODULE_1__.COffer;
        this.currentImages = [];
        this.uploadPercent = 0;
    }
    addEdit(item = null) {
        this.currentImages = [];
        if (item) {
            this.currentItem = item;
            if (item.images) {
                item.images.map((image) => {
                    this.currentImages = [...this.currentImages, { file: null, blob: null, url: image }];
                });
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
                this.preDelete(item);
            },
            reject: () => {
                // Nothing
            }
        });
    }
    add() {
        this.subs.add(this.profileProviderService.get().subscribe((response) => {
            this.profileProvider = response.data;
            this.currentItem.profileProviderId = this.profileProvider._id;
            this.subs.add(this.offerService.save(this.currentItem).subscribe((response) => {
                var _a;
                this.messageService.add({ severity: 'success', summary: 'Mensaje', detail: response.message });
                if (!((_a = this.currentItem) === null || _a === void 0 ? void 0 : _a._id)) {
                    this.reset();
                }
                this.get();
                this.displayModal = false;
            }, error => {
                this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
            }));
        }, error => {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
        }));
    }
    delete(item) {
        this.currentImages = [];
        this.subs.add(this.offerService.delete(item._id).subscribe((response) => {
            this.messageService.add({ severity: 'success', summary: 'Mensaje', detail: response.message });
            this.currentItem = new _models_offer__WEBPACK_IMPORTED_MODULE_1__.COffer;
            this.get();
        }, error => {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
        }));
    }
    preDelete(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            if (item.images) {
                yield this.general.deleteImages(item.images);
                this.delete(item);
            }
            else {
                this.delete(item);
            }
        });
    }
    //IMAGE
    removeImage(image) {
        if (image.url) {
            this.deleteImages = [...this.deleteImages, image];
            this.currentItem.images = [...this.currentItem.images.filter((ima) => ima !== image.url)];
        }
        this.currentImages = [...this.currentImages.filter((ima) => ima.url !== image.url)];
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
    resetUploadButton() {
        this.fileUpload.clear();
    }
    openModalCrroper(image) {
        this.imageUrl = image;
        this.dataImage = image;
        this.displayModalCropper = true;
    }
    presave() {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            if (this.currentItem.profileProviderId) {
                this.add();
            }
            if (!this.validate()) {
                this.general.isLoad(true);
                if (((_a = this.deleteImages) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                    const images = [];
                    this.deleteImages.map((image) => {
                        if (image.url) {
                            images.push(image.url);
                        }
                    });
                    yield this.general.deleteImages(images);
                    this.uploadImages();
                }
                else {
                    this.uploadImages();
                }
            }
        });
    }
    eventCrop(event) {
        const file = new File([event.file], event.name, { type: 'image/*' });
        this.currentImages = [...this.currentImages, { file: file, blob: event.event, url: null }];
    }
    uploadImages() {
        var _a;
        if (((_a = this.currentImages) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            let count = 1;
            this.currentImages.map((images) => (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
                var _b;
                let file;
                if (images.blob) {
                    fetch(images.blob)
                        .then(res => res.blob())
                        .then((blob) => (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
                        var _c;
                        const file = new File([blob], images.file.name, { type: images.file.type });
                        const url = yield ((_c = this.general.uploadImage(file, 'products/')) === null || _c === void 0 ? void 0 : _c.toPromise());
                        if (url) {
                            this.currentItem.images = [...this.currentItem.images, url];
                        }
                        this.uploadPercent = count * 100 / this.currentImages.length;
                        count++;
                        if (count === this.currentImages.length + 1) {
                            this.add();
                        }
                    }));
                }
                else if (images.file) {
                    file = images.file;
                    const url = yield ((_b = this.general.uploadImage(file, 'products/')) === null || _b === void 0 ? void 0 : _b.toPromise());
                    if (url) {
                        this.currentItem.images = [...this.currentItem.images, url];
                    }
                    this.uploadPercent = count * 100 / this.currentImages.length;
                    count++;
                    if (count === this.currentImages.length + 1) {
                        this.add();
                    }
                }
            }));
        }
        else {
            this.add();
        }
    }
    getBlobOrImage(image) {
        return image.blob || image.url;
    }
    //PRODUCT LIST COMPONENT
    offerListEvent($event) {
        switch ($event.function) {
            case 'edit':
                this.addEdit($event.data);
                break;
            default:
                break;
        }
    }
}
OfferComponent.ɵfac = function OfferComponent_Factory(t) { return new (t || OfferComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_offer_service__WEBPACK_IMPORTED_MODULE_2__.OfferService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_general_service__WEBPACK_IMPORTED_MODULE_3__.GeneralService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_11__.ConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_11__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_profile_provider_services_profile_provider_service__WEBPACK_IMPORTED_MODULE_4__.ProfileProviderService)); };
OfferComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: OfferComponent, selectors: [["app-offer"]], decls: 33, vars: 38, consts: [[1, "d-flex", "m-0"], [1, "d-none", "d-md-flex"], [1, "flex-1"], [1, "p-4", "p-md-5"], [1, "row", "m-0", "justify-content-between", "align-items-center"], [1, "btn2", 3, "click"], [1, "pi", "pi-plus", "mr-2"], [1, "section-offers", "col-4", "p-0"], [3, "items", "productsEvent", 4, "ngIf"], ["header", "", 3, "visible", "modal", "styleClass", "baseZIndex", "autoZIndex", "draggable", "resizable", "visibleChange"], [1, "col-12", "row", "m-0", "justify-content-center"], [1, "row", "m-0", "p-0", "flex-column", "col-12", "col-md-6"], [1, "row", "align-items-center", "m-0"], [3, "disabled", "ngModel", "ngModelChange"], [1, "ml-4"], ["type", "text", 1, "mt-3", 3, "ngModel", "ngClass", "placeholder", "keyup.enter", "ngModelChange", "keyup"], [1, "mt-3", 3, "ngClass"], [3, "events"], [1, "loading"], ["class", "row m-0 justify-content-center align-items-center mt-2", 4, "ngIf"], ["cols", "30", "rows", "5", 3, "ngModel", "ngClass", "placeholder", "keyup.enter", "ngModelChange"], ["type", "text", 1, "mt-3", 3, "ngModel", "placeholder", "keyup.enter", "ngModelChange"], [1, "btn1", "mt-4", "mb-4", 3, "click"], ["class", "btn3 bg-color6 pt-2 pb-2 mt-2 mb-4", 3, "click", 4, "ngIf"], [3, "autoZIndex", "baseZIndex"], [3, "items", "productsEvent"], [1, "row", "m-0", "justify-content-center", "align-items-center", "mt-2"], ["class", "image-miniature m-2", 3, "ngStyle", 4, "ngFor", "ngForOf"], [1, "image-miniature", "m-2", 3, "ngStyle"], [1, "delete", 3, "click"], [1, "pi", "pi-trash", "text-white", "f-20"], [1, "btn3", "bg-color6", "pt-2", "pb-2", "mt-2", "mb-4", 3, "click"]], template: function OfferComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "app-menu-provider", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "app-header-provider");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "Ofertas");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function OfferComponent_Template_button_click_8_listener() { return ctx.addEdit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](9, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, " Agregar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](12, OfferComponent_app_product_list_12_Template, 1, 1, "app-product-list", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "p-dialog", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("visibleChange", function OfferComponent_Template_p_dialog_visibleChange_13_listener($event) { return ctx.displayModal = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "div", 10)(15, "div", 11)(16, "div", 12)(17, "p-inputSwitch", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function OfferComponent_Template_p_inputSwitch_ngModelChange_17_listener($event) { return ctx.currentItem.isActive = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19, "Activa");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("keyup.enter", function OfferComponent_Template_input_keyup_enter_20_listener() { return ctx.add(); })("ngModelChange", function OfferComponent_Template_input_ngModelChange_20_listener($event) { return ctx.currentItem.name = $event; })("keyup", function OfferComponent_Template_input_keyup_20_listener() { return ctx.invalid.name = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "div", 16)(22, "app-crop-image", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("events", function OfferComponent_Template_app_crop_image_events_22_listener($event) { return ctx.eventCrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](23, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](24, OfferComponent_div_24_Template, 2, 1, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "textarea", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("keyup.enter", function OfferComponent_Template_textarea_keyup_enter_25_listener() { return ctx.add(); })("ngModelChange", function OfferComponent_Template_textarea_ngModelChange_25_listener($event) { return ctx.currentItem.description = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("keyup.enter", function OfferComponent_Template_input_keyup_enter_26_listener() { return ctx.add(); })("ngModelChange", function OfferComponent_Template_input_ngModelChange_26_listener($event) { return ctx.currentItem.price = $event; })("keyup", function OfferComponent_Template_input_keyup_26_listener() { return ctx.invalid.price = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("keyup.enter", function OfferComponent_Template_input_keyup_enter_27_listener() { return ctx.add(); })("ngModelChange", function OfferComponent_Template_input_ngModelChange_27_listener($event) { return ctx.currentItem.promotionalPrice = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](28, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function OfferComponent_Template_button_click_29_listener() { return ctx.presave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](30, "Guardar");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](31, OfferComponent_button_31_Template, 2, 0, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](32, "p-confirmPopup", 24);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (ctx.items == null ? null : ctx.items.length) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("visible", ctx.displayModal)("modal", true)("styleClass", "modalLogin")("baseZIndex", 10000)("autoZIndex", false)("draggable", false)("resizable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx.currentItem._id ? true : false)("ngModel", ctx.currentItem.isActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.currentItem.name)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](28, _c1, ctx.invalid.name))("placeholder", "Oferta");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](30, _c1, ctx.invalid.images));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](32, _c2, ctx.uploadPercent + "%"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.currentImages);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.currentItem.description)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](34, _c1, ctx.invalid.description))("placeholder", "Descripci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.currentItem.price)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](36, _c1, ctx.invalid.price))("placeholder", "Precio");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.currentItem.promotionalPrice)("placeholder", "Precio promocional");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.currentItem._id);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("autoZIndex", false)("baseZIndex", 1000001);
    } }, directives: [_components_menu_provider_menu_provider_component__WEBPACK_IMPORTED_MODULE_5__.MenuProviderComponent, _components_header_provider_header_provider_component__WEBPACK_IMPORTED_MODULE_6__.HeaderProviderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _shared_components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_7__.ProductListComponent, primeng_dialog__WEBPACK_IMPORTED_MODULE_13__.Dialog, primeng_inputswitch__WEBPACK_IMPORTED_MODULE_14__.InputSwitch, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.DefaultValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _shared_components_crop_image_crop_image_component__WEBPACK_IMPORTED_MODULE_8__.CropImageComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgStyle, primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_16__.ConfirmPopup], styles: [".section-offers[_ngcontent-%COMP%] {\n  max-width: 100% !important;\n}\n\n.container-cropper[_ngcontent-%COMP%] {\n  max-width: 300px;\n}\n\n.image2[_ngcontent-%COMP%] {\n  min-width: 300px;\n  min-height: 300px;\n}\n\n.image-miniature[_ngcontent-%COMP%] {\n  min-height: 100px;\n  min-width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9mZmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEJBQUE7QUFDSjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FBQ0YiLCJmaWxlIjoib2ZmZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbi1vZmZlcnN7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNvbnRhaW5lci1jcm9wcGVyIHtcclxuICBtYXgtd2lkdGg6IDMwMHB4O1xyXG59XHJcblxyXG4uaW1hZ2UyIHtcclxuICBtaW4td2lkdGg6IDMwMHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xyXG59XHJcblxyXG4uaW1hZ2UtbWluaWF0dXJlIHtcclxuICBtaW4taGVpZ2h0OiAxMDBweDtcclxuICBtaW4td2lkdGg6IDEwMHB4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 65291:
/*!****************************************************************!*\
  !*** ./src/app/modules/provider/modules/offer/offer.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OfferModule": () => (/* binding */ OfferModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _offer_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./offer-routing.module */ 69361);
/* harmony import */ var _offer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./offer.component */ 70669);
/* harmony import */ var _components_menu_provider_menu_provider_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/menu-provider/menu-provider.module */ 60636);
/* harmony import */ var _components_header_provider_header_provider_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/header-provider/header-provider.module */ 27118);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ 81122);
/* harmony import */ var primeng_orderlist__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/orderlist */ 21046);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/dialog */ 33489);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/toast */ 72802);
/* harmony import */ var primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/confirmpopup */ 84296);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/fileupload */ 17197);
/* harmony import */ var _shared_components_product_list_product_list_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/product-list/product-list.module */ 68478);
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/inputswitch */ 82236);
/* harmony import */ var angular_cropperjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular-cropperjs */ 47739);
/* harmony import */ var _shared_components_crop_image_crop_image_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/crop-image/crop-image.module */ 89474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);

















class OfferModule {
}
OfferModule.ɵfac = function OfferModule_Factory(t) { return new (t || OfferModule)(); };
OfferModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: OfferModule });
OfferModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [primeng_api__WEBPACK_IMPORTED_MODULE_7__.ConfirmationService], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _offer_routing_module__WEBPACK_IMPORTED_MODULE_0__.OfferRoutingModule,
            _components_menu_provider_menu_provider_module__WEBPACK_IMPORTED_MODULE_2__.MenuProviderModule,
            _components_header_provider_header_provider_module__WEBPACK_IMPORTED_MODULE_3__.HeaderProviderModule,
            primeng_orderlist__WEBPACK_IMPORTED_MODULE_9__.OrderListModule,
            primeng_dialog__WEBPACK_IMPORTED_MODULE_10__.DialogModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            primeng_toast__WEBPACK_IMPORTED_MODULE_12__.ToastModule,
            primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_13__.ConfirmPopupModule,
            primeng_fileupload__WEBPACK_IMPORTED_MODULE_14__.FileUploadModule,
            _shared_components_product_list_product_list_module__WEBPACK_IMPORTED_MODULE_4__.ProductListModule,
            primeng_inputswitch__WEBPACK_IMPORTED_MODULE_15__.InputSwitchModule,
            angular_cropperjs__WEBPACK_IMPORTED_MODULE_16__.AngularCropperjsModule,
            _shared_components_crop_image_crop_image_module__WEBPACK_IMPORTED_MODULE_5__.CropImageModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](OfferModule, { declarations: [_offer_component__WEBPACK_IMPORTED_MODULE_1__.OfferComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _offer_routing_module__WEBPACK_IMPORTED_MODULE_0__.OfferRoutingModule,
        _components_menu_provider_menu_provider_module__WEBPACK_IMPORTED_MODULE_2__.MenuProviderModule,
        _components_header_provider_header_provider_module__WEBPACK_IMPORTED_MODULE_3__.HeaderProviderModule,
        primeng_orderlist__WEBPACK_IMPORTED_MODULE_9__.OrderListModule,
        primeng_dialog__WEBPACK_IMPORTED_MODULE_10__.DialogModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
        primeng_toast__WEBPACK_IMPORTED_MODULE_12__.ToastModule,
        primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_13__.ConfirmPopupModule,
        primeng_fileupload__WEBPACK_IMPORTED_MODULE_14__.FileUploadModule,
        _shared_components_product_list_product_list_module__WEBPACK_IMPORTED_MODULE_4__.ProductListModule,
        primeng_inputswitch__WEBPACK_IMPORTED_MODULE_15__.InputSwitchModule,
        angular_cropperjs__WEBPACK_IMPORTED_MODULE_16__.AngularCropperjsModule,
        _shared_components_crop_image_crop_image_module__WEBPACK_IMPORTED_MODULE_5__.CropImageModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_modules_provider_modules_offer_offer_module_ts.js.map