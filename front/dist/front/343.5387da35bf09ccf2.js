"use strict";(self.webpackChunkfront=self.webpackChunkfront||[]).push([[343],{8343:(z,f,e)=>{e.r(f),e.d(f,{InformationProductsModule:()=>Y});var l=e(9808),s=e(9812),m=e(801),r=e(5e3),v=e(1864),c=e(1724),h=e(2542),u=e(319),P=e(9062),g=e(8157),d=e(9783),F=e(5519),p=e(3561);const y=["map"];function x(i,n){if(1&i&&(r.TgZ(0,"div",5)(1,"div",6)(2,"h6",7),r._uU(3),r.qZA(),r.TgZ(4,"p",8),r._uU(5),r.qZA()()()),2&i){const o=n.$implicit,t=r.oxw(2);r.xp6(3),r.Oqu(t.format(o.key)),r.xp6(2),r.Oqu(o.value)}}function I(i,n){if(1&i&&(r.TgZ(0,"div",1)(1,"div"),r.YNc(2,x,6,2,"div",2),r.qZA(),r._UZ(3,"div",3,4),r.qZA()),2&i){const o=r.oxw();r.xp6(2),r.Q6J("ngForOf",o.profileProviderFormat)}}let C=(()=>{class i{constructor(){this.profileProviderFormat=[]}ngOnInit(){this.formatData()}ngAfterViewInit(){this.initMap()}formatData(){this.profileProvider.comercialName&&(this.profileProviderFormat=[...this.profileProviderFormat,{key:"Nombre comercial",value:this.profileProvider.comercialName}]),this.profileProvider.legalName&&(this.profileProviderFormat=[...this.profileProviderFormat,{key:"Raz\xf3n social",value:this.profileProvider.legalName}]),this.profileProvider.ruc&&(this.profileProviderFormat=[...this.profileProviderFormat,{key:"Ruc",value:this.profileProvider.ruc}]),this.profileProvider.whatsapp&&(this.profileProviderFormat=[...this.profileProviderFormat,{key:"Whatsapp",value:this.profileProvider.whatsapp}]),this.profileProvider.phone&&(this.profileProviderFormat=[...this.profileProviderFormat,{key:"Tel\xe9fono",value:this.profileProvider.phone}]),this.profileProvider.addressText&&(this.profileProviderFormat=[...this.profileProviderFormat,{key:"Direci\xf3n",value:this.profileProvider.addressText}]),this.profileProvider.facebook&&(this.profileProviderFormat=[...this.profileProviderFormat,{key:"Facebook",value:this.profileProvider.facebook}]),this.profileProvider.twitter&&(this.profileProviderFormat=[...this.profileProviderFormat,{key:"Twitter",value:this.profileProvider.twitter}]),this.profileProvider.instagram&&(this.profileProviderFormat=[...this.profileProviderFormat,{key:"Instagram",value:this.profileProvider.instagram}]),this.profileProvider.tiktok&&(this.profileProviderFormat=[...this.profileProviderFormat,{key:"Tiktok",value:this.profileProvider.tiktok}]),this.profileProvider.email&&(this.profileProviderFormat=[...this.profileProviderFormat,{key:"Correo",value:this.profileProvider.email}]),this.profileProvider.distrinctName&&(this.profileProviderFormat=[...this.profileProviderFormat,{key:"Distrito",value:this.profileProvider.distrinctName}]),this.profileProvider.siteWeb&&(this.profileProviderFormat=[...this.profileProviderFormat,{key:"Sitio Web",value:this.profileProvider.siteWeb}])}format(o){return o.replace("-","").replace("-","").replace("-","").replace("-","")}initMap(){const o={lat:this.profileProvider.lat,lng:this.profileProvider.lng},t=new google.maps.Map(this.el.nativeElement,{center:o,zoom:14});new google.maps.Marker({position:o,map:t,title:this.profileProvider.comercialName})}}return i.\u0275fac=function(o){return new(o||i)},i.\u0275cmp=r.Xpm({type:i,selectors:[["app-information"]],viewQuery:function(o,t){if(1&o&&r.Gf(y,5),2&o){let a;r.iGM(a=r.CRH())&&(t.el=a.first)}},inputs:{profileProvider:"profileProvider"},decls:1,vars:1,consts:[["class","d-flex flex-column",4,"ngIf"],[1,"d-flex","flex-column"],["class","d-flex mt-3 ml-4 mb-4",4,"ngFor","ngForOf"],["id","map",1,"ml-0","ml-md-4","mt-4","mt-md-0"],["map",""],[1,"d-flex","mt-3","ml-4","mb-4"],[1,"d-flex","flex-column","justify-content-center","ml-2"],[1,"text-color1","text-capitalize","bold"],[1,"text-value"]],template:function(o,t){1&o&&r.YNc(0,I,5,1,"div",0),2&o&&r.Q6J("ngIf",t.profileProviderFormat)},directives:[l.O5,l.sg],styles:[".line[_ngcontent-%COMP%]{min-height:74px;min-width:8px;border:0}#map[_ngcontent-%COMP%]{height:400px;width:400px}"]}),i})();function M(i,n){if(1&i&&r._UZ(0,"app-information",5),2&i){const o=r.oxw();r.Q6J("profileProvider",o.profileProvider)}}const k=[{path:"",component:(()=>{class i{constructor(o,t,a,Z,U,A,O,b,w,J){this.route=o,this.generalService=t,this.profileProviderService=a,this.authService=Z,this.productService=U,this.offersService=A,this.favoriteService=O,this.messageService=b,this.confirmationService=w,this.router=J,this.faArrowLeft=m.acZ,this.companyUrl=this.route.snapshot.paramMap.get("id")}ngOnInit(){this.getUrlData()}getUrlData(){this.profileProviderService.getUrlByUrl(this.companyUrl).subscribe(o=>{this.getProfileProvider(null==o?void 0:o.data[0].profileProviderId)})}getProfileProvider(o){this.profileProviderService.getById(o).subscribe(t=>{this.profileProvider=t.data,this.getProducts()})}getProducts(){this.productService.getByProfileProviderId(this.profileProvider._id).subscribe(o=>{this.products=o.data})}allproduct(){this.router.navigate([this.profileProvider.comercialName.toLowerCase().replace(" ","-")])}}return i.\u0275fac=function(o){return new(o||i)(r.Y36(s.gz),r.Y36(v.m),r.Y36(c.n),r.Y36(h.e),r.Y36(u.M),r.Y36(P.K),r.Y36(g.e),r.Y36(d.ez),r.Y36(d.YP),r.Y36(s.F0))},i.\u0275cmp=r.Xpm({type:i,selectors:[["app-information-products"]],decls:6,vars:3,consts:[[3,"eventHeader"],[1,"w-100","mt-2","mb-3","pl-4","d-flex","justify-content-start"],[1,"mt-4","bg-transparent","px-2","f-14","font-500","border-0","d-flex","align-items-center","justify-content-center","rounded-pill","text-color5",3,"click"],[1,"f-14","icon-search","ml-2","text-color5",3,"icon"],[3,"profileProvider",4,"ngIf"],[3,"profileProvider"]],template:function(o,t){1&o&&(r._UZ(0,"app-header",0),r.TgZ(1,"div",1)(2,"button",2),r.NdJ("click",function(){return t.allproduct()}),r._UZ(3,"fa-icon",3),r._uU(4," Atr\xe1s "),r.qZA()(),r.YNc(5,M,1,1,"app-information",4)),2&o&&(r.Q6J("eventHeader",t.eventHeader),r.xp6(3),r.Q6J("icon",t.faArrowLeft),r.xp6(2),r.Q6J("ngIf",t.profileProvider))},directives:[F.G,p.BN,l.O5,C],styles:[""]}),i})()}];let T=(()=>{class i{}return i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=r.oAB({type:i}),i.\u0275inj=r.cJS({imports:[[s.Bz.forChild(k)],s.Bz]}),i})();var N=e(9886),S=e(8478);let Y=(()=>{class i{}return i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=r.oAB({type:i}),i.\u0275inj=r.cJS({imports:[[l.ez,T,N.O,p.uH,S.f]]}),i})()}}]);