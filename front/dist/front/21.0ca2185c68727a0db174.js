(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"I/Od":function(e,t,i){"use strict";i.r(t),i.d(t,"OfferModule",function(){return U});var r=i("ofXK"),s=i("tyNb"),n=i("mrSG"),a=i("FQVY"),c=i("33Jv");class l{constructor(){this.name="",this.profileProviderId="",this.description="",this.images=[],this.price=null,this.isActive=!1,this.promotionalPrice=null}}class o{constructor(){this.name=!1,this.images=!1,this.price=!1,this.description=!1}}var d=i("H+bZ"),u=i("fXoL");let m=(()=>{class e{constructor(e){this.api=e,this.model="offer"}save(e){return this.api.api({service:e._id?`update-${this.model}/${e._id}`:`save-${this.model}`,type:e._id?"patch":"post",data:e})}get(){return this.api.api({service:`get-${this.model}`,type:"get",data:null})}delete(e){return this.api.api({service:`delete-${this.model}/${e}`,type:"delete",data:null})}}return e.\u0275fac=function(t){return new(t||e)(u.Xb(d.a))},e.\u0275prov=u.Jb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var b=i("zhhV"),g=i("7zfz"),h=i("yGOr"),p=i("vr5I"),f=i("/RsI"),v=i("rLzU"),I=i("3Pt+"),y=i("NCSE"),S=i("RTT/"),w=i("g8TO");function M(e,t){if(1&e){const e=u.Ub();u.Tb(0,"app-product-list",25),u.ac("offersEvent",function(t){return u.vc(e),u.dc().offerListEvent(t)}),u.Sb()}if(2&e){const e=u.dc();u.ic("items",e.items)}}const T=function(e){return{"background-image":e}};function C(e,t){if(1&e){const e=u.Ub();u.Tb(0,"div",28),u.Tb(1,"div",29),u.ac("click",function(){u.vc(e);const i=t.$implicit;return u.dc(2).removeImage(i)}),u.Ob(2,"i",30),u.Sb(),u.Sb()}if(2&e){const e=t.$implicit,i=u.dc(2);u.ic("ngStyle",u.lc(1,T,"url("+i.getBlobOrImage(e)+")"))}}function k(e,t){if(1&e&&(u.Tb(0,"div",26),u.Bc(1,C,3,3,"div",27),u.Sb()),2&e){const e=u.dc();u.Bb(1),u.ic("ngForOf",e.currentImages)}}function O(e,t){if(1&e){const e=u.Ub();u.Tb(0,"button",31),u.ac("click",function(t){u.vc(e);const i=u.dc();return i.confirm(t,i.currentItem)}),u.Dc(1,"Eliminar"),u.Sb()}}const x=function(e){return{invalid:e}},B=function(e){return{width:e}},P=[{path:"",component:(()=>{class e{constructor(e,t,i,r,s){this.offerService=e,this.general=t,this.confirmationService=i,this.messageService=r,this.profileProviderService=s,this.subs=new c.a,this.displayModal=!1,this.currentItem=new l,this.invalid=new o,this.images=[]}ngOnInit(){this.get()}get(){this.subs.add(this.offerService.get().subscribe(e=>{var t;this.general.c("Get",e),this.items=e.data,0===(null===(t=e.data)||void 0===t?void 0:t.length)&&this.messageService.add({severity:"success",summary:"Mensaje",detail:"No hay ofertas disponibles"})},e=>{this.messageService.add({severity:"error",summary:"Error",detail:e.error.message})}))}validate(){var e;this.invalid=new o;let t=!1;return this.currentItem.name||(t=!0,this.invalid.name=!0),0===(null===(e=this.currentImages)||void 0===e?void 0:e.length)&&(t=!0,this.invalid.images=!0),t&&this.messageService.add({severity:"error",summary:"Error",detail:"Revise los campos"}),t}reset(){this.currentItem=new l,this.currentImages=[],this.uploadPercent=0}addEdit(e=null){this.currentImages=[],e?(this.currentItem=e,e.images&&e.images.map(e=>{this.currentImages=[...this.currentImages,{file:null,blob:null,url:e}]})):this.reset(),this.displayModal=!0}confirm(e,t){this.confirmationService.confirm({target:e.target,message:"\xbfSeg\xfaro que desea eliminar?",icon:"pi pi-exclamation-triangle",acceptLabel:"S\xed",rejectLabel:"No",accept:()=>{this.preDelete(t)},reject:()=>{}})}add(){this.subs.add(this.profileProviderService.get().subscribe(e=>{this.profileProvider=e.data,this.currentItem.profileProviderId=this.profileProvider._id,this.subs.add(this.offerService.save(this.currentItem).subscribe(e=>{var t;this.messageService.add({severity:"success",summary:"Mensaje",detail:e.message}),(null===(t=this.currentItem)||void 0===t?void 0:t._id)||this.reset(),this.get()},e=>{this.messageService.add({severity:"error",summary:"Error",detail:e.error.message})}))},e=>{this.messageService.add({severity:"error",summary:"Error",detail:e.error.message})}))}delete(e){this.currentImages=[],this.subs.add(this.offerService.delete(e._id).subscribe(e=>{this.messageService.add({severity:"success",summary:"Mensaje",detail:e.message}),this.currentItem=new l,this.get()},e=>{this.messageService.add({severity:"error",summary:"Error",detail:e.error.message})}))}preDelete(e){return Object(n.b)(this,void 0,void 0,function*(){e.images?(yield this.general.deleteImages(e.images),this.delete(e)):this.delete(e)})}removeImage(e){e.url&&(this.deleteImages=[...this.deleteImages,e],this.currentItem.images=[...this.currentItem.images.filter(t=>t!==e.url)]),this.currentImages=[...this.currentImages.filter(t=>t.url!==e.url)]}onUpload(e){e.currentFiles.map(e=>{const t=new FileReader;t.readAsDataURL(e),t.onload=()=>{this.currentImages=[...this.currentImages,{file:e,blob:t.result,url:null}]}}),this.images=[]}presave(){var e;return Object(n.b)(this,void 0,void 0,function*(){if(!this.validate())if(this.general.isLoad(!0),(null===(e=this.deleteImages)||void 0===e?void 0:e.length)>0){const e=[];this.deleteImages.map(t=>{t.url&&e.push(t.url)}),yield this.general.deleteImages(e),this.uploadImages()}else this.uploadImages()})}uploadImages(){var e;if((null===(e=this.currentImages)||void 0===e?void 0:e.length)>0){let e=1;this.currentImages.map(t=>Object(n.b)(this,void 0,void 0,function*(){var i;if(t.file){const e=yield null===(i=this.general.uploadImage(t.file,"offers/"))||void 0===i?void 0:i.toPromise();e&&(this.currentItem.images=[...this.currentItem.images,e])}this.uploadPercent=100*e/this.currentImages.length,e++,e===this.currentImages.length+1&&this.add()}))}else this.add()}getBlobOrImage(e){return e.blob||e.url}offerListEvent(e){switch(e.function){case"edit":this.addEdit(e.data)}}}return e.\u0275fac=function(t){return new(t||e)(u.Nb(m),u.Nb(a.a),u.Nb(g.a),u.Nb(g.e),u.Nb(b.a))},e.\u0275cmp=u.Hb({type:e,selectors:[["app-offer"]],decls:33,vars:42,consts:[[1,"d-flex","m-0"],[1,"d-none","d-md-flex"],[1,"flex-1"],[1,"p-4","p-md-5"],[1,"row","m-0","justify-content-between","align-items-center"],[1,"btn2",3,"click"],[1,"pi","pi-plus","mr-2"],[1,"section-offers","col-4","p-0"],[3,"items","offersEvent",4,"ngIf"],["header","",3,"visible","modal","styleClass","baseZIndex","autoZIndex","draggable","resizable","visibleChange"],[1,"col-12","row","m-0","justify-content-center"],[1,"row","m-0","p-0","flex-column","col-12","col-md-6"],[1,"row","align-items-center","m-0"],[3,"disabled","ngModel","ngModelChange"],[1,"ml-4"],["type","text",1,"mt-3",3,"ngModel","ngClass","placeholder","keyup.enter","ngModelChange","keyup"],[1,"mt-3",3,"ngClass"],["styleClass","col-12 btn2","mode","basic","accept","image/*","fileLimit","5","maxFileSize","10000000","uploadLabel","Subir","cancelLabel","Cancelar","invalidFileSizeMessageDetail","El tama\xf1o m\xe1ximo es {0}.",3,"multiple","chooseLabel","files","auto","onSelect"],[1,"loading"],["class","row m-0 justify-content-center align-items-center mt-2",4,"ngIf"],["cols","30","rows","5",3,"ngModel","ngClass","placeholder","keyup.enter","ngModelChange"],["type","text",1,"mt-3",3,"ngModel","placeholder","keyup.enter","ngModelChange"],[1,"btn1","mt-4",3,"click"],["class","btn3 bg-color6 pt-2 pb-2 mt-2",3,"click",4,"ngIf"],[3,"autoZIndex","baseZIndex"],[3,"items","offersEvent"],[1,"row","m-0","justify-content-center","align-items-center","mt-2"],["class","image-miniature m-2",3,"ngStyle",4,"ngFor","ngForOf"],[1,"image-miniature","m-2",3,"ngStyle"],[1,"delete",3,"click"],[1,"pi","pi-trash","text-white","f-20"],[1,"btn3","bg-color6","pt-2","pb-2","mt-2",3,"click"]],template:function(e,t){1&e&&(u.Tb(0,"div",0),u.Ob(1,"app-menu-provider",1),u.Tb(2,"div",2),u.Ob(3,"app-header-provider"),u.Tb(4,"div",3),u.Tb(5,"div",4),u.Tb(6,"h4"),u.Dc(7,"Ofertas"),u.Sb(),u.Tb(8,"button",5),u.ac("click",function(){return t.addEdit()}),u.Ob(9,"i",6),u.Dc(10," Agregar "),u.Sb(),u.Sb(),u.Tb(11,"div",7),u.Bc(12,M,1,1,"app-product-list",8),u.Sb(),u.Sb(),u.Sb(),u.Sb(),u.Tb(13,"p-dialog",9),u.ac("visibleChange",function(e){return t.displayModal=e}),u.Tb(14,"div",10),u.Tb(15,"div",11),u.Tb(16,"div",12),u.Tb(17,"p-inputSwitch",13),u.ac("ngModelChange",function(e){return t.currentItem.isActive=e}),u.Sb(),u.Tb(18,"label",14),u.Dc(19,"Activa"),u.Sb(),u.Sb(),u.Tb(20,"input",15),u.ac("keyup.enter",function(){return t.add()})("ngModelChange",function(e){return t.currentItem.name=e})("keyup",function(){return t.invalid.name=!1}),u.Sb(),u.Tb(21,"div",16),u.Tb(22,"p-fileUpload",17),u.ac("onSelect",function(e){return t.onUpload(e),t.invalid.images=!1}),u.Sb(),u.Ob(23,"div",18),u.Sb(),u.Bc(24,k,2,1,"div",19),u.Tb(25,"textarea",20),u.ac("keyup.enter",function(){return t.add()})("ngModelChange",function(e){return t.currentItem.description=e}),u.Sb(),u.Tb(26,"input",15),u.ac("keyup.enter",function(){return t.add()})("ngModelChange",function(e){return t.currentItem.price=e})("keyup",function(){return t.invalid.price=!1}),u.Sb(),u.Tb(27,"input",21),u.ac("keyup.enter",function(){return t.add()})("ngModelChange",function(e){return t.currentItem.promotionalPrice=e}),u.Sb(),u.Ob(28,"div"),u.Tb(29,"button",22),u.ac("click",function(){return t.presave()}),u.Dc(30,"Guardar"),u.Sb(),u.Bc(31,O,2,0,"button",23),u.Sb(),u.Sb(),u.Sb(),u.Ob(32,"p-confirmPopup",24)),2&e&&(u.Bb(12),u.ic("ngIf",(null==t.items?null:t.items.length)>0),u.Bb(1),u.ic("visible",t.displayModal)("modal",!0)("styleClass","modalLogin")("baseZIndex",1e4)("autoZIndex",!1)("draggable",!1)("resizable",!1),u.Bb(4),u.ic("disabled",t.currentItem._id)("ngModel",t.currentItem.isActive),u.Bb(3),u.ic("ngModel",t.currentItem.name)("ngClass",u.lc(32,x,t.invalid.name))("placeholder","Oferta"),u.Bb(1),u.ic("ngClass",u.lc(34,x,t.invalid.images)),u.Bb(1),u.ic("multiple",!0)("chooseLabel","Subir Im\xe1genes")("files",t.images)("auto",!1),u.Bb(1),u.zc(u.lc(36,B,t.uploadPercent+"%")),u.Bb(1),u.ic("ngIf",t.currentImages),u.Bb(1),u.ic("ngModel",t.currentItem.description)("ngClass",u.lc(38,x,t.invalid.description))("placeholder","Descripci\xf3n"),u.Bb(1),u.ic("ngModel",t.currentItem.price)("ngClass",u.lc(40,x,t.invalid.price))("placeholder","Precio"),u.Bb(1),u.ic("ngModel",t.currentItem.promotionalPrice)("placeholder","Precio promocional"),u.Bb(4),u.ic("ngIf",t.currentItem._id),u.Bb(1),u.ic("autoZIndex",!1)("baseZIndex",1000001))},directives:[h.a,p.a,r.k,f.a,v.a,I.d,I.e,I.a,r.i,y.a,S.a,w.a,r.j,r.l],styles:[".section-offers[_ngcontent-%COMP%]{max-width:100%!important}"]}),e})()}];let E=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=u.Lb({type:e}),e.\u0275inj=u.Kb({imports:[[s.d.forChild(P)],s.d]}),e})();var L=i("6Gmc"),j=i("OteU"),D=i("cQJI"),z=i("Gxio"),N=i("s8BD");let U=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=u.Lb({type:e}),e.\u0275inj=u.Kb({providers:[g.a],imports:[[r.c,E,L.a,j.a,D.b,f.b,I.b,z.b,S.b,y.b,N.a,v.b]]}),e})()}}]);