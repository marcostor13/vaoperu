(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{CUh4:function(e,t,r){"use strict";r.r(t),r.d(t,"UserModule",function(){return C});var i=r("ofXK"),n=r("tyNb"),s=r("FQVY");class a{constructor(){this._id=null,this.name="",this.email="",this.password="",this.role=[]}}class o{constructor(){this._id=!1,this.name=!1,this.email=!1,this.password=!1,this.role=!1}}var c=r("oXr6"),l=r("fXoL"),d=r("7zfz"),u=r("cQJI"),m=r("/RsI"),b=r("3Pt+"),p=r("+07z"),g=r("RTT/");function h(e,t){if(1&e){const e=l.Vb();l.Ub(0,"div",19),l.Ub(1,"div"),l.Ub(2,"span",20),l.Jc(3,"Nombre :"),l.Tb(),l.Ub(4,"span",21),l.Jc(5),l.Tb(),l.Tb(),l.Ub(6,"div"),l.Ub(7,"button",22),l.bc("click",function(){l.Bc(e);const r=t.$implicit;return l.ec().addEdit(r)}),l.Jc(8,"Editar"),l.Tb(),l.Tb(),l.Tb()}if(2&e){const e=t.$implicit;l.Cb(5),l.Kc(e.name)}}function v(e,t){1&e&&(l.Ub(0,"button",23),l.Jc(1,"Resetar contrase\xf1a"),l.Tb())}function f(e,t){if(1&e){const e=l.Vb();l.Ub(0,"button",24),l.bc("click",function(t){l.Bc(e);const r=l.ec();return r.confirm(t,r.currentItem)}),l.Jc(1,"Eliminar"),l.Tb()}}const y=function(){return{"max-height":"30rem"}},I=function(e){return{invalid:e}},k=[{path:"",component:(()=>{class e{constructor(e,t,r,i){this.general=e,this.userService=t,this.messageService=r,this.confirmationService=i,this.displayModal=!1,this.invalid=new o,this.currentItem=new a,this.roles=[{name:"Administrador",key:"admin"},{name:"Proveedor",key:"provider"},{name:"Usuario",key:"user"}]}ngOnInit(){this.get()}get(){this.userService.get().subscribe(e=>{this.items=e.data},e=>{this.messageService.add({severity:"error",summary:"Error",detail:e.error.message})})}validate(e){var t;this.invalid=new o;let r=!1;return this.currentItem.name||(r=!0,this.invalid.name=!0,this.messageService.add({severity:"error",summary:"Error",detail:"Debe completar todos los campos requeridos"})),this.currentItem.email||(r=!0,this.invalid.email=!0,this.messageService.add({severity:"error",summary:"Error",detail:"Debe completar todos los campos requeridos"})),e._id||this.currentItem.password||(r=!0,this.invalid.password=!0,this.messageService.add({severity:"error",summary:"Error",detail:"Debe completar todos los campos requeridos"})),this.currentItem.role&&0!==(null===(t=this.currentItem.role)||void 0===t?void 0:t.length)||(r=!0,this.invalid.role=!0,this.messageService.add({severity:"error",summary:"Error",detail:"Debe completar el rol"})),r}reset(){this.currentItem=new a}addEdit(e=null){e?(e.password="",this.currentItem=e):this.reset(),this.displayModal=!0}confirm(e,t){this.confirmationService.confirm({target:e.target,message:"\xbfSeg\xfaro que desea eliminar?",icon:"pi pi-exclamation-triangle",acceptLabel:"S\xed",rejectLabel:"No",accept:()=>{this.delete(t)},reject:()=>{}})}add(){this.validate(this.currentItem)||(this.currentItem._id&&delete this.currentItem.password,this.userService.save(this.currentItem).subscribe(e=>{this.messageService.add({severity:"success",summary:"Mensaje",detail:e.message?e.message:"Usuario registrado"}),this.currentItem=new a,this.get()},e=>{this.messageService.add({severity:"error",summary:"Error",detail:e.error.message})}))}delete(e){this.userService.delete(e._id).subscribe(e=>{this.messageService.add({severity:"success",summary:"Mensaje",detail:e.message}),this.currentItem=new a,this.get()},e=>{this.messageService.add({severity:"error",summary:"Error",detail:e.error.message})})}getElementByID(e){return this.items.filter(t=>t._id===e)}}return e.\u0275fac=function(t){return new(t||e)(l.Ob(s.a),l.Ob(c.a),l.Ob(d.h),l.Ob(d.b))},e.\u0275cmp=l.Ib({type:e,selectors:[["app-user"]],decls:24,vars:36,consts:[[1,"p-5"],[1,"row","m-0","justify-content-between","align-items-center"],[1,"btn2",3,"click"],[1,"pi","pi-plus","mr-2"],[1,"mt-5"],["header","Lista de usuarios","filterPlaceholder","Buscar por nombre","filterBy","name",3,"value","listStyle","dragdrop"],["pTemplate","item","class","mt-3"],["header","",3,"visible","modal","styleClass","baseZIndex","autoZIndex","draggable","resizable","visibleChange"],[1,"col-12","row","m-0","justify-content-center"],[1,"row","m-0","p-0","flex-column","col-12","col-md-6"],["type","text",1,"invalid","mt-3","input-login",3,"ngModel","ngClass","placeholder","keyup.enter","keyup","ngModelChange"],["type","email",1,"invalid","mt-3","input-login",3,"ngModel","ngClass","placeholder","keyup.enter","keyup","ngModelChange"],["type","password",1,"invalid","mt-3","input-login",3,"ngModel","ngClass","placeholder","keyup.enter","keyup","ngModelChange"],["class","btn1 mt-3",4,"ngIf"],[1,"mt-3"],["optionLabel","name","optionValue","key",3,"options","ngModel","multiple","metaKeySelection","checkbox","filter","ngModelChange"],[1,"btn1","mt-4",3,"click"],["class","btn3 bg-color6 pt-2 pb-2 mt-2",3,"click",4,"ngIf"],[3,"autoZIndex","baseZIndex"],["draggable","true",1,"item-list","row","justify-content-between","align-items-center","m-0","pl-2","pr-2"],[1,"font-700"],[1,"ml-3"],[1,"btn2","p-0","pl-3","pr-3",3,"click"],[1,"btn1","mt-3"],[1,"btn3","bg-color6","pt-2","pb-2","mt-2",3,"click"]],template:function(e,t){1&e&&(l.Ub(0,"div",0),l.Ub(1,"div",1),l.Ub(2,"h4"),l.Jc(3,"Usuarios"),l.Tb(),l.Ub(4,"button",2),l.bc("click",function(){return t.addEdit()}),l.Pb(5,"i",3),l.Jc(6," Agregar "),l.Tb(),l.Tb(),l.Ub(7,"div",4),l.Ub(8,"p-orderList",5),l.Hc(9,h,9,1,"ng-template",6),l.Tb(),l.Tb(),l.Tb(),l.Ub(10,"p-dialog",7),l.bc("visibleChange",function(e){return t.displayModal=e}),l.Ub(11,"div",8),l.Ub(12,"div",9),l.Ub(13,"input",10),l.bc("keyup.enter",function(){return t.add()})("keyup",function(){return t.invalid.name=!1})("ngModelChange",function(e){return t.currentItem.name=e}),l.Tb(),l.Ub(14,"input",11),l.bc("keyup.enter",function(){return t.add()})("keyup",function(){return t.invalid.email=!1})("ngModelChange",function(e){return t.currentItem.email=e}),l.Tb(),l.Ub(15,"input",12),l.bc("keyup.enter",function(){return t.add()})("keyup",function(){return t.invalid.password=!1})("ngModelChange",function(e){return t.currentItem.password=e}),l.Tb(),l.Hc(16,v,2,0,"button",13),l.Ub(17,"label",14),l.Jc(18,"Seleccione los roles"),l.Tb(),l.Ub(19,"p-listbox",15),l.bc("ngModelChange",function(e){return t.currentItem.role=e}),l.Tb(),l.Ub(20,"button",16),l.bc("click",function(){return t.add()}),l.Jc(21,"Guardar"),l.Tb(),l.Hc(22,f,2,0,"button",17),l.Tb(),l.Tb(),l.Tb(),l.Pb(23,"p-confirmPopup",18)),2&e&&(l.Cb(8),l.kc("value",t.items)("listStyle",l.oc(29,y))("dragdrop",!0),l.Cb(2),l.kc("visible",t.displayModal)("modal",!0)("styleClass","modalLogin")("baseZIndex",1e4)("autoZIndex",!1)("draggable",!1)("resizable",!1),l.Cb(3),l.kc("ngModel",t.currentItem.name)("ngClass",l.pc(30,I,t.invalid.name))("placeholder","Nombre"),l.Cb(1),l.kc("ngModel",t.currentItem.email)("ngClass",l.pc(32,I,t.invalid.email))("placeholder","Correo"),l.Cb(1),l.kc("ngModel",t.currentItem.password)("ngClass",l.pc(34,I,t.invalid.password))("placeholder","Contrase\xf1a"),l.Cb(1),l.kc("ngIf",t.currentItem._id),l.Cb(3),l.kc("options",t.roles)("ngModel",t.currentItem.role)("multiple",!0)("metaKeySelection",!1)("checkbox",!0)("filter",!0),l.Cb(3),l.kc("ngIf",t.currentItem._id),l.Cb(1),l.kc("autoZIndex",!1)("baseZIndex",1000001))},directives:[u.a,d.j,m.a,b.a,b.d,b.e,i.i,i.k,p.a,g.a],styles:[""]}),e})()}];let w=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l.Mb({type:e}),e.\u0275inj=l.Lb({imports:[[n.f.forChild(k)],n.f]}),e})(),C=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l.Mb({type:e}),e.\u0275inj=l.Lb({providers:[d.b],imports:[[i.c,w,g.b,u.b,m.b,b.b,p.b]]}),e})()}}]);