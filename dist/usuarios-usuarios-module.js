(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["usuarios-usuarios-module"],{

/***/ "./src/app/layout/trabajador/trabajador.component.html":
/*!*************************************************************!*\
  !*** ./src/app/layout/trabajador/trabajador.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <div class=\"row\">\n                <div class=\"col-md-4 mb-0\">\n                    <div class=\"input-group mb-3\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Buscar\" [(ngModel)]=\"inpBuscar\" [ngModelOptions]=\"{standalone: true}\" (keyup.enter)=\"loadGrid()\" aria-label=\"Recipient's username\" aria-describedby=\"basic-addon2\">\n                        <div class=\"input-group-append\">\n                            <button class=\"btn btn-outline-secondary\" type=\"button\" (click)=\"loadGrid()\">\n                                <i class=\"fa fa-search\"></i>\n                            </button>\n                        </div>\n                    </div>\n                </div>  \n                <div class=\"col-md-12 mb-3\">\n                    <p-table [value]=\"items\" selectionMode=\"single\" (onRowSelect)=\"onRowSelect($event)\" [loading]=\"loading\" [loadingIcon]=\"\" \n                      [scrollable]=\"true\" [style]=\"{width:'800px'}\" [paginator]=\"true\" [rows]=\"10\">\n                        <ng-template pTemplate=\"header\">\n                            <tr>\n                                <th style=\"width: 200px\">Nº Documento</th>\n                                <th style=\"width: 200px\">Código </th>\n                                <th style=\"width: 200px\">Nombre</th>\n                                <th style=\"width: 200px\">Ap.Paterno</th>\n                                <th style=\"width: 200px\">Ap.Materno</th>\n                            </tr>\n                        </ng-template>\n                        <ng-template pTemplate=\"body\" let-itemx>\n                            <tr [pSelectableRow]=\"itemx\">\n                                <td style=\"width: 200px\">{{itemx.codigo}}</td>\n                                <td style=\"width: 200px\">{{itemx.codigoCorp}}</td>\n                                <td style=\"width: 200px\">{{itemx.nombre}}</td>\n                                <td style=\"width: 200px\">{{itemx.apePaterno}}</td>\n                                <td style=\"width: 200px\">{{itemx.apeMaterno}}</td>\n                            </tr>\n                        </ng-template>\n                    </p-table>\n\n                    <p-confirmDialog width=\"425\" appendTo=\"body\"> </p-confirmDialog>\n  \n                </div>                        \n            </div>\n        </div>\n    </div>\n  <!-- /.row -->\n  </div>"

/***/ }),

/***/ "./src/app/layout/trabajador/trabajador.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/layout/trabajador/trabajador.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC90cmFiYWphZG9yL3RyYWJhamFkb3IuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/trabajador/trabajador.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/layout/trabajador/trabajador.component.ts ***!
  \***********************************************************/
/*! exports provided: PrimeClass, TrabajadorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrimeClass", function() { return PrimeClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrabajadorComponent", function() { return TrabajadorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _shared_services_trabajador_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/trabajador.service */ "./src/app/shared/services/trabajador.service.ts");
/* harmony import */ var _shared_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/usuario.service */ "./src/app/shared/services/usuario.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_4__);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { EventEmitter } from 'events';
var PrimeClass = /** @class */ (function () {
    function PrimeClass(codigo, name, description) {
        this.codigo = codigo;
        this.name = name;
        this.description = description;
    }
    return PrimeClass;
}());

