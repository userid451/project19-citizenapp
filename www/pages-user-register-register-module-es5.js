function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-user-register-register-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/register/register.page.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/register/register.page.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesUserRegisterRegisterPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header headerTitle=\"Register\"></app-header>\n\n<ion-content fullscreen>\n  <div class=\"ion-padding\">\n    <form (ngSubmit)=\"register()\">\n      <ion-list lines=\"full\" class=\"ion-no-margin ion-no-padding\">\n        <ion-item>\n          <ion-label position=\"floating\">Name</ion-label>\n          <ion-input\n            [(ngModel)]=\"user.name\"\n            name=\"name\"\n            inputmode=\"text\"\n          ></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"floating\">Phone</ion-label>\n          <ion-input\n            [(ngModel)]=\"user.phoneNumber\"\n            name=\"phoneNumber\"\n            inputmode=\"tel\"\n          ></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"floating\">Email</ion-label>\n          <ion-input\n            [(ngModel)]=\"user.email\"\n            name=\"email\"\n            inputmode=\"email\"\n          ></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"floating\">Password</ion-label>\n          <ion-input\n            [(ngModel)]=\"user.password\"\n            name=\"password\"\n            type=\"password\"\n            inputmode=\"password\"\n          ></ion-input>\n        </ion-item>\n      </ion-list>\n\n      <div class=\"ion-padding\">\n        <ion-button\n          expand=\"block\"\n          type=\"submit\"\n          class=\"ion-no-margin\"\n          style=\"--border-radius: 12px;\"\n          >COMPLETE REGISTRATION</ion-button\n        >\n      </div>\n    </form>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/user/register/register.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/user/register/register.module.ts ***!
    \********************************************************/

  /*! exports provided: RegisterPageModule */

  /***/
  function srcAppPagesUserRegisterRegisterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function () {
      return RegisterPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _register_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./register.page */
    "./src/app/pages/user/register/register.page.ts");
    /* harmony import */


    var _component_header_header_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../component/header/header.module */
    "./src/app/component/header/header.module.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var RegisterPageModule = function RegisterPageModule() {
      _classCallCheck(this, RegisterPageModule);
    };

    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _component_header_header_module__WEBPACK_IMPORTED_MODULE_6__["HeaderModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild([{
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_5__["RegisterPage"]
      }])],
      declarations: [_register_page__WEBPACK_IMPORTED_MODULE_5__["RegisterPage"]]
    })], RegisterPageModule);
    /***/
  },

  /***/
  "./src/app/pages/user/register/register.page.scss":
  /*!********************************************************!*\
    !*** ./src/app/pages/user/register/register.page.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesUserRegisterRegisterPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXIvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/user/register/register.page.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/user/register/register.page.ts ***!
    \******************************************************/

  /*! exports provided: RegisterPage */

  /***/
  function srcAppPagesUserRegisterRegisterPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPage", function () {
      return RegisterPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _api_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../api/user.service */
    "./src/app/api/user.service.ts");
    /* harmony import */


    var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! uuid */
    "./node_modules/uuid/dist/esm-browser/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var RegisterPage = /*#__PURE__*/function () {
      function RegisterPage(userStorage, router) {
        _classCallCheck(this, RegisterPage);

        this.userStorage = userStorage;
        this.router = router;
        this.user = {};
      }

      _createClass(RegisterPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "register",
        value: function register() {
          var _this = this;

          if (this.user.hasOwnProperty('name') && this.user.hasOwnProperty('phoneNumber') && this.user.hasOwnProperty('email') && this.user.hasOwnProperty('password')) {
            this.user['id'] = uuid__WEBPACK_IMPORTED_MODULE_3__["v4"]();
            this.userStorage.saveUser(this.user).then(function () {
              _this.userStorage.authenticate(_this.user.email, _this.user.password).then(function (user) {
                if (user) {
                  _this.router.navigate(['/home']);
                } // Todo else handle error

              });
            });
          }
        }
      }]);

      return RegisterPage;
    }();

    RegisterPage.ctorParameters = function () {
      return [{
        type: _api_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/register/register.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./register.page.scss */
      "./src/app/pages/user/register/register.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], RegisterPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-user-register-register-module-es5.js.map