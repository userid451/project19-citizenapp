(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["statistics-statistics-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/statistics/statistics.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/statistics/statistics.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <h2>Summary of Cases</h2>\n  <h4>Last updated:</h4>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-card>\n          <ion-card-header>\n            <ion-card-subtitle>Moderate risk of infection</ion-card-subtitle>\n            <ion-card-title>Your status is Yellow</ion-card-title>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-card>\n          <ion-card-header>\n            <ion-card-subtitle>Moderate risk of infection</ion-card-subtitle>\n            <ion-card-title>Your status is Yellow</ion-card-title>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-card>\n          <ion-card-header>\n            <ion-card-subtitle>Moderate risk of infection</ion-card-subtitle>\n            <ion-card-title>Your status is Yellow</ion-card-title>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-card>\n          <ion-card-header>\n            <ion-card-subtitle>Moderate risk of infection</ion-card-subtitle>\n            <ion-card-title>Your status is Yellow</ion-card-title>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-card>\n          <ion-card-header>\n            <ion-card-subtitle>Moderate risk of infection</ion-card-subtitle>\n            <ion-card-title>Your status is Yellow</ion-card-title>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid></ion-content\n>\n");

/***/ }),

/***/ "./src/app/statistics/statistics-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/statistics/statistics-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: StatisticsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsPageRoutingModule", function() { return StatisticsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _statistics_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./statistics.page */ "./src/app/statistics/statistics.page.ts");




const routes = [
    {
        path: '',
        component: _statistics_page__WEBPACK_IMPORTED_MODULE_3__["StatisticsPage"]
    }
];
let StatisticsPageRoutingModule = class StatisticsPageRoutingModule {
};
StatisticsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], StatisticsPageRoutingModule);



/***/ }),

/***/ "./src/app/statistics/statistics.module.ts":
/*!*************************************************!*\
  !*** ./src/app/statistics/statistics.module.ts ***!
  \*************************************************/
/*! exports provided: StatisticsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsPageModule", function() { return StatisticsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _statistics_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./statistics-routing.module */ "./src/app/statistics/statistics-routing.module.ts");
/* harmony import */ var _component_header_header_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../component/header/header.module */ "./src/app/component/header/header.module.ts");
/* harmony import */ var _statistics_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./statistics.page */ "./src/app/statistics/statistics.page.ts");








let StatisticsPageModule = class StatisticsPageModule {
};
StatisticsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _statistics_routing_module__WEBPACK_IMPORTED_MODULE_5__["StatisticsPageRoutingModule"],
            _component_header_header_module__WEBPACK_IMPORTED_MODULE_6__["HeaderModule"],
        ],
        declarations: [_statistics_page__WEBPACK_IMPORTED_MODULE_7__["StatisticsPage"]],
    })
], StatisticsPageModule);



/***/ }),

/***/ "./src/app/statistics/statistics.page.scss":
/*!*************************************************!*\
  !*** ./src/app/statistics/statistics.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  padding: 2px;\n  margin: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RlZmF1bHQvRG9jdW1lbnRzL3Byb2plY3QxOS1jaXRpemVuYXBwL3NyYy9hcHAvc3RhdGlzdGljcy9zdGF0aXN0aWNzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc3RhdGlzdGljcy9zdGF0aXN0aWNzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9zdGF0aXN0aWNzL3N0YXRpc3RpY3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQge1xuICBwYWRkaW5nOiAycHg7XG4gIG1hcmdpbjogM3B4O1xufVxuIiwiaW9uLWNhcmQge1xuICBwYWRkaW5nOiAycHg7XG4gIG1hcmdpbjogM3B4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/statistics/statistics.page.ts":
/*!***********************************************!*\
  !*** ./src/app/statistics/statistics.page.ts ***!
  \***********************************************/
/*! exports provided: StatisticsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsPage", function() { return StatisticsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let StatisticsPage = class StatisticsPage {
    constructor() { }
    ngOnInit() {
    }
};
StatisticsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-statistics',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./statistics.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/statistics/statistics.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./statistics.page.scss */ "./src/app/statistics/statistics.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], StatisticsPage);



/***/ })

}]);
//# sourceMappingURL=statistics-statistics-module-es2015.js.map