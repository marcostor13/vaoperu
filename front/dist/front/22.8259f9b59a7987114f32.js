(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{jZuT:function(e,t,r){"use strict";r.r(t),r.d(t,"CategorySubcategoryProfileModule",function(){return M});var i=r("ofXK"),c=r("tyNb"),s=r("FQVY"),o=r("sUgg");class a{constructor(){this._id=!1,this.name=!1,this.categorySubcategoryId=!1,this.type=!1,this.profileProviderId=!1}}var n=r("zhhV"),l=r("2K/p"),d=r("wDSy"),u=r("wHSu"),g=r("fXoL"),b=r("7zfz"),f=r("/RsI"),h=r("Nf9I"),p=r("cQJI"),m=r("3Pt+"),y=r("6NWb");function v(e,t){if(1&e){const e=g.Vb();g.Ub(0,"div",10),g.Ub(1,"div"),g.Ub(2,"span",11),g.Jc(3,"Negocio :"),g.Tb(),g.Ub(4,"span",12),g.Jc(5),g.Tb(),g.Tb(),g.Ub(6,"div"),g.Ub(7,"button",13),g.bc("click",function(){g.Bc(e);const r=t.$implicit;return g.ec(2).addEdit(r)}),g.Jc(8,"Editar"),g.Tb(),g.Tb(),g.Tb()}if(2&e){const e=t.$implicit;g.Cb(5),g.Kc(e.comercialName)}}const S=function(){return{"max-height":"30rem"}};function C(e,t){if(1&e&&(g.Ub(0,"div",7),g.Ub(1,"p-orderList",8),g.Hc(2,v,9,1,"ng-template",9),g.Tb(),g.Tb()),2&e){const e=g.ec();g.Cb(1),g.kc("value",e.profileProviders)("listStyle",g.oc(3,S))("dragdrop",!0)}}function P(e,t){if(1&e&&(g.Ub(0,"option",22),g.Jc(1),g.Tb()),2&e){const e=t.$implicit;g.kc("value",e._id),g.Cb(1),g.Kc(e.name)}}function I(e,t){if(1&e&&(g.Ub(0,"option",22),g.Jc(1),g.Tb()),2&e){const e=t.$implicit;g.kc("value",e._id),g.Cb(1),g.Kc(e.name)}}function U(e,t){if(1&e){const e=g.Vb();g.Ub(0,"select",23),g.bc("ngModelChange",function(t){return g.Bc(e),g.ec(2).currentSubcategory=t}),g.Ub(1,"option",17),g.Jc(2,"Seleccione la subcategor\xeda"),g.Tb(),g.Hc(3,I,2,2,"option",18),g.Tb()}if(2&e){const e=g.ec(2);g.kc("ngModel",e.currentSubcategory),g.Cb(3),g.kc("ngForOf",e.currentSubcategories)}}const T=function(e,t){return{"bg-color8":e,"bg-color1":t}};function k(e,t){if(1&e){const e=g.Vb();g.Ub(0,"div",26),g.Jc(1),g.Ub(2,"fa-icon",27),g.bc("click",function(r){g.Bc(e);const i=t.$implicit;return g.ec(3).confirm(r,i)}),g.Tb(),g.Tb()}if(2&e){const e=t.$implicit,r=g.ec(3);g.kc("ngClass",g.qc(3,T,"subcategory"===e.type,"category"===e.type)),g.Cb(1),g.Lc("",e.name," "),g.Cb(1),g.kc("icon",r.faTrash)}}function w(e,t){if(1&e&&(g.Ub(0,"div",24),g.Hc(1,k,3,6,"div",25),g.Tb()),2&e){const e=g.ec(2);g.Cb(1),g.kc("ngForOf",e.currentList)}}function $(e,t){if(1&e){const e=g.Vb();g.Ub(0,"div",14),g.Ub(1,"h5",15),g.Jc(2),g.Tb(),g.Ub(3,"select",16),g.bc("change",function(){return g.Bc(e),g.ec().toogleSubcategories()})("ngModelChange",function(t){return g.Bc(e),g.ec().currentCategory=t}),g.Ub(4,"option",17),g.Jc(5,"Seleccione la categor\xeda"),g.Tb(),g.Hc(6,P,2,2,"option",18),g.Tb(),g.Hc(7,U,4,2,"select",19),g.Ub(8,"button",20),g.bc("click",function(){return g.Bc(e),g.ec().add()}),g.Jc(9,"Agregar"),g.Tb(),g.Hc(10,w,2,1,"div",21),g.Tb()}if(2&e){const e=g.ec();g.Cb(2),g.Kc(e.currentProfileProvider.comercialName),g.Cb(1),g.kc("ngModel",e.currentCategory),g.Cb(3),g.kc("ngForOf",e.categories),g.Cb(1),g.kc("ngIf",(null==e.currentSubcategories?null:e.currentSubcategories.length)>0),g.Cb(1),g.kc("disabled",!(e.currentCategory&&0===(null==e.currentSubcategories?null:e.currentSubcategories.length)||e.currentCategory&&e.currentSubcategory)),g.Cb(2),g.kc("ngIf",e.currentList)}}const x=[{path:"",component:(()=>{class e{constructor(e,t,r,i,c,s,o){this.categorySubcategoryProfileService=e,this.general=t,this.messageService=r,this.confirmationService=i,this.profileProviderService=c,this.categoryService=s,this.subcategoryService=o,this.currentList=[],this.currentItem={name:"",categorySubcategoryId:"",type:"",profileProviderId:""},this.displayModal=!1,this.invalid=new a,this.currentCategory="",this.currentSubcategory="",this.faTrash=u.j}ngOnInit(){this.getProfiles(),this.getCategories(),this.getSubcategories()}getProfiles(){this.profileProviderService.getAllCompanies().subscribe(e=>{this.profileProviders=e.data},e=>{this.messageService.add({severity:"error",summary:"Error",detail:e.message})})}getCategories(){this.categoryService.get().subscribe(e=>{this.categories=e.data},e=>{this.messageService.add({severity:"error",summary:"Error",detail:e.message})})}getSubcategories(){this.subcategoryService.get().subscribe(e=>{this.subcategories=e.data},e=>{this.messageService.add({severity:"error",summary:"Error",detail:e.message})})}getCategoriesAndSubcategoriesByProfileProfiderId(e){this.categorySubcategoryProfileService.getByProfileProviderId(e).subscribe(e=>{this.currentList=e.data},e=>{this.messageService.add({severity:"error",summary:"Error",detail:e.message})})}reset(){this.currentList=null}addEdit(e=null){e?(this.currentProfileProvider=e,this.getCategoriesAndSubcategoriesByProfileProfiderId(e._id)):this.reset(),this.displayModal=!0}toogleSubcategories(){this.currentSubcategories=null,this.currentCategory&&(this.currentSubcategories=this.subcategories.filter(e=>e.categoryId===this.currentCategory))}add(){if(this.currentCategory&&0===this.currentSubcategories.length||this.currentCategory&&this.currentSubcategory){const e={profileProviderId:this.currentProfileProvider._id,categorySubcategoryId:this.currentSubcategory?this.currentSubcategory:this.currentCategory,type:this.currentSubcategory?"subcategory":"category",name:this.currentSubcategory?this.subcategories.filter(e=>e._id===this.currentSubcategory)[0].name:this.categories.filter(e=>e._id===this.currentCategory)[0].name};this.categorySubcategoryProfileService.save(e).subscribe(e=>{this.messageService.add({severity:"success",summary:"\xc9xito",detail:e.message}),this.getCategoriesAndSubcategoriesByProfileProfiderId(this.currentProfileProvider._id)},e=>{this.messageService.add({severity:"error",summary:"Error",detail:e.message})})}else this.messageService.add({severity:"error",summary:"Error",detail:"Debe completar todos los campos"})}confirm(e,t){this.confirmationService.confirm({target:e.target,message:"\xbfSeg\xfaro que desea eliminar?",icon:"pi pi-exclamation-triangle",acceptLabel:"S\xed",rejectLabel:"No",accept:()=>{this.delete(t)},reject:()=>{}})}delete(e){this.categorySubcategoryProfileService.delete(e._id).subscribe(t=>{this.messageService.add({severity:"success",summary:"\xc9xito",detail:t.message}),this.getCategoriesAndSubcategoriesByProfileProfiderId(e.profileProviderId)},e=>{this.messageService.add({severity:"error",summary:"Error",detail:e.message})})}}return e.\u0275fac=function(t){return new(t||e)(g.Ob(o.a),g.Ob(s.a),g.Ob(b.h),g.Ob(b.b),g.Ob(n.a),g.Ob(l.a),g.Ob(d.a))},e.\u0275cmp=g.Ib({type:e,selectors:[["app-category-subcategory-profile"]],decls:9,vars:9,consts:[[1,"p-5"],[1,"row","m-0","justify-content-between","align-items-center"],["class","mt-5",4,"ngIf"],["header","",3,"visible","modal","styleClass","baseZIndex","autoZIndex","draggable","resizable","visibleChange"],[1,"col-12","row","m-0","justify-content-center"],["class","row m-0 p-0 flex-column col-12 col-md-6",4,"ngIf"],["header","Confirmaci\xf3n","icon","pi pi-exclamation-triangle"],[1,"mt-5"],["header","Lista de perfiles","filterPlaceholder","Buscar por nombre","filterBy","name",3,"value","listStyle","dragdrop"],["pTemplate","item","class","mt-3"],["draggable","true",1,"item-list","row","justify-content-between","align-items-center","m-0","pl-2","pr-2"],[1,"font-700"],[1,"ml-3"],[1,"btn2","p-0","pl-3","pr-3",3,"click"],[1,"row","m-0","p-0","flex-column","col-12","col-md-6"],[1,"text-center"],[1,"mt-4",3,"ngModel","change","ngModelChange"],["value",""],[3,"value",4,"ngFor","ngForOf"],["class","mt-2",3,"ngModel","ngModelChange",4,"ngIf"],[1,"btn1","mt-2",3,"disabled","click"],["class","mt-3 d-flex justify-content-center align-items-center flex-wrap border rounded",4,"ngIf"],[3,"value"],[1,"mt-2",3,"ngModel","ngModelChange"],[1,"mt-3","d-flex","justify-content-center","align-items-center","flex-wrap","border","rounded"],["class","m-2 p-2 px-4 rounded",3,"ngClass",4,"ngFor","ngForOf"],[1,"m-2","p-2","px-4","rounded",3,"ngClass"],[1,"f-15","text-color4","cursor",3,"icon","click"]],template:function(e,t){1&e&&(g.Ub(0,"div",0),g.Ub(1,"div",1),g.Ub(2,"h4"),g.Jc(3,"Agregar categor\xedas y/o subcategor\xedas"),g.Tb(),g.Tb(),g.Hc(4,C,3,4,"div",2),g.Tb(),g.Ub(5,"p-dialog",3),g.bc("visibleChange",function(e){return t.displayModal=e}),g.Ub(6,"div",4),g.Hc(7,$,11,6,"div",5),g.Tb(),g.Tb(),g.Pb(8,"p-confirmDialog",6)),2&e&&(g.Cb(4),g.kc("ngIf",t.profileProviders),g.Cb(1),g.kc("visible",t.displayModal)("modal",!0)("styleClass","modalLogin")("baseZIndex",1e4)("autoZIndex",!1)("draggable",!1)("resizable",!1),g.Cb(2),g.kc("ngIf",t.currentProfileProvider))},directives:[i.k,f.a,h.a,p.a,b.j,m.h,m.d,m.e,m.f,m.i,i.j,i.i,y.a],styles:[""]}),e})()}];let B=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=g.Mb({type:e}),e.\u0275inj=g.Lb({imports:[[c.f.forChild(x)],c.f]}),e})(),M=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=g.Mb({type:e}),e.\u0275inj=g.Lb({providers:[b.b],imports:[[i.c,B,f.b,m.b,h.b,p.b,y.b]]}),e})()},zhhV:function(e,t,r){"use strict";r.d(t,"a",function(){return a});var i=r("H+bZ"),c=r("FQVY"),s=r("/JoM"),o=r("fXoL");let a=(()=>{class e{constructor(e,t,r){this.api=e,this.general=t,this.authService=r,this.model="profile-provider"}save(e){return this.api.api({service:e._id?`update-${this.model}/${e._id}`:`save-${this.model}`,type:e._id?"patch":"post",data:e})}get(){const e={service:`get-${this.model}-by-userid/${this.authService.getUserID()}`,type:"get",data:null};return this.api.api(e)}getById(e){return this.api.api({service:`get-${this.model}-by-id/${e}`,type:"get",data:null})}getByUserId(e){return this.api.api({service:`get-${this.model}-by-user-id/${e}`,type:"get",data:null})}getAllCompanies(){return this.api.api({service:`get-${this.model}`,type:"get",data:null})}delete(e){return this.api.api({service:`delete-${this.model}/${e}`,type:"delete",data:null})}getUrlByProfileProviderId(e){return this.api.api({service:`get-url-by-profile-provider-id/${e}`,type:"get",data:null})}getByArray(e){return this.api.api({service:`get-${this.model}-by-array`,type:"post",data:{profileProviders:e}})}getUrlByUrl(e){return this.api.api({service:`get-url-by-url/${e}`,type:"get",data:null})}}return e.\u0275fac=function(t){return new(t||e)(o.Yb(i.a),o.Yb(c.a),o.Yb(s.a))},e.\u0275prov=o.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);