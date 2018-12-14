(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["perfiles-perfiles-module"],{

/***/ "./src/app/layout/perfiles/perfiles-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/layout/perfiles/perfiles-routing.module.ts ***!
  \************************************************************/
/*! exports provided: PerfilesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilesRoutingModule", function() { return PerfilesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _perfiles_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./perfiles.component */ "./src/app/layout/perfiles/perfiles.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _perfiles_component__WEBPACK_IMPORTED_MODULE_2__["PerfilesComponent"]
    }
];
var PerfilesRoutingModule = /** @class */ (function () {
    function PerfilesRoutingModule() {
    }
    PerfilesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], PerfilesRoutingModule);
    return PerfilesRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/perfiles/perfiles.component.html":
/*!*********************************************************!*\
  !*** ./src/app/layout/perfiles/perfiles.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n    <app-page-header [heading]=\"'Perfiles'\" [icon]=\"'fa-edit'\"></app-page-header>\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-4 mb-1\">\r\n                    <div class=\"input-group mb-3\">\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Buscar\" [(ngModel)]=\"inpBuscar\" [ngModelOptions]=\"{standalone: true}\" (keyup.enter)=\"loadGrid()\" aria-label=\"Recipient's username\" aria-describedby=\"basic-addon2\">\r\n                        <div class=\"input-group-append\">\r\n                            <button class=\"btn btn-outline-secondary\" type=\"button\" (click)=\"loadGrid()\">\r\n                                <i class=\"fa fa-search\"></i>\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </div>  \r\n                <div class=\"col-md-12 mb-3\">\r\n                    <!-- [loadingIcon]=\"\" TENEMOS QUE ESTABLECER UNA CLASE PERSONALIZADA QUE EXISTA (LA CREAMOS) DE LO CONTRARIO NO MOSTRARA NADA-->\r\n                    <p-table [value]=\"items\" selectionMode=\"single\" (onRowSelect)=\"onRowSelect($event)\" [loading]=\"loading\" [loadingIcon]=\"\">\r\n                        <ng-template pTemplate=\"header\">\r\n                            <tr>\r\n                                <th style=\"width:120px\">Operación</th>\r\n                                <th>Codigo</th>\r\n                                <th>Nombre</th>\r\n                                <th>Descripción</th>\r\n                            </tr>\r\n                        </ng-template>\r\n                        <ng-template pTemplate=\"body\" let-itemx>\r\n                            <tr [pSelectableRow]=\"itemx\">\r\n                                <td style=\"text-align: center; width:120px\">\r\n                                    <button pButton icon=\"pi pi-unlock\" (click)=\"selectPerfilPermisos(itemx)\" title=\"Establecer permisos\"></button>\r\n                                    &nbsp;\r\n                                    <button pButton icon=\"pi pi-user\" (click)=\"selectPerfilUsuarios(itemx)\" title=\"Establecer usuarios\"></button>\r\n                                </td>\r\n                                <td>{{itemx.id}}</td>\r\n                                <td>{{itemx.customName}}</td>\r\n                                <td>{{itemx.description}}</td>\r\n                            </tr>\r\n                        </ng-template>\r\n                        <ng-template pTemplate=\"summary\" let-rowData>\r\n                            <div style=\"text-align:left\">\r\n                                <button type=\"button\" pButton icon=\"pi pi-plus\" (click)=\"showDialogToAdd()\" label=\"Agregar\"></button>\r\n                            </div>\r\n                        </ng-template>\r\n                    </p-table>\r\n    \r\n                    <p-dialog header=\"Perfil\" [(visible)]=\"displayDialog\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\" [closable]=\"true\" [width]=\"350\">\r\n                        <div class=\"ui-g ui-fluid\" *ngIf=\"item\">\r\n                            <div class=\"col-md-12 mb-3\">\r\n                                <label>Código </label>\r\n                                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"item.id\" disabled>\r\n                            </div>\r\n                            <div class=\"col-md-12 mb-3\">\r\n                                <label>Nombre <b style=\"color:red\">*</b></label>\r\n                                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"item.customName\">\r\n                            </div>\r\n\r\n                            <div class=\"col-md-12 mb-3\">\r\n                                <label>Sistema <b style=\"color:red\">*</b></label>\r\n                                <select class=\"form-control\" [(ngModel)]=\"item.systemAppId\">\r\n                                    <option [value]=\"sistema.id\" *ngFor=\"let sistema of sistemas\">{{sistema.name}}</option>\r\n                                </select>\r\n                            </div>\r\n\r\n                            <div class=\"col-md-12 mb-3\">\r\n                                <label>Descripción <b style=\"color:red\">*</b></label>\r\n                                <textarea class=\"form-control\" rows=\"2\" [(ngModel)]=\"item.description\"></textarea>\r\n                            </div>\r\n                        </div>\r\n    \r\n                        <p-footer>\r\n                            <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\r\n                                <!-- <button type=\"button\" pButton icon=\"pi pi-times\" (click)=\"delete()\" label=\"Eliminar\" class=\"ui-button-danger\"></button> -->\r\n                                <button type=\"button\" pButton icon=\"pi pi-check\" (click)=\"save()\" label=\"Guardar\" class=\"ui-button-success\"></button>\r\n                            </div>\r\n                        </p-footer>\r\n                    </p-dialog>\r\n                </div>                        \r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /.row -->\r\n</div>\r\n\r\n<!-- <app-trabajador (eventCloseDialog)=\"closeDialogHandler($event)\"></app-trabajador> -->\r\n<!-- <p-dialog header=\"Permisos del perfil: TTT\" [(visible)]=\"displayDialogPerfil\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\" [closable]=\"true\" [width]=\"800\"> -->\r\n<p-dialog [header]=\"headerDialogPermisos\" [(visible)]=\"displayDialogPerfil\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\" [closable]=\"true\" [width]=\"800\">\r\n        <app-permisos></app-permisos>\r\n</p-dialog>\r\n\r\n<p-dialog [header]=\"headerDialogUsuarios\" [(visible)]=\"displayDialogUsuario\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\" [closable]=\"true\" [width]=\"800\">\r\n    <!-- <app-usuarios></app-usuarios> -->\r\n    <!-- <div class=\"col-md-4 mb-1\">\r\n        <div class=\"input-group mb-3\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Buscar\" [(ngModel)]=\"inpBuscar\" [ngModelOptions]=\"{standalone: true}\" (keyup.enter)=\"loadGrid()\" aria-label=\"Recipient's username\" aria-describedby=\"basic-addon2\">\r\n            <div class=\"input-group-append\">\r\n                <button class=\"btn btn-outline-secondary\" type=\"button\" (click)=\"loadGrid()\">\r\n                    <i class=\"fa fa-search\"></i>\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>   -->\r\n    <div class=\"col-md-12 mb-3\">\r\n        <p-table [value]=\"usuarios\" selectionMode=\"single\" [loading]=\"loading\" [loadingIcon]=\"\" [scrollable]=\"true\">\r\n            <ng-template pTemplate=\"header\">\r\n                <tr>\r\n                    <th style=\"width: 60px\">Quitar</th>\r\n                    <th style=\"width: 200px\">Nº Documento</th>\r\n                    <th style=\"width: 200px\">Código </th>\r\n                    <th style=\"width: 200px\">Nombre</th>\r\n                    <th style=\"width: 200px\">Ap.Paterno</th>\r\n                    <th style=\"width: 200px\">Ap.Materno</th>\r\n                </tr>\r\n            </ng-template>\r\n            <ng-template pTemplate=\"body\" let-itemx>\r\n                <tr [pSelectableRow]=\"itemx\">\r\n                    <td style=\"text-align: center; width: 60px\">\r\n                        <button pButton icon=\"pi pi-times\" class=\"ui-button-danger\" (click)=\"deleteSelectedUsuario(itemx)\"></button>\r\n                    </td>\r\n                    <td style=\"width: 200px\">{{itemx.codigo}}</td>\r\n                    <td style=\"width: 200px\">{{itemx.codigoCorp}}</td>\r\n                    <td style=\"width: 200px\">{{itemx.nombre}}</td>\r\n                    <td style=\"width: 200px\">{{itemx.apePaterno}}</td>\r\n                    <td style=\"width: 200px\">{{itemx.apeMaterno}}</td>\r\n                </tr>\r\n            </ng-template>\r\n            <ng-template pTemplate=\"summary\" let-rowData>\r\n                <div style=\"text-align:left\">\r\n                    <button type=\"button\" pButton icon=\"pi pi-plus\" (click)=\"showDialogUsuarioGen()\" label=\"Agregar\"></button>\r\n                </div>\r\n            </ng-template>\r\n        </p-table>\r\n\r\n\r\n        <!-- <p-dialog header=\"Trabajador\" [(visible)]=\"displayDialogTrabajador\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\" [closable]=\"true\" [width]=\"800\">\r\n                <app-trabajador (eventCloseDialog)=\"closeDialogHandler($event)\"></app-trabajador>\r\n        </p-dialog> -->\r\n    </div>            \r\n</p-dialog>\r\n\r\n<p-dialog [header]=\"headerDialogUsuariosGen\" [(visible)]=\"displayDialogUsuarioGen\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\" [closable]=\"true\" [width]=\"800\" appendTo=\"body\">\r\n    <div class=\"col-md-12 mb-3\">\r\n        <p-table [value]=\"usuariosGen\" selectionMode=\"single\" (onRowSelect)=\"onRowSelectUsuarioGen($event)\" [loading]=\"loading\" [loadingIcon]=\"\" [scrollable]=\"true\">\r\n            <ng-template pTemplate=\"header\">\r\n                <tr>\r\n                    <th style=\"width: 200px\">Nº Documento</th>\r\n                    <th style=\"width: 200px\">Código </th>\r\n                    <th style=\"width: 200px\">Nombre</th>\r\n                    <th style=\"width: 200px\">Ap.Paterno</th>\r\n                    <th style=\"width: 200px\">Ap.Materno</th>\r\n                </tr>\r\n            </ng-template>\r\n            <ng-template pTemplate=\"body\" let-itemx>\r\n                <tr [pSelectableRow]=\"itemx\">\r\n                    <td style=\"width: 200px\">{{itemx.codigo}}</td>\r\n                    <td style=\"width: 200px\">{{itemx.codigoCorp}}</td>\r\n                    <td style=\"width: 200px\">{{itemx.nombre}}</td>\r\n                    <td style=\"width: 200px\">{{itemx.apePaterno}}</td>\r\n                    <td style=\"width: 200px\">{{itemx.apeMaterno}}</td>\r\n                </tr>\r\n            </ng-template>\r\n        </p-table>\r\n    </div> \r\n\r\n</p-dialog>\r\n\r\n<p-toast key=\"tst-info\" position=\"center\"></p-toast>\r\n\r\n<p-confirmDialog width=\"425\" appendTo=\"body\"> </p-confirmDialog>"

/***/ }),

