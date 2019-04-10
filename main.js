(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <app-header></app-header>\n  <!--<app-content></app-content>-->\n  <app-container></app-container>\n</div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'munch';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _modules_header_header_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/header/header.module */ "./src/app/modules/header/header.module.ts");
/* harmony import */ var _modules_content_content_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/content/content.module */ "./src/app/modules/content/content.module.ts");
/* harmony import */ var _modules_container_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/container/container.module */ "./src/app/modules/container/container.module.ts");
/* harmony import */ var ngx_parallax__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-parallax */ "./node_modules/ngx-parallax/dist/bundle.js");
/* harmony import */ var ngx_parallax__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ngx_parallax__WEBPACK_IMPORTED_MODULE_8__);









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _modules_header_header_module__WEBPACK_IMPORTED_MODULE_5__["HeaderModule"],
                _modules_content_content_module__WEBPACK_IMPORTED_MODULE_6__["ContentModule"],
                _modules_container_container_module__WEBPACK_IMPORTED_MODULE_7__["ContainerModule"],
                ngx_parallax__WEBPACK_IMPORTED_MODULE_8__["ParallaxModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/modules/container/container.component.html":
/*!************************************************************!*\
  !*** ./src/app/modules/container/container.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12 px-0 block-1\">\n    <img src=\"/assets/intro.png\" alt=\"\" class=\"img-fluid\">\n    <img src=\"/assets/the-scream.png\" alt=\"\" class=\"picture\">\n    <div class=\"text-block-1\">\n        <div class=\"secondary-1\">Крик&nbsp;природы</div>\n        <div class=\"primary-1\">Der&nbsp;Schrei&nbsp;der&nbsp;Natur</div>\n    </div>\n</div>\n<div class=\"col-12 px-0 block-2\">\n    <img src=\"/assets/munch.png\" alt=\"\" class=\"munch-portret\">\n    <div class=\"block-ellipse\">\n        <img src=\"/assets/ellipse-s.png\" class=\"ellipse-s\" alt=\"\">\n        <img src=\"/assets/ellipse-m.png\" class=\"ellipse-m\" alt=\"\">\n        <img src=\"/assets/ellipse-l.png\" class=\"ellipse-l\" alt=\"\">\n    </div>\n    <div class=\"text-block-2\">\n        <div class=\"primary-2\">Пришло время узнать что происходит на&nbsp;картине «Крик»</div>\n        <div class=\"secondary-2\">Погрузиться внутрь картины, оказаться на берегу Осло-фьёрда и&nbsp;своими глазами\n            увидеть что\n            так поразило\n            художника\n        </div>\n    </div>\n</div>\n<div class=\"col-12 px-0 block-3\">\n    <img src=\"/assets/Rectangle 2.png\" alt=\"\" class=\"img-fluid backgorund-block-3\">\n    <img src=\"/assets/htcviveon.png\" alt=\"\" class=\"htcviveon\">\n    <div class=\"text-block-3\">\n        <div class=\"secondary-3\">Лучшие&nbsp;виды</div>\n        <div class=\"primary-3\">Oslofjorden</div>\n    </div>\n</div>\n<div class=\"col-12 px-0 block-4\">\n    <div class=\"text-block-4\">\n        <div class=\"primary-4\">Резонанс человека и природы</div>\n        <div class=\"secondary-4\">Мунк умел уловить настроение новержской природы, так что зритель сам входит в резонанс\n            с пейзажем картины.\n            Почувствуйте вибрации природы через опыт VR\n        </div>\n    </div>\n    <div class=\"planets\">\n        <img src=\"/assets/sphere-1.png\" alt=\"\" class=\"planet-1\">\n        <img src=\"/assets/sphere-2.png\" alt=\"\" class=\"planet-2\">\n        <img src=\"/assets/sphere-3.png\" alt=\"\" class=\"planet-3\">\n        <img src=\"/assets/sphere-4.png\" alt=\"\" class=\"planet-4\">\n    </div>\n</div>\n<div class=\"col-12 px-0 block-5\">\n    <img src=\"/assets/group-photo.png\" alt=\"\" class=\"img-fluid\">\n    <div class=\"photo-block-5\">\n        <img src=\"/assets/photo-1.png\" alt=\"\">\n        <img src=\"/assets/photo-2.png\" alt=\"\">\n        <img src=\"/assets/photo-3.png\" alt=\"\">\n        <img src=\"/assets/photo-4.png\" alt=\"\">\n    </div>\n</div>\n<div class=\"col-12 px-0 block-6\">\n    <div class=\"text-block-6\">\n        <div class=\"primary-6\">Пейзаж вашего настроения на память</div>\n        <div class=\"secondary-6\">Личность художника наболее ярко проявляется в его картинах. А какой пейзаж может\n            описать ваше настроение?\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/container/container.component.scss":
/*!************************************************************!*\
  !*** ./src/app/modules/container/container.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".block-1 .picture {\n  position: absolute;\n  top: 17%;\n  left: 54%;\n  width: 28%; }\n\n.block-1 .text-block-1 {\n  position: absolute;\n  top: 42px;\n  right: 774px;\n  width: 248px;\n  font-style: normal;\n  color: #FFFFFF; }\n\n.block-1 .text-block-1 div.secondary-1 {\n    -webkit-transform-origin: 0 0;\n            transform-origin: 0 0;\n    -webkit-transform: rotate(-90deg);\n            transform: rotate(-90deg);\n    position: absolute;\n    height: 93px;\n    left: 12px;\n    top: 412px;\n    font-size: 56px;\n    font-weight: bold;\n    line-height: 92px; }\n\n.block-1 .text-block-1 div.primary-1 {\n    color: #FE3D00;\n    -webkit-transform-origin: 0 0;\n            transform-origin: 0 0;\n    -webkit-transform: rotate(-90deg);\n            transform: rotate(-90deg);\n    font-size: 100px;\n    font-weight: bold;\n    line-height: 187px;\n    position: absolute;\n    height: 188px;\n    left: 54px;\n    top: 988px; }\n\n.block-2 {\n  height: 1120px; }\n\n.block-2 .munch-portret {\n    position: absolute;\n    left: 0;\n    bottom: 0px; }\n\n.block-2 .block-ellipse {\n    position: absolute;\n    width: 298px;\n    height: 206px;\n    left: 553px;\n    top: 190px; }\n\n.block-2 .block-ellipse .ellipse-s {\n      position: absolute;\n      left: 0;\n      bottom: 0; }\n\n.block-2 .block-ellipse .ellipse-m {\n      position: absolute;\n      top: 82px;\n      left: 84px; }\n\n.block-2 .block-ellipse .ellipse-l {\n      position: absolute;\n      top: 0;\n      right: 0; }\n\n.block-2 .text-block-2 {\n    position: absolute;\n    bottom: 96px;\n    right: 72px;\n    width: 841px; }\n\n.block-2 .text-block-2 .primary-2 {\n      font-style: normal;\n      font-weight: bold;\n      font-size: 72px;\n      line-height: 74px;\n      padding-bottom: 36px; }\n\n.block-2 .text-block-2 .secondary-2 {\n      font-style: normal;\n      font-weight: 100;\n      font-size: 48px;\n      line-height: 64px; }\n\n.block-3 {\n  height: 1200px; }\n\n.block-3 .backgorund-block-3 {\n    position: absolute;\n    bottom: 0; }\n\n.block-3 .htcviveon {\n    position: absolute;\n    bottom: 0;\n    right: 248px; }\n\n.block-3 .text-block-3 {\n    position: absolute;\n    right: 0;\n    top: 400px;\n    height: 700px;\n    width: 250px; }\n\n.block-3 .text-block-3 div.primary-3 {\n      color: #FE3D00;\n      -webkit-transform-origin: 0 0;\n              transform-origin: 0 0;\n      -webkit-transform: rotate(-90deg);\n              transform: rotate(-90deg);\n      font-size: 124px;\n      font-weight: bold;\n      line-height: 187px;\n      position: absolute;\n      bottom: -87px;\n      left: 50px; }\n\n.block-3 .text-block-3 div.secondary-3 {\n      -webkit-transform-origin: 0 0;\n              transform-origin: 0 0;\n      -webkit-transform: rotate(-90deg);\n              transform: rotate(-90deg);\n      position: absolute;\n      color: white;\n      bottom: -92px;\n      font-size: 56px;\n      font-weight: bold;\n      line-height: 92px; }\n\n.block-4 {\n  height: 1300px; }\n\n.block-4 .text-block-4 {\n    position: absolute;\n    top: 136px;\n    left: 183px;\n    width: 841px; }\n\n.block-4 .text-block-4 .primary-4 {\n      font-style: normal;\n      font-weight: bold;\n      font-size: 72px;\n      line-height: 74px;\n      padding-bottom: 36px; }\n\n.block-4 .text-block-4 .secondary-4 {\n      font-style: normal;\n      font-weight: 100;\n      font-size: 48px;\n      line-height: 64px; }\n\n.block-4 .planets {\n    position: absolute;\n    width: 1116px;\n    height: 937px;\n    left: 633px;\n    bottom: 140px; }\n\n.block-4 .planets .planet-1 {\n      position: absolute;\n      left: 0;\n      bottom: 0; }\n\n.block-4 .planets .planet-2 {\n      position: absolute;\n      left: 25%;\n      bottom: 23%; }\n\n.block-4 .planets .planet-3 {\n      position: absolute;\n      right: 21%;\n      top: 20%; }\n\n.block-4 .planets .planet-4 {\n      position: absolute;\n      right: 0;\n      top: 0; }\n\n.block-5 .photo-block-5 {\n  position: absolute;\n  left: 110px;\n  bottom: -296px;\n  width: 750px; }\n\n.block-5 .photo-block-5 img {\n    width: 357px;\n    height: 357px;\n    margin-top: 36px; }\n\n.block-5 .photo-block-5 img:nth-child(odd) {\n      margin-right: 36px; }\n\n.block-6 .text-block-6 {\n  position: absolute;\n  padding-top: 136px;\n  padding-bottom: 176px;\n  right: 72px;\n  width: 841px; }\n\n.block-6 .text-block-6 .primary-6 {\n    font-style: normal;\n    font-weight: bold;\n    font-size: 72px;\n    line-height: 74px;\n    padding-bottom: 36px; }\n\n.block-6 .text-block-6 .secondary-6 {\n    font-style: normal;\n    font-weight: 100;\n    font-size: 48px;\n    line-height: 64px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb250YWluZXIvQzpcXFVzZXJzXFxOTWFydXNldmFcXERvY3VtZW50c1xccHJvamVjdFxcbXVuY2gvc3JjXFxhcHBcXG1vZHVsZXNcXGNvbnRhaW5lclxcY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR0ksa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsVUFBVSxFQUFBOztBQU5kO0VBVUksa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixjQUFjLEVBQUE7O0FBZmxCO0lBa0JNLDZCQUFxQjtZQUFyQixxQkFBcUI7SUFDckIsaUNBQXlCO1lBQXpCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFVBQVU7SUFDVixVQUFVO0lBQ1YsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixpQkFBaUIsRUFBQTs7QUExQnZCO0lBNkJNLGNBQWM7SUFDZCw2QkFBcUI7WUFBckIscUJBQXFCO0lBQ3JCLGlDQUF5QjtZQUF6Qix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixVQUFVO0lBQ1YsVUFBVSxFQUFBOztBQUtoQjtFQUNFLGNBQWMsRUFBQTs7QUFEaEI7SUFJSSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFdBQVcsRUFBQTs7QUFOZjtJQVVJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLFdBQVc7SUFDWCxVQUFVLEVBQUE7O0FBZGQ7TUFpQk0sa0JBQWtCO01BQ2xCLE9BQU87TUFDUCxTQUFTLEVBQUE7O0FBbkJmO01BdUJNLGtCQUFrQjtNQUNsQixTQUFTO01BQ1QsVUFBVSxFQUFBOztBQXpCaEI7TUE2Qk0sa0JBQWtCO01BQ2xCLE1BQU07TUFDTixRQUFRLEVBQUE7O0FBL0JkO0lBcUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVksRUFBQTs7QUF4Q2hCO01BMkNNLGtCQUFrQjtNQUNsQixpQkFBaUI7TUFDakIsZUFBZTtNQUNmLGlCQUFpQjtNQUNqQixvQkFBb0IsRUFBQTs7QUEvQzFCO01BbURNLGtCQUFrQjtNQUNsQixnQkFBZ0I7TUFDaEIsZUFBZTtNQUNmLGlCQUFpQixFQUFBOztBQU92QjtFQUNFLGNBQWMsRUFBQTs7QUFEaEI7SUFJSSxrQkFBa0I7SUFDbEIsU0FBUyxFQUFBOztBQUxiO0lBUUksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxZQUFZLEVBQUE7O0FBVmhCO0lBY0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixVQUFVO0lBQ1YsYUFBYTtJQUNiLFlBQVksRUFBQTs7QUFsQmhCO01BcUJNLGNBQWM7TUFDZCw2QkFBcUI7Y0FBckIscUJBQXFCO01BQ3JCLGlDQUF5QjtjQUF6Qix5QkFBeUI7TUFDekIsZ0JBQWdCO01BQ2hCLGlCQUFpQjtNQUNqQixrQkFBa0I7TUFDbEIsa0JBQWtCO01BQ2xCLGFBQWE7TUFDYixVQUFVLEVBQUE7O0FBN0JoQjtNQWlDTSw2QkFBcUI7Y0FBckIscUJBQXFCO01BQ3JCLGlDQUF5QjtjQUF6Qix5QkFBeUI7TUFDekIsa0JBQWtCO01BQ2xCLFlBQVk7TUFDWixhQUFhO01BQ2IsZUFBZTtNQUNmLGlCQUFpQjtNQUNqQixpQkFBaUIsRUFBQTs7QUFNdkI7RUFDRSxjQUFjLEVBQUE7O0FBRGhCO0lBSUksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWSxFQUFBOztBQVBoQjtNQVVNLGtCQUFrQjtNQUNsQixpQkFBaUI7TUFDakIsZUFBZTtNQUNmLGlCQUFpQjtNQUNqQixvQkFBb0IsRUFBQTs7QUFkMUI7TUFrQk0sa0JBQWtCO01BQ2xCLGdCQUFnQjtNQUNoQixlQUFlO01BQ2YsaUJBQWlCLEVBQUE7O0FBckJ2QjtJQTBCSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGFBQWE7SUFDYixXQUFXO0lBQ1gsYUFBYSxFQUFBOztBQTlCakI7TUFpQ00sa0JBQWtCO01BQ2xCLE9BQU87TUFDUCxTQUFTLEVBQUE7O0FBbkNmO01Bc0NNLGtCQUFrQjtNQUNsQixTQUFTO01BQ1QsV0FBVyxFQUFBOztBQXhDakI7TUEyQ00sa0JBQWtCO01BQ2xCLFVBQVU7TUFDVixRQUFRLEVBQUE7O0FBN0NkO01BZ0RNLGtCQUFrQjtNQUNsQixRQUFRO01BQ1IsTUFBTSxFQUFBOztBQU1aO0VBRUksa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxjQUFjO0VBQ2QsWUFBWSxFQUFBOztBQUxoQjtJQU9NLFlBQVk7SUFDWixhQUFhO0lBS1gsZ0JBQWdCLEVBQUE7O0FBYnhCO01BVVEsa0JBQWtCLEVBQUE7O0FBUTFCO0VBRUksa0JBQWtCO0VBQ2xCLGtCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFOaEI7SUFTTSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsb0JBQW9CLEVBQUE7O0FBYjFCO0lBaUJNLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9jb250YWluZXIvY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJsb2NrLTEge1xyXG5cclxuICAucGljdHVyZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDE3JTtcclxuICAgIGxlZnQ6IDU0JTtcclxuICAgIHdpZHRoOiAyOCU7XHJcbiAgfVxyXG5cclxuICAudGV4dC1ibG9jay0xIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNDJweDtcclxuICAgIHJpZ2h0OiA3NzRweDtcclxuICAgIHdpZHRoOiAyNDhweDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG5cclxuICAgIGRpdi5zZWNvbmRhcnktMSB7XHJcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBoZWlnaHQ6IDkzcHg7XHJcbiAgICAgIGxlZnQ6IDEycHg7XHJcbiAgICAgIHRvcDogNDEycHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogNTZweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiA5MnB4O1xyXG4gICAgfVxyXG4gICAgZGl2LnByaW1hcnktMSB7XHJcbiAgICAgIGNvbG9yOiAjRkUzRDAwO1xyXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTAwcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBsaW5lLWhlaWdodDogMTg3cHg7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgaGVpZ2h0OiAxODhweDtcclxuICAgICAgbGVmdDogNTRweDtcclxuICAgICAgdG9wOiA5ODhweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5ibG9jay0yIHtcclxuICBoZWlnaHQ6IDExMjBweDtcclxuXHJcbiAgLm11bmNoLXBvcnRyZXR7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgfVxyXG5cclxuICAuYmxvY2stZWxsaXBzZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMjk4cHg7XHJcbiAgICBoZWlnaHQ6IDIwNnB4O1xyXG4gICAgbGVmdDogNTUzcHg7XHJcbiAgICB0b3A6IDE5MHB4O1xyXG5cclxuICAgIC5lbGxpcHNlLXMge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgIH1cclxuXHJcbiAgICAuZWxsaXBzZS1tIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDgycHg7XHJcbiAgICAgIGxlZnQ6IDg0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmVsbGlwc2UtbCB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICByaWdodDogMDtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICAudGV4dC1ibG9jay0ye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiA5NnB4O1xyXG4gICAgcmlnaHQ6IDcycHg7XHJcbiAgICB3aWR0aDogODQxcHg7XHJcblxyXG4gICAgLnByaW1hcnktMiB7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogNzJweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDc0cHg7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAzNnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5zZWNvbmRhcnktMiB7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgICAgZm9udC1zaXplOiA0OHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogNjRweDtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxufVxyXG5cclxuLmJsb2NrLTMge1xyXG4gIGhlaWdodDogMTIwMHB4O1xyXG5cclxuICAuYmFja2dvcnVuZC1ibG9jay0zIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICB9XHJcbiAgLmh0Y3ZpdmVvbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAyNDhweDtcclxuICB9XHJcblxyXG4gIC50ZXh0LWJsb2NrLTN7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogNDAwcHg7XHJcbiAgICBoZWlnaHQ6IDcwMHB4O1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG5cclxuICAgIGRpdi5wcmltYXJ5LTMge1xyXG4gICAgICBjb2xvcjogI0ZFM0QwMDtcclxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xyXG4gICAgICBmb250LXNpemU6IDEyNHB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDE4N3B4O1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGJvdHRvbTogLTg3cHg7XHJcbiAgICAgIGxlZnQ6IDUwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgZGl2LnNlY29uZGFyeS0zIHtcclxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgYm90dG9tOiAtOTJweDtcclxuICAgICAgZm9udC1zaXplOiA1NnB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDkycHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLmJsb2NrLTR7XHJcbiAgaGVpZ2h0OiAxMzAwcHg7XHJcblxyXG4gIC50ZXh0LWJsb2NrLTR7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEzNnB4O1xyXG4gICAgbGVmdDogMTgzcHg7XHJcbiAgICB3aWR0aDogODQxcHg7XHJcblxyXG4gICAgLnByaW1hcnktNCB7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogNzJweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDc0cHg7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAzNnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5zZWNvbmRhcnktNCB7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgICAgZm9udC1zaXplOiA0OHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogNjRweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5wbGFuZXRzIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMTE2cHg7XHJcbiAgICBoZWlnaHQ6IDkzN3B4O1xyXG4gICAgbGVmdDogNjMzcHg7XHJcbiAgICBib3R0b206IDE0MHB4O1xyXG5cclxuICAgIC5wbGFuZXQtMSB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgfVxyXG4gICAgLnBsYW5ldC0yIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OiAyNSU7XHJcbiAgICAgIGJvdHRvbTogMjMlO1xyXG4gICAgfVxyXG4gICAgLnBsYW5ldC0zIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogMjElO1xyXG4gICAgICB0b3A6IDIwJTtcclxuICAgIH1cclxuICAgIC5wbGFuZXQtNCB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIHRvcDogMDtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG4uYmxvY2stNSB7XHJcbiAgLnBob3RvLWJsb2NrLTV7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAxMTBweDtcclxuICAgIGJvdHRvbTogLTI5NnB4O1xyXG4gICAgd2lkdGg6IDc1MHB4O1xyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDM1N3B4O1xyXG4gICAgICBoZWlnaHQ6IDM1N3B4O1xyXG4gICAgICAmOm50aC1jaGlsZChvZGQpIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDM2cHg7XHJcbiAgICAgIH1cclxuICAgICAgJjpudGgtY2hpbGQoMy00KSB7fVxyXG4gICAgICAgIG1hcmdpbi10b3A6IDM2cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uYmxvY2stNntcclxuICAudGV4dC1ibG9jay02e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcGFkZGluZy10b3A6MTM2cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTc2cHg7XHJcbiAgICByaWdodDogNzJweDtcclxuICAgIHdpZHRoOiA4NDFweDtcclxuXHJcbiAgICAucHJpbWFyeS02IHtcclxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zaXplOiA3MnB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogNzRweDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDM2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnNlY29uZGFyeS02IHtcclxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgICBmb250LXNpemU6IDQ4cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiA2NHB4O1xyXG4gICAgfVxyXG4gIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/container/container.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/container/container.component.ts ***!
  \**********************************************************/
/*! exports provided: ContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerComponent", function() { return ContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContainerComponent = /** @class */ (function () {
    function ContainerComponent() {
        this.classes = 'row';
    }
    ContainerComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ContainerComponent.prototype, "classes", void 0);
    ContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-container',
            template: __webpack_require__(/*! ./container.component.html */ "./src/app/modules/container/container.component.html"),
            styles: [__webpack_require__(/*! ./container.component.scss */ "./src/app/modules/container/container.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContainerComponent);
    return ContainerComponent;
}());



/***/ }),

/***/ "./src/app/modules/container/container.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/container/container.module.ts ***!
  \*******************************************************/
/*! exports provided: ContainerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerModule", function() { return ContainerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./container.component */ "./src/app/modules/container/container.component.ts");




var ContainerModule = /** @class */ (function () {
    function ContainerModule() {
    }
    ContainerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_container_component__WEBPACK_IMPORTED_MODULE_3__["ContainerComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            exports: [_container_component__WEBPACK_IMPORTED_MODULE_3__["ContainerComponent"]]
        })
    ], ContainerModule);
    return ContainerModule;
}());



/***/ }),

/***/ "./src/app/modules/content/content.component.html":
/*!********************************************************!*\
  !*** ./src/app/modules/content/content.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12 p-0\">\n  <img src=\"/assets/intro.png\" alt=\"\" class=\"img-fluid\">\n  <img src=\"/assets/the-scream.png\" alt=\"\">\n  <span>Крик природы</span>\n  <span>Der Schrei der Natur</span>\n</div>\n<div class=\"col-12 p-0\">\n  <img src=\"/assets/munch.png\" alt=\"\">\n  <img src=\"/assets/ellipse-s.png\" alt=\"\">\n  <img src=\"/assets/ellipse-m.png\" alt=\"\">\n  <img src=\"/assets/ellipse-l.png\" alt=\"\">\n  <span>Пришло время узнать что происходит на картине «Крик»</span>\n  <span>Погрузиться внутрь картины, оказаться на берегу Осло-фьёрда и своими глазами увидеть что так поразило\n    художника</span>\n</div>\n<div class=\"col-12 p-0\">\n  <img src=\"/assets/Rectangle 2.png\" alt=\"\" class=\"img-fluid\">\n  <img src=\"/assets/htcviveon.png\" alt=\"\">\n  <span>Лучшие виды</span>\n  <span>Oslofjorden</span>\n</div>\n<div class=\"col-12 p-0\">\n  <span>Резонанс человека и природы</span>\n  <span>Мунк умел уловить настроение новержской природы, так что зритель сам входит в резонанс с пейзажем картины.\n    Почувствуйте вибрации природы через опыт VR</span>\n  <img src=\"/assets/sphere-1.png\" alt=\"\">\n  <img src=\"/assets/sphere-2.png\" alt=\"\">\n  <img src=\"/assets/sphere-3.png\" alt=\"\">\n  <img src=\"/assets/sphere-4.png\" alt=\"\">\n</div>\n<div class=\"col-12 p-0\">\n  <img src=\"/assets/group-photo.png\" alt=\"\" class=\"img-fluid\">\n  <img src=\"/assets/photo-1.png\" alt=\"\">\n  <img src=\"/assets/photo-2.png\" alt=\"\">\n  <img src=\"/assets/photo-3.png\" alt=\"\">\n  <img src=\"/assets/photo-4.png\" alt=\"\">\n  <span>Пейзаж вашего настроения на память</span>\n  <span>Личность художника наболее ярко проявляется в его картинах. А какой пейзаж может описать ваше настроение?</span>\n</div>"

/***/ }),

/***/ "./src/app/modules/content/content.component.scss":
/*!********************************************************!*\
  !*** ./src/app/modules/content/content.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".rotate-90 {\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb250ZW50L0M6XFxVc2Vyc1xcTk1hcnVzZXZhXFxEb2N1bWVudHNcXHByb2plY3RcXG11bmNoL3NyY1xcYXBwXFxtb2R1bGVzXFxjb250ZW50XFxjb250ZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNkJBQXFCO1VBQXJCLHFCQUFxQjtFQUNyQixnQ0FBd0I7VUFBeEIsd0JBQXdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2NvbnRlbnQvY29udGVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3RhdGUtOTB7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/content/content.component.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/content/content.component.ts ***!
  \******************************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContentComponent = /** @class */ (function () {
    function ContentComponent() {
        this.classes = 'row';
    }
    ContentComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ContentComponent.prototype, "classes", void 0);
    ContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-content',
            template: __webpack_require__(/*! ./content.component.html */ "./src/app/modules/content/content.component.html"),
            styles: [__webpack_require__(/*! ./content.component.scss */ "./src/app/modules/content/content.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./src/app/modules/content/content.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/content/content.module.ts ***!
  \***************************************************/
/*! exports provided: ContentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentModule", function() { return ContentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _content_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content.component */ "./src/app/modules/content/content.component.ts");




var ContentModule = /** @class */ (function () {
    function ContentModule() {
    }
    ContentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _content_component__WEBPACK_IMPORTED_MODULE_3__["ContentComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            exports: [
                _content_component__WEBPACK_IMPORTED_MODULE_3__["ContentComponent"]
            ]
        })
    ], ContentModule);
    return ContentModule;
}());



/***/ }),

/***/ "./src/app/modules/header/header.component.html":
/*!******************************************************!*\
  !*** ./src/app/modules/header/header.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"col-12 d-flex align-items-center\">\n  <img src=\"/assets/art-vr.png\" alt=\"\">\n  <img src=\"/assets/vr-tech.png\" alt=\"\">\n  <img src=\"/assets/british-school.png\" alt=\"\">\n  <img src=\"/assets/tretyakov-logo.png\" alt=\"\">\n</nav>"

/***/ }),

/***/ "./src/app/modules/header/header.component.scss":
/*!******************************************************!*\
  !*** ./src/app/modules/header/header.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\n  height: 100px;\n  padding: 0 160px; }\n  nav img {\n    padding: 0 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9oZWFkZXIvQzpcXFVzZXJzXFxOTWFydXNldmFcXERvY3VtZW50c1xccHJvamVjdFxcbXVuY2gvc3JjXFxhcHBcXG1vZHVsZXNcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBYTtFQUNiLGdCQUFnQixFQUFBO0VBRnBCO0lBS1EsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmF2IHtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHBhZGRpbmc6IDAgMTYwcHg7XG4gICAgXG4gICAgaW1nIHtcbiAgICAgICAgcGFkZGluZzogMCAzMHB4O1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/header/header.component.ts":
/*!****************************************************!*\
  !*** ./src/app/modules/header/header.component.ts ***!
  \****************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.classes = 'row';
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HeaderComponent.prototype, "classes", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/modules/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/modules/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/modules/header/header.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/header/header.module.ts ***!
  \*************************************************/
/*! exports provided: HeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderModule", function() { return HeaderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header.component */ "./src/app/modules/header/header.component.ts");




var HeaderModule = /** @class */ (function () {
    function HeaderModule() {
    }
    HeaderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            exports: [_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]]
        })
    ], HeaderModule);
    return HeaderModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    hmr: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/hmr.ts":
/*!********************!*\
  !*** ./src/hmr.ts ***!
  \********************/
/*! exports provided: hmrBootstrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hmrBootstrap", function() { return hmrBootstrap; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angularclass_hmr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angularclass/hmr */ "./node_modules/@angularclass/hmr/dist/index.js");
/* harmony import */ var _angularclass_hmr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angularclass_hmr__WEBPACK_IMPORTED_MODULE_1__);


var hmrBootstrap = function (module, bootstrap) {
    var ngModule;
    module.hot.accept();
    bootstrap().then(function (mod) { return ngModule = mod; });
    module.hot.dispose(function () {
        var appRef = ngModule.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]);
        var elements = appRef.components.map(function (c) { return c.location.nativeElement; });
        var makeVisible = Object(_angularclass_hmr__WEBPACK_IMPORTED_MODULE_1__["createNewHosts"])(elements);
        ngModule.destroy();
        makeVisible();
    });
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _hmr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hmr */ "./src/hmr.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
var bootstrap = function () { return Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]); };
if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].hmr) {
    if (false) {}
    else {
        console.error('HMR is not enabled for webpack-dev-server!');
        console.log('Are you using the --hmr flag for ng serve?');
    }
}
else {
    bootstrap().catch(function (err) { return console.log(err); });
}


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\NMaruseva\Documents\project\munch\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map