"use strict";
(self["webpackChunkfront"] = self["webpackChunkfront"] || []).push([["src_app_modules_home_modules_favorites_favorites_module_ts"],{

/***/ 21810:
/*!****************************************************************************!*\
  !*** ./src/app/modules/home/modules/favorites/favorites-routing.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavoritesRoutingModule": () => (/* binding */ FavoritesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _favorites_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favorites.component */ 52020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _favorites_component__WEBPACK_IMPORTED_MODULE_0__.FavoritesComponent
    }
];
class FavoritesRoutingModule {
}
FavoritesRoutingModule.ɵfac = function FavoritesRoutingModule_Factory(t) { return new (t || FavoritesRoutingModule)(); };
FavoritesRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: FavoritesRoutingModule });
FavoritesRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FavoritesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 52020:
/*!***********************************************************************!*\
  !*** ./src/app/modules/home/modules/favorites/favorites.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavoritesComponent": () => (/* binding */ FavoritesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_general_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services/general.service */ 21864);
/* harmony import */ var src_app_modules_provider_modules_profile_provider_services_profile_provider_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/provider/modules/profile-provider/services/profile-provider.service */ 35650);
/* harmony import */ var _shared_services_favorite_favorite_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../shared/services/favorite/favorite.service */ 98157);
/* harmony import */ var src_app_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/auth/services/auth.service */ 12542);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/api */ 81122);
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/header/header.component */ 36290);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_components_company_list_company_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/company-list/company-list.component */ 83183);
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/footer/footer.component */ 66526);










function FavoritesComponent_app_company_list_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-company-list", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("emitEvent", function FavoritesComponent_app_company_list_3_Template_app_company_list_emitEvent_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r2.companyListEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("items", ctx_r0.currentProfileProviders);
} }
function FavoritesComponent_h4_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "h4", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "No se encontraron favoritos");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
class FavoritesComponent {
    constructor(general, profileProviderService, favoriteService, authService, messageService) {
        this.general = general;
        this.profileProviderService = profileProviderService;
        this.favoriteService = favoriteService;
        this.authService = authService;
        this.messageService = messageService;
    }
    ngOnInit() {
        this.getProfilesProvider();
    }
    getFavorites() {
        if (this.authService.getUserID()) {
            this.favoriteService.getByClientId(this.authService.getUserID()).subscribe((response) => {
                const favorites = response.data;
                const favoritesArray = favorites.map(favorite => { return favorite.profileProviderId; });
                this.currentProfileProviders = this.profileProviders.filter(profile => favoritesArray.includes(profile._id));
            }, error => {
                this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
            });
        }
        else {
            this.messageService.add({ severity: 'warning', summary: 'Mensaje', detail: 'No se encontraron favoritos' });
        }
    }
    getProfilesProvider() {
        this.profileProviderService.getAllCompanies().subscribe((response) => {
            this.profileProviders = response.data;
            this.getFavorites();
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
}
FavoritesComponent.ɵfac = function FavoritesComponent_Factory(t) { return new (t || FavoritesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_general_service__WEBPACK_IMPORTED_MODULE_0__.GeneralService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_modules_provider_modules_profile_provider_services_profile_provider_service__WEBPACK_IMPORTED_MODULE_1__.ProfileProviderService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_services_favorite_favorite_service__WEBPACK_IMPORTED_MODULE_2__.FavoriteService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_8__.MessageService)); };
FavoritesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: FavoritesComponent, selectors: [["app-favorites"]], decls: 6, vars: 3, consts: [[3, "eventHeader"], [1, "p-5"], [3, "items", "emitEvent", 4, "ngIf"], ["class", "text-center", 4, "ngIf"], [3, "items", "emitEvent"], [1, "text-center"]], template: function FavoritesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1)(2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, FavoritesComponent_app_company_list_3_Template, 1, 1, "app-company-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, FavoritesComponent_h4_4_Template, 2, 0, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("eventHeader", ctx.eventHeader);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.currentProfileProviders == null ? null : ctx.currentProfileProviders.length) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.currentProfileProviders == null ? null : ctx.currentProfileProviders.length) === 0);
    } }, directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_4__.HeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _shared_components_company_list_company_list_component__WEBPACK_IMPORTED_MODULE_5__.CompanyListComponent, _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__.FooterComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmYXZvcml0ZXMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 65056:
/*!********************************************************************!*\
  !*** ./src/app/modules/home/modules/favorites/favorites.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavoritesModule": () => (/* binding */ FavoritesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _favorites_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favorites-routing.module */ 21810);
/* harmony import */ var _favorites_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./favorites.component */ 52020);
/* harmony import */ var _shared_components_header_header_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/components/header/header.module */ 3778);
/* harmony import */ var _shared_components_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/components/footer/footer.module */ 62735);
/* harmony import */ var _shared_components_company_list_company_list_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/components/company-list/company-list.module */ 24757);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);







class FavoritesModule {
}
FavoritesModule.ɵfac = function FavoritesModule_Factory(t) { return new (t || FavoritesModule)(); };
FavoritesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: FavoritesModule });
FavoritesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _favorites_routing_module__WEBPACK_IMPORTED_MODULE_0__.FavoritesRoutingModule,
            _shared_components_header_header_module__WEBPACK_IMPORTED_MODULE_2__.HeaderModule,
            _shared_components_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__.FooterModule,
            _shared_components_company_list_company_list_module__WEBPACK_IMPORTED_MODULE_4__.CompanyListModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](FavoritesModule, { declarations: [_favorites_component__WEBPACK_IMPORTED_MODULE_1__.FavoritesComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _favorites_routing_module__WEBPACK_IMPORTED_MODULE_0__.FavoritesRoutingModule,
        _shared_components_header_header_module__WEBPACK_IMPORTED_MODULE_2__.HeaderModule,
        _shared_components_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__.FooterModule,
        _shared_components_company_list_company_list_module__WEBPACK_IMPORTED_MODULE_4__.CompanyListModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_modules_home_modules_favorites_favorites_module_ts.js.map