var TrabajadorComponent = /** @class */ (function () {
    function TrabajadorComponent(service, usuarioService, confirmationService) {
        this.service = service;
        this.usuarioService = usuarioService;
        this.confirmationService = confirmationService;
        this.eventCloseDialog = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.inpBuscar = '';
        this.item = new PrimeClass();
    }
    TrabajadorComponent.prototype.ngOnInit = function () {
        this.loadGrid();
    };
    TrabajadorComponent.prototype.confirmAdd = function (item) {
        var _this = this;
        this.confirmationService.confirm({
            header: 'Confirmación',
            icon: 'pi pi-exclamation-triangle',
            message: '¿Desea Agregar a <b>' + item.nombre + ' ' + item.apePaterno + ' ' + item.apeMaterno + '</b> como usuario(a)?',
            acceptLabel: 'Si',
            rejectLabel: 'No',
            accept: function () {
                var usuario = { userName: item.codigo, codigo: item.codigo, password: 'asdfWER74!' };
                _this.addUsuario(usuario);
                _this.eventCloseDialog.emit(false);
            }
        });
    };
    TrabajadorComponent.prototype.loadGrid = function () {
        this.loading = true;
        this.get(this.inpBuscar);
    };
    TrabajadorComponent.prototype.get = function (busqueda) {
        var _this = this;
        this.service.get(busqueda)
            .subscribe(function (items) {
            _this.items = items;
            console.log('Ok.Component.Read.');
            _this.loading = false;
        }, (function (error) {
            console.log('Error.Component.Read.');
        }));
    };
    TrabajadorComponent.prototype.onRowSelect = function (event) {
        // this.newItem = false;
        this.item = __assign({}, event.data);
        this.confirmAdd(this.item);
    };
    TrabajadorComponent.prototype.addUsuario = function (item) {
        var _this = this;
        this.usuarioService.add(item)
            .subscribe(function (item) {
            _this.loadGrid(); // recarga la grilla
            console.log('Ok.Component.Insert.');
        }, (function (error) {
            console.log('Error.Component.Insert.');
        }));
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TrabajadorComponent.prototype, "eventCloseDialog", void 0);
    TrabajadorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-trabajador',
            template: __webpack_require__(/*! ./trabajador.component.html */ "./src/app/layout/trabajador/trabajador.component.html"),
            styles: [__webpack_require__(/*! ./trabajador.component.scss */ "./src/app/layout/trabajador/trabajador.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()],
            providers: [_shared_services_trabajador_service__WEBPACK_IMPORTED_MODULE_2__["TrabajadorService"], _shared_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"], primeng_api__WEBPACK_IMPORTED_MODULE_4__["ConfirmationService"]]
        }),
        __metadata("design:paramtypes", [_shared_services_trabajador_service__WEBPACK_IMPORTED_MODULE_2__["TrabajadorService"], _shared_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_4__["ConfirmationService"]])
    ], TrabajadorComponent);
    return TrabajadorComponent;
}());



/***/ }),

/***/ "./src/app/layout/usuarios/usuarios-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/layout/usuarios/usuarios-routing.module.ts ***!
  \************************************************************/
/*! exports provided: UsuariosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosRoutingModule", function() { return UsuariosRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _usuarios_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./usuarios.component */ "./src/app/layout/usuarios/usuarios.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _usuarios_component__WEBPACK_IMPORTED_MODULE_2__["UsuariosComponent"]
    }
];
var UsuariosRoutingModule = /** @class */ (function () {
    function UsuariosRoutingModule() {
    }
    UsuariosRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], UsuariosRoutingModule);
    return UsuariosRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/usuarios/usuarios.component.html":
