"use strict";(self.webpackChunkfront=self.webpackChunkfront||[]).push([[149],{149:(w,v,r)=>{r.r(v),r.d(v,{ViewCompanyModule:()=>G});var d=r(9808),f=r(9812),p=r(655),c=r(5767),a=r(801),l=r(5439),t=r(5e3),_=r(1864),Z=r(1724),S=r(2542),I=r(319),M=r(9062),A=r(8157),P=r(9783),F=r(5519),T=r(3561),y=r(3725),V=r(3957),U=r(3349);function Y(i,s){if(1&i){const e=t.EpF();t.TgZ(0,"button",4),t.NdJ("click",function(){return t.CHM(e),t.oxw().back()}),t._UZ(1,"fa-icon",5),t._uU(2," Atr\xe1s "),t.qZA()}if(2&i){const e=t.oxw();t.xp6(1),t.Q6J("icon",e.faArrowLeft)}}function J(i,s){1&i&&t._UZ(0,"img",35)}function O(i,s){1&i&&t._UZ(0,"img",36)}function N(i,s){if(1&i){const e=t.EpF();t.TgZ(0,"button",37),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).information()}),t._uU(1,"Informaci\xf3n"),t.qZA()}}function j(i,s){if(1&i){const e=t.EpF();t.TgZ(0,"button",38),t.NdJ("click",function(){t.CHM(e);const n=t.oxw(2);return n.confirmDeleteFavorites(n.profileProvider._id)}),t._UZ(1,"fa-icon",39),t.qZA()}if(2&i){const e=t.oxw(2);t.xp6(1),t.Q6J("icon",e.faStar)}}function B(i,s){if(1&i&&(t.TgZ(0,"label",40),t._uU(1),t.qZA()),2&i){const e=t.oxw(2);t.xp6(1),t.hij("",e.profileProvider.distance," km")}}function E(i,s){if(1&i&&(t.TgZ(0,"span",44),t._uU(1),t.qZA()),2&i){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.title)}}function L(i,s){if(1&i&&t._UZ(0,"app-product-list",45),2&i){const e=t.oxw().$implicit,o=t.oxw(2);t.Q6J("type",e.title)("profileProviderId",o.profileProvider._id)("items",e.data)("rows",3)("url",o.url)}}function Q(i,s){if(1&i&&(t.TgZ(0,"p-tabPanel"),t._UZ(1,"div",41),t.YNc(2,E,2,1,"ng-template",42),t.YNc(3,L,1,5,"app-product-list",43),t.qZA()),2&i){const e=s.$implicit;t.xp6(3),t.Q6J("ngIf","Informaci\xf3n"!==e.title)}}const D=function(i){return{"background-image":i}};function H(i,s){if(1&i){const e=t.EpF();t.TgZ(0,"div",6)(1,"div",7)(2,"div",8)(3,"div",9)(4,"div")(5,"div",10),t._uU(6),t.qZA(),t.TgZ(7,"div",11)(8,"div"),t._UZ(9,"div",12),t.qZA(),t.TgZ(10,"div",13)(11,"p",14),t._uU(12),t.qZA(),t.TgZ(13,"div",15),t.YNc(14,J,1,0,"img",16),t.YNc(15,O,1,0,"img",17),t.TgZ(16,"span",18),t._uU(17),t.qZA()(),t.TgZ(18,"div",11)(19,"a",19),t._UZ(20,"fa-icon",20),t.qZA(),t.TgZ(21,"a",21),t.ALo(22,"whatsapp"),t._UZ(23,"fa-icon",22),t.qZA(),t.TgZ(24,"fa-icon",23),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return n.shared(n.profileProvider.comercialName,n.profileProvider.comercialName)}),t.qZA()(),t.TgZ(25,"div",24),t.YNc(26,N,2,0,"button",25),t.YNc(27,j,2,1,"button",26),t.qZA()()(),t.TgZ(28,"div",27)(29,"div",28),t._uU(30),t.qZA(),t.TgZ(31,"div",29)(32,"label",30),t._uU(33),t.qZA(),t.YNc(34,B,2,1,"label",31),t.qZA()()()(),t.TgZ(35,"div",32)(36,"p-tabView",33),t.YNc(37,Q,4,1,"p-tabPanel",34),t.qZA()()()()()}if(2&i){const e=t.oxw();t.xp6(6),t.Oqu(e.profileProvider.comercialName),t.xp6(3),t.Q6J("ngStyle",t.VKq(21,D,"url("+e.profileProvider.image+")")),t.xp6(3),t.hij(" ",e.profileProvider.description," "),t.xp6(2),t.Q6J("ngIf",e.aperture(e.profileProvider.openTime,e.profileProvider.closeTime)),t.xp6(1),t.Q6J("ngIf",!e.aperture(e.profileProvider.openTime,e.profileProvider.closeTime)),t.xp6(2),t.AsE("",e.profileProvider.openTime," - ",e.profileProvider.closeTime,""),t.xp6(2),t.MGl("href","tel:",e.profileProvider.phone,"",t.LSH),t.xp6(1),t.Q6J("icon",e.faPhone),t.xp6(1),t.hYB("href","https://wa.me/",t.lcZ(22,19,e.profileProvider.whatsapp),"?text=Hola! ",e.profileProvider.comercialName,"",t.LSH),t.xp6(2),t.Q6J("icon",e.faWhatsapp),t.xp6(1),t.Q6J("icon",e.faShare),t.xp6(2),t.Q6J("ngIf",!e.isFavorite(e.profileProvider._id)),t.xp6(1),t.Q6J("ngIf",e.isFavorite(e.profileProvider._id)),t.xp6(3),t.hij(" ",e.profileProvider.addressText,", "),t.xp6(3),t.Oqu(e.profileProvider.distrinctName),t.xp6(1),t.Q6J("ngIf",e.profileProvider.distance),t.xp6(3),t.Q6J("ngForOf",e.tabs)}}const $=[{path:"productos/0/des/1",loadChildren:()=>r.e(68).then(r.bind(r,6068)).then(i=>i.AllProductsModule)},{path:"informacion/0/des/1",loadChildren:()=>r.e(343).then(r.bind(r,8343)).then(i=>i.InformationProductsModule)},{path:"",component:(()=>{class i{constructor(e,o,n,m,h,u,g,x,C,b){this.route=e,this.generalService=o,this.profileProviderService=n,this.authService=m,this.productService=h,this.offersService=u,this.favoriteService=g,this.messageService=x,this.confirmationService=C,this.router=b,this.faWhatsapp=c.VHX,this.faPhone=a.j1w,this.tabs=[],this.faShare=a.zBy,this.faStar=a.Tab,this.faArrowLeft=a.acZ,this.companyUrl=this.route.snapshot.paramMap.get("id")}ngOnInit(){this.getUrlData(),this.getFavorites()}getUrlData(){this.profileProviderService.getUrlByUrl(this.companyUrl).subscribe(e=>{var o,n;this.url=e.data[0],(null===(o=null==e?void 0:e.data[0])||void 0===o?void 0:o.profileProviderId)?this.getProfileProvider(null===(n=null==e?void 0:e.data[0])||void 0===n?void 0:n.profileProviderId):this.router.navigate(["/404"])})}getProfileProvider(e){this.profileProviderService.getById(e).subscribe(o=>{this.profileProvider=o.data,this.getCurrentPosition(),this.getProducts()})}getProducts(){this.productService.getByProfileProviderId(this.profileProvider._id).subscribe(e=>{this.products=e.data,this.productsTmp=e.data,this.getOffers()})}getOffers(){this.offersService.getByProfileProviderId(this.profileProvider._id).subscribe(e=>{this.offers=e.data,this.formatTabs()})}formatTabs(){this.tabs=[];let e=[...this.products.filter(o=>o.isFeatured)];this.products.length>0&&(this.tabs=[...this.tabs,{title:"Productos",data:this.products}]),e.length>0&&(this.tabs=[...this.tabs,{title:"Destacados",data:e}]),this.offers.length>0&&(this.tabs=[...this.tabs,{title:"Ofertas",data:this.offers}])}addfavorites(){this.authService.getRole()||(this.eventHeader={event:"open-login"})}getFavorites(){this.role=this.authService.getRole(),this.role&&this.favoriteService.getByClientId(this.authService.getUserID()).subscribe(e=>{this.favorites=e.data})}isFavorite(e){if(this.favorites){let o=!1;return this.favorites.map(n=>{n.profileProviderId===e&&(o=!0)}),o}}deleteFavorites(e){let o;this.favorites.map(n=>{n.profileProviderId===e&&(o=n._id)}),o&&this.favoriteService.delete(o).subscribe(n=>{this.messageService.add({detail:n.message,summary:"\xc9xito",severity:"success"}),this.getFavorites()},n=>{this.messageService.add({detail:n.error,summary:"Error",severity:"error"})})}confirmDeleteFavorites(e){this.confirmationService.confirm({message:"\xbfSeguro que desea eliminar de favoritos?",acceptLabel:"Si",rejectLabel:"No",header:"Confirmaci\xf3n",accept:()=>{this.deleteFavorites(e)}})}allproduct(){this.router.navigate([this.url.url+"/productos/0/des/1"])}information(){this.router.navigate([this.url.url+"/informacion/0/des/1"])}aperture(e,o){let n=l().format("YYYY-MM-DD"),m=n+" "+e,h=n+" "+o;return l().isBetween(m,h)}shared(e,o){const n=`https://vaoperu.com/${this.url.url}`.replace(" ","-");window.navigator.share({url:n,title:`${o}`,text:`${o}`})}rad(e){return e*Math.PI/180}eventSearch(e){this.products=e?[...this.productsTmp.filter(o=>o.name.toLowerCase().indexOf(e.toLowerCase())>-1)]:[...this.productsTmp],this.formatTabs()}getKilometros(e,o,n,m){var u=this.rad(n-e),g=this.rad(m-o),x=Math.sin(u/2)*Math.sin(u/2)+Math.cos(this.rad(e))*Math.cos(this.rad(n))*Math.sin(g/2)*Math.sin(g/2);return(2*Math.atan2(Math.sqrt(x),Math.sqrt(1-x))*6378.137).toFixed(1)}getCurrentPosition(){return(0,p.mG)(this,void 0,void 0,function*(){const e=yield this.generalService.getPosition();e&&(this.profileProvider.distance=this.profileProvider.lat&&this.profileProvider.lng?parseFloat(this.getKilometros(this.profileProvider.lat,this.profileProvider.lng,e.lat,e.lng)):1e6)})}back(){console.log("back"),this.router.url.indexOf("0/des/1")>-1?this.router.navigate([this.url.url]):this.router.navigate(["/"])}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(f.gz),t.Y36(_.m),t.Y36(Z.n),t.Y36(S.e),t.Y36(I.M),t.Y36(M.K),t.Y36(A.e),t.Y36(P.ez),t.Y36(P.YP),t.Y36(f.F0))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-view-company"]],decls:4,vars:3,consts:[[3,"eventHeader","eventSearch"],[1,"w-100","mt-2","mb-3","px-3","d-flex","justify-content-start"],["class","mt-4 bg-transparent px-2 f-14 font-500 border-0 d-flex align-items-center justify-content-center rounded-pill text-color5",3,"click",4,"ngIf"],["class","container-fluid mt-4 p-0",4,"ngIf"],[1,"mt-4","bg-transparent","px-2","f-14","font-500","border-0","d-flex","align-items-center","justify-content-center","rounded-pill","text-color5",3,"click"],[1,"f-14","icon-search","mr-2","text-color5",3,"icon"],[1,"container-fluid","mt-4","p-0"],[1,"d-flex","m-0","p-0","justify-content-center"],[1,"px-3"],[1,"d-flex","justify-content-sm-center"],[1,"mb-1","f-14","bold","font-600","mt-xl-0","mb-2"],[1,"d-flex"],[1,"image","image-profile",3,"ngStyle"],[1,"ml-4"],[1,"d-none","d-md-block","text-left","text-break","parraf","mt-0","f-9","text-capitalize"],[1,"d-flex","align-items-center","my-2"],["width","23","src","assets/img/icons/open.svg","alt","Abierto",4,"ngIf"],["width","23","src","assets/img/icons/close.svg","alt","Cerrado",4,"ngIf"],[1,"ml-2","f-9","text-color5","font-500"],["target","_blank","title","Llamar",1,"link-unstyled","p-1","bg-color2","rounded-circle","icon","d-flex","justify-content-center","align-items-center",3,"href"],[1,"f-14","text-white","fa-rotate-90",3,"icon"],["title","Whatsapp",1,"ml-2","p-1","bg-color1","rounded-circle","icon","d-flex","justify-content-center","align-items-center",3,"href"],[1,"f-16","text-white",3,"icon"],[1,"ml-2","cursor","f-16","text-color2","mr-2",3,"icon","click"],[1,"mt-2","mt-sm-4"],["class","cursor bg-color1 border-0 rounded-lg py-2 px-4 px-sm-5 text-white f-7 font-500",3,"click",4,"ngIf"],["class","cursor pl-2 pr-2 bg-color2 border-0 p-1 rounded-pill f-9 font-500",3,"click",4,"ngIf"],[1,"mt-2","d-flex","col","m-0","p-0","flex-column","justify-content-center","align-items-start"],[1,"f-9","d-flex","justify-content-center","align-items-center","text-capitalize"],[1,"w-100","m-0","d-flex","align-items-center","justify-content-between"],[1,"f-9","m-0","text-capitalize"],["class","bold text-color1 m-0 pl-2",4,"ngIf"],[1,"w-100","m-0","p-0","mt-2"],["styleClass","tabview-custom"],[4,"ngFor","ngForOf"],["width","23","src","assets/img/icons/open.svg","alt","Abierto"],["width","23","src","assets/img/icons/close.svg","alt","Cerrado"],[1,"cursor","bg-color1","border-0","rounded-lg","py-2","px-4","px-sm-5","text-white","f-7","font-500",3,"click"],[1,"cursor","pl-2","pr-2","bg-color2","border-0","p-1","rounded-pill","f-9","font-500",3,"click"],[1,"f-13",3,"icon"],[1,"bold","text-color1","m-0","pl-2"],[1,"w-100","px-3","d-flex","justify-content-end","pr-4"],["pTemplate","header","headerStyleClass","w-100"],[3,"type","profileProviderId","items","rows","url",4,"ngIf"],[1,"f-10","font-500","font-300"],[3,"type","profileProviderId","items","rows","url"]],template:function(e,o){1&e&&(t.TgZ(0,"app-header",0),t.NdJ("eventSearch",function(m){return o.eventSearch(m)}),t.qZA(),t.TgZ(1,"div",1),t.YNc(2,Y,3,1,"button",2),t.qZA(),t.YNc(3,H,38,23,"div",3)),2&e&&(t.Q6J("eventHeader",o.eventHeader),t.xp6(2),t.Q6J("ngIf",!(null!=o.url&&o.url.isIndividual)),t.xp6(1),t.Q6J("ngIf",o.profileProvider))},directives:[F.G,d.O5,T.BN,d.PC,y.xf,d.sg,y.x4,P.jx,V.X],pipes:[U.T],styles:[".image-profile[_ngcontent-%COMP%]{min-width:240px;max-width:240px;min-height:240px;max-height:240px}@media (max-width: 520px){.image-profile[_ngcontent-%COMP%]{min-width:160px;max-width:160px;min-height:160px;max-height:160px}}.icon[_ngcontent-%COMP%]{cursor:pointer;min-width:35px;min-height:35px;max-width:35px;max-height:35px}.parraf[_ngcontent-%COMP%]{max-width:200px}"]}),i})()}];let z=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[f.Bz.forChild($)],f.Bz]}),i})();var R=r(9886),W=r(8078),K=r(8478);let G=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[d.ez,z,R.O,W.k,T.uH,y.LU,K.f]]}),i})()},3349:(w,v,r)=>{r.d(v,{T:()=>f});var d=r(5e3);let f=(()=>{class p{transform(a,...l){return 9===(null==a?void 0:a.length)?`51${a}`:12===(null==a?void 0:a.length)?a.substring(1):a}}return p.\u0275fac=function(a){return new(a||p)},p.\u0275pipe=d.Yjl({name:"whatsapp",type:p,pure:!0}),p})()},8157:(w,v,r)=>{r.d(v,{e:()=>p});var d=r(5e3),f=r(5830);let p=(()=>{class c{constructor(l){this.api=l,this.model="favorite"}save(l){return this.api.api({service:`save-${this.model}`,type:"post",data:l})}getByClientId(l){return this.api.api({service:`get-${this.model}-by-client-id/${l}`,type:"get",data:null})}delete(l){return this.api.api({service:`delete-${this.model}/${l}`,type:"delete",data:null})}}return c.\u0275fac=function(l){return new(l||c)(d.LFG(f.s))},c.\u0275prov=d.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()}}]);