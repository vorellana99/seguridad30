(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tables-tables-module"],{

/***/ "./src/app/layout/tables/tables-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/layout/tables/tables-routing.module.ts ***!
  \********************************************************/
/*! exports provided: TablesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesRoutingModule", function() { return TablesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tables_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tables.component */ "./src/app/layout/tables/tables.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _tables_component__WEBPACK_IMPORTED_MODULE_2__["TablesComponent"]
    }
];
var TablesRoutingModule = /** @class */ (function () {
    function TablesRoutingModule() {
    }
    TablesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], TablesRoutingModule);
    return TablesRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/tables/tables.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/tables/tables.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n        <!-- <app-page-header [heading]=\"'Forms2'\" [icon]=\"'fa-edit'\"></app-page-header> -->\r\n        <app-page-header [heading]=\"'ADICIONES - PRQS 1802'\" [icon]=\"'fa-edit'\"></app-page-header>\r\n    \r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n                <form class=\"needs-validation\" novalidate>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-4 mb-3\">\r\n                            <label for=\"firstName\">Transcribir desde</label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"firstName\" placeholder=\"\" value=\"\" required>\r\n                            <div class=\"invalid-feedback\">\r\n                                Valid 1...\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-4 mb-3\">\r\n                            <label for=\"lastName\">Fecha</label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"lastName\" placeholder=\"\" value=\"\" required>\r\n                            <div class=\"invalid-feedback\">\r\n                                Valid 2...\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-4 mb-3\">\r\n                            <label for=\"lastName\">Área de control</label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"lastName\" placeholder=\"\" value=\"\" required>\r\n                            <div class=\"invalid-feedback\">\r\n                                Valid 3...\r\n                            </div>\r\n                        </div>\r\n    \r\n                        <div class=\"col-md-4 mb-3\">\r\n                            <label for=\"lastName\">Carné</label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"lastName\" placeholder=\"\" value=\"\" required>\r\n                            <div class=\"invalid-feedback\">\r\n                                Valid 2...\r\n                            </div>\r\n                        </div>\r\n    \r\n                        <div class=\"col-md-4 mb-3\">\r\n                            <label for=\"firstName\">Transcribir desde</label>\r\n                            <!-- <input type=\"text\" class=\"form-control\" id=\"firstName\" placeholder=\"\" value=\"\" required> -->\r\n                            <select name=\"\" id=\"\" class=\"form-control\">\r\n                                <option>(Seleccionar)</option>\r\n                                <option>uno</option>\r\n                                <option>dos</option>\r\n                                <option>tres</option>\r\n                            </select>\r\n                            <div class=\"invalid-feedback\">\r\n                                Valid 1...\r\n                            </div>\r\n                        </div>\r\n    \r\n                        <div class=\"col-md-4 mb-3\">\r\n                            <label for=\"lastName\">Correo</label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"lastName\" placeholder=\"\" value=\"\" required>\r\n                            <div class=\"invalid-feedback\">\r\n                                Valid 3...\r\n                            </div>\r\n                        </div>\r\n    \r\n                    </div>\r\n    \r\n                    <hr class=\"mb-4\">\r\n    \r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-4 mb-3\">\r\n                            <label for=\"firstName\">Tipo PQRS</label>\r\n                            <select name=\"\" id=\"\" class=\"form-control\">\r\n                                <option>(Seleccionar)</option>\r\n                                <option>uno</option>\r\n                                <option>dos</option>\r\n                                <option>tres</option>\r\n                            </select>\r\n                            <div class=\"invalid-feedback\">\r\n                                Valid 1...\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-8 mb-3\">\r\n                            <label for=\"lastName\">Asunto</label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"lastName\" placeholder=\"\" value=\"\" required>\r\n                            <div class=\"invalid-feedback\">\r\n                                Valid 2...\r\n                            </div>\r\n                        </div>\r\n    \r\n                        <div class=\"col-md-12 mb-3\">\r\n                            <label for=\"lastName\">Descripción</label>\r\n                            <textarea name=\"\" id=\"\" cols=\"30\" rows=\"5\" class=\"form-control\"></textarea>\r\n                            <div class=\"invalid-feedback\">\r\n                                Valid 2...\r\n                            </div>\r\n                        </div>\r\n    \r\n                        <div class=\"col-md-4 mb-3\">\r\n                            <label for=\"lastName\">Anexar archivo</label>\r\n                            <div class=\"input-group mb-3\">\r\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Seleccione un archivo.\" aria-label=\"Recipient's username\" aria-describedby=\"basic-addon2\">\r\n                                <div class=\"input-group-append\">\r\n                                    <button class=\"btn btn-outline-secondary\" type=\"button\"><i class=\"fa fa-folder-open\"></i></button>\r\n                                    <!-- <button class='btn btn-lg ' style='background-color:transparent;'><i class=\"fa fa-pencil\"></i> Edit</button> -->\r\n                                </div>\r\n                            </div>\r\n                        </div>                    \r\n                        <!-- usaremos este input como puente para seleccionar un archivo a travez de un boton -->\r\n                        <!-- <input id=\"myInput\" type=\"file\" style=\"visibility:hidden\" />\r\n                        <input type=\"button\" value=\"Show Dialog\" onclick=\"$('#myInput').click();\" /> -->\r\n                        <!-- <input id=\"iptTempFile\" type=\"file\" style=\"visibility: hidden;\"> -->\r\n                    </div>\r\n    \r\n                    <div class=\"row\">\r\n                        <div class=\"col\">\r\n                            <!-- <div class=\"float-right\">element needs to be right aligned</div> -->\r\n                            <button class=\"btn btn-primary float-right\"><i class=\"fa fa-save\"></i> Grabar</button>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n        <!-- /.row -->\r\n    </div>\r\n    "

/***/ }),

/***/ "./src/app/layout/tables/tables.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/layout/tables/tables.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC90YWJsZXMvdGFibGVzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/tables/tables.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/tables/tables.component.ts ***!
  \***************************************************/
/*! exports provided: TablesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesComponent", function() { return TablesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TablesComponent = /** @class */ (function () {
    function TablesComponent() {
    }
    TablesComponent.prototype.ngOnInit = function () { };
    TablesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tables',
            template: __webpack_require__(/*! ./tables.component.html */ "./src/app/layout/tables/tables.component.html"),
            styles: [__webpack_require__(/*! ./tables.component.scss */ "./src/app/layout/tables/tables.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [])
    ], TablesComponent);
    return TablesComponent;
}());



/***/ }),

/***/ "./src/app/layout/tables/tables.module.ts":
/*!************************************************!*\
  !*** ./src/app/layout/tables/tables.module.ts ***!
  \************************************************/
/*! exports provided: TablesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesModule", function() { return TablesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _tables_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tables-routing.module */ "./src/app/layout/tables/tables-routing.module.ts");
/* harmony import */ var _tables_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tables.component */ "./src/app/layout/tables/tables.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../shared */ "./src/app/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var TablesModule = /** @class */ (function () {
    function TablesModule() {
    }
    TablesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _tables_routing_module__WEBPACK_IMPORTED_MODULE_2__["TablesRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_4__["PageHeaderModule"]],
            declarations: [_tables_component__WEBPACK_IMPORTED_MODULE_3__["TablesComponent"]]
        })
    ], TablesModule);
    return TablesModule;
}());



/***/ }),

/***/ "./src/app/router.animations.ts":
/*!**************************************!*\
  !*** ./src/app/router.animations.ts ***!
  \**************************************/
/*! exports provided: routerTransition, noTransition, slideToRight, slideToLeft, slideToBottom, slideToTop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routerTransition", function() { return routerTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noTransition", function() { return noTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToRight", function() { return slideToRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToLeft", function() { return slideToLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToBottom", function() { return slideToBottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToTop", function() { return slideToTop; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

function routerTransition() {
    return noTransition();
}
function noTransition() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', []);
}
function slideToRight() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }))
        ])
    ]);
}
function slideToLeft() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }))
        ])
    ]);
}
function slideToBottom() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(-100%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(100%)' }))
        ])
    ]);
}
function slideToTop() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(100%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(-100%)' }))
        ])
    ]);
}


/***/ })

}]);
//# sourceMappingURL=tables-tables-module.js.map