(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tipos-recurso-tipos-recurso-module"],{

/***/ "./src/app/layout/tipos-recurso/tipos-recurso-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/layout/tipos-recurso/tipos-recurso-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: TiposRecursoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TiposRecursoRoutingModule", function() { return TiposRecursoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tipos_recurso_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tipos-recurso.component */ "./src/app/layout/tipos-recurso/tipos-recurso.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _tipos_recurso_component__WEBPACK_IMPORTED_MODULE_2__["TiposRecursoComponent"]
    }
];
var TiposRecursoRoutingModule = /** @class */ (function () {
    function TiposRecursoRoutingModule() {
    }
    TiposRecursoRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], TiposRecursoRoutingModule);
    return TiposRecursoRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/tipos-recurso/tipos-recurso.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/layout/tipos-recurso/tipos-recurso.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n  <app-page-header [heading]=\"'Tipos de recurso'\" [icon]=\"'fa-edit'\"></app-page-header>\r\n\r\n  <div class=\"row\">\r\n      <div class=\"col-lg-12\">\r\n          <div class=\"row\">\r\n              <div class=\"col-md-4 mb-1\">\r\n                  <div class=\"input-group mb-3\">\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Buscar\" [(ngModel)]=\"inpBuscar\" [ngModelOptions]=\"{standalone: true}\" (keyup.enter)=\"loadGrid()\" aria-label=\"Recipient's username\" aria-describedby=\"basic-addon2\">\r\n                      <div class=\"input-group-append\">\r\n                          <button class=\"btn btn-outline-secondary\" type=\"button\" (click)=\"loadGrid()\">\r\n                              <i class=\"fa fa-search\"></i>\r\n                          </button>\r\n                      </div>\r\n                  </div>\r\n              </div>  \r\n              <div class=\"col-md-12 mb-3\">\r\n                  <p-table [value]=\"items\" selectionMode=\"single\" (onRowSelect)=\"onRowSelect($event)\" [loading]=\"loading\" [loadingIcon]=\"\">\r\n                      <ng-template pTemplate=\"header\">\r\n                          <tr>\r\n                              <th>Codigo</th>\r\n                              <th>Nombre</th>\r\n                              <th>Descripción</th>\r\n                          </tr>\r\n                      </ng-template>\r\n                      <ng-template pTemplate=\"body\" let-itemx>\r\n                          <tr [pSelectableRow]=\"itemx\">\r\n                              <td>{{itemx.id}}</td>\r\n                              <td>{{itemx.name}}</td>\r\n                              <td>{{itemx.description}}</td>\r\n                          </tr>\r\n                      </ng-template>\r\n                      <ng-template pTemplate=\"summary\" let-rowData>\r\n                          <div style=\"text-align:left\">\r\n                              <button type=\"button\" pButton icon=\"pi pi-plus\" (click)=\"showDialogToAdd()\" label=\"Agregar\"></button>\r\n                          </div>\r\n                      </ng-template>\r\n                  </p-table>\r\n\r\n                  <p-dialog header=\"Tipo de recurso\" [(visible)]=\"displayDialog\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\" [closable]=\"true\" [width]=\"350\">\r\n                      <div class=\"ui-g ui-fluid\" *ngIf=\"item\">\r\n                          <div class=\"col-md-12 mb-3\">\r\n                              <label>Código</label>\r\n                              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"item.id\" disabled>\r\n                          </div>\r\n                          <div class=\"col-md-12 mb-3\">\r\n                              <label>Nombre <b style=\"color:red\">*</b></label>\r\n                              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"item.name\">\r\n                          </div>\r\n                          <div class=\"col-md-12 mb-3\">\r\n                              <label>Descripción <b style=\"color:red\">*</b></label>\r\n                              <textarea class=\"form-control\" rows=\"2\" [(ngModel)]=\"item.description\"></textarea>\r\n                          </div>\r\n                      </div>\r\n\r\n                      <p-footer>\r\n                          <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\r\n                              <!-- <button type=\"button\" pButton icon=\"pi pi-times\" (click)=\"delete()\" label=\"Eliminar\" class=\"ui-button-danger\"></button> -->\r\n                              <button type=\"button\" pButton icon=\"pi pi-check\" (click)=\"save()\" label=\"Guardar\" class=\"ui-button-success\"></button>\r\n                          </div>\r\n                      </p-footer>\r\n                  </p-dialog>\r\n              </div>                        \r\n          </div>\r\n      </div>\r\n  </div>\r\n<!-- /.row -->\r\n</div>\r\n<p-toast key=\"tst-info\" position=\"center\"></p-toast>"

/***/ }),

/***/ "./src/app/layout/tipos-recurso/tipos-recurso.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/layout/tipos-recurso/tipos-recurso.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC90aXBvcy1yZWN1cnNvL3RpcG9zLXJlY3Vyc28uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/tipos-recurso/tipos-recurso.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/layout/tipos-recurso/tipos-recurso.component.ts ***!
  \*****************************************************************/