/***/ "./src/app/layout/perfiles/perfiles.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/layout/perfiles/perfiles.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9wZXJmaWxlcy9wZXJmaWxlcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/perfiles/perfiles.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layout/perfiles/perfiles.component.ts ***!
  \*******************************************************/
/*! exports provided: PrimeClass, PerfilesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrimeClass", function() { return PrimeClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilesComponent", function() { return PerfilesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _shared_services_perfil_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/perfil.service */ "./src/app/shared/services/perfil.service.ts");
/* harmony import */ var _shared_services_sistema_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/sistema.service */ "./src/app/shared/services/sistema.service.ts");
/* harmony import */ var _shared_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/usuario.service */ "./src/app/shared/services/usuario.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _permisos_permisos_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../permisos/permisos.component */ "./src/app/layout/permisos/permisos.component.ts");
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








var PrimeClass = /** @class */ (function () {
    function PrimeClass(id, name, customName, systemAppId, description) {
        this.id = id;
        this.name = name;
        this.customName = customName;
        this.systemAppId = systemAppId;
        this.description = description;
    }
    return PrimeClass;
}());

var PerfilesComponent = /** @class */ (function () {
    function PerfilesComponent(service, sistemaService, usuarioService, messageService, confirmationService) {
        this.service = service;
        this.sistemaService = sistemaService;
        this.usuarioService = usuarioService;
        this.messageService = messageService;
        this.confirmationService = confirmationService;
        this.inpBuscar = '';
        this.item = new PrimeClass();
        this.selectedItem = new PrimeClass();
        this.headerDialogPermisos = '';
        this.headerDialogUsuarios = 'Usuarios';
        this.headerDialogUsuariosGen = 'Todos los usuarios';
    }
    PerfilesComponent.prototype.ngAfterViewInit = function () {
        // this.permisosComponent.loadGrid();
        // this.permisosComponent.loading = true;
    };
    PerfilesComponent.prototype.ngOnInit = function () {
        this.loadGrid();
        this.getSistemas(0, '');
    };
    PerfilesComponent.prototype.selectPerfilPermisos = function (selectedItem) {
        console.log(selectedItem);
        this.permisosComponent.roleId = selectedItem.id;
        this.permisosComponent.loadGrid('');
        this.headerDialogPermisos = 'Permisos del perfil: ' + selectedItem.name;
        this.displayDialogPerfil = true;
    };
    // selectPerfilUsuarios(selectedItem: Perfil) {
    //     console.log(selectedItem);
    //     this.loadGridUsuarios(selectedItem.id);
    //     this.displayDialogUsuario = true;
    // }
    PerfilesComponent.prototype.selectPerfilUsuarios = function (perfil) {
        this.selectedItem = perfil;
        console.log(this.selectedItem);
        this.loadGridUsuarios(this.selectedItem.id);
        this.displayDialogUsuario = true;
    };
    PerfilesComponent.prototype.deleteSelectedUsuario = function (usuario) {
        var _this = this;
        this.confirmationService.confirm({
            header: 'Confirmación',
            icon: 'pi pi-exclamation-triangle',
            message: '¿Desea quitar al usuario a <b>' +
                usuario.nombre + ' ' + usuario.apePaterno + ' ' + usuario.apeMaterno + '</b> ?',
            acceptLabel: 'Si',
            rejectLabel: 'No',
            accept: function () {
                var perfilUsuario = { roleId: _this.selectedItem.name, userId: usuario.id };
                _this.deleteUser(perfilUsuario);
            }
        });
    };
    PerfilesComponent.prototype.loadGrid = function () {
        this.loading = true;
        this.get('', this.inpBuscar);
    };
    PerfilesComponent.prototype.loadGridUsuarios = function (roleId) {
        this.loadingUsuarios = true;
        this.getUsers(roleId);
    };
    PerfilesComponent.prototype.loadGridUsuariosGen = function (id, busqueda) {
        this.loadingUsuariosGen = true;
        this.getUsersGen(id, busqueda);
    };
    PerfilesComponent.prototype.showDialogToAdd = function () {
        this.newItem = true;
        this.item = new PrimeClass();
        this.displayDialog = true;
    };
    PerfilesComponent.prototype.showDialogUsuarioGen = function () {
        this.loadGridUsuariosGen('', '');
        this.displayDialogUsuarioGen = true;
    };
    PerfilesComponent.prototype.onRowSelect = function (event) {
        this.newItem = false;
        this.item = __assign({}, event.data);
        this.displayDialog = true;
    };
    PerfilesComponent.prototype.onRowSelectUsuarioGen = function (event) {
        var _this = this;
        console.log(event);
        this.confirmationService.confirm({
            header: 'Confirmación',
            icon: 'pi pi-exclamation-triangle',
            message: '¿Desea agregar al usuario a <b>' +
                event.data.nombre + ' ' + event.data.apePaterno + ' ' + event.data.apeMaterno + '</b> ?',
            acceptLabel: 'Si',
            rejectLabel: 'No',
            accept: function () {
                var perfilUsuario = { roleId: _this.selectedItem.name, userId: event.data.id };
                _this.addUser(perfilUsuario);
            }
        });
    };
    PerfilesComponent.prototype.validation = function () {
        if (this.item.customName == null || this.item.systemAppId == null || this.item.description == null) {
            return false;
        }
        if (this.item.customName.trim() === '' || this.item.systemAppId.trim() === '' || this.item.description.trim() === '') {
            return false;
        }
        return true;
    };
    PerfilesComponent.prototype.getSistemas = function (id, busqueda) {
        var _this = this;
        this.sistemaService.get(id, this.inpBuscar)
            .subscribe(function (items) {
            _this.sistemas = items;
            console.log('Ok.Component.Read.');
            _this.loading = false;
        }, (function (error) {
            console.log('Error.Component.Read.');
        }));
    };
    PerfilesComponent.prototype.getUsers = function (roleId) {
        var _this = this;
        this.service.getUsers(roleId)
            .subscribe(function (items) {
            _this.usuarios = items;
            console.log('Ok.Component.Read.');
            _this.loadingUsuarios = false;
        }, (function (error) {
            console.log('Error.Component.Read.');
        }));
    };
    // ME QUEDE AQUIE EN PROBAR ESTO
    PerfilesComponent.prototype.getUsersGen = function (id, busqueda) {
        var _this = this;
        this.usuarioService.get(id, busqueda)
            .subscribe(function (items) {
            _this.usuariosGen = items;
            console.log('Ok.Component.Read.');
            _this.loadingUsuarios = false;
        }, (function (error) {
            console.log('Error.Component.Read.');
        }));
    };
    PerfilesComponent.prototype.save = function () {
        if (this.validation()) {
            this.item.name = this.item.customName + '-' + this.item.systemAppId;
            if (this.newItem) {
                this.add(this.item);
            }
            else {
                this.update(this.item);
            }
        }
        else {
            this.messageService.add({ key: 'tst-info', severity: 'info', detail: 'Los campos con asterisco (*) son obligatorios.' });
        }
    };
    PerfilesComponent.prototype.get = function (id, busqueda) {
        var _this = this;
        this.service.get(id, this.inpBuscar)
            .subscribe(function (items) {
            _this.items = items;
            console.log('Ok.Component.Read.');
            _this.loading = false;
        }, (function (error) {
            console.log('Error.Component.Read.');
        }));
    };
    PerfilesComponent.prototype.add = function (item) {
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
    PerfilesComponent.prototype.addUser = function (item) {
        var _this = this;
        this.service.addUser(item)
            .subscribe(function (item) {
            _this.messageService.add({ key: 'tst-info', severity: 'info', detail: 'Se agregó el usuario al perfil.' });
            _this.loadGridUsuarios(_this.selectedItem.id); // recarga la grilla
            console.log('Ok.Component.Insert.');
            // this.item = null;
            _this.displayDialogUsuarioGen = false;
        }, (function (error) {
            console.log('Error.Component.Insert.');
        }));
    };
    PerfilesComponent.prototype.update = function (item) {
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
    PerfilesComponent.prototype.delete = function () { };
    PerfilesComponent.prototype.deleteUser = function (item) {
        var _this = this;
        this.service.deleteUser(item)
            .subscribe(function (item) {
            _this.messageService.add({ key: 'tst-info', severity: 'warn', detail: 'Se eliminó el usuario al perfil.' });
            _this.loadGridUsuarios(_this.selectedItem.id);
            console.log('Ok.Component.Delete');
            // this.item = null;
        }, (function (error) {
            console.log('Error.Component.Delete');
        }));
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_permisos_permisos_component__WEBPACK_IMPORTED_MODULE_6__["PermisosComponent"]),
        __metadata("design:type", _permisos_permisos_component__WEBPACK_IMPORTED_MODULE_6__["PermisosComponent"])
    ], PerfilesComponent.prototype, "permisosComponent", void 0);
    PerfilesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-perfiles',
            template: __webpack_require__(/*! ./perfiles.component.html */ "./src/app/layout/perfiles/perfiles.component.html"),
            styles: [__webpack_require__(/*! ./perfiles.component.scss */ "./src/app/layout/perfiles/perfiles.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()],
            providers: [_shared_services_perfil_service__WEBPACK_IMPORTED_MODULE_2__["PerfilService"], _shared_services_sistema_service__WEBPACK_IMPORTED_MODULE_3__["SistemaService"], _shared_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"],
                primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"], primeng_api__WEBPACK_IMPORTED_MODULE_5__["ConfirmationService"]]
        }),
        __metadata("design:paramtypes", [_shared_services_perfil_service__WEBPACK_IMPORTED_MODULE_2__["PerfilService"], _shared_services_sistema_service__WEBPACK_IMPORTED_MODULE_3__["SistemaService"],
            _shared_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"], primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_5__["ConfirmationService"]])
    ], PerfilesComponent);
    return PerfilesComponent;
}());



/***/ }),

