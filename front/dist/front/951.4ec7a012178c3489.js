"use strict";(self.webpackChunkfront=self.webpackChunkfront||[]).push([[951],{7669:(y,h,n)=>{n.d(h,{i:()=>m});var d=n(5e3),_=n(5830);let m=(()=>{class u{constructor(a){this.api=a,this.model="url"}save(a){return this.api.api({service:a._id?`update-${this.model}/${a._id}`:`save-${this.model}`,type:a._id?"patch":"post",data:a})}get(){return this.api.api({service:`get-${this.model}`,type:"get",data:null})}delete(a){return this.api.api({service:`delete-${this.model}/${a}`,type:"delete",data:null})}updateAll(a){return this.api.api({service:`update-${this.model}-all`,type:"patch",data:a})}}return u.\u0275fac=function(a){return new(a||u)(d.LFG(_.s))},u.\u0275prov=d.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()},1951:(y,h,n)=>{n.r(h),n.d(h,{UrlModule:()=>$});var d=n(9808),_=n(9812);class m{constructor(){this.url="",this.profileProviderId=""}}class u{constructor(){this._id=!1,this.url=!1,this.profileProviderId=!1}}var e=n(5e3),a=n(1864),v=n(7669),s=n(1724),o=n(9783),f=n(7840),U=n(5315),g=n(4182),C=n(7307);function P(i,p){if(1&i){const t=e.EpF();e.TgZ(0,"div",17)(1,"div")(2,"span",18),e._uU(3,"Url :"),e.qZA(),e.TgZ(4,"span",19),e._uU(5),e.qZA()(),e.TgZ(6,"div")(7,"button",20),e.NdJ("click",function(){const c=e.CHM(t).$implicit;return e.oxw().addEdit(c)}),e._uU(8,"Editar"),e.qZA()()()}if(2&i){const t=p.$implicit;e.xp6(5),e.Oqu(t.url)}}function M(i,p){if(1&i&&(e.TgZ(0,"option",21),e._uU(1),e.qZA()),2&i){const t=p.$implicit;e.s9C("value",t._id),e.xp6(1),e.Oqu(t.comercialName)}}function S(i,p){if(1&i){const t=e.EpF();e.TgZ(0,"button",22),e.NdJ("click",function(l){e.CHM(t);const c=e.oxw();return c.confirm(l,c.currentItem)}),e._uU(1,"Eliminar"),e.qZA()}}const T=function(){return{"max-height":"30rem"}},I=function(i){return{invalid:i}},Z=[{path:"",component:(()=>{class i{constructor(t,r,l,c,b){this.general=t,this.urlService=r,this.profileProviderService=l,this.messageService=c,this.confirmationService=b,this.displayModal=!1,this.invalid=new u,this.currentItem=new m}ngOnInit(){this.get(),this.getProfileProviders()}get(){this.urlService.get().subscribe(t=>{this.items=t.data},t=>{this.messageService.add({severity:"error",summary:"Error",detail:t.error.message})})}getProfileProviders(){this.profileProviderService.getAllCompanies().subscribe(t=>{this.profileProviders=t.data},t=>{this.messageService.add({severity:"error",summary:"Error",detail:t.error.message})})}validate(t){this.invalid=new u;let r=!1;return this.currentItem.url||(r=!0,this.invalid.url=!0,this.messageService.add({severity:"error",summary:"Error",detail:"Debe completar todos los campos requeridos"})),this.currentItem.profileProviderId||(r=!0,this.invalid.profileProviderId=!0,this.messageService.add({severity:"error",summary:"Error",detail:"Debe completar todos los campos requeridos"})),r}reset(){this.currentItem=new m}addEdit(t=null){t?this.currentItem=t:this.reset(),this.displayModal=!0}confirm(t,r){this.confirmationService.confirm({target:t.target,message:"\xbfSeg\xfaro que desea eliminar?",icon:"pi pi-exclamation-triangle",acceptLabel:"S\xed",rejectLabel:"No",accept:()=>{this.delete(r)},reject:()=>{}})}add(){this.validate(this.currentItem)||this.urlService.save(this.currentItem).subscribe(t=>{this.messageService.add({severity:"success",summary:"Mensaje",detail:t.message?t.message:"Usuario registrado"}),this.currentItem._id||(this.currentItem=new m),this.get()},t=>{this.messageService.add({severity:"error",summary:"Error",detail:t.error.message})})}delete(t){this.urlService.delete(t._id).subscribe(r=>{this.messageService.add({severity:"success",summary:"Mensaje",detail:r.message}),this.currentItem=new m,this.get()},r=>{this.messageService.add({severity:"error",summary:"Error",detail:r.error.message})})}getElementByID(t){return this.items.filter(r=>r._id===t)}updateAll(){this.urlService.updateAll(this.items).subscribe(t=>{this.messageService.add({severity:"success",summary:"Mensaje",detail:t.message}),this.currentItem=new m,this.get()},t=>{this.messageService.add({severity:"error",summary:"Error",detail:t.error.message})})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(a.m),e.Y36(v.i),e.Y36(s.n),e.Y36(o.ez),e.Y36(o.YP))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-url"]],decls:22,vars:24,consts:[[1,"p-5"],[1,"row","m-0","justify-content-between","align-items-center"],[1,"btn2",3,"click"],[1,"pi","pi-plus","mr-2"],[1,"mt-5"],["header","Lista de categor\xedas","filterPlaceholder","Buscar por nombre","filterBy","name",3,"value","listStyle","dragdrop","onReorder"],["pTemplate","item","class","mt-3"],["header","",3,"visible","modal","styleClass","baseZIndex","autoZIndex","draggable","resizable","visibleChange"],[1,"col-12","row","m-0","justify-content-center"],[1,"row","m-0","p-0","flex-column","col-12","col-md-6"],["type","text",3,"ngModel","ngClass","placeholder","keyup.enter","ngModelChange","keyup"],[1,"mt-3",3,"ngModel","ngClass","keyup.enter","ngModelChange","keyup"],["value",""],[3,"value",4,"ngFor","ngForOf"],[1,"btn1","mt-4",3,"click"],["class","btn3 bg-color6 pt-2 pb-2 mt-2 mb-4",3,"click",4,"ngIf"],[3,"autoZIndex","baseZIndex"],["draggable","true",1,"item-list","row","justify-content-between","align-items-center","m-0","pl-2","pr-2"],[1,"font-700"],[1,"ml-3"],[1,"btn2","p-0","pl-3","pr-3",3,"click"],[3,"value"],[1,"btn3","bg-color6","pt-2","pb-2","mt-2","mb-4",3,"click"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4"),e._uU(3,"Urls"),e.qZA(),e.TgZ(4,"button",2),e.NdJ("click",function(){return r.addEdit()}),e._UZ(5,"i",3),e._uU(6," Agregar "),e.qZA()(),e.TgZ(7,"div",4)(8,"p-orderList",5),e.NdJ("onReorder",function(){return r.updateAll()}),e.YNc(9,P,9,1,"ng-template",6),e.qZA()()(),e.TgZ(10,"p-dialog",7),e.NdJ("visibleChange",function(c){return r.displayModal=c}),e.TgZ(11,"div",8)(12,"div",9)(13,"input",10),e.NdJ("keyup.enter",function(){return r.add()})("ngModelChange",function(c){return r.currentItem.url=c})("keyup",function(){return r.invalid.url=!1}),e.qZA(),e.TgZ(14,"select",11),e.NdJ("keyup.enter",function(){return r.add()})("ngModelChange",function(c){return r.currentItem.profileProviderId=c})("keyup",function(){return r.invalid.profileProviderId=!1}),e.TgZ(15,"option",12),e._uU(16,"Seleccione el negocio"),e.qZA(),e.YNc(17,M,2,2,"option",13),e.qZA(),e.TgZ(18,"button",14),e.NdJ("click",function(){return r.add()}),e._uU(19,"Guardar"),e.qZA(),e.YNc(20,S,2,0,"button",15),e.qZA()()(),e._UZ(21,"p-confirmPopup",16)),2&t&&(e.xp6(8),e.Q6J("value",r.items)("listStyle",e.DdM(19,T))("dragdrop",!0),e.xp6(2),e.Q6J("visible",r.displayModal)("modal",!0)("styleClass","modalLogin")("baseZIndex",1e4)("autoZIndex",!1)("draggable",!1)("resizable",!1),e.xp6(3),e.Q6J("ngModel",r.currentItem.url)("ngClass",e.VKq(20,I,r.invalid.url))("placeholder","Url"),e.xp6(1),e.Q6J("ngModel",r.currentItem.profileProviderId)("ngClass",e.VKq(22,I,r.invalid.profileProviderId)),e.xp6(3),e.Q6J("ngForOf",r.profileProviders),e.xp6(3),e.Q6J("ngIf",r.currentItem._id),e.xp6(1),e.Q6J("autoZIndex",!1)("baseZIndex",1000001))},directives:[f.F,o.jx,U.V,g.Fj,g.JJ,g.On,d.mk,g.EJ,g.YN,g.Kr,d.sg,d.O5,C.P],styles:[""]}),i})()}];let E=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[_.Bz.forChild(Z)],_.Bz]}),i})();var A=n(5055);let $=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({providers:[o.YP],imports:[[d.ez,E,C.n,f.C,U.S,g.u5,A.ON]]}),i})()},1724:(y,h,n)=>{n.d(h,{n:()=>e});var d=n(5e3),_=n(5830),m=n(1864),u=n(2542);let e=(()=>{class a{constructor(s,o,f){this.api=s,this.general=o,this.authService=f,this.model="profile-provider"}save(s){return this.api.api({service:s._id?`update-${this.model}/${s._id}`:`save-${this.model}`,type:s._id?"patch":"post",data:s})}search(s){return this.api.api({service:`search-${this.model}`,type:"post",data:s})}get(){const s={service:`get-${this.model}-by-user-id/${this.authService.getUserID()}`,type:"get",data:null};return this.api.api(s)}getById(s){return this.api.api({service:`get-${this.model}-by-id/${s}`,type:"get",data:null})}getByUserId(s){return this.api.api({service:`get-${this.model}-by-user-id/${s}`,type:"get",data:null})}getAllCompanies(){return this.api.api({service:`get-${this.model}`,type:"get",data:null})}delete(s){return this.api.api({service:`delete-${this.model}/${s}`,type:"delete",data:null})}getUrlByProfileProviderId(s){return this.api.api({service:`get-url-by-profile-provider-id/${s}`,type:"get",data:null})}getByArray(s){return this.api.api({service:`get-${this.model}-by-array`,type:"post",data:{profileProviders:s}})}getUrlByUrl(s){return this.api.api({service:`get-url-by-url/${s}`,type:"get",data:null})}}return a.\u0275fac=function(s){return new(s||a)(d.LFG(_.s),d.LFG(m.m),d.LFG(u.e))},a.\u0275prov=d.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()}}]);