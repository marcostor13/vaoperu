"use strict";(self.webpackChunkfront=self.webpackChunkfront||[]).push([[951],{7669:(I,y,o)=>{o.d(y,{i:()=>h});var r=o(5e3),_=o(5830);let h=(()=>{class m{constructor(u){this.api=u,this.model="url"}save(u){return this.api.api({service:u._id?`update-${this.model}/${u._id}`:`save-${this.model}`,type:u._id?"patch":"post",data:u})}get(){return this.api.api({service:`get-${this.model}`,type:"get",data:null})}delete(u){return this.api.api({service:`delete-${this.model}/${u}`,type:"delete",data:null})}updateAll(u){return this.api.api({service:`update-${this.model}-all`,type:"patch",data:u})}}return m.\u0275fac=function(u){return new(u||m)(r.LFG(_.s))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})()},1951:(I,y,o)=>{o.r(y),o.d(y,{UrlModule:()=>A});var r=o(9808),_=o(9812);class h{constructor(){this.url="",this.profileProviderId="",this.isIndividual=!1}}class m{constructor(){this._id=!1,this.url=!1,this.profileProviderId=!1,this.isIndividual=!1}}var e=o(5e3),u=o(7669),g=o(1724),t=o(9783),d=o(7840),s=o(5315),l=o(4182),b=o(930),C=o(7307);function f(a,v){if(1&a){const i=e.EpF();e.TgZ(0,"div",20)(1,"div")(2,"span",21),e._uU(3,"Url :"),e.qZA(),e.TgZ(4,"span",22),e._uU(5),e.qZA()(),e.TgZ(6,"div")(7,"button",23),e.NdJ("click",function(){const p=e.CHM(i).$implicit;return e.oxw().addEdit(p)}),e._uU(8,"Editar"),e.qZA()()()}if(2&a){const i=v.$implicit;e.xp6(5),e.Oqu(i.url)}}function M(a,v){if(1&a&&(e.TgZ(0,"option",24),e._uU(1),e.qZA()),2&a){const i=v.$implicit;e.s9C("value",i._id),e.xp6(1),e.Oqu(i.comercialName)}}function S(a,v){if(1&a){const i=e.EpF();e.TgZ(0,"button",25),e.NdJ("click",function(c){e.CHM(i);const p=e.oxw();return p.confirm(c,p.currentItem)}),e._uU(1,"Eliminar"),e.qZA()}}const T=function(){return{"max-height":"30rem"}},U=function(a){return{invalid:a}},E=[{path:"",component:(()=>{class a{constructor(i,n,c,p){this.urlService=i,this.profileProviderService=n,this.messageService=c,this.confirmationService=p,this.displayModal=!1,this.invalid=new m,this.currentItem=new h}ngOnInit(){this.get(),this.getProfileProviders()}get(){this.urlService.get().subscribe(i=>{this.items=i.data},i=>{this.messageService.add({severity:"error",summary:"Error",detail:i.error.message})})}getProfileProviders(){this.profileProviderService.getAllCompanies().subscribe(i=>{this.profileProviders=i.data},i=>{this.messageService.add({severity:"error",summary:"Error",detail:i.error.message})})}validate(i){this.invalid=new m;let n=!1;return this.currentItem.url||(n=!0,this.invalid.url=!0,this.messageService.add({severity:"error",summary:"Error",detail:"Debe completar todos los campos requeridos"})),this.currentItem.profileProviderId||(n=!0,this.invalid.profileProviderId=!0,this.messageService.add({severity:"error",summary:"Error",detail:"Debe completar todos los campos requeridos"})),n}reset(){this.currentItem=new h}addEdit(i=null){i?this.currentItem=i:this.reset(),this.displayModal=!0}confirm(i,n){this.confirmationService.confirm({target:i.target,message:"\xbfSeg\xfaro que desea eliminar?",icon:"pi pi-exclamation-triangle",acceptLabel:"S\xed",rejectLabel:"No",accept:()=>{this.delete(n)},reject:()=>{}})}add(){this.validate(this.currentItem)||this.urlService.save(this.currentItem).subscribe(i=>{this.messageService.add({severity:"success",summary:"Mensaje",detail:i.message?i.message:"Usuario registrado"}),this.currentItem._id||(this.currentItem=new h),this.get()},i=>{this.messageService.add({severity:"error",summary:"Error",detail:i.error.message})})}delete(i){this.urlService.delete(i._id).subscribe(n=>{this.messageService.add({severity:"success",summary:"Mensaje",detail:n.message}),this.currentItem=new h,this.get()},n=>{this.messageService.add({severity:"error",summary:"Error",detail:n.error.message})})}getElementByID(i){return this.items.filter(n=>n._id===i)}updateAll(){this.urlService.updateAll(this.items).subscribe(i=>{this.messageService.add({severity:"success",summary:"Mensaje",detail:i.message}),this.currentItem=new h,this.get()},i=>{this.messageService.add({severity:"error",summary:"Error",detail:i.error.message})})}}return a.\u0275fac=function(i){return new(i||a)(e.Y36(u.i),e.Y36(g.n),e.Y36(t.ez),e.Y36(t.YP))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-url"]],decls:26,vars:24,consts:[[1,"p-5"],[1,"row","m-0","justify-content-between","align-items-center"],[1,"btn2",3,"click"],[1,"pi","pi-plus","mr-2"],[1,"mt-5"],["header","Lista de categor\xedas","filterPlaceholder","Buscar por nombre","filterBy","url",3,"value","listStyle","onReorder"],["pTemplate","item","class","mt-3"],["header","",3,"visible","modal","styleClass","baseZIndex","autoZIndex","draggable","resizable","visibleChange"],[1,"col-12","row","m-0","justify-content-center"],[1,"row","m-0","p-0","flex-column","col-12","col-md-6"],["type","text",3,"ngModel","ngClass","placeholder","keyup.enter","ngModelChange","keyup"],[1,"mt-3",3,"ngModel","ngClass","keyup.enter","ngModelChange","keyup"],["value",""],[3,"value",4,"ngFor","ngForOf"],[1,"row","align-items-center","m-0","p-0","mt-3"],[3,"ngModel","ngModelChange"],[1,"ml-2"],[1,"btn1","mt-4","mb-4",3,"click"],["class","btn3 bg-color6 pt-2 pb-2 mt-2 mb-4",3,"click",4,"ngIf"],[3,"autoZIndex","baseZIndex"],[1,"item-list","row","justify-content-between","align-items-center","m-0","pl-2","pr-2"],[1,"font-700"],[1,"ml-3"],[1,"btn2","p-0","pl-3","pr-3",3,"click"],[3,"value"],[1,"btn3","bg-color6","pt-2","pb-2","mt-2","mb-4",3,"click"]],template:function(i,n){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4"),e._uU(3,"Urls"),e.qZA(),e.TgZ(4,"button",2),e.NdJ("click",function(){return n.addEdit()}),e._UZ(5,"i",3),e._uU(6," Agregar "),e.qZA()(),e.TgZ(7,"div",4)(8,"p-orderList",5),e.NdJ("onReorder",function(){return n.updateAll()}),e.YNc(9,f,9,1,"ng-template",6),e.qZA()()(),e.TgZ(10,"p-dialog",7),e.NdJ("visibleChange",function(p){return n.displayModal=p}),e.TgZ(11,"div",8)(12,"div",9)(13,"input",10),e.NdJ("keyup.enter",function(){return n.add()})("ngModelChange",function(p){return n.currentItem.url=p})("keyup",function(){return n.invalid.url=!1}),e.qZA(),e.TgZ(14,"select",11),e.NdJ("keyup.enter",function(){return n.add()})("ngModelChange",function(p){return n.currentItem.profileProviderId=p})("keyup",function(){return n.invalid.profileProviderId=!1}),e.TgZ(15,"option",12),e._uU(16,"Seleccione el negocio"),e.qZA(),e.YNc(17,M,2,2,"option",13),e.qZA(),e.TgZ(18,"div",14)(19,"p-inputSwitch",15),e.NdJ("ngModelChange",function(p){return n.currentItem.isIndividual=p}),e.qZA(),e.TgZ(20,"label",16),e._uU(21,"Tienda p\xfablica"),e.qZA()(),e.TgZ(22,"button",17),e.NdJ("click",function(){return n.add()}),e._uU(23,"Guardar"),e.qZA(),e.YNc(24,S,2,0,"button",18),e.qZA()()(),e._UZ(25,"p-confirmPopup",19)),2&i&&(e.xp6(8),e.Q6J("value",n.items)("listStyle",e.DdM(19,T)),e.xp6(2),e.Q6J("visible",n.displayModal)("modal",!0)("styleClass","modalLogin")("baseZIndex",1e4)("autoZIndex",!1)("draggable",!1)("resizable",!1),e.xp6(3),e.Q6J("ngModel",n.currentItem.url)("ngClass",e.VKq(20,U,n.invalid.url))("placeholder","Url"),e.xp6(1),e.Q6J("ngModel",n.currentItem.profileProviderId)("ngClass",e.VKq(22,U,n.invalid.profileProviderId)),e.xp6(3),e.Q6J("ngForOf",n.profileProviders),e.xp6(2),e.Q6J("ngModel",n.currentItem.isIndividual),e.xp6(5),e.Q6J("ngIf",n.currentItem._id),e.xp6(1),e.Q6J("autoZIndex",!1)("baseZIndex",1000001))},directives:[d.F,t.jx,s.V,l.Fj,l.JJ,l.On,r.mk,l.EJ,l.YN,l.Kr,r.sg,b.Ql,r.O5,C.P],styles:[""]}),a})()}];let P=(()=>{class a{}return a.\u0275fac=function(i){return new(i||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[[_.Bz.forChild(E)],_.Bz]}),a})();var Z=o(5055);let A=(()=>{class a{}return a.\u0275fac=function(i){return new(i||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({providers:[t.YP],imports:[[r.ez,P,C.n,d.C,s.S,l.u5,Z.ON,b.Iu]]}),a})()},1724:(I,y,o)=>{o.d(y,{n:()=>e});var r=o(5e3),_=o(5830),h=o(1864),m=o(2542);let e=(()=>{class u{constructor(t,d,s){this.api=t,this.general=d,this.authService=s,this.model="profile-provider"}save(t){return this.api.api({service:t._id?`update-${this.model}/${t._id}`:`save-${this.model}`,type:t._id?"patch":"post",data:t})}search(t){return this.api.api({service:`search-${this.model}`,type:"post",data:t})}get(){const t={service:`get-${this.model}-by-user-id/${this.authService.getUserID()}`,type:"get",data:null};return this.api.api(t)}getById(t){return this.api.api({service:`get-${this.model}-by-id/${t}`,type:"get",data:null})}getAllById(t){return this.api.api({service:`get-all-${this.model}-by-id/${t}`,type:"get",data:null})}getByUserId(t){return this.api.api({service:`get-${this.model}-by-user-id/${t}`,type:"get",data:null})}getAllCompanies(){return this.api.api({service:`get-${this.model}`,type:"get",data:null})}delete(t){return this.api.api({service:`delete-${this.model}/${t}`,type:"delete",data:null})}getUrlByProfileProviderId(t){return this.api.api({service:`get-url-by-profile-provider-id/${t}`,type:"get",data:null})}getByArray(t){return this.api.api({service:`get-${this.model}-by-array`,type:"post",data:{profileProviders:t}})}getUrlByUrl(t){return this.api.api({service:`get-url-by-url/${t}`,type:"get",data:null})}}return u.\u0275fac=function(t){return new(t||u)(r.LFG(_.s),r.LFG(h.m),r.LFG(m.e))},u.\u0275prov=r.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()},930:(I,y,o)=>{o.d(y,{Iu:()=>g,Ql:()=>u});var r=o(5e3),_=o(9808),h=o(4182);const m=function(t,d,s){return{"p-inputswitch p-component":!0,"p-inputswitch-checked":t,"p-disabled":d,"p-focus":s}},e={provide:h.JU,useExisting:(0,r.Gpc)(()=>u),multi:!0};let u=(()=>{class t{constructor(s){this.cd=s,this.trueValue=!0,this.falseValue=!1,this.onChange=new r.vpe,this.modelValue=!1,this.focused=!1,this.onModelChange=()=>{},this.onModelTouched=()=>{}}onClick(s,l){!this.disabled&&!this.readonly&&(s.preventDefault(),this.toggle(s),l.focus())}onInputChange(s){this.readonly||this.updateModel(s,s.target.checked)}toggle(s){this.updateModel(s,!this.checked())}updateModel(s,l){this.modelValue=l?this.trueValue:this.falseValue,this.onModelChange(this.modelValue),this.onChange.emit({originalEvent:s,checked:this.modelValue})}onFocus(s){this.focused=!0}onBlur(s){this.focused=!1,this.onModelTouched()}writeValue(s){this.modelValue=s,this.cd.markForCheck()}registerOnChange(s){this.onModelChange=s}registerOnTouched(s){this.onModelTouched=s}setDisabledState(s){this.disabled=s,this.cd.markForCheck()}checked(){return this.modelValue===this.trueValue}}return t.\u0275fac=function(s){return new(s||t)(r.Y36(r.sBO))},t.\u0275cmp=r.Xpm({type:t,selectors:[["p-inputSwitch"]],hostAttrs:[1,"p-element"],inputs:{style:"style",styleClass:"styleClass",tabindex:"tabindex",inputId:"inputId",name:"name",disabled:"disabled",readonly:"readonly",trueValue:"trueValue",falseValue:"falseValue",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy"},outputs:{onChange:"onChange"},features:[r._Bn([e])],decls:5,vars:16,consts:[[3,"ngClass","ngStyle","click"],[1,"p-hidden-accessible"],["type","checkbox","role","switch",3,"checked","disabled","change","focus","blur"],["cb",""],[1,"p-inputswitch-slider"]],template:function(s,l){if(1&s){const b=r.EpF();r.TgZ(0,"div",0),r.NdJ("click",function(f){r.CHM(b);const M=r.MAs(3);return l.onClick(f,M)}),r.TgZ(1,"div",1)(2,"input",2,3),r.NdJ("change",function(f){return l.onInputChange(f)})("focus",function(f){return l.onFocus(f)})("blur",function(f){return l.onBlur(f)}),r.qZA()(),r._UZ(4,"span",4),r.qZA()}2&s&&(r.Tol(l.styleClass),r.Q6J("ngClass",r.kEZ(12,m,l.checked(),l.disabled,l.focused))("ngStyle",l.style),r.xp6(2),r.Q6J("checked",l.checked())("disabled",l.disabled),r.uIk("aria-label",l.ariaLabel)("id",l.inputId)("name",l.name)("tabindex",l.tabindex)("aria-checked",l.checked())("aria-labelledby",l.ariaLabelledBy))},directives:[_.mk,_.PC],styles:['.p-inputswitch{position:relative;display:inline-block;-webkit-user-select:none;user-select:none}.p-inputswitch-slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0}.p-inputswitch-slider:before{position:absolute;content:"";top:50%}\n'],encapsulation:2,changeDetection:0}),t})(),g=(()=>{class t{}return t.\u0275fac=function(s){return new(s||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[_.ez]]}),t})()}}]);