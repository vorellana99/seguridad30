(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"+fcZ":function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),o=function(){return function(){}}(),t=u("tUci"),i=function(){return(i=Object.assign||function(l){for(var n,u=1,e=arguments.length;u<e;u++)for(var o in n=arguments[u])Object.prototype.hasOwnProperty.call(n,o)&&(l[o]=n[o]);return l}).apply(this,arguments)},d=function(){return function(l,n,u){this.id=l,this.name=n,this.description=u}}(),a=function(){function l(l){this.service=l,this.inpBuscar="",this.item=new d}return l.prototype.ngOnInit=function(){this.loadGrid()},l.prototype.loadGrid=function(){this.loading=!0,this.get("",this.inpBuscar)},l.prototype.showDialogToAdd=function(){this.newItem=!0,this.item=new d,this.displayDialog=!0},l.prototype.onRowSelect=function(l){this.newItem=!1,this.item=i({},l.data),this.displayDialog=!0},l.prototype.save=function(){this.newItem?this.add(this.item):this.update(this.item)},l.prototype.get=function(l,n){var u=this;this.service.get(l,this.inpBuscar).subscribe(function(l){u.items=l,console.log("Ok.Component.Read."),u.loading=!1},function(l){console.log("Error.Component.Read.")})},l.prototype.add=function(l){var n=this;this.service.add(l).subscribe(function(l){n.loadGrid(),console.log("Ok.Component.Insert."),n.item=null,n.displayDialog=!1},function(l){console.log("Error.Component.Insert.")})},l.prototype.update=function(l){var n=this;this.service.update(l).subscribe(function(l){n.loadGrid(),console.log("Ok.Component.Update"),n.item=null,n.displayDialog=!1},function(l){console.log("Error.Component.Update.")})},l.prototype.delete=function(){},l}(),r=u("pMnS"),s=u("sdDj"),c=u("Czxz"),p=u("VSng"),m=u("gIcY"),g=u("rMXk"),v=u("3zLz"),f=u("RXyF"),h=u("P3jN"),C=u("7LN8"),b=u("QVyK"),D=u("66nc"),_=u("Ip0R"),M=u("SVXH"),y=u("t/Na"),S=e["\u0275crt"]({encapsulation:0,styles:[[""]],data:{animation:[{type:7,name:"routerTransition",definitions:[],options:{}}]}});function E(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Codigo"])),(l()(),e["\u0275eld"](3,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Nombre"])),(l()(),e["\u0275eld"](5,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Descripci\xf3n"]))],null,null)}function R(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,8,"tr",[],[[2,"ui-selectable-row",null],[2,"ui-state-highlight",null],[1,"tabindex",0]],[[null,"click"],[null,"touchend"],[null,"keydown"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==e["\u0275nov"](l,2).onClick(u)&&o),"touchend"===n&&(o=!1!==e["\u0275nov"](l,2).onTouchEnd(u)&&o),"keydown"===n&&(o=!1!==e["\u0275nov"](l,2).onKeyDown(u)&&o),o},null,null)),e["\u0275prd"](512,null,s.DomHandler,s.DomHandler,[]),e["\u0275did"](2,212992,null,0,c.SelectableRow,[c.Table,s.DomHandler,c.TableService],{data:[0,"data"]},null),(l()(),e["\u0275eld"](3,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](4,null,["",""])),(l()(),e["\u0275eld"](5,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](6,null,["",""])),(l()(),e["\u0275eld"](7,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](8,null,["",""]))],function(l,n){l(n,2,0,n.context.$implicit)},function(l,n){l(n,0,0,e["\u0275nov"](n,2).isEnabled(),e["\u0275nov"](n,2).selected,e["\u0275nov"](n,2).isEnabled()?0:void 0),l(n,4,0,n.context.$implicit.id),l(n,6,0,n.context.$implicit.name),l(n,8,0,n.context.$implicit.description)})}function N(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,3,"div",[["style","text-align:left"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,2,"button",[["icon","pi pi-plus"],["label","Agregar"],["pButton",""],["type","button"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.showDialogToAdd()&&e),e},null,null)),e["\u0275prd"](512,null,s.DomHandler,s.DomHandler,[]),e["\u0275did"](3,4341760,null,0,p.ButtonDirective,[e.ElementRef,s.DomHandler],{label:[0,"label"],icon:[1,"icon"]},null)],function(l,n){l(n,3,0,"Agregar","pi pi-plus")},null)}function O(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,27,"div",[["class","ui-g ui-fluid"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,8,"div",[["class","col-md-12 mb-3"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,1,"label",[["for","firstName"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["C\xf3digo"])),(l()(),e["\u0275eld"](4,0,null,null,5,"input",[["class","form-control"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var o=!0,t=l.component;return"input"===n&&(o=!1!==e["\u0275nov"](l,5)._handleInput(u.target.value)&&o),"blur"===n&&(o=!1!==e["\u0275nov"](l,5).onTouched()&&o),"compositionstart"===n&&(o=!1!==e["\u0275nov"](l,5)._compositionStart()&&o),"compositionend"===n&&(o=!1!==e["\u0275nov"](l,5)._compositionEnd(u.target.value)&&o),"ngModelChange"===n&&(o=!1!==(t.item.id=u)&&o),o},null,null)),e["\u0275did"](5,16384,null,0,m.DefaultValueAccessor,[e.Renderer2,e.ElementRef,[2,m.COMPOSITION_BUFFER_MODE]],null,null),e["\u0275prd"](1024,null,m.NG_VALUE_ACCESSOR,function(l){return[l]},[m.DefaultValueAccessor]),e["\u0275did"](7,671744,null,0,m.NgModel,[[8,null],[8,null],[8,null],[6,m.NG_VALUE_ACCESSOR]],{isDisabled:[0,"isDisabled"],model:[1,"model"]},{update:"ngModelChange"}),e["\u0275prd"](2048,null,m.NgControl,null,[m.NgModel]),e["\u0275did"](9,16384,null,0,m.NgControlStatus,[[4,m.NgControl]],null,null),(l()(),e["\u0275eld"](10,0,null,null,8,"div",[["class","col-md-12 mb-3"]],null,null,null,null,null)),(l()(),e["\u0275eld"](11,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Nombre"])),(l()(),e["\u0275eld"](13,0,null,null,5,"input",[["class","form-control"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var o=!0,t=l.component;return"input"===n&&(o=!1!==e["\u0275nov"](l,14)._handleInput(u.target.value)&&o),"blur"===n&&(o=!1!==e["\u0275nov"](l,14).onTouched()&&o),"compositionstart"===n&&(o=!1!==e["\u0275nov"](l,14)._compositionStart()&&o),"compositionend"===n&&(o=!1!==e["\u0275nov"](l,14)._compositionEnd(u.target.value)&&o),"ngModelChange"===n&&(o=!1!==(t.item.name=u)&&o),o},null,null)),e["\u0275did"](14,16384,null,0,m.DefaultValueAccessor,[e.Renderer2,e.ElementRef,[2,m.COMPOSITION_BUFFER_MODE]],null,null),e["\u0275prd"](1024,null,m.NG_VALUE_ACCESSOR,function(l){return[l]},[m.DefaultValueAccessor]),e["\u0275did"](16,671744,null,0,m.NgModel,[[8,null],[8,null],[8,null],[6,m.NG_VALUE_ACCESSOR]],{model:[0,"model"]},{update:"ngModelChange"}),e["\u0275prd"](2048,null,m.NgControl,null,[m.NgModel]),e["\u0275did"](18,16384,null,0,m.NgControlStatus,[[4,m.NgControl]],null,null),(l()(),e["\u0275eld"](19,0,null,null,8,"div",[["class","col-md-12 mb-3"]],null,null,null,null,null)),(l()(),e["\u0275eld"](20,0,null,null,1,"label",[["for","firstName"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Descripci\xf3n"])),(l()(),e["\u0275eld"](22,0,null,null,5,"textarea",[["class","form-control"],["rows","2"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var o=!0,t=l.component;return"input"===n&&(o=!1!==e["\u0275nov"](l,23)._handleInput(u.target.value)&&o),"blur"===n&&(o=!1!==e["\u0275nov"](l,23).onTouched()&&o),"compositionstart"===n&&(o=!1!==e["\u0275nov"](l,23)._compositionStart()&&o),"compositionend"===n&&(o=!1!==e["\u0275nov"](l,23)._compositionEnd(u.target.value)&&o),"ngModelChange"===n&&(o=!1!==(t.item.description=u)&&o),o},null,null)),e["\u0275did"](23,16384,null,0,m.DefaultValueAccessor,[e.Renderer2,e.ElementRef,[2,m.COMPOSITION_BUFFER_MODE]],null,null),e["\u0275prd"](1024,null,m.NG_VALUE_ACCESSOR,function(l){return[l]},[m.DefaultValueAccessor]),e["\u0275did"](25,671744,null,0,m.NgModel,[[8,null],[8,null],[8,null],[6,m.NG_VALUE_ACCESSOR]],{model:[0,"model"]},{update:"ngModelChange"}),e["\u0275prd"](2048,null,m.NgControl,null,[m.NgModel]),e["\u0275did"](27,16384,null,0,m.NgControlStatus,[[4,m.NgControl]],null,null)],function(l,n){var u=n.component;l(n,7,0,e["\u0275inlineInterpolate"](1,"",!u.newItem,""),u.item.id),l(n,16,0,u.item.name),l(n,25,0,u.item.description)},function(l,n){l(n,4,0,e["\u0275nov"](n,9).ngClassUntouched,e["\u0275nov"](n,9).ngClassTouched,e["\u0275nov"](n,9).ngClassPristine,e["\u0275nov"](n,9).ngClassDirty,e["\u0275nov"](n,9).ngClassValid,e["\u0275nov"](n,9).ngClassInvalid,e["\u0275nov"](n,9).ngClassPending),l(n,13,0,e["\u0275nov"](n,18).ngClassUntouched,e["\u0275nov"](n,18).ngClassTouched,e["\u0275nov"](n,18).ngClassPristine,e["\u0275nov"](n,18).ngClassDirty,e["\u0275nov"](n,18).ngClassValid,e["\u0275nov"](n,18).ngClassInvalid,e["\u0275nov"](n,18).ngClassPending),l(n,22,0,e["\u0275nov"](n,27).ngClassUntouched,e["\u0275nov"](n,27).ngClassTouched,e["\u0275nov"](n,27).ngClassPristine,e["\u0275nov"](n,27).ngClassDirty,e["\u0275nov"](n,27).ngClassValid,e["\u0275nov"](n,27).ngClassInvalid,e["\u0275nov"](n,27).ngClassPending)})}function T(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,46,"div",[],[[24,"@routerTransition",0]],null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,1,"app-page-header",[],null,null,null,g.b,g.a)),e["\u0275did"](2,114688,null,0,v.a,[],{heading:[0,"heading"],icon:[1,"icon"]},null),(l()(),e["\u0275eld"](3,0,null,null,43,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](4,0,null,null,42,"div",[["class","col-lg-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](5,0,null,null,41,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](6,0,null,null,11,"div",[["class","col-md-4 mb-1"]],null,null,null,null,null)),(l()(),e["\u0275eld"](7,0,null,null,10,"div",[["class","input-group mb-3"]],null,null,null,null,null)),(l()(),e["\u0275eld"](8,0,null,null,6,"input",[["aria-describedby","basic-addon2"],["aria-label","Recipient's username"],["class","form-control"],["placeholder","Buscar"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"keyup.enter"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var o=!0,t=l.component;return"input"===n&&(o=!1!==e["\u0275nov"](l,9)._handleInput(u.target.value)&&o),"blur"===n&&(o=!1!==e["\u0275nov"](l,9).onTouched()&&o),"compositionstart"===n&&(o=!1!==e["\u0275nov"](l,9)._compositionStart()&&o),"compositionend"===n&&(o=!1!==e["\u0275nov"](l,9)._compositionEnd(u.target.value)&&o),"ngModelChange"===n&&(o=!1!==(t.inpBuscar=u)&&o),"keyup.enter"===n&&(o=!1!==t.loadGrid()&&o),o},null,null)),e["\u0275did"](9,16384,null,0,m.DefaultValueAccessor,[e.Renderer2,e.ElementRef,[2,m.COMPOSITION_BUFFER_MODE]],null,null),e["\u0275prd"](1024,null,m.NG_VALUE_ACCESSOR,function(l){return[l]},[m.DefaultValueAccessor]),e["\u0275did"](11,671744,null,0,m.NgModel,[[8,null],[8,null],[8,null],[6,m.NG_VALUE_ACCESSOR]],{model:[0,"model"],options:[1,"options"]},{update:"ngModelChange"}),e["\u0275pod"](12,{standalone:0}),e["\u0275prd"](2048,null,m.NgControl,null,[m.NgModel]),e["\u0275did"](14,16384,null,0,m.NgControlStatus,[[4,m.NgControl]],null,null),(l()(),e["\u0275eld"](15,0,null,null,2,"div",[["class","input-group-append"]],null,null,null,null,null)),(l()(),e["\u0275eld"](16,0,null,null,1,"button",[["class","btn btn-outline-secondary"],["type","button"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.loadGrid()&&e),e},null,null)),(l()(),e["\u0275eld"](17,0,null,null,0,"i",[["class","fa fa-search"]],null,null,null,null,null)),(l()(),e["\u0275eld"](18,0,null,null,28,"div",[["class","col-md-12 mb-3"]],null,null,null,null,null)),(l()(),e["\u0275eld"](19,0,null,null,11,"p-table",[["selectionMode","single"]],null,[[null,"onRowSelect"]],function(l,n,u){var e=!0;return"onRowSelect"===n&&(e=!1!==l.component.onRowSelect(u)&&e),e},f.b,f.a)),e["\u0275prd"](512,null,s.DomHandler,s.DomHandler,[]),e["\u0275prd"](512,null,h.ObjectUtils,h.ObjectUtils,[]),e["\u0275prd"](512,null,c.TableService,c.TableService,[]),e["\u0275did"](23,5488640,null,1,c.Table,[e.ElementRef,s.DomHandler,h.ObjectUtils,e.NgZone,c.TableService],{selectionMode:[0,"selectionMode"],loading:[1,"loading"],value:[2,"value"]},{onRowSelect:"onRowSelect"}),e["\u0275qud"](603979776,1,{templates:1}),(l()(),e["\u0275and"](0,null,null,1,null,E)),e["\u0275did"](26,16384,[[1,4]],0,C.PrimeTemplate,[e.TemplateRef],{name:[0,"name"]},null),(l()(),e["\u0275and"](0,null,null,1,null,R)),e["\u0275did"](28,16384,[[1,4]],0,C.PrimeTemplate,[e.TemplateRef],{name:[0,"name"]},null),(l()(),e["\u0275and"](0,null,null,1,null,N)),e["\u0275did"](30,16384,[[1,4]],0,C.PrimeTemplate,[e.TemplateRef],{name:[0,"name"]},null),(l()(),e["\u0275eld"](31,0,null,null,15,"p-dialog",[["header","Sistema"],["showEffect","fade"]],null,[[null,"visibleChange"]],function(l,n,u){var e=!0;return"visibleChange"===n&&(e=!1!==(l.component.displayDialog=u)&&e),e},b.b,b.a)),e["\u0275prd"](512,null,s.DomHandler,s.DomHandler,[]),e["\u0275did"](33,180224,null,2,D.Dialog,[e.ElementRef,s.DomHandler,e.Renderer2,e.NgZone],{visible:[0,"visible"],header:[1,"header"],width:[2,"width"],modal:[3,"modal"],closable:[4,"closable"],responsive:[5,"responsive"]},{visibleChange:"visibleChange"}),e["\u0275qud"](603979776,2,{headerFacet:1}),e["\u0275qud"](603979776,3,{footerFacet:1}),(l()(),e["\u0275and"](16777216,null,1,1,null,O)),e["\u0275did"](37,16384,null,0,_.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](38,0,null,2,8,"p-footer",[],null,null,null,M.b,M.a)),e["\u0275did"](39,49152,[[3,4]],0,C.Footer,[],null,null),(l()(),e["\u0275eld"](40,0,null,0,6,"div",[["class","ui-dialog-buttonpane ui-helper-clearfix"]],null,null,null,null,null)),(l()(),e["\u0275eld"](41,0,null,null,2,"button",[["class","ui-button-danger"],["icon","pi pi-times"],["label","Eliminar"],["pButton",""],["type","button"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.delete()&&e),e},null,null)),e["\u0275prd"](512,null,s.DomHandler,s.DomHandler,[]),e["\u0275did"](43,4341760,null,0,p.ButtonDirective,[e.ElementRef,s.DomHandler],{label:[0,"label"],icon:[1,"icon"]},null),(l()(),e["\u0275eld"](44,0,null,null,2,"button",[["class","ui-button-success"],["icon","pi pi-check"],["label","Guardar"],["pButton",""],["type","button"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.save()&&e),e},null,null)),e["\u0275prd"](512,null,s.DomHandler,s.DomHandler,[]),e["\u0275did"](46,4341760,null,0,p.ButtonDirective,[e.ElementRef,s.DomHandler],{label:[0,"label"],icon:[1,"icon"]},null)],function(l,n){var u=n.component;l(n,2,0,"Sistemas","fa-edit");var e=u.inpBuscar,o=l(n,12,0,!0);l(n,11,0,e,o),l(n,23,0,"single",u.loading,u.items),l(n,26,0,"header"),l(n,28,0,"body"),l(n,30,0,"summary"),l(n,33,0,u.displayDialog,"Sistema",350,!0,!0,!0),l(n,37,0,u.item),l(n,43,0,"Eliminar","pi pi-times"),l(n,46,0,"Guardar","pi pi-check")},function(l,n){l(n,0,0,void 0),l(n,8,0,e["\u0275nov"](n,14).ngClassUntouched,e["\u0275nov"](n,14).ngClassTouched,e["\u0275nov"](n,14).ngClassPristine,e["\u0275nov"](n,14).ngClassDirty,e["\u0275nov"](n,14).ngClassValid,e["\u0275nov"](n,14).ngClassInvalid,e["\u0275nov"](n,14).ngClassPending)})}function w(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,"app-sistemas",[],null,null,null,T,S)),e["\u0275prd"](512,null,t.a,t.a,[y.c]),e["\u0275did"](2,114688,null,0,a,[t.a],null,null)],function(l,n){l(n,2,0)},null)}var I=e["\u0275ccf"]("app-sistemas",a,w,{},{},[]),A=u("ZYCi"),k=function(){return function(){}}(),U=u("+Sv0"),V=u("nciF"),F=u("mU/a"),P=u("Fa87");u.d(n,"SistemasModuleNgFactory",function(){return H});var H=e["\u0275cmf"](o,[a],function(l){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[r.a,I]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,_.NgLocalization,_.NgLocaleLocalization,[e.LOCALE_ID,[2,_["\u0275angular_packages_common_common_a"]]]),e["\u0275mpd"](4608,m["\u0275angular_packages_forms_forms_j"],m["\u0275angular_packages_forms_forms_j"],[]),e["\u0275mpd"](4608,y.i,y.o,[_.DOCUMENT,e.PLATFORM_ID,y.m]),e["\u0275mpd"](4608,y.p,y.p,[y.i,y.n]),e["\u0275mpd"](5120,y.a,function(l){return[l]},[y.p]),e["\u0275mpd"](4608,y.l,y.l,[]),e["\u0275mpd"](6144,y.j,null,[y.l]),e["\u0275mpd"](4608,y.h,y.h,[y.j]),e["\u0275mpd"](6144,y.b,null,[y.h]),e["\u0275mpd"](4608,y.f,y.k,[y.b,e.Injector]),e["\u0275mpd"](4608,y.c,y.c,[y.f]),e["\u0275mpd"](1073742336,_.CommonModule,_.CommonModule,[]),e["\u0275mpd"](1073742336,A.o,A.o,[[2,A.u],[2,A.l]]),e["\u0275mpd"](1073742336,k,k,[]),e["\u0275mpd"](1073742336,U.a,U.a,[]),e["\u0275mpd"](1073742336,C.SharedModule,C.SharedModule,[]),e["\u0275mpd"](1073742336,V.DropdownModule,V.DropdownModule,[]),e["\u0275mpd"](1073742336,m["\u0275angular_packages_forms_forms_bc"],m["\u0275angular_packages_forms_forms_bc"],[]),e["\u0275mpd"](1073742336,m.FormsModule,m.FormsModule,[]),e["\u0275mpd"](1073742336,F.PaginatorModule,F.PaginatorModule,[]),e["\u0275mpd"](1073742336,c.TableModule,c.TableModule,[]),e["\u0275mpd"](1073742336,y.e,y.e,[]),e["\u0275mpd"](1073742336,y.d,y.d,[]),e["\u0275mpd"](1073742336,P.InputTextModule,P.InputTextModule,[]),e["\u0275mpd"](1073742336,p.ButtonModule,p.ButtonModule,[]),e["\u0275mpd"](1073742336,D.DialogModule,D.DialogModule,[]),e["\u0275mpd"](1073742336,o,o,[]),e["\u0275mpd"](1024,A.j,function(){return[[{path:"",component:a}]]},[]),e["\u0275mpd"](256,y.m,"XSRF-TOKEN",[]),e["\u0275mpd"](256,y.n,"X-XSRF-TOKEN",[])])})}}]);