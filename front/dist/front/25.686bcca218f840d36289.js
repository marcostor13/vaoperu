(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{HXFY:function(e,t,r){"use strict";r.r(t),r.d(t,"UrlModule",function(){return w});var i=r("ofXK"),s=r("tyNb"),a=r("FQVY"),n=r("H+bZ"),o=r("fXoL");let l=(()=>{class e{constructor(e){this.api=e,this.model="url"}save(e){return this.api.api({service:e._id?`update-${this.model}/${e._id}`:`save-${this.model}`,type:e._id?"patch":"post",data:e})}get(){return this.api.api({service:`get-${this.model}`,type:"get",data:null})}delete(e){return this.api.api({service:`delete-${this.model}/${e}`,type:"delete",data:null})}updateAll(e){return this.api.api({service:`update-${this.model}-all`,type:"patch",data:e})}}return e.\u0275fac=function(t){return new(t||e)(o.Yb(n.a))},e.\u0275prov=o.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();class c{constructor(){this.url="",this.profileProviderId=""}}class d{constructor(){this._id=!1,this.url=!1,this.profileProviderId=!1}}var u=r("zhhV"),p=r("7zfz"),b=r("cQJI"),m=r("/RsI"),h=r("3Pt+"),v=r("RTT/");function g(e,t){if(1&e){const e=o.Vb();o.Ub(0,"div",17),o.Ub(1,"div"),o.Ub(2,"span",18),o.Jc(3,"Url :"),o.Tb(),o.Ub(4,"span",19),o.Jc(5),o.Tb(),o.Tb(),o.Ub(6,"div"),o.Ub(7,"button",20),o.bc("click",function(){o.Bc(e);const r=t.$implicit;return o.ec().addEdit(r)}),o.Jc(8,"Editar"),o.Tb(),o.Tb(),o.Tb()}if(2&e){const e=t.$implicit;o.Cb(5),o.Kc(e.url)}}function f(e,t){if(1&e&&(o.Ub(0,"option",21),o.Jc(1),o.Tb()),2&e){const e=t.$implicit;o.lc("value",e._id),o.Cb(1),o.Kc(e.comercialName)}}function y(e,t){if(1&e){const e=o.Vb();o.Ub(0,"button",22),o.bc("click",function(t){o.Bc(e);const r=o.ec();return r.confirm(t,r.currentItem)}),o.Jc(1,"Eliminar"),o.Tb()}}const I=function(){return{"max-height":"30rem"}},U=function(e){return{invalid:e}},k=[{path:"",component:(()=>{class e{constructor(e,t,r,i,s){this.general=e,this.urlService=t,this.profileProviderService=r,this.messageService=i,this.confirmationService=s,this.displayModal=!1,this.invalid=new d,this.currentItem=new c}ngOnInit(){this.get(),this.getProfileProviders()}get(){this.urlService.get().subscribe(e=>{this.items=e.data},e=>{this.messageService.add({severity:"error",summary:"Error",detail:e.error.message})})}getProfileProviders(){this.profileProviderService.getAllCompanies().subscribe(e=>{this.profileProviders=e.data},e=>{this.messageService.add({severity:"error",summary:"Error",detail:e.error.message})})}validate(e){this.invalid=new d;let t=!1;return this.currentItem.url||(t=!0,this.invalid.url=!0,this.messageService.add({severity:"error",summary:"Error",detail:"Debe completar todos los campos requeridos"})),this.currentItem.profileProviderId||(t=!0,this.invalid.profileProviderId=!0,this.messageService.add({severity:"error",summary:"Error",detail:"Debe completar todos los campos requeridos"})),t}reset(){this.currentItem=new c}addEdit(e=null){e?this.currentItem=e:this.reset(),this.displayModal=!0}confirm(e,t){this.confirmationService.confirm({target:e.target,message:"\xbfSeg\xfaro que desea eliminar?",icon:"pi pi-exclamation-triangle",acceptLabel:"S\xed",rejectLabel:"No",accept:()=>{this.delete(t)},reject:()=>{}})}add(){this.validate(this.currentItem)||this.urlService.save(this.currentItem).subscribe(e=>{this.messageService.add({severity:"success",summary:"Mensaje",detail:e.message?e.message:"Usuario registrado"}),this.currentItem._id||(this.currentItem=new c),this.get()},e=>{this.messageService.add({severity:"error",summary:"Error",detail:e.error.message})})}delete(e){this.urlService.delete(e._id).subscribe(e=>{this.messageService.add({severity:"success",summary:"Mensaje",detail:e.message}),this.currentItem=new c,this.get()},e=>{this.messageService.add({severity:"error",summary:"Error",detail:e.error.message})})}getElementByID(e){return this.items.filter(t=>t._id===e)}updateAll(){this.urlService.updateAll(this.items).subscribe(e=>{this.messageService.add({severity:"success",summary:"Mensaje",detail:e.message}),this.currentItem=new c,this.get()},e=>{this.messageService.add({severity:"error",summary:"Error",detail:e.error.message})})}}return e.\u0275fac=function(t){return new(t||e)(o.Ob(a.a),o.Ob(l),o.Ob(u.a),o.Ob(p.h),o.Ob(p.b))},e.\u0275cmp=o.Ib({type:e,selectors:[["app-url"]],decls:22,vars:24,consts:[[1,"p-5"],[1,"row","m-0","justify-content-between","align-items-center"],[1,"btn2",3,"click"],[1,"pi","pi-plus","mr-2"],[1,"mt-5"],["header","Lista de categor\xedas","filterPlaceholder","Buscar por nombre","filterBy","name",3,"value","listStyle","dragdrop","onReorder"],["pTemplate","item","class","mt-3"],["header","",3,"visible","modal","styleClass","baseZIndex","autoZIndex","draggable","resizable","visibleChange"],[1,"col-12","row","m-0","justify-content-center"],[1,"row","m-0","p-0","flex-column","col-12","col-md-6"],["type","text",3,"ngModel","ngClass","placeholder","keyup.enter","ngModelChange","keyup"],[1,"mt-3",3,"ngModel","ngClass","keyup.enter","ngModelChange","keyup"],["value",""],[3,"value",4,"ngFor","ngForOf"],[1,"btn1","mt-4",3,"click"],["class","btn3 bg-color6 pt-2 pb-2 mt-2",3,"click",4,"ngIf"],[3,"autoZIndex","baseZIndex"],["draggable","true",1,"item-list","row","justify-content-between","align-items-center","m-0","pl-2","pr-2"],[1,"font-700"],[1,"ml-3"],[1,"btn2","p-0","pl-3","pr-3",3,"click"],[3,"value"],[1,"btn3","bg-color6","pt-2","pb-2","mt-2",3,"click"]],template:function(e,t){1&e&&(o.Ub(0,"div",0),o.Ub(1,"div",1),o.Ub(2,"h4"),o.Jc(3,"Urls"),o.Tb(),o.Ub(4,"button",2),o.bc("click",function(){return t.addEdit()}),o.Pb(5,"i",3),o.Jc(6," Agregar "),o.Tb(),o.Tb(),o.Ub(7,"div",4),o.Ub(8,"p-orderList",5),o.bc("onReorder",function(){return t.updateAll()}),o.Hc(9,g,9,1,"ng-template",6),o.Tb(),o.Tb(),o.Tb(),o.Ub(10,"p-dialog",7),o.bc("visibleChange",function(e){return t.displayModal=e}),o.Ub(11,"div",8),o.Ub(12,"div",9),o.Ub(13,"input",10),o.bc("keyup.enter",function(){return t.add()})("ngModelChange",function(e){return t.currentItem.url=e})("keyup",function(){return t.invalid.url=!1}),o.Tb(),o.Ub(14,"select",11),o.bc("keyup.enter",function(){return t.add()})("ngModelChange",function(e){return t.currentItem.profileProviderId=e})("keyup",function(){return t.invalid.profileProviderId=!1}),o.Ub(15,"option",12),o.Jc(16,"Seleccione el negocio"),o.Tb(),o.Hc(17,f,2,2,"option",13),o.Tb(),o.Ub(18,"button",14),o.bc("click",function(){return t.add()}),o.Jc(19,"Guardar"),o.Tb(),o.Hc(20,y,2,0,"button",15),o.Tb(),o.Tb(),o.Tb(),o.Pb(21,"p-confirmPopup",16)),2&e&&(o.Cb(8),o.kc("value",t.items)("listStyle",o.oc(19,I))("dragdrop",!0),o.Cb(2),o.kc("visible",t.displayModal)("modal",!0)("styleClass","modalLogin")("baseZIndex",1e4)("autoZIndex",!1)("draggable",!1)("resizable",!1),o.Cb(3),o.kc("ngModel",t.currentItem.url)("ngClass",o.pc(20,U,t.invalid.url))("placeholder","Url"),o.Cb(1),o.kc("ngModel",t.currentItem.profileProviderId)("ngClass",o.pc(22,U,t.invalid.profileProviderId)),o.Cb(3),o.kc("ngForOf",t.profileProviders),o.Cb(3),o.kc("ngIf",t.currentItem._id),o.Cb(1),o.kc("autoZIndex",!1)("baseZIndex",1000001))},directives:[b.a,p.j,m.a,h.a,h.d,h.e,i.i,h.h,h.f,h.i,i.j,i.k,v.a],styles:[""]}),e})()}];let S=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.Mb({type:e}),e.\u0275inj=o.Lb({imports:[[s.f.forChild(k)],s.f]}),e})();var $=r("+07z");let w=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.Mb({type:e}),e.\u0275inj=o.Lb({providers:[p.b],imports:[[i.c,S,v.b,b.b,m.b,h.b,$.b]]}),e})()},zhhV:function(e,t,r){"use strict";r.d(t,"a",function(){return o});var i=r("H+bZ"),s=r("FQVY"),a=r("/JoM"),n=r("fXoL");let o=(()=>{class e{constructor(e,t,r){this.api=e,this.general=t,this.authService=r,this.model="profile-provider"}save(e){return this.api.api({service:e._id?`update-${this.model}/${e._id}`:`save-${this.model}`,type:e._id?"patch":"post",data:e})}get(){const e={service:`get-${this.model}-by-userid/${this.authService.getUserID()}`,type:"get",data:null};return this.api.api(e)}getById(e){return this.api.api({service:`get-${this.model}-by-id/${e}`,type:"get",data:null})}getByUserId(e){return this.api.api({service:`get-${this.model}-by-user-id/${e}`,type:"get",data:null})}getAllCompanies(){return this.api.api({service:`get-${this.model}`,type:"get",data:null})}delete(e){return this.api.api({service:`delete-${this.model}/${e}`,type:"delete",data:null})}getUrlByProfileProviderId(e){return this.api.api({service:`get-url-by-profile-provider-id/${e}`,type:"get",data:null})}getByArray(e){return this.api.api({service:`get-${this.model}-by-array`,type:"post",data:{profileProviders:e}})}getUrlByUrl(e){return this.api.api({service:`get-url-by-url/${e}`,type:"get",data:null})}}return e.\u0275fac=function(t){return new(t||e)(n.Yb(i.a),n.Yb(s.a),n.Yb(a.a))},e.\u0275prov=n.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);