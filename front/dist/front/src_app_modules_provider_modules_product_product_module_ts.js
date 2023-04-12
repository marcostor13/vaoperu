"use strict";
(self["webpackChunkfront"] = self["webpackChunkfront"] || []).push([["src_app_modules_provider_modules_product_product_module_ts"],{

/***/ 6361:
/*!********************************************************************!*\
  !*** ./src/app/modules/provider/modules/product/models/product.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CProduct": () => (/* binding */ CProduct),
/* harmony export */   "CProductInvalid": () => (/* binding */ CProductInvalid)
/* harmony export */ });
class CProduct {
    constructor() {
        this.name = '';
        this.profileProviderId = '';
        this.description = '';
        this.images = [];
        this.price = null;
        this.isFeatured = false;
        this.promotionalPrice = null;
        this.categoryId = '';
        this.categoryName = '';
    }
}
class CProductInvalid {
    constructor() {
        this.name = false;
        this.images = false;
        this.price = false;
        this.description = false;
    }
}


/***/ }),

/***/ 21437:
/*!****************************************************************************!*\
  !*** ./src/app/modules/provider/modules/product/product-routing.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductRoutingModule": () => (/* binding */ ProductRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _product_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product.component */ 31567);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _product_component__WEBPACK_IMPORTED_MODULE_0__.ProductComponent
    }
];
class ProductRoutingModule {
}
ProductRoutingModule.ɵfac = function ProductRoutingModule_Factory(t) { return new (t || ProductRoutingModule)(); };
ProductRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ProductRoutingModule });
ProductRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ProductRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 31567:
/*!***********************************************************************!*\
  !*** ./src/app/modules/provider/modules/product/product.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductComponent": () => (/* binding */ ProductComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var subsink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! subsink */ 87478);
/* harmony import */ var _models_product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/product */ 6361);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/product.service */ 50319);
/* harmony import */ var _services_general_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/general.service */ 21864);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/api */ 81122);
/* harmony import */ var _profile_provider_services_profile_provider_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../profile-provider/services/profile-provider.service */ 35650);
/* harmony import */ var _components_menu_provider_menu_provider_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/menu-provider/menu-provider.component */ 39493);
/* harmony import */ var _components_header_provider_header_provider_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/header-provider/header-provider.component */ 10756);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/product-list/product-list.component */ 53957);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/dialog */ 33489);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/inputswitch */ 82236);
/* harmony import */ var _shared_components_crop_image_crop_image_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/crop-image/crop-image.component */ 92251);
/* harmony import */ var primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/confirmpopup */ 84296);

















