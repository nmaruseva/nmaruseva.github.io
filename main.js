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

module.exports = "<div class=\"col-12 px-0 block-1\" [class.active]=\"block1\" (mouseenter)=\"block1 = true\">\n    <div class=\"text-block-1\">\n        <div class=\"secondary-1\">Крик&nbsp;природы</div>\n        <div class=\"primary-1\">Der&nbsp;Schrei&nbsp;der&nbsp;Natur</div>\n    </div>\n    <img src=\"/assets/intro.png\" alt=\"\" class=\"img-fluid\">\n    <img src=\"/assets/the-scream.png\" alt=\"\" class=\"picture\">\n</div>\n<div class=\"col-12 px-0 block-2\" [class.active]=\"block2\" (mouseenter)=\"startAnimation('block2')\">\n    <div class=\"text-block-2\">\n        <div class=\"primary-2\">Пришло время узнать что происходит на&nbsp;картине «Крик»</div>\n        <div class=\"secondary-2\">Погрузиться внутрь картины и&nbsp;своими глазами увидеть что так поразило Эдварда Мунка\n        </div>\n    </div>\n    <div class=\"block-ellipse\">\n        <img src=\"/assets/ellipse-s.png\" class=\"ellipse-s\" alt=\"\">\n        <img src=\"/assets/ellipse-m.png\" class=\"ellipse-m\" alt=\"\">\n        <img src=\"/assets/ellipse-l.png\" class=\"ellipse-l\" alt=\"\">\n    </div>\n    <img src=\"/assets/munch.png\" alt=\"\" class=\"munch-portret\">\n</div>\n<div class=\"col-12 px-0 block-picture\">\n    <div class=\"picture-wrapper\">\n        <ng-container *ngFor=\"let pic of pictureSet; let i = index;\">\n            <img [src]=\"pic.isHover ? pic.activePic : pic.passivePic\" alt=\"\" class=\"class pic\"\n                 (mouseenter)=\"pic.isHover = true\" (mouseout)=\"pic.isHover = false\">\n        </ng-container>\n    </div>\n</div>\n<div class=\"col-12 px-0 block-3\" [class.active]=\"block3\">\n    <div class=\"text-block-3-3\">\n        <div class=\"primary-3-3\">\n            Культовая картина основаная на&nbsp;реальных событиях\n        </div>\n        <div class=\"secondary-3-3\">\n            Художник создал несколько вариаций известного сюжета в стремлении наиболее точно передать чувства охватившие его на берегу Осло-фьорда\n        </div>\n    </div>\n    <div class=\"text-block-3\">\n        <div class=\"secondary-3\">Лучшие&nbsp;виды</div>\n        <div class=\"primary-3\">Oslofjorden</div>\n    </div>\n    <div class=\"backgorund-block-3\">\n        <img src=\"/assets/volna3.png\" alt=\"\" class=\"img-fluid\">\n        <img src=\"/assets/volna2.png\" alt=\"\" class=\"img-fluid\">\n        <img src=\"/assets/volna1.png\" alt=\"\" class=\"img-fluid\">\n    </div>\n    <img src=\"/assets/htcviveon.png\" alt=\"\" class=\"htcviveon\" (mouseenter)=\"block3 = true\">\n</div>\n<div class=\"col-12 px-0 block-4\" [class.active]=\"block4\" (mouseenter)=\"block4 = true\">\n    <div class=\"text-block-4\">\n        <div class=\"primary-4\">Почувствуйте силы&nbsp;природы через&nbsp;опыт VR</div>\n        <div class=\"secondary-4\">Мунк умел уловить настроение норвежской природы, так что  зритель сам входит в резонанс\n            с пейзажем картины\n        </div>\n    </div>\n    <div class=\"planets\">\n        <img src=\"/assets/sphere-1.png\" alt=\"\" class=\"planet-1\">\n        <img src=\"/assets/sphere-2.png\" alt=\"\" class=\"planet-2\">\n        <img src=\"/assets/sphere-3.png\" alt=\"\" class=\"planet-3\">\n        <img src=\"/assets/sphere-4.png\" alt=\"\" class=\"planet-4\">\n    </div>\n</div>\n<div class=\"col-12 px-0 block-5\">\n    <img src=\"/assets/group-photo.png\" alt=\"\" class=\"img-fluid\">\n    <img src=\"/assets/group-photo-1.png\" alt=\"\" class=\"img-fluid\">\n    <img src=\"/assets/group-photo-2.png\" alt=\"\" class=\"img-fluid\">\n    <div class=\"text-block-5\">\n        <div class=\"primary-5\">Пейзаж вашего настроения на&nbsp;память</div>\n        <div class=\"secondary-5\">Личность художника отражают его картины. А&nbsp;какой пейзаж может описать ваше настроение?\n        </div>\n    </div>\n</div>\n\n<div class=\"col-12 block-video\">\n    <div class=\"block-video-wrapper my-5 mx-auto\">\n        <iframe src=\"https://www.youtube.com/embed/O_-vrCbTCYg\" height=\"100%\" width=\"100%\" frameborder=\"0\"\n                allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                allowfullscreen></iframe>\n    </div>\n</div>\n<div class=\"col-12 text-center\">\n        <img src=\"/assets/contacts.png\" alt=\"\" class=\"contacts\">\n</div>"

