function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["onboarding-onboarding-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/onboarding/onboarding.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/onboarding/onboarding.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOnboardingOnboardingPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header headerTitle=\"Together Against COVID19\"></app-header>\n\n<ion-content fullscreen class=\"ion-padding\" scroll-y=\"false\">\n  <!--  -->\n  <ion-slides pager=\"true\">\n    <ion-slide>\n      <ion-icon\n        src=\"../../assets/icon/coronavirus.svg\"\n        class=\"bigger\"\n      ></ion-icon>\n\n      <h1>\n        <ion-text>#TogetherAgainstCOVID19</ion-text>\n      </h1>\n\n      <h5>\n        <ion-text>\n          Contating and preventing the Coronavirus (COVID-19) from spreading is\n          a <b>national responsibility.</b>\n        </ion-text>\n      </h5>\n    </ion-slide>\n    <!--  -->\n    <ion-slide>\n      <ion-icon src=\"../../assets/icon/oboarding2.svg\"></ion-icon>\n\n      <h1>\n        <ion-text>How will this app achieve it’s objective?</ion-text>\n      </h1>\n\n      <ion-item lines=\"none\">\n        <ion-text>\n          Alert and notify individuals that are near a newly confirmed case\n          during the quarantine period\n        </ion-text>\n        <ion-icon\n          src=\"../../assets/icon/onboardingAlert.svg\"\n          slot=\"start\"\n          color=\"primary\"\n        ></ion-icon>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-text>\n          Track the movement of self-isolated individual cases to ensure the\n          quarantine regulations\n        </ion-text>\n        <ion-icon\n          src=\"../../assets/icon/onboardingTrack.svg\"\n          slot=\"start\"\n          color=\"primary\"\n        ></ion-icon>\n      </ion-item>\n\n      <ion-item lines=\"none\">\n        <ion-text>\n          Reporting social gatherings that are viloating the quarinte law\n        </ion-text>\n        <ion-icon\n          src=\"../../assets/icon/onboardingReport.svg\"\n          slot=\"start\"\n          color=\"primary\"\n        ></ion-icon>\n      </ion-item>\n    </ion-slide>\n    <!--  -->\n    <ion-slide>\n      <ion-icon src=\"../../assets/icon/onboarding3.svg\"></ion-icon>\n\n      <h2>\n        <ion-text>Location Services must be enabled all the time</ion-text>\n      </h2>\n\n      <p>\n        <ion-text>\n          Please enable location services and set it to <b>Always</b> to allow\n          the app to function accurately in order to protect yourself and others\n          too\n        </ion-text>\n      </p>\n\n      <h4>\n        <ion-text>About your privacy and Data</ion-text>\n      </h4>\n\n      <ion-item lines=\"none\">\n        <ion-text>\n          Data privacy is in line with the Personal Data Protection Act\n        </ion-text>\n        <ion-icon\n          src=\"../../assets/icon/privacy-1.svg\"\n          slot=\"start\"\n          color=\"primary\"\n        ></ion-icon>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-text>\n          Data will be collected for 2 to 6 weeks based on the contract tracing\n          cases and you will have the right to permanently delete them.\n        </ion-text>\n        <ion-icon\n          src=\"../../assets/icon/privacy-2.svg\"\n          slot=\"start\"\n          color=\"primary\"\n        ></ion-icon>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-text>\n          Data will be stritcly used for the sole purpose of the limiting the\n          spread of COVID-19\n        </ion-text>\n        <ion-icon\n          src=\"../../assets/icon/privacy-3.svg\"\n          slot=\"start\"\n          color=\"primary\"\n        ></ion-icon>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-text>\n          In-device data encryption will be used to protect your data.\n        </ion-text>\n        <ion-icon\n          src=\"../../assets/icon/privacy-4.svg\"\n          slot=\"start\"\n          color=\"primary\"\n        ></ion-icon>\n      </ion-item>\n    </ion-slide>\n\n    <!--  -->\n    <ion-slide>\n      <ion-icon src=\"../../assets/icon/onboarding4.svg\"></ion-icon>\n\n      <h2>Register to reveive notifications through the app</h2>\n      <div class=\"buttonbottom\">\n        <ion-button fill=\"solid\" (click)=\"register()\">\n          REGISTER NOW\n          <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon>\n        </ion-button>\n\n        <ion-button fill=\"clear\" (click)=\"createShadowUser()\"\n          >REGISTER LATER\n          <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon>\n        </ion-button>\n      </div>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/onboarding/onboarding-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/onboarding/onboarding-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: OnboardingPageRoutingModule */

  /***/
  function srcAppOnboardingOnboardingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OnboardingPageRoutingModule", function () {
      return OnboardingPageRoutingModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _onboarding_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./onboarding.page */
    "./src/app/onboarding/onboarding.page.ts");

    var routes = [{
      path: '',
      component: _onboarding_page__WEBPACK_IMPORTED_MODULE_3__["OnboardingPage"]
    }];

    var OnboardingPageRoutingModule = function OnboardingPageRoutingModule() {
      _classCallCheck(this, OnboardingPageRoutingModule);
    };

    OnboardingPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], OnboardingPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/onboarding/onboarding.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/onboarding/onboarding.module.ts ***!
    \*************************************************/

  /*! exports provided: OnboardingPageModule */

  /***/
  function srcAppOnboardingOnboardingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OnboardingPageModule", function () {
      return OnboardingPageModule;
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


    var _onboarding_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./onboarding-routing.module */
    "./src/app/onboarding/onboarding-routing.module.ts");
    /* harmony import */


    var _onboarding_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./onboarding.page */
    "./src/app/onboarding/onboarding.page.ts");
    /* harmony import */


    var _component_header_header_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../component/header/header.module */
    "./src/app/component/header/header.module.ts");

    var OnboardingPageModule = function OnboardingPageModule() {
      _classCallCheck(this, OnboardingPageModule);
    };

    OnboardingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _onboarding_routing_module__WEBPACK_IMPORTED_MODULE_5__["OnboardingPageRoutingModule"], _component_header_header_module__WEBPACK_IMPORTED_MODULE_7__["HeaderModule"]],
      declarations: [_onboarding_page__WEBPACK_IMPORTED_MODULE_6__["OnboardingPage"]]
    })], OnboardingPageModule);
    /***/
  },

  /***/
  "./src/app/onboarding/onboarding.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/onboarding/onboarding.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOnboardingOnboardingPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-slides {\n  height: 100%;\n}\n\n.swiper-slide {\n  display: block;\n}\n\nb {\n  font-weight: 500;\n}\n\np {\n  font-size: 18px;\n  color: var(--ion-color-step-600, #60646b);\n  text-align: left;\n}\n\np b {\n  color: var(--ion-text-color, #000000);\n}\n\nh1 {\n  color: var(--ion-color-primary, #c80f2e);\n}\n\nh5 {\n  color: var(--ion-color-step-600, #60646b);\n}\n\nion-col {\n  border: 1px solid black;\n}\n\nion-item {\n  padding: 7px;\n}\n\nion-icon {\n  width: 60px;\n  height: 60px;\n}\n\nion-icon .bigger {\n  width: 120px;\n  height: 120px;\n}\n\n.buttonbottom {\n  position: absolute;\n  top: 80%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RlZmF1bHQvRG9jdW1lbnRzL3Byb2plY3QxOS1jaXRpemVuYXBwL3NyYy9hcHAvb25ib2FyZGluZy9vbmJvYXJkaW5nLnBhZ2Uuc2NzcyIsInNyYy9hcHAvb25ib2FyZGluZy9vbmJvYXJkaW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURDQTtFQUNFLGdCQUFBO0FDRUY7O0FEQ0E7RUFDRSxlQUFBO0VBQ0EseUNBQUE7RUFDQSxnQkFBQTtBQ0VGOztBRENBO0VBQ0UscUNBQUE7QUNFRjs7QURDQTtFQUNFLHdDQUFBO0FDRUY7O0FEQUE7RUFDRSx5Q0FBQTtBQ0dGOztBREFBO0VBQ0UsdUJBQUE7QUNHRjs7QUREQTtFQUNFLFlBQUE7QUNJRjs7QURGQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDS0Y7O0FESEE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQ01GOztBREpBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0FDT0YiLCJmaWxlIjoic3JjL2FwcC9vbmJvYXJkaW5nL29uYm9hcmRpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNsaWRlcyB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnN3aXBlci1zbGlkZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuYiB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbnAge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC02MDAsICM2MDY0NmIpO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG5wIGIge1xuICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IsICMwMDAwMDApO1xufVxuXG5oMSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgI2M4MGYyZSk7XG59XG5oNSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC02MDAsICM2MDY0NmIpO1xufVxuXG5pb24tY29sIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5pb24taXRlbSB7XG4gIHBhZGRpbmc6IDdweDtcbn1cbmlvbi1pY29uIHtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNjBweDtcbn1cbmlvbi1pY29uIC5iaWdnZXIge1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogMTIwcHg7XG59XG4uYnV0dG9uYm90dG9tIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDgwJTtcbn1cbiIsImlvbi1zbGlkZXMge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zd2lwZXItc2xpZGUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuYiB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbnAge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC02MDAsICM2MDY0NmIpO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG5wIGIge1xuICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IsICMwMDAwMDApO1xufVxuXG5oMSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgI2M4MGYyZSk7XG59XG5cbmg1IHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTYwMCwgIzYwNjQ2Yik7XG59XG5cbmlvbi1jb2wge1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuaW9uLWl0ZW0ge1xuICBwYWRkaW5nOiA3cHg7XG59XG5cbmlvbi1pY29uIHtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNjBweDtcbn1cblxuaW9uLWljb24gLmJpZ2dlciB7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiAxMjBweDtcbn1cblxuLmJ1dHRvbmJvdHRvbSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA4MCU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/onboarding/onboarding.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/onboarding/onboarding.page.ts ***!
    \***********************************************/

  /*! exports provided: OnboardingPage */

  /***/
  function srcAppOnboardingOnboardingPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OnboardingPage", function () {
      return OnboardingPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _api_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../api/user.service */
    "./src/app/api/user.service.ts");

    var OnboardingPage = /*#__PURE__*/function () {
      function OnboardingPage(userService, router) {
        _classCallCheck(this, OnboardingPage);

        this.userService = userService;
        this.router = router;
        this.shadowEmail = 'shadow@nomail.com';
        this.shadowPassword = 'shadowPasword00987@4355';
      }

      _createClass(OnboardingPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "register",
        value: function register() {
          var _this = this;

          this.userService.startUpCompleted().then(function () {
            _this.router.navigate(['/register']);
          });
        }
      }, {
        key: "createShadowUser",
        value: function createShadowUser() {
          var _this2 = this;

          this.userService.getUserByEmail(this.shadowEmail).then(function (data) {
            if (!data) {
              _this2.userService.createShadowUser().then(function () {
                _this2.userService.authenticate(_this2.shadowEmail, _this2.shadowPassword).then(function (user) {
                  if (user) {
                    _this2.router.navigate(['/home']);
                  }
                });
              });
            } else {
              _this2.userService.authenticate(_this2.shadowEmail, _this2.shadowPassword).then(function (result) {
                if (!result) {
                  _this2.router.navigate(['/home']);
                } else {
                  _this2.router.navigate(['/login']);
                }
              });
            }
          });
        }
      }]);

      return OnboardingPage;
    }();

    OnboardingPage.ctorParameters = function () {
      return [{
        type: _api_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    OnboardingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-onboarding',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./onboarding.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/onboarding/onboarding.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./onboarding.page.scss */
      "./src/app/onboarding/onboarding.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], OnboardingPage);
    /***/
  }
}]);
//# sourceMappingURL=onboarding-onboarding-module-es5.js.map