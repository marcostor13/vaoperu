(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{CUh4:function(e,t,r){"use strict";r.r(t),r.d(t,"UserModule",function(){return j});var i=r("ofXK"),n=r("tyNb"),a=r("FQVY");class s{constructor(){this._id=null,this.name="",this.email="",this.password="",this.role=[]}}class o{constructor(){this._id=!1,this.name=!1,this.email=!1,this.password=!1,this.role=!1}}var l=r("H+bZ"),c=r("fXoL");let d=(()=>{class e{constructor(e){this.api=e,this.model="user"}save(e){return this.api.api({service:e._id?`update-${this.model}/${e._id}`:`save-${this.model}`,type:e._id?"patch":"post",data:e})}get(){return this.api.api({service:`get-${this.model}`,type:"get",data:null})}delete(e){return this.api.api({service:`delete-${this.model}/${e}`,type:"delete",data:null})}}return e.\u0275fac=function(t){return new(t||e)(c.Xb(l.a))},e.\u0275prov=c.Jb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var u=r("7zfz"),m=r("4fuH"),b=r("yWK+"),p=r("cQJI"),h=r("/RsI"),g=r("3Pt+"),v=r("+07z"),y=r("RTT/");function f(e,t){if(1&e){const e=c.Ub();c.Tb(0,"div",21),c.Tb(1,"div"),c.Tb(2,"span",22),c.Gc(3,"Nombre :"),c.Sb(),c.Tb(4,"span",23),c.Gc(5),c.Sb(),c.Sb(),c.Tb(6,"div"),c.Tb(7,"button",24),c.ac("click",function(){c.yc(e);const r=t.$implicit;return c.dc().addEdit(r)}),c.Gc(8,"Editar"),c.Sb(),c.Sb(),c.Sb()}if(2&e){const e=t.$implicit;c.Bb(5),c.Hc(e.name)}}function S(e,t){if(1&e){const e=c.Ub();c.Tb(0,"button",25),c.ac("click",function(t){c.yc(e);const r=c.dc();return r.confirm(t,r.currentItem)}),c.Gc(1,"Eliminar"),c.Sb()}}const I=function(){return{"max-height":"30rem"}},k=function(e){return{invalid:e}},w=[{path:"",component:(()=>{class e{constructor(e,t,r,i){this.general=e,this.userService=t,this.messageService=r,this.confirmationService=i,this.displayModal=!1,this.invalid=new o,this.currentItem=new s,this.roles=[{name:"Administrador",key:"admin"},{name:"Proveedor",key:"provider"},{name:"Galler\xeda",key:"gallery"},{name:"Usuario",key:"user"}]}ngOnInit(){this.get()}get(){this.userService.get().subscribe(e=>{this.general.c("Get",e),this.items=e.data},e=>{this.messageService.add({severity:"error",summary:"Error",detail:e.error.message})})}validate(e){var t;this.invalid=new o;let r=!1;return this.currentItem.name||(r=!0,this.invalid.name=!0,this.messageService.add({severity:"error",summary:"Error",detail:"Debe completar todos los campos requeridos"})),this.currentItem.email||(r=!0,this.invalid.email=!0,this.messageService.add({severity:"error",summary:"Error",detail:"Debe completar todos los campos requeridos"})),e._id||this.currentItem.password||(r=!0,this.invalid.password=!0,this.messageService.add({severity:"error",summary:"Error",detail:"Debe completar todos los campos requeridos"})),this.currentItem.role&&0!==(null===(t=this.currentItem.role)||void 0===t?void 0:t.length)||(r=!0,this.invalid.role=!0,this.messageService.add({severity:"error",summary:"Error",detail:"Debe completar el rol"})),r}reset(){this.currentItem=new s}addEdit(e=null){e?(e.password="",this.currentItem=e):this.reset(),this.displayModal=!0}confirm(e,t){this.confirmationService.confirm({target:e.target,message:"\xbfSeg\xfaro que desea eliminar?",icon:"pi pi-exclamation-triangle",acceptLabel:"S\xed",rejectLabel:"No",accept:()=>{this.delete(t)},reject:()=>{}})}add(){this.validate(this.currentItem)||this.userService.save(this.currentItem).subscribe(e=>{this.general.c("Add",e),this.messageService.add({severity:"success",summary:"Mensaje",detail:e.message?e.message:"Usuario registrado"}),this.currentItem=new s,this.get()},e=>{this.messageService.add({severity:"error",summary:"Error",detail:e.error.message})})}delete(e){this.userService.delete(e._id).subscribe(e=>{this.general.c("Delete",e),this.messageService.add({severity:"success",summary:"Mensaje",detail:e.message}),this.currentItem=new s,this.get()},e=>{this.messageService.add({severity:"error",summary:"Error",detail:e.error.message})})}getElementByID(e){return this.items.filter(t=>t._id===e)}}return e.\u0275fac=function(t){return new(t||e)(c.Nb(a.a),c.Nb(d),c.Nb(u.e),c.Nb(u.a))},e.\u0275cmp=c.Hb({type:e,selectors:[["app-user"]],decls:27,vars:35,consts:[[1,"row","m-0"],[1,"d-none","d-md-flex"],[1,"flex-1"],[1,"p-5"],[1,"row","m-0","justify-content-between","align-items-center"],[1,"btn2",3,"click"],[1,"pi","pi-plus","mr-2"],[1,"mt-5"],["header","Lista de usuarios","filterPlaceholder","Buscar por nombre","filterBy","name",3,"value","listStyle","dragdrop"],["pTemplate","item","class","mt-3"],["header","",3,"visible","modal","styleClass","baseZIndex","autoZIndex","draggable","resizable","visibleChange"],[1,"col-12","row","m-0","justify-content-center"],[1,"row","m-0","p-0","flex-column","col-12","col-md-6"],["type","text",1,"invalid","mt-3","input-login",3,"ngModel","ngClass","placeholder","keyup.enter","keyup","ngModelChange"],["type","email",1,"invalid","mt-3","input-login",3,"ngModel","ngClass","placeholder","keyup.enter","keyup","ngModelChange"],["type","password",1,"invalid","mt-3","input-login",3,"ngModel","ngClass","placeholder","keyup.enter","keyup","ngModelChange"],[1,"mt-3"],["optionLabel","name","optionValue","key",3,"options","ngModel","multiple","metaKeySelection","checkbox","filter","ngModelChange"],[1,"btn1","mt-4",3,"click"],["class","btn3 bg-color6 pt-2 pb-2 mt-2",3,"click",4,"ngIf"],[3,"autoZIndex","baseZIndex"],["draggable","true",1,"item-list","row","justify-content-between","align-items-center","m-0","pl-2","pr-2"],[1,"font-700"],[1,"ml-3"],[1,"btn2","p-0","pl-3","pr-3",3,"click"],[1,"btn3","bg-color6","pt-2","pb-2","mt-2",3,"click"]],template:function(e,t){1&e&&(c.Tb(0,"div",0),c.Ob(1,"app-menu-admin",1),c.Tb(2,"div",2),c.Ob(3,"app-header-admin"),c.Tb(4,"div",3),c.Tb(5,"div",4),c.Tb(6,"h4"),c.Gc(7,"Usuarios"),c.Sb(),c.Tb(8,"button",5),c.ac("click",function(){return t.addEdit()}),c.Ob(9,"i",6),c.Gc(10," Agregar "),c.Sb(),c.Sb(),c.Tb(11,"div",7),c.Tb(12,"p-orderList",8),c.Ec(13,f,9,1,"ng-template",9),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Tb(14,"p-dialog",10),c.ac("visibleChange",function(e){return t.displayModal=e}),c.Tb(15,"div",11),c.Tb(16,"div",12),c.Tb(17,"input",13),c.ac("keyup.enter",function(){return t.add()})("keyup",function(){return t.invalid.name=!1})("ngModelChange",function(e){return t.currentItem.name=e}),c.Sb(),c.Tb(18,"input",14),c.ac("keyup.enter",function(){return t.add()})("keyup",function(){return t.invalid.email=!1})("ngModelChange",function(e){return t.currentItem.email=e}),c.Sb(),c.Tb(19,"input",15),c.ac("keyup.enter",function(){return t.add()})("keyup",function(){return t.invalid.password=!1})("ngModelChange",function(e){return t.currentItem.password=e}),c.Sb(),c.Tb(20,"label",16),c.Gc(21,"Seleccione los roles"),c.Sb(),c.Tb(22,"p-listbox",17),c.ac("ngModelChange",function(e){return t.currentItem.role=e}),c.Sb(),c.Tb(23,"button",18),c.ac("click",function(){return t.add()}),c.Gc(24,"Guardar"),c.Sb(),c.Ec(25,S,2,0,"button",19),c.Sb(),c.Sb(),c.Sb(),c.Ob(26,"p-confirmPopup",20)),2&e&&(c.Bb(12),c.jc("value",t.items)("listStyle",c.nc(28,I))("dragdrop",!0),c.Bb(2),c.jc("visible",t.displayModal)("modal",!0)("styleClass","modalLogin")("baseZIndex",1e4)("autoZIndex",!1)("draggable",!1)("resizable",!1),c.Bb(3),c.jc("ngModel",t.currentItem.name)("ngClass",c.oc(29,k,t.invalid.name))("placeholder","Nombre"),c.Bb(1),c.jc("ngModel",t.currentItem.email)("ngClass",c.oc(31,k,t.invalid.email))("placeholder","Correo"),c.Bb(1),c.jc("ngModel",t.currentItem.password)("ngClass",c.oc(33,k,t.invalid.password))("placeholder","Contrase\xf1a"),c.Bb(3),c.jc("options",t.roles)("ngModel",t.currentItem.role)("multiple",!0)("metaKeySelection",!1)("checkbox",!0)("filter",!0),c.Bb(3),c.jc("ngIf",t.currentItem._id),c.Bb(1),c.jc("autoZIndex",!1)("baseZIndex",1000001))},directives:[m.a,b.a,p.a,u.g,h.a,g.a,g.d,g.e,i.i,v.a,i.k,y.a],styles:[""]}),e})()}];let T=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.Lb({type:e}),e.\u0275inj=c.Kb({imports:[[n.d.forChild(w)],n.d]}),e})();var M=r("6TDQ"),C=r("k5Yg");let j=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.Lb({type:e}),e.\u0275inj=c.Kb({providers:[u.a],imports:[[i.c,T,M.a,C.a,y.b,p.b,h.b,g.b,v.b]]}),e})()}}]);