/***/ }),

/***/ "./src/app/modules/container/container.component.scss":
/*!************************************************************!*\
  !*** ./src/app/modules/container/container.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".block-1.active .picture {\n  opacity: 1;\n  -webkit-animation: slide-in-bottom 0.8s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n          animation: slide-in-bottom 0.8s cubic-bezier(0.39, 0.575, 0.565, 1) both; }\n\n.block-1.active .text-block-1 {\n  opacity: 1;\n  -webkit-animation: slide-in-bottom 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n          animation: slide-in-bottom 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both; }\n\n.block-1 .picture {\n  position: absolute;\n  top: 17%;\n  left: 54%;\n  width: 28%;\n  opacity: 0; }\n\n.block-1 .text-block-1 {\n  opacity: 0;\n  z-index: 10;\n  position: absolute;\n  display: block;\n  top: -10%;\n  left: 48.5%;\n  width: 8vw;\n  height: 100%;\n  font-style: normal;\n  color: #FFFFFF; }\n\n.block-1 .text-block-1 div.primary-1 {\n    color: #FE3D00;\n    -webkit-transform-origin: 0 0;\n            transform-origin: 0 0;\n    -webkit-transform: rotate(-90deg);\n            transform: rotate(-90deg);\n    font-size: 5vw;\n    font-weight: bold;\n    line-height: 1;\n    position: absolute;\n    top: 157%;\n    left: 2.5vw; }\n\n.block-1 .text-block-1 div.secondary-1 {\n    -webkit-transform-origin: 0 0;\n            transform-origin: 0 0;\n    -webkit-transform: rotate(-90deg);\n            transform: rotate(-90deg);\n    position: absolute;\n    font-size: 2.5vw;\n    top: 70%;\n    line-height: 1;\n    font-weight: bold; }\n\n.block-2 {\n  position: relative;\n  height: 50vw; }\n\n.block-2 .munch-portret {\n    position: absolute;\n    width: 34vw;\n    bottom: 0; }\n\n.block-2 .block-ellipse {\n    position: absolute;\n    width: 15.5vw;\n    height: 15.5vw;\n    top: 2vw;\n    left: 30%;\n    display: none; }\n\n.block-2 .block-ellipse .ellipse-s {\n      position: absolute;\n      width: 2.5vw;\n      left: 0;\n      bottom: 0; }\n\n.block-2 .block-ellipse .ellipse-m {\n      position: absolute;\n      width: 4vw;\n      top: 44%;\n      left: calc(50% - 3.2vw); }\n\n.block-2 .block-ellipse .ellipse-l {\n      position: absolute;\n      width: 5.5vw;\n      top: 0;\n      right: 0; }\n\n.block-2.active .block-ellipse {\n    display: block; }\n\n.block-2.active .block-ellipse .ellipse-s {\n      -webkit-animation: scale-in-center 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s both;\n              animation: scale-in-center 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s both; }\n\n.block-2.active .block-ellipse .ellipse-m {\n      -webkit-animation: scale-in-center 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.6s both;\n              animation: scale-in-center 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.6s both; }\n\n.block-2.active .block-ellipse .ellipse-l {\n      -webkit-animation: scale-in-center 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1.3s both;\n              animation: scale-in-center 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1.3s both; }\n\n.block-2 .text-block-2 {\n    position: absolute;\n    bottom: 10vw;\n    right: 3.75vw;\n    width: 44vw; }\n\n.block-2 .text-block-2 .primary-2 {\n      font-style: normal;\n      font-weight: bold;\n      font-size: 4vw;\n      line-height: 1.1; }\n\n.block-2 .text-block-2 .secondary-2 {\n      padding-top: 1.5vw;\n      font-style: normal;\n      font-weight: 100;\n      font-size: 2.5vw;\n      line-height: 1.2; }\n\n.block-picture {\n  height: 20vw;\n  overflow: hidden; }\n\n.block-picture .picture-wrapper {\n    background-color: red;\n    margin: -5.5vw auto 0;\n    width: calc(8.2 * 12vw); }\n\n.block-picture .pic {\n    width: 8.2vw; }\n\n.block-picture .pic:hover {\n      -webkit-animation: fade-in-pic 1s ease-out both;\n              animation: fade-in-pic 1s ease-out both; }\n\n.block-3 {\n  height: 80vw;\n  width: 100%;\n  overflow: hidden; }\n\n.block-3 .backgorund-block-3 {\n    position: absolute;\n    display: block;\n    height: 100%;\n    width: 100%;\n    left: 0;\n    bottom: -10vw; }\n\n.block-3 .backgorund-block-3 img {\n      position: absolute;\n      min-width: 110%;\n      margin-left: -5%;\n      bottom: 0; }\n\n.block-3 .backgorund-block-3 img:nth-child(1) {\n      -webkit-animation: shake-lr 20s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite both;\n              animation: shake-lr 20s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite both; }\n\n.block-3 .backgorund-block-3 img:nth-child(2) {\n      -webkit-animation: shake-lr 25s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite both;\n              animation: shake-lr 25s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite both; }\n\n.block-3 .htcviveon {\n    position: absolute;\n    width: 46vw;\n    bottom: 0;\n    right: 12vw; }\n\n.block-3 .text-block-3-3 {\n    position: absolute;\n    top: 5vw;\n    left: 8.5vw;\n    width: 60vw; }\n\n.block-3 .text-block-3-3 .primary-3-3 {\n      font-style: normal;\n      font-weight: bold;\n      font-size: 4vw;\n      line-height: 1.1; }\n\n.block-3 .text-block-3-3 .secondary-3-3 {\n      padding-top: 1.5vw;\n      font-style: normal;\n      font-weight: 100;\n      font-size: 2.5vw;\n      line-height: 1.2; }\n\n.block-3.active .text-block-3 {\n    opacity: 1;\n    -webkit-animation: slide-in-bottom 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n            animation: slide-in-bottom 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both; }\n\n.block-3 .text-block-3 {\n    opacity: 0;\n    z-index: 11;\n    position: absolute;\n    display: block;\n    right: 2vw;\n    width: 8vw;\n    height: 100%; }\n\n.block-3 .text-block-3 div.primary-3 {\n      color: #FE3D00;\n      -webkit-transform-origin: 0 0;\n              transform-origin: 0 0;\n      -webkit-transform: rotate(-90deg);\n              transform: rotate(-90deg);\n      font-size: 5vw;\n      font-weight: bold;\n      line-height: 1;\n      position: absolute;\n      bottom: 12vw;\n      left: 3vw; }\n\n.block-3 .text-block-3 div.secondary-3 {\n      -webkit-transform-origin: 0 0;\n              transform-origin: 0 0;\n      -webkit-transform: rotate(-90deg);\n              transform: rotate(-90deg);\n      position: absolute;\n      color: white;\n      bottom: 7vw;\n      font-size: 3vw;\n      font-weight: bold;\n      line-height: 1; }\n\n.block-4 {\n  height: 55vw; }\n\n.block-4 .text-block-4 {\n    position: absolute;\n    width: 44vw;\n    top: 5vw;\n    right: 8.5vw; }\n\n.block-4 .text-block-4 .primary-4 {\n      font-style: normal;\n      font-weight: bold;\n      font-size: 4vw;\n      line-height: 1.1; }\n\n.block-4 .text-block-4 .secondary-4 {\n      padding-top: 1.5vw;\n      font-style: normal;\n      font-weight: 100;\n      font-size: 2.5vw;\n      line-height: 1.2; }\n\n.block-4 .planets {\n    position: absolute;\n    -webkit-transform: rotateY(180deg);\n            transform: rotateY(180deg);\n    width: 48vw;\n    height: 48vw;\n    left: 6vw;\n    top: 3vw;\n    opacity: 0; }\n\n.block-4 .planets .planet-1 {\n      width: 15vw;\n      position: absolute;\n      left: 0;\n      bottom: 0; }\n\n.block-4 .planets .planet-2 {\n      width: 15vw;\n      position: absolute;\n      left: 25%;\n      bottom: 25%; }\n\n.block-4 .planets .planet-3 {\n      width: 15vw;\n      position: absolute;\n      right: 23%;\n      top: 22%; }\n\n.block-4 .planets .planet-4 {\n      width: 15vw;\n      position: absolute;\n      right: 0;\n      top: 0; }\n\n.block-4.active .planets {\n    opacity: 1; }\n\n.block-4.active .planets .planet-1 {\n      -webkit-animation: slide-in-bottom-second 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n              animation: slide-in-bottom-second 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both; }\n\n.block-4.active .planets .planet-2 {\n      -webkit-animation: slide-in-bottom-second 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n              animation: slide-in-bottom-second 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94) both; }\n\n.block-4.active .planets .planet-3 {\n      -webkit-animation: slide-in-bottom-second 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n              animation: slide-in-bottom-second 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both; }\n\n.block-4.active .planets .planet-4 {\n      -webkit-animation: slide-in-bottom-second 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n              animation: slide-in-bottom-second 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both; }\n\n.block-5 {\n  height: 49vw; }\n\n.block-5 img {\n    position: absolute;\n    -webkit-animation-name: cf3FadeInOut;\n            animation-name: cf3FadeInOut;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out;\n    -webkit-animation-iteration-count: infinite;\n            animation-iteration-count: infinite;\n    -webkit-animation-duration: 3.9s;\n            animation-duration: 3.9s;\n    -webkit-animation-direction: alternate;\n            animation-direction: alternate; }\n\n.block-5 img:nth-of-type(1) {\n      -webkit-animation-delay: 4s;\n              animation-delay: 4s; }\n\n.block-5 img:nth-of-type(2) {\n      -webkit-animation-delay: 2s;\n              animation-delay: 2s; }\n\n.block-5 img:nth-of-type(3) {\n      -webkit-animation-delay: 0s;\n              animation-delay: 0s; }\n\n.block-5 .text-block-5 {\n    position: absolute;\n    padding-top: 5vw;\n    padding-bottom: 7vw;\n    left: 8.5vw;\n    width: 40vw; }\n\n.block-5 .text-block-5 .primary-5 {\n      font-style: normal;\n      font-weight: bold;\n      font-size: 4vw;\n      line-height: 1.1; }\n\n.block-5 .text-block-5 .secondary-5 {\n      padding-top: 7vw;\n      font-style: normal;\n      font-weight: 100;\n      font-size: 2.5vw;\n      line-height: 1.2; }\n\n.block-video .block-video-wrapper {\n  width: 56vw;\n  height: 31.5vw; }\n\n.contacts {\n  width: 46vw; }\n\n@-webkit-keyframes slide-in-bottom {\n  0% {\n    -webkit-transform: translateY(2000px);\n            transform: translateY(2000px);\n    opacity: 0; }\n  100% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n    opacity: 1; } }\n\n@keyframes slide-in-bottom {\n  0% {\n    -webkit-transform: translateY(2000px);\n            transform: translateY(2000px);\n    opacity: 0; }\n  100% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n    opacity: 1; } }\n\n@-webkit-keyframes slide-in-bottom-second {\n  0% {\n    -webkit-transform: translateY(60vw);\n            transform: translateY(60vw);\n    opacity: 0; }\n  100% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n    opacity: 1; } }\n\n@keyframes slide-in-bottom-second {\n  0% {\n    -webkit-transform: translateY(60vw);\n            transform: translateY(60vw);\n    opacity: 0; }\n  100% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n    opacity: 1; } }\n\n@-webkit-keyframes slide-in-bottom-second-image {\n  0% {\n    -webkit-transform: translateY(60vw);\n            transform: translateY(60vw);\n    opacity: 0;\n    width: 18.5vw;\n    height: 18.5vw; }\n  100% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n    opacity: 1;\n    width: 18.5vw;\n    height: 18.5vw; } }\n\n@keyframes slide-in-bottom-second-image {\n  0% {\n    -webkit-transform: translateY(60vw);\n            transform: translateY(60vw);\n    opacity: 0;\n    width: 18.5vw;\n    height: 18.5vw; }\n  100% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n    opacity: 1;\n    width: 18.5vw;\n    height: 18.5vw; } }\n\n@-webkit-keyframes scale-in-center {\n  0% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    opacity: 1; }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1; } }\n\n@keyframes scale-in-center {\n  0% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    opacity: 1; }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1; } }\n\n@-webkit-keyframes fade-in-pic {\n  0% {\n    opacity: 0.5; }\n  100% {\n    opacity: 1; } }\n\n@keyframes fade-in-pic {\n  0% {\n    opacity: 0.5; }\n  100% {\n    opacity: 1; } }\n\n@-webkit-keyframes cf3FadeInOut {\n  0% {\n    opacity: 1; }\n  45% {\n    opacity: 1; }\n  55% {\n    opacity: 0; }\n  100% {\n    opacity: 0; } }\n\n@keyframes cf3FadeInOut {\n  0% {\n    opacity: 1; }\n  45% {\n    opacity: 1; }\n  55% {\n    opacity: 0; }\n  100% {\n    opacity: 0; } }\n\n@-webkit-keyframes shake-lr {\n  0%,\n  100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n    -webkit-transform-origin: 50% 50%;\n            transform-origin: 50% 50%; }\n  10% {\n    -webkit-transform: rotate(1deg);\n            transform: rotate(1deg); }\n  20%,\n  40%,\n  60% {\n    -webkit-transform: rotate(-2deg);\n            transform: rotate(-2deg); }\n  30%,\n  50%,\n  70% {\n    -webkit-transform: rotate(2deg);\n            transform: rotate(2deg); }\n  80% {\n    -webkit-transform: rotate(-1deg);\n            transform: rotate(-1deg); }\n  90% {\n    -webkit-transform: rotate(1deg);\n            transform: rotate(1deg); } }\n\n@keyframes shake-lr {\n  0%,\n  100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n    -webkit-transform-origin: 50% 50%;\n            transform-origin: 50% 50%; }\n  10% {\n    -webkit-transform: rotate(1deg);\n            transform: rotate(1deg); }\n  20%,\n  40%,\n  60% {\n    -webkit-transform: rotate(-2deg);\n            transform: rotate(-2deg); }\n  30%,\n  50%,\n  70% {\n    -webkit-transform: rotate(2deg);\n            transform: rotate(2deg); }\n  80% {\n    -webkit-transform: rotate(-1deg);\n            transform: rotate(-1deg); }\n  90% {\n    -webkit-transform: rotate(1deg);\n            transform: rotate(1deg); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb250YWluZXIvQzpcXFVzZXJzXFxOTWFydXNldmFcXERvY3VtZW50c1xccHJvamVjdFxcbXVuY2gvc3JjXFxhcHBcXG1vZHVsZXNcXGNvbnRhaW5lclxcY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBSU0sVUFBVTtFQUNWLGdGQUE2RTtVQUE3RSx3RUFBNkUsRUFBQTs7QUFMbkY7RUFRTSxVQUFVO0VBQ1YsK0VBQTJFO1VBQTNFLHVFQUEyRSxFQUFBOztBQVRqRjtFQWFJLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULFVBQVU7RUFDVixVQUFVLEVBQUE7O0FBakJkO0VBcUJJLFVBQVU7RUFDVixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxTQUFTO0VBQ1QsV0FBVztFQUNYLFVBQVU7RUFDVixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGNBQWMsRUFBQTs7QUE5QmxCO0lBaUNNLGNBQWM7SUFDZCw2QkFBcUI7WUFBckIscUJBQXFCO0lBQ3JCLGlDQUF5QjtZQUF6Qix5QkFBeUI7SUFDekIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXLEVBQUE7O0FBekNqQjtJQTRDTSw2QkFBcUI7WUFBckIscUJBQXFCO0lBQ3JCLGlDQUF5QjtZQUF6Qix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixRQUFRO0lBQ1IsY0FBYztJQUNkLGlCQUFpQixFQUFBOztBQUt2QjtFQUNFLGtCQUFrQjtFQUNsQixZQUFZLEVBQUE7O0FBRmQ7SUFLSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVMsRUFBQTs7QUFQYjtJQVdJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsY0FBYztJQUNkLFFBQVE7SUFDUixTQUFTO0lBQ1QsYUFBYSxFQUFBOztBQWhCakI7TUFtQk0sa0JBQWtCO01BQ2xC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dkIsdUJBQXVCLEVBQUEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29udGFpbmVyL2NvbnRhaW5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ibG9jay0xIHtcclxuXHJcbiAgJi5hY3RpdmUge1xyXG4gICAgLnBpY3R1cmUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICBhbmltYXRpb246IHNsaWRlLWluLWJvdHRvbSAwLjhzIGN1YmljLWJlemllcigwLjM5MCwgMC41NzUsIDAuNTY1LCAxLjAwMCkgYm90aDtcclxuICAgIH1cclxuICAgIC50ZXh0LWJsb2NrLTEge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICBhbmltYXRpb246IHNsaWRlLWluLWJvdHRvbSAxcyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApIGJvdGg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5waWN0dXJlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTclO1xyXG4gICAgbGVmdDogNTQlO1xyXG4gICAgd2lkdGg6IDI4JTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG5cclxuICAudGV4dC1ibG9jay0xIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdG9wOiAtMTAlO1xyXG4gICAgbGVmdDogNDguNSU7XHJcbiAgICB3aWR0aDogOHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcblxyXG4gICAgZGl2LnByaW1hcnktMSB7XHJcbiAgICAgIGNvbG9yOiAjRkUzRDAwO1xyXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XHJcbiAgICAgIGZvbnQtc2l6ZTogNXZ3O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAxNTclO1xyXG4gICAgICBsZWZ0OiAyLjV2dztcclxuICAgIH1cclxuICAgIGRpdi5zZWNvbmRhcnktMSB7XHJcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBmb250LXNpemU6IDIuNXZ3O1xyXG4gICAgICB0b3A6IDcwJTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmJsb2NrLTIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDUwdnc7XHJcblxyXG4gIC5tdW5jaC1wb3J0cmV0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAzNHZ3O1xyXG4gICAgYm90dG9tOiAwO1xyXG4gIH1cclxuXHJcbiAgLmJsb2NrLWVsbGlwc2Uge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDE1LjV2dztcclxuICAgIGhlaWdodDogMTUuNXZ3O1xyXG4gICAgdG9wOiAydnc7XHJcbiAgICBsZWZ0OiAzMCU7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG5cclxuICAgIC5lbGxpcHNlLXMge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHdpZHRoOiAyLjV2dztcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5lbGxpcHNlLW0ge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHdpZHRoOiA0dnc7XHJcbiAgICAgIHRvcDogNDQlO1xyXG4gICAgICBsZWZ0OiBjYWxjKDUwJSAtIDMuMnZ3KTtcclxuICAgIH1cclxuXHJcbiAgICAuZWxsaXBzZS1sIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB3aWR0aDogNS41dnc7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgJi5hY3RpdmUgLmJsb2NrLWVsbGlwc2Uge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAuZWxsaXBzZS1zIHtcclxuICAgICAgYW5pbWF0aW9uOiBzY2FsZS1pbi1jZW50ZXIgMC41cyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApIDBzIGJvdGg7XHJcbiAgICB9XHJcbiAgICAuZWxsaXBzZS1tIHtcclxuICAgICAgYW5pbWF0aW9uOiBzY2FsZS1pbi1jZW50ZXIgMC42cyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApIDAuNnMgYm90aDtcclxuICAgIH1cclxuICAgIC5lbGxpcHNlLWwge1xyXG4gICAgICBhbmltYXRpb246IHNjYWxlLWluLWNlbnRlciAwLjdzIGN1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MCkgMS4zcyBib3RoO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnRleHQtYmxvY2stMiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDEwdnc7XHJcbiAgICByaWdodDogMy43NXZ3O1xyXG4gICAgd2lkdGg6IDQ0dnc7XHJcblxyXG4gICAgLnByaW1hcnktMiB7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogNHZ3O1xyXG4gICAgICBsaW5lLWhlaWdodDogMS4xO1xyXG4gICAgfVxyXG5cclxuICAgIC5zZWNvbmRhcnktMiB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAxLjV2dztcclxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgICBmb250LXNpemU6IDIuNXZ3O1xyXG4gICAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG59XHJcblxyXG4uYmxvY2stcGljdHVyZSB7XHJcbiAgaGVpZ2h0OiAyMHZ3O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gIC5waWN0dXJlLXdyYXBwZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgbWFyZ2luOiAtNS41dncgYXV0byAwO1xyXG4gICAgd2lkdGg6IGNhbGMoOC4yICogMTJ2dyk7XHJcbiAgfVxyXG5cclxuICAucGljIHtcclxuICAgIHdpZHRoOiA4LjJ2dztcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYW5pbWF0aW9uOiBmYWRlLWluLXBpYyAxcyBlYXNlLW91dCBib3RoO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmJsb2NrLTMge1xyXG4gIGhlaWdodDogODB2dztcclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAuYmFja2dvcnVuZC1ibG9jay0zIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAtMTB2dztcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIG1pbi13aWR0aDogMTEwJTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IC01JTtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgfVxyXG4gICAgJiBpbWc6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgYW5pbWF0aW9uOiBzaGFrZS1sciAyMHMgY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjQ2MCwgMC40NTAsIDAuOTQwKSBpbmZpbml0ZSBib3RoO1xyXG5cclxuICAgIH1cclxuICAgICYgaW1nOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgIGFuaW1hdGlvbjogc2hha2UtbHIgMjVzIGN1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MCkgaW5maW5pdGUgYm90aDtcclxuICAgIH1cclxuICB9XHJcbiAgLmh0Y3ZpdmVvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogNDZ2dztcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAxMnZ3O1xyXG4gIH1cclxuXHJcbiAgLnRleHQtYmxvY2stMy0zIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNXZ3O1xyXG4gICAgbGVmdDogOC41dnc7XHJcbiAgICB3aWR0aDogNjB2dztcclxuXHJcbiAgICAucHJpbWFyeS0zLTMge1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXNpemU6IDR2dztcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuMTtcclxuICAgIH1cclxuXHJcbiAgICAuc2Vjb25kYXJ5LTMtMyB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAxLjV2dztcclxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgICBmb250LXNpemU6IDIuNXZ3O1xyXG4gICAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gICYuYWN0aXZlIC50ZXh0LWJsb2NrLTMge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGFuaW1hdGlvbjogc2xpZGUtaW4tYm90dG9tIDFzIGN1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MCkgYm90aDtcclxuICB9XHJcbiAgLnRleHQtYmxvY2stMyB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgei1pbmRleDogMTE7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHJpZ2h0OiAydnc7XHJcbiAgICB3aWR0aDogOHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgIGRpdi5wcmltYXJ5LTMge1xyXG4gICAgICBjb2xvcjogI0ZFM0QwMDtcclxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xyXG4gICAgICBmb250LXNpemU6IDV2dztcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGJvdHRvbTogMTJ2dztcclxuICAgICAgbGVmdDogM3Z3O1xyXG4gICAgfVxyXG5cclxuICAgIGRpdi5zZWNvbmRhcnktMyB7XHJcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGJvdHRvbTogN3Z3O1xyXG4gICAgICBmb250LXNpemU6IDN2dztcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbi5ibG9jay00IHtcclxuICBoZWlnaHQ6IDU1dnc7XHJcblxyXG4gIC50ZXh0LWJsb2NrLTQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDQ0dnc7XHJcbiAgICB0b3A6IDV2dztcclxuICAgIHJpZ2h0OiA4LjV2dztcclxuXHJcbiAgICAucHJpbWFyeS00IHtcclxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zaXplOiA0dnc7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjE7XHJcbiAgICB9XHJcblxyXG4gICAgLnNlY29uZGFyeS00IHtcclxuICAgICAgcGFkZGluZy10b3A6IDEuNXZ3O1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMi41dnc7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucGxhbmV0cyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcclxuICAgIHdpZHRoOiA0OHZ3O1xyXG4gICAgaGVpZ2h0OiA0OHZ3O1xyXG4gICAgbGVmdDogNnZ3O1xyXG4gICAgdG9wOiAzdnc7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG5cclxuICAgIC5wbGFuZXQtMSB7XHJcbiAgICAgIHdpZHRoOiAxNXZ3O1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgIH1cclxuICAgIC5wbGFuZXQtMiB7XHJcbiAgICAgIHdpZHRoOiAxNXZ3O1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IDI1JTtcclxuICAgICAgYm90dG9tOiAyNSU7XHJcbiAgICB9XHJcbiAgICAucGxhbmV0LTMge1xyXG4gICAgICB3aWR0aDogMTV2dztcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogMjMlO1xyXG4gICAgICB0b3A6IDIyJTtcclxuICAgIH1cclxuICAgIC5wbGFuZXQtNCB7XHJcbiAgICAgIHdpZHRoOiAxNXZ3O1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmFjdGl2ZSAucGxhbmV0cyB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgLnBsYW5ldC0xIHtcclxuICAgICAgYW5pbWF0aW9uOiBzbGlkZS1pbi1ib3R0b20tc2Vjb25kIDAuNXMgY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjQ2MCwgMC40NTAsIDAuOTQwKSBib3RoO1xyXG4gICAgfVxyXG4gICAgLnBsYW5ldC0yIHtcclxuICAgICAgYW5pbWF0aW9uOiBzbGlkZS1pbi1ib3R0b20tc2Vjb25kIDAuNjVzIGN1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MCkgYm90aDtcclxuICAgIH1cclxuICAgIC5wbGFuZXQtMyB7XHJcbiAgICAgIGFuaW1hdGlvbjogc2xpZGUtaW4tYm90dG9tLXNlY29uZCAwLjhzIGN1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MCkgYm90aDtcclxuICAgIH1cclxuICAgIC5wbGFuZXQtNCB7XHJcbiAgICAgIGFuaW1hdGlvbjogc2xpZGUtaW4tYm90dG9tLXNlY29uZCAxcyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApIGJvdGg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uYmxvY2stNSB7XHJcbiAgaGVpZ2h0OiA0OXZ3O1xyXG4gIGltZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBhbmltYXRpb24tbmFtZTogY2YzRmFkZUluT3V0O1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XHJcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMy45cztcclxuICAgIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcclxuXHJcbiAgICAmOm50aC1vZi10eXBlKDEpIHtcclxuICAgICAgYW5pbWF0aW9uLWRlbGF5OiA0cztcclxuICAgIH1cclxuXHJcbiAgICAmOm50aC1vZi10eXBlKDIpIHtcclxuICAgICAgYW5pbWF0aW9uLWRlbGF5OiAycztcclxuICAgIH1cclxuXHJcbiAgICAmOm50aC1vZi10eXBlKDMpIHtcclxuICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwcztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC50ZXh0LWJsb2NrLTUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcGFkZGluZy10b3A6IDV2dztcclxuICAgIHBhZGRpbmctYm90dG9tOiA3dnc7XHJcbiAgICBsZWZ0OiA4LjV2dztcclxuICAgIHdpZHRoOiA0MHZ3O1xyXG5cclxuICAgIC5wcmltYXJ5LTUge1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXNpemU6IDR2dztcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuMTtcclxuICAgIH1cclxuXHJcbiAgICAuc2Vjb25kYXJ5LTUge1xyXG4gICAgICBwYWRkaW5nLXRvcDogN3Z3O1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMi41dnc7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uYmxvY2stdmlkZW8ge1xyXG5cclxuICAuYmxvY2stdmlkZW8td3JhcHBlciB7XHJcbiAgICB3aWR0aDogNTZ2dztcclxuICAgIGhlaWdodDogMzEuNXZ3O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi5jb250YWN0c3tcclxuICB3aWR0aDogNDZ2dztcclxufVxyXG5cclxuQGtleWZyYW1lcyBzbGlkZS1pbi1ib3R0b20ge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDAwcHgpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzbGlkZS1pbi1ib3R0b20tc2Vjb25kIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNjB2dyk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNsaWRlLWluLWJvdHRvbS1zZWNvbmQtaW1hZ2Uge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg2MHZ3KTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB3aWR0aDogMTguNXZ3O1xyXG4gICAgaGVpZ2h0OiAxOC41dnc7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHdpZHRoOiAxOC41dnc7XHJcbiAgICBoZWlnaHQ6IDE4LjV2dztcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2NhbGUtaW4tY2VudGVyIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZS1pbi1waWMge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBjZjNGYWRlSW5PdXQge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIDQ1JSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICA1NSUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzaGFrZS1sciB7XHJcbiAgMCUsXHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XHJcbiAgfVxyXG4gIDEwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxZGVnKTtcclxuICB9XHJcbiAgMjAlLFxyXG4gIDQwJSxcclxuICA2MCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTJkZWcpO1xyXG4gIH1cclxuICAzMCUsXHJcbiAgNTAlLFxyXG4gIDcwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyZGVnKTtcclxuICB9XHJcbiAgODAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xZGVnKTtcclxuICB9XHJcbiAgOTAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDFkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuIl19 */"

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


