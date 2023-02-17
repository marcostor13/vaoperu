"use strict";(self.webpackChunkfront=self.webpackChunkfront||[]).push([[358],{358:(A,T,a)=>{a.r(T),a.d(T,{CategoryModule:()=>O});var t=a(9808),v=a(9812),_=a(8745);class h{constructor(){this.name="",this.image=""}}class y{constructor(){this._id=!1,this.name=!1,this.image=!1}}var e=a(5e3),d=a(7828),Z=a(1864),b=a(9783),E=a(7840),x=a(5315),C=a(4182),S=a(27),L=a(7307);function P(r,f){if(1&r){const i=e.EpF();e.TgZ(0,"div",18)(1,"div")(2,"span",19),e._uU(3,"Nombre :"),e.qZA(),e.TgZ(4,"span",20),e._uU(5),e.qZA()(),e.TgZ(6,"div")(7,"button",21),e.NdJ("click",function(){const p=e.CHM(i).$implicit;return e.oxw().addEdit(p)}),e._uU(8,"Editar"),e.qZA()()()}if(2&r){const i=f.$implicit;e.xp6(5),e.Oqu(i.name)}}const s=function(r){return{"background-image":r}};function u(r,f){if(1&r){const i=e.EpF();e.TgZ(0,"div",22)(1,"div",23)(2,"div",24),e.NdJ("click",function(){e.CHM(i);const m=e.oxw();return m.removeImage(m.currentImage)}),e._UZ(3,"i",25),e.qZA()()()}if(2&r){const i=e.oxw();e.xp6(1),e.Q6J("ngStyle",e.VKq(1,s,"url("+i.getBlobOrImage(i.currentImage)+")"))}}function n(r,f){if(1&r){const i=e.EpF();e.TgZ(0,"button",26),e.NdJ("click",function(m){e.CHM(i);const p=e.oxw();return p.confirm(m,p.currentItem)}),e._uU(1,"Eliminar"),e.qZA()}}const l=function(){return{"max-height":"30rem"}},c=function(r){return{invalid:r}},g=function(r){return{width:r}},M=[{path:"",component:(()=>{class r{constructor(i,o,m,p){this.categoryService=i,this.general=o,this.confirmationService=m,this.messageService=p,this.subs=new _.Y,this.displayModal=!1,this.currentItem=new h,this.invalid=new y,this.images=[]}ngOnInit(){this.get()}get(){this.subs.add(this.categoryService.get().subscribe(i=>{this.items=i.data},i=>{this.messageService.add({severity:"error",summary:"Error",detail:i.error.message})}))}validate(){this.invalid=new y;let i=!1;return this.currentItem.name||(i=!0,this.invalid.name=!0),this.currentImage||(i=!0,this.invalid.image=!0),i&&this.messageService.add({severity:"error",summary:"Error",detail:"Revise los campos"}),i}reset(){this.currentItem=new h,this.currentImage=null,this.uploadPercent=0}addEdit(i=null){i?(this.currentItem=i,i.image&&(this.currentImage={file:null,blob:null,url:i.image})):this.reset(),this.displayModal=!0}confirm(i,o){this.confirmationService.confirm({target:i.target,message:"\xbfSeg\xfaro que desea eliminar?",icon:"pi pi-exclamation-triangle",acceptLabel:"S\xed",rejectLabel:"No",accept:()=>{this.delete(o)},reject:()=>{}})}add(){this.subs.add(this.categoryService.save(this.currentItem).subscribe(i=>{this.messageService.add({severity:"success",summary:"Mensaje",detail:i.message}),this.currentItem=new h,this.get(),this.reset()},i=>{this.messageService.add({severity:"error",summary:"Error",detail:i.error.message})}))}updateAll(){this.subs.add(this.categoryService.updateAll(this.items).subscribe(i=>{this.messageService.add({severity:"success",summary:"Mensaje",detail:i.message}),this.currentItem=new h,this.get()},i=>{this.messageService.add({severity:"error",summary:"Error",detail:i.error.message})}))}delete(i){i.image&&this.general.deleteImage(i.image).then(()=>{this.currentImage=null,this.subs.add(this.categoryService.delete(i._id).subscribe(o=>{this.messageService.add({severity:"success",summary:"Mensaje",detail:o.message}),this.currentItem=new h,this.get()},o=>{this.messageService.add({severity:"error",summary:"Error",detail:o.error.message})}))}).catch(o=>{this.messageService.add({severity:"error",summary:"Error",detail:"Error al eliminar la imagen"})})}removeImage(i){i.url&&(this.deleteImage=i,this.currentItem.image=""),this.currentImage=null}onUpload(i){i.currentFiles.map(o=>{const m=new FileReader;m.readAsDataURL(o),m.onload=()=>{this.currentImage={file:o,blob:m.result,url:null}}}),this.images=[]}presave(){var i;this.validate()||(this.deleteImage&&this.general.deleteImage(this.deleteImage.url).then(()=>{this.currentImage=null}).catch(o=>{this.messageService.add({severity:"error",summary:"Error",detail:"Error al eliminar la imagen"})}),(null===(i=this.currentImage)||void 0===i?void 0:i.file)?this.general.uploadImage(this.currentImage.file,"categories/").subscribe(o=>{"number"==typeof o?this.uploadPercent=o:(this.currentImage={file:null,blob:null,url:o},this.currentItem.image=o,this.add())}):this.add())}getBlobOrImage(i){return i.blob||i.url}}return r.\u0275fac=function(i){return new(i||r)(e.Y36(d.H),e.Y36(Z.m),e.Y36(b.YP),e.Y36(b.ez))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-category"]],decls:22,vars:33,consts:[[1,"p-5"],[1,"row","m-0","justify-content-between","align-items-center"],[1,"btn2",3,"click"],[1,"pi","pi-plus","mr-2"],[1,"mt-5"],["header","Lista de categor\xedas","filterPlaceholder","Buscar por nombre","filterBy","name",3,"value","listStyle","dragdrop","onReorder"],["pTemplate","item","class","mt-3"],["header","",3,"visible","modal","styleClass","baseZIndex","autoZIndex","draggable","resizable","visibleChange"],[1,"col-12","row","m-0","justify-content-center"],[1,"row","m-0","p-0","flex-column","col-12","col-md-6"],["type","text",3,"ngModel","ngClass","placeholder","keyup.enter","ngModelChange","keyup"],[1,"mt-2",3,"ngClass"],["styleClass","col-12 btn2","mode","basic","accept","image/*","uploadLabel","Subir","cancelLabel","Cancelar","invalidFileSizeMessageDetail","El tama\xf1o m\xe1ximo es {0}.",3,"fileLimit","maxFileSize","chooseLabel","files","auto","disabled","onSelect"],[1,"loading"],["class","row m-0 justify-content-center align-items-center mt-2",4,"ngIf"],[1,"btn1","mt-4",3,"click"],["class","btn3 bg-color6 pt-2 pb-2 mt-2",3,"click",4,"ngIf"],[3,"autoZIndex","baseZIndex"],["draggable","true",1,"item-list","row","justify-content-between","align-items-center","m-0","pl-2","pr-2"],[1,"font-700"],[1,"ml-3"],[1,"btn2","p-0","pl-3","pr-3",3,"click"],[1,"row","m-0","justify-content-center","align-items-center","mt-2"],[1,"bg-color6","image-miniature",3,"ngStyle"],[1,"delete",3,"click"],[1,"pi","pi-trash","text-white","f-20"],[1,"btn3","bg-color6","pt-2","pb-2","mt-2",3,"click"]],template:function(i,o){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4"),e._uU(3,"Categor\xedas"),e.qZA(),e.TgZ(4,"button",2),e.NdJ("click",function(){return o.addEdit()}),e._UZ(5,"i",3),e._uU(6," Agregar "),e.qZA()(),e.TgZ(7,"div",4)(8,"p-orderList",5),e.NdJ("onReorder",function(){return o.updateAll()}),e.YNc(9,P,9,1,"ng-template",6),e.qZA()()(),e.TgZ(10,"p-dialog",7),e.NdJ("visibleChange",function(p){return o.displayModal=p}),e.TgZ(11,"div",8)(12,"div",9)(13,"input",10),e.NdJ("keyup.enter",function(){return o.add()})("ngModelChange",function(p){return o.currentItem.name=p})("keyup",function(){return o.invalid.name=!1}),e.qZA(),e.TgZ(14,"div",11)(15,"p-fileUpload",12),e.NdJ("onSelect",function(p){return o.onUpload(p),o.invalid.image=!1}),e.qZA(),e._UZ(16,"div",13),e.qZA(),e.YNc(17,u,4,3,"div",14),e.TgZ(18,"button",15),e.NdJ("click",function(){return o.presave()}),e._uU(19,"Guardar"),e.qZA(),e.YNc(20,n,2,0,"button",16),e.qZA()()(),e._UZ(21,"p-confirmPopup",17)),2&i&&(e.xp6(8),e.Q6J("value",o.items)("listStyle",e.DdM(26,l))("dragdrop",!0),e.xp6(2),e.Q6J("visible",o.displayModal)("modal",!0)("styleClass","modalLogin")("baseZIndex",1e4)("autoZIndex",!1)("draggable",!1)("resizable",!1),e.xp6(3),e.Q6J("ngModel",o.currentItem.name)("ngClass",e.VKq(27,c,o.invalid.name))("placeholder","Categor\xeda"),e.xp6(1),e.Q6J("ngClass",e.VKq(29,c,o.invalid.image)),e.xp6(1),e.Q6J("fileLimit",1)("maxFileSize",1e7)("chooseLabel","Subir \xcdcono")("files",o.images)("auto",!1)("disabled",!!o.currentImage),e.xp6(1),e.Akn(e.VKq(31,g,o.uploadPercent+"%")),e.xp6(1),e.Q6J("ngIf",o.currentImage),e.xp6(3),e.Q6J("ngIf",o.currentItem._id),e.xp6(1),e.Q6J("autoZIndex",!1)("baseZIndex",1000001))},directives:[E.F,b.jx,x.V,C.Fj,C.JJ,C.On,t.mk,S.p,t.O5,t.PC,L.P],styles:[""]}),r})()}];let I=(()=>{class r{}return r.\u0275fac=function(i){return new(i||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[v.Bz.forChild(M)],v.Bz]}),r})();var k=a(7773);let O=(()=>{class r{}return r.\u0275fac=function(i){return new(i||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({providers:[b.YP],imports:[[t.ez,I,L.n,E.C,x.S,C.u5,k.EV,S.O]]}),r})()},7307:(A,T,a)=>{a.d(T,{P:()=>L,n:()=>P});var t=a(5e3),v=a(9808),_=a(9783),h=a(845),y=a(5921),e=a(1777),d=a(5730);function Z(s,u){if(1&s&&t._UZ(0,"i",8),2&s){const n=t.oxw(2);t.Tol(n.confirmation.icon),t.Q6J("ngClass","p-confirm-popup-icon")}}function b(s,u){if(1&s){const n=t.EpF();t.TgZ(0,"button",9),t.NdJ("click",function(){return t.CHM(n),t.oxw(2).reject()}),t.qZA()}if(2&s){const n=t.oxw(2);t.Tol(n.confirmation.rejectButtonStyleClass||"p-button-text"),t.Q6J("icon",n.confirmation.rejectIcon)("label",n.rejectButtonLabel)("ngClass","p-confirm-popup-reject p-button-sm"),t.uIk("aria-label",n.rejectButtonLabel)}}function E(s,u){if(1&s){const n=t.EpF();t.TgZ(0,"button",9),t.NdJ("click",function(){return t.CHM(n),t.oxw(2).accept()}),t.qZA()}if(2&s){const n=t.oxw(2);t.Tol(n.confirmation.acceptButtonStyleClass),t.Q6J("icon",n.confirmation.acceptIcon)("label",n.acceptButtonLabel)("ngClass","p-confirm-popup-accept p-button-sm"),t.uIk("aria-label",n.acceptButtonLabel)}}const x=function(s,u){return{showTransitionParams:s,hideTransitionParams:u}},C=function(s){return{value:"open",params:s}};function S(s,u){if(1&s){const n=t.EpF();t.TgZ(0,"div",1),t.NdJ("click",function(c){return t.CHM(n),t.oxw().onOverlayClick(c)})("@animation.start",function(c){return t.CHM(n),t.oxw().onAnimationStart(c)})("@animation.done",function(c){return t.CHM(n),t.oxw().onAnimationEnd(c)}),t.TgZ(1,"div",2,3),t.YNc(3,Z,1,3,"i",4),t.TgZ(4,"span",5),t._uU(5),t.qZA()(),t.TgZ(6,"div",6),t.YNc(7,b,1,6,"button",7),t.YNc(8,E,1,6,"button",7),t.qZA()()}if(2&s){const n=t.oxw();t.Tol(n.styleClass),t.Q6J("ngClass","p-confirm-popup p-component")("ngStyle",n.style)("@animation",t.VKq(12,C,t.WLB(9,x,n.showTransitionOptions,n.hideTransitionOptions))),t.xp6(3),t.Q6J("ngIf",n.confirmation.icon),t.xp6(2),t.Oqu(n.confirmation.message),t.xp6(2),t.Q6J("ngIf",!1!==n.confirmation.rejectVisible),t.xp6(1),t.Q6J("ngIf",!1!==n.confirmation.acceptVisible)}}let L=(()=>{class s{constructor(n,l,c,g,w,M){this.el=n,this.confirmationService=l,this.renderer=c,this.cd=g,this.config=w,this.overlayService=M,this.defaultFocus="accept",this.showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)",this.hideTransitionOptions=".1s linear",this.autoZIndex=!0,this.baseZIndex=0,this.subscription=this.confirmationService.requireConfirmation$.subscribe(I=>{I?I.key===this.key&&(this.confirmation=I,this.confirmation.accept&&(this.confirmation.acceptEvent=new t.vpe,this.confirmation.acceptEvent.subscribe(this.confirmation.accept)),this.confirmation.reject&&(this.confirmation.rejectEvent=new t.vpe,this.confirmation.rejectEvent.subscribe(this.confirmation.reject)),this.visible=!0):this.hide()})}get visible(){return this._visible}set visible(n){this._visible=n,this.cd.markForCheck()}onAnimationStart(n){if("open"===n.toState){this.container=n.element,document.body.appendChild(this.container),this.align(),this.bindListeners();const l=this.getElementToFocus();l&&l.focus()}}onAnimationEnd(n){"void"===n.toState&&this.onContainerDestroy()}getElementToFocus(){switch(this.defaultFocus){case"accept":return d.p.findSingle(this.container,".p-confirm-popup-accept");case"reject":return d.p.findSingle(this.container,".p-confirm-popup-reject");case"none":return null}}align(){this.autoZIndex&&y.P9.set("overlay",this.container,this.config.zIndex.overlay),d.p.absolutePosition(this.container,this.confirmation.target);const n=d.p.getOffset(this.container),l=d.p.getOffset(this.confirmation.target);let c=0;n.left<l.left&&(c=l.left-n.left),this.container.style.setProperty("--overlayArrowLeft",`${c}px`),n.top<l.top&&d.p.addClass(this.container,"p-confirm-popup-flipped")}hide(){this.visible=!1}accept(){this.confirmation.acceptEvent&&this.confirmation.acceptEvent.emit(),this.hide()}reject(){this.confirmation.rejectEvent&&this.confirmation.rejectEvent.emit(),this.hide()}onOverlayClick(n){this.overlayService.add({originalEvent:n,target:this.el.nativeElement})}bindListeners(){this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindScrollListener()}unbindListeners(){this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindScrollListener()}bindDocumentClickListener(){if(!this.documentClickListener){let n=d.p.isIOS()?"touchstart":"click";const l=this.el?this.el.nativeElement.ownerDocument:document;this.documentClickListener=this.renderer.listen(l,n,c=>{let g=this.confirmation.target;this.container!==c.target&&!this.container.contains(c.target)&&g!==c.target&&!g.contains(c.target)&&this.hide()})}}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}onWindowResize(){this.hide()}bindDocumentResizeListener(){this.documentResizeListener=this.onWindowResize.bind(this),window.addEventListener("resize",this.documentResizeListener)}unbindDocumentResizeListener(){this.documentResizeListener&&(window.removeEventListener("resize",this.documentResizeListener),this.documentResizeListener=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new d.V(this.confirmation.target,()=>{this.visible&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unsubscribeConfirmationSubscriptions(){this.confirmation&&(this.confirmation.acceptEvent&&this.confirmation.acceptEvent.unsubscribe(),this.confirmation.rejectEvent&&this.confirmation.rejectEvent.unsubscribe())}onContainerDestroy(){this.unbindListeners(),this.unsubscribeConfirmationSubscriptions(),this.autoZIndex&&y.P9.clear(this.container),this.confirmation=null,this.container=null}restoreAppend(){this.container&&document.body.removeChild(this.container),this.onContainerDestroy()}get acceptButtonLabel(){return this.confirmation.acceptLabel||this.config.getTranslation(_.ws.ACCEPT)}get rejectButtonLabel(){return this.confirmation.rejectLabel||this.config.getTranslation(_.ws.REJECT)}ngOnDestroy(){this.restoreAppend(),this.subscription&&this.subscription.unsubscribe()}}return s.\u0275fac=function(n){return new(n||s)(t.Y36(t.SBq),t.Y36(_.YP),t.Y36(t.Qsj),t.Y36(t.sBO),t.Y36(_.b4),t.Y36(_.F0))},s.\u0275cmp=t.Xpm({type:s,selectors:[["p-confirmPopup"]],hostAttrs:[1,"p-element"],inputs:{key:"key",defaultFocus:"defaultFocus",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",autoZIndex:"autoZIndex",baseZIndex:"baseZIndex",style:"style",styleClass:"styleClass",visible:"visible"},decls:1,vars:1,consts:[[3,"ngClass","ngStyle","class","click",4,"ngIf"],[3,"ngClass","ngStyle","click"],[1,"p-confirm-popup-content"],["content",""],[3,"ngClass","class",4,"ngIf"],[1,"p-confirm-popup-message"],[1,"p-confirm-popup-footer"],["type","button","pButton","",3,"icon","label","ngClass","class","click",4,"ngIf"],[3,"ngClass"],["type","button","pButton","",3,"icon","label","ngClass","click"]],template:function(n,l){1&n&&t.YNc(0,S,9,14,"div",0),2&n&&t.Q6J("ngIf",l.visible)},directives:[v.O5,v.mk,v.PC,h.Hq],styles:['.p-confirm-popup{position:absolute;margin-top:10px;top:0;left:0}.p-confirm-popup-flipped{margin-top:0;margin-bottom:10px}.p-confirm-popup:after,.p-confirm-popup:before{bottom:100%;left:calc(var(--overlayArrowLeft, 0) + 1.25rem);content:" ";height:0;width:0;position:absolute;pointer-events:none}.p-confirm-popup:after{border-width:8px;margin-left:-8px}.p-confirm-popup:before{border-width:10px;margin-left:-10px}.p-confirm-popup-flipped:after,.p-confirm-popup-flipped:before{bottom:auto;top:100%}.p-confirm-popup.p-confirm-popup-flipped:after{border-bottom-color:transparent}.p-confirm-popup.p-confirm-popup-flipped:before{border-bottom-color:transparent}.p-confirm-popup .p-confirm-popup-content{display:flex;align-items:center}\n'],encapsulation:2,data:{animation:[(0,e.X$)("animation",[(0,e.SB)("void",(0,e.oB)({transform:"scaleY(0.8)",opacity:0})),(0,e.SB)("open",(0,e.oB)({transform:"translateY(0)",opacity:1})),(0,e.eR)("void => open",(0,e.jt)("{{showTransitionParams}}")),(0,e.eR)("open => void",(0,e.jt)("{{hideTransitionParams}}"))])]},changeDetection:0}),s})(),P=(()=>{class s{}return s.\u0275fac=function(n){return new(n||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[[v.ez,h.hJ]]}),s})()}}]);