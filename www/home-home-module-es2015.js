(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/@ionic-native/geolocation/ngx/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic-native/geolocation/ngx/index.js ***!
  \*************************************************************/
/*! exports provided: Geolocation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Geolocation", function() { return Geolocation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




var Geolocation = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Geolocation, _super);
    function Geolocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Geolocation.prototype.getCurrentPosition = function (options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getCurrentPosition", { "callbackOrder": "reverse" }, arguments); };
    /**
     * Watch the current device's position.  Clear the watch by unsubscribing from
     * Observable changes.
     *
     * ```typescript
     * const subscription = this.geolocation.watchPosition()
     *                               .filter((p) => p.coords !== undefined) //Filter Out Errors
     *                               .subscribe(position => {
     *   console.log(position.coords.longitude + ' ' + position.coords.latitude);
     * });
     *
     * // To stop notifications
     * subscription.unsubscribe();
     * ```
     *
     * @param {GeolocationOptions} options  The [geolocation options](https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions).
     * @returns {Observable<Geoposition>} Returns an Observable that notifies with the [position](https://developer.mozilla.org/en-US/docs/Web/API/Position) of the device, or errors.
     */
    Geolocation.prototype.watchPosition = function (options) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            var watchId = navigator.geolocation.watchPosition(observer.next.bind(observer), observer.next.bind(observer), options);
            return function () { return navigator.geolocation.clearWatch(watchId); };
        });
    };
    Geolocation.pluginName = "Geolocation";
    Geolocation.plugin = "cordova-plugin-geolocation";
    Geolocation.pluginRef = "navigator.geolocation";
    Geolocation.repo = "https://github.com/apache/cordova-plugin-geolocation";
    Geolocation.install = "ionic cordova plugin add cordova-plugin-geolocation --variable GEOLOCATION_USAGE_DESCRIPTION=\"To locate you\"";
    Geolocation.installVariables = ["GEOLOCATION_USAGE_DESCRIPTION"];
    Geolocation.platforms = ["Amazon Fire OS", "Android", "Browser", "iOS", "Windows"];
    Geolocation = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], Geolocation);
    return Geolocation;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2dlb2xvY2F0aW9uL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7O0lBaUtELCtCQUFpQjs7OztJQVVoRCx3Q0FBa0IsYUFBQyxPQUE0QjtJQUkvQzs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FpQkc7SUFDSCxtQ0FBYSxHQUFiLFVBQWMsT0FBNEI7UUFDeEMsT0FBTyxJQUFJLFVBQVUsQ0FBYyxVQUFDLFFBQWE7WUFDL0MsSUFBTSxPQUFPLEdBQUcsU0FBUyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQ2pELFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUM1QixRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFDNUIsT0FBTyxDQUNSLENBQUM7WUFDRixPQUFPLGNBQU0sT0FBQSxTQUFTLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsRUFBekMsQ0FBeUMsQ0FBQztRQUN6RCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7Ozs7O0lBekNVLFdBQVc7UUFEdkIsVUFBVSxFQUFFO09BQ0EsV0FBVztzQkFuS3hCO0VBbUtpQyxpQkFBaUI7U0FBckMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5kZWNsYXJlIGNvbnN0IG5hdmlnYXRvcjogYW55O1xuXG5leHBvcnQgaW50ZXJmYWNlIENvb3JkaW5hdGVzIHtcbiAgLyoqXG4gICAqIGEgZG91YmxlIHJlcHJlc2VudGluZyB0aGUgcG9zaXRpb24ncyBsYXRpdHVkZSBpbiBkZWNpbWFsIGRlZ3JlZXMuXG4gICAqL1xuICBsYXRpdHVkZTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBBIGRvdWJsZSByZXByZXNlbnRpbmcgdGhlIHBvc2l0aW9uJ3MgbG9uZ2l0dWRlIGluIGRlY2ltYWwgZGVncmVlcy5cbiAgICovXG4gIGxvbmdpdHVkZTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBBIGRvdWJsZSByZXByZXNlbnRpbmcgdGhlIGFjY3VyYWN5IG9mIHRoZSBsYXRpdHVkZSBhbmQgbG9uZ2l0dWRlIHByb3BlcnRpZXMsXG4gICAqIGV4cHJlc3NlZCBpbiBtZXRlcnMuXG4gICAqL1xuICBhY2N1cmFjeTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBBIGRvdWJsZSByZXByZXNlbnRpbmcgdGhlIHBvc2l0aW9uJ3MgYWx0aXR1ZGUgaW4gbWV0cmVzLCByZWxhdGl2ZSB0byBzZWFcbiAgICogbGV2ZWwuIFRoaXMgdmFsdWUgY2FuIGJlIG51bGwgaWYgdGhlIGltcGxlbWVudGF0aW9uIGNhbm5vdCBwcm92aWRlIHRoZSBkYXRhLlxuICAgKi9cbiAgYWx0aXR1ZGU6IG51bWJlcjtcblxuICAvKipcbiAgICogQSBkb3VibGUgcmVwcmVzZW50aW5nIHRoZSBhY2N1cmFjeSBvZiB0aGUgYWx0aXR1ZGUgZXhwcmVzc2VkIGluIG1ldGVycy5cbiAgICogVGhpcyB2YWx1ZSBjYW4gYmUgbnVsbC5cbiAgICovXG4gIGFsdGl0dWRlQWNjdXJhY3k6IG51bWJlcjtcblxuICAvKipcbiAgICogQSBkb3VibGUgcmVwcmVzZW50aW5nIHRoZSBkaXJlY3Rpb24gaW4gd2hpY2ggdGhlIGRldmljZSBpcyB0cmF2ZWxpbmcuIFRoaXNcbiAgICogdmFsdWUsIHNwZWNpZmllZCBpbiBkZWdyZWVzLCBpbmRpY2F0ZXMgaG93IGZhciBvZmYgZnJvbSBoZWFkaW5nIHRydWUgbm9ydGhcbiAgICogdGhlIGRldmljZSBpcy4gMCBkZWdyZWVzIHJlcHJlc2VudHMgdHJ1ZSBub3J0aCwgYW5kIHRoZSBkaXJlY3Rpb24gaXNcbiAgICogZGV0ZXJtaW5lZCBjbG9ja3dpc2UgKHdoaWNoIG1lYW5zIHRoYXQgZWFzdCBpcyA5MCBkZWdyZWVzIGFuZCB3ZXN0IGlzIDI3MFxuICAgKiBkZWdyZWVzKS4gSWYgc3BlZWQgaXMgMCwgaGVhZGluZyBpcyBOYU4uIElmIHRoZSBkZXZpY2UgaXMgdW5hYmxlIHRvIHByb3ZpZGVcbiAgICogaGVhZGluZyBpbmZvcm1hdGlvbiwgdGhpcyB2YWx1ZSBpcyBudWxsLlxuICAgKi9cbiAgaGVhZGluZzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBBIGRvdWJsZSByZXByZXNlbnRpbmcgdGhlIHZlbG9jaXR5IG9mIHRoZSBkZXZpY2UgaW4gbWV0ZXJzIHBlciBzZWNvbmQuXG4gICAqIFRoaXMgdmFsdWUgY2FuIGJlIG51bGwuXG4gICAqL1xuICBzcGVlZDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdlb3Bvc2l0aW9uIHtcbiAgLyoqXG4gICAqIEEgQ29vcmRpbmF0ZXMgb2JqZWN0IGRlZmluaW5nIHRoZSBjdXJyZW50IGxvY2F0aW9uXG4gICAqL1xuICBjb29yZHM6IENvb3JkaW5hdGVzO1xuXG4gIC8qKlxuICAgKiBBIHRpbWVzdGFtcCByZXByZXNlbnRpbmcgdGhlIHRpbWUgYXQgd2hpY2ggdGhlIGxvY2F0aW9uIHdhcyByZXRyaWV2ZWQuXG4gICAqL1xuICB0aW1lc3RhbXA6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQb3NpdGlvbkVycm9yIHtcbiAgLyoqXG4gICAqIEEgY29kZSB0aGF0IGluZGljYXRlcyB0aGUgZXJyb3IgdGhhdCBvY2N1cnJlZFxuICAgKi9cbiAgY29kZTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBBIG1lc3NhZ2UgdGhhdCBjYW4gZGVzY3JpYmUgdGhlIGVycm9yIHRoYXQgb2NjdXJyZWRcbiAgICovXG4gIG1lc3NhZ2U6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHZW9sb2NhdGlvbk9wdGlvbnMge1xuICAvKipcbiAgICogSXMgYSBwb3NpdGl2ZSBsb25nIHZhbHVlIGluZGljYXRpbmcgdGhlIG1heGltdW0gYWdlIGluIG1pbGxpc2Vjb25kcyBvZiBhXG4gICAqIHBvc3NpYmxlIGNhY2hlZCBwb3NpdGlvbiB0aGF0IGlzIGFjY2VwdGFibGUgdG8gcmV0dXJuLiBJZiBzZXQgdG8gMCwgaXRcbiAgICogbWVhbnMgdGhhdCB0aGUgZGV2aWNlIGNhbm5vdCB1c2UgYSBjYWNoZWQgcG9zaXRpb24gYW5kIG11c3QgYXR0ZW1wdCB0b1xuICAgKiByZXRyaWV2ZSB0aGUgcmVhbCBjdXJyZW50IHBvc2l0aW9uLiBJZiBzZXQgdG8gSW5maW5pdHkgdGhlIGRldmljZSBtdXN0XG4gICAqIHJldHVybiBhIGNhY2hlZCBwb3NpdGlvbiByZWdhcmRsZXNzIG9mIGl0cyBhZ2UuIERlZmF1bHQ6IDAuXG4gICAqL1xuICBtYXhpbXVtQWdlPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBJcyBhIHBvc2l0aXZlIGxvbmcgdmFsdWUgcmVwcmVzZW50aW5nIHRoZSBtYXhpbXVtIGxlbmd0aCBvZiB0aW1lXG4gICAqIChpbiBtaWxsaXNlY29uZHMpIHRoZSBkZXZpY2UgaXMgYWxsb3dlZCB0byB0YWtlIGluIG9yZGVyIHRvIHJldHVybiBhXG4gICAqIHBvc2l0aW9uLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyBJbmZpbml0eSwgbWVhbmluZyB0aGF0IGdldEN1cnJlbnRQb3NpdGlvbigpXG4gICAqIHdvbid0IHJldHVybiB1bnRpbCB0aGUgcG9zaXRpb24gaXMgYXZhaWxhYmxlLlxuICAgKi9cbiAgdGltZW91dD86IG51bWJlcjtcblxuICAvKipcbiAgICogSW5kaWNhdGVzIHRoZSBhcHBsaWNhdGlvbiB3b3VsZCBsaWtlIHRvIHJlY2VpdmUgdGhlIGJlc3QgcG9zc2libGUgcmVzdWx0cy5cbiAgICogSWYgdHJ1ZSBhbmQgaWYgdGhlIGRldmljZSBpcyBhYmxlIHRvIHByb3ZpZGUgYSBtb3JlIGFjY3VyYXRlIHBvc2l0aW9uLCBpdFxuICAgKiB3aWxsIGRvIHNvLiBOb3RlIHRoYXQgdGhpcyBjYW4gcmVzdWx0IGluIHNsb3dlciByZXNwb25zZSB0aW1lcyBvciBpbmNyZWFzZWRcbiAgICogcG93ZXIgY29uc3VtcHRpb24gKHdpdGggYSBHUFMgY2hpcCBvbiBhIG1vYmlsZSBkZXZpY2UgZm9yIGV4YW1wbGUpLiBPbiB0aGVcbiAgICogb3RoZXIgaGFuZCwgaWYgZmFsc2UsIHRoZSBkZXZpY2UgY2FuIHRha2UgdGhlIGxpYmVydHkgdG8gc2F2ZSByZXNvdXJjZXMgYnlcbiAgICogcmVzcG9uZGluZyBtb3JlIHF1aWNrbHkgYW5kL29yIHVzaW5nIGxlc3MgcG93ZXIuIERlZmF1bHQ6IGZhbHNlLlxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIGVuYWJsZUhpZ2hBY2N1cmFjeT86IGJvb2xlYW47XG59XG5cbi8qKlxuICogQG5hbWUgR2VvbG9jYXRpb25cbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gcHJvdmlkZXMgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGRldmljZSdzIGxvY2F0aW9uLCBzdWNoIGFzIGxhdGl0dWRlIGFuZCBsb25naXR1ZGUuIENvbW1vbiBzb3VyY2VzIG9mIGxvY2F0aW9uIGluZm9ybWF0aW9uIGluY2x1ZGUgR2xvYmFsIFBvc2l0aW9uaW5nIFN5c3RlbSAoR1BTKSBhbmQgbG9jYXRpb24gaW5mZXJyZWQgZnJvbSBuZXR3b3JrIHNpZ25hbHMgc3VjaCBhcyBJUCBhZGRyZXNzLCBSRklELCBXaUZpIGFuZCBCbHVldG9vdGggTUFDIGFkZHJlc3NlcywgYW5kIEdTTS9DRE1BIGNlbGwgSURzLlxuICpcbiAqICBUaGlzIEFQSSBpcyBiYXNlZCBvbiB0aGUgVzNDIEdlb2xvY2F0aW9uIEFQSSBTcGVjaWZpY2F0aW9uLCBhbmQgb25seSBleGVjdXRlcyBvbiBkZXZpY2VzIHRoYXQgZG9uJ3QgYWxyZWFkeSBwcm92aWRlIGFuIGltcGxlbWVudGF0aW9uLlxuICpcbiAqIEZvciBpT1MgeW91IGhhdmUgdG8gYWRkIHRoaXMgY29uZmlndXJhdGlvbiB0byB5b3VyIGNvbmZpZ3VyYXRpb24ueG1sIGZpbGVcbiAqIGBgYHhtbFxuICogPGVkaXQtY29uZmlnIGZpbGU9XCIqLUluZm8ucGxpc3RcIiBtb2RlPVwibWVyZ2VcIiB0YXJnZXQ9XCJOU0xvY2F0aW9uV2hlbkluVXNlVXNhZ2VEZXNjcmlwdGlvblwiPlxuICogICAgPHN0cmluZz5XZSB1c2UgeW91ciBsb2NhdGlvbiBmb3IgZnVsbCBmdW5jdGlvbmFsaXR5IG9mIGNlcnRhaW4gYXBwIGZlYXR1cmVzLjwvc3RyaW5nPlxuICogPC9lZGl0LWNvbmZpZz5cbiAqIGBgYFxuICpcbiAqXG4gKiBAdXNhZ2VcbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBHZW9sb2NhdGlvbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvZ2VvbG9jYXRpb24vbmd4JztcbiAqXG4gKiAuLi5cbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGdlb2xvY2F0aW9uOiBHZW9sb2NhdGlvbikge31cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbigpLnRoZW4oKHJlc3ApID0+IHtcbiAqICAvLyByZXNwLmNvb3Jkcy5sYXRpdHVkZVxuICogIC8vIHJlc3AuY29vcmRzLmxvbmdpdHVkZVxuICogfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gKiAgIGNvbnNvbGUubG9nKCdFcnJvciBnZXR0aW5nIGxvY2F0aW9uJywgZXJyb3IpO1xuICogfSk7XG4gKlxuICogbGV0IHdhdGNoID0gdGhpcy5nZW9sb2NhdGlvbi53YXRjaFBvc2l0aW9uKCk7XG4gKiB3YXRjaC5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAqICAvLyBkYXRhIGNhbiBiZSBhIHNldCBvZiBjb29yZGluYXRlcywgb3IgYW4gZXJyb3IgKGlmIGFuIGVycm9yIG9jY3VycmVkKS5cbiAqICAvLyBkYXRhLmNvb3Jkcy5sYXRpdHVkZVxuICogIC8vIGRhdGEuY29vcmRzLmxvbmdpdHVkZVxuICogfSk7XG4gKiBgYGBcbiAqIEBpbnRlcmZhY2VzXG4gKiBDb29yZGluYXRlc1xuICogR2VvcG9zaXRpb25cbiAqIFBvc2l0aW9uRXJyb3JcbiAqIEdlb2xvY2F0aW9uT3B0aW9uc1xuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0dlb2xvY2F0aW9uJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZ2VvbG9jYXRpb24nLFxuICBwbHVnaW5SZWY6ICduYXZpZ2F0b3IuZ2VvbG9jYXRpb24nLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1nZW9sb2NhdGlvbicsXG4gIGluc3RhbGw6XG4gICAgJ2lvbmljIGNvcmRvdmEgcGx1Z2luIGFkZCBjb3Jkb3ZhLXBsdWdpbi1nZW9sb2NhdGlvbiAtLXZhcmlhYmxlIEdFT0xPQ0FUSU9OX1VTQUdFX0RFU0NSSVBUSU9OPVwiVG8gbG9jYXRlIHlvdVwiJyxcbiAgaW5zdGFsbFZhcmlhYmxlczogWydHRU9MT0NBVElPTl9VU0FHRV9ERVNDUklQVElPTiddLFxuICBwbGF0Zm9ybXM6IFsnQW1hem9uIEZpcmUgT1MnLCAnQW5kcm9pZCcsICdCcm93c2VyJywgJ2lPUycsICdXaW5kb3dzJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR2VvbG9jYXRpb24gZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBHZXQgdGhlIGRldmljZSdzIGN1cnJlbnQgcG9zaXRpb24uXG4gICAqXG4gICAqIEBwYXJhbSB7R2VvbG9jYXRpb25PcHRpb25zfSBvcHRpb25zICBUaGUgW2dlb2xvY2F0aW9uIG9wdGlvbnNdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9Qb3NpdGlvbk9wdGlvbnMpLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxHZW9wb3NpdGlvbj59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgW3Bvc2l0aW9uXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvUG9zaXRpb24pIG9mIHRoZSBkZXZpY2UsIG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZSdcbiAgfSlcbiAgZ2V0Q3VycmVudFBvc2l0aW9uKG9wdGlvbnM/OiBHZW9sb2NhdGlvbk9wdGlvbnMpOiBQcm9taXNlPEdlb3Bvc2l0aW9uPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFdhdGNoIHRoZSBjdXJyZW50IGRldmljZSdzIHBvc2l0aW9uLiAgQ2xlYXIgdGhlIHdhdGNoIGJ5IHVuc3Vic2NyaWJpbmcgZnJvbVxuICAgKiBPYnNlcnZhYmxlIGNoYW5nZXMuXG4gICAqXG4gICAqIGBgYHR5cGVzY3JpcHRcbiAgICogY29uc3Qgc3Vic2NyaXB0aW9uID0gdGhpcy5nZW9sb2NhdGlvbi53YXRjaFBvc2l0aW9uKClcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcigocCkgPT4gcC5jb29yZHMgIT09IHVuZGVmaW5lZCkgLy9GaWx0ZXIgT3V0IEVycm9yc1xuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKHBvc2l0aW9uID0+IHtcbiAgICogICBjb25zb2xlLmxvZyhwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlICsgJyAnICsgcG9zaXRpb24uY29vcmRzLmxhdGl0dWRlKTtcbiAgICogfSk7XG4gICAqXG4gICAqIC8vIFRvIHN0b3Agbm90aWZpY2F0aW9uc1xuICAgKiBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICogYGBgXG4gICAqXG4gICAqIEBwYXJhbSB7R2VvbG9jYXRpb25PcHRpb25zfSBvcHRpb25zICBUaGUgW2dlb2xvY2F0aW9uIG9wdGlvbnNdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9Qb3NpdGlvbk9wdGlvbnMpLlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxHZW9wb3NpdGlvbj59IFJldHVybnMgYW4gT2JzZXJ2YWJsZSB0aGF0IG5vdGlmaWVzIHdpdGggdGhlIFtwb3NpdGlvbl0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1Bvc2l0aW9uKSBvZiB0aGUgZGV2aWNlLCBvciBlcnJvcnMuXG4gICAqL1xuICB3YXRjaFBvc2l0aW9uKG9wdGlvbnM/OiBHZW9sb2NhdGlvbk9wdGlvbnMpOiBPYnNlcnZhYmxlPEdlb3Bvc2l0aW9uPiB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlPEdlb3Bvc2l0aW9uPigob2JzZXJ2ZXI6IGFueSkgPT4ge1xuICAgICAgY29uc3Qgd2F0Y2hJZCA9IG5hdmlnYXRvci5nZW9sb2NhdGlvbi53YXRjaFBvc2l0aW9uKFxuICAgICAgICBvYnNlcnZlci5uZXh0LmJpbmQob2JzZXJ2ZXIpLFxuICAgICAgICBvYnNlcnZlci5uZXh0LmJpbmQob2JzZXJ2ZXIpLFxuICAgICAgICBvcHRpb25zXG4gICAgICApO1xuICAgICAgcmV0dXJuICgpID0+IG5hdmlnYXRvci5nZW9sb2NhdGlvbi5jbGVhcldhdGNoKHdhdGNoSWQpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header headerTitle=\"Home\"></app-header>\n\n<ion-content fullscreen>\n  <!--  <ion-card>-->\n\n  <!--    <ion-item>-->\n  <!--      <ion-img src=\"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg\" ></ion-img>-->\n  <!--&lt;!&ndash;      <ion-label>ion-item in a card, icon left, button right</ion-label>&ndash;&gt;-->\n  <!--&lt;!&ndash;      <ion-button fill=\"outline\" slot=\"end\">View</ion-button>&ndash;&gt;-->\n  <!--    </ion-item>-->\n\n  <!--    <ion-card-content>-->\n  <!--      This is content, without any paragraph or header tags,-->\n  <!--      within an ion-card-content element.-->\n  <!--    </ion-card-content>-->\n  <!--  </ion-card>-->\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div>\n          <ion-card>\n            <span style=\"text-align: center;\">\n              <ngx-qrcode\n                [qrc-element-type]=\"elementType\"\n                [qrc-value]=\"qrValue\"\n                qrc-class=\"aclass\"\n                qrc-errorCorrectionLevel=\"L\"\n              >\n              </ngx-qrcode>\n            </span>\n          </ion-card>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-card>\n          <ion-card-header>\n            <ion-card-subtitle>Moderate risk of infection</ion-card-subtitle>\n            <ion-card-title>Your status is Yellow</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            This is an estimation based on our algorithm that analyzed your\n            location and time you spent in infected zones.\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");




const routes = [
    {
        path: "",
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    },
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _component_header_header_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../component/header/header.module */ "./src/app/component/header/header.module.ts");
/* harmony import */ var ngx_qrcode2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-qrcode2 */ "./node_modules/ngx-qrcode2/index.js");









let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"],
            _component_header_header_module__WEBPACK_IMPORTED_MODULE_7__["HeaderModule"],
            ngx_qrcode2__WEBPACK_IMPORTED_MODULE_8__["NgxQRCodeModule"],
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]],
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  padding: 3px;\n  margin: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RlZmF1bHQvRG9jdW1lbnRzL3Byb2plY3QxOS1jaXRpemVuYXBwL3NyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQge1xuICBwYWRkaW5nOiAzcHg7XG4gIG1hcmdpbjogM3B4O1xufSIsImlvbi1jYXJkIHtcbiAgcGFkZGluZzogM3B4O1xuICBtYXJnaW46IDNweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/user.service */ "./src/app/api/user.service.ts");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");




let HomePage = class HomePage {
    constructor(userService, geoLocation) {
        this.userService = userService;
        this.geoLocation = geoLocation;
    }
    ngOnInit() {
        this.userService.getAuthenticatedUser().then((user) => {
            if (user) {
                this.user = JSON.parse(user);
                this.qrValue = this.user.id;
            }
            else {
                // go to log in page
            }
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _api_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__["Geolocation"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-home",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
        _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__["Geolocation"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map