"use strict";(self.webpackChunkfront=self.webpackChunkfront||[]).push([[269],{4269:(A,S,u)=>{u.r(S),u.d(S,{SectionModule:()=>H});var i=u(9808),v=u(9812),b=u(6240);class g{constructor(){this.name=""}}class x{constructor(){this.name="",this.image="",this.sectionId=""}}class a{constructor(){this.name="",this.image="",this.itemId=""}}class m{constructor(){this.name=!1}}class C{constructor(){this.name=!1,this.image=!1,this.sectionId=!1}}class E{constructor(){this.name=!1,this.image=!1,this.itemId=!1}}var e=u(5e3),M=u(7858),w=u(1864),I=u(9783),T=u(7840),Z=u(5315),c=u(4182),h=u(986),r=u(7307);function d(o,p){if(1&o){const t=e.EpF();e.TgZ(0,"div",11)(1,"div")(2,"span",12),e._uU(3,"Nombre :"),e.qZA(),e.TgZ(4,"span",13),e._uU(5),e.qZA()(),e.TgZ(6,"div")(7,"button",14),e.NdJ("click",function(){const l=e.CHM(t).$implicit;return e.oxw().addEdit(l)}),e._uU(8,"Editar"),e.qZA()()()}if(2&o){const t=p.$implicit;e.xp6(5),e.Oqu(t.name)}}function _(o,p){if(1&o){const t=e.EpF();e.TgZ(0,"button",19),e.NdJ("click",function(n){e.CHM(t);const l=e.oxw(2);return l.confirm(n,l.currentSection)}),e._uU(1,"Eliminar"),e.qZA()}}const f=function(o){return{invalid:o}};function L(o,p){if(1&o){const t=e.EpF();e.TgZ(0,"div",15)(1,"input",16),e.NdJ("keyup.enter",function(){return e.CHM(t),e.oxw().add()})("ngModelChange",function(n){return e.CHM(t),e.oxw().currentSection.name=n})("keyup",function(){return e.CHM(t),e.oxw().invalidSection.name=!1}),e.qZA(),e.TgZ(2,"button",17),e.NdJ("click",function(){return e.CHM(t),e.oxw().presave()}),e._uU(3,"Guardar"),e.qZA(),e.YNc(4,_,2,0,"button",18),e.qZA()}if(2&o){const t=e.oxw();e.xp6(1),e.Q6J("ngModel",t.currentSection.name)("ngClass",e.VKq(4,f,t.invalidSection.name))("placeholder","Secci\xf3n"),e.xp6(3),e.Q6J("ngIf",t.currentSection._id)}}const k=function(o){return{"background-image":o}};function y(o,p){if(1&o){const t=e.EpF();e.TgZ(0,"div",28)(1,"div",29)(2,"div",30),e.NdJ("click",function(){e.CHM(t);const n=e.oxw(2);return n.removeImage(n.currentImage)}),e._UZ(3,"i",31),e.qZA()()()}if(2&o){const t=e.oxw(2);e.xp6(1),e.Q6J("ngStyle",e.VKq(1,k,"url("+t.getBlobOrImage(t.currentImage)+")"))}}function P(o,p){if(1&o&&(e.TgZ(0,"option",32),e._uU(1),e.qZA()),2&o){const t=p.$implicit;e.Q6J("value",t._id),e.xp6(1),e.Oqu(t.name)}}function O(o,p){if(1&o){const t=e.EpF();e.TgZ(0,"button",19),e.NdJ("click",function(n){e.CHM(t);const l=e.oxw(2);return l.confirm(n,l.currentItem)}),e._uU(1,"Eliminar"),e.qZA()}}const J=function(o){return{width:o}};function D(o,p){if(1&o){const t=e.EpF();e.TgZ(0,"div",15)(1,"input",16),e.NdJ("keyup.enter",function(){return e.CHM(t),e.oxw().add()})("ngModelChange",function(n){return e.CHM(t),e.oxw().currentItem.name=n})("keyup",function(){return e.CHM(t),e.oxw().invalidItem.name=!1}),e.qZA(),e.TgZ(2,"div",20)(3,"p-fileUpload",21),e.NdJ("onSelect",function(n){e.CHM(t);const l=e.oxw();return l.onUpload(n),l.invalidItem.image=!1}),e.qZA(),e._UZ(4,"div",22),e.qZA(),e.YNc(5,y,4,3,"div",23),e.TgZ(6,"select",24),e.NdJ("ngModelChange",function(n){return e.CHM(t),e.oxw().currentItem.sectionId=n}),e.TgZ(7,"option",25),e._uU(8,"Seleccione una secci\xf3n"),e.qZA(),e.YNc(9,P,2,2,"option",26),e.qZA(),e.TgZ(10,"button",27),e.NdJ("click",function(){return e.CHM(t),e.oxw().presave()}),e._uU(11,"Guardar"),e.qZA(),e.YNc(12,O,2,0,"button",18),e.qZA()}if(2&o){const t=e.oxw();e.xp6(1),e.Q6J("ngModel",t.currentItem.name)("ngClass",e.VKq(18,f,t.invalidItem.name))("placeholder","Item"),e.xp6(1),e.Q6J("ngClass",e.VKq(20,f,t.invalidItem.image)),e.xp6(1),e.Q6J("fileLimit",1)("maxFileSize",1e7)("chooseLabel","Subir imagen")("files",t.images)("auto",!1)("disabled",!!t.currentImage),e.xp6(1),e.Akn(e.VKq(22,J,t.uploadPercent+"%")),e.xp6(1),e.Q6J("ngIf",t.currentImage),e.xp6(1),e.Q6J("ngClass",e.VKq(24,f,t.invalidItem.sectionId))("ngModel",t.currentItem.sectionId),e.xp6(3),e.Q6J("ngForOf",t.sectionsList),e.xp6(1),e.Q6J("disabled",t.buttonDisabled),e.xp6(2),e.Q6J("ngIf",t.currentItem._id)}}function F(o,p){if(1&o&&(e.TgZ(0,"option",32),e._uU(1),e.qZA()),2&o){const t=p.$implicit;e.Q6J("value",t._id),e.xp6(1),e.Oqu(t.name)}}function U(o,p){if(1&o){const t=e.EpF();e.TgZ(0,"div",28)(1,"div",29)(2,"div",30),e.NdJ("click",function(){e.CHM(t);const n=e.oxw(2);return n.removeImage(n.currentImage)}),e._UZ(3,"i",31),e.qZA()()()}if(2&o){const t=e.oxw(2);e.xp6(1),e.Q6J("ngStyle",e.VKq(1,k,"url("+t.getBlobOrImage(t.currentImage)+")"))}}function N(o,p){if(1&o){const t=e.EpF();e.TgZ(0,"button",19),e.NdJ("click",function(n){e.CHM(t);const l=e.oxw(2);return l.confirm(n,l.currentItem)}),e._uU(1,"Eliminar"),e.qZA()}}function Q(o,p){if(1&o){const t=e.EpF();e.TgZ(0,"div",15)(1,"input",16),e.NdJ("keyup.enter",function(){return e.CHM(t),e.oxw().add()})("ngModelChange",function(n){return e.CHM(t),e.oxw().currentSubitem.name=n})("keyup",function(){return e.CHM(t),e.oxw().invalidSubitem.name=!1}),e.qZA(),e.TgZ(2,"div",20)(3,"p-fileUpload",21),e.NdJ("onSelect",function(n){e.CHM(t);const l=e.oxw();return l.onUpload(n),l.invalidSubitem.image=!1}),e.qZA(),e._UZ(4,"div",22),e.qZA(),e.TgZ(5,"select",24),e.NdJ("ngModelChange",function(n){return e.CHM(t),e.oxw().currentSubitem.itemId=n}),e.TgZ(6,"option",25),e._uU(7,"Seleccione un item"),e.qZA(),e.YNc(8,F,2,2,"option",26),e.qZA(),e.YNc(9,U,4,3,"div",23),e.TgZ(10,"button",27),e.NdJ("click",function(){return e.CHM(t),e.oxw().presave()}),e._uU(11,"Guardar"),e.qZA(),e.YNc(12,N,2,0,"button",18),e.qZA()}if(2&o){const t=e.oxw();e.xp6(1),e.Q6J("ngModel",t.currentSubitem.name)("ngClass",e.VKq(18,f,t.invalidSubitem.name))("placeholder","SubItem"),e.xp6(1),e.Q6J("ngClass",e.VKq(20,f,t.invalidSubitem.image)),e.xp6(1),e.Q6J("fileLimit",1)("maxFileSize",1e7)("chooseLabel","Subir imagen")("files",t.images)("auto",!1)("disabled",!!t.currentImage),e.xp6(1),e.Akn(e.VKq(22,J,t.uploadPercent+"%")),e.xp6(1),e.Q6J("ngClass",e.VKq(24,f,t.invalidItem.sectionId))("ngModel",t.currentSubitem.itemId),e.xp6(3),e.Q6J("ngForOf",t.itemsList),e.xp6(1),e.Q6J("ngIf",t.currentImage),e.xp6(1),e.Q6J("disabled",t.buttonDisabled),e.xp6(2),e.Q6J("ngIf",t.currentItem._id)}}const j=function(){return{"max-height":"30rem"}},B=[{path:"",component:(()=>{class o{constructor(t,s,n,l){this.sectionService=t,this.general=s,this.confirmationService=n,this.messageService=l,this.subs=new b.Y,this.displayModal=!1,this.sectionsList=[],this.itemsList=[],this.currentSection=new g,this.currentItem=new x,this.currentSubitem=new a,this.invalidSection=new m,this.invalidItem=new C,this.invalidSubitem=new E,this.images=[],this.currentType="",this.buttonDisabled=!1}ngOnInit(){this.get()}get(){this.subs.add(this.sectionService.get().subscribe(t=>{this.items=t.data,this.getList()},t=>{this.messageService.add({severity:"error",summary:"Error",detail:t.error.message})}))}getList(){this.sectionsList=[...this.items.map(s=>s.section)],[...this.items.map(s=>s.items.map(n=>n))].map(s=>{this.itemsList=[...this.itemsList,...s.map(n=>n.item)]})}resetInvalid(){switch(this.currentType){case"section":this.invalidSection={name:!1};break;case"item":this.invalidItem={name:!1,image:!1,sectionId:!1};break;case"subitem":this.invalidSubitem={name:!1,image:!1,itemId:!1}}}reset(){switch(this.currentImage=null,this.uploadPercent=0,this.currentType){case"section":this.currentSection={name:""};break;case"item":this.currentItem={name:"",image:"",sectionId:""};break;case"subitem":this.currentSubitem={name:"",image:"",itemId:""}}}validateSection(){this.resetInvalid();let t=!1;return this.currentSection.name||(t=!0,this.invalidSection.name=!0,this.messageService.add({severity:"error",summary:"Error",detail:"Revise los campos"})),t}validateItem(){this.resetInvalid();let t=!1;return this.currentItem.name||(t=!0,this.invalidItem.name=!0),this.currentImage||(t=!0,this.invalidItem.image=!0),this.currentItem.sectionId||(t=!0,this.invalidItem.sectionId=!0),t&&this.messageService.add({severity:"error",summary:"Error",detail:"Revise los campos"}),t}validateSubitem(){this.resetInvalid();let t=!1;return this.currentSubitem.name||(t=!0,this.invalidSubitem.name=!0),this.currentImage||(t=!0,this.invalidSubitem.image=!0),this.currentSubitem.itemId||(t=!0,this.invalidSubitem.itemId=!0),t&&this.messageService.add({severity:"error",summary:"Error",detail:"Revise los campos"}),t}initAdd(t){this.currentType=t,this.addEdit()}addEdit(t=null){if(t){switch(this.currentType){case"section":this.currentSection=t;break;case"item":this.currentItem=t;break;case"subitem":this.currentSubitem=t}t.image&&(this.currentImage={file:null,blob:null,url:t.image})}else this.reset();this.displayModal=!0}confirm(t,s){this.confirmationService.confirm({target:t.target,message:"\xbfSeg\xfaro que desea eliminar?",icon:"pi pi-exclamation-triangle",acceptLabel:"S\xed",rejectLabel:"No",accept:()=>{this.delete(s)},reject:()=>{}})}add(){let t,s;switch(this.currentType){case"section":t=this.currentSection,s="section";break;case"item":t=this.currentItem,s="item-section";break;case"subitem":t=this.currentSubitem,s="subitem-section"}this.sectionService.save(t,s).subscribe(n=>{this.messageService.add({severity:"success",summary:"Mensaje",detail:n.message}),this.reset(),this.get()},n=>{this.messageService.add({severity:"error",summary:"Error",detail:n.error.message})})}updateAll(){}delete(t){let s;switch(this.currentType){case"section":s="section";break;case"item":s="item-section";break;case"subitem":s="subitem-section"}t.image&&this.general.deleteImage(t.image).then(()=>{this.currentImage=null,this.sectionService.delete(t._id,s).subscribe(n=>{this.messageService.add({severity:"success",summary:"Mensaje",detail:n.message}),this.reset(),this.get()},n=>{this.messageService.add({severity:"error",summary:"Error",detail:n.error.message})})}).catch(n=>{this.messageService.add({severity:"error",summary:"Error",detail:"Error al eliminar la imagen"})})}removeImage(t){t.url&&(this.deleteImage=t,this.currentItem.image=""),this.currentImage=null}onUpload(t){this.buttonDisabled=!0,t.currentFiles.map(s=>{const n=new FileReader;n.readAsDataURL(s),n.onload=()=>{this.currentImage={file:s,blob:n.result,url:null},this.buttonDisabled=!1}}),this.images=[]}validate(){switch(this.currentType){case"section":return this.validateSection();case"item":return this.validateItem();case"subitem":return this.validateSubitem()}}presave(){var t;console.log("this.this.currentType",this.currentType),this.validate()||(this.deleteImage&&this.general.deleteImage(this.deleteImage.url).then(()=>{this.currentImage=null}).catch(s=>{this.messageService.add({severity:"error",summary:"Error",detail:"Error al eliminar la imagen"})}),"section"!==this.currentType&&(null===(t=this.currentImage)||void 0===t?void 0:t.file)?this.general.uploadImage(this.currentImage.file,`${this.currentType}/`).subscribe(s=>{"number"==typeof s?this.uploadPercent=s:(this.currentImage={file:null,blob:null,url:s},"item"===this.currentType?this.currentItem.image=s:"subitem"===this.currentType&&(this.currentSubitem.image=s),this.add())}):this.add())}getBlobOrImage(t){return t.blob||t.url}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(M.l),e.Y36(w.m),e.Y36(I.YP),e.Y36(I.ez))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-section"]],decls:22,vars:17,consts:[[1,"p-5"],[1,"row","m-0","justify-content-between","align-items-center"],[1,"btn2",3,"click"],[1,"pi","pi-plus","mr-2"],[1,"mt-5"],["header","Lista de secciones","filterPlaceholder","Buscar por nombre","filterBy","name",3,"value","listStyle","dragdrop","onReorder"],["pTemplate","item","class","mt-3"],["header","",3,"visible","modal","styleClass","baseZIndex","autoZIndex","draggable","resizable","visibleChange"],[1,"col-12","row","m-0","justify-content-center",3,"ngSwitch"],["class","row m-0 p-0 flex-column col-12 col-md-6",4,"ngSwitchCase"],[3,"autoZIndex","baseZIndex"],["draggable","true",1,"item-list","row","justify-content-between","align-items-center","m-0","pl-2","pr-2"],[1,"font-700"],[1,"ml-3"],[1,"btn2","p-0","pl-3","pr-3",3,"click"],[1,"row","m-0","p-0","flex-column","col-12","col-md-6"],["type","text",3,"ngModel","ngClass","placeholder","keyup.enter","ngModelChange","keyup"],[1,"btn1","mt-4","mb-5",3,"click"],["class","btn3 bg-color6 pt-2 pb-2 mt-2 mb-5",3,"click",4,"ngIf"],[1,"btn3","bg-color6","pt-2","pb-2","mt-2","mb-5",3,"click"],[1,"mt-2",3,"ngClass"],["styleClass","col-12 btn2","mode","basic","accept","image/*","uploadLabel","Subir","cancelLabel","Cancelar","invalidFileSizeMessageDetail","El tama\xf1o m\xe1ximo es {0}.",3,"fileLimit","maxFileSize","chooseLabel","files","auto","disabled","onSelect"],[1,"loading"],["class","row m-0 justify-content-center align-items-center mt-2",4,"ngIf"],[1,"mt-2",3,"ngClass","ngModel","ngModelChange"],["value",""],[3,"value",4,"ngFor","ngForOf"],[1,"btn1","mt-4","mb-5",3,"disabled","click"],[1,"row","m-0","justify-content-center","align-items-center","mt-2"],[1,"bg-color6","image-miniature",3,"ngStyle"],[1,"delete",3,"click"],[1,"pi","pi-trash","text-white","f-20"],[3,"value"]],template:function(t,s){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4"),e._uU(3,"Secciones"),e.qZA(),e.TgZ(4,"button",2),e.NdJ("click",function(){return s.initAdd("section")}),e._UZ(5,"i",3),e._uU(6," Agregar secci\xf3n "),e.qZA(),e.TgZ(7,"button",2),e.NdJ("click",function(){return s.initAdd("item")}),e._UZ(8,"i",3),e._uU(9," Agregar items "),e.qZA(),e.TgZ(10,"button",2),e.NdJ("click",function(){return s.initAdd("subitem")}),e._UZ(11,"i",3),e._uU(12," Agregar subitems "),e.qZA()(),e.TgZ(13,"div",4)(14,"p-orderList",5),e.NdJ("onReorder",function(){return s.updateAll()}),e.YNc(15,d,9,1,"ng-template",6),e.qZA()()(),e.TgZ(16,"p-dialog",7),e.NdJ("visibleChange",function(l){return s.displayModal=l}),e.TgZ(17,"div",8),e.YNc(18,L,5,6,"div",9),e.YNc(19,D,13,26,"div",9),e.YNc(20,Q,13,26,"div",9),e.qZA()(),e._UZ(21,"p-confirmPopup",10)),2&t&&(e.xp6(14),e.Q6J("value",s.sectionsList)("listStyle",e.DdM(16,j))("dragdrop",!0),e.xp6(2),e.Q6J("visible",s.displayModal)("modal",!0)("styleClass","modalLogin")("baseZIndex",1e4)("autoZIndex",!1)("draggable",!1)("resizable",!1),e.xp6(1),e.Q6J("ngSwitch",s.currentType),e.xp6(1),e.Q6J("ngSwitchCase","section"),e.xp6(1),e.Q6J("ngSwitchCase","item"),e.xp6(1),e.Q6J("ngSwitchCase","subitem"),e.xp6(1),e.Q6J("autoZIndex",!1)("baseZIndex",1000001))},directives:[T.F,I.jx,Z.V,i.RF,i.n9,c.Fj,c.JJ,c.On,i.mk,i.O5,h.p,i.PC,c.EJ,c.YN,c.Kr,i.sg,r.P],styles:[""]}),o})()}];let R=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[v.Bz.forChild(B)],v.Bz]}),o})();var q=u(7773);let H=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({providers:[I.YP],imports:[[i.ez,R,r.n,T.C,Z.S,c.u5,q.EV,h.O]]}),o})()},7858:(A,S,u)=>{u.d(S,{l:()=>b});var i=u(5e3),v=u(5830);let b=(()=>{class g{constructor(a){this.api=a,this.model="section",this.model2="item-section",this.model3="subitem-section"}save(a,m){return this.api.api({service:a._id?`update-${this.model}/${a._id}`:`save-${m}`,type:a._id?"patch":"post",data:a})}updateAll(a){return this.api.api({service:`update-${this.model}-all`,type:"patch",data:a})}get(){return this.api.api({service:`get-sections-and-items-${this.model}`,type:"get",data:null})}delete(a,m){return this.api.api({service:`delete-${m}/${a}`,type:"delete",data:null})}getItemsBySubitemName(a){return this.api.api({service:`get-items-by-subitem-name/${a}`,type:"get",data:null})}getSectionsAndItems(a){return this.api.api({service:`get-section-and-items/${a}`,type:"get",data:null})}}return g.\u0275fac=function(a){return new(a||g)(i.LFG(v.s))},g.\u0275prov=i.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),g})()},7307:(A,S,u)=>{u.d(S,{P:()=>T,n:()=>Z});var i=u(5e3),v=u(9808),b=u(9783),g=u(845),x=u(5921),a=u(1777),m=u(5730);function C(c,h){if(1&c&&i._UZ(0,"i",8),2&c){const r=i.oxw(2);i.Tol(r.confirmation.icon),i.Q6J("ngClass","p-confirm-popup-icon")}}function E(c,h){if(1&c){const r=i.EpF();i.TgZ(0,"button",9),i.NdJ("click",function(){return i.CHM(r),i.oxw(2).reject()}),i.qZA()}if(2&c){const r=i.oxw(2);i.Tol(r.confirmation.rejectButtonStyleClass||"p-button-text"),i.Q6J("icon",r.confirmation.rejectIcon)("label",r.rejectButtonLabel)("ngClass","p-confirm-popup-reject p-button-sm"),i.uIk("aria-label",r.rejectButtonLabel)}}function e(c,h){if(1&c){const r=i.EpF();i.TgZ(0,"button",9),i.NdJ("click",function(){return i.CHM(r),i.oxw(2).accept()}),i.qZA()}if(2&c){const r=i.oxw(2);i.Tol(r.confirmation.acceptButtonStyleClass),i.Q6J("icon",r.confirmation.acceptIcon)("label",r.acceptButtonLabel)("ngClass","p-confirm-popup-accept p-button-sm"),i.uIk("aria-label",r.acceptButtonLabel)}}const M=function(c,h){return{showTransitionParams:c,hideTransitionParams:h}},w=function(c){return{value:"open",params:c}};function I(c,h){if(1&c){const r=i.EpF();i.TgZ(0,"div",1),i.NdJ("click",function(_){return i.CHM(r),i.oxw().onOverlayClick(_)})("@animation.start",function(_){return i.CHM(r),i.oxw().onAnimationStart(_)})("@animation.done",function(_){return i.CHM(r),i.oxw().onAnimationEnd(_)}),i.TgZ(1,"div",2,3),i.YNc(3,C,1,3,"i",4),i.TgZ(4,"span",5),i._uU(5),i.qZA()(),i.TgZ(6,"div",6),i.YNc(7,E,1,6,"button",7),i.YNc(8,e,1,6,"button",7),i.qZA()()}if(2&c){const r=i.oxw();i.Tol(r.styleClass),i.Q6J("ngClass","p-confirm-popup p-component")("ngStyle",r.style)("@animation",i.VKq(12,w,i.WLB(9,M,r.showTransitionOptions,r.hideTransitionOptions))),i.xp6(3),i.Q6J("ngIf",r.confirmation.icon),i.xp6(2),i.Oqu(r.confirmation.message),i.xp6(2),i.Q6J("ngIf",!1!==r.confirmation.rejectVisible),i.xp6(1),i.Q6J("ngIf",!1!==r.confirmation.acceptVisible)}}let T=(()=>{class c{constructor(r,d,_,f,L,k){this.el=r,this.confirmationService=d,this.renderer=_,this.cd=f,this.config=L,this.overlayService=k,this.defaultFocus="accept",this.showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)",this.hideTransitionOptions=".1s linear",this.autoZIndex=!0,this.baseZIndex=0,this.subscription=this.confirmationService.requireConfirmation$.subscribe(y=>{y?y.key===this.key&&(this.confirmation=y,this.confirmation.accept&&(this.confirmation.acceptEvent=new i.vpe,this.confirmation.acceptEvent.subscribe(this.confirmation.accept)),this.confirmation.reject&&(this.confirmation.rejectEvent=new i.vpe,this.confirmation.rejectEvent.subscribe(this.confirmation.reject)),this.visible=!0):this.hide()})}get visible(){return this._visible}set visible(r){this._visible=r,this.cd.markForCheck()}onAnimationStart(r){if("open"===r.toState){this.container=r.element,document.body.appendChild(this.container),this.align(),this.bindListeners();const d=this.getElementToFocus();d&&d.focus()}}onAnimationEnd(r){"void"===r.toState&&this.onContainerDestroy()}getElementToFocus(){switch(this.defaultFocus){case"accept":return m.p.findSingle(this.container,".p-confirm-popup-accept");case"reject":return m.p.findSingle(this.container,".p-confirm-popup-reject");case"none":return null}}align(){this.autoZIndex&&x.P9.set("overlay",this.container,this.config.zIndex.overlay),m.p.absolutePosition(this.container,this.confirmation.target);const r=m.p.getOffset(this.container),d=m.p.getOffset(this.confirmation.target);let _=0;r.left<d.left&&(_=d.left-r.left),this.container.style.setProperty("--overlayArrowLeft",`${_}px`),r.top<d.top&&m.p.addClass(this.container,"p-confirm-popup-flipped")}hide(){this.visible=!1}accept(){this.confirmation.acceptEvent&&this.confirmation.acceptEvent.emit(),this.hide()}reject(){this.confirmation.rejectEvent&&this.confirmation.rejectEvent.emit(),this.hide()}onOverlayClick(r){this.overlayService.add({originalEvent:r,target:this.el.nativeElement})}bindListeners(){this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindScrollListener()}unbindListeners(){this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindScrollListener()}bindDocumentClickListener(){if(!this.documentClickListener){let r=m.p.isIOS()?"touchstart":"click";const d=this.el?this.el.nativeElement.ownerDocument:document;this.documentClickListener=this.renderer.listen(d,r,_=>{let f=this.confirmation.target;this.container!==_.target&&!this.container.contains(_.target)&&f!==_.target&&!f.contains(_.target)&&this.hide()})}}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}onWindowResize(){this.hide()}bindDocumentResizeListener(){this.documentResizeListener=this.onWindowResize.bind(this),window.addEventListener("resize",this.documentResizeListener)}unbindDocumentResizeListener(){this.documentResizeListener&&(window.removeEventListener("resize",this.documentResizeListener),this.documentResizeListener=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new m.V(this.confirmation.target,()=>{this.visible&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unsubscribeConfirmationSubscriptions(){this.confirmation&&(this.confirmation.acceptEvent&&this.confirmation.acceptEvent.unsubscribe(),this.confirmation.rejectEvent&&this.confirmation.rejectEvent.unsubscribe())}onContainerDestroy(){this.unbindListeners(),this.unsubscribeConfirmationSubscriptions(),this.autoZIndex&&x.P9.clear(this.container),this.confirmation=null,this.container=null}restoreAppend(){this.container&&document.body.removeChild(this.container),this.onContainerDestroy()}get acceptButtonLabel(){return this.confirmation.acceptLabel||this.config.getTranslation(b.ws.ACCEPT)}get rejectButtonLabel(){return this.confirmation.rejectLabel||this.config.getTranslation(b.ws.REJECT)}ngOnDestroy(){this.restoreAppend(),this.subscription&&this.subscription.unsubscribe()}}return c.\u0275fac=function(r){return new(r||c)(i.Y36(i.SBq),i.Y36(b.YP),i.Y36(i.Qsj),i.Y36(i.sBO),i.Y36(b.b4),i.Y36(b.F0))},c.\u0275cmp=i.Xpm({type:c,selectors:[["p-confirmPopup"]],hostAttrs:[1,"p-element"],inputs:{key:"key",defaultFocus:"defaultFocus",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",autoZIndex:"autoZIndex",baseZIndex:"baseZIndex",style:"style",styleClass:"styleClass",visible:"visible"},decls:1,vars:1,consts:[[3,"ngClass","ngStyle","class","click",4,"ngIf"],[3,"ngClass","ngStyle","click"],[1,"p-confirm-popup-content"],["content",""],[3,"ngClass","class",4,"ngIf"],[1,"p-confirm-popup-message"],[1,"p-confirm-popup-footer"],["type","button","pButton","",3,"icon","label","ngClass","class","click",4,"ngIf"],[3,"ngClass"],["type","button","pButton","",3,"icon","label","ngClass","click"]],template:function(r,d){1&r&&i.YNc(0,I,9,14,"div",0),2&r&&i.Q6J("ngIf",d.visible)},directives:[v.O5,v.mk,v.PC,g.Hq],styles:['.p-confirm-popup{position:absolute;margin-top:10px;top:0;left:0}.p-confirm-popup-flipped{margin-top:0;margin-bottom:10px}.p-confirm-popup:after,.p-confirm-popup:before{bottom:100%;left:calc(var(--overlayArrowLeft, 0) + 1.25rem);content:" ";height:0;width:0;position:absolute;pointer-events:none}.p-confirm-popup:after{border-width:8px;margin-left:-8px}.p-confirm-popup:before{border-width:10px;margin-left:-10px}.p-confirm-popup-flipped:after,.p-confirm-popup-flipped:before{bottom:auto;top:100%}.p-confirm-popup.p-confirm-popup-flipped:after{border-bottom-color:transparent}.p-confirm-popup.p-confirm-popup-flipped:before{border-bottom-color:transparent}.p-confirm-popup .p-confirm-popup-content{display:flex;align-items:center}\n'],encapsulation:2,data:{animation:[(0,a.X$)("animation",[(0,a.SB)("void",(0,a.oB)({transform:"scaleY(0.8)",opacity:0})),(0,a.SB)("open",(0,a.oB)({transform:"translateY(0)",opacity:1})),(0,a.eR)("void => open",(0,a.jt)("{{showTransitionParams}}")),(0,a.eR)("open => void",(0,a.jt)("{{hideTransitionParams}}"))])]},changeDetection:0}),c})(),Z=(()=>{class c{}return c.\u0275fac=function(r){return new(r||c)},c.\u0275mod=i.oAB({type:c}),c.\u0275inj=i.cJS({imports:[[v.ez,g.hJ]]}),c})()}}]);