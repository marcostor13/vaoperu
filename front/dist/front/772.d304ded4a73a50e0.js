"use strict";(self.webpackChunkfront=self.webpackChunkfront||[]).push([[772],{8772:(u,m,r)=>{r.r(m),r.d(m,{ViewCompanyModule:()=>E});var l=r(9808),d=r(9812),f=r(5767),s=r(801),e=r(5e3),p=r(1864),c=r(1724),P=r(2542),x=r(319),y=r(9062),_=r(8157),v=r(9783),w=r(5519),g=r(3561),h=r(3725),C=r(3957);const F=["map"];function b(i,a){if(1&i&&(e.TgZ(0,"div",5),e._UZ(1,"div",6),e.TgZ(2,"div",7)(3,"h6",8),e._uU(4),e.qZA(),e.TgZ(5,"p",9),e._uU(6),e.qZA()()()),2&i){const t=a.$implicit,o=e.oxw(2);e.xp6(4),e.Oqu(o.format(t.key)),e.xp6(2),e.Oqu(t.value)}}function Z(i,a){if(1&i&&(e.TgZ(0,"div",1)(1,"div"),e.YNc(2,b,7,2,"div",2),e.qZA(),e._UZ(3,"div",3,4),e.qZA()),2&i){const t=e.oxw();e.xp6(2),e.Q6J("ngForOf",t.profileProviderFormat)}}let T=(()=>{class i{constructor(){this.profileProviderFormat=[]}ngOnInit(){console.log("profileProvider",this.profileProvider),this.formatData()}ngAfterViewInit(){this.initMap()}formatData(){this.profileProvider.comercialName&&(this.profileProviderFormat=[...this.profileProviderFormat,{key:"Nombre comercial",value:this.profileProvider.comercialName}]),this.profileProvider.legalName&&(this.profileProviderFormat=[...this.profileProviderFormat,{key:"Raz\xf3n social",value:this.profileProvider.legalName}]),this.profileProvider.ruc&&(this.profileProviderFormat=[...this.profileProviderFormat,{key:"Ruc",value:this.profileProvider.ruc}]),this.profileProvider.whatsapp&&(this.profileProviderFormat=[...this.profileProviderFormat,{key:"Whatsapp",value:this.profileProvider.whatsapp}]),this.profileProvider.phone&&(this.profileProviderFormat=[...this.profileProviderFormat,{key:"Tel\xe9fono",value:this.profileProvider.phone}]),this.profileProvider.addressText&&(this.profileProviderFormat=[...this.profileProviderFormat,{key:"Direci\xf3n",value:this.profileProvider.addressText}]),this.profileProvider.facebook&&(this.profileProviderFormat=[...this.profileProviderFormat,{key:"Facebook",value:this.profileProvider.facebook}]),this.profileProvider.twitter&&(this.profileProviderFormat=[...this.profileProviderFormat,{key:"Twitter",value:this.profileProvider.twitter}]),this.profileProvider.instagram&&(this.profileProviderFormat=[...this.profileProviderFormat,{key:"Instagram",value:this.profileProvider.instagram}]),this.profileProvider.tiktok&&(this.profileProviderFormat=[...this.profileProviderFormat,{key:"Tiktok",value:this.profileProvider.tiktok}]),this.profileProvider.email&&(this.profileProviderFormat=[...this.profileProviderFormat,{key:"Correo",value:this.profileProvider.email}]),this.profileProvider.distrinctName&&(this.profileProviderFormat=[...this.profileProviderFormat,{key:"Distrito",value:this.profileProvider.distrinctName}]),this.profileProvider.siteWeb&&(this.profileProviderFormat=[...this.profileProviderFormat,{key:"Sitio Web",value:this.profileProvider.siteWeb}])}format(t){return t.replace("-","").replace("-","").replace("-","").replace("-","")}initMap(){const t={lat:this.profileProvider.lat,lng:this.profileProvider.lng},o=new google.maps.Map(this.el.nativeElement,{center:t,zoom:14});new google.maps.Marker({position:t,map:o,title:this.profileProvider.comercialName})}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-information"]],viewQuery:function(t,o){if(1&t&&e.Gf(F,5),2&t){let n;e.iGM(n=e.CRH())&&(o.el=n.first)}},inputs:{profileProvider:"profileProvider"},decls:1,vars:1,consts:[["class","d-flex flex-wrap",4,"ngIf"],[1,"d-flex","flex-wrap"],["class","d-flex mt-2",4,"ngFor","ngForOf"],["id","map",1,"ml-0","ml-md-5","mt-4","mt-md-0"],["map",""],[1,"d-flex","mt-2"],[1,"line","bg-color1"],[1,"d-flex","flex-column","justify-content-center","ml-2"],[1,"text-capitalize","bold"],[1,"text-value"]],template:function(t,o){1&t&&e.YNc(0,Z,5,1,"div",0),2&t&&e.Q6J("ngIf",o.profileProviderFormat)},directives:[l.O5,l.sg],styles:[".line[_ngcontent-%COMP%]{min-height:74px;min-width:8px;border:0}#map[_ngcontent-%COMP%]{height:400px;width:400px}"]}),i})();var I=r(3349);function S(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"button",27),e.NdJ("click",function(){return e.CHM(t),e.oxw(2).addfavorites()}),e._uU(1,"Informaci\xf3n"),e.qZA()}}function M(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"button",28),e.NdJ("click",function(){e.CHM(t);const n=e.oxw(2);return n.confirmDeleteFavorites(n.profileProvider._id)}),e._UZ(1,"fa-icon",29),e.qZA()}if(2&i){const t=e.oxw(2);e.xp6(1),e.Q6J("icon",t.faStar)}}function O(i,a){if(1&i&&(e.TgZ(0,"span",33),e._uU(1),e.qZA()),2&i){const t=e.oxw().$implicit;e.xp6(1),e.Oqu(t.title)}}function U(i,a){if(1&i&&e._UZ(0,"app-product-list",26),2&i){const t=e.oxw().$implicit,o=e.oxw(2);e.Q6J("type",t.title)("profileProviderId",o.profileProvider._id)("items",t.data)("rows",3)}}function A(i,a){if(1&i&&e._UZ(0,"app-information",34),2&i){const t=e.oxw(3);e.Q6J("profileProvider",t.profileProvider)}}function V(i,a){if(1&i&&(e.TgZ(0,"p-tabPanel"),e.YNc(1,O,2,1,"ng-template",30),e.YNc(2,U,1,4,"app-product-list",31),e.YNc(3,A,1,1,"app-information",32),e.qZA()),2&i){const t=a.$implicit;e.xp6(2),e.Q6J("ngIf","Informaci\xf3n"!==t.title),e.xp6(1),e.Q6J("ngIf","Informaci\xf3n"===t.title)}}const N=function(i){return{"background-image":i}};function Y(i,a){if(1&i&&(e.TgZ(0,"div",5)(1,"div",6)(2,"div",7)(3,"div",8),e._UZ(4,"div",9),e.TgZ(5,"div",10)(6,"h1",11),e._uU(7),e.qZA(),e.TgZ(8,"p",12),e._uU(9),e.qZA(),e.TgZ(10,"div",13)(11,"a",14),e._UZ(12,"fa-icon",15),e.qZA(),e.TgZ(13,"a",16),e.ALo(14,"whatsapp"),e._UZ(15,"fa-icon",17),e.qZA()(),e.TgZ(16,"div",18),e.YNc(17,S,2,0,"button",19),e.YNc(18,M,2,1,"button",20),e.qZA()()()(),e.TgZ(19,"div",21)(20,"p-tabView",22),e.YNc(21,V,4,2,"p-tabPanel",23),e.qZA()()(),e.TgZ(22,"div",24)(23,"h3",25),e._uU(24,"Todos nuestros productos"),e.qZA(),e._UZ(25,"app-product-list",26),e.qZA()()),2&i){const t=e.oxw();e.xp6(4),e.Q6J("ngStyle",e.VKq(17,N,"url("+t.profileProvider.image+")")),e.xp6(3),e.Oqu(t.profileProvider.comercialName),e.xp6(2),e.Oqu(t.profileProvider.description),e.xp6(2),e.MGl("href","tel:",t.profileProvider.phone,"",e.LSH),e.xp6(1),e.Q6J("icon",t.faPhone),e.xp6(1),e.hYB("href","https://wa.me/",e.lcZ(14,15,t.profileProvider.whatsapp),"?text=Hola! ",t.profileProvider.comercialName,"",e.LSH),e.xp6(2),e.Q6J("icon",t.faWhatsapp),e.xp6(2),e.Q6J("ngIf",!t.isFavorite(t.profileProvider._id)),e.xp6(1),e.Q6J("ngIf",t.isFavorite(t.profileProvider._id)),e.xp6(3),e.Q6J("ngForOf",t.tabs),e.xp6(4),e.Q6J("type","Productos")("profileProviderId",t.profileProvider._id)("items",t.products)("rows",9)}}const J=[{path:"",component:(()=>{class i{constructor(t,o,n,L,j,H,W,z,R){this.route=t,this.generalService=o,this.profileProviderService=n,this.authService=L,this.productService=j,this.offersService=H,this.favoriteService=W,this.messageService=z,this.confirmationService=R,this.faWhatsapp=f.VHX,this.faPhone=s.j1w,this.tabs=[],this.faStar=s.Tab,this.faArrowLeft=s.acZ,this.companyUrl=this.route.snapshot.paramMap.get("id")}ngOnInit(){this.getUrlData(),this.getFavorites()}getUrlData(){this.profileProviderService.getUrlByUrl(this.companyUrl).subscribe(t=>{this.getProfileProvider(null==t?void 0:t.data[0].profileProviderId)})}getProfileProvider(t){this.profileProviderService.getById(t).subscribe(o=>{this.profileProvider=o.data,this.getProducts()})}getProducts(){this.productService.getByProfileProviderId(this.profileProvider._id).subscribe(t=>{this.products=t.data,this.getOffers()})}getOffers(){this.offersService.getByProfileProviderId(this.profileProvider._id).subscribe(t=>{this.offers=t.data,this.formatTabs()})}formatTabs(){let t=[...this.products.filter(o=>o.isFeatured)];t.length>0&&(this.tabs=[...this.tabs,{title:"Destacados",data:t}]),this.offers.length>0&&(this.tabs=[...this.tabs,{title:"Ofertas",data:this.offers}]),this.tabs=[...this.tabs,{title:"Informaci\xf3n",data:this.profileProvider}]}addfavorites(){this.authService.getRole()||(this.eventHeader={event:"open-login"})}getFavorites(){this.role=this.authService.getRole(),this.role&&this.favoriteService.getByClientId(this.authService.getUserID()).subscribe(t=>{this.favorites=t.data})}isFavorite(t){if(this.favorites){let o=!1;return this.favorites.map(n=>{n.profileProviderId===t&&(o=!0)}),o}}deleteFavorites(t){let o;this.favorites.map(n=>{n.profileProviderId===t&&(o=n._id)}),o&&this.favoriteService.delete(o).subscribe(n=>{this.messageService.add({detail:n.message,summary:"\xc9xito",severity:"success"}),this.getFavorites()},n=>{this.messageService.add({detail:n.error,summary:"Error",severity:"error"})})}confirmDeleteFavorites(t){this.confirmationService.confirm({message:"\xbfSeguro que desea eliminar de favoritos?",acceptLabel:"Si",rejectLabel:"No",header:"Confirmaci\xf3n",accept:()=>{this.deleteFavorites(t)}})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(d.gz),e.Y36(p.m),e.Y36(c.n),e.Y36(P.e),e.Y36(x.M),e.Y36(y.K),e.Y36(_.e),e.Y36(v.ez),e.Y36(v.YP))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-view-company"]],decls:6,vars:3,consts:[[3,"eventHeader"],[1,"w-100","mt-2","mb-3","px-3","d-flex","justify-content-start"],["routerLink","/",1,"mt-4","bg-transparent","px-2","f-14","font-500","border-0","d-flex","align-items-center","justify-content-center","rounded-pill","text-color5"],[1,"f-14","icon-search","mr-2","text-color5",3,"icon"],["class","container-fluid mt-4 p-0",4,"ngIf"],[1,"container-fluid","mt-4","p-0"],[1,"row","m-0","p-0","justify-content-center"],[1,"cont","d-flex","justify-content-sm-center","px-3"],[1,"d-flex","container-profile"],[1,"image","image-profile",3,"ngStyle"],[1,"ml-4","my-auto"],[1,"h3","mt-xl-0","text-left"],[1,"mt-2"],[1,"d-flex"],["target","_blank","title","Llamar",1,"link-unstyled","p-3","p-sm-4","bg-color2","rounded-circle","icon","d-flex","justify-content-center","align-items-center",3,"href"],[1,"f-16","text-white","fa-rotate-90",3,"icon"],["title","Whatsapp",1,"ml-2","p-3","p-sm-4","bg-color1","rounded-circle","icon","d-flex","justify-content-center","align-items-center",3,"href"],[1,"f-22","text-white",3,"icon"],[1,"mt-3","mt-sm-4"],["class","cursor bg-color1 border-0 py-3 px-4 px-sm-5 text-white f-9 font-500",3,"click",4,"ngIf"],["class","cursor pl-2 pr-2 bg-color2 border-0 p-1 rounded-pill f-9 font-500",3,"click",4,"ngIf"],[1,"w-100","m-0","p-0","mt-5"],["styleClass","tabview-custom"],[4,"ngFor","ngForOf"],[1,"row"],[1,"text-center","mt-5","w-100","px-3","text-color1"],[3,"type","profileProviderId","items","rows"],[1,"cursor","bg-color1","border-0","py-3","px-4","px-sm-5","text-white","f-9","font-500",3,"click"],[1,"cursor","pl-2","pr-2","bg-color2","border-0","p-1","rounded-pill","f-9","font-500",3,"click"],[1,"f-13",3,"icon"],["pTemplate","header"],[3,"type","profileProviderId","items","rows",4,"ngIf"],[3,"profileProvider",4,"ngIf"],[1,"f-12","font-300"],[3,"profileProvider"]],template:function(t,o){1&t&&(e._UZ(0,"app-header",0),e.TgZ(1,"div",1)(2,"button",2),e._UZ(3,"fa-icon",3),e._uU(4," Atr\xe1s "),e.qZA()(),e.YNc(5,Y,26,19,"div",4)),2&t&&(e.Q6J("eventHeader",o.eventHeader),e.xp6(3),e.Q6J("icon",o.faArrowLeft),e.xp6(2),e.Q6J("ngIf",o.profileProvider))},directives:[w.G,d.rH,g.BN,l.O5,l.PC,h.xf,l.sg,h.x4,v.jx,C.X,T],pipes:[I.T],styles:[".image-profile[_ngcontent-%COMP%]{min-width:250px;max-width:250px;min-height:250px;max-height:250px}@media (max-width: 520px){.image-profile[_ngcontent-%COMP%]{min-width:170px;max-width:170px;min-height:170px;max-height:170px}}.icon[_ngcontent-%COMP%]{cursor:pointer;min-width:32px;min-height:32px;max-width:32px;max-height:32px}@media (max-width: 520px){.f-16[_ngcontent-%COMP%]{font-size:14px}.f-22[_ngcontent-%COMP%]{font-size:18px}}@media (max-width: 1200px){.cont[_ngcontent-%COMP%]{min-width:100%}}"]}),i})()}];let k=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[d.Bz.forChild(J)],d.Bz]}),i})();var Q=r(9886),D=r(8078),B=r(8478);let E=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[l.ez,k,Q.O,D.k,g.uH,h.LU,B.f]]}),i})()},3349:(u,m,r)=>{r.d(m,{T:()=>d});var l=r(5e3);let d=(()=>{class f{transform(e,...p){return 9===e.length?`51${e}`:12===e.length?e.substring(1):e}}return f.\u0275fac=function(e){return new(e||f)},f.\u0275pipe=l.Yjl({name:"whatsapp",type:f,pure:!0}),f})()},8157:(u,m,r)=>{r.d(m,{e:()=>f});var l=r(5e3),d=r(5830);let f=(()=>{class s{constructor(p){this.api=p,this.model="favorite"}save(p){return this.api.api({service:`save-${this.model}`,type:"post",data:p})}getByClientId(p){return this.api.api({service:`get-${this.model}-by-client-id/${p}`,type:"get",data:null})}delete(p){return this.api.api({service:`delete-${this.model}/${p}`,type:"delete",data:null})}}return s.\u0275fac=function(p){return new(p||s)(l.LFG(d.s))},s.\u0275prov=l.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()}}]);