/*!*********************************************************!*\
  !*** ./src/app/layout/usuarios/usuarios.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n    <app-page-header [heading]=\"'Usuarios'\" [icon]=\"'fa-edit'\"></app-page-header>\r\n        \r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-4 mb-1\">\r\n                    <div class=\"input-group mb-3\">\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Buscar\" [(ngModel)]=\"inpBuscar\" [ngModelOptions]=\"{standalone: true}\" (keyup.enter)=\"loadGrid()\" aria-label=\"Recipient's username\" aria-describedby=\"basic-addon2\">\r\n                        <div class=\"input-group-append\">\r\n                            <button class=\"btn btn-outline-secondary\" type=\"button\" (click)=\"loadGrid()\">\r\n                                <i class=\"fa fa-search\"></i>\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </div>  \r\n                <div class=\"col-md-12 mb-3\">\r\n                    <p-table [value]=\"items\" selectionMode=\"single\" (onRowSelect)=\"onRowSelect($event)\" [loading]=\"loading\" [loadingIcon]=\"\" [scrollable]=\"true\">\r\n                        <ng-template pTemplate=\"header\">\r\n                            <tr>\r\n                                <th style=\"width: 60px\">Quitar</th>\r\n                                <th style=\"width: 200px\">Nº Documento</th>\r\n                                <th style=\"width: 200px\">Código </th>\r\n                                <th style=\"width: 200px\">Nombre</th>\r\n                                <th style=\"width: 200px\">Ap.Paterno</th>\r\n                                <th style=\"width: 200px\">Ap.Materno</th>\r\n                            </tr>\r\n                        </ng-template>\r\n                        <ng-template pTemplate=\"body\" let-itemx>\r\n                            <tr [pSelectableRow]=\"itemx\">\r\n                                <td style=\"text-align: center; width: 60px\">\r\n                                    <button pButton icon=\"pi pi-times\" class=\"ui-button-danger\" (click)=\"deleteSelectedItem(itemx)\"></button>\r\n                                </td>\r\n                                <td style=\"width: 200px\">{{itemx.codigo}}</td>\r\n                                <td style=\"width: 200px\">{{itemx.codigoCorp}}</td>\r\n                                <td style=\"width: 200px\">{{itemx.nombre}}</td>\r\n                                <td style=\"width: 200px\">{{itemx.apePaterno}}</td>\r\n                                <td style=\"width: 200px\">{{itemx.apeMaterno}}</td>\r\n                            </tr>\r\n                        </ng-template>\r\n                        <ng-template pTemplate=\"summary\" let-rowData>\r\n                            <div style=\"text-align:left\">\r\n                                <button type=\"button\" pButton icon=\"pi pi-plus\" (click)=\"showDialogToAdd()\" label=\"Agregar\"></button>\r\n                            </div>\r\n                        </ng-template>\r\n                    </p-table>\r\n\r\n                    <p-dialog header=\"Trabajador\" [(visible)]=\"displayDialog\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\" [closable]=\"true\" [width]=\"800\">\r\n                            <app-trabajador (eventCloseDialog)=\"closeDialogHandler($event)\"></app-trabajador>\r\n                    </p-dialog>\r\n                </div>                        \r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /.row -->\r\n</div>\r\n\r\n<p-toast key=\"tst-info\" position=\"center\"></p-toast>\r\n\r\n<p-confirmDialog width=\"425\" appendTo=\"body\"> </p-confirmDialog>"

/***/ }),

/***/ "./src/app/layout/usuarios/usuarios.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/layout/usuarios/usuarios.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC91c3Vhcmlvcy91c3Vhcmlvcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/usuarios/usuarios.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layout/usuarios/usuarios.component.ts ***!
  \*******************************************************/
/*! exports provided: PrimeClass, UsuariosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrimeClass", function() { return PrimeClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosComponent", function() { return UsuariosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _shared_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/usuario.service */ "./src/app/shared/services/usuario.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PrimeClass = /** @class */ (function () {
    function PrimeClass(id, codigo, name, description) {
        this.id = id;
        this.codigo = codigo;
        this.name = name;
        this.description = description;
    }
    return PrimeClass;
}());

