"use strict";(self.webpackChunkfront=self.webpackChunkfront||[]).push([[183],{7669:(x,g,r)=>{r.d(g,{i:()=>d});var f=r(5e3),t=r(5830);let d=(()=>{class c{constructor(a){this.api=a,this.model="url"}save(a){return this.api.api({service:a._id?`update-${this.model}/${a._id}`:`save-${this.model}`,type:a._id?"patch":"post",data:a})}get(){return this.api.api({service:`get-${this.model}`,type:"get",data:null})}delete(a){return this.api.api({service:`delete-${this.model}/${a}`,type:"delete",data:null})}updateAll(a){return this.api.api({service:`update-${this.model}-all`,type:"patch",data:a})}}return c.\u0275fac=function(a){return new(a||c)(f.LFG(t.s))},c.\u0275prov=f.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()},3183:(x,g,r)=>{r.d(g,{v:()=>Q});var f=r(655),t=r(5e3),d=r(5767),c=r(801),l=r(5439),p=r(1864),M=r(2542),E=r(9812),w=r(1724),y=r(9783),P=r(8157),Z=r(7669),b=r(6498),C=r(9808),I=r(3561),L=r(9114),O=r(3349);function A(o,m){1&o&&t._UZ(0,"img",30)}function U(o,m){1&o&&t._UZ(0,"img",31)}function D(o,m){if(1&o&&t._UZ(0,"fa-icon",32),2&o){const e=t.oxw(2);t.Q6J("icon",e.faStore)("title","Recojo en tienda")}}function S(o,m){if(1&o&&t._UZ(0,"fa-icon",33),2&o){const e=t.oxw(2);t.Q6J("icon",e.faMotorcycle)("title","Delivery")}}function B(o,m){if(1&o&&(t.TgZ(0,"label",34),t._uU(1),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.hij("",e.distance," km")}}function J(o,m){if(1&o){const e=t.EpF();t.TgZ(0,"button",35),t.NdJ("click",function(){t.CHM(e);const n=t.oxw().$implicit;return t.oxw().addfavorites(n._id)}),t._uU(1,"Agregar a favoritos"),t.qZA()}}function N(o,m){if(1&o){const e=t.EpF();t.TgZ(0,"button",35),t.NdJ("click",function(){t.CHM(e);const n=t.oxw().$implicit;return t.oxw().confirmDeleteFavorites(n._id)}),t._UZ(1,"fa-icon",24),t.qZA()}if(2&o){const e=t.oxw(2);t.xp6(1),t.Q6J("icon",e.faStar)}}const T=function(o){return{"background-image":o}};function Y(o,m){if(1&o){const e=t.EpF();t.TgZ(0,"div",7)(1,"div",8),t.NdJ("click",function(){const s=t.CHM(e).$implicit;return t.oxw().gotToViewCompany(s)}),t.qZA(),t.TgZ(2,"div",9)(3,"h5",10),t._uU(4),t.ALo(5,"lowercase"),t.qZA(),t.TgZ(6,"div",11)(7,"div"),t.YNc(8,A,1,0,"img",12),t.YNc(9,U,1,0,"img",13),t.TgZ(10,"span",14),t._uU(11),t.qZA()(),t.TgZ(12,"div")(13,"fa-icon",15),t.NdJ("click",function(){const s=t.CHM(e).$implicit;return t.oxw().shared(s._id,s.comercialName)}),t.qZA(),t.YNc(14,D,1,2,"fa-icon",16),t.YNc(15,S,1,2,"fa-icon",17),t.qZA()(),t.TgZ(16,"div",18)(17,"p",19),t._uU(18),t.qZA(),t.YNc(19,B,2,1,"label",20),t.qZA(),t.TgZ(20,"div",21)(21,"div",22)(22,"a",23),t._UZ(23,"fa-icon",24),t.qZA(),t.TgZ(24,"a",25),t.ALo(25,"whatsapp"),t._UZ(26,"fa-icon",26),t.qZA()(),t.YNc(27,J,2,0,"button",27),t.YNc(28,N,2,1,"button",27),t.qZA(),t.TgZ(29,"div",28)(30,"button",29),t.NdJ("click",function(){const s=t.CHM(e).$implicit;return t.oxw().gotToViewCompany(s)}),t._uU(31,"M\xe1s informaci\xf3n"),t.qZA()()()()}if(2&o){const e=m.$implicit,i=t.oxw();t.xp6(1),t.Q6J("ngStyle",t.VKq(22,T,"url("+e.image+")")),t.xp6(3),t.Oqu(t.lcZ(5,18,e.comercialName)),t.xp6(4),t.Q6J("ngIf",i.aperture(e.openTime,e.closeTime)),t.xp6(1),t.Q6J("ngIf",!i.aperture(e.openTime,e.closeTime)),t.xp6(2),t.AsE("",e.openTime," - ",e.closeTime,""),t.xp6(2),t.Q6J("icon",i.faShare),t.xp6(1),t.Q6J("ngIf",e.delivery),t.xp6(1),t.Q6J("ngIf",e.onMarket),t.xp6(3),t.Oqu(e.addressText),t.xp6(1),t.Q6J("ngIf",e.distance),t.xp6(3),t.MGl("href","tel:",e.phone,"",t.LSH),t.xp6(1),t.Q6J("icon",i.faPhone),t.xp6(1),t.hYB("href","https://wa.me/",t.lcZ(25,20,e.whatsapp),"?text=Hola! ",e.comercialName,"",t.LSH),t.xp6(2),t.Q6J("icon",i.faWhatsapp),t.xp6(1),t.Q6J("ngIf",!i.isFavorite(e._id)),t.xp6(1),t.Q6J("ngIf",i.isFavorite(e._id))}}function R(o,m){1&o&&t._UZ(0,"img",55)}function W(o,m){1&o&&t._UZ(0,"img",56)}function $(o,m){if(1&o&&t._UZ(0,"fa-icon",57),2&o){const e=t.oxw(2);t.Q6J("icon",e.faStore)("title","Recojo en tienda")}}function k(o,m){if(1&o&&t._UZ(0,"fa-icon",58),2&o){const e=t.oxw(2);t.Q6J("icon",e.faMotorcycle)("title","Delivery")}}function F(o,m){if(1&o&&(t.TgZ(0,"div",59),t._uU(1),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.hij("",e.distance," km")}}function K(o,m){if(1&o){const e=t.EpF();t.TgZ(0,"div",36)(1,"div",37),t.NdJ("click",function(){const s=t.CHM(e).$implicit;return t.oxw().gotToViewCompany(s)}),t.qZA(),t.TgZ(2,"div",38)(3,"h5",39),t._uU(4),t.ALo(5,"lowercase"),t.qZA(),t.TgZ(6,"div",40),t.NdJ("click",function(){const s=t.CHM(e).$implicit;return t.oxw().gotToViewCompany(s)}),t.TgZ(7,"div"),t.YNc(8,R,1,0,"img",41),t.YNc(9,W,1,0,"img",42),t.TgZ(10,"span",43),t._uU(11),t.qZA()(),t.TgZ(12,"div"),t.YNc(13,$,1,2,"fa-icon",44),t.YNc(14,k,1,2,"fa-icon",45),t.qZA()(),t.TgZ(15,"div",46)(16,"div",47),t.NdJ("click",function(){const s=t.CHM(e).$implicit;return t.oxw().gotToViewCompany(s)}),t.TgZ(17,"label",48),t._uU(18),t.qZA(),t.TgZ(19,"div",49)(20,"label",50),t._uU(21),t.qZA()(),t.YNc(22,F,2,1,"div",51),t.qZA(),t.TgZ(23,"div",52)(24,"a",23),t._UZ(25,"fa-icon",53),t.qZA(),t.TgZ(26,"a",25),t.ALo(27,"whatsapp"),t._UZ(28,"fa-icon",54),t.qZA()()()()()}if(2&o){const e=m.$implicit,i=t.oxw();t.xp6(1),t.Q6J("ngStyle",t.VKq(20,T,"url("+e.image+")")),t.xp6(3),t.Oqu(t.lcZ(5,16,e.comercialName)),t.xp6(4),t.Q6J("ngIf",i.aperture(e.openTime,e.closeTime)),t.xp6(1),t.Q6J("ngIf",!i.aperture(e.openTime,e.closeTime)),t.xp6(2),t.AsE("",e.openTime," - ",e.closeTime,""),t.xp6(2),t.Q6J("ngIf",e.delivery),t.xp6(1),t.Q6J("ngIf",e.onMarket),t.xp6(4),t.Oqu(e.addressText),t.xp6(3),t.Oqu(e.distrinctName),t.xp6(1),t.Q6J("ngIf",e.distance),t.xp6(2),t.MGl("href","tel:",e.phone,"",t.LSH),t.xp6(1),t.Q6J("icon",i.faPhone),t.xp6(1),t.hYB("href","https://wa.me/",t.lcZ(27,18,e.whatsapp),"?text=Hola! ",e.comercialName,"",t.LSH),t.xp6(2),t.Q6J("icon",i.faWhatsapp)}}let Q=(()=>{class o{constructor(e,i,n,s,_,u,v,h){this.general=e,this.authService=i,this.router=n,this.profileProviderService=s,this.messageService=_,this.favoriteService=u,this.confirmationService=v,this.urlService=h,this.emitEvent=new t.vpe,this.effect="scrollx",this.isMobile=!1,this.displayModal=!1,this.faWhatsapp=d.VHX,this.faPhone=c.j1w,this.faStar=c.Tab,this.faStore=c.vJI,this.faMotorcycle=c.wc0,this.faShare=c.zBy,this.responsiveOptions=[{breakpoint:"1412px",numVisible:1,numScroll:1},{breakpoint:"1200px",numVisible:1,numScroll:1},{breakpoint:"560px",numVisible:1,numScroll:1}]}ngOnInit(){this.initializeItems(),this.role=this.authService.getRole(),this.getFavorites()}ngOnChanges(e){this.getCurrentPosition()}initializeItems(){this.items&&(this.itemsTmp=[...this.items])}getFavorites(){this.role=this.authService.getRole(),this.role&&this.favoriteService.getByClientId(this.authService.getUserID()).subscribe(e=>{this.favorites=e.data})}isFavorite(e){if(this.favorites){let i=!1;return this.favorites.map(n=>{n.profileProviderId===e&&(i=!0)}),i}}onResize(e){this.isMobile=e.target.innerWidth<768}onSortChange(e){}edit(e){this.emitEvent.emit({function:"edit",data:e})}search(e){this.items=""===e?[...this.itemsTmp]:[...this.itemsTmp.filter(i=>i.name.indexOf(e)>-1||i.description.indexOf(e)>-1)]}getPrice(e){return"number"==typeof e?`S/${e}`:e}openModal(e){this.currentItem=e,this.displayModal=!0}aperture(e,i){let n=l().format("YYYY-MM-DD"),s=n+" "+e,_=n+" "+i;return l().isBetween(s,_)}addfavorites(e){this.role=this.authService.getRole(),this.role?this.favoriteService.save({clientId:this.authService.getUserID(),profileProviderId:e}).subscribe(i=>{this.messageService.add({detail:i.message,summary:"\xc9xito",severity:"success"}),this.getFavorites()},i=>{this.messageService.add({detail:i.error,summary:"Error",severity:"error"})}):this.emitEvent.emit({event:"open-login"})}deleteFavorites(e){let i;this.favorites.map(n=>{n.profileProviderId===e&&(i=n._id)}),i&&this.favoriteService.delete(i).subscribe(n=>{this.messageService.add({detail:n.message,summary:"\xc9xito",severity:"success"}),this.getFavorites()},n=>{this.messageService.add({detail:n.error,summary:"Error",severity:"error"})})}confirmDeleteFavorites(e){this.confirmationService.confirm({message:"\xbfSeguro que desea eliminar de favoritos?",acceptLabel:"Si",rejectLabel:"No",header:"Confirmaci\xf3n",accept:()=>{this.deleteFavorites(e)}})}gotToViewCompany(e){this.profileProviderService.getUrlByProfileProviderId(e._id).subscribe(i=>{(null==i?void 0:i.data[0])?(this.general.setUrlBack(window.location.pathname),this.router.navigate([`/${i.data[0].url.trim()}`])):this.messageService.add({detail:"Url no configurada, contactate con el administrador",summary:"Error",severity:"error"})})}shared(e,i){this.profileProviderService.getUrlByProfileProviderId(e).subscribe(n=>{if(null==n?void 0:n.data[0]){const _=`https://vaoperu.com/${n.data[0].url.trim()}`;try{window.navigator.share({url:_,title:`${i}`,text:`${i}`})}catch(u){this.messageService.add({detail:"Su navegador no soporta la funcionalidad de compartir",summary:"Error",severity:"error"})}}else this.messageService.add({detail:"Url no configurada, contactate con el administrador",summary:"Error",severity:"error"})})}rad(e){return e*Math.PI/180}getKilometros(e,i,n,s){var u=this.rad(n-e),v=this.rad(s-i),h=Math.sin(u/2)*Math.sin(u/2)+Math.cos(this.rad(e))*Math.cos(this.rad(n))*Math.sin(v/2)*Math.sin(v/2);return(2*Math.atan2(Math.sqrt(h),Math.sqrt(1-h))*6378.137).toFixed(1)}getCurrentPosition(){return(0,f.mG)(this,void 0,void 0,function*(){const e=yield this.general.getPosition();e&&(this.items=[...this.items.map(i=>(i.distance=i.lat&&i.lng?parseFloat(this.getKilometros(i.lat,i.lng,e.lat,e.lng)):1e6,i))]),this.items=[...this.items.sort(function(i,n){return i.distance>n.distance?1:i.distance<n.distance?-1:0})]})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(p.m),t.Y36(M.e),t.Y36(E.F0),t.Y36(w.n),t.Y36(y.ez),t.Y36(P.e),t.Y36(y.YP),t.Y36(Z.i))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-company-list"]],hostBindings:function(e,i){1&e&&t.NdJ("resize",function(s){return i.onResize(s)},!1,t.Jf7)},inputs:{items:"items"},outputs:{emitEvent:"emitEvent"},features:[t.TTD],decls:7,vars:6,consts:[[1,"d-none","d-md-block","mt-5","company-list","bg-color7"],["filterBy","name","layout","grid",3,"value","paginator","rows","emptyMessage"],["pTemplate","gridItem"],[1,"d-block","d-md-none"],["filterBy","name",3,"value","emptyMessage"],["pTemplate","listItem"],["header","Confirmation","icon","pi pi-exclamation-triangle"],[1,"company","company-container","shadow","mb-3","ml-3","mr-3"],[1,"image-company","cursor",3,"ngStyle","click"],[1,"p-3","d-flex","flex-column","justify-content-between","align-items-start"],[1,"title","font-400","cursor","text-capitalize"],[1,"row","align-items-center","m-0","justify-content-between","w-100"],["width","32","src","assets/img/icons/open.svg","alt","Abierto",4,"ngIf"],["width","32","src","assets/img/icons/close.svg","alt","Cerrado",4,"ngIf"],[1,"ml-2","f-10","text-color5","font-500"],[1,"cursor","f-13","text-color2","mr-2",3,"icon","click"],["class","f-13 text-color1",3,"icon","title",4,"ngIf"],["class","f-13 text-color1 ml-2",3,"icon","title",4,"ngIf"],[1,"mt-2","mb-2","d-flex","align-items-center","justify-content-between","w-100"],[1,"font-300","m-0","f-10","address"],["class","text-color1",4,"ngIf"],[1,"m-0","col-12","p-0","row","justify-content-between","align-items-center"],[1,"row","m-0"],["target","_blank","title","Llamar",1,"link-unstyled","p-0","bg-color2","rounded-circle","icon","d-flex","justify-content-center","align-items-center",3,"href"],[1,"f-13",3,"icon"],["target","_blank","title","Whatsapp",1,"ml-2","p-0","bg-color1","rounded-circle","icon","d-flex","justify-content-center","align-items-center",3,"href"],[1,"f-15","text-white",3,"icon"],["class","cursor pl-2 pr-2 bg-color2 border-0 p-1 rounded-pill f-9 font-500",3,"click",4,"ngIf"],[1,"m-0","col-12","p-0","row","justify-content-start","align-items-center","mt-3"],[1,"cursor","pl-2","pr-2","bg-color7","border-0","p-1","rounded-pill","f-9","font-500",3,"click"],["width","32","src","assets/img/icons/open.svg","alt","Abierto"],["width","32","src","assets/img/icons/close.svg","alt","Cerrado"],[1,"f-13","text-color1",3,"icon","title"],[1,"f-13","text-color1","ml-2",3,"icon","title"],[1,"text-color1"],[1,"cursor","pl-2","pr-2","bg-color2","border-0","p-1","rounded-pill","f-9","font-500",3,"click"],[1,"company","bg-color11","pb-3","d-flex","w-100","pl-4","align-items-start"],[1,"card","border","shadow-sm","image-company-responsive","cursor",3,"ngStyle","click"],[1,"pl-3","pr-3","d-flex","flex-column","col","justify-content-between","align-items-start"],[1,"f-10","font-400","cursor","text-left","text-capitalize"],[1,"row","align-items-center","col","m-0","p-0","justify-content-between","w-100",3,"click"],["width","23","src","assets/img/icons/open.svg","alt","Abierto",4,"ngIf"],["width","23","src","assets/img/icons/close.svg","alt","Cerrado",4,"ngIf"],[1,"ml-2","f-9","text-color5","font-500"],["class","f-10 text-color1",3,"icon","title",4,"ngIf"],["class","f-10 text-color1 ml-2",3,"icon","title",4,"ngIf"],[1,"w-100","mt-2","d-flex","col","m-0","p-0","justify-content-between","align-items-end"],[1,"d-flex","flex-column","align-items-start",3,"click"],[1,"f-9","font-300","m-0","address","text-left"],[1,"d-flex","flex-wrap","justify-content-start"],[1,"f-9","mr-3","font-300","m-0","address"],["class","f-9 bold text-color1 m-0",4,"ngIf"],[1,"d-flex"],[1,"f-10","text-white","fa-rotate-90",3,"icon"],[1,"f-12","text-white",3,"icon"],["width","23","src","assets/img/icons/open.svg","alt","Abierto"],["width","23","src","assets/img/icons/close.svg","alt","Cerrado"],[1,"f-10","text-color1",3,"icon","title"],[1,"f-10","text-color1","ml-2",3,"icon","title"],[1,"f-9","bold","text-color1","m-0"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"p-dataView",1),t.YNc(2,Y,32,24,"ng-template",2),t.qZA()(),t.TgZ(3,"div",3)(4,"p-dataView",4),t.YNc(5,K,29,22,"ng-template",5),t.qZA()(),t._UZ(6,"p-confirmDialog",6)),2&e&&(t.xp6(1),t.Q6J("value",i.items)("paginator",!0)("rows",9)("emptyMessage","No se encontraron resultados"),t.xp6(3),t.Q6J("value",i.items)("emptyMessage","No se encontraron resultados"))},directives:[b.VO,y.jx,C.PC,C.O5,I.BN,L.Q],pipes:[C.i8,O.T],styles:[".company[_ngcontent-%COMP%]{position:relative;overflow:hidden}.company[_ngcontent-%COMP%]   .image-company[_ngcontent-%COMP%]{background-repeat:no-repeat;background-size:cover;min-height:180px;min-width:180px;max-width:180px;margin:auto!important;border-radius:10px}.company[_ngcontent-%COMP%]   .image-company-responsive[_ngcontent-%COMP%]{background-repeat:no-repeat;background-size:cover;width:120px;height:120px;border-radius:10px;border:none!important;border-width:0!important}.company[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{cursor:pointer;min-width:26px;min-height:26px;max-width:26px;max-height:26px}.company-container[_ngcontent-%COMP%]{width:250px}"]}),o})()},3349:(x,g,r)=>{r.d(g,{T:()=>t});var f=r(5e3);let t=(()=>{class d{transform(l,...a){return 9===(null==l?void 0:l.length)?`51${l}`:12===(null==l?void 0:l.length)?l.substring(1):l}}return d.\u0275fac=function(l){return new(l||d)},d.\u0275pipe=f.Yjl({name:"whatsapp",type:d,pure:!0}),d})()},8157:(x,g,r)=>{r.d(g,{e:()=>d});var f=r(5e3),t=r(5830);let d=(()=>{class c{constructor(a){this.api=a,this.model="favorite"}save(a){return this.api.api({service:`save-${this.model}`,type:"post",data:a})}getByClientId(a){return this.api.api({service:`get-${this.model}-by-client-id/${a}`,type:"get",data:null})}delete(a){return this.api.api({service:`delete-${this.model}/${a}`,type:"delete",data:null})}}return c.\u0275fac=function(a){return new(a||c)(f.LFG(t.s))},c.\u0275prov=f.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()}}]);