(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/shared/services/accion-permiso.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/services/accion-permiso.service.ts ***!
  \***********************************************************/
/*! exports provided: AccionPermisoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccionPermisoService", function() { return AccionPermisoService; });
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
var AccionPermisoService = /** @class */ (function () {
    function AccionPermisoService(http) {
        this.http = http;
        this.url = 'https://api.crl.pe/seguridad/api/PermissionActions';
    }
    AccionPermisoService.prototype.get = function (id, busqueda) {
        return this.http.get(this.url + '?id=' + id + '&busqueda=' + busqueda)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return console.log('OK.Service.Read.'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('Error.Service.Read.', [])));
    };
    AccionPermisoService.prototype.add = function (accionPermiso) {
        return this.http.post(this.url, accionPermiso, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (accionPermiso) { return console.log('Ok.Service.Insert.'); }), // Respuesta de la API, puede ser un Json
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('Error.Service.Insert.')));
    };
    AccionPermisoService.prototype.update = function (accionPermiso) {
        return this.http.put(this.url + '/' + accionPermiso.id, accionPermiso, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (sistema) { return console.log('Ok.Service.Update.'); }), // Respuesta de la API, puede ser un Json
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('Error.Service.Update.')));
    };
    AccionPermisoService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.log(operation + " failed_v99: " + error.message);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    AccionPermisoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], AccionPermisoService);
    return AccionPermisoService;
}());

/* Anotaciones
- Se tratan de dejar las respuesta de los errores de la manera mas genérica para que no arrojen errores y estar abiertas a
    cambios de las respuestas de APIS y no generen inconsistencias
*/


/***/ }),

/***/ "./src/app/shared/services/recurso.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/recurso.service.ts ***!
  \****************************************************/
/*! exports provided: RecursoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecursoService", function() { return RecursoService; });
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
var RecursoService = /** @class */ (function () {
    function RecursoService(http) {
        this.http = http;
        this.url = 'https://api.crl.pe/seguridad/api/Resources';
    }
    RecursoService.prototype.get = function (id, busqueda) {
        return this.http.get(this.url + '?id=' + id + '&busqueda=' + busqueda)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return console.log('OK.Service.Read.'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('Error.Service.Read.', [])));
    };
    ;
    RecursoService.prototype.add = function (recurso) {
        return this.http.post(this.url, recurso, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (recurso) { return console.log('Ok.Service.Insert.'); }), // Respuesta de la API, puede ser un Json
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('Error.Service.Insert.')));
    };
    RecursoService.prototype.update = function (recurso) {
        return this.http.put(this.url + '/' + recurso.id, recurso, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (recurso) { return console.log('Ok.Service.Update.'); }), // Respuesta de la API, puede ser un Json
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('Error.Service.Update.')));
    };
    RecursoService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.log(operation + " failed_v99: " + error.message);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    RecursoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], RecursoService);
    return RecursoService;
}());



/***/ }),

/***/ "./src/app/shared/services/sistema.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/sistema.service.ts ***!
  \****************************************************/
/*! exports provided: SistemaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SistemaService", function() { return SistemaService; });
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
var SistemaService = /** @class */ (function () {
    function SistemaService(http) {
        this.http = http;
        this.url = 'https://api.crl.pe/seguridad/api/SystemApps';
    }
    SistemaService.prototype.get = function (id, busqueda) {
        return this.http.get(this.url + '?id=' + id + '&busqueda=' + busqueda)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return console.log('OK.Service.Read.'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('Error.Service.Read.', [])));
    };
    SistemaService.prototype.add = function (item) {
        return this.http.post(this.url, item, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (item) { return console.log('Ok.Service.Insert.'); }), // Respuesta de la API, puede ser un Json
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('Error.Service.Insert.')));
    };
    SistemaService.prototype.update = function (item) {
        return this.http.put(this.url + '/' + item.id, item, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (item) { return console.log('Ok.Service.Update.'); }), // Respuesta de la API, puede ser un Json
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('Error.Service.Update.')));
    };
    SistemaService.prototype.delete = function (id) {
        return this.http.delete(this.url + '/' + id, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (item) { return console.log('Ok.Service.Delete.'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('Error.Service.Delete.')));
    };
    SistemaService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.log(operation + " failed_v99: " + error.message);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    SistemaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], SistemaService);
    return SistemaService;
}());

/* Anotaciones
- Se tratan de dejar las respuesta de los errores de la manera mas genérica para que no arrojen errores y estar abiertas a
    cambios de las respuestas de APIS y no generen inconsistencias
*/


/***/ }),

/***/ "./src/app/shared/services/tipo-recurso.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/services/tipo-recurso.service.ts ***!
  \*********************************************************/
/*! exports provided: TipoRecursoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoRecursoService", function() { return TipoRecursoService; });
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
var TipoRecursoService = /** @class */ (function () {
    function TipoRecursoService(http) {
        this.http = http;
        this.url = 'https://api.crl.pe/seguridad/api/TypeResources';
    }
    TipoRecursoService.prototype.get = function (id, busqueda) {
        return this.http.get(this.url + '?id=' + id + '&busqueda=' + busqueda)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return console.log('OK.Service.Read.'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('Error.Service.Read.', [])));
    };
    ;
    TipoRecursoService.prototype.add = function (tipoRecurso) {
        return this.http.post(this.url, tipoRecurso, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (tipoRecurso) { return console.log('Ok.Service.Insert.'); }), // Respuesta de la API, puede ser un Json
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('Error.Service.Insert.')));
    };
    TipoRecursoService.prototype.update = function (tipoRecurso) {
        return this.http.put(this.url + '/' + tipoRecurso.id, tipoRecurso, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (tipoRecurso) { return console.log('Ok.Service.Update.'); }), // Respuesta de la API, puede ser un Json
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('Error.Service.Update.')));
    };
    TipoRecursoService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.log(operation + " failed_v99: " + error.message);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    TipoRecursoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], TipoRecursoService);
    return TipoRecursoService;
}());

/* Anotaciones
- Se tratan de dejar las respuesta de los errores de la manera mas genérica para que no arrojen errores y estar abiertas a
    cambios de las respuestas de APIS y no generen inconsistencias
*/ 


/***/ }),

/***/ "./src/app/shared/services/trabajador.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/trabajador.service.ts ***!
  \*******************************************************/
/*! exports provided: TrabajadorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrabajadorService", function() { return TrabajadorService; });
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
var TrabajadorService = /** @class */ (function () {
    function TrabajadorService(http) {
        this.http = http;
        this.url = 'https://api.crl.pe/seguridad/api/Trabajadores?busqueda=';
    }
    TrabajadorService.prototype.get = function (busqueda) {
        return this.http.get(this.url + busqueda)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return console.log('OK.Service.Read.'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('Error.Service.Read.', [])));
    };
    ;
    TrabajadorService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.log(operation + " failed_v99: " + error.message);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    TrabajadorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], TrabajadorService);
    return TrabajadorService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map