var UsuariosComponent = /** @class */ (function () {
    function UsuariosComponent(service, confirmationService, messageService) {
        this.service = service;
        this.confirmationService = confirmationService;
        this.messageService = messageService;
        this.inpBuscar = '';
        this.item = new PrimeClass();
    }
    UsuariosComponent.prototype.ngOnInit = function () {
        this.loadGrid();
    };
    UsuariosComponent.prototype.closeDialogHandler = function (mival) {
        this.displayDialog = mival;
        this.loadGrid();
    };
    UsuariosComponent.prototype.deleteSelectedItem = function (item) {
        this.confirmDelete(item);
    };
    UsuariosComponent.prototype.confirmDelete = function (item) {
        var _this = this;
        this.confirmationService.confirm({
            header: 'Confirmación',
            icon: 'pi pi-exclamation-triangle',
            message: '¿Desea quitar como usuario a <b>' +
                item.nombre + ' ' + item.apePaterno + ' ' + item.apeMaterno + '</b> como usuario(a)?',
            acceptLabel: 'Si',
            rejectLabel: 'No',
            accept: function () {
                _this.delete(item.id);
                //   var usuario: Usuario = { userName:item.codigo, codigo:item.codigo, password:"asdfWER74!" }
                //   this.addUsuario(usuario);
                //   this.eventCloseDialog.emit(false);
            }
        });
    };
    UsuariosComponent.prototype.loadGrid = function () {
        this.loading = true;
        this.get('', this.inpBuscar);
    };
    UsuariosComponent.prototype.showDialogToAdd = function () {
        this.newItem = true;
        this.item = new PrimeClass();
        this.displayDialog = true;
    };
    UsuariosComponent.prototype.save = function () {
        if (this.newItem) {
            this.add(this.item);
        }
        else {
            this.update(this.item);
        }
    };
    UsuariosComponent.prototype.get = function (id, busqueda) {
        var _this = this;
        this.service.get(id, busqueda)
            .subscribe(function (items) {
            _this.items = items;
            console.log('Ok.Component.Read.');
            _this.loading = false;
        }, (function (error) {
            console.log('Error.Component.Read.');
        }));
    };
    UsuariosComponent.prototype.add = function (item) {
        var _this = this;
        this.service.add(item)
            .subscribe(function (item) {
            _this.loadGrid(); // recarga la grilla
            console.log('Ok.Component.Insert.');
            _this.item = null;
            _this.displayDialog = false;
        }, (function (error) {
            console.log('Error.Component.Insert.');
        }));
    };
    UsuariosComponent.prototype.update = function (item) {
        var _this = this;
        this.service.update(item)
            .subscribe(function (item) {
            _this.loadGrid(); // recarga la grilla
            console.log('Ok.Component.Update');
            _this.item = null;
            _this.displayDialog = false;
        }, (function (error) {
            console.log('Error.Component.Update.');
        }));
    };
    UsuariosComponent.prototype.delete = function (id) {
        var _this = this;
        this.service.delete(id)
            .subscribe(function (item) {
            console.log('Ok.Component.Delete');
            _this.item = null;
            _this.displayDialog = false;
            _this.messageService.add({ key: 'tst-info', severity: 'warn', summary: 'Advertencia', detail: 'Permiso eliminado.' });
            _this.loadGrid();
        }, (function (error) {
            console.log('Error.Component.Delete');
        }));
    };
    UsuariosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-usuarios',
            template: __webpack_require__(/*! ./usuarios.component.html */ "./src/app/layout/usuarios/usuarios.component.html"),
            styles: [__webpack_require__(/*! ./usuarios.component.scss */ "./src/app/layout/usuarios/usuarios.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()],
            providers: [_shared_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"], primeng_api__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"], primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"]]
        }),
        __metadata("design:paramtypes", [_shared_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"], primeng_api__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"]])
    ], UsuariosComponent);
    return UsuariosComponent;
}());



/***/ }),

/***/ "./src/app/layout/usuarios/usuarios.module.ts":
/*!****************************************************!*\
  !*** ./src/app/layout/usuarios/usuarios.module.ts ***!
  \****************************************************/
/*! exports provided: UsuariosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosModule", function() { return UsuariosModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _usuarios_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./usuarios-routing.module */ "./src/app/layout/usuarios/usuarios-routing.module.ts");
/* harmony import */ var _usuarios_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./usuarios.component */ "./src/app/layout/usuarios/usuarios.component.ts");
/* harmony import */ var _trabajador_trabajador_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../trabajador/trabajador.component */ "./src/app/layout/trabajador/trabajador.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/dialog.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/inputtext.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/confirmdialog */ "./node_modules/primeng/confirmdialog.js");
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/toast.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_toast__WEBPACK_IMPORTED_MODULE_13__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var UsuariosModule = /** @class */ (function () {
    function UsuariosModule() {
    }
    UsuariosModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _usuarios_routing_module__WEBPACK_IMPORTED_MODULE_2__["UsuariosRoutingModule"],
                _shared__WEBPACK_IMPORTED_MODULE_5__["PageHeaderModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_6__["TableModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__["InputTextModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_9__["ButtonModule"],
                primeng_dialog__WEBPACK_IMPORTED_MODULE_10__["DialogModule"],
                primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_12__["ConfirmDialogModule"],
                primeng_toast__WEBPACK_IMPORTED_MODULE_13__["ToastModule"]
            ],
            declarations: [_usuarios_component__WEBPACK_IMPORTED_MODULE_3__["UsuariosComponent"], _trabajador_trabajador_component__WEBPACK_IMPORTED_MODULE_4__["TrabajadorComponent"]],
            bootstrap: [_usuarios_component__WEBPACK_IMPORTED_MODULE_3__["UsuariosComponent"]]
        })
    ], UsuariosModule);
    return UsuariosModule;
}());



/***/ })

}]);
//# sourceMappingURL=usuarios-usuarios-module.js.map