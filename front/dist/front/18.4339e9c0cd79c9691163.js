(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{xivt:function(e,i,t){"use strict";t.r(i),t.d(i,"ProfileProviderModule",function(){return I});var r=t("ofXK"),n=t("tyNb"),o=t("FQVY"),a=t("33Jv"),l=t("zhhV");class d{constructor(){this.userid="",this.legalName="",this.comercialName="",this.whatsapp="",this.phone="",this.addressText="",this.addressMaps="",this.ruc="",this.description="",this.image="",this.video="",this.facebook="",this.twitter="",this.instagram="",this.tiktok="",this.email="",this.districtId="",this.distrinctName="",this.lat=null,this.lng=null,this.siteWeb="",this.delivery=!1,this.onMarket=!1,this.enabledProducts=!1,this.enabledProductsFeatured=!1,this.enabledOffers=!1,this.createAt=null,this.openTime="",this.closeTime="",this.role=""}}var s=t("/JoM"),c=t("Ebga"),b=t("fXoL"),p=t("7zfz"),g=t("yGOr"),u=t("vr5I"),h=t("NCSE"),m=t("rLzU"),v=t("3Pt+");const f=["map"],S=function(e){return{"background-image":e}};function P(e,i){if(1&e){const e=b.Ub();b.Tb(0,"div",27),b.Tb(1,"div",28),b.ac("click",function(){b.yc(e);const i=b.dc();return i.removeImage(i.currentImage)}),b.Ob(2,"i",29),b.Sb(),b.Sb()}if(2&e){const e=b.dc();b.jc("ngStyle",b.oc(1,S,"url("+e.getBlobOrImage(e.currentImage)+")"))}}function T(e,i){if(1&e&&(b.Tb(0,"option",30),b.Gc(1),b.Sb()),2&e){const e=i.$implicit;b.kc("value",e._id),b.Bb(1),b.Hc(e.name)}}const M=function(e){return{width:e}},x=[{path:"",component:(()=>{class e{constructor(e,i,t,r,n){this.profileProvideService=e,this.general=i,this.messageService=t,this.authService=r,this.districtService=n,this.subs=new a.a,this.profileProvider=new d,this.images=[]}ngOnInit(){this.getProfileProvider(),this.getDistricts()}ngOnDestroy(){this.subs.unsubscribe()}getRole(){return this.authService.getRole()}getProfileProvider(){this.subs.add(this.profileProvideService.get().subscribe(e=>{e.data&&(this.profileProvider=e.data,this.profileProvider.image&&(this.currentImage={file:null,blob:null,url:this.profileProvider.image}))},e=>{this.messageService.add({severity:"error",summary:"Error",detail:e.error.message})}))}getDistricts(){this.subs.add(this.districtService.get().subscribe(e=>{this.districts=e.data},e=>{this.messageService.add({severity:"error",summary:"Error",detail:e.error.message})}))}removeImage(e){e.url&&(this.deleteImage=e,this.profileProvider.image=""),this.currentImage=null}onUpload(e){e.currentFiles.map(e=>{const i=new FileReader;i.readAsDataURL(e),i.onload=()=>{this.currentImage={file:e,blob:i.result,url:null}}}),this.images=[]}presave(){var e;this.profileProvider.userid=this.authService.getUserID(),this.deleteImage&&this.general.deleteImage(this.deleteImage.url).then(()=>{this.currentImage=null}).catch(e=>{this.messageService.add({severity:"error",summary:"Error",detail:"Error al eliminar la imagen"})}),(null===(e=this.currentImage)||void 0===e?void 0:e.file)?this.general.uploadImage(this.currentImage.file,"profile/").subscribe(e=>{"number"==typeof e?this.uploadPercent=e:(this.profileProvider.image=e,this.save())}):this.save()}save(){this.general.c("SAVE PRE",this.profileProvider),this.profileProvider.distrinctName=this.general.getItemByID(this.districts,this.profileProvider.districtId).name,this.subs.add(this.profileProvideService.save(this.profileProvider).subscribe(e=>{this.general.c("Save Profile Provider",e),this.messageService.add({severity:"success",summary:"Mensaje",detail:e.message}),this.getProfileProvider(),this.uploadPercent=0},e=>{this.messageService.add({severity:"error",summary:"Error",detail:e.error.message})}))}getBlobOrImage(e){return e.blob||e.url}setUbication(){this.profileProvider.addressMaps?new google.maps.places.PlacesService(new google.maps.Map(this.el.nativeElement,{center:new google.maps.LatLng(-12.0202343,-77.0502994),zoom:15})).findPlaceFromQuery({query:this.profileProvider.addressMaps,fields:["geometry"]},(e,i)=>{e&&e[0]?(this.profileProvider.lat=e[0].geometry.location.lat(),this.profileProvider.lng=e[0].geometry.location.lng(),this.presave()):this.messageService.add({severity:"error",summary:"Error",detail:"No se pudo obtener la ubicaci\xf3n revise la direcci\xf3n"})}):this.presave()}}return e.\u0275fac=function(i){return new(i||e)(b.Nb(l.a),b.Nb(o.a),b.Nb(p.e),b.Nb(s.a),b.Nb(c.a))},e.\u0275cmp=b.Hb({type:e,selectors:[["app-profile-provider"]],viewQuery:function(e,i){if(1&e&&b.Kc(f,1),2&e){let e;b.vc(e=b.bc())&&(i.el=e.first)}},decls:113,vars:34,consts:[[1,"row","m-0"],[1,"d-none","d-md-flex"],[1,"flex-1"],[1,"p-5"],[1,"line","mt-3"],[1,"mt-5","row","m-0"],[1,"col-md-6","col-12","p-0"],["class","image-miniature",3,"ngStyle",4,"ngIf"],[1,"mt-3","btn-upload"],["styleClass","btn2 tran w-100","mode","basic","accept","image/*","uploadLabel","Subir","cancelLabel","Cancelar","invalidFileSizeMessageDetail","El tama\xf1o m\xe1ximo es {0}.",3,"fileLimit","maxFileSize","chooseLabel","files","auto","disabled","onSelect"],[1,"loading"],[1,"col-md-6","col-12","p-0","pl-0","pl-md-5"],[1,"row","align-items-center","m-0","mt-3","mt-md-0"],[3,"ngModel","ngModelChange"],[1,"ml-4","f-13","font-600"],[1,"line"],[1,"mt-5","col-md-6","col-12","p-0"],[1,"col-12","p-0","mt-2"],["type","text",3,"ngModel","ngModelChange"],["type","number",3,"ngModel","ngModelChange"],["type","email",3,"ngModel","ngModelChange"],["value",""],[3,"value",4,"ngFor","ngForOf"],["type","time",3,"ngModel","ngModelChange"],[1,"btn1","mt-4",3,"click"],["id","map"],["map",""],[1,"image-miniature",3,"ngStyle"],[1,"delete",3,"click"],[1,"pi","pi-trash","text-white","f-20"],[3,"value"]],template:function(e,i){1&e&&(b.Tb(0,"div",0),b.Ob(1,"app-menu-provider",1),b.Tb(2,"div",2),b.Ob(3,"app-header-provider"),b.Tb(4,"div",3),b.Tb(5,"h4"),b.Gc(6,"Perfil"),b.Sb(),b.Ob(7,"hr",4),b.Tb(8,"div",5),b.Tb(9,"div",6),b.Tb(10,"div"),b.Ec(11,P,3,3,"div",7),b.Tb(12,"div",8),b.Tb(13,"p-fileUpload",9),b.ac("onSelect",function(e){return i.onUpload(e)}),b.Sb(),b.Ob(14,"div",10),b.Sb(),b.Sb(),b.Sb(),b.Tb(15,"div",11),b.Tb(16,"div",12),b.Tb(17,"p-inputSwitch",13),b.ac("ngModelChange",function(e){return i.profileProvider.delivery=e}),b.Sb(),b.Tb(18,"label",14),b.Gc(19,"Delivery"),b.Sb(),b.Sb(),b.Tb(20,"div",12),b.Tb(21,"p-inputSwitch",13),b.ac("ngModelChange",function(e){return i.profileProvider.onMarket=e}),b.Sb(),b.Tb(22,"label",14),b.Gc(23,"Recojo en tienda"),b.Sb(),b.Sb(),b.Ob(24,"hr",15),b.Tb(25,"div",12),b.Tb(26,"p-inputSwitch",13),b.ac("ngModelChange",function(e){return i.profileProvider.enabledProducts=e}),b.Sb(),b.Tb(27,"label",14),b.Gc(28,"Productos"),b.Sb(),b.Sb(),b.Tb(29,"div",12),b.Tb(30,"p-inputSwitch",13),b.ac("ngModelChange",function(e){return i.profileProvider.enabledProductsFeatured=e}),b.Sb(),b.Tb(31,"label",14),b.Gc(32,"Productos Destacados"),b.Sb(),b.Sb(),b.Tb(33,"div",12),b.Tb(34,"p-inputSwitch",13),b.ac("ngModelChange",function(e){return i.profileProvider.enabledOffers=e}),b.Sb(),b.Tb(35,"label",14),b.Gc(36,"Offertas"),b.Sb(),b.Sb(),b.Sb(),b.Sb(),b.Tb(37,"div",16),b.Tb(38,"div"),b.Tb(39,"label",17),b.Gc(40,"Nombre Comercial"),b.Sb(),b.Tb(41,"input",18),b.ac("ngModelChange",function(e){return i.profileProvider.comercialName=e}),b.Sb(),b.Sb(),b.Tb(42,"div"),b.Tb(43,"label",17),b.Gc(44,"Raz\xf3n social"),b.Sb(),b.Tb(45,"input",18),b.ac("ngModelChange",function(e){return i.profileProvider.legalName=e}),b.Sb(),b.Sb(),b.Tb(46,"div"),b.Tb(47,"label",17),b.Gc(48,"RUC"),b.Sb(),b.Tb(49,"input",18),b.ac("ngModelChange",function(e){return i.profileProvider.ruc=e}),b.Sb(),b.Sb(),b.Tb(50,"div"),b.Tb(51,"label",17),b.Gc(52,"Descripci\xf3n"),b.Sb(),b.Tb(53,"input",18),b.ac("ngModelChange",function(e){return i.profileProvider.description=e}),b.Sb(),b.Sb(),b.Tb(54,"div"),b.Tb(55,"label",17),b.Gc(56,"Whatsapp (Ejem: 987654321)"),b.Sb(),b.Tb(57,"input",19),b.ac("ngModelChange",function(e){return i.profileProvider.whatsapp=e}),b.Sb(),b.Sb(),b.Tb(58,"div"),b.Tb(59,"label",17),b.Gc(60,"Tel\xe9fono"),b.Sb(),b.Tb(61,"input",19),b.ac("ngModelChange",function(e){return i.profileProvider.phone=e}),b.Sb(),b.Sb(),b.Tb(62,"div"),b.Tb(63,"label",17),b.Gc(64,"Facebook"),b.Sb(),b.Tb(65,"input",18),b.ac("ngModelChange",function(e){return i.profileProvider.facebook=e}),b.Sb(),b.Sb(),b.Tb(66,"div"),b.Tb(67,"label",17),b.Gc(68,"Instagram"),b.Sb(),b.Tb(69,"input",18),b.ac("ngModelChange",function(e){return i.profileProvider.instagram=e}),b.Sb(),b.Sb(),b.Tb(70,"div"),b.Tb(71,"label",17),b.Gc(72,"Twitter"),b.Sb(),b.Tb(73,"input",18),b.ac("ngModelChange",function(e){return i.profileProvider.twitter=e}),b.Sb(),b.Sb(),b.Tb(74,"div"),b.Tb(75,"label",17),b.Gc(76,"Tiktok"),b.Sb(),b.Tb(77,"input",18),b.ac("ngModelChange",function(e){return i.profileProvider.tiktok=e}),b.Sb(),b.Sb(),b.Tb(78,"div"),b.Tb(79,"label",17),b.Gc(80,"Correo"),b.Sb(),b.Tb(81,"input",20),b.ac("ngModelChange",function(e){return i.profileProvider.email=e}),b.Sb(),b.Sb(),b.Tb(82,"div"),b.Tb(83,"label",17),b.Gc(84,"Sitio Web"),b.Sb(),b.Tb(85,"input",18),b.ac("ngModelChange",function(e){return i.profileProvider.siteWeb=e}),b.Sb(),b.Sb(),b.Tb(86,"div"),b.Tb(87,"label",17),b.Gc(88,"Direcci\xf3n GPS"),b.Sb(),b.Tb(89,"input",18),b.ac("ngModelChange",function(e){return i.profileProvider.addressMaps=e}),b.Sb(),b.Sb(),b.Tb(90,"div"),b.Tb(91,"label",17),b.Gc(92,"Direcci\xf3n display (Se visualizar\xe1 para los usuarios)"),b.Sb(),b.Tb(93,"input",18),b.ac("ngModelChange",function(e){return i.profileProvider.addressText=e}),b.Sb(),b.Sb(),b.Tb(94,"div"),b.Tb(95,"label",17),b.Gc(96,"Distritos"),b.Sb(),b.Tb(97,"select",13),b.ac("ngModelChange",function(e){return i.profileProvider.districtId=e}),b.Tb(98,"option",21),b.Gc(99,"Seleccione un distrito"),b.Sb(),b.Ec(100,T,2,2,"option",22),b.Sb(),b.Sb(),b.Tb(101,"div"),b.Tb(102,"label",17),b.Gc(103,"Hora de apertura"),b.Sb(),b.Tb(104,"input",23),b.ac("ngModelChange",function(e){return i.profileProvider.openTime=e}),b.Sb(),b.Sb(),b.Tb(105,"div"),b.Tb(106,"label",17),b.Gc(107,"Hora de cierre"),b.Sb(),b.Tb(108,"input",23),b.ac("ngModelChange",function(e){return i.profileProvider.closeTime=e}),b.Sb(),b.Sb(),b.Tb(109,"button",24),b.ac("click",function(){return i.setUbication()}),b.Gc(110,"Guardar"),b.Sb(),b.Sb(),b.Sb(),b.Sb(),b.Sb(),b.Ob(111,"div",25,26)),2&e&&(b.Bb(11),b.jc("ngIf",i.currentImage),b.Bb(2),b.jc("fileLimit",1)("maxFileSize",1e7)("chooseLabel","Subir Imagen")("files",i.images)("auto",!1)("disabled",!!i.currentImage),b.Bb(1),b.Cc(b.oc(32,M,i.uploadPercent+"%")),b.Bb(3),b.jc("ngModel",i.profileProvider.delivery),b.Bb(4),b.jc("ngModel",i.profileProvider.onMarket),b.Bb(5),b.jc("ngModel",i.profileProvider.enabledProducts),b.Bb(4),b.jc("ngModel",i.profileProvider.enabledProductsFeatured),b.Bb(4),b.jc("ngModel",i.profileProvider.enabledOffers),b.Bb(7),b.jc("ngModel",i.profileProvider.comercialName),b.Bb(4),b.jc("ngModel",i.profileProvider.legalName),b.Bb(4),b.jc("ngModel",i.profileProvider.ruc),b.Bb(4),b.jc("ngModel",i.profileProvider.description),b.Bb(4),b.jc("ngModel",i.profileProvider.whatsapp),b.Bb(4),b.jc("ngModel",i.profileProvider.phone),b.Bb(4),b.jc("ngModel",i.profileProvider.facebook),b.Bb(4),b.jc("ngModel",i.profileProvider.instagram),b.Bb(4),b.jc("ngModel",i.profileProvider.twitter),b.Bb(4),b.jc("ngModel",i.profileProvider.tiktok),b.Bb(4),b.jc("ngModel",i.profileProvider.email),b.Bb(4),b.jc("ngModel",i.profileProvider.siteWeb),b.Bb(4),b.jc("ngModel",i.profileProvider.addressMaps),b.Bb(4),b.jc("ngModel",i.profileProvider.addressText),b.Bb(4),b.jc("ngModel",i.profileProvider.districtId),b.Bb(3),b.jc("ngForOf",i.districts),b.Bb(4),b.jc("ngModel",i.profileProvider.openTime),b.Bb(4),b.jc("ngModel",i.profileProvider.closeTime))},directives:[g.a,u.a,r.k,h.a,m.a,v.d,v.e,v.a,v.g,v.h,v.f,v.i,r.j,r.l],styles:[".image-miniature[_ngcontent-%COMP%], .image-miniature[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%]{min-width:300px;max-width:300px;min-height:300px;max-height:300px}.btn-upload[_ngcontent-%COMP%]{max-width:300px!important}@media (max-width:953px){.image-miniature[_ngcontent-%COMP%], .image-miniature[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%]{min-width:200px;max-width:200px;min-height:200px;max-height:200px}.btn-upload[_ngcontent-%COMP%]{max-width:200px!important}}@media (max-width:768px){.image-miniature[_ngcontent-%COMP%], .image-miniature[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%]{min-width:400px;max-width:400px;min-height:400px;max-height:400px}.btn-upload[_ngcontent-%COMP%]{max-width:400px!important}}@media (max-width:508px){.image-miniature[_ngcontent-%COMP%], .image-miniature[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%]{min-width:300px;max-width:300px;min-height:300px;max-height:300px}.btn-upload[_ngcontent-%COMP%]{max-width:300px!important}}@media (max-width:408px){.image-miniature[_ngcontent-%COMP%], .image-miniature[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%]{min-width:200px;max-width:200px;min-height:200px;max-height:200px}.btn-upload[_ngcontent-%COMP%]{max-width:200px!important}}"]}),e})()}];let y=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=b.Lb({type:e}),e.\u0275inj=b.Kb({imports:[[n.e.forChild(x)],n.e]}),e})();var C=t("OteU"),w=t("6Gmc"),O=t("RTT/");let I=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=b.Lb({type:e}),e.\u0275inj=b.Kb({providers:[p.a],imports:[[r.c,y,C.a,w.a,v.b,O.b,h.b,m.b]]}),e})()},zhhV:function(e,i,t){"use strict";t.d(i,"a",function(){return l});var r=t("H+bZ"),n=t("FQVY"),o=t("/JoM"),a=t("fXoL");let l=(()=>{class e{constructor(e,i,t){this.api=e,this.general=i,this.authService=t,this.model="profile-provider"}save(e){return this.general.c("SAVE ELEMEENT",e.userid),this.api.api({service:e._id?`update-${this.model}/${e._id}`:`save-${this.model}`,type:e._id?"patch":"post",data:e})}get(){const e={service:`get-${this.model}-by-userid/${this.authService.getUserID()}`,type:"get",data:null};return this.api.api(e)}getById(e){return this.api.api({service:`get-${this.model}-by-id/${e}`,type:"get",data:null})}getAllCompanies(){return this.api.api({service:`get-${this.model}`,type:"get",data:null})}delete(e){return this.api.api({service:`delete-${this.model}/${e}`,type:"delete",data:null})}getUrlByProfileProviderId(e){return this.api.api({service:`get-url-by-profile-provider-id/${e}`,type:"get",data:null})}getUrlByUrl(e){return this.api.api({service:`get-url-by-url/${e}`,type:"get",data:null})}}return e.\u0275fac=function(i){return new(i||e)(a.Xb(r.a),a.Xb(n.a),a.Xb(o.a))},e.\u0275prov=a.Jb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);