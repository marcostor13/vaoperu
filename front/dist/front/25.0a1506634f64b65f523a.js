(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{a5Ms:function(e,t,i){"use strict";i.r(t),i.d(t,"ProductModule",function(){return z});var r=i("ofXK"),n=i("tyNb"),s=i("mrSG"),a=i("FQVY"),c=i("33Jv");class o{constructor(){this.name="",this.profileProviderId="",this.description="",this.images=[],this.price=null,this.isFeatured=!1,this.promotionalPrice=null}}class l{constructor(){this.name=!1,this.images=!1,this.price=!1,this.description=!1}}var d=i("mgFt"),u=i("zhhV"),m=i("fXoL"),g=i("7zfz"),b=i("yGOr"),p=i("vr5I"),h=i("/RsI"),v=i("rLzU"),f=i("3Pt+"),I=i("NCSE"),S=i("RTT/"),y=i("g8TO");function j(e,t){if(1&e){const e=m.Ub();m.Tb(0,"app-product-list",25),m.ac("productsEvent",function(t){return m.yc(e),m.dc().productListEvent(t)}),m.Sb()}if(2&e){const e=m.dc();m.jc("items",e.items)}}const w=function(e){return{"background-image":e}};function M(e,t){if(1&e){const e=m.Ub();m.Tb(0,"div",28),m.Tb(1,"div",29),m.ac("click",function(){m.yc(e);const i=t.$implicit;return m.dc(2).removeImage(i)}),m.Ob(2,"i",30),m.Sb(),m.Sb()}if(2&e){const e=t.$implicit,i=m.dc(2);m.jc("ngStyle",m.oc(1,w,"url("+i.getBlobOrImage(e)+")"))}}function T(e,t){if(1&e&&(m.Tb(0,"div",26),m.Ec(1,M,3,3,"div",27),m.Sb()),2&e){const e=m.dc();m.Bb(1),m.jc("ngForOf",e.currentImages)}}function C(e,t){if(1&e){const e=m.Ub();m.Tb(0,"button",31),m.ac("click",function(t){m.yc(e);const i=m.dc();return i.confirm(t,i.currentItem)}),m.Gc(1,"Eliminar"),m.Sb()}}const k=function(e){return{invalid:e}},P=function(e){return{width:e}},x=[{path:"",component:(()=>{class e{constructor(e,t,i,r,n){this.productService=e,this.general=t,this.confirmationService=i,this.messageService=r,this.profileProviderService=n,this.subs=new c.a,this.displayModal=!1,this.currentItem=new o,this.invalid=new l,this.currentImages=[],this.images=[],this.deleteImages=[]}ngOnInit(){this.get()}get(){this.subs.add(this.productService.get().subscribe(e=>{var t;this.general.c("Get",e),this.items=e.data,0===(null===(t=e.data)||void 0===t?void 0:t.length)&&this.messageService.add({severity:"success",summary:"Mensaje",detail:"No hay productos disponibles"})},e=>{this.messageService.add({severity:"error",summary:"Error",detail:e.error.message})}))}validate(){var e;this.invalid=new l;let t=!1;return this.currentItem.name||(t=!0,this.invalid.name=!0),0===(null===(e=this.currentImages)||void 0===e?void 0:e.length)&&(t=!0,this.invalid.images=!0),t&&this.messageService.add({severity:"error",summary:"Error",detail:"Revise los campos"}),t}reset(){this.currentItem=new o,this.currentImages=[],this.uploadPercent=0}addEdit(e=null){this.currentImages=[],e?(this.currentItem=e,e.images&&e.images.map(e=>{this.currentImages=[...this.currentImages,{file:null,blob:null,url:e}]})):this.reset(),this.displayModal=!0}confirm(e,t){this.confirmationService.confirm({target:e.target,message:"\xbfSeg\xfaro que desea eliminar?",icon:"pi pi-exclamation-triangle",acceptLabel:"S\xed",rejectLabel:"No",accept:()=>{this.preDelete(t)},reject:()=>{}})}add(){this.subs.add(this.profileProviderService.get().subscribe(e=>{this.profileProvider=e.data,this.currentItem.profileProviderId=this.profileProvider._id,this.subs.add(this.productService.save(this.currentItem).subscribe(e=>{var t;this.messageService.add({severity:"success",summary:"Mensaje",detail:e.message}),(null===(t=this.currentItem)||void 0===t?void 0:t._id)||this.reset(),this.get()},e=>{this.messageService.add({severity:"error",summary:"Error",detail:e.error.message})}))},e=>{this.messageService.add({severity:"error",summary:"Error",detail:e.error.message})}))}delete(e){this.currentImages=[],this.subs.add(this.productService.delete(e._id).subscribe(e=>{this.messageService.add({severity:"success",summary:"Mensaje",detail:e.message}),this.currentItem=new o,this.get()},e=>{this.messageService.add({severity:"error",summary:"Error",detail:e.error.message})}))}preDelete(e){return Object(s.b)(this,void 0,void 0,function*(){e.images?(yield this.general.deleteImages(e.images),this.delete(e)):this.delete(e)})}removeImage(e){e.url&&(this.deleteImages=[...this.deleteImages,e],this.currentItem.images=[...this.currentItem.images.filter(t=>t!==e.url)]),this.currentImages=[...this.currentImages.filter(t=>t.url!==e.url)]}onUpload(e){e.currentFiles.map(e=>{const t=new FileReader;t.readAsDataURL(e),t.onload=()=>{this.currentImages=[...this.currentImages,{file:e,blob:t.result,url:null}]}}),this.images=[]}presave(){var e;return Object(s.b)(this,void 0,void 0,function*(){if(!this.validate())if(this.general.isLoad(!0),(null===(e=this.deleteImages)||void 0===e?void 0:e.length)>0){const e=[];this.deleteImages.map(t=>{t.url&&e.push(t.url)}),yield this.general.deleteImages(e),this.uploadImages()}else this.uploadImages()})}uploadImages(){var e;if((null===(e=this.currentImages)||void 0===e?void 0:e.length)>0){let e=1;this.currentImages.map(t=>Object(s.b)(this,void 0,void 0,function*(){var i;if(t.file){const e=yield null===(i=this.general.uploadImage(t.file,"products/"))||void 0===i?void 0:i.toPromise();e&&(this.currentItem.images=[...this.currentItem.images,e])}this.uploadPercent=100*e/this.currentImages.length,e++,e===this.currentImages.length+1&&this.add()}))}else this.add()}getBlobOrImage(e){return e.blob||e.url}productListEvent(e){switch(e.function){case"edit":this.addEdit(e.data)}}}return e.\u0275fac=function(t){return new(t||e)(m.Nb(d.a),m.Nb(a.a),m.Nb(g.a),m.Nb(g.e),m.Nb(u.a))},e.\u0275cmp=m.Hb({type:e,selectors:[["app-product"]],decls:32,vars:44,consts:[[1,"d-flex","m-0"],[1,"d-none","d-md-flex"],[1,"flex-1"],[1,"p-4","p-md-5"],[1,"row","m-0","justify-content-between","align-items-center"],[1,"btn2",3,"click"],[1,"pi","pi-plus","mr-2"],[1,"section-products","col-4","p-0"],[3,"items","productsEvent",4,"ngIf"],["header","",3,"visible","modal","styleClass","baseZIndex","autoZIndex","draggable","resizable","visibleChange"],[1,"col-12","row","m-0","justify-content-center"],[1,"row","m-0","p-0","flex-column","col-12","col-md-10"],[1,"row","align-items-center","m-0"],[3,"disabled","ngModel","ngModelChange"],[1,"ml-4"],["type","text",1,"mt-3",3,"ngModel","ngClass","placeholder","keyup.enter","ngModelChange","keyup"],[1,"mt-3",3,"ngClass"],["styleClass","col-12 btn2","mode","basic","accept","image/*","uploadLabel","Subir","cancelLabel","Cancelar","invalidFileSizeMessageDetail","El tama\xf1o m\xe1ximo es {0}.",3,"fileLimit","multiple","maxFileSize","chooseLabel","files","auto","onSelect"],[1,"loading"],["class","row m-0 justify-content-center align-items-center mt-2",4,"ngIf"],["cols","30","rows","5",3,"ngModel","ngClass","placeholder","keyup.enter","ngModelChange"],["type","text",1,"mt-3",3,"ngModel","placeholder","keyup.enter","ngModelChange"],[1,"btn1","mt-4",3,"click"],["class","btn3 bg-color6 pt-2 pb-2 mt-2",3,"click",4,"ngIf"],[3,"autoZIndex","baseZIndex"],[3,"items","productsEvent"],[1,"row","m-0","justify-content-center","align-items-center","mt-2"],["class","image-miniature m-2",3,"ngStyle",4,"ngFor","ngForOf"],[1,"image-miniature","m-2",3,"ngStyle"],[1,"delete",3,"click"],[1,"pi","pi-trash","text-white","f-20"],[1,"btn3","bg-color6","pt-2","pb-2","mt-2",3,"click"]],template:function(e,t){1&e&&(m.Tb(0,"div",0),m.Ob(1,"app-menu-provider",1),m.Tb(2,"div",2),m.Ob(3,"app-header-provider"),m.Tb(4,"div",3),m.Tb(5,"div",4),m.Tb(6,"h4"),m.Gc(7,"Productos"),m.Sb(),m.Tb(8,"button",5),m.ac("click",function(){return t.addEdit()}),m.Ob(9,"i",6),m.Gc(10," Agregar "),m.Sb(),m.Sb(),m.Tb(11,"div",7),m.Ec(12,j,1,1,"app-product-list",8),m.Sb(),m.Sb(),m.Sb(),m.Sb(),m.Tb(13,"p-dialog",9),m.ac("visibleChange",function(e){return t.displayModal=e}),m.Tb(14,"div",10),m.Tb(15,"div",11),m.Tb(16,"div",12),m.Tb(17,"p-inputSwitch",13),m.ac("ngModelChange",function(e){return t.currentItem.profileProviderId=e}),m.Sb(),m.Tb(18,"label",14),m.Gc(19,"Destacado"),m.Sb(),m.Sb(),m.Tb(20,"input",15),m.ac("keyup.enter",function(){return t.add()})("ngModelChange",function(e){return t.currentItem.name=e})("keyup",function(){return t.invalid.name=!1}),m.Sb(),m.Tb(21,"div",16),m.Tb(22,"p-fileUpload",17),m.ac("onSelect",function(e){return t.onUpload(e),t.invalid.images=!1}),m.Sb(),m.Ob(23,"div",18),m.Sb(),m.Ec(24,T,2,1,"div",19),m.Tb(25,"textarea",20),m.ac("keyup.enter",function(){return t.add()})("ngModelChange",function(e){return t.currentItem.description=e}),m.Sb(),m.Tb(26,"input",15),m.ac("keyup.enter",function(){return t.add()})("ngModelChange",function(e){return t.currentItem.price=e})("keyup",function(){return t.invalid.price=!1}),m.Sb(),m.Tb(27,"input",21),m.ac("keyup.enter",function(){return t.add()})("ngModelChange",function(e){return t.currentItem.promotionalPrice=e}),m.Sb(),m.Tb(28,"button",22),m.ac("click",function(){return t.presave()}),m.Gc(29,"Guardar"),m.Sb(),m.Ec(30,C,2,0,"button",23),m.Sb(),m.Sb(),m.Sb(),m.Ob(31,"p-confirmPopup",24)),2&e&&(m.Bb(12),m.jc("ngIf",(null==t.items?null:t.items.length)>0),m.Bb(1),m.jc("visible",t.displayModal)("modal",!0)("styleClass","modalLogin")("baseZIndex",1e4)("autoZIndex",!1)("draggable",!1)("resizable",!1),m.Bb(4),m.jc("disabled",!!t.currentItem._id)("ngModel",t.currentItem.profileProviderId),m.Bb(3),m.jc("ngModel",t.currentItem.name)("ngClass",m.oc(34,k,t.invalid.name))("placeholder","Producto"),m.Bb(1),m.jc("ngClass",m.oc(36,k,t.invalid.images)),m.Bb(1),m.jc("fileLimit",5)("multiple",!0)("maxFileSize",1e7)("chooseLabel","Subir Im\xe1genes")("files",t.images)("auto",!1),m.Bb(1),m.Cc(m.oc(38,P,t.uploadPercent+"%")),m.Bb(1),m.jc("ngIf",t.currentImages),m.Bb(1),m.jc("ngModel",t.currentItem.description)("ngClass",m.oc(40,k,t.invalid.description))("placeholder","Descripci\xf3n"),m.Bb(1),m.jc("ngModel",t.currentItem.price)("ngClass",m.oc(42,k,t.invalid.price))("placeholder","Precio"),m.Bb(1),m.jc("ngModel",t.currentItem.promotionalPrice)("placeholder","Precio promocional"),m.Bb(3),m.jc("ngIf",t.currentItem._id),m.Bb(1),m.jc("autoZIndex",!1)("baseZIndex",1000001))},directives:[b.a,p.a,r.k,h.a,v.a,f.d,f.e,f.a,r.i,I.a,S.a,y.a,r.j,r.l],styles:[".section-products[_ngcontent-%COMP%]{max-width:100%!important}"]}),e})()}];let E=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=m.Lb({type:e}),e.\u0275inj=m.Kb({imports:[[n.e.forChild(x)],n.e]}),e})();var O=i("6Gmc"),B=i("OteU"),L=i("cQJI"),F=i("Gxio"),G=i("s8BD");let z=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=m.Lb({type:e}),e.\u0275inj=m.Kb({providers:[g.a],imports:[[r.c,E,O.a,B.a,L.b,h.b,f.b,F.b,S.b,I.b,G.a,v.b]]}),e})()}}]);