function ProductComponent_app_product_list_16_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "app-product-list", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("productsEvent", function ProductComponent_app_product_list_16_Template_app_product_list_productsEvent_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r5.productListEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("profileProviderId", ctx_r0.profileProvider._id)("items", ctx_r0.items);
} }
function ProductComponent_li_20_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "li", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div")(3, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProductComponent_li_20_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r9); const cat_r7 = restoredCtx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r8.deleteCategory(cat_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProductComponent_li_20_Template_button_click_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r9); const cat_r7 = restoredCtx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r10.editCategory(cat_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const cat_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", cat_r7.name, " ");
} }
const _c0 = function (a0) { return { "background-image": a0 }; };
function ProductComponent_div_42_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 47)(1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProductComponent_div_42_div_1_Template_div_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r14); const currentImage_r12 = restoredCtx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r13.removeImage(currentImage_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const currentImage_r12 = ctx.$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](1, _c0, "url(" + ctx_r11.getBlobOrImage(currentImage_r12) + ")"));
} }
function ProductComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ProductComponent_div_42_div_1_Template, 3, 3, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r2.currentImages);
} }
function ProductComponent_option_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", category_r15._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](category_r15.name);
} }
function ProductComponent_button_52_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProductComponent_button_52_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r16.confirm($event, ctx_r16.currentItem); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Eliminar");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
const _c1 = function (a0) { return { "invalid": a0 }; };
const _c2 = function (a0) { return { "width": a0 }; };
class ProductComponent {
    constructor(productService, general, confirmationService, messageService, profileProviderService) {
        this.productService = productService;
        this.general = general;
        this.confirmationService = confirmationService;
        this.messageService = messageService;
        this.profileProviderService = profileProviderService;
        this.subs = new subsink__WEBPACK_IMPORTED_MODULE_0__.SubSink();
        this.displayModal = false;
        this.displayCategories = false;
        this.currentItem = new _models_product__WEBPACK_IMPORTED_MODULE_1__.CProduct;
        this.invalid = new _models_product__WEBPACK_IMPORTED_MODULE_1__.CProductInvalid;
        this.listCat = false;
        this.listCats = [];
        this.listCatsTmp = [];
        this.currentCategory = {
            name: '',
            profileProviderId: '',
            type: 0
        };
        this.currentCategoryTmp = {
            name: '',
            profileProviderId: '',
            type: 0
        };
        this.editState = false;
        //IMAGES
        this.currentImages = [];
        this.images = [];
        this.deleteImages = [];
        this.displayModalCroper = false;
        this.config = {
            aspectRatio: 16 / 16,
            dragMode: 'crop',
            autoCropArea: 100
        };
    }
    ngOnInit() {
        this.getProfileProvider();
    }
    getProfileProvider() {
        this.profileProviderService.get().subscribe((response) => {
            this.profileProvider = response.data;
            this.getProducts();
        }, error => {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
        });
    }
    getProducts() {
        this.productService.getByProfileProviderId(this.profileProvider._id).subscribe((response) => {
            var _a;
            this.items = [...response.data];
            this.getCategories();
            if (((_a = response.data) === null || _a === void 0 ? void 0 : _a.length) === 0) {
                this.messageService.add({ severity: 'success', summary: 'Mensaje', detail: 'No hay productos disponibles' });
            }
        }, error => {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
        });
    }
    getCategories() {
        this.productService.getCategoryByProfileProviderId(this.profileProvider._id).subscribe((response) => {
            this.categories = response.data;
        });
    }
    issetCategory(categoryName) {
        if (this.categories.find(c => c.name === categoryName)) {
            return true;
        }
        else {
            return false;
        }
    }
    validateCategory() {
        let res = true;
        if (!this.currentCategory.name) {
            res = false;
            this.responseCategory = 'Debe completar todo los campos';
        }
        if (this.issetCategory(this.currentCategory.name)) {
            res = false;
            this.responseCategory = this.editState ? 'La categoria ya existe' : 'La categoria fue editada';
        }
        if (this.editState) {
            this.responseCategory = 'La categoria fue editada';
        }
        return res;
    }
    editCategory(category) {
        this.currentCategory = category;
        this.productService.saveCategory(category).subscribe((response) => {
        });
    }
    saveCategory() {
        var _a, _b;
        if (this.validateCategory()) {
            const peyload = {
                name: (_a = this.currentCategory) === null || _a === void 0 ? void 0 : _a.name,
                profileProviderId: this.profileProvider._id,
                type: (_b = this.currentCategory) === null || _b === void 0 ? void 0 : _b.type
            };
            this.productService.saveCategory(peyload).subscribe((response) => {
                this.responseCategory = 'Categoria guardada';
                this.resetCategory();
            });
        }
        else {
            this.editState = true;
            this.editCategory(this.currentCategory);
            this.currentCategoryReset();
        }
    }
    deleteCategory(category) {
        this.productService.deleteCategory(category).subscribe((response) => {
            this.responseCategory = 'La categoria fue eliminada';
        });
        this.currentCategory;
    }
    currentCategoryReset() {
        this.currentCategory = {
            name: '',
            profileProviderId: '',
            type: 0
        };
    }
    resetCategory() {
        this.currentCategory.name = '';
        this.currentCategory.type = 0;
    }
    validate() {
        var _a;
        this.invalid = new _models_product__WEBPACK_IMPORTED_MODULE_1__.CProductInvalid;
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
        this.currentItem = new _models_product__WEBPACK_IMPORTED_MODULE_1__.CProduct;
        this.currentImages = [];
        this.uploadPercent = 0;
    }
    addEdit(item = null) {
        this.listCat = false;
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
        this.currentItem.profileProviderId = this.profileProvider._id;
        this.productService.save(this.currentItem).subscribe((response) => {
            var _a;
            this.messageService.add({ severity: 'success', summary: 'Mensaje', detail: response.message });
            if (!((_a = this.currentItem) === null || _a === void 0 ? void 0 : _a._id)) {
                this.reset();
            }
            this.displayModal = false;
            this.getProducts();
        }, error => {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
        });
    }
    delete(item) {
        this.currentImages = [];
        this.subs.add(this.productService.delete(item._id).subscribe((response) => {
            this.messageService.add({ severity: 'success', summary: 'Mensaje', detail: response.message });
            this.currentItem = new _models_product__WEBPACK_IMPORTED_MODULE_1__.CProduct;
            this.getProducts();
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
    openModalCrroper(image) {
        this.imageUrl = image;
        this.dataImage = image;
        this.displayModalCroper = true;
    }
    resetUploadButton() {
        this.fileUpload.clear();
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
    productListEvent($event) {
        switch ($event.function) {
            case 'edit':
                this.addEdit($event.data);
                break;
            default:
                break;
        }
    }
    addEditCategories() {
        this.displayCategories = true;
    }
}
ProductComponent.ɵfac = function ProductComponent_Factory(t) { return new (t || ProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_2__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_general_service__WEBPACK_IMPORTED_MODULE_3__.GeneralService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_11__.ConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_11__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_profile_provider_services_profile_provider_service__WEBPACK_IMPORTED_MODULE_4__.ProfileProviderService)); };
ProductComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: ProductComponent, selectors: [["app-product"]], decls: 54, vars: 50, consts: [[1, "d-flex", "m-0"], [1, "d-none", "d-md-flex"], [1, "flex-1"], [1, "p-4", "p-md-5"], [1, "row", "m-0", "justify-content-between", "align-items-center"], [1, "mb-3", "mb-md-0"], [1, "button1", "btn2", "mr-2", "mr-lg-4", 3, "click"], [1, "pi", "pi-plus", "mr-2"], [1, "mt-2", "mt-sm-0", "button1", "btn2", 3, "click"], [1, "section-products", "col-4", "p-0"], [3, "profileProviderId", "items", "productsEvent", 4, "ngIf"], ["header", "", 3, "visible", "modal", "styleClass", "baseZIndex", "autoZIndex", "draggable", "resizable", "visibleChange", "onHide"], [1, "px-5", "pb-5"], [1, "opts", "list-unstyled", "pt-2"], ["class", "border cursor pl-2 d-flex justify-content-between", 4, "ngFor", "ngForOf"], ["type", "text", "placeholder", "Categor\u00EDa", 1, "mt-3", 3, "ngModel", "ngModelChange"], ["value", "0", "selected", ""], ["value", "1"], [1, "mt-3", "text-color1", "d-flex", "justify-content-center"], [1, "btn1", "mt-3", "col-12", 3, "click"], ["header", "", 3, "visible", "modal", "styleClass", "baseZIndex", "autoZIndex", "draggable", "resizable", "visibleChange"], [1, "col-12", "row", "m-0", "justify-content-center", "pb-5"], [1, "row", "m-0", "p-0", "flex-column", "col-12", "col-md-10"], [1, "row", "align-items-center", "m-0"], [3, "ngModel", "ngModelChange"], [1, "ml-4"], ["type", "text", 1, "mt-3", 3, "ngModel", "ngClass", "placeholder", "ngModelChange", "keyup"], [1, "mt-3", 3, "ngClass"], [3, "events"], [1, "loading"], ["class", "row m-0 justify-content-center align-items-center mt-2", 4, "ngIf"], ["cols", "30", "rows", "5", 3, "ngModel", "ngClass", "placeholder", "ngModelChange"], ["type", "text", 1, "mt-3", 3, "ngModel", "placeholder", "ngModelChange"], [1, "mt-3", 3, "ngModel", "ngModelChange"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "btn1", "mt-4", 3, "click"], ["class", "btn3 bg-color6 pt-2 pb-2 mt-2", 3, "click", 4, "ngIf"], [3, "autoZIndex", "baseZIndex"], [3, "profileProviderId", "items", "productsEvent"], [1, "border", "cursor", "pl-2", "d-flex", "justify-content-between"], [1, "border-0", "bg-color2", "text-white", "mr-2", 3, "click"], [1, "pi", "pi-trash"], [1, "border-0", "bg-color2", "text-white", 3, "click"], [1, "pi", "pi-pencil"], [1, "row", "m-0", "justify-content-center", "align-items-center", "mt-2"], ["class", "image-miniature m-2", 3, "ngStyle", 4, "ngFor", "ngForOf"], [1, "image-miniature", "m-2", 3, "ngStyle"], [1, "delete", 3, "click"], [1, "pi", "pi-trash", "text-white", "f-20"], [3, "value"], [1, "btn3", "bg-color6", "pt-2", "pb-2", "mt-2", 3, "click"]], template: function ProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "app-menu-provider", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "app-header-provider");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "Productos");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 5)(9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProductComponent_Template_button_click_9_listener() { return ctx.addEditCategories(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](10, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, " Categor\u00EDa ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProductComponent_Template_button_click_12_listener() { return ctx.addEdit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](13, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, " Agregar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](16, ProductComponent_app_product_list_16_Template, 1, 2, "app-product-list", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "p-dialog", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("visibleChange", function ProductComponent_Template_p_dialog_visibleChange_17_listener($event) { return ctx.displayCategories = $event; })("onHide", function ProductComponent_Template_p_dialog_onHide_17_listener() { return ctx.currentCategoryReset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "div", 12)(19, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](20, ProductComponent_li_20_Template, 7, 1, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ProductComponent_Template_input_ngModelChange_21_listener($event) { return ctx.currentCategory.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ProductComponent_Template_select_ngModelChange_22_listener($event) { return ctx.currentCategory.type = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24, "Venta");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](26, "Servicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProductComponent_Template_button_click_29_listener() { return ctx.saveCategory(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](30, "Guardar");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "p-dialog", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("visibleChange", function ProductComponent_Template_p_dialog_visibleChange_31_listener($event) { return ctx.displayModal = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "div", 21)(33, "div", 22)(34, "div", 23)(35, "p-inputSwitch", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ProductComponent_Template_p_inputSwitch_ngModelChange_35_listener($event) { return ctx.currentItem.isFeatured = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](37, "Destacado");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](38, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ProductComponent_Template_input_ngModelChange_38_listener($event) { return ctx.currentItem.name = $event; })("keyup", function ProductComponent_Template_input_keyup_38_listener() { return ctx.invalid.name = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](39, "div", 27)(40, "app-crop-image", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("events", function ProductComponent_Template_app_crop_image_events_40_listener($event) { return ctx.eventCrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](41, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](42, ProductComponent_div_42_Template, 2, 1, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](43, "textarea", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ProductComponent_Template_textarea_ngModelChange_43_listener($event) { return ctx.currentItem.description = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](44, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ProductComponent_Template_input_ngModelChange_44_listener($event) { return ctx.currentItem.price = $event; })("keyup", function ProductComponent_Template_input_keyup_44_listener() { return ctx.invalid.price = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](45, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ProductComponent_Template_input_ngModelChange_45_listener($event) { return ctx.currentItem.promotionalPrice = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](46, "select", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ProductComponent_Template_select_ngModelChange_46_listener($event) { return ctx.currentItem.categoryId = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](47, "option", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](48, "Seleccione la categoria");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](49, ProductComponent_option_49_Template, 2, 2, "option", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](50, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProductComponent_Template_button_click_50_listener() { return ctx.presave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](51, "Guardar");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](52, ProductComponent_button_52_Template, 2, 0, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](53, "p-confirmPopup", 38);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (ctx.items == null ? null : ctx.items.length) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("visible", ctx.displayCategories)("modal", true)("styleClass", "modalLogin")("baseZIndex", 10000)("autoZIndex", false)("draggable", false)("resizable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.currentCategory.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.currentCategory.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.responseCategory);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("visible", ctx.displayModal)("modal", true)("styleClass", "modalLogin")("baseZIndex", 10000)("autoZIndex", false)("draggable", false)("resizable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.currentItem.isFeatured);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.currentItem.name)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](40, _c1, ctx.invalid.name))("placeholder", "Producto");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](42, _c1, ctx.invalid.images));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](44, _c2, ctx.uploadPercent + "%"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.currentImages);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.currentItem.description)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](46, _c1, ctx.invalid.description))("placeholder", "Descripci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.currentItem.price)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](48, _c1, ctx.invalid.price))("placeholder", "Precio");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.currentItem.promotionalPrice)("placeholder", "Precio promocional");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.currentItem.categoryId);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.currentItem._id);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("autoZIndex", false)("baseZIndex", 1000001);
    } }, directives: [_components_menu_provider_menu_provider_component__WEBPACK_IMPORTED_MODULE_5__.MenuProviderComponent, _components_header_provider_header_provider_component__WEBPACK_IMPORTED_MODULE_6__.HeaderProviderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _shared_components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_7__.ProductListComponent, primeng_dialog__WEBPACK_IMPORTED_MODULE_13__.Dialog, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgSelectMultipleOption"], primeng_inputswitch__WEBPACK_IMPORTED_MODULE_15__.InputSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _shared_components_crop_image_crop_image_component__WEBPACK_IMPORTED_MODULE_8__.CropImageComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgStyle, primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_16__.ConfirmPopup], styles: [".section-products[_ngcontent-%COMP%] {\n  max-width: 100% !important;\n}\n\n.container-cropper[_ngcontent-%COMP%] {\n  max-width: 300px;\n}\n\n.image2[_ngcontent-%COMP%] {\n  min-width: 300px;\n  min-height: 300px;\n}\n\n.image-miniature[_ngcontent-%COMP%] {\n  min-height: 100px;\n  min-width: 100px;\n}\n\n.button1[_ngcontent-%COMP%] {\n  min-width: 170px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQkFBQTtBQUNKOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0YiLCJmaWxlIjoicHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWN0aW9uLXByb2R1Y3Rze1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jb250YWluZXItY3JvcHBlciB7XHJcbiAgbWF4LXdpZHRoOiAzMDBweDtcclxufVxyXG5cclxuLmltYWdlMiB7XHJcbiAgbWluLXdpZHRoOiAzMDBweDtcclxuICBtaW4taGVpZ2h0OiAzMDBweDtcclxufVxyXG5cclxuLmltYWdlLW1pbmlhdHVyZSB7XHJcbiAgbWluLWhlaWdodDogMTAwcHg7XHJcbiAgbWluLXdpZHRoOiAxMDBweDtcclxufVxyXG5cclxuLmJ1dHRvbjF7XHJcbiAgbWluLXdpZHRoOiAxNzBweDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 31385:
/*!********************************************************************!*\
  !*** ./src/app/modules/provider/modules/product/product.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductModule": () => (/* binding */ ProductModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _product_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-routing.module */ 21437);
/* harmony import */ var _product_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product.component */ 31567);
/* harmony import */ var _components_menu_provider_menu_provider_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/menu-provider/menu-provider.module */ 60636);
/* harmony import */ var _components_header_provider_header_provider_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/header-provider/header-provider.module */ 27118);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ 81122);
/* harmony import */ var primeng_orderlist__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/orderlist */ 21046);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/dialog */ 33489);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/toast */ 72802);
/* harmony import */ var primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/confirmpopup */ 84296);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/fileupload */ 17197);
/* harmony import */ var _shared_components_product_list_product_list_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../shared/components/product-list/product-list.module */ 68478);
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/inputswitch */ 82236);
/* harmony import */ var angular_cropperjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular-cropperjs */ 47739);
/* harmony import */ var _shared_components_crop_image_crop_image_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/components/crop-image/crop-image.module */ 89474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);

















class ProductModule {
}
ProductModule.ɵfac = function ProductModule_Factory(t) { return new (t || ProductModule)(); };
ProductModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: ProductModule });
ProductModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [primeng_api__WEBPACK_IMPORTED_MODULE_7__.ConfirmationService], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _product_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductRoutingModule,
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
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ProductModule, { declarations: [_product_component__WEBPACK_IMPORTED_MODULE_1__.ProductComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _product_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductRoutingModule,
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
//# sourceMappingURL=src_app_modules_provider_modules_product_product_module_ts.js.map