/*! exports provided: PrimeClass, TiposRecursoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrimeClass", function() { return PrimeClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TiposRecursoComponent", function() { return TiposRecursoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _shared_services_tipo_recurso_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/tipo-recurso.service */ "./src/app/shared/services/tipo-recurso.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_3__);
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
    function PrimeClass(id, name, description) {
        this.id = id;
        this.name = name;
        this.description = description;
    }
    return PrimeClass;
}());

var TiposRecursoComponent = /** @class */ (function () {
    function TiposRecursoComponent(service, messageService) {
        this.service = service;
        this.messageService = messageService;
        this.inpBuscar = '';
        this.item = new PrimeClass();
    }
    TiposRecursoComponent.prototype.ngOnInit = function () {
        this.loadGrid();
    };
    TiposRecursoComponent.prototype.loadGrid = function () {
        this.loading = true;
        this.get('', this.inpBuscar);
    };
    TiposRecursoComponent.prototype.showDialogToAdd = function () {
        this.newItem = true;
        this.item = new PrimeClass();
        this.displayDialog = true;
    };
    TiposRecursoComponent.prototype.onRowSelect = function (event) {
        this.newItem = false;
        this.item = __assign({}, event.data);
        this.displayDialog = true;
    };
    TiposRecursoComponent.prototype.validation = function () {
        if (this.item.name == null || this.item.description == null) {
            return false;
        }
        if (this.item.name.trim() === '' || this.item.description.trim() === '') {
            return false;
        }
        return true;
    };
    TiposRecursoComponent.prototype.save = function () {
        if (this.validation()) {
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
    TiposRecursoComponent.prototype.get = function (id, busqueda) {
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
    TiposRecursoComponent.prototype.add = function (item) {
        var _this = this;
        this.service.add(item)
            .subscribe(function (item) {
            _this.messageService.add({ key: 'tst-info', severity: 'info', detail: 'Se agregó el Tipo de Recurso' });
            _this.loadGrid(); // recarga la grilla
            console.log('Ok.Component.Insert.');
            _this.item = null;
            _this.displayDialog = false;
        }, (function (error) {
            console.log('Error.Component.Insert.');
        }));
    };
    TiposRecursoComponent.prototype.update = function (item) {
        var _this = this;
        this.service.update(item)
            .subscribe(function (item) {
            _this.messageService.add({ key: 'tst-info', severity: 'info', detail: 'Se actualizó el Tipo de Recurso' });
            _this.loadGrid(); // recarga la grilla
            console.log('Ok.Component.Update');
            _this.item = null;
            _this.displayDialog = false;
        }, (function (error) {
            console.log('Error.Component.Update.');
        }));
    };
    TiposRecursoComponent.prototype.delete = function () { };
    TiposRecursoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tipos-recurso',
            template: __webpack_require__(/*! ./tipos-recurso.component.html */ "./src/app/layout/tipos-recurso/tipos-recurso.component.html"),
            styles: [__webpack_require__(/*! ./tipos-recurso.component.scss */ "./src/app/layout/tipos-recurso/tipos-recurso.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()],
            providers: [_shared_services_tipo_recurso_service__WEBPACK_IMPORTED_MODULE_2__["TipoRecursoService"], primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"]]
        }),
        __metadata("design:paramtypes", [_shared_services_tipo_recurso_service__WEBPACK_IMPORTED_MODULE_2__["TipoRecursoService"], primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"]])
    ], TiposRecursoComponent);
    return TiposRecursoComponent;
}());



/***/ }),

/***/ "./src/app/layout/tipos-recurso/tipos-recurso.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/tipos-recurso/tipos-recurso.module.ts ***!
  \**************************************************************/
/*! exports provided: TiposRecursoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TiposRecursoModule", function() { return TiposRecursoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _tipos_recurso_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tipos-recurso-routing.module */ "./src/app/layout/tipos-recurso/tipos-recurso-routing.module.ts");
/* harmony import */ var _tipos_recurso_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tipos-recurso.component */ "./src/app/layout/tipos-recurso/tipos-recurso.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/dialog.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/inputtext.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/toast.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_toast__WEBPACK_IMPORTED_MODULE_11__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var TiposRecursoModule = /** @class */ (function () {
    function TiposRecursoModule() {
    }
    TiposRecursoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _tipos_recurso_routing_module__WEBPACK_IMPORTED_MODULE_2__["TiposRecursoRoutingModule"],
                _shared__WEBPACK_IMPORTED_MODULE_4__["PageHeaderModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_5__["TableModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__["InputTextModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_8__["ButtonModule"],
                primeng_dialog__WEBPACK_IMPORTED_MODULE_9__["DialogModule"],
                primeng_toast__WEBPACK_IMPORTED_MODULE_11__["ToastModule"]
            ],
            declarations: [_tipos_recurso_component__WEBPACK_IMPORTED_MODULE_3__["TiposRecursoComponent"]],
            bootstrap: [_tipos_recurso_component__WEBPACK_IMPORTED_MODULE_3__["TiposRecursoComponent"]]
        })
    ], TiposRecursoModule);
    return TiposRecursoModule;
}());



/***/ })

}]);
//# sourceMappingURL=tipos-recurso-tipos-recurso-module.js.map