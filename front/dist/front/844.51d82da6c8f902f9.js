"use strict";(self.webpackChunkfront=self.webpackChunkfront||[]).push([[844],{3844:(R,h,s)=>{s.r(h),s.d(h,{ProductModule:()=>H});var c=s(9808),f=s(9812),p=s(655),Z=s(8745);class m{constructor(){this.name="",this.profileProviderId="",this.description="",this.images=[],this.price=null,this.isFeatured=!1,this.promotionalPrice=null,this.categoryId="",this.categoryName=""}}class v{constructor(){this.name=!1,this.images=!1,this.price=!1,this.description=!1}}var e=s(5e3),T=s(319),M=s(1864),g=s(9783),x=s(1724),J=s(9493),S=s(756),U=s(6177),_=s(5315),d=s(4182),C=s(930),y=s(986),I=s(907),b=s(7307);const A=["angularCropper"];function N(i,l){if(1&i){const t=e.EpF();e.TgZ(0,"app-product-list",46),e.NdJ("productsEvent",function(a){return e.CHM(t),e.oxw().productListEvent(a)}),e.qZA()}if(2&i){const t=e.oxw();e.Q6J("profileProviderId",t.profileProvider._id)("items",t.items)}}function F(i,l){if(1&i){const t=e.EpF();e.TgZ(0,"li",47),e._uU(1),e.TgZ(2,"div")(3,"button",48),e.NdJ("click",function(){const o=e.CHM(t).$implicit;return e.oxw().deleteCategory(o)}),e._UZ(4,"i",49),e.qZA(),e.TgZ(5,"button",50),e.NdJ("click",function(){const o=e.CHM(t).$implicit;return e.oxw().editCategory(o)}),e._UZ(6,"i",51),e.qZA()()()}if(2&i){const t=l.$implicit;e.xp6(1),e.hij(" ",t.name," ")}}const P=function(i){return{"background-image":i}};function k(i,l){if(1&i){const t=e.EpF();e.TgZ(0,"div",54)(1,"div",55),e.NdJ("click",function(){const o=e.CHM(t).$implicit;return e.oxw(2).removeImage(o)}),e._UZ(2,"i",56),e.qZA()()}if(2&i){const t=l.$implicit,r=e.oxw(2);e.Q6J("ngStyle",e.VKq(1,P,"url("+r.getBlobOrImage(t)+")"))}}function E(i,l){if(1&i&&(e.TgZ(0,"div",52),e.YNc(1,k,3,3,"div",53),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",t.currentImages)}}function Q(i,l){if(1&i&&(e.TgZ(0,"option",57),e._uU(1),e.qZA()),2&i){const t=l.$implicit;e.Q6J("value",t._id),e.xp6(1),e.Oqu(t.name)}}function w(i,l){if(1&i){const t=e.EpF();e.TgZ(0,"button",58),e.NdJ("click",function(a){e.CHM(t);const o=e.oxw();return o.confirm(a,o.currentItem)}),e._uU(1,"Eliminar"),e.qZA()}}const u=function(i){return{invalid:i}},O=function(i){return{width:i}},L=[{path:"",component:(()=>{class i{constructor(t,r,a,o,n){this.productService=t,this.general=r,this.confirmationService=a,this.messageService=o,this.profileProviderService=n,this.subs=new Z.Y,this.displayModal=!1,this.displayCategories=!1,this.currentItem=new m,this.invalid=new v,this.listCat=!1,this.listCats=[],this.listCatsTmp=[],this.currentCategory={name:"",profileProviderId:""},this.currentCategoryTmp={name:"",profileProviderId:""},this.editState=!1,this.currentImages=[],this.images=[],this.deleteImages=[],this.displayModalCroper=!1,this.config={aspectRatio:1,dragMode:"none",autoCropArea:100}}ngOnInit(){this.getProfileProvider()}getProfileProvider(){this.profileProviderService.get().subscribe(t=>{this.profileProvider=t.data,this.getProducts()},t=>{this.messageService.add({severity:"error",summary:"Error",detail:t.error.message})})}getProducts(){this.productService.getByProfileProviderId(this.profileProvider._id).subscribe(t=>{var r;this.items=[...t.data],this.getCategories(),0===(null===(r=t.data)||void 0===r?void 0:r.length)&&this.messageService.add({severity:"success",summary:"Mensaje",detail:"No hay productos disponibles"})},t=>{this.messageService.add({severity:"error",summary:"Error",detail:t.error.message})})}getCategories(){this.productService.getCategoryByProfileProviderId(this.profileProvider._id).subscribe(t=>{this.categories=t.data})}issetCategory(t){return!!this.categories.find(r=>r.name===t)}validateCategory(){let t=!0;return this.currentCategory.name||(t=!1,this.responseCategory="Debe completar todo los campos"),this.issetCategory(this.currentCategory.name)&&(t=!1,this.responseCategory="La categoria ya existe"),this.editState&&(t=!1,this.responseCategory="La categoria fue editada"),t}saveCategory(){var t;if(this.validateCategory()){const r={name:null===(t=this.currentCategory)||void 0===t?void 0:t.name,profileProviderId:this.profileProvider._id};this.productService.saveCategory(r).subscribe(a=>{this.responseCategory="Categoria guardada",this.resetCategory()})}}editCategory(t){this.currentCategory=t,this.productService.saveCategory(t).subscribe(r=>{this.responseCategory="La categoria fue editada"})}deleteCategory(t){this.productService.deleteCategory(t).subscribe(r=>{this.responseCategory="La categoria fue eliminada"})}resetCategory(){this.currentCategory.name=""}validate(){var t;this.invalid=new v;let r=!1;return this.currentItem.name||(r=!0,this.invalid.name=!0),0===(null===(t=this.currentImages)||void 0===t?void 0:t.length)&&(r=!0,this.invalid.images=!0),r&&this.messageService.add({severity:"error",summary:"Error",detail:"Revise los campos"}),r}reset(){this.currentItem=new m,this.currentImages=[],this.uploadPercent=0}addEdit(t=null){this.listCat=!1,this.currentImages=[],t?(this.currentItem=t,t.images&&t.images.map(r=>{this.currentImages=[...this.currentImages,{file:null,blob:null,url:r}]})):this.reset(),this.displayModal=!0}confirm(t,r){this.confirmationService.confirm({target:t.target,message:"\xbfSeg\xfaro que desea eliminar?",icon:"pi pi-exclamation-triangle",acceptLabel:"S\xed",rejectLabel:"No",accept:()=>{this.preDelete(r)},reject:()=>{}})}add(){this.currentItem.profileProviderId=this.profileProvider._id,this.productService.save(this.currentItem).subscribe(t=>{var r;this.messageService.add({severity:"success",summary:"Mensaje",detail:t.message}),(null===(r=this.currentItem)||void 0===r?void 0:r._id)||this.reset(),this.displayModal=!1,this.getProducts()},t=>{this.messageService.add({severity:"error",summary:"Error",detail:t.error.message})})}delete(t){this.currentImages=[],this.subs.add(this.productService.delete(t._id).subscribe(r=>{this.messageService.add({severity:"success",summary:"Mensaje",detail:r.message}),this.currentItem=new m,this.getProducts()},r=>{this.messageService.add({severity:"error",summary:"Error",detail:r.error.message})}))}preDelete(t){return(0,p.mG)(this,void 0,void 0,function*(){t.images?(yield this.general.deleteImages(t.images),this.delete(t)):this.delete(t)})}removeImage(t){t.url&&(this.deleteImages=[...this.deleteImages,t],this.currentItem.images=[...this.currentItem.images.filter(r=>r!==t.url)]),this.currentImages=[...this.currentImages.filter(r=>r.url!==t.url)]}onUpload(t,r){t.currentFiles.map(a=>{const o=new FileReader;o.readAsDataURL(a),o.onload=()=>{this.currentFile=a,this.openModalCrroper(o.result),this.fileUpload=r}})}openModalCrroper(t){this.imageUrl=t,this.dataImage=t,this.displayModalCroper=!0}resetUploadButton(){this.fileUpload.clear()}moveCropper(){this.dataImage=this.angularCropper.cropper.crop().getCroppedCanvas({width:400,height:400}).toDataURL()}cropper(){this.currentImages=[...this.currentImages,{file:this.currentFile,blob:this.dataImage,url:null}],this.displayModalCroper=!1,this.fileUpload.clear()}presave(){var t;return(0,p.mG)(this,void 0,void 0,function*(){if(!this.validate())if(this.general.isLoad(!0),(null===(t=this.deleteImages)||void 0===t?void 0:t.length)>0){const r=[];this.deleteImages.map(a=>{a.url&&r.push(a.url)}),yield this.general.deleteImages(r),this.uploadImages()}else this.uploadImages()})}uploadImages(){var t;if((null===(t=this.currentImages)||void 0===t?void 0:t.length)>0){let r=1;this.currentImages.map(a=>(0,p.mG)(this,void 0,void 0,function*(){var o;if(a.file){const n=yield null===(o=this.general.uploadImage(a.file,"products/"))||void 0===o?void 0:o.toPromise();n&&(this.currentItem.images=[...this.currentItem.images,n])}this.uploadPercent=100*r/this.currentImages.length,r++,r===this.currentImages.length+1&&this.add()}))}else this.add()}getBlobOrImage(t){return t.blob||t.url}productListEvent(t){"edit"===t.function&&this.addEdit(t.data)}addEditCategories(){this.displayCategories=!0}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(T.M),e.Y36(M.m),e.Y36(g.YP),e.Y36(g.ez),e.Y36(x.n))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-product"]],viewQuery:function(t,r){if(1&t&&e.Gf(A,5),2&t){let a;e.iGM(a=e.CRH())&&(r.angularCropper=a.first)}},decls:60,vars:67,consts:[[1,"d-flex","m-0"],[1,"d-none","d-md-flex"],[1,"flex-1"],[1,"p-4","p-md-5"],[1,"row","m-0","justify-content-between","align-items-center"],[1,"mb-3","mb-md-0"],[1,"button1","btn2","mr-2","mr-lg-4",3,"click"],[1,"pi","pi-plus","mr-2"],[1,"mt-2","mt-sm-0","button1","btn2",3,"click"],[1,"section-products","col-4","p-0"],[3,"profileProviderId","items","productsEvent",4,"ngIf"],["header","",3,"visible","modal","styleClass","baseZIndex","autoZIndex","draggable","resizable","visibleChange"],[1,"px-5","pb-5"],[1,"opts","list-unstyled","pt-2"],["class","border cursor pl-2 d-flex justify-content-between",4,"ngFor","ngForOf"],["type","text","placeholder","Categor\xeda",1,"mt-3",3,"ngModel","ngModelChange"],[1,"mt-3","text-color1","d-flex","justify-content-center"],[1,"btn1","mt-3","col-12",3,"click"],[1,"col-12","row","m-0","justify-content-center","pb-5"],[1,"row","m-0","p-0","flex-column","col-12","col-md-10"],[1,"row","align-items-center","m-0"],[3,"ngModel","ngModelChange"],[1,"ml-4"],["type","text",1,"mt-3",3,"ngModel","ngClass","placeholder","keyup.enter","ngModelChange","keyup"],[1,"mt-3",3,"ngClass"],["styleClass","col-12 btn2","mode","basic","accept","image/*","uploadLabel","Subir","cancelLabel","Cancelar","invalidFileSizeMessageDetail","El tama\xf1o m\xe1ximo es {0}.",3,"fileLimit","multiple","maxFileSize","chooseLabel","files","auto","onSelect"],["fileUpload",""],[1,"loading"],["class","row m-0 justify-content-center align-items-center mt-2",4,"ngIf"],["cols","30","rows","5",3,"ngModel","ngClass","placeholder","keyup.enter","ngModelChange"],["type","text",1,"mt-3",3,"ngModel","placeholder","keyup.enter","ngModelChange"],[1,"mt-3",3,"ngModel","ngModelChange"],["value",""],[3,"value",4,"ngFor","ngForOf"],[1,"btn1","mt-4",3,"click"],["class","btn3 bg-color6 pt-2 pb-2 mt-2",3,"click",4,"ngIf"],["header","",3,"visible","modal","styleClass","baseZIndex","autoZIndex","draggable","resizable","visibleChange","onHide"],[1,"d-flex","justify-content-center","flex-column","align-items-center","flex-md-row"],[1,"container-cropper","p-3"],[3,"cropperOptions","imageUrl","cropmove"],["angularCropper",""],[1,"p-3"],[1,"image","image2",3,"ngStyle"],[1,"col-12","d-flex","justify-content-center","pb-5"],[1,"btn1",3,"click"],[3,"autoZIndex","baseZIndex"],[3,"profileProviderId","items","productsEvent"],[1,"border","cursor","pl-2","d-flex","justify-content-between"],[1,"border-0","bg-color2","text-white","mr-2",3,"click"],[1,"pi","pi-trash"],[1,"border-0","bg-color2","text-white",3,"click"],[1,"pi","pi-pencil"],[1,"row","m-0","justify-content-center","align-items-center","mt-2"],["class","image-miniature m-2",3,"ngStyle",4,"ngFor","ngForOf"],[1,"image-miniature","m-2",3,"ngStyle"],[1,"delete",3,"click"],[1,"pi","pi-trash","text-white","f-20"],[3,"value"],[1,"btn3","bg-color6","pt-2","pb-2","mt-2",3,"click"]],template:function(t,r){if(1&t){const a=e.EpF();e.TgZ(0,"div",0),e._UZ(1,"app-menu-provider",1),e.TgZ(2,"div",2),e._UZ(3,"app-header-provider"),e.TgZ(4,"div",3)(5,"div",4)(6,"h4"),e._uU(7,"Productos"),e.qZA(),e.TgZ(8,"div",5)(9,"button",6),e.NdJ("click",function(){return r.addEditCategories()}),e._UZ(10,"i",7),e._uU(11," Categor\xeda "),e.qZA(),e.TgZ(12,"button",8),e.NdJ("click",function(){return r.addEdit()}),e._UZ(13,"i",7),e._uU(14," Agregar "),e.qZA()()(),e.TgZ(15,"div",9),e.YNc(16,N,1,2,"app-product-list",10),e.qZA()()()(),e.TgZ(17,"p-dialog",11),e.NdJ("visibleChange",function(n){return r.displayCategories=n}),e.TgZ(18,"div",12)(19,"ul",13),e.YNc(20,F,7,1,"li",14),e.qZA(),e.TgZ(21,"input",15),e.NdJ("ngModelChange",function(n){return r.currentCategory.name=n}),e.qZA(),e.TgZ(22,"span",16),e._uU(23),e.qZA(),e.TgZ(24,"button",17),e.NdJ("click",function(){return r.saveCategory()}),e._uU(25,"Guardar"),e.qZA()()(),e.TgZ(26,"p-dialog",11),e.NdJ("visibleChange",function(n){return r.displayModal=n}),e.TgZ(27,"div",18)(28,"div",19)(29,"div",20)(30,"p-inputSwitch",21),e.NdJ("ngModelChange",function(n){return r.currentItem.isFeatured=n}),e.qZA(),e.TgZ(31,"label",22),e._uU(32,"Destacado"),e.qZA()(),e.TgZ(33,"input",23),e.NdJ("keyup.enter",function(){return r.add()})("ngModelChange",function(n){return r.currentItem.name=n})("keyup",function(){return r.invalid.name=!1}),e.qZA(),e.TgZ(34,"div",24)(35,"p-fileUpload",25,26),e.NdJ("onSelect",function(n){e.CHM(a);const V=e.MAs(36);return r.onUpload(n,V),r.invalid.images=!1}),e.qZA(),e._UZ(37,"div",27),e.qZA(),e.YNc(38,E,2,1,"div",28),e.TgZ(39,"textarea",29),e.NdJ("keyup.enter",function(){return r.add()})("ngModelChange",function(n){return r.currentItem.description=n}),e.qZA(),e.TgZ(40,"input",23),e.NdJ("keyup.enter",function(){return r.add()})("ngModelChange",function(n){return r.currentItem.price=n})("keyup",function(){return r.invalid.price=!1}),e.qZA(),e.TgZ(41,"input",30),e.NdJ("keyup.enter",function(){return r.add()})("ngModelChange",function(n){return r.currentItem.promotionalPrice=n}),e.qZA(),e.TgZ(42,"select",31),e.NdJ("ngModelChange",function(n){return r.currentItem.categoryId=n}),e.TgZ(43,"option",32),e._uU(44,"Seleccione la categoria"),e.qZA(),e.YNc(45,Q,2,2,"option",33),e.qZA(),e.TgZ(46,"button",34),e.NdJ("click",function(){return r.presave()}),e._uU(47,"Guardar"),e.qZA(),e.YNc(48,w,2,0,"button",35),e.qZA()()(),e.TgZ(49,"p-dialog",36),e.NdJ("visibleChange",function(n){return r.displayModalCroper=n})("onHide",function(){return r.resetUploadButton()}),e.TgZ(50,"div",37)(51,"div",38)(52,"angular-cropper",39,40),e.NdJ("cropmove",function(){return r.moveCropper()}),e.qZA()(),e.TgZ(54,"div",41),e._UZ(55,"div",42),e.qZA()(),e.TgZ(56,"div",43)(57,"button",44),e.NdJ("click",function(){return r.cropper()}),e._uU(58,"Subir"),e.qZA()()(),e._UZ(59,"p-confirmPopup",45)}2&t&&(e.xp6(16),e.Q6J("ngIf",(null==r.items?null:r.items.length)>0),e.xp6(1),e.Q6J("visible",r.displayCategories)("modal",!0)("styleClass","modalLogin")("baseZIndex",1e4)("autoZIndex",!1)("draggable",!1)("resizable",!1),e.xp6(3),e.Q6J("ngForOf",r.categories),e.xp6(1),e.Q6J("ngModel",r.currentCategory.name),e.xp6(2),e.Oqu(r.responseCategory),e.xp6(3),e.Q6J("visible",r.displayModal)("modal",!0)("styleClass","modalLogin")("baseZIndex",1e4)("autoZIndex",!1)("draggable",!1)("resizable",!1),e.xp6(4),e.Q6J("ngModel",r.currentItem.isFeatured),e.xp6(3),e.Q6J("ngModel",r.currentItem.name)("ngClass",e.VKq(55,u,r.invalid.name))("placeholder","Producto"),e.xp6(1),e.Q6J("ngClass",e.VKq(57,u,r.invalid.images)),e.xp6(1),e.Q6J("fileLimit",5)("multiple",!0)("maxFileSize",1e7)("chooseLabel","Subir Im\xe1genes")("files",r.images)("auto",!1),e.xp6(2),e.Akn(e.VKq(59,O,r.uploadPercent+"%")),e.xp6(1),e.Q6J("ngIf",r.currentImages),e.xp6(1),e.Q6J("ngModel",r.currentItem.description)("ngClass",e.VKq(61,u,r.invalid.description))("placeholder","Descripci\xf3n"),e.xp6(1),e.Q6J("ngModel",r.currentItem.price)("ngClass",e.VKq(63,u,r.invalid.price))("placeholder","Precio"),e.xp6(1),e.Q6J("ngModel",r.currentItem.promotionalPrice)("placeholder","Precio promocional"),e.xp6(1),e.Q6J("ngModel",r.currentItem.categoryId),e.xp6(3),e.Q6J("ngForOf",r.categories),e.xp6(3),e.Q6J("ngIf",r.currentItem._id),e.xp6(1),e.Q6J("visible",r.displayModalCroper)("modal",!0)("styleClass","modalLogin")("baseZIndex",1e4)("autoZIndex",!0)("draggable",!1)("resizable",!1),e.xp6(3),e.Q6J("cropperOptions",r.config)("imageUrl",r.imageUrl),e.xp6(3),e.Q6J("ngStyle",e.VKq(65,P,"url("+r.dataImage+")")),e.xp6(4),e.Q6J("autoZIndex",!1)("baseZIndex",1000001))},directives:[J.O,S.x,c.O5,U.X,_.V,c.sg,d.Fj,d.JJ,d.On,C.Ql,c.mk,y.p,c.PC,d.EJ,d.YN,d.Kr,I.V2,b.P],styles:[".section-products[_ngcontent-%COMP%]{max-width:100%!important}.container-cropper[_ngcontent-%COMP%]{max-width:300px}.image2[_ngcontent-%COMP%]{min-width:300px;min-height:300px}.image-miniature[_ngcontent-%COMP%]{min-height:100px;min-width:100px}.button1[_ngcontent-%COMP%]{min-width:170px}"]}),i})()}];let j=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[f.Bz.forChild(L)],f.Bz]}),i})();var q=s(636),Y=s(7118),z=s(7840),D=s(7773),B=s(8478);let H=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({providers:[g.YP],imports:[[c.ez,j,q.p,Y.S,z.C,_.S,d.u5,D.EV,b.n,y.O,B.f,C.Iu,I.dD]]}),i})()}}]);