var pictureSetMock = [
    {
        isHover: false,
        passivePic: '/assets/pictures/Rectangle.png',
        activePic: '/assets/pictures/Rectangle_color.png'
    },
    {
        isHover: false,
        passivePic: '/assets/pictures/Rectangle-1.png',
        activePic: '/assets/pictures/Rectangle_color-1.png'
    },
    {
        isHover: false,
        passivePic: '/assets/pictures/Rectangle-2.png',
        activePic: '/assets/pictures/Rectangle_color-2.png'
    },
    {
        isHover: false,
        passivePic: '/assets/pictures/Rectangle-3.png',
        activePic: '/assets/pictures/Rectangle_color-3.png'
    },
    {
        isHover: false,
        passivePic: '/assets/pictures/Rectangle-4.png',
        activePic: '/assets/pictures/Rectangle_color-4.png'
    },
    {
        isHover: false,
        passivePic: '/assets/pictures/Rectangle-5.png',
        activePic: '/assets/pictures/Rectangle_color-5.png'
    },
    {
        isHover: false,
        passivePic: '/assets/pictures/Rectangle-6.png',
        activePic: '/assets/pictures/Rectangle_color-6.png'
    },
    {
        isHover: false,
        passivePic: '/assets/pictures/Rectangle-7.png',
        activePic: '/assets/pictures/Rectangle_color-7.png'
    },
    {
        isHover: false,
        passivePic: '/assets/pictures/Rectangle-8.png',
        activePic: '/assets/pictures/Rectangle_color-8.png'
    },
    {
        isHover: false,
        passivePic: '/assets/pictures/Rectangle-9.png',
        activePic: '/assets/pictures/Rectangle_color-9.png'
    },
    {
        isHover: false,
        passivePic: '/assets/pictures/Rectangle-10.png',
        activePic: '/assets/pictures/Rectangle_color-10.png'
    },
    {
        isHover: false,
        passivePic: '/assets/pictures/Rectangle-11.png',
        activePic: '/assets/pictures/Rectangle_color-11.png'
    }
];
var ContainerComponent = /** @class */ (function () {
    function ContainerComponent(renderer) {
        this.renderer = renderer;
        this.classes = 'row';
        this.block1 = false;
        this.block2 = false;
        this.block3 = false;
        this.block4 = false;
        this.isBlock2Started = false;
    }
    ContainerComponent.prototype.ngOnInit = function () {
        this.pictureSet = pictureSetMock;
    };
    ContainerComponent.prototype.startAnimation = function (block) {
        var _this = this;
        switch (block) {
            case 'block2':
                if (!this.isBlock2Started) {
                    this.block2 = true;
                    setInterval(function () {
                        _this.isBlock2Started = true;
                        _this.block2 = !_this.block2;
                    }, 2200);
                }
                else {
                    return;
                }
                break;
            default:
                break;
        }
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
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

module.exports = "<nav class=\"col-12 d-flex align-items-center logos py-4\">\n  <img src=\"/assets/LogoGroup.png\" alt=\"\" class=\"img-fluid\">\n</nav>"

/***/ }),

/***/ "./src/app/modules/header/header.component.scss":
/*!******************************************************!*\
  !*** ./src/app/modules/header/header.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\n  height: 100px; }\n  nav img {\n    margin-right: 30px;\n    border: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9oZWFkZXIvQzpcXFVzZXJzXFxOTWFydXNldmFcXERvY3VtZW50c1xccHJvamVjdFxcbXVuY2gvc3JjXFxhcHBcXG1vZHVsZXNcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBYSxFQUFBO0VBRGpCO0lBR1Esa0JBQWtCO0lBQ2xCLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdiB7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBpbWcge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICB9XG59XG5cbi8vdG9kbzog0KHQtNC10LvQsNGC0Ywg0L7RgtC00LXQu9GM0L3QviDQtNC70Y8g0YDQsNC30L3Ri9GFINGA0LDQt9C80LXRgNC+0LIuIl19 */"

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