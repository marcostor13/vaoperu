"use strict";(self.webpackChunkfront=self.webpackChunkfront||[]).push([[149],{149:(w,m,o)=>{o.r(m),o.d(m,{ViewCompanyModule:()=>K});var c=o(9808),f=o(9812),p=o(655),d=o(5767),s=o(801),l=o(5439),t=o(5e3),T=o(1864),Z=o(1724),S=o(2542),M=o(319),I=o(9062),F=o(8157),P=o(9783),A=o(5519),_=o(3561),y=o(3725),V=o(3957),U=o(3349);function Y(i,a){1&i&&t._UZ(0,"img",33)}function J(i,a){1&i&&t._UZ(0,"img",34)}function N(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"button",35),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).information()}),t._uU(1,"Informaci\xf3n"),t.qZA()}}function O(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"button",36),t.NdJ("click",function(){t.CHM(e);const n=t.oxw(2);return n.confirmDeleteFavorites(n.profileProvider._id)}),t._UZ(1,"fa-icon",37),t.qZA()}if(2&i){const e=t.oxw(2);t.xp6(1),t.Q6J("icon",e.faStar)}}function j(i,a){if(1&i&&(t.TgZ(0,"label",38),t._uU(1),t.qZA()),2&i){const e=t.oxw(2);t.xp6(1),t.hij("",e.profileProvider.distance," km")}}function B(i,a){if(1&i&&(t.TgZ(0,"span",43),t._uU(1),t.qZA()),2&i){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.title)}}function E(i,a){if(1&i&&t._UZ(0,"app-product-list",44),2&i){const e=t.oxw().$implicit,r=t.oxw(2);t.Q6J("type",e.title)("profileProviderId",r.profileProvider._id)("items",e.data)("rows",3)}}function L(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"p-tabPanel")(1,"div",39)(2,"button",40),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).allproduct()}),t._uU(3," Ver todos "),t.qZA()(),t.YNc(4,B,2,1,"ng-template",41),t.YNc(5,E,1,4,"app-product-list",42),t.qZA()}if(2&i){const e=a.$implicit;t.xp6(5),t.Q6J("ngIf","Informaci\xf3n"!==e.title)}}const Q=function(i){return{"background-image":i}};function D(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"div",5)(1,"div",6)(2,"div",7)(3,"div",8)(4,"div")(5,"div",9),t._uU(6),t.qZA(),t.TgZ(7,"div",10)(8,"div"),t._UZ(9,"div",11),t.qZA(),t.TgZ(10,"div",12)(11,"div",13),t.YNc(12,Y,1,0,"img",14),t.YNc(13,J,1,0,"img",15),t.TgZ(14,"span",16),t._uU(15),t.qZA()(),t.TgZ(16,"div",10)(17,"a",17),t._UZ(18,"fa-icon",18),t.qZA(),t.TgZ(19,"a",19),t.ALo(20,"whatsapp"),t._UZ(21,"fa-icon",20),t.qZA(),t.TgZ(22,"fa-icon",21),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return n.shared(n.profileProvider.comercialName,n.profileProvider.comercialName)}),t.qZA()(),t.TgZ(23,"div",22),t.YNc(24,N,2,0,"button",23),t.YNc(25,O,2,1,"button",24),t.qZA()()(),t.TgZ(26,"div",25)(27,"div",26),t._uU(28),t.qZA(),t.TgZ(29,"div",27)(30,"label",28),t._uU(31),t.qZA(),t.YNc(32,j,2,1,"label",29),t.qZA()()()(),t.TgZ(33,"div",30)(34,"p-tabView",31),t.YNc(35,L,6,1,"p-tabPanel",32),t.qZA()()()()()}if(2&i){const e=t.oxw();t.xp6(6),t.Oqu(e.profileProvider.comercialName),t.xp6(3),t.Q6J("ngStyle",t.VKq(20,Q,"url("+e.profileProvider.image+")")),t.xp6(3),t.Q6J("ngIf",e.aperture(e.profileProvider.openTime,e.profileProvider.closeTime)),t.xp6(1),t.Q6J("ngIf",!e.aperture(e.profileProvider.openTime,e.profileProvider.closeTime)),t.xp6(2),t.AsE("",e.profileProvider.openTime," - ",e.profileProvider.closeTime,""),t.xp6(2),t.MGl("href","tel:",e.profileProvider.phone,"",t.LSH),t.xp6(1),t.Q6J("icon",e.faPhone),t.xp6(1),t.hYB("href","https://wa.me/",t.lcZ(20,18,e.profileProvider.whatsapp),"?text=Hola! ",e.profileProvider.comercialName,"",t.LSH),t.xp6(2),t.Q6J("icon",e.faWhatsapp),t.xp6(1),t.Q6J("icon",e.faShare),t.xp6(2),t.Q6J("ngIf",!e.isFavorite(e.profileProvider._id)),t.xp6(1),t.Q6J("ngIf",e.isFavorite(e.profileProvider._id)),t.xp6(3),t.hij(" ",e.profileProvider.addressText,", "),t.xp6(3),t.Oqu(e.profileProvider.distrinctName),t.xp6(1),t.Q6J("ngIf",e.profileProvider.distance),t.xp6(3),t.Q6J("ngForOf",e.tabs)}}const H=[{path:"productos/0/des/1",loadChildren:()=>o.e(68).then(o.bind(o,6068)).then(i=>i.AllProductsModule)},{path:"informacion/0/des/1",loadChildren:()=>o.e(343).then(o.bind(o,8343)).then(i=>i.InformationProductsModule)},{path:"",component:(()=>{class i{constructor(e,r,n,v,h,u,g,x,C,b,G){this.route=e,this.generalService=r,this.profileProviderService=n,this.authService=v,this.productService=h,this.offersService=u,this.favoriteService=g,this.messageService=x,this.confirmationService=C,this.router=b,this._location=G,this.faWhatsapp=d.VHX,this.faPhone=s.j1w,this.tabs=[],this.faShare=s.zBy,this.faStar=s.Tab,this.faArrowLeft=s.acZ,this.companyUrl=this.route.snapshot.paramMap.get("id")}ngOnInit(){this.getUrlData(),this.getFavorites()}getUrlData(){this.profileProviderService.getUrlByUrl(this.companyUrl).subscribe(e=>{var r;this.getProfileProvider(null===(r=null==e?void 0:e.data[0])||void 0===r?void 0:r.profileProviderId)})}getProfileProvider(e){this.profileProviderService.getById(e).subscribe(r=>{this.profileProvider=r.data,this.getCurrentPosition(),this.getProducts()})}getProducts(){this.productService.getByProfileProviderId(this.profileProvider._id).subscribe(e=>{this.products=e.data,this.getOffers()})}getOffers(){this.offersService.getByProfileProviderId(this.profileProvider._id).subscribe(e=>{this.offers=e.data,this.formatTabs()})}formatTabs(){let e=[...this.products.filter(r=>r.isFeatured)];this.products.length>0&&(this.tabs=[...this.tabs,{title:"Productos",data:this.products}]),e.length>0&&(this.tabs=[...this.tabs,{title:"Destacados",data:e}]),this.offers.length>0&&(this.tabs=[...this.tabs,{title:"Ofertas",data:this.offers}])}addfavorites(){this.authService.getRole()||(this.eventHeader={event:"open-login"})}getFavorites(){this.role=this.authService.getRole(),this.role&&this.favoriteService.getByClientId(this.authService.getUserID()).subscribe(e=>{this.favorites=e.data})}isFavorite(e){if(this.favorites){let r=!1;return this.favorites.map(n=>{n.profileProviderId===e&&(r=!0)}),r}}deleteFavorites(e){let r;this.favorites.map(n=>{n.profileProviderId===e&&(r=n._id)}),r&&this.favoriteService.delete(r).subscribe(n=>{this.messageService.add({detail:n.message,summary:"\xc9xito",severity:"success"}),this.getFavorites()},n=>{this.messageService.add({detail:n.error,summary:"Error",severity:"error"})})}confirmDeleteFavorites(e){this.confirmationService.confirm({message:"\xbfSeguro que desea eliminar de favoritos?",acceptLabel:"Si",rejectLabel:"No",header:"Confirmaci\xf3n",accept:()=>{this.deleteFavorites(e)}})}allproduct(){this.router.navigate([this.profileProvider.comercialName.toLowerCase().replace(" ","-")+"/productos/0/des/1"])}information(){this.router.navigate([this.profileProvider.comercialName.toLowerCase().replace(" ","-")+"/informacion/0/des/1"])}aperture(e,r){let n=l().format("YYYY-MM-DD"),v=n+" "+e,h=n+" "+r;return l().isBetween(v,h)}shared(e,r){const n=`https://vaoperu.com/${e}`.replace(" ","-");window.navigator.share({url:n,title:`Vao Per\xfa - ${r}`})}rad(e){return e*Math.PI/180}getKilometros(e,r,n,v){var u=this.rad(n-e),g=this.rad(v-r),x=Math.sin(u/2)*Math.sin(u/2)+Math.cos(this.rad(e))*Math.cos(this.rad(n))*Math.sin(g/2)*Math.sin(g/2);return(2*Math.atan2(Math.sqrt(x),Math.sqrt(1-x))*6378.137).toFixed(1)}getCurrentPosition(){return(0,p.mG)(this,void 0,void 0,function*(){const e=yield this.generalService.getPosition();e&&(this.profileProvider.distance=this.profileProvider.lat&&this.profileProvider.lng?parseFloat(this.getKilometros(this.profileProvider.lat,this.profileProvider.lng,e.lat,e.lng)):1e6)})}back(){this._location.back()}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(f.gz),t.Y36(T.m),t.Y36(Z.n),t.Y36(S.e),t.Y36(M.M),t.Y36(I.K),t.Y36(F.e),t.Y36(P.ez),t.Y36(P.YP),t.Y36(f.F0),t.Y36(c.Ye))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-view-company"]],decls:6,vars:3,consts:[[3,"eventHeader"],[1,"w-100","mt-2","mb-3","px-3","d-flex","justify-content-start"],[1,"mt-4","bg-transparent","px-2","f-14","font-500","border-0","d-flex","align-items-center","justify-content-center","rounded-pill","text-color5",3,"click"],[1,"f-14","icon-search","mr-2","text-color5",3,"icon"],["class","container-fluid mt-4 p-0",4,"ngIf"],[1,"container-fluid","mt-4","p-0"],[1,"d-flex","m-0","p-0","justify-content-center"],[1,"px-3"],[1,"d-flex","justify-content-sm-center"],[1,"mb-1","f-14","bold","font-600","mt-xl-0","mb-2"],[1,"d-flex"],[1,"image","image-profile",3,"ngStyle"],[1,"ml-4"],[1,"d-flex","align-items-center","my-2"],["width","23","src","assets/img/icons/open.svg","alt","Abierto",4,"ngIf"],["width","23","src","assets/img/icons/close.svg","alt","Cerrado",4,"ngIf"],[1,"ml-2","f-9","text-color5","font-500"],["target","_blank","title","Llamar",1,"link-unstyled","p-1","bg-color2","rounded-circle","icon","d-flex","justify-content-center","align-items-center",3,"href"],[1,"f-14","text-white","fa-rotate-90",3,"icon"],["title","Whatsapp",1,"ml-2","p-1","bg-color1","rounded-circle","icon","d-flex","justify-content-center","align-items-center",3,"href"],[1,"f-16","text-white",3,"icon"],[1,"ml-2","cursor","f-16","text-color2","mr-2",3,"icon","click"],[1,"mt-2","mt-sm-4"],["class","cursor bg-color1 border-0 rounded-lg py-2 px-4 px-sm-5 text-white f-7 font-500",3,"click",4,"ngIf"],["class","cursor pl-2 pr-2 bg-color2 border-0 p-1 rounded-pill f-9 font-500",3,"click",4,"ngIf"],[1,"mt-2","d-flex","col","m-0","p-0","flex-column","justify-content-center","align-items-start"],[1,"f-9","d-flex","justify-content-center","align-items-center"],[1,"w-100","m-0","d-flex","align-items-center","justify-content-between"],[1,"f-9","m-0"],["class","bold text-color1 m-0 pl-2",4,"ngIf"],[1,"w-100","m-0","p-0","mt-2"],["styleClass","tabview-custom"],[4,"ngFor","ngForOf"],["width","23","src","assets/img/icons/open.svg","alt","Abierto"],["width","23","src","assets/img/icons/close.svg","alt","Cerrado"],[1,"cursor","bg-color1","border-0","rounded-lg","py-2","px-4","px-sm-5","text-white","f-7","font-500",3,"click"],[1,"cursor","pl-2","pr-2","bg-color2","border-0","p-1","rounded-pill","f-9","font-500",3,"click"],[1,"f-13",3,"icon"],[1,"bold","text-color1","m-0","pl-2"],[1,"w-100","px-3","d-flex","justify-content-end","pr-4"],[1,"mt-4","bg-transparent","f-14","border-0","p-0","text-color5",3,"click"],["pTemplate","header","headerStyleClass","w-100"],[3,"type","profileProviderId","items","rows",4,"ngIf"],[1,"f-10","font-500","font-300"],[3,"type","profileProviderId","items","rows"]],template:function(e,r){1&e&&(t._UZ(0,"app-header",0),t.TgZ(1,"div",1)(2,"button",2),t.NdJ("click",function(){return r.back()}),t._UZ(3,"fa-icon",3),t._uU(4," Atr\xe1s "),t.qZA()(),t.YNc(5,D,36,22,"div",4)),2&e&&(t.Q6J("eventHeader",r.eventHeader),t.xp6(3),t.Q6J("icon",r.faArrowLeft),t.xp6(2),t.Q6J("ngIf",r.profileProvider))},directives:[A.G,_.BN,c.O5,c.PC,y.xf,c.sg,y.x4,P.jx,V.X],pipes:[U.T],styles:[".image-profile[_ngcontent-%COMP%]{min-width:240px;max-width:240px;min-height:240px;max-height:240px}@media (max-width: 520px){.image-profile[_ngcontent-%COMP%]{min-width:160px;max-width:160px;min-height:160px;max-height:160px}}.icon[_ngcontent-%COMP%]{cursor:pointer;min-width:30px;min-height:30px;max-width:30px;max-height:30px}.parraf[_ngcontent-%COMP%]{max-width:200px}"]}),i})()}];let $=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[f.Bz.forChild(H)],f.Bz]}),i})();var R=o(9886),W=o(8078),z=o(8478);let K=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[c.ez,$,R.O,W.k,_.uH,y.LU,z.f]]}),i})()},3349:(w,m,o)=>{o.d(m,{T:()=>f});var c=o(5e3);let f=(()=>{class p{transform(s,...l){return 9===s.length?`51${s}`:12===s.length?s.substring(1):s}}return p.\u0275fac=function(s){return new(s||p)},p.\u0275pipe=c.Yjl({name:"whatsapp",type:p,pure:!0}),p})()},8157:(w,m,o)=>{o.d(m,{e:()=>p});var c=o(5e3),f=o(5830);let p=(()=>{class d{constructor(l){this.api=l,this.model="favorite"}save(l){return this.api.api({service:`save-${this.model}`,type:"post",data:l})}getByClientId(l){return this.api.api({service:`get-${this.model}-by-client-id/${l}`,type:"get",data:null})}delete(l){return this.api.api({service:`delete-${this.model}/${l}`,type:"delete",data:null})}}return d.\u0275fac=function(l){return new(l||d)(c.LFG(f.s))},d.\u0275prov=c.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})()}}]);