/***/ "./src/app/layout/perfiles/perfiles.module.ts":
/*!****************************************************!*\
  !*** ./src/app/layout/perfiles/perfiles.module.ts ***!
  \****************************************************/
/*! exports provided: PerfilesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilesModule", function() { return PerfilesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _perfiles_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./perfiles-routing.module */ "./src/app/layout/perfiles/perfiles-routing.module.ts");
/* harmony import */ var _perfiles_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./perfiles.component */ "./src/app/layout/perfiles/perfiles.component.ts");
/* harmony import */ var _permisos_permisos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../permisos/permisos.component */ "./src/app/layout/permisos/permisos.component.ts");
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





// import { UsuariosComponent } from  './../usuarios/usuarios.component';
// import { TrabajadorComponent } from  './../trabajador/trabajador.component'; // en prueba









var PerfilesModule = /** @class */ (function () {
    function PerfilesModule() {
    }
    PerfilesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _perfiles_routing_module__WEBPACK_IMPORTED_MODULE_2__["PerfilesRoutingModule"],
                _shared__WEBPACK_IMPORTED_MODULE_5__["PageHeaderModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_6__["TableModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__["InputTextModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_9__["ButtonModule"],
                primeng_dialog__WEBPACK_IMPORTED_MODULE_10__["DialogModule"],
                primeng_toast__WEBPACK_IMPORTED_MODULE_13__["ToastModule"],
                primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_12__["ConfirmDialogModule"]
            ],
            declarations: [
                _perfiles_component__WEBPACK_IMPORTED_MODULE_3__["PerfilesComponent"], _permisos_permisos_component__WEBPACK_IMPORTED_MODULE_4__["PermisosComponent"]
                // UsuariosComponent, 
                // TrabajadorComponent
            ],
            bootstrap: [_perfiles_component__WEBPACK_IMPORTED_MODULE_3__["PerfilesComponent"]]
        })
    ], PerfilesModule);
    return PerfilesModule;
}());



/***/ }),

/***/ "./src/app/layout/permisos/permisos.component.html":
/*!*********************************************************!*\
  !*** ./src/app/layout/permisos/permisos.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <div class=\"row\">\n\n                <!-- Esta busqueda esta pendiente de implementar -->\n                <!-- <div class=\"col-md-4 mb-1\">\n                    <div class=\"input-group mb-3\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Buscar\" [(ngModel)]=\"inpBuscar\" [ngModelOptions]=\"{standalone: true}\" (keyup.enter)=\"loadGrid()\" aria-label=\"Recipient's username\" aria-describedby=\"basic-addon2\">\n                        <div class=\"input-group-append\">\n                            <button class=\"btn btn-outline-secondary\" type=\"button\" (click)=\"loadGrid()\">\n                                <i class=\"fa fa-search\"></i>\n                            </button>\n                        </div>\n                    </div>\n                </div>   -->\n\n                <div class=\"col-md-12 mb-3\">\n                    <p-table [value]=\"items\" selectionMode=\"single\" [loading]=\"loading\" [loadingIcon]=\"\">\n                        <ng-template pTemplate=\"header\">\n                            <tr>\n                                <th style=\"width:80px\">Quitar</th>\n                                <th>Codigo</th>\n                                <th>Nombre</th>\n                                <th>Acción</th>\n                            </tr>\n                        </ng-template>\n                        <ng-template pTemplate=\"body\" let-itemx>\n                            <tr [pSelectableRow]=\"itemx\">\n                                <td style=\"text-align: center\">\n                                    <button pButton icon=\"pi pi-times\" class=\"ui-button-danger\" (click)=\"deleteSelectedItem(itemx)\"></button>\n                                </td>\n                                <td>{{itemx.resource.id}}</td>\n                                <td>{{itemx.resource.name}}</td>\n                                <td>{{itemx.permissionDetails[0].permissionAction.name}}</td>\n                            </tr>\n                        </ng-template>\n                        <ng-template pTemplate=\"summary\" let-rowData>\n                            <div style=\"text-align:left\">\n                                <button type=\"button\" pButton icon=\"pi pi-plus\" (click)=\"showDialogToAdd()\" label=\"Agregar\"></button>\n                            </div>\n                        </ng-template>\n                    </p-table>\n                </div>                        \n            </div>\n        </div>\n    </div>\n<!-- /.row -->\n</div>\n\n<p-dialog header=\"Seleccione un recurso\" [(visible)]=\"displayDialog\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\" [closable]=\"true\" [width]=\"800\" appendTo=\"body\">\n    <div class=\"col-md-4 mb-1\">\n        <div class=\"input-group mb-3\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Buscar\" [(ngModel)]=\"inpBuscarRecursos\" [ngModelOptions]=\"{standalone: true}\" (keyup.enter)=\"loadGrid()\" aria-label=\"Recipient's username\" aria-describedby=\"basic-addon2\">\n            <div class=\"input-group-append\">\n                <button class=\"btn btn-outline-secondary\" type=\"button\" (click)=\"loadGridRecursos()\">\n                    <i class=\"fa fa-search\"></i>\n                </button>\n            </div>\n        </div>\n    </div>  \n    <div class=\"col-md-12 mb-3\">\n        <p-table [value]=\"recursos\" selectionMode=\"single\" (onRowSelect)=\"onRowSelect($event)\" [loading]=\"loading\" [loadingIcon]=\"\">\n            <ng-template pTemplate=\"header\">\n                <tr>\n                    <th>Codigo</th>\n                    <th>Nombre</th>\n                </tr>\n            </ng-template>\n            <ng-template pTemplate=\"body\" let-itemx>\n                <tr [pSelectableRow]=\"itemx\">\n                    <td>{{itemx.id}}</td>\n                    <td>{{itemx.name}}</td>\n                </tr>\n            </ng-template>\n        </p-table>\n    </div> \n</p-dialog>\n\n<p-dialog header=\"Seleccione una acción de permiso\" [(visible)]=\"displayDialogAccion\" [responsive]=\"true\" showEffect=\"fade\" \n    [modal]=\"true\" [closable]=\"true\" [width]=\"350\" appendTo=\"body\">\n    \n        <div class=\"ui-g ui-fluid\">\n            <div class=\"col-md-12 mb-3\">\n                <!-- <label for=\"firstName\">Acción de permiso</label> -->\n                <select class=\"form-control\" [(ngModel)]=\"selAccionPermiso\">\n                    <option [value]=\"accionPermiso.id\" *ngFor=\"let accionPermiso of accionesPermiso\">{{accionPermiso.name}}</option>\n                </select>\n            </div>\n        </div>\n\n        <p-footer>\n            <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\n                <!-- <button type=\"button\" pButton icon=\"pi pi-times\" (click)=\"delete()\" label=\"Eliminar\" class=\"ui-button-danger\"></button> -->\n                <button type=\"button\" pButton icon=\"pi pi-check\" (click)=\"save()\" label=\"Aceptar\" class=\"ui-button-success\"></button>\n            </div>\n        </p-footer>\n</p-dialog>\n\n<p-toast key=\"tst-info\" position=\"center\"></p-toast>"

/***/ }),

/***/ "./src/app/layout/permisos/permisos.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/layout/permisos/permisos.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9wZXJtaXNvcy9wZXJtaXNvcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/permisos/permisos.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layout/permisos/permisos.component.ts ***!
  \*******************************************************/
/*! exports provided: PrimeClass, RecursoPrimeClass, DetallePermisoPrimeClass, PermisosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrimeClass", function() { return PrimeClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecursoPrimeClass", function() { return RecursoPrimeClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallePermisoPrimeClass", function() { return DetallePermisoPrimeClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermisosComponent", function() { return PermisosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _shared_services_permiso_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/permiso.service */ "./src/app/shared/services/permiso.service.ts");
/* harmony import */ var _shared_services_recurso_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/recurso.service */ "./src/app/shared/services/recurso.service.ts");
/* harmony import */ var _shared_services_accion_permiso_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/accion-permiso.service */ "./src/app/shared/services/accion-permiso.service.ts");
/* harmony import */ var _shared_services_detalle_permiso__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/detalle-permiso */ "./src/app/shared/services/detalle-permiso.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_6__);
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







var PrimeClass = /** @class */ (function () {
    function PrimeClass(id, roleId, resourceId, resource) {
        this.id = id;
        this.roleId = roleId;
        this.resourceId = resourceId;
        this.resource = resource;
    }
    return PrimeClass;
}());

var RecursoPrimeClass = /** @class */ (function () {
    function RecursoPrimeClass(id, name, description) {
        this.id = id;
        this.name = name;
        this.description = description;
    }
    return RecursoPrimeClass;
}());

var DetallePermisoPrimeClass = /** @class */ (function () {
    function DetallePermisoPrimeClass(id, description, permissionId, permissionActionId) {
        this.id = id;
        this.description = description;
        this.permissionId = permissionId;
        this.permissionActionId = permissionActionId;
    }
    return DetallePermisoPrimeClass;
}());

var PermisosComponent = /** @class */ (function () {
    function PermisosComponent(service, recursoService, accionPermisoService, detallePermisoService, messageService) {
        this.service = service;
        this.recursoService = recursoService;
        this.accionPermisoService = accionPermisoService;
        this.detallePermisoService = detallePermisoService;
        this.messageService = messageService;
        this.inpBuscar = "";
        this.inpBuscarRecursos = "";
        this.item = new PrimeClass();
        this.recurso = new RecursoPrimeClass();
        this.roleId = "";
    }
    PermisosComponent.prototype.ngOnInit = function () {
        // this.loadGrid();    
        this.getAccionesPermiso('');
    };
    PermisosComponent.prototype.loadGrid = function (busqueda) {
        this.loading = true;
        this.get(this.roleId);
    };
    PermisosComponent.prototype.loadGridRecursos = function () {
        this.loadingRecursos = true;
        this.getRecursos(this.inpBuscarRecursos);
    };
    PermisosComponent.prototype.showDialogToAdd = function () {
        //   this.newItem = true;
        //   this.item = new PrimeClass();
        this.loadGridRecursos();
        this.displayDialog = true;
    };
    PermisosComponent.prototype.onRowSelect = function (event) {
        //   this.newItem = false;
        this.recurso = __assign({}, event.data);
        //this.displayDialog = true;
        this.displayDialogAccion = true;
        console.log("onRowSelect");
        console.log(this.item);
        // this.save(this.item);
    };
    PermisosComponent.prototype.deleteSelectedItem = function (algo) {
        console.log(algo);
        this.deleteDetallePermiso(algo.permissionDetails[0].id);
        //this.messageService.add({key: 'tst-info', severity:'warn', summary: 'Advertencia', detail: 'Permiso eliminado.'});
    };
    PermisosComponent.prototype.save = function () {
        // tambien se puede eliminar...
        console.log('save permiso');
        this.item.roleId = this.roleId;
        this.item.resourceId = this.recurso.id;
        this.add(this.item);
    };
    PermisosComponent.prototype.getRecursos = function (buscar) {
        var _this = this;
        this.recursoService.get('', buscar)
            .subscribe(function (items) {
            _this.recursos = items;
            console.log('Ok.Component.Read.unoooo');
            console.log(items);
            _this.loadingRecursos = false;
        }, (function (error) {
            console.log('Error.Component.Read.');
        }));
    };
    PermisosComponent.prototype.getAccionesPermiso = function (buscar) {
        var _this = this;
        this.accionPermisoService.get('', buscar)
            .subscribe(function (items) {
            _this.accionesPermiso = items;
            console.log('Ok.Component.Read.getAccionesPermiso');
            console.log(items);
            _this.loadingRecursos = false;
        }, (function (error) {
            console.log('Error.Component.Read.');
        }));
    };
    PermisosComponent.prototype.get = function (roleId) {
        var _this = this;
        this.service.get(roleId)
            .subscribe(function (items) {
            _this.items = items;
            console.log('Ok.Component.Read.tresss');
            console.log(items);
            _this.loading = false;
        }, (function (error) {
            console.log('Error.Component.Read.');
        }));
    };
    PermisosComponent.prototype.add = function (permiso) {
        var _this = this;
        this.service.add(permiso)
            .subscribe(function (item) {
            console.log('Ok.Component.Insert. ADD PERMISO');
            console.log(permiso);
            var detallePermiso = new DetallePermisoPrimeClass();
            detallePermiso.permissionId = item.id;
            detallePermiso.description = '-';
            detallePermiso.permissionActionId = _this.selAccionPermiso;
            // this.item = null; no destruir la lista, debe persistir.
            _this.displayDialog = false;
            _this.addDetallePermiso(detallePermiso); // grabando el detallePermiso
        }, (function (error) {
            console.log('Error.Component.Insert.');
        }));
    };
    PermisosComponent.prototype.addDetallePermiso = function (item) {
        var _this = this;
        this.detallePermisoService.add(item)
            .subscribe(function (item) {
            _this.loadGrid(_this.roleId); // recarga la grilla
            console.log('Ok.Component.Insert.');
            _this.displayDialogAccion = false;
        }, (function (error) {
            console.log('Error.Component.Insert.');
        }));
    };
    // este elimina todo, Permiso y DetallePermiso
    PermisosComponent.prototype.deleteDetallePermiso = function (id) {
        var _this = this;
        this.detallePermisoService.delete(id)
            .subscribe(function (item) {
            _this.messageService.add({ key: 'tst-info', severity: 'warn', summary: 'Advertencia', detail: 'Permiso eliminado.' });
            _this.loadGrid(_this.roleId);
            console.log('Ok.Component.Delete');
            _this.item = null;
            _this.displayDialog = false;
        }, (function (error) {
            console.log('Error.Component.Delete');
        }));
    };
    PermisosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-permisos',
            template: __webpack_require__(/*! ./permisos.component.html */ "./src/app/layout/permisos/permisos.component.html"),
            styles: [__webpack_require__(/*! ./permisos.component.scss */ "./src/app/layout/permisos/permisos.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()],
            providers: [_shared_services_permiso_service__WEBPACK_IMPORTED_MODULE_2__["PermisoService"], _shared_services_recurso_service__WEBPACK_IMPORTED_MODULE_3__["RecursoService"], _shared_services_accion_permiso_service__WEBPACK_IMPORTED_MODULE_4__["AccionPermisoService"], _shared_services_detalle_permiso__WEBPACK_IMPORTED_MODULE_5__["DetallePermisoService"], primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"]]
        }),
        __metadata("design:paramtypes", [_shared_services_permiso_service__WEBPACK_IMPORTED_MODULE_2__["PermisoService"], _shared_services_recurso_service__WEBPACK_IMPORTED_MODULE_3__["RecursoService"],
            _shared_services_accion_permiso_service__WEBPACK_IMPORTED_MODULE_4__["AccionPermisoService"], _shared_services_detalle_permiso__WEBPACK_IMPORTED_MODULE_5__["DetallePermisoService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"]])
    ], PermisosComponent);
    return PermisosComponent;
}());



/***/ }),

/***/ "./src/app/shared/services/detalle-permiso.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/detalle-permiso.ts ***!
  \****************************************************/
/*! exports provided: DetallePermisoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallePermisoService", function() { return DetallePermisoService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var DetallePermisoService = /** @class */ (function () {
    function DetallePermisoService(http) {
        this.http = http;
        this.url = 'https://api.crl.pe/seguridad/api/PermissionDetails';
    }
    DetallePermisoService.prototype.get = function (id, busqueda) {
        return this.http.get(this.url + '?id=' + id + '&busqueda=' + busqueda)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return console.log('OK.Service.Read.'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('Error.Service.Read.', [])));
    };
    ;
    DetallePermisoService.prototype.add = function (item) {
        return this.http.post(this.url, item, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (item) { return console.log('Ok.Service.Insert.'); }), // Respuesta de la API, puede ser un Json
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('Error.Service.Insert.')));
    };
    DetallePermisoService.prototype.update = function (item) {
        return this.http.put(this.url + '/' + item.id, item, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (item) { return console.log('Ok.Service.Update.'); }), // Respuesta de la API, puede ser un Json
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('Error.Service.Update.')));
    };
    DetallePermisoService.prototype.delete = function (id) {
        return this.http.delete(this.url + '/' + id, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (item) { return console.log('Ok.Service.Delete.'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('Error.Service.Delete.')));
    };
    DetallePermisoService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.log(operation + " failed_v99: " + error.message);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    DetallePermisoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], DetallePermisoService);
    return DetallePermisoService;
}());



/***/ }),

/***/ "./src/app/shared/services/perfil.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/perfil.service.ts ***!
  \***************************************************/
/*! exports provided: PerfilService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilService", function() { return PerfilService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var PerfilService = /** @class */ (function () {
    function PerfilService(http) {
        this.http = http;
        this.url = 'https://api.crl.pe/seguridad/api/Roles';
    }
    PerfilService.prototype.get = function (id, busqueda) {
        return this.http.get(this.url + '?id=' + id + '&busqueda=' + busqueda)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return console.log('OK.Service.Read.'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('Error.Service.Read.', [])));
    };
    PerfilService.prototype.getUsers = function (roleId) {
        return this.http.get(this.url + '/GetUsers?roleId=' + roleId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return console.log('OK.Service.Read.'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('Error.Service.Read.', [])));
    };
    PerfilService.prototype.add = function (perfil) {
        return this.http.post(this.url, perfil, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (perfil) { return console.log('Ok.Service.Insert.'); }), // Respuesta de la API, puede ser un Json
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('Error.Service.Insert.')));
    };
    PerfilService.prototype.addUser = function (perfilUsuario) {
        return this.http.post(this.url + '/AddUser', perfilUsuario, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (perfil) { return console.log('Ok.Service.Insert.'); }), // Respuesta de la API, puede ser un Json
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('Error.Service.Insert.')));
    };
    PerfilService.prototype.update = function (perfil) {
        return this.http.put(this.url + '/' + perfil.id, perfil, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (sistema) { return console.log('Ok.Service.Update.'); }), // Respuesta de la API, puede ser un Json
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('Error.Service.Update.')));
    };
    PerfilService.prototype.deleteUser = function (perfilUsuario) {
        return this.http.delete(this.url + '/DeleteUser?roleId=' + perfilUsuario.roleId + '&userId=' + perfilUsuario.userId, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (item) { return console.log('Ok.Service.Delete.'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('Error.Service.Delete.')));
    };
    PerfilService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.log(operation + " failed_v99: " + error.message);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    PerfilService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], PerfilService);
    return PerfilService;
}());

/* Anotaciones
- Se tratan de dejar las respuesta de los errores de la manera mas genérica para que no arrojen errores y estar abiertas a
    cambios de las respuestas de APIS y no generen inconsistencias
*/


/***/ }),

/***/ "./src/app/shared/services/permiso.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/permiso.service.ts ***!
  \****************************************************/
/*! exports provided: PermisoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermisoService", function() { return PermisoService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var PermisoService = /** @class */ (function () {
    function PermisoService(http) {
        this.http = http;
        this.url = 'https://api.crl.pe/seguridad/api/Permissions';
    }
    PermisoService.prototype.get = function (roleId) {
        return this.http.get(this.url + '?RoleId=' + roleId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return console.log('OK.Service.Read.'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('Error.Service.Read.', [])));
    };
    ;
    PermisoService.prototype.add = function (item) {
        return this.http.post(this.url, item, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (item) { return console.log('Ok.Service.Insert.'); }), // Respuesta de la API, puede ser un Json
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('Error.Service.Insert.')));
    };
    // falta adaptar
    // update(item:Permiso):Observable<Permiso>{ // Observable<Sistema> es el tipo de lo que devuelve a travez de la API. que puede ser TRUE o FALSE, o un model en JSON
    //     return this.http.put<Permiso>(this.url + '/' + item.id, item, httpOptions).pipe(
    //         tap((item:Permiso) => console.log('Ok.Service.Update.')),// Respuesta de la API, puede ser un Json
    //         catchError(this.handleError('Error.Service.Update.')));
    // }
    PermisoService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.log(operation + " failed_v99: " + error.message);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    PermisoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], PermisoService);
    return PermisoService;
}());



/***/ })

}]);
//# sourceMappingURL=perfiles-perfiles-module.js.map