"use strict";(self.webpackChunkfront=self.webpackChunkfront||[]).push([[269],{4269:(J,x,m)=>{m.r(x),m.d(x,{SectionModule:()=>W});var o=m(9808),v=m(9812),b=m(8745);class h{constructor(){this.name="",this.primaryItemId="",this.type=0}}class I{constructor(){this.name="",this.image="",this.sectionId=""}}class l{constructor(){this.name="",this.image="",this.itemId=""}}class d{constructor(){this.name=!1,this.primaryItemId=!1,this.type=!1}}class S{constructor(){this.name=!1,this.image=!1,this.sectionId=!1}}class A{constructor(){this.name=!1,this.image=!1,this.itemId=!1}}var e=m(5e3),E=m(7858),k=m(1864),y=m(9783),Z=m(7840),M=m(5315),a=m(4182),f=m(27),r=m(7307);function p(s,u){if(1&s){const t=e.EpF();e.TgZ(0,"div",12)(1,"div")(2,"span",13),e._uU(3,"Nombre :"),e.qZA(),e.TgZ(4,"span",14),e._uU(5),e.qZA()(),e.TgZ(6,"div")(7,"button",15),e.NdJ("click",function(){const c=e.CHM(t).$implicit;return e.oxw().addEdit(c,"section")}),e._uU(8,"Editar"),e.qZA()()()}if(2&s){const t=u.$implicit;e.xp6(5),e.Oqu(t.name)}}function _(s,u){if(1&s){const t=e.EpF();e.TgZ(0,"div",12)(1,"div")(2,"span",13),e._uU(3,"Nombre :"),e.qZA(),e.TgZ(4,"span",14),e._uU(5),e.qZA()(),e.TgZ(6,"div")(7,"button",15),e.NdJ("click",function(){const c=e.CHM(t).$implicit;return e.oxw(2).addEdit(c,"item")}),e._uU(8,"Editar"),e.qZA()()()}if(2&s){const t=u.$implicit;e.xp6(5),e.Oqu(t.name)}}const g=function(){return{"max-height":"30rem"}};function w(s,u){if(1&s){const t=e.EpF();e.TgZ(0,"div",4)(1,"p-orderList",16),e.NdJ("onReorder",function(){return e.CHM(t),e.oxw().updateAll("item")})("onSelectionChange",function(n){return e.CHM(t),e.oxw().selectionChangeSubitem(n)}),e.YNc(2,_,9,1,"ng-template",6),e.qZA()()}if(2&s){const t=e.oxw();e.xp6(1),e.Q6J("value",t.listItems)("listStyle",e.DdM(3,g))("dragdrop",!0)}}function L(s,u){if(1&s){const t=e.EpF();e.TgZ(0,"div",12)(1,"div")(2,"span",13),e._uU(3,"Nombre :"),e.qZA(),e.TgZ(4,"span",14),e._uU(5),e.qZA()(),e.TgZ(6,"div")(7,"button",15),e.NdJ("click",function(){const c=e.CHM(t).$implicit;return e.oxw(2).addEdit(c,"subitem")}),e._uU(8,"Editar"),e.qZA()()()}if(2&s){const t=u.$implicit;e.xp6(5),e.Oqu(t.name)}}function T(s,u){if(1&s){const t=e.EpF();e.TgZ(0,"div",4)(1,"p-orderList",17),e.NdJ("onReorder",function(){return e.CHM(t),e.oxw().updateAll("subitem")}),e.YNc(2,L,9,1,"ng-template",6),e.qZA()()}if(2&s){const t=e.oxw();e.xp6(1),e.Q6J("value",t.listSubitems)("listStyle",e.DdM(3,g))("dragdrop",!0)}}function U(s,u){if(1&s&&(e.TgZ(0,"option",26),e._uU(1),e.qZA()),2&s){const t=u.$implicit;e.Q6J("value",t._id),e.xp6(1),e.Oqu(t.name)}}function q(s,u){if(1&s){const t=e.EpF();e.TgZ(0,"button",27),e.NdJ("click",function(n){e.CHM(t);const c=e.oxw(2);return c.confirm(n,c.currentSection)}),e._uU(1,"Eliminar"),e.qZA()}}const C=function(s){return{invalid:s}};function D(s,u){if(1&s){const t=e.EpF();e.TgZ(0,"div",18)(1,"input",19),e.NdJ("keyup.enter",function(){return e.CHM(t),e.oxw().add()})("ngModelChange",function(n){return e.CHM(t),e.oxw().currentSection.name=n})("keyup",function(){return e.CHM(t),e.oxw().invalidSection.name=!1}),e.qZA(),e.TgZ(2,"select",20),e.NdJ("ngModelChange",function(n){return e.CHM(t),e.oxw().currentSection.primaryItemId=n}),e.TgZ(3,"option",21),e._uU(4,"Selecione el item destacado"),e.qZA(),e.YNc(5,U,2,2,"option",22),e.qZA(),e.TgZ(6,"input",23),e.NdJ("ngModelChange",function(n){return e.CHM(t),e.oxw().currentSection.type=n}),e.qZA(),e.TgZ(7,"button",24),e.NdJ("click",function(){return e.CHM(t),e.oxw().presave()}),e._uU(8,"Guardar"),e.qZA(),e.YNc(9,q,2,0,"button",25),e.qZA()}if(2&s){const t=e.oxw();e.xp6(1),e.Q6J("ngModel",t.currentSection.name)("ngClass",e.VKq(9,C,t.invalidSection.name))("placeholder","Secci\xf3n"),e.xp6(1),e.Q6J("ngClass",e.VKq(11,C,t.invalidSection.primaryItemId))("ngModel",t.currentSection.primaryItemId),e.xp6(3),e.Q6J("ngForOf",t.currentItemsList),e.xp6(1),e.Q6J("ngClass",e.VKq(13,C,t.invalidSection.type))("ngModel",t.currentSection.type),e.xp6(3),e.Q6J("ngIf",t.currentSection._id)}}const P=function(s){return{"background-image":s}};function F(s,u){if(1&s){const t=e.EpF();e.TgZ(0,"div",33)(1,"div",34)(2,"div",35),e.NdJ("click",function(){e.CHM(t);const n=e.oxw(2);return n.removeImage(n.currentImage)}),e._UZ(3,"i",36),e.qZA()()()}if(2&s){const t=e.oxw(2);e.xp6(1),e.Q6J("ngStyle",e.VKq(1,P,"url("+t.getBlobOrImage(t.currentImage)+")"))}}function Q(s,u){if(1&s&&(e.TgZ(0,"option",26),e._uU(1),e.qZA()),2&s){const t=u.$implicit;e.Q6J("value",t._id),e.xp6(1),e.Oqu(t.name)}}function j(s,u){if(1&s){const t=e.EpF();e.TgZ(0,"button",27),e.NdJ("click",function(n){e.CHM(t);const c=e.oxw(2);return c.confirm(n,c.currentItem)}),e._uU(1,"Eliminar"),e.qZA()}}const N=function(s){return{width:s}};function B(s,u){if(1&s){const t=e.EpF();e.TgZ(0,"div",18)(1,"input",19),e.NdJ("keyup.enter",function(){return e.CHM(t),e.oxw().add()})("ngModelChange",function(n){return e.CHM(t),e.oxw().currentItem.name=n})("keyup",function(){return e.CHM(t),e.oxw().invalidItem.name=!1}),e.qZA(),e.TgZ(2,"div",28)(3,"p-fileUpload",29),e.NdJ("onSelect",function(n){e.CHM(t);const c=e.oxw();return c.onUpload(n),c.invalidItem.image=!1}),e.qZA(),e._UZ(4,"div",30),e.qZA(),e.YNc(5,F,4,3,"div",31),e.TgZ(6,"select",20),e.NdJ("ngModelChange",function(n){return e.CHM(t),e.oxw().currentItem.sectionId=n}),e.TgZ(7,"option",21),e._uU(8,"Seleccione una secci\xf3n"),e.qZA(),e.YNc(9,Q,2,2,"option",22),e.qZA(),e.TgZ(10,"button",32),e.NdJ("click",function(){return e.CHM(t),e.oxw().presave()}),e._uU(11,"Guardar"),e.qZA(),e.YNc(12,j,2,0,"button",25),e.qZA()}if(2&s){const t=e.oxw();e.xp6(1),e.Q6J("ngModel",t.currentItem.name)("ngClass",e.VKq(18,C,t.invalidItem.name))("placeholder","Item"),e.xp6(1),e.Q6J("ngClass",e.VKq(20,C,t.invalidItem.image)),e.xp6(1),e.Q6J("fileLimit",1)("maxFileSize",1e7)("chooseLabel","Subir imagen")("files",t.images)("auto",!1)("disabled",!!t.currentImage),e.xp6(1),e.Akn(e.VKq(22,N,t.uploadPercent+"%")),e.xp6(1),e.Q6J("ngIf",t.currentImage),e.xp6(1),e.Q6J("ngClass",e.VKq(24,C,t.invalidItem.sectionId))("ngModel",t.currentItem.sectionId),e.xp6(3),e.Q6J("ngForOf",t.sectionsList),e.xp6(1),e.Q6J("disabled",t.buttonDisabled),e.xp6(2),e.Q6J("ngIf",t.currentItem._id)}}function R(s,u){if(1&s&&(e.TgZ(0,"option",26),e._uU(1),e.TgZ(2,"span",37),e._uU(3),e.qZA()()),2&s){const t=u.$implicit,i=e.oxw(2);e.Q6J("value",t._id),e.xp6(1),e.hij("",t.name," "),e.xp6(2),e.hij(" -- ",i.getNameSection(t.sectionId),"")}}function H(s,u){if(1&s){const t=e.EpF();e.TgZ(0,"div",33)(1,"div",34)(2,"div",35),e.NdJ("click",function(){e.CHM(t);const n=e.oxw(2);return n.removeImage(n.currentImage)}),e._UZ(3,"i",36),e.qZA()()()}if(2&s){const t=e.oxw(2);e.xp6(1),e.Q6J("ngStyle",e.VKq(1,P,"url("+t.getBlobOrImage(t.currentImage)+")"))}}function Y(s,u){if(1&s){const t=e.EpF();e.TgZ(0,"button",27),e.NdJ("click",function(n){e.CHM(t);const c=e.oxw(2);return c.confirm(n,c.currentSubitem)}),e._uU(1,"Eliminar"),e.qZA()}}function z(s,u){if(1&s){const t=e.EpF();e.TgZ(0,"div",18)(1,"input",19),e.NdJ("keyup.enter",function(){return e.CHM(t),e.oxw().add()})("ngModelChange",function(n){return e.CHM(t),e.oxw().currentSubitem.name=n})("keyup",function(){return e.CHM(t),e.oxw().invalidSubitem.name=!1}),e.qZA(),e.TgZ(2,"div",28)(3,"p-fileUpload",29),e.NdJ("onSelect",function(n){e.CHM(t);const c=e.oxw();return c.onUpload(n),c.invalidSubitem.image=!1}),e.qZA(),e._UZ(4,"div",30),e.qZA(),e.TgZ(5,"select",20),e.NdJ("ngModelChange",function(n){return e.CHM(t),e.oxw().currentSubitem.itemId=n}),e.TgZ(6,"option",21),e._uU(7,"Seleccione un item"),e.qZA(),e.YNc(8,R,4,3,"option",22),e.qZA(),e.YNc(9,H,4,3,"div",31),e.TgZ(10,"button",32),e.NdJ("click",function(){return e.CHM(t),e.oxw().presave()}),e._uU(11,"Guardar"),e.qZA(),e.YNc(12,Y,2,0,"button",25),e.qZA()}if(2&s){const t=e.oxw();e.xp6(1),e.Q6J("ngModel",t.currentSubitem.name)("ngClass",e.VKq(18,C,t.invalidSubitem.name))("placeholder","SubItem"),e.xp6(1),e.Q6J("ngClass",e.VKq(20,C,t.invalidSubitem.image)),e.xp6(1),e.Q6J("fileLimit",1)("maxFileSize",1e7)("chooseLabel","Subir imagen")("files",t.images)("auto",!1)("disabled",!!t.currentImage),e.xp6(1),e.Akn(e.VKq(22,N,t.uploadPercent+"%")),e.xp6(1),e.Q6J("ngClass",e.VKq(24,C,t.invalidSubitem.itemId))("ngModel",t.currentSubitem.itemId),e.xp6(3),e.Q6J("ngForOf",t.itemsList),e.xp6(1),e.Q6J("ngIf",t.currentImage),e.xp6(1),e.Q6J("disabled",t.buttonDisabled),e.xp6(2),e.Q6J("ngIf",t.currentSubitem._id)}}const K=[{path:"",component:(()=>{class s{constructor(t,i,n,c){this.sectionService=t,this.general=i,this.confirmationService=n,this.messageService=c,this.subs=new b.Y,this.displayModal=!1,this.sectionsList=[],this.itemsList=[],this.currentSection=new h,this.currentItem=new I,this.currentSubitem=new l,this.invalidSection=new d,this.invalidItem=new S,this.invalidSubitem=new A,this.images=[],this.currentType="",this.buttonDisabled=!1}ngOnInit(){this.getSectionsAndItems()}getSectionsAndItems(){this.subs.add(this.sectionService.getAllSectionsAndItems().subscribe(t=>{this.items=[...t.data],this.sectionsList=[...this.items.map(i=>i.section)],this.items.map(i=>{this.itemsList=[...this.itemsList,...i.items.map(n=>n.item)]})},t=>{this.messageService.add({severity:"error",summary:"Error",detail:t.error.message})}))}getNameSection(t){return this.sectionsList.find(i=>i._id===t).name}resetInvalid(){switch(this.currentType){case"section":this.invalidSection={name:!1,primaryItemId:!1};break;case"item":this.invalidItem={name:!1,image:!1,sectionId:!1};break;case"subitem":this.invalidSubitem={name:!1,image:!1,itemId:!1}}}reset(){switch(this.currentImage=null,this.uploadPercent=0,this.listItems=void 0,this.listSubitems=void 0,this.currentType){case"section":this.currentSection={name:"",primaryItemId:"",type:0};break;case"item":this.currentItem={name:"",image:"",sectionId:""};break;case"subitem":this.currentSubitem={name:"",image:"",itemId:""}}}validateSection(){this.resetInvalid();let t=!1;return this.currentSection.name||(t=!0,this.invalidSection.name=!0,this.messageService.add({severity:"error",summary:"Error",detail:"Revise los campos"})),t}validateItem(){this.resetInvalid();let t=!1;return this.currentItem.name||(t=!0,this.invalidItem.name=!0),this.currentImage||(t=!0,this.invalidItem.image=!0),this.currentItem.sectionId||(t=!0,this.invalidItem.sectionId=!0),t&&this.messageService.add({severity:"error",summary:"Error",detail:"Revise los campos"}),t}validateSubitem(){this.resetInvalid();let t=!1;return this.currentSubitem.name||(t=!0,this.invalidSubitem.name=!0),this.currentImage||(t=!0,this.invalidSubitem.image=!0),this.currentSubitem.itemId||(t=!0,this.invalidSubitem.itemId=!0),t&&this.messageService.add({severity:"error",summary:"Error",detail:"Revise los campos"}),t}initAdd(t){this.addEdit(null,t)}addEdit(t,i){if(this.currentType=i,t){switch(this.currentType){case"section":this.currentSection=t,this.currentItemsList=[...this.itemsList.filter(n=>n.sectionId===t._id)];break;case"item":this.currentItem=t;break;case"subitem":this.currentSubitem=t}t.image&&(this.currentImage={file:null,blob:null,url:t.image})}else this.reset();this.displayModal=!0}confirm(t,i){this.confirmationService.confirm({target:t.target,message:"\xbfSeg\xfaro que desea eliminar?",icon:"pi pi-exclamation-triangle",acceptLabel:"S\xed",rejectLabel:"No",accept:()=>{this.delete(i)},reject:()=>{}})}add(){let t,i;switch(this.currentType){case"section":t=this.currentSection,i="section";break;case"item":t=this.currentItem,i="item-section";break;case"subitem":t=this.currentSubitem,i="subitem-section"}this.sectionService.save(t,i).subscribe(n=>{this.messageService.add({severity:"success",summary:"Mensaje",detail:n.message}),this.reset(),this.getSectionsAndItems(),this.displayModal=!1},n=>{this.messageService.add({severity:"error",summary:"Error",detail:n.error.message})})}updateAll(t){let i;switch(t){case"section":i=this.sectionsList,t="section";break;case"item":i=this.listItems,t="item-section";break;case"subitem":i=this.listSubitems,t="subitem-section"}this.sectionService.updateAll(i,t).subscribe(n=>{this.messageService.add({severity:"success",summary:"Mensaje",detail:n.message}),this.reset(),this.getSectionsAndItems(),this.displayModal=!1},n=>{this.messageService.add({severity:"error",summary:"Error",detail:n.error.message})})}selectionChangeItem(t){this.listItemsData=void 0,this.listItems=void 0;const i=this.items.find(n=>n.section._id===t.value[0]._id).items;this.listItemsData=i,this.listItems=i.map(n=>n.item)}selectionChangeSubitem(t){this.listSubitems=void 0;const i=t.value[0]._id;this.listSubitems=this.listItemsData.find(n=>n.item._id===i).subitems}delete(t){let i;switch(this.currentType){case"section":i="section";break;case"item":i="item-section";break;case"subitem":i="subitem-section"}t.image?this.general.deleteImage(t.image).then(()=>{this.currentImage=null,this.sectionService.delete(t._id,i).subscribe(n=>{this.messageService.add({severity:"success",summary:"Mensaje",detail:n.message}),this.reset(),this.getSectionsAndItems()},n=>{this.messageService.add({severity:"error",summary:"Error",detail:n.error.message})})}).catch(n=>{this.messageService.add({severity:"error",summary:"Error",detail:"Error al eliminar la imagen"})}):this.sectionService.delete(t._id,i).subscribe(n=>{this.messageService.add({severity:"success",summary:"Mensaje",detail:n.message}),this.reset(),this.getSectionsAndItems()},n=>{this.messageService.add({severity:"error",summary:"Error",detail:n.error.message})})}removeImage(t){t.url&&(this.deleteImage=t,this.currentItem.image=""),this.currentImage=null}onUpload(t){this.buttonDisabled=!0,t.currentFiles.map(i=>{const n=new FileReader;n.readAsDataURL(i),n.onload=()=>{this.currentImage={file:i,blob:n.result,url:null},this.buttonDisabled=!1}}),this.images=[]}validate(){switch(this.currentType){case"section":return this.validateSection();case"item":return this.validateItem();case"subitem":return this.validateSubitem()}}presave(){var t;this.validate()||(this.deleteImage&&this.general.deleteImage(this.deleteImage.url).then(()=>{this.currentImage=null}).catch(i=>{this.messageService.add({severity:"error",summary:"Error",detail:"Error al eliminar la imagen"})}),"section"!==this.currentType&&(null===(t=this.currentImage)||void 0===t?void 0:t.file)?this.general.uploadImage(this.currentImage.file,`${this.currentType}/`).subscribe(i=>{"number"==typeof i?this.uploadPercent=i:(this.currentImage={file:null,blob:null,url:i},"item"===this.currentType?this.currentItem.image=i:"subitem"===this.currentType&&(this.currentSubitem.image=i),this.add())}):this.add())}getBlobOrImage(t){return t.blob||t.url}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(E.l),e.Y36(k.m),e.Y36(y.YP),e.Y36(y.ez))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-section"]],decls:24,vars:19,consts:[[1,"p-5"],[1,"row","m-0","justify-content-between","align-items-center"],[1,"btn2",3,"click"],[1,"pi","pi-plus","mr-2"],[1,"mt-5"],["header","Lista de secciones","filterPlaceholder","Buscar por nombre","filterBy","name",3,"value","listStyle","dragdrop","onReorder","onSelectionChange"],["pTemplate","item","class","mt-3"],["class","mt-5",4,"ngIf"],["header","",3,"visible","modal","styleClass","baseZIndex","autoZIndex","draggable","resizable","visibleChange"],[1,"col-12","row","m-0","justify-content-center",3,"ngSwitch"],["class","row m-0 p-0 flex-column col-12 col-md-6",4,"ngSwitchCase"],[3,"autoZIndex","baseZIndex"],["draggable","true",1,"item-list","row","justify-content-between","align-items-center","m-0","pl-2","pr-2"],[1,"font-700"],[1,"ml-3"],[1,"btn2","p-0","pl-3","pr-3",3,"click"],["header","Lista de items","filterPlaceholder","Buscar por nombre","filterBy","name",3,"value","listStyle","dragdrop","onReorder","onSelectionChange"],["header","Lista de subitems","filterPlaceholder","Buscar por nombre","filterBy","name",3,"value","listStyle","dragdrop","onReorder"],[1,"row","m-0","p-0","flex-column","col-12","col-md-6"],["type","text",3,"ngModel","ngClass","placeholder","keyup.enter","ngModelChange","keyup"],[1,"mt-2",3,"ngClass","ngModel","ngModelChange"],["value",""],[3,"value",4,"ngFor","ngForOf"],["type","number","min","0","max","4",1,"mt-2",3,"ngClass","ngModel","ngModelChange"],[1,"btn1","mt-4","mb-5",3,"click"],["class","btn3 bg-color6 pt-2 pb-2 mt-2 mb-5",3,"click",4,"ngIf"],[3,"value"],[1,"btn3","bg-color6","pt-2","pb-2","mt-2","mb-5",3,"click"],[1,"mt-2",3,"ngClass"],["styleClass","col-12 btn2","mode","basic","accept","image/*","uploadLabel","Subir","cancelLabel","Cancelar","invalidFileSizeMessageDetail","El tama\xf1o m\xe1ximo es {0}.",3,"fileLimit","maxFileSize","chooseLabel","files","auto","disabled","onSelect"],[1,"loading"],["class","row m-0 justify-content-center align-items-center mt-2",4,"ngIf"],[1,"btn1","mt-4","mb-5",3,"disabled","click"],[1,"row","m-0","justify-content-center","align-items-center","mt-2"],[1,"bg-color6","image-miniature",3,"ngStyle"],[1,"delete",3,"click"],[1,"pi","pi-trash","text-white","f-20"],[1,"text-color5","bold"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4"),e._uU(3,"Secciones"),e.qZA(),e.TgZ(4,"button",2),e.NdJ("click",function(){return i.initAdd("section")}),e._UZ(5,"i",3),e._uU(6," Agregar secci\xf3n "),e.qZA(),e.TgZ(7,"button",2),e.NdJ("click",function(){return i.initAdd("item")}),e._UZ(8,"i",3),e._uU(9," Agregar items "),e.qZA(),e.TgZ(10,"button",2),e.NdJ("click",function(){return i.initAdd("subitem")}),e._UZ(11,"i",3),e._uU(12," Agregar subitems "),e.qZA()(),e.TgZ(13,"div",4)(14,"p-orderList",5),e.NdJ("onReorder",function(){return i.updateAll("section")})("onSelectionChange",function(c){return i.selectionChangeItem(c)}),e.YNc(15,p,9,1,"ng-template",6),e.qZA()(),e.YNc(16,w,3,4,"div",7),e.YNc(17,T,3,4,"div",7),e.qZA(),e.TgZ(18,"p-dialog",8),e.NdJ("visibleChange",function(c){return i.displayModal=c}),e.TgZ(19,"div",9),e.YNc(20,D,10,15,"div",10),e.YNc(21,B,13,26,"div",10),e.YNc(22,z,13,26,"div",10),e.qZA()(),e._UZ(23,"p-confirmPopup",11)),2&t&&(e.xp6(14),e.Q6J("value",i.sectionsList)("listStyle",e.DdM(18,g))("dragdrop",!0),e.xp6(2),e.Q6J("ngIf",(null==i.listItems?null:i.listItems.length)>0),e.xp6(1),e.Q6J("ngIf",(null==i.listSubitems?null:i.listSubitems.length)>0),e.xp6(1),e.Q6J("visible",i.displayModal)("modal",!0)("styleClass","modalLogin")("baseZIndex",1e4)("autoZIndex",!1)("draggable",!1)("resizable",!1),e.xp6(1),e.Q6J("ngSwitch",i.currentType),e.xp6(1),e.Q6J("ngSwitchCase","section"),e.xp6(1),e.Q6J("ngSwitchCase","item"),e.xp6(1),e.Q6J("ngSwitchCase","subitem"),e.xp6(1),e.Q6J("autoZIndex",!1)("baseZIndex",1000001))},directives:[Z.F,y.jx,o.O5,M.V,o.RF,o.n9,a.Fj,a.JJ,a.On,o.mk,a.EJ,a.YN,a.Kr,o.sg,a.qQ,a.Fd,a.wV,f.p,o.PC,r.P],styles:[""]}),s})()}];let $=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[[v.Bz.forChild(K)],v.Bz]}),s})();var V=m(7773);let W=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({providers:[y.YP],imports:[[o.ez,$,r.n,Z.C,M.S,a.u5,V.EV,f.O]]}),s})()},7858:(J,x,m)=>{m.d(x,{l:()=>b});var o=m(5e3),v=m(5830);let b=(()=>{class h{constructor(l){this.api=l,this.model="section",this.model2="item-section",this.model3="subitem-section"}save(l,d){return this.api.api({service:l._id?`update-${d}/${l._id}`:`save-${d}`,type:l._id?"patch":"post",data:l})}updateAll(l,d){return this.api.api({service:`update-${d}-all`,type:"patch",data:l})}get(){return this.api.api({service:`get-sections-and-items-${this.model}`,type:"get",data:null})}delete(l,d){return this.api.api({service:`delete-${d}/${l}`,type:"delete",data:null})}getItemsBySubitemName(l){return this.api.api({service:`get-items-by-subitem-name/${l}`,type:"get",data:null})}getAllSectionsAndItems(){return this.api.api({service:"get-sections-and-items-section",type:"get",data:null})}getSectionsAndItems(l){return this.api.api({service:`get-section-and-items/${l}`,type:"get",data:null})}}return h.\u0275fac=function(l){return new(l||h)(o.LFG(v.s))},h.\u0275prov=o.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"}),h})()},7307:(J,x,m)=>{m.d(x,{P:()=>Z,n:()=>M});var o=m(5e3),v=m(9808),b=m(9783),h=m(845),I=m(5921),l=m(1777),d=m(5730);function S(a,f){if(1&a&&o._UZ(0,"i",8),2&a){const r=o.oxw(2);o.Tol(r.confirmation.icon),o.Q6J("ngClass","p-confirm-popup-icon")}}function A(a,f){if(1&a){const r=o.EpF();o.TgZ(0,"button",9),o.NdJ("click",function(){return o.CHM(r),o.oxw(2).reject()}),o.qZA()}if(2&a){const r=o.oxw(2);o.Tol(r.confirmation.rejectButtonStyleClass||"p-button-text"),o.Q6J("icon",r.confirmation.rejectIcon)("label",r.rejectButtonLabel)("ngClass","p-confirm-popup-reject p-button-sm"),o.uIk("aria-label",r.rejectButtonLabel)}}function e(a,f){if(1&a){const r=o.EpF();o.TgZ(0,"button",9),o.NdJ("click",function(){return o.CHM(r),o.oxw(2).accept()}),o.qZA()}if(2&a){const r=o.oxw(2);o.Tol(r.confirmation.acceptButtonStyleClass),o.Q6J("icon",r.confirmation.acceptIcon)("label",r.acceptButtonLabel)("ngClass","p-confirm-popup-accept p-button-sm"),o.uIk("aria-label",r.acceptButtonLabel)}}const E=function(a,f){return{showTransitionParams:a,hideTransitionParams:f}},k=function(a){return{value:"open",params:a}};function y(a,f){if(1&a){const r=o.EpF();o.TgZ(0,"div",1),o.NdJ("click",function(_){return o.CHM(r),o.oxw().onOverlayClick(_)})("@animation.start",function(_){return o.CHM(r),o.oxw().onAnimationStart(_)})("@animation.done",function(_){return o.CHM(r),o.oxw().onAnimationEnd(_)}),o.TgZ(1,"div",2,3),o.YNc(3,S,1,3,"i",4),o.TgZ(4,"span",5),o._uU(5),o.qZA()(),o.TgZ(6,"div",6),o.YNc(7,A,1,6,"button",7),o.YNc(8,e,1,6,"button",7),o.qZA()()}if(2&a){const r=o.oxw();o.Tol(r.styleClass),o.Q6J("ngClass","p-confirm-popup p-component")("ngStyle",r.style)("@animation",o.VKq(12,k,o.WLB(9,E,r.showTransitionOptions,r.hideTransitionOptions))),o.xp6(3),o.Q6J("ngIf",r.confirmation.icon),o.xp6(2),o.Oqu(r.confirmation.message),o.xp6(2),o.Q6J("ngIf",!1!==r.confirmation.rejectVisible),o.xp6(1),o.Q6J("ngIf",!1!==r.confirmation.acceptVisible)}}let Z=(()=>{class a{constructor(r,p,_,g,w,L){this.el=r,this.confirmationService=p,this.renderer=_,this.cd=g,this.config=w,this.overlayService=L,this.defaultFocus="accept",this.showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)",this.hideTransitionOptions=".1s linear",this.autoZIndex=!0,this.baseZIndex=0,this.subscription=this.confirmationService.requireConfirmation$.subscribe(T=>{T?T.key===this.key&&(this.confirmation=T,this.confirmation.accept&&(this.confirmation.acceptEvent=new o.vpe,this.confirmation.acceptEvent.subscribe(this.confirmation.accept)),this.confirmation.reject&&(this.confirmation.rejectEvent=new o.vpe,this.confirmation.rejectEvent.subscribe(this.confirmation.reject)),this.visible=!0):this.hide()})}get visible(){return this._visible}set visible(r){this._visible=r,this.cd.markForCheck()}onAnimationStart(r){if("open"===r.toState){this.container=r.element,document.body.appendChild(this.container),this.align(),this.bindListeners();const p=this.getElementToFocus();p&&p.focus()}}onAnimationEnd(r){"void"===r.toState&&this.onContainerDestroy()}getElementToFocus(){switch(this.defaultFocus){case"accept":return d.p.findSingle(this.container,".p-confirm-popup-accept");case"reject":return d.p.findSingle(this.container,".p-confirm-popup-reject");case"none":return null}}align(){this.autoZIndex&&I.P9.set("overlay",this.container,this.config.zIndex.overlay),d.p.absolutePosition(this.container,this.confirmation.target);const r=d.p.getOffset(this.container),p=d.p.getOffset(this.confirmation.target);let _=0;r.left<p.left&&(_=p.left-r.left),this.container.style.setProperty("--overlayArrowLeft",`${_}px`),r.top<p.top&&d.p.addClass(this.container,"p-confirm-popup-flipped")}hide(){this.visible=!1}accept(){this.confirmation.acceptEvent&&this.confirmation.acceptEvent.emit(),this.hide()}reject(){this.confirmation.rejectEvent&&this.confirmation.rejectEvent.emit(),this.hide()}onOverlayClick(r){this.overlayService.add({originalEvent:r,target:this.el.nativeElement})}bindListeners(){this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindScrollListener()}unbindListeners(){this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindScrollListener()}bindDocumentClickListener(){if(!this.documentClickListener){let r=d.p.isIOS()?"touchstart":"click";const p=this.el?this.el.nativeElement.ownerDocument:document;this.documentClickListener=this.renderer.listen(p,r,_=>{let g=this.confirmation.target;this.container!==_.target&&!this.container.contains(_.target)&&g!==_.target&&!g.contains(_.target)&&this.hide()})}}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}onWindowResize(){this.hide()}bindDocumentResizeListener(){this.documentResizeListener=this.onWindowResize.bind(this),window.addEventListener("resize",this.documentResizeListener)}unbindDocumentResizeListener(){this.documentResizeListener&&(window.removeEventListener("resize",this.documentResizeListener),this.documentResizeListener=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new d.V(this.confirmation.target,()=>{this.visible&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unsubscribeConfirmationSubscriptions(){this.confirmation&&(this.confirmation.acceptEvent&&this.confirmation.acceptEvent.unsubscribe(),this.confirmation.rejectEvent&&this.confirmation.rejectEvent.unsubscribe())}onContainerDestroy(){this.unbindListeners(),this.unsubscribeConfirmationSubscriptions(),this.autoZIndex&&I.P9.clear(this.container),this.confirmation=null,this.container=null}restoreAppend(){this.container&&document.body.removeChild(this.container),this.onContainerDestroy()}get acceptButtonLabel(){return this.confirmation.acceptLabel||this.config.getTranslation(b.ws.ACCEPT)}get rejectButtonLabel(){return this.confirmation.rejectLabel||this.config.getTranslation(b.ws.REJECT)}ngOnDestroy(){this.restoreAppend(),this.subscription&&this.subscription.unsubscribe()}}return a.\u0275fac=function(r){return new(r||a)(o.Y36(o.SBq),o.Y36(b.YP),o.Y36(o.Qsj),o.Y36(o.sBO),o.Y36(b.b4),o.Y36(b.F0))},a.\u0275cmp=o.Xpm({type:a,selectors:[["p-confirmPopup"]],hostAttrs:[1,"p-element"],inputs:{key:"key",defaultFocus:"defaultFocus",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",autoZIndex:"autoZIndex",baseZIndex:"baseZIndex",style:"style",styleClass:"styleClass",visible:"visible"},decls:1,vars:1,consts:[[3,"ngClass","ngStyle","class","click",4,"ngIf"],[3,"ngClass","ngStyle","click"],[1,"p-confirm-popup-content"],["content",""],[3,"ngClass","class",4,"ngIf"],[1,"p-confirm-popup-message"],[1,"p-confirm-popup-footer"],["type","button","pButton","",3,"icon","label","ngClass","class","click",4,"ngIf"],[3,"ngClass"],["type","button","pButton","",3,"icon","label","ngClass","click"]],template:function(r,p){1&r&&o.YNc(0,y,9,14,"div",0),2&r&&o.Q6J("ngIf",p.visible)},directives:[v.O5,v.mk,v.PC,h.Hq],styles:['.p-confirm-popup{position:absolute;margin-top:10px;top:0;left:0}.p-confirm-popup-flipped{margin-top:0;margin-bottom:10px}.p-confirm-popup:after,.p-confirm-popup:before{bottom:100%;left:calc(var(--overlayArrowLeft, 0) + 1.25rem);content:" ";height:0;width:0;position:absolute;pointer-events:none}.p-confirm-popup:after{border-width:8px;margin-left:-8px}.p-confirm-popup:before{border-width:10px;margin-left:-10px}.p-confirm-popup-flipped:after,.p-confirm-popup-flipped:before{bottom:auto;top:100%}.p-confirm-popup.p-confirm-popup-flipped:after{border-bottom-color:transparent}.p-confirm-popup.p-confirm-popup-flipped:before{border-bottom-color:transparent}.p-confirm-popup .p-confirm-popup-content{display:flex;align-items:center}\n'],encapsulation:2,data:{animation:[(0,l.X$)("animation",[(0,l.SB)("void",(0,l.oB)({transform:"scaleY(0.8)",opacity:0})),(0,l.SB)("open",(0,l.oB)({transform:"translateY(0)",opacity:1})),(0,l.eR)("void => open",(0,l.jt)("{{showTransitionParams}}")),(0,l.eR)("open => void",(0,l.jt)("{{hideTransitionParams}}"))])]},changeDetection:0}),a})(),M=(()=>{class a{}return a.\u0275fac=function(r){return new(r||a)},a.\u0275mod=o.oAB({type:a}),a.\u0275inj=o.cJS({imports:[[v.ez,h.hJ]]}),a})()}}]);