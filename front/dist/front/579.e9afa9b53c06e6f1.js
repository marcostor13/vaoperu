"use strict";(self.webpackChunkfront=self.webpackChunkfront||[]).push([[579],{7858:(U,g,a)=>{a.d(g,{l:()=>p});var c=a(5e3),h=a(5830);let p=(()=>{class m{constructor(i){this.api=i,this.model="section",this.model2="item-section",this.model3="subitem-section"}save(i,l){return this.api.api({service:i._id?`update-${l}/${i._id}`:`save-${l}`,type:i._id?"patch":"post",data:i})}updateAll(i,l){return console.log("items updated",i),this.api.api({service:`update-${l}-all`,type:"patch",data:i})}get(){return this.api.api({service:`get-sections-and-items-${this.model}`,type:"get",data:null})}delete(i,l){return this.api.api({service:`delete-${l}/${i}`,type:"delete",data:null})}getItemsBySubitemName(i){return this.api.api({service:`get-items-by-subitem-name/${i}`,type:"get",data:null})}getAllSectionsAndItems(){return this.api.api({service:"get-sections-and-items-section",type:"get",data:null})}getSectionsAndItems(i){return this.api.api({service:`get-section-and-items/${i}`,type:"get",data:null})}}return m.\u0275fac=function(i){return new(i||m)(c.LFG(h.s))},m.\u0275prov=c.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})()},2579:(U,g,a)=>{a.r(g),a.d(g,{UserModule:()=>A});var c=a(9808),h=a(9812);class p{constructor(){this._id=null,this.name="",this.email="",this.password="",this.role=[]}}class m{constructor(){this._id=!1,this.name=!1,this.email=!1,this.password=!1,this.role=!1}}var e=a(5e3),i=a(7858),l=a(8368),d=a(9783),f=a(7840),y=a(5315),v=a(4182),C=a(5055),b=a(7307);function I(n,u){if(1&n){const r=e.EpF();e.TgZ(0,"div",19)(1,"div",20)(2,"span",21),e._uU(3),e.qZA()(),e.TgZ(4,"div",20)(5,"span",21),e._uU(6),e.qZA()(),e.TgZ(7,"div",20)(8,"span",21),e._uU(9),e.qZA()(),e.TgZ(10,"div")(11,"button",22),e.NdJ("click",function(){const o=e.CHM(r).$implicit;return e.oxw().addEdit(o)}),e._uU(12,"Editar"),e.qZA()()()}if(2&n){const r=u.$implicit;e.xp6(3),e.Oqu(r.name),e.xp6(3),e.Oqu(r.role),e.xp6(3),e.Oqu(r.email)}}function Z(n,u){1&n&&(e.TgZ(0,"button",23),e._uU(1,"Resetar contrase\xf1a"),e.qZA())}function M(n,u){if(1&n){const r=e.EpF();e.TgZ(0,"button",24),e.NdJ("click",function(s){e.CHM(r);const o=e.oxw();return o.confirm(s,o.currentItem)}),e._uU(1,"Eliminar"),e.qZA()}}const T=function(){return{"max-height":"30rem"}},_=function(n){return{invalid:n}},S=[{path:"",component:(()=>{class n{constructor(r,t,s,o){this.sectionsService=r,this.userService=t,this.messageService=s,this.confirmationService=o,this.displayModal=!1,this.invalid=new m,this.currentItem=new p,this.roles=[{name:"Administrador",key:"admin"},{name:"Proveedor",key:"provider"},{name:"Usuario",key:"user"}]}ngOnInit(){this.get()}get(){this.userService.get().subscribe(r=>{this.items=r.data},r=>{this.messageService.add({severity:"error",summary:"Error",detail:r.error.message})})}validate(r){var t;this.invalid=new m;let s=!1;return this.currentItem.name||(s=!0,this.invalid.name=!0,this.messageService.add({severity:"error",summary:"Error",detail:"Debe completar todos los campos requeridos"})),this.currentItem.email||(s=!0,this.invalid.email=!0,this.messageService.add({severity:"error",summary:"Error",detail:"Debe completar todos los campos requeridos"})),r._id||this.currentItem.password||(s=!0,this.invalid.password=!0,this.messageService.add({severity:"error",summary:"Error",detail:"Debe completar todos los campos requeridos"})),(!this.currentItem.role||0===(null===(t=this.currentItem.role)||void 0===t?void 0:t.length))&&(s=!0,this.invalid.role=!0,this.messageService.add({severity:"error",summary:"Error",detail:"Debe completar el rol"})),s}reset(){this.currentItem=new p}addEdit(r=null){r?(r.password="",this.currentItem=r):this.reset(),this.displayModal=!0}confirm(r,t){this.confirmationService.confirm({target:r.target,message:"\xbfSeg\xfaro que desea eliminar?",icon:"pi pi-exclamation-triangle",acceptLabel:"S\xed",rejectLabel:"No",accept:()=>{this.delete(t)},reject:()=>{}})}add(){this.validate(this.currentItem)||(this.currentItem._id&&delete this.currentItem.password,this.userService.save(this.currentItem).subscribe(r=>{this.messageService.add({severity:"success",summary:"Mensaje",detail:r.message?r.message:"Usuario registrado"}),this.currentItem=new p,this.get()},r=>{this.messageService.add({severity:"error",summary:"Error",detail:r.error.message})}))}delete(r){this.userService.delete(r._id).subscribe(t=>{this.messageService.add({severity:"success",summary:"Mensaje",detail:t.message}),this.currentItem=new p,this.get()},t=>{this.messageService.add({severity:"error",summary:"Error",detail:t.error.message})})}getElementByID(r){return this.items.filter(t=>t._id===r)}}return n.\u0275fac=function(r){return new(r||n)(e.Y36(i.l),e.Y36(l.K),e.Y36(d.ez),e.Y36(d.YP))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-user"]],decls:24,vars:36,consts:[[1,"p-5"],[1,"row","m-0","justify-content-between","align-items-center"],[1,"btn2",3,"click"],[1,"pi","pi-plus","mr-2"],[1,"mt-5"],["header","Lista de usuarios","filterPlaceholder","Buscar","filterBy","name,role,email",3,"value","listStyle","dragdrop"],["pTemplate","item","class","mt-3"],["header","",3,"visible","modal","styleClass","baseZIndex","autoZIndex","draggable","resizable","visibleChange"],[1,"col-12","row","m-0","justify-content-center"],[1,"row","m-0","p-0","flex-column","col-12","col-md-6"],["type","text",1,"invalid","mt-3","input-login",3,"ngModel","ngClass","placeholder","keyup.enter","keyup","ngModelChange"],["type","email",1,"invalid","mt-3","input-login",3,"ngModel","ngClass","placeholder","keyup.enter","keyup","ngModelChange"],["type","password",1,"invalid","mt-3","input-login",3,"ngModel","ngClass","placeholder","keyup.enter","keyup","ngModelChange"],["class","btn1 mt-3",4,"ngIf"],[1,"mt-3"],["optionLabel","name","optionValue","key",3,"options","ngModel","multiple","metaKeySelection","checkbox","filter","ngModelChange"],[1,"btn1","mt-4",3,"click"],["class","btn3 bg-color6 pt-2 pb-2 mt-2 mb-3",3,"click",4,"ngIf"],[3,"autoZIndex","baseZIndex"],[1,"item-list","row","justify-content-between","align-items-center","m-0","pl-2","pr-2"],[1,"col"],[1,"ml-3"],[1,"btn2","p-0","pl-3","pr-3",3,"click"],[1,"btn1","mt-3"],[1,"btn3","bg-color6","pt-2","pb-2","mt-2","mb-3",3,"click"]],template:function(r,t){1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4"),e._uU(3,"Usuarios"),e.qZA(),e.TgZ(4,"button",2),e.NdJ("click",function(){return t.addEdit()}),e._UZ(5,"i",3),e._uU(6," Agregar "),e.qZA()(),e.TgZ(7,"div",4)(8,"p-orderList",5),e.YNc(9,I,13,3,"ng-template",6),e.qZA()()(),e.TgZ(10,"p-dialog",7),e.NdJ("visibleChange",function(o){return t.displayModal=o}),e.TgZ(11,"div",8)(12,"div",9)(13,"input",10),e.NdJ("keyup.enter",function(){return t.add()})("keyup",function(){return t.invalid.name=!1})("ngModelChange",function(o){return t.currentItem.name=o}),e.qZA(),e.TgZ(14,"input",11),e.NdJ("keyup.enter",function(){return t.add()})("keyup",function(){return t.invalid.email=!1})("ngModelChange",function(o){return t.currentItem.email=o}),e.qZA(),e.TgZ(15,"input",12),e.NdJ("keyup.enter",function(){return t.add()})("keyup",function(){return t.invalid.password=!1})("ngModelChange",function(o){return t.currentItem.password=o}),e.qZA(),e.YNc(16,Z,2,0,"button",13),e.TgZ(17,"label",14),e._uU(18,"Seleccione los roles"),e.qZA(),e.TgZ(19,"p-listbox",15),e.NdJ("ngModelChange",function(o){return t.currentItem.role=o}),e.qZA(),e.TgZ(20,"button",16),e.NdJ("click",function(){return t.add()}),e._uU(21,"Guardar"),e.qZA(),e.YNc(22,M,2,0,"button",17),e.qZA()()(),e._UZ(23,"p-confirmPopup",18)),2&r&&(e.xp6(8),e.Q6J("value",t.items)("listStyle",e.DdM(29,T))("dragdrop",!0),e.xp6(2),e.Q6J("visible",t.displayModal)("modal",!0)("styleClass","modalLogin")("baseZIndex",1e4)("autoZIndex",!1)("draggable",!1)("resizable",!1),e.xp6(3),e.Q6J("ngModel",t.currentItem.name)("ngClass",e.VKq(30,_,t.invalid.name))("placeholder","Nombre"),e.xp6(1),e.Q6J("ngModel",t.currentItem.email)("ngClass",e.VKq(32,_,t.invalid.email))("placeholder","Correo"),e.xp6(1),e.Q6J("ngModel",t.currentItem.password)("ngClass",e.VKq(34,_,t.invalid.password))("placeholder","Contrase\xf1a"),e.xp6(1),e.Q6J("ngIf",t.currentItem._id),e.xp6(3),e.Q6J("options",t.roles)("ngModel",t.currentItem.role)("multiple",!0)("metaKeySelection",!1)("checkbox",!0)("filter",!0),e.xp6(3),e.Q6J("ngIf",t.currentItem._id),e.xp6(1),e.Q6J("autoZIndex",!1)("baseZIndex",1000001))},directives:[f.F,d.jx,y.V,v.Fj,v.JJ,v.On,c.mk,c.O5,C.Ri,b.P],styles:[".btn3[_ngcontent-%COMP%]{max-height:50px}"]}),n})()}];let k=(()=>{class n{}return n.\u0275fac=function(r){return new(r||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[h.Bz.forChild(S)],h.Bz]}),n})(),A=(()=>{class n{}return n.\u0275fac=function(r){return new(r||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[d.YP],imports:[[c.ez,k,b.n,f.C,y.S,v.u5,C.ON]]}),n})()}}]);