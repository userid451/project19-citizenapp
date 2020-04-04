(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-user-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/login/login.page.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/login/login.page.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header headerTitle=\"Log In\"></app-header>\n\n<ion-content no-bounce padding>\n\n  <ion-row class=\"app-icon-container\">\n    <ion-col class=\"ion-text-center\">\n      <ion-icon name=\"logo-ionic\" class=\"app-icon-zoom\"></ion-icon>\n    </ion-col>\n  </ion-row>\n\n  <form [formGroup]=\"loginForm\">\n    <div *ngIf=\"!loginForm.controls.login.valid\"\n         class=\"validator-error\">\n      Email or password is incorrect.\n    </div>\n    <ion-item>\n      <ion-label position=\"floating\">Email</ion-label>\n      <ion-input [formControl]=\"loginForm.controls['email']\"\n                 type=\"email\"></ion-input>\n    </ion-item>\n\n    <div *ngIf=\"!loginForm.controls.email.valid &&\n        loginForm.controls.email.dirty\"\n         class=\"validator-error\">\n      Please enter a valid email.\n    </div>\n\n    <ion-item>\n      <ion-label position=\"floating\">Password</ion-label>\n      <ion-input [formControl]=\"loginForm.controls['password']\"\n                 type=\"password\"></ion-input>\n    </ion-item>\n\n    <div *ngIf=\"!loginForm.controls.password.valid &&\n        loginForm.controls.password.dirty\"\n         class=\"validator-error\">\n      Please enter a valid password.\n    </div>\n\n    <ion-row class=\"sign-in-button-container\">\n      <ion-col class=\"ion-text-center\">\n        <div class=\"ion-padding\">\n          <ion-button\n                  expand=\"block\" type=\"submit\" class=\"ion-no-margin\"\n                  style=\"--border-radius: 12px\"\n                  [disabled]=\"!loginForm.valid\" (click)=\"onSignIn()\">SIGN IN</ion-button>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class=\"ion-text-center\">\n        <ion-button fill=\"clear\"\n                (click)=\"onForgotPassword()\">\n          Forgot your password?\n        </ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"ion-text-center\">\n        <ion-button fill=\"clear\"\n          [routerLink]=\"['/register']\">\n          Register\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n  </form>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/user/login/login-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/user/login/login-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/user/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/user/login/login.module.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/user/login/login.module.ts ***!
  \**************************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/pages/user/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/user/login/login.page.ts");
/* harmony import */ var _component_header_header_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../component/header/header.module */ "./src/app/component/header/header.module.ts");








let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _component_header_header_module__WEBPACK_IMPORTED_MODULE_7__["HeaderModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/pages/user/login/login.page.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/user/login/login.page.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p {\n  font-size: 1.8rem;\n}\n\n.app-icon-container {\n  padding-top: 44px;\n  padding-bottom: 44px;\n}\n\n.app-icon-zoom {\n  zoom: 4;\n}\n\n.validator-error {\n  color: red;\n  padding-top: 8px;\n  padding-left: 16px;\n}\n\n.fab-container {\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RlZmF1bHQvRG9jdW1lbnRzL3Byb2plY3QxOS1jaXRpemVuYXBwL3NyYy9hcHAvcGFnZXMvdXNlci9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3VzZXIvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7QUNDRjs7QURFQTtFQUNFLE9BQUE7QUNDRjs7QURHQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQUY7O0FER0E7RUFDRSxrQkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdXNlci9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcbiAgZm9udC1zaXplOiAxLjhyZW07XG59XG5cbi5hcHAtaWNvbi1jb250YWluZXIge1xuICBwYWRkaW5nLXRvcDogNDRweDtcbiAgcGFkZGluZy1ib3R0b206IDQ0cHg7XG59XG5cbi5hcHAtaWNvbi16b29tIHtcbiAgem9vbTogNC4wO1xufVxuXG5cbi52YWxpZGF0b3ItZXJyb3Ige1xuICBjb2xvcjogcmVkO1xuICBwYWRkaW5nLXRvcDogOHB4O1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG59XG5cbi5mYWItY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufSIsInAge1xuICBmb250LXNpemU6IDEuOHJlbTtcbn1cblxuLmFwcC1pY29uLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctdG9wOiA0NHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNDRweDtcbn1cblxuLmFwcC1pY29uLXpvb20ge1xuICB6b29tOiA0O1xufVxuXG4udmFsaWRhdG9yLWVycm9yIHtcbiAgY29sb3I6IHJlZDtcbiAgcGFkZGluZy10b3A6IDhweDtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xufVxuXG4uZmFiLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/user/login/login.page.ts":
/*!************************************************!*\
  !*** ./src/app/pages/user/login/login.page.ts ***!
  \************************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _api_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../api/user.service */ "./src/app/api/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let LoginPage = class LoginPage {
    // const PURE_EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //
    // // Passwords should be at least 8 characters long and should contain one number, one character and one special character.
    // const PASSWORD_REGEXP = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    // export const regexValidators = {
    //   email: PURE_EMAIL_REGEXP,
    //   password: PASSWORD_REGEXP
    // };
    constructor(formBuilder, userService, router) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.router = router;
        this.loginForm = this.formBuilder.group({
            email: [
                '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])
            ],
            password: [
                '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])
            ],
            login: []
        });
    }
    ngOnInit() {
        this.userService.getAuthenticatedUser().then((data) => {
            // if (data) {
            //   this.router.navigate(['/register']);
            // }
        });
    }
    onSignIn() {
        this.userService.authenticate(this.loginForm.controls['email'].value, this.loginForm.controls['password'].value).then((user) => {
            if (!user) {
                this.loginForm.controls['login'].setErrors({ 'incorrect': true });
            }
            else {
                this.router.navigate(['/home']);
            }
        });
    }
    onForgotPassword() {
        //Todo
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _api_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/login/login.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/user/login/login.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _api_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=pages-user-login-login-module-es2015.js.map