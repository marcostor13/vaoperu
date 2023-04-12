"use strict";
(self["webpackChunkfront"] = self["webpackChunkfront"] || []).push([["common"],{

/***/ 57828:
/*!*****************************************************************************!*\
  !*** ./src/app/modules/admin/modules/category/services/category.service.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryService": () => (/* binding */ CategoryService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../services/api.service */ 5830);


class CategoryService {
    constructor(api) {
        this.api = api;
        this.model = 'category';
    }
    save(element) {
        const data = {
            service: element._id ? `update-${this.model}/${element._id}` : `save-${this.model}`,
            type: element._id ? 'patch' : 'post',
            data: element
        };
        return this.api.api(data);
    }
    updateAll(items) {
        const data = {
            service: `update-${this.model}-all`,
            type: 'patch',
            data: items
        };
        return this.api.api(data);
    }
    get() {
        const data = {
            service: `get-${this.model}`,
            type: 'get',
            data: null
        };
        return this.api.api(data);
    }
    getByNameCategories(name) {
        const data = {
            service: `get-${this.model}-by-name-subcategories/${name}`,
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
}
CategoryService.ɵfac = function CategoryService_Factory(t) { return new (t || CategoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService)); };
CategoryService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CategoryService, factory: CategoryService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 28949:
/*!*****************************************************************************!*\
  !*** ./src/app/modules/admin/modules/district/services/district.service.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DistrictService": () => (/* binding */ DistrictService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../services/api.service */ 5830);


class DistrictService {
    constructor(api) {
        this.api = api;
        this.model = 'district';
    }
    save(element) {
        const data = {
            service: element._id ? `update-${this.model}/${element._id}` : `save-${this.model}`,
            type: element._id ? 'patch' : 'post',
            data: element
        };
        return this.api.api(data);
    }
    updateAll(items) {
        const data = {
            service: `update-${this.model}-all`,
            type: 'patch',
            data: items
        };
        return this.api.api(data);
    }
    get() {
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
}
DistrictService.ɵfac = function DistrictService_Factory(t) { return new (t || DistrictService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService)); };
DistrictService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DistrictService, factory: DistrictService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 11460:
/*!********************************************************************************!*\
  !*** ./src/app/modules/admin/modules/promotions/services/promotion.service.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PromotionService": () => (/* binding */ PromotionService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/api.service */ 5830);


class PromotionService {
    constructor(api) {
        this.api = api;
        this.model = 'promotion';
    }
    save(element) {
        const data = {
            service: element._id ? `update-${this.model}/${element._id}` : `save-${this.model}`,
            type: element._id ? 'patch' : 'post',
            data: element
        };
        return this.api.api(data);
    }
    updateAll(items) {
        const data = {
            service: `update-${this.model}-all`,
            type: 'patch',
            data: items
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
    get() {
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
}
PromotionService.ɵfac = function PromotionService_Factory(t) { return new (t || PromotionService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService)); };
PromotionService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PromotionService, factory: PromotionService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 77669:
/*!*******************************************************************!*\
  !*** ./src/app/modules/admin/modules/url/services/url.service.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UrlService": () => (/* binding */ UrlService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../services/api.service */ 5830);


class UrlService {
    constructor(api) {
        this.api = api;
        this.model = 'url';
    }
    save(element) {
        const data = {
            service: element._id ? `update-${this.model}/${element._id}` : `save-${this.model}`,
            type: element._id ? 'patch' : 'post',
            data: element
        };
        return this.api.api(data);
    }
    get() {
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
    updateAll(items) {
        const data = {
            service: `update-${this.model}-all`,
            type: 'patch',
            data: items
        };
        return this.api.api(data);
    }
}
UrlService.ɵfac = function UrlService_Factory(t) { return new (t || UrlService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService)); };
UrlService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UrlService, factory: UrlService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 58368:
/*!*********************************************************************!*\
  !*** ./src/app/modules/admin/modules/user/services/user.service.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../services/api.service */ 5830);


class UserService {
    constructor(api) {
        this.api = api;
        this.model = 'user';
    }
    save(element) {
        const data = {
            service: element._id ? `update-${this.model}/${element._id}` : `save-${this.model}`,
            type: element._id ? 'patch' : 'post',
            data: element
        };
        return this.api.api(data);
    }
    get() {
        const data = {
            service: `get-${this.model}`,
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
    getByIds(ids) {
        const data = {
            service: `get-${this.model}-by-ids`,
            type: 'post',
            data: { ids }
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
    changePassword(email, password) {
        const data = {
            service: `change-password-${this.model}`,
            type: 'patch',
            data: { email, password }
        };
        return this.api.api(data);
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService)); };
UserService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=common.js.map