(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"2K/p":function(e,t,i){"use strict";i.d(t,"a",function(){return s});var n=i("H+bZ"),r=i("fXoL");let s=(()=>{class e{constructor(e){this.api=e,this.model="category"}save(e){return this.api.api({service:e._id?`update-${this.model}/${e._id}`:`save-${this.model}`,type:e._id?"patch":"post",data:e})}updateAll(e){return this.api.api({service:`update-${this.model}-all`,type:"patch",data:e})}get(){return this.api.api({service:`get-${this.model}`,type:"get",data:null})}delete(e){return this.api.api({service:`delete-${this.model}/${e}`,type:"delete",data:null})}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(n.a))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},Kkf4:function(e,t,i){"use strict";i.r(t),i.d(t,"SubcategoryModule",function(){return O});var n=i("ofXK"),r=i("tyNb"),s=i("FQVY"),a=i("33Jv");class o{constructor(){this.name="",this.image="",this.categoryId=""}}class c{constructor(){this._id=!1,this.name=!1,this.image=!1,this.categoryId=!1}}var l=i("wDSy"),u=i("2K/p"),d=i("fXoL"),b=i("7zfz"),m=i("cQJI"),p=i("/RsI"),h=i("3Pt+"),g=i("NCSE"),f=i("RTT/");function v(e,t){if(1&e){const e=d.Vb();d.Ub(0,"div",21),d.Ub(1,"div"),d.Ub(2,"span",22),d.Ic(3,"Nombre :"),d.Tb(),d.Ub(4,"span",23),d.Ic(5),d.Tb(),d.Tb(),d.Ub(6,"div"),d.Ub(7,"button",24),d.bc("click",function(){d.Ac(e);const i=t.$implicit;return d.ec().addEdit(i)}),d.Ic(8,"Editar"),d.Tb(),d.Tb(),d.Tb()}if(2&e){const e=t.$implicit;d.Cb(5),d.Jc(e.name)}}function y(e,t){if(1&e&&(d.Ub(0,"option",25),d.Ic(1),d.Tb()),2&e){const e=t.$implicit;d.lc("value",e._id),d.Cb(1),d.Jc(e.name)}}const I=function(e){return{"background-image":e}};function C(e,t){if(1&e){const e=d.Vb();d.Ub(0,"div",26),d.Ub(1,"div",27),d.Ub(2,"div",28),d.bc("click",function(){d.Ac(e);const t=d.ec();return t.removeImage(t.currentImage)}),d.Pb(3,"i",29),d.Tb(),d.Tb(),d.Tb()}if(2&e){const e=d.ec();d.Cb(1),d.kc("ngStyle",d.pc(1,I,"url("+e.getBlobOrImage(e.currentImage)+")"))}}function k(e,t){if(1&e){const e=d.Vb();d.Ub(0,"button",30),d.bc("click",function(t){d.Ac(e);const i=d.ec();return i.confirm(t,i.currentItem)}),d.Ic(1,"Eliminar"),d.Tb()}}const S=function(){return{"max-height":"30rem"}},L=function(e){return{invalid:e}},w=function(e){return{width:e}},T=[{path:"",component:(()=>{class e{constructor(e,t,i,n,r){this.subcategoryService=e,this.categoryService=t,this.general=i,this.confirmationService=n,this.messageService=r,this.subs=new a.a,this.displayModal=!1,this.currentItem=new o,this.invalid=new c,this.images=[]}ngOnInit(){this.get(),this.getCategories()}get(){this.subs.add(this.subcategoryService.get().subscribe(e=>{this.general.c("Get",e),this.items=e.data},e=>{this.messageService.add({severity:"error",summary:"Error",detail:e.error.message})}))}getCategories(){this.subs.add(this.categoryService.get().subscribe(e=>{this.categories=e.data},e=>{this.messageService.add({severity:"error",summary:"Error",detail:e.error.message})}))}validate(){this.invalid=new c;let e=!1;return this.currentItem.name||(e=!0,this.invalid.name=!0),this.currentImage||(e=!0,this.invalid.image=!0),e&&this.messageService.add({severity:"error",summary:"Error",detail:"Revise los campos"}),e}reset(){this.currentItem=new o,this.currentImage=null,this.uploadPercent=0}addEdit(e=null){this.general.c("ITem",e),e?(this.currentItem=e,e.image&&(this.currentImage={file:null,blob:null,url:e.image})):this.reset(),this.displayModal=!0}confirm(e,t){this.confirmationService.confirm({target:e.target,message:"\xbfSeg\xfaro que desea eliminar?",icon:"pi pi-exclamation-triangle",acceptLabel:"S\xed",rejectLabel:"No",accept:()=>{this.delete(t)},reject:()=>{}})}add(){this.subs.add(this.subcategoryService.save(this.currentItem).subscribe(e=>{this.general.c("Add",e),this.messageService.add({severity:"success",summary:"Mensaje",detail:e.message}),this.currentItem=new o,this.currentItem._id||this.reset(),this.get()},e=>{this.messageService.add({severity:"error",summary:"Error",detail:e.error.message})}))}updateAll(){this.general.c("reorder",this.items),this.subs.add(this.subcategoryService.updateAll(this.items).subscribe(e=>{this.general.c("updateAll",e),this.messageService.add({severity:"success",summary:"Mensaje",detail:e.message}),this.currentItem=new o,this.get()},e=>{this.messageService.add({severity:"error",summary:"Error",detail:e.error.message})}))}delete(e){e.image&&this.general.deleteImage(e.image).then(()=>{this.currentImage=null,this.subs.add(this.subcategoryService.delete(e._id).subscribe(e=>{this.general.c("Delete",e),this.messageService.add({severity:"success",summary:"Mensaje",detail:e.message}),this.currentItem=new o,this.get()},e=>{this.messageService.add({severity:"error",summary:"Error",detail:e.error.message})}))}).catch(e=>{this.messageService.add({severity:"error",summary:"Error",detail:"Error al eliminar la imagen"})})}removeImage(e){this.general.c("RemoveImage",e),e.url&&(this.deleteImage=e,this.currentItem.image=""),this.currentImage=null}onUpload(e){this.general.c("onUpload",e),e.currentFiles.map(e=>{const t=new FileReader;t.readAsDataURL(e),t.onload=()=>{this.currentImage={file:e,blob:t.result,url:null},this.general.c("Onupload",this.currentImage)}}),this.images=[]}presave(){var e;this.validate()||(this.general.isLoad(!0),this.general.c("save image",this.deleteImage),this.deleteImage&&this.general.deleteImage(this.deleteImage.url).then(()=>{this.currentImage=null}).catch(e=>{this.messageService.add({severity:"error",summary:"Error",detail:"Error al eliminar la imagen"})}),(null===(e=this.currentImage)||void 0===e?void 0:e.file)?this.general.uploadImage(this.currentImage.file,"subcategories/").subscribe(e=>{"number"==typeof e?this.uploadPercent=e:(this.currentImage={file:null,blob:null,url:e},this.currentItem.image=e,this.add())}):this.add())}getBlobOrImage(e){return e.blob||e.url}}return e.\u0275fac=function(t){return new(t||e)(d.Ob(l.a),d.Ob(u.a),d.Ob(s.a),d.Ob(b.b),d.Ob(b.f))},e.\u0275cmp=d.Ib({type:e,selectors:[["app-subcategory"]],decls:26,vars:35,consts:[[1,"p-5"],[1,"row","m-0","justify-content-between","align-items-center"],[1,"btn2",3,"click"],[1,"pi","pi-plus","mr-2"],[1,"mt-5"],["header","Lista de subcategor\xedas","filterPlaceholder","Buscar por nombre","filterBy","name",3,"value","listStyle","dragdrop","onReorder"],["pTemplate","item","class","mt-3"],["header","",3,"visible","modal","styleClass","baseZIndex","autoZIndex","draggable","resizable","visibleChange"],[1,"col-12","row","m-0","justify-content-center"],[1,"row","m-0","p-0","flex-column","col-12","col-md-6"],["type","text",3,"ngModel","ngClass","placeholder","keyup.enter","ngModelChange","keyup"],[1,"mt-2",3,"ngModel","ngModelChange"],["value",""],[3,"value",4,"ngFor","ngForOf"],[1,"mt-2",3,"ngClass"],["styleClass","col-12 btn2","mode","basic","accept","image/*","uploadLabel","Subir","cancelLabel","Cancelar","invalidFileSizeMessageDetail","El tama\xf1o m\xe1ximo es {0}.",3,"fileLimit","maxFileSize","chooseLabel","files","auto","disabled","onSelect"],[1,"loading"],["class","row m-0 justify-content-center align-items-center mt-2",4,"ngIf"],[1,"btn1","mt-4",3,"click"],["class","btn3 bg-color6 pt-2 pb-2 mt-2",3,"click",4,"ngIf"],[3,"autoZIndex","baseZIndex"],["draggable","true",1,"item-list","row","justify-content-between","align-items-center","m-0","pl-2","pr-2"],[1,"font-700"],[1,"ml-3"],[1,"btn2","p-0","pl-3","pr-3",3,"click"],[3,"value"],[1,"row","m-0","justify-content-center","align-items-center","mt-2"],[1,"image-miniature",3,"ngStyle"],[1,"delete",3,"click"],[1,"pi","pi-trash","text-white","f-20"],[1,"btn3","bg-color6","pt-2","pb-2","mt-2",3,"click"]],template:function(e,t){1&e&&(d.Ub(0,"div",0),d.Ub(1,"div",1),d.Ub(2,"h4"),d.Ic(3,"Subcategor\xedas"),d.Tb(),d.Ub(4,"button",2),d.bc("click",function(){return t.addEdit()}),d.Pb(5,"i",3),d.Ic(6," Agregar "),d.Tb(),d.Tb(),d.Ub(7,"div",4),d.Ub(8,"p-orderList",5),d.bc("onReorder",function(){return t.updateAll()}),d.Gc(9,v,9,1,"ng-template",6),d.Tb(),d.Tb(),d.Tb(),d.Ub(10,"p-dialog",7),d.bc("visibleChange",function(e){return t.displayModal=e}),d.Ub(11,"div",8),d.Ub(12,"div",9),d.Ub(13,"input",10),d.bc("keyup.enter",function(){return t.add()})("ngModelChange",function(e){return t.currentItem.name=e})("keyup",function(){return t.invalid.name=!1}),d.Tb(),d.Ub(14,"select",11),d.bc("ngModelChange",function(e){return t.currentItem.categoryId=e}),d.Ub(15,"option",12),d.Ic(16,"Seleccione una categor\xeda"),d.Tb(),d.Gc(17,y,2,2,"option",13),d.Tb(),d.Ub(18,"div",14),d.Ub(19,"p-fileUpload",15),d.bc("onSelect",function(e){return t.onUpload(e),t.invalid.image=!1}),d.Tb(),d.Pb(20,"div",16),d.Tb(),d.Gc(21,C,4,3,"div",17),d.Ub(22,"button",18),d.bc("click",function(){return t.presave()}),d.Ic(23,"Guardar"),d.Tb(),d.Gc(24,k,2,0,"button",19),d.Tb(),d.Tb(),d.Tb(),d.Pb(25,"p-confirmPopup",20)),2&e&&(d.Cb(8),d.kc("value",t.items)("listStyle",d.oc(28,S))("dragdrop",!0),d.Cb(2),d.kc("visible",t.displayModal)("modal",!0)("styleClass","modalLogin")("baseZIndex",1e4)("autoZIndex",!1)("draggable",!1)("resizable",!1),d.Cb(3),d.kc("ngModel",t.currentItem.name)("ngClass",d.pc(29,L,t.invalid.name))("placeholder","Subcategor\xeda"),d.Cb(1),d.kc("ngModel",t.currentItem.categoryId),d.Cb(3),d.kc("ngForOf",t.categories),d.Cb(1),d.kc("ngClass",d.pc(31,L,t.invalid.image)),d.Cb(1),d.kc("fileLimit",1)("maxFileSize",1e7)("chooseLabel","Subir \xcdcono")("files",t.images)("auto",!1)("disabled",!!t.currentImage),d.Cb(1),d.Ec(d.pc(33,w,t.uploadPercent+"%")),d.Cb(1),d.kc("ngIf",t.currentImage),d.Cb(3),d.kc("ngIf",t.currentItem._id),d.Cb(1),d.kc("autoZIndex",!1)("baseZIndex",1000001))},directives:[m.a,b.h,p.a,h.a,h.d,h.e,n.i,h.h,h.f,h.i,n.j,g.a,n.k,f.a,n.l],styles:[""]}),e})()}];let j=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=d.Mb({type:e}),e.\u0275inj=d.Lb({imports:[[r.f.forChild(T)],r.f]}),e})();var E=i("Gxio");let O=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=d.Mb({type:e}),e.\u0275inj=d.Lb({providers:[b.b],imports:[[n.c,j,f.b,m.b,p.b,h.b,E.b,g.b]]}),e})()},"RTT/":function(e,t,i){"use strict";i.d(t,"a",function(){return h}),i.d(t,"b",function(){return g});var n=i("fXoL"),r=i("ofXK"),s=i("7zfz"),a=i("jIHw"),o=i("R0Ic"),c=i("YyRF");function l(e,t){if(1&e&&n.Pb(0,"i",8),2&e){const e=n.ec(2);n.Eb(e.confirmation.icon),n.kc("ngClass","p-confirm-popup-icon")}}function u(e,t){if(1&e){const e=n.Vb();n.Ub(0,"button",9),n.bc("click",function(){return n.Ac(e),n.ec(2).reject()}),n.Tb()}if(2&e){const e=n.ec(2);n.Eb(e.confirmation.rejectButtonStyleClass||"p-button-text"),n.kc("icon",e.confirmation.rejectIcon)("label",e.rejectButtonLabel)("ngClass","p-confirm-popup-reject p-button-sm"),n.Db("aria-label",e.rejectButtonLabel)}}function d(e,t){if(1&e){const e=n.Vb();n.Ub(0,"button",9),n.bc("click",function(){return n.Ac(e),n.ec(2).accept()}),n.Tb()}if(2&e){const e=n.ec(2);n.Eb(e.confirmation.acceptButtonStyleClass),n.kc("icon",e.confirmation.acceptIcon)("label",e.acceptButtonLabel)("ngClass","p-confirm-popup-accept p-button-sm"),n.Db("aria-label",e.acceptButtonLabel)}}const b=function(e,t){return{showTransitionParams:e,hideTransitionParams:t}},m=function(e){return{value:"open",params:e}};function p(e,t){if(1&e){const e=n.Vb();n.Ub(0,"div",1),n.bc("@animation.start",function(t){return n.Ac(e),n.ec().onAnimationStart(t)})("@animation.done",function(t){return n.Ac(e),n.ec().onAnimationEnd(t)}),n.Ub(1,"div",2,3),n.Gc(3,l,1,3,"i",4),n.Ub(4,"span",5),n.Ic(5),n.Tb(),n.Tb(),n.Ub(6,"div",6),n.Gc(7,u,1,6,"button",7),n.Gc(8,d,1,6,"button",7),n.Tb(),n.Tb()}if(2&e){const e=n.ec();n.Eb(e.styleClass),n.kc("ngClass","p-confirm-popup p-component")("ngStyle",e.style)("@animation",n.pc(12,m,n.qc(9,b,e.showTransitionOptions,e.hideTransitionOptions))),n.Cb(3),n.kc("ngIf",e.confirmation.icon),n.Cb(2),n.Jc(e.confirmation.message),n.Cb(2),n.kc("ngIf",!1!==e.confirmation.rejectVisible),n.Cb(1),n.kc("ngIf",!1!==e.confirmation.acceptVisible)}}let h=(()=>{class e{constructor(e,t,i,r,s){this.el=e,this.confirmationService=t,this.renderer=i,this.cd=r,this.config=s,this.showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)",this.hideTransitionOptions=".1s linear",this.autoZIndex=!0,this.baseZIndex=0,this.subscription=this.confirmationService.requireConfirmation$.subscribe(e=>{e?e.key===this.key&&(this.confirmation=e,this.confirmation.accept&&(this.confirmation.acceptEvent=new n.n,this.confirmation.acceptEvent.subscribe(this.confirmation.accept)),this.confirmation.reject&&(this.confirmation.rejectEvent=new n.n,this.confirmation.rejectEvent.subscribe(this.confirmation.reject)),this.visible=!0):this.hide()})}get visible(){return this._visible}set visible(e){this._visible=e,this.cd.markForCheck()}onAnimationStart(e){"open"===e.toState&&(this.container=e.element,document.body.appendChild(this.container),this.align(),this.bindListeners())}onAnimationEnd(e){switch(e.toState){case"void":this.onContainerDestroy()}}align(){this.autoZIndex&&(this.container.style.zIndex=String(this.baseZIndex+ ++c.b.zindex)),c.b.absolutePosition(this.container,this.confirmation.target);const e=c.b.getOffset(this.container),t=c.b.getOffset(this.confirmation.target);let i=0;e.left<t.left&&(i=t.left-e.left),this.container.style.setProperty("--overlayArrowLeft",`${i}px`),e.top<t.top&&c.b.addClass(this.container,"p-confirm-popup-flipped")}hide(){this.visible=!1}accept(){this.confirmation.acceptEvent&&this.confirmation.acceptEvent.emit(),this.hide()}reject(){this.confirmation.rejectEvent&&this.confirmation.rejectEvent.emit(),this.hide()}bindListeners(){this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindScrollListener()}unbindListeners(){this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindScrollListener()}bindDocumentClickListener(){if(!this.documentClickListener){let e=c.b.isIOS()?"touchstart":"click";const t=this.el?this.el.nativeElement.ownerDocument:document;this.documentClickListener=this.renderer.listen(t,e,e=>{let t=this.confirmation.target;this.container===e.target||this.container.contains(e.target)||t===e.target||t.contains(e.target)||this.hide()})}}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}onWindowResize(){this.hide()}bindDocumentResizeListener(){this.documentResizeListener=this.onWindowResize.bind(this),window.addEventListener("resize",this.documentResizeListener)}unbindDocumentResizeListener(){this.documentResizeListener&&(window.removeEventListener("resize",this.documentResizeListener),this.documentResizeListener=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new c.a(this.confirmation.target,()=>{this.visible&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unsubscribeConfirmationSubscriptions(){this.confirmation&&(this.confirmation.acceptEvent&&this.confirmation.acceptEvent.unsubscribe(),this.confirmation.rejectEvent&&this.confirmation.rejectEvent.unsubscribe())}onContainerDestroy(){this.unbindListeners(),this.unsubscribeConfirmationSubscriptions(),this.confirmation=null,this.container=null}restoreAppend(){this.container&&document.body.removeChild(this.container),this.onContainerDestroy()}get acceptButtonLabel(){return this.confirmation.acceptLabel||this.config.getTranslation(s.j.ACCEPT)}get rejectButtonLabel(){return this.confirmation.rejectLabel||this.config.getTranslation(s.j.REJECT)}ngOnDestroy(){this.restoreAppend(),this.subscription&&this.subscription.unsubscribe()}}return e.\u0275fac=function(t){return new(t||e)(n.Ob(n.l),n.Ob(s.b),n.Ob(n.E),n.Ob(n.h),n.Ob(s.g))},e.\u0275cmp=n.Ib({type:e,selectors:[["p-confirmPopup"]],inputs:{showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",autoZIndex:"autoZIndex",baseZIndex:"baseZIndex",visible:"visible",key:"key",style:"style",styleClass:"styleClass"},decls:1,vars:1,consts:[[3,"ngClass","ngStyle","class",4,"ngIf"],[3,"ngClass","ngStyle"],[1,"p-confirm-popup-content"],["content",""],[3,"ngClass","class",4,"ngIf"],[1,"p-confirm-popup-message"],[1,"p-confirm-popup-footer"],["type","button","pButton","",3,"icon","label","ngClass","class","click",4,"ngIf"],[3,"ngClass"],["type","button","pButton","",3,"icon","label","ngClass","click"]],template:function(e,t){1&e&&n.Gc(0,p,9,14,"div",0),2&e&&n.kc("ngIf",t.visible)},directives:[r.k,r.i,r.l,a.b],styles:['.p-confirm-popup{margin-top:10px;position:absolute}.p-confirm-popup-flipped{margin-bottom:10px;margin-top:0}.p-confirm-popup:after,.p-confirm-popup:before{bottom:100%;content:" ";height:0;left:calc(var(--overlayArrowLeft, 0) + 1.25rem);pointer-events:none;position:absolute;width:0}.p-confirm-popup:after{border-width:8px;margin-left:-8px}.p-confirm-popup:before{border-width:10px;margin-left:-10px}.p-confirm-popup-flipped:after,.p-confirm-popup-flipped:before{bottom:auto;top:100%}.p-confirm-popup.p-confirm-popup-flipped:after,.p-confirm-popup.p-confirm-popup-flipped:before{border-bottom-color:transparent}.p-confirm-popup .p-confirm-popup-content{align-items:center;display:flex}'],encapsulation:2,data:{animation:[Object(o.m)("animation",[Object(o.j)("void",Object(o.k)({transform:"scaleY(0.8)",opacity:0})),Object(o.j)("open",Object(o.k)({transform:"translateY(0)",opacity:1})),Object(o.l)("void => open",Object(o.e)("{{showTransitionParams}}")),Object(o.l)("open => void",Object(o.e)("{{hideTransitionParams}}"))])]},changeDetection:0}),e})(),g=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.Mb({type:e}),e.\u0275inj=n.Lb({imports:[[r.c,a.c]]}),e})()},wDSy:function(e,t,i){"use strict";i.d(t,"a",function(){return s});var n=i("H+bZ"),r=i("fXoL");let s=(()=>{class e{constructor(e){this.api=e,this.model="subcategory"}save(e){return this.api.api({service:e._id?`update-${this.model}/${e._id}`:`save-${this.model}`,type:e._id?"patch":"post",data:e})}updateAll(e){return this.api.api({service:`update-${this.model}-all`,type:"patch",data:e})}get(){return this.api.api({service:`get-${this.model}`,type:"get",data:null})}delete(e){return this.api.api({service:`delete-${this.model}/${e}`,type:"delete",data:null})}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(n.a))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);