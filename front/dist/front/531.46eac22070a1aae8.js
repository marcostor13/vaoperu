"use strict";(self.webpackChunkfront=self.webpackChunkfront||[]).push([[531],{6531:(ie,R,u)=>{u.r(R),u.d(R,{AddEditModule:()=>Oe});var v=u(9808),b=u(9812);class E{constructor(){this._id="",this.name="",this.profileProviderId="",this.description="",this.images=[],this.price=null}}class z{constructor(){this.name=!1,this.profileProviderId=!1,this.description=!1,this.images=!1,this.price=!1}}var i=u(5e3),A=u(1864),T=u(9783),m=u(1460),_=u(1724),M=u(4182),L=u(986),D=u(5315),P=u(907),Y=u(7307);const re=["angularCropper"];function ae(n,s){if(1&n&&(i.TgZ(0,"option",27),i._uU(1),i.qZA()),2&n){const e=s.$implicit;i.Q6J("value",e._id),i.xp6(1),i.hij(" ",e.comercialName," ")}}const J=function(n){return{"background-image":n}};function ne(n,s){if(1&n){const e=i.EpF();i.TgZ(0,"div",30)(1,"div",31),i.NdJ("click",function(){const r=i.CHM(e).$implicit;return i.oxw(2).removeImage(r)}),i._UZ(2,"i",32),i.qZA()()}if(2&n){const e=s.$implicit,t=i.oxw(2);i.Q6J("ngStyle",i.VKq(1,J,"url("+t.getBlobOrImage(e)+")"))}}function oe(n,s){if(1&n&&(i.TgZ(0,"div",28),i.YNc(1,ne,3,3,"div",29),i.qZA()),2&n){const e=i.oxw();i.xp6(1),i.Q6J("ngForOf",e.currentImages)}}function se(n,s){if(1&n){const e=i.EpF();i.TgZ(0,"button",33),i.NdJ("click",function(a){i.CHM(e);const r=i.oxw();return r.confirm(a,r.currentItem)}),i._uU(1,"Eliminar"),i.qZA()}}const O=function(n){return{invalid:n}},ce=function(n){return{width:n}},he=[{path:"",component:(()=>{class n{constructor(e,t,a,r,o,c,l){this.route=e,this.generalService=t,this.messageService=a,this.promotionsService=r,this.router=o,this.profileProviderService=c,this.confirmationService=l,this.displayModal=!1,this.invalid=new z,this.currentItem=new E,this.currentImages=[],this.images=[],this.config={aspectRatio:1,dragMode:"none",autoCropArea:100},this.deleteImages=[],this.promotionId=this.route.snapshot.paramMap.get("id")}ngOnInit(){this.getCompanies(),this.getPromotion()}getPromotion(){this.promotionId&&this.promotionsService.getById(this.promotionId).subscribe(e=>{this.currentItem=e.data,this.currentItem?this.replaceCurrentImagesByUrls():this.router.navigate(["/admin/promotions"])},e=>{this.messageService.add({severity:"error",summary:"Error",detail:e.error.message})})}getCompanies(){this.profileProviderService.getAllCompanies().subscribe(e=>{this.profileProviders=e.data},e=>{this.messageService.add({severity:"error",summary:"Error",detail:e.error.message})})}onUpload(e,t){e.currentFiles.map(a=>{const r=new FileReader;r.readAsDataURL(a),r.onload=()=>{this.currentFile=a,this.openModalCrroper(r.result),this.fileUpload=t}})}moveCropper(){this.dataImage=this.angularCropper.cropper.crop().getCroppedCanvas({width:400,height:400}).toDataURL()}openModalCrroper(e){this.imageUrl=e,this.dataImage=e,this.displayModal=!0}cropper(){this.currentImages=[...this.currentImages,{file:this.currentFile,blob:this.dataImage,url:null}],this.displayModal=!1,this.fileUpload.clear()}uploadImages(){this.generalService.isLoad(!0),this.generalService.uploadImageMultipleByBlob(this.currentImages,"promotions/").subscribe(e=>{this.generalService.isLoad(!1),"number"==typeof e?this.uploadPercent=e:(this.currentItem.images=[...this.currentItem.images,e],this.add())})}presave(){var e;this.validate()||((null===(e=this.deleteImages)||void 0===e?void 0:e.length)>0?this.generalService.deleteImages(this.deleteImages.map(t=>t.url)).then(()=>{this.uploadImages()}).catch(t=>{this.messageService.add({severity:"error",summary:"Error",detail:"Error al eliminar la imagenes"})}):this.uploadImages())}resetForm(){this.currentItem=new E,this.currentImages=[]}add(){this.currentItem._id||delete this.currentItem._id,this.promotionsService.save(this.currentItem).subscribe(e=>{this.messageService.add({severity:"success",summary:"Mensaje",detail:e.message}),this.replaceCurrentImagesByUrls(),this.promotionId||this.resetForm(),this.displayModal=!1,this.getPromotion()},e=>{this.messageService.add({severity:"error",summary:"Error",detail:e.error.message})})}replaceCurrentImagesByUrls(){this.currentImages=[...this.currentItem.images.map(e=>({file:null,blob:null,url:e}))]}removeImage(e){e.url?(this.deleteImages.push(e),this.currentItem.images=this.currentItem.images.filter(t=>t!==e.url),this.replaceCurrentImagesByUrls()):this.currentImages=this.currentImages.filter(t=>t!==e)}validate(){this.invalid=new z;let e=!1;return this.currentItem.name||(e=!0,this.invalid.name=!0),this.currentItem.profileProviderId||(e=!0,this.invalid.profileProviderId=!0),this.currentItem.description||(e=!0,this.invalid.description=!0),(!this.currentImages||0===this.currentImages.length)&&(e=!0,this.invalid.images=!0),e&&this.messageService.add({severity:"error",summary:"Error",detail:"Revise los campos"}),e}resetUploadButton(){this.fileUpload.clear()}getBlobOrImage(e){return e.blob||e.url}confirm(e,t){this.confirmationService.confirm({target:e.target,message:"\xbfSeg\xfaro que desea eliminar?",icon:"pi pi-exclamation-triangle",acceptLabel:"S\xed",rejectLabel:"No",accept:()=>{this.delete(t)}})}preDelete(e){var t;(null===(t=e.images)||void 0===t?void 0:t.length)>0?this.generalService.deleteImages(e.images).then(()=>{this.currentImages=[],this.delete(e)}).catch(a=>{this.messageService.add({severity:"error",summary:"Error",detail:"Error al eliminar la imagen"}),this.delete(e)}):this.delete(e)}delete(e){this.promotionsService.delete(e._id).subscribe(t=>{this.generalService.c("Delete",t),this.messageService.add({severity:"success",summary:"Mensaje",detail:t.message}),this.router.navigate(["admin/promotions"])},t=>{this.messageService.add({severity:"error",summary:"Error",detail:t.error.message})})}back(){this.router.navigate(["/admin/promotions"])}}return n.\u0275fac=function(e){return new(e||n)(i.Y36(b.gz),i.Y36(A.m),i.Y36(T.ez),i.Y36(m.q),i.Y36(b.F0),i.Y36(_.n),i.Y36(T.YP))},n.\u0275cmp=i.Xpm({type:n,selectors:[["app-add-edit"]],viewQuery:function(e,t){if(1&e&&i.Gf(re,5),2&e){let a;i.iGM(a=i.CRH())&&(t.angularCropper=a.first)}},decls:32,vars:44,consts:[[1,"p-5","col-12","col-md-6"],[1,"btn2",3,"click"],[1,"text-color1","mt-5"],["type","text","placeholder","Nombre",1,"mt-5",3,"ngClass","ngModel","keyup","ngModelChange"],["placeholder","Descripci\xf3n",1,"mt-2",3,"ngClass","ngModel","keyup","ngModelChange"],[1,"mt-1",3,"ngClass","ngModel","change","ngModelChange"],["value",""],[3,"value",4,"ngFor","ngForOf"],["type","number","placeholder","S/ Precio (opcional)",1,"mt-2",3,"ngModel","ngModelChange"],[1,"mt-5",3,"ngClass"],["styleClass","col-12 btn2","mode","basic","accept","image/*","uploadLabel","Subir","cancelLabel","Cancelar","invalidFileSizeMessageDetail","El tama\xf1o m\xe1ximo es {0}.",3,"fileLimit","maxFileSize","chooseLabel","multiple","files","auto","onSelect"],["fileUpload",""],[1,"loading"],["class","row m-0 justify-content-center align-items-center mt-2",4,"ngIf"],[1,"row","justify-content-center","mt-4"],[1,"btn1","mr-2",3,"click"],["class","btn3 bg-color6",3,"click",4,"ngIf"],["header","",3,"visible","modal","styleClass","baseZIndex","autoZIndex","draggable","resizable","visibleChange","onHide"],[1,"d-flex","justify-content-center"],[1,"container-cropper","p-3"],[3,"cropperOptions","imageUrl","cropmove"],["angularCropper",""],[1,"p-3"],[1,"image","image2",3,"ngStyle"],[1,"col-12","d-flex","justify-content-center","pb-5"],[1,"btn1",3,"click"],[3,"autoZIndex","baseZIndex"],[3,"value"],[1,"row","m-0","justify-content-center","align-items-center","mt-2"],["class","bg-color6 image image-miniature",3,"ngStyle",4,"ngFor","ngForOf"],[1,"bg-color6","image","image-miniature",3,"ngStyle"],[1,"delete",3,"click"],[1,"pi","pi-trash","text-white","f-20"],[1,"btn3","bg-color6",3,"click"]],template:function(e,t){if(1&e){const a=i.EpF();i.TgZ(0,"div",0)(1,"button",1),i.NdJ("click",function(){return t.back()}),i._uU(2,"Atr\xe1s"),i.qZA(),i.TgZ(3,"h4",2),i._uU(4),i.qZA(),i.TgZ(5,"input",3),i.NdJ("keyup",function(){return t.invalid.name=!1})("ngModelChange",function(o){return t.currentItem.name=o}),i.qZA(),i.TgZ(6,"textarea",4),i.NdJ("keyup",function(){return t.invalid.description=!1})("ngModelChange",function(o){return t.currentItem.description=o}),i.qZA(),i.TgZ(7,"select",5),i.NdJ("change",function(){return t.invalid.profileProviderId=!1})("ngModelChange",function(o){return t.currentItem.profileProviderId=o}),i.TgZ(8,"option",6),i._uU(9,"Seleccionar negocio"),i.qZA(),i.YNc(10,ae,2,2,"option",7),i.qZA(),i.TgZ(11,"input",8),i.NdJ("ngModelChange",function(o){return t.currentItem.price=o}),i.qZA(),i.TgZ(12,"div",9)(13,"p-fileUpload",10,11),i.NdJ("onSelect",function(o){i.CHM(a);const c=i.MAs(14);return t.onUpload(o,c),t.invalid.images=!1}),i.qZA(),i._UZ(15,"div",12),i.qZA(),i.YNc(16,oe,2,1,"div",13),i.TgZ(17,"div",14)(18,"button",15),i.NdJ("click",function(){return t.presave()}),i._uU(19,"Guardar"),i.qZA(),i.YNc(20,se,2,0,"button",16),i.qZA()(),i.TgZ(21,"p-dialog",17),i.NdJ("visibleChange",function(o){return t.displayModal=o})("onHide",function(){return t.resetUploadButton()}),i.TgZ(22,"div",18)(23,"div",19)(24,"angular-cropper",20,21),i.NdJ("cropmove",function(){return t.moveCropper()}),i.qZA()(),i.TgZ(26,"div",22),i._UZ(27,"div",23),i.qZA()(),i.TgZ(28,"div",24)(29,"button",25),i.NdJ("click",function(){return t.cropper()}),i._uU(30,"Subir"),i.qZA()()(),i._UZ(31,"p-confirmPopup",26)}2&e&&(i.xp6(4),i.hij("",t.promotionId?"Editar":"Agregar"," promoci\xf3n"),i.xp6(1),i.Q6J("ngClass",i.VKq(32,O,t.invalid.name))("ngModel",t.currentItem.name),i.xp6(1),i.Q6J("ngClass",i.VKq(34,O,t.invalid.description))("ngModel",t.currentItem.description),i.xp6(1),i.Q6J("ngClass",i.VKq(36,O,t.invalid.profileProviderId))("ngModel",t.currentItem.profileProviderId),i.xp6(3),i.Q6J("ngForOf",t.profileProviders),i.xp6(1),i.Q6J("ngModel",t.currentItem.price),i.xp6(1),i.Q6J("ngClass",i.VKq(38,O,t.invalid.images)),i.xp6(1),i.Q6J("fileLimit",1)("maxFileSize",2048e3)("chooseLabel","Subir imagen")("multiple",!1)("files",t.images)("auto",!1),i.xp6(2),i.Akn(i.VKq(40,ce,t.uploadPercent+"%")),i.xp6(1),i.Q6J("ngIf",(null==t.currentImages?null:t.currentImages.length)>0),i.xp6(4),i.Q6J("ngIf",t.currentItem._id),i.xp6(1),i.Q6J("visible",t.displayModal)("modal",!0)("styleClass","modalLogin")("baseZIndex",1e4)("autoZIndex",!0)("draggable",!1)("resizable",!1),i.xp6(3),i.Q6J("cropperOptions",t.config)("imageUrl",t.imageUrl),i.xp6(3),i.Q6J("ngStyle",i.VKq(42,J,"url("+t.dataImage+")")),i.xp6(4),i.Q6J("autoZIndex",!1)("baseZIndex",1000001))},directives:[M.Fj,v.mk,M.JJ,M.On,M.EJ,M.YN,M.Kr,v.sg,M.wV,L.p,v.O5,v.PC,D.V,P.V2,Y.P],styles:[".container-cropper[_ngcontent-%COMP%]{max-width:300px}.image2[_ngcontent-%COMP%]{min-width:300px;min-height:300px}.image-miniature[_ngcontent-%COMP%]{min-height:100px;min-width:100px}"]}),n})()}];let le=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=i.oAB({type:n}),n.\u0275inj=i.cJS({imports:[[b.Bz.forChild(he)],b.Bz]}),n})();u(2313);let Te=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=i.oAB({type:n}),n.\u0275inj=i.cJS({imports:[[v.ez]]}),n})(),Oe=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=i.oAB({type:n}),n.\u0275inj=i.cJS({imports:[[v.ez,le,D.S,L.O,Te,P.dD,M.u5,Y.n]]}),n})()},1724:(ie,R,u)=>{u.d(R,{n:()=>i});var v=u(5e3),b=u(5830),E=u(1864),z=u(2542);let i=(()=>{class A{constructor(m,_,M){this.api=m,this.general=_,this.authService=M,this.model="profile-provider"}save(m){return this.api.api({service:m._id?`update-${this.model}/${m._id}`:`save-${this.model}`,type:m._id?"patch":"post",data:m})}get(){const m={service:`get-${this.model}-by-user-id/${this.authService.getUserID()}`,type:"get",data:null};return this.api.api(m)}getById(m){return this.api.api({service:`get-${this.model}-by-id/${m}`,type:"get",data:null})}getByUserId(m){return this.api.api({service:`get-${this.model}-by-user-id/${m}`,type:"get",data:null})}getAllCompanies(){return this.api.api({service:`get-${this.model}`,type:"get",data:null})}delete(m){return this.api.api({service:`delete-${this.model}/${m}`,type:"delete",data:null})}getUrlByProfileProviderId(m){return this.api.api({service:`get-url-by-profile-provider-id/${m}`,type:"get",data:null})}getByArray(m){return this.api.api({service:`get-${this.model}-by-array`,type:"post",data:{profileProviders:m}})}getUrlByUrl(m){return this.api.api({service:`get-url-by-url/${m}`,type:"get",data:null})}}return A.\u0275fac=function(m){return new(m||A)(v.LFG(b.s),v.LFG(E.m),v.LFG(z.e))},A.\u0275prov=v.Yz7({token:A,factory:A.\u0275fac,providedIn:"root"}),A})()}}]);