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

module.exports = "<div class=\"col-12 px-0 block-1\" [class.active]=\"block1\" (mouseenter)=\"block1 = true\">\n    <div class=\"text-block-1\">\n        <div class=\"secondary-1\">Крик&nbsp;природы</div>\n        <div class=\"primary-1\">Der&nbsp;Schrei&nbsp;der&nbsp;Natur</div>\n    </div>\n    <img src=\"/assets/intro.png\" alt=\"\" class=\"img-fluid\">\n    <img src=\"/assets/the-scream.png\" alt=\"\" class=\"picture\">\n</div>\n<div class=\"col-12 px-0 block-2\">\n    <div class=\"text-block-2\">\n        <div class=\"primary-2\">Пришло время узнать что происходит на&nbsp;картине «Крик»</div>\n        <div class=\"secondary-2\">Погрузиться внутрь картины, оказаться на берегу Осло-фьёрда и&nbsp;своими глазами\n            увидеть что\n            так поразило\n            художника\n        </div>\n    </div>\n    <div class=\"block-ellipse\">\n        <img src=\"/assets/ellipse-s.png\" class=\"ellipse-s\" alt=\"\">\n        <img src=\"/assets/ellipse-m.png\" class=\"ellipse-m\" alt=\"\">\n        <img src=\"/assets/ellipse-l.png\" class=\"ellipse-l\" alt=\"\">\n    </div>\n    <img src=\"/assets/munch.png\" alt=\"\" class=\"munch-portret\">\n</div>\n<div class=\"col-12 px-0 block-picture\">\n    <img [src]=\"isHover ? '/assets/pictures/Rectangle_color.png' : '/assets/pictures/Rectangle.png'\" alt=\"\" class=\"class picture\"\n    (mouseenter)=\"isHover = true\" (mouseout)=\"isHover = false\">\n    <img [src]=\"isHover1 ? '/assets/pictures/Rectangle_color-1.png' : '/assets/pictures/Rectangle-1.png'\" alt=\"\" class=\"class picture\"\n    (mouseenter)=\"isHover1 = true\" (mouseout)=\"isHover1 = false\">\n    <img [src]=\"isHover2 ? '/assets/pictures/Rectangle_color-2.png' : '/assets/pictures/Rectangle-2.png'\" alt=\"\" class=\"class picture\"\n    (mouseenter)=\"isHover2 = true\" (mouseout)=\"isHover2 = false\">\n    <img [src]=\"isHover3 ? '/assets/pictures/Rectangle_color-3.png' : '/assets/pictures/Rectangle-3.png'\" alt=\"\" class=\"class picture\"\n    (mouseenter)=\"isHover3 = true\" (mouseout)=\"isHover3 = false\">\n    <img [src]=\"isHover4 ? '/assets/pictures/Rectangle_color-4.png' : '/assets/pictures/Rectangle-4.png'\" alt=\"\" class=\"class picture\"\n    (mouseenter)=\"isHover4 = true\" (mouseout)=\"isHover4 = false\">\n    <img [src]=\"isHover5 ? '/assets/pictures/Rectangle_color-5.png' : '/assets/pictures/Rectangle-5.png'\" alt=\"\" class=\"class picture\"\n    (mouseenter)=\"isHover5 = true\" (mouseout)=\"isHover5 = false\">\n    <img [src]=\"isHover6 ? '/assets/pictures/Rectangle_color-6.png' : '/assets/pictures/Rectangle-6.png'\" alt=\"\" class=\"class picture\"\n    (mouseenter)=\"isHover6 = true\" (mouseout)=\"isHover6 = false\">\n    <img [src]=\"isHover7 ? '/assets/pictures/Rectangle_color-7.png' : '/assets/pictures/Rectangle-7.png'\" alt=\"\" class=\"class picture\"\n    (mouseenter)=\"isHover7 = true\" (mouseout)=\"isHover7 = false\">\n    <img [src]=\"isHover8 ? '/assets/pictures/Rectangle_color-8.png' : '/assets/pictures/Rectangle-8.png'\" alt=\"\" class=\"class picture\"\n    (mouseenter)=\"isHover8 = true\" (mouseout)=\"isHover8 = false\">\n    <img [src]=\"isHover9 ? '/assets/pictures/Rectangle_color-9.png' : '/assets/pictures/Rectangle-9.png'\" alt=\"\" class=\"class picture\"\n    (mouseenter)=\"isHover9 = true\" (mouseout)=\"isHover9 = false\">\n    <img [src]=\"isHover10 ? '/assets/pictures/Rectangle_color-10.png' : '/assets/pictures/Rectangle-10.png'\" alt=\"\" class=\"class picture\"\n    (mouseenter)=\"isHover10 = true\" (mouseout)=\"isHover10 = false\">\n    <img [src]=\"isHover11 ? '/assets/pictures/Rectangle_color-11.png' : '/assets/pictures/Rectangle-11.png'\" alt=\"\" class=\"class picture\"\n    (mouseenter)=\"isHover11 = true\" (mouseout)=\"isHover11 = false\">\n</div>\n<div class=\"col-12 px-0 block-3\">\n    <div class=\"text-block-3-3\">\n        <div class=\"primary-3-3\">\n            Культовая картина основаная на&nbsp;реальных событиях\n        </div>\n        <div class=\"secondary-3-3\">\n            Художник создал n версий картины в стремлении наиболее точно передать чувства охватившие его на берегу Осло\n            фьорда.\n        </div>\n    </div>\n    <div class=\"text-block-3\">\n        <div class=\"secondary-3\">Лучшие&nbsp;виды</div>\n        <div class=\"primary-3\">Oslofjorden</div>\n    </div>\n    <img src=\"/assets/Rectangle 2.png\" alt=\"\" class=\"img-fluid backgorund-block-3\">\n    <img src=\"/assets/htcviveon.png\" alt=\"\" class=\"htcviveon\">\n</div>\n<div class=\"col-12 px-0 block-4\">\n    <div class=\"text-block-4\">\n        <div class=\"primary-4\">Резонанс человека и природы</div>\n        <div class=\"secondary-4\">Мунк умел уловить настроение новержской природы, так что зритель сам входит в резонанс\n            с пейзажем картины.\n            Почувствуйте вибрации природы через опыт VR\n        </div>\n    </div>\n    <div class=\"planets\">\n        <img src=\"/assets/sphere-1.png\" alt=\"\" class=\"planet-1\">\n        <img src=\"/assets/sphere-2.png\" alt=\"\" class=\"planet-2\">\n        <img src=\"/assets/sphere-3.png\" alt=\"\" class=\"planet-3\">\n        <img src=\"/assets/sphere-4.png\" alt=\"\" class=\"planet-4\">\n    </div>\n</div>\n<div class=\"col-12 px-0 block-5\">\n    <img src=\"/assets/group-photo.png\" alt=\"\" class=\"img-fluid\">\n    <div class=\"photo-block-5\">\n        <img src=\"/assets/photo-1.png\" alt=\"\">\n        <img src=\"/assets/photo-2.png\" alt=\"\">\n        <img src=\"/assets/photo-3.png\" alt=\"\">\n        <img src=\"/assets/photo-4.png\" alt=\"\">\n    </div>\n</div>\n<div class=\"col-12 px-0 block-6\">\n    <div class=\"text-block-6\">\n        <div class=\"primary-6\">Пейзаж вашего настроения на память</div>\n        <div class=\"secondary-6\">Личность художника наболее ярко проявляется в его картинах. А какой пейзаж может\n            описать ваше настроение?\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/container/container.component.scss":
/*!************************************************************!*\
  !*** ./src/app/modules/container/container.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".block-1.active .picture {\n  opacity: 1;\n  -webkit-animation: slide-in-bottom 0.8s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n          animation: slide-in-bottom 0.8s cubic-bezier(0.39, 0.575, 0.565, 1) both; }\n\n.block-1.active .text-block-1 {\n  opacity: 1;\n  -webkit-animation: slide-in-bottom 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n          animation: slide-in-bottom 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both; }\n\n.block-1 .picture {\n  position: absolute;\n  top: 17%;\n  left: 54%;\n  width: 28%;\n  opacity: 0; }\n\n.block-1 .text-block-1 {\n  opacity: 0;\n  z-index: 10;\n  position: absolute;\n  display: block;\n  top: -10%;\n  left: 48.5%;\n  width: 8vw;\n  height: 100%;\n  font-style: normal;\n  color: #FFFFFF; }\n\n.block-1 .text-block-1 div.primary-1 {\n    color: #FE3D00;\n    -webkit-transform-origin: 0 0;\n            transform-origin: 0 0;\n    -webkit-transform: rotate(-90deg);\n            transform: rotate(-90deg);\n    font-size: 5vw;\n    font-weight: bold;\n    line-height: 1;\n    position: absolute;\n    top: 157%;\n    left: 2.5vw; }\n\n.block-1 .text-block-1 div.secondary-1 {\n    -webkit-transform-origin: 0 0;\n            transform-origin: 0 0;\n    -webkit-transform: rotate(-90deg);\n            transform: rotate(-90deg);\n    position: absolute;\n    font-size: 2.5vw;\n    top: 70%;\n    line-height: 1;\n    font-weight: bold; }\n\n.block-2 {\n  position: relative;\n  height: 72vw; }\n\n.block-2 .munch-portret {\n    position: absolute;\n    width: 35vw;\n    bottom: 0; }\n\n.block-2 .block-ellipse {\n    position: absolute;\n    width: 15.5vw;\n    height: 15.5vw;\n    top: 14vw;\n    left: 30%; }\n\n.block-2 .block-ellipse .ellipse-s {\n      position: absolute;\n      width: 2.5vw;\n      left: 0;\n      bottom: 0; }\n\n.block-2 .block-ellipse .ellipse-m {\n      position: absolute;\n      width: 4vw;\n      top: 44%;\n      left: calc(50% - 3.2vw); }\n\n.block-2 .block-ellipse .ellipse-l {\n      position: absolute;\n      width: 5.5vw;\n      top: 0;\n      right: 0; }\n\n.block-2:hover .block-ellipse .ellipse-s {\n    -webkit-animation: scale-in-center 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s both;\n            animation: scale-in-center 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s both; }\n\n.block-2:hover .block-ellipse .ellipse-m {\n    -webkit-animation: scale-in-center 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.7s both;\n            animation: scale-in-center 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.7s both; }\n\n.block-2:hover .block-ellipse .ellipse-l {\n    -webkit-animation: scale-in-center 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1.4s both;\n            animation: scale-in-center 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1.4s both; }\n\n.block-2 .text-block-2 {\n    position: absolute;\n    bottom: 5vw;\n    right: 3.75vw;\n    width: 44vw; }\n\n.block-2 .text-block-2 .primary-2 {\n      font-style: normal;\n      font-weight: bold;\n      font-size: 4vw;\n      line-height: 1.1; }\n\n.block-2 .text-block-2 .secondary-2 {\n      padding-top: 1.5vw;\n      font-style: normal;\n      font-weight: 100;\n      font-size: 2.5vw;\n      line-height: 1.2; }\n\n.block-picture .picture {\n  width: 8.2vw; }\n\n.block-3 {\n  height: 80vw;\n  width: 100%;\n  overflow: hidden; }\n\n.block-3 .backgorund-block-3 {\n    position: absolute;\n    bottom: 0;\n    -webkit-animation: shake-lr 10s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite both;\n            animation: shake-lr 10s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite both; }\n\n.block-3 .htcviveon {\n    position: absolute;\n    width: 46vw;\n    bottom: 0;\n    right: 12vw; }\n\n.block-3 .text-block-3-3 {\n    position: absolute;\n    top: 5vw;\n    left: 8.5vw;\n    width: 48vw; }\n\n.block-3 .text-block-3-3 .primary-3-3 {\n      font-style: normal;\n      font-weight: bold;\n      font-size: 4vw;\n      line-height: 1.1; }\n\n.block-3 .text-block-3-3 .secondary-3-3 {\n      padding-top: 1.5vw;\n      font-style: normal;\n      font-weight: 100;\n      font-size: 2.5vw;\n      line-height: 1.2; }\n\n.block-3 .text-block-3 {\n    z-index: 11;\n    position: absolute;\n    display: block;\n    right: 2vw;\n    width: 8vw;\n    height: 100%; }\n\n.block-3 .text-block-3 div.primary-3 {\n      color: #FE3D00;\n      -webkit-transform-origin: 0 0;\n              transform-origin: 0 0;\n      -webkit-transform: rotate(-90deg);\n              transform: rotate(-90deg);\n      font-size: 5vw;\n      font-weight: bold;\n      line-height: 1;\n      position: absolute;\n      bottom: 12vw;\n      left: 3vw; }\n\n.block-3 .text-block-3 div.secondary-3 {\n      -webkit-transform-origin: 0 0;\n              transform-origin: 0 0;\n      -webkit-transform: rotate(-90deg);\n              transform: rotate(-90deg);\n      position: absolute;\n      color: white;\n      bottom: 7vw;\n      font-size: 3vw;\n      font-weight: bold;\n      line-height: 1; }\n\n.block-4 {\n  height: 55vw; }\n\n.block-4 .text-block-4 {\n    position: absolute;\n    width: 44vw;\n    top: 5vw;\n    left: 8.5vw; }\n\n.block-4 .text-block-4 .primary-4 {\n      font-style: normal;\n      font-weight: bold;\n      font-size: 4vw;\n      line-height: 1.1; }\n\n.block-4 .text-block-4 .secondary-4 {\n      padding-top: 1.5vw;\n      font-style: normal;\n      font-weight: 100;\n      font-size: 2.5vw;\n      line-height: 1.2; }\n\n.block-4 .planets {\n    position: absolute;\n    width: 48vw;\n    height: 48vw;\n    left: 40vw;\n    top: 5vw; }\n\n.block-4 .planets .planet-1 {\n      width: 15vw;\n      position: absolute;\n      left: 0;\n      bottom: 0; }\n\n.block-4 .planets .planet-2 {\n      width: 15vw;\n      position: absolute;\n      left: 25%;\n      bottom: 25%; }\n\n.block-4 .planets .planet-3 {\n      width: 15vw;\n      position: absolute;\n      right: 23%;\n      top: 22%; }\n\n.block-4 .planets .planet-4 {\n      width: 15vw;\n      position: absolute;\n      right: 0;\n      top: 0; }\n\n.block-4:hover .planets .planet-1 {\n    -webkit-animation: slide-in-bottom-second 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n            animation: slide-in-bottom-second 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both; }\n\n.block-4:hover .planets .planet-2 {\n    -webkit-animation: slide-in-bottom-second 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n            animation: slide-in-bottom-second 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94) both; }\n\n.block-4:hover .planets .planet-3 {\n    -webkit-animation: slide-in-bottom-second 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n            animation: slide-in-bottom-second 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both; }\n\n.block-4:hover .planets .planet-4 {\n    -webkit-animation: slide-in-bottom-second 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n            animation: slide-in-bottom-second 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both; }\n\n.block-5 .photo-block-5 {\n  position: absolute;\n  left: 6vw;\n  top: 50%;\n  width: 40vw; }\n\n.block-5 .photo-block-5 img {\n    width: 0;\n    height: 0;\n    margin-top: 1.875vw; }\n\n.block-5 .photo-block-5 img:nth-child(odd) {\n      margin-right: 1.875vw; }\n\n.block-5:hover .photo-block-5 img:nth-child(1) {\n  -webkit-animation: slide-in-bottom-second-image 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.5s both;\n          animation: slide-in-bottom-second-image 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.5s both; }\n\n.block-5:hover .photo-block-5 img:nth-child(2) {\n  -webkit-animation: slide-in-bottom-second-image 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.5s both;\n          animation: slide-in-bottom-second-image 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.5s both; }\n\n.block-5:hover .photo-block-5 img:nth-child(3) {\n  -webkit-animation: slide-in-bottom-second-image 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1s both;\n          animation: slide-in-bottom-second-image 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1s both; }\n\n.block-5:hover .photo-block-5 img:nth-child(4) {\n  -webkit-animation: slide-in-bottom-second-image 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1s both;\n          animation: slide-in-bottom-second-image 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1s both; }\n\n.block-6 .text-block-6 {\n  position: absolute;\n  padding-top: 5vw;\n  padding-bottom: 7vw;\n  right: 3.5vw;\n  width: 40vw; }\n\n.block-6 .text-block-6 .primary-6 {\n    font-style: normal;\n    font-weight: bold;\n    font-size: 5vw;\n    line-height: 1.1; }\n\n.block-6 .text-block-6 .secondary-6 {\n    padding-top: 1.5vw;\n    font-style: normal;\n    font-weight: 100;\n    font-size: 3vw;\n    line-height: 1.2; }\n\n@-webkit-keyframes slide-in-bottom {\n  0% {\n    -webkit-transform: translateY(2000px);\n            transform: translateY(2000px);\n    opacity: 0; }\n  100% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n    opacity: 1; } }\n\n@keyframes slide-in-bottom {\n  0% {\n    -webkit-transform: translateY(2000px);\n            transform: translateY(2000px);\n    opacity: 0; }\n  100% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n    opacity: 1; } }\n\n@-webkit-keyframes slide-in-bottom-second {\n  0% {\n    -webkit-transform: translateY(60vw);\n            transform: translateY(60vw);\n    opacity: 0; }\n  100% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n    opacity: 1; } }\n\n@keyframes slide-in-bottom-second {\n  0% {\n    -webkit-transform: translateY(60vw);\n            transform: translateY(60vw);\n    opacity: 0; }\n  100% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n    opacity: 1; } }\n\n@-webkit-keyframes slide-in-bottom-second-image {\n  0% {\n    -webkit-transform: translateY(60vw);\n            transform: translateY(60vw);\n    opacity: 0;\n    width: 18.5vw;\n    height: 18.5vw; }\n  100% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n    opacity: 1;\n    width: 18.5vw;\n    height: 18.5vw; } }\n\n@keyframes slide-in-bottom-second-image {\n  0% {\n    -webkit-transform: translateY(60vw);\n            transform: translateY(60vw);\n    opacity: 0;\n    width: 18.5vw;\n    height: 18.5vw; }\n  100% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n    opacity: 1;\n    width: 18.5vw;\n    height: 18.5vw; } }\n\n@-webkit-keyframes scale-in-center {\n  0% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    opacity: 1; }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1; } }\n\n@keyframes scale-in-center {\n  0% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    opacity: 1; }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1; } }\n\n@-webkit-keyframes shake-lr {\n  0%,\n  100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n    -webkit-transform-origin: 50% 50%;\n            transform-origin: 50% 50%; }\n  10% {\n    -webkit-transform: rotate(1deg);\n            transform: rotate(1deg); }\n  20%,\n  40%,\n  60% {\n    -webkit-transform: rotate(-2deg);\n            transform: rotate(-2deg); }\n  30%,\n  50%,\n  70% {\n    -webkit-transform: rotate(2deg);\n            transform: rotate(2deg); }\n  80% {\n    -webkit-transform: rotate(-1deg);\n            transform: rotate(-1deg); }\n  90% {\n    -webkit-transform: rotate(1deg);\n            transform: rotate(1deg); } }\n\n@keyframes shake-lr {\n  0%,\n  100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n    -webkit-transform-origin: 50% 50%;\n            transform-origin: 50% 50%; }\n  10% {\n    -webkit-transform: rotate(1deg);\n            transform: rotate(1deg); }\n  20%,\n  40%,\n  60% {\n    -webkit-transform: rotate(-2deg);\n            transform: rotate(-2deg); }\n  30%,\n  50%,\n  70% {\n    -webkit-transform: rotate(2deg);\n            transform: rotate(2deg); }\n  80% {\n    -webkit-transform: rotate(-1deg);\n            transform: rotate(-1deg); }\n  90% {\n    -webkit-transform: rotate(1deg);\n            transform: rotate(1deg); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb250YWluZXIvQzpcXFVzZXJzXFxOTWFydXNldmFcXERvY3VtZW50c1xccHJvamVjdFxcbXVuY2gvc3JjXFxhcHBcXG1vZHVsZXNcXGNvbnRhaW5lclxcY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBSU0sVUFBVTtFQUNWLGdGQUE2RTtVQUE3RSx3RUFBNkUsRUFBQTs7QUFMbkY7RUFRTSxVQUFVO0VBQ1YsK0VBQTJFO1VBQTNFLHVFQUEyRSxFQUFBOztBQVRqRjtFQWFJLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULFVBQVU7RUFDVixVQUFVLEVBQUE7O0FBakJkO0VBcUJJLFVBQVU7RUFDVixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxTQUFTO0VBQ1QsV0FBVztFQUNYLFVBQVU7RUFDVixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGNBQWMsRUFBQTs7QUE5QmxCO0lBaUNNLGNBQWM7SUFDZCw2QkFBcUI7WUFBckIscUJBQXFCO0lBQ3JCLGlDQUF5QjtZQUF6Qix5QkFBeUI7SUFDekIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXLEVBQUE7O0FBekNqQjtJQTRDTSw2QkFBcUI7WUFBckIscUJBQXFCO0lBQ3JCLGlDQUF5QjtZQUF6Qix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixRQUFRO0lBQ1IsY0FBYztJQUNkLGlCQUFpQixFQUFBOztBQUt2QjtFQUNFLGtCQUFrQjtFQUNsQixZQUFZLEVBQUE7O0FBRmQ7SUFLSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVMsRUFBQTs7QUFQYjtJQVdJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsY0FBYztJQUNkLFNBQVM7SUFDVCxTQUFTLEVBQUE7O0FBZmI7TUFrQk0sa0JBQWtCO01BQ2xCLFlBQVk7TUFDWixPQUFPO01BQ1AsU0FBUyxFQUFBOztBQXJCZjtNQXlCTSxrQkFBa0I7TUFDbEIsVUFBVTtNQUNWLFFBQVE7TUFDUix1QkFBdUIsRUFBQTs7QUE1QjdCO01BZ0NNLGtCQUFrQjtNQUNsQixZQUFZO01BQ1osTUFBTTtNQUNOLFFBQVEsRUFBQTs7QUFuQ2Q7SUEwQ00sb0ZBQWdGO1lBQWhGLDRFQUFnRixFQUFBOztBQTFDdEY7SUE2Q00sc0ZBQWtGO1lBQWxGLDhFQUFrRixFQUFBOztBQTdDeEY7SUFnRE0sc0ZBQWtGO1lBQWxGLDhFQUFrRixFQUFBOztBQWhEeEY7SUFxREksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsV0FBVyxFQUFBOztBQXhEZjtNQTJETSxrQkFBa0I7TUFDbEIsaUJBQWlCO01BQ2pCLGNBQWM7TUFDZCxnQkFBZ0IsRUFBQTs7QUE5RHRCO01Ba0VNLGtCQUFrQjtNQUNsQixrQkFBa0I7TUFDbEIsZ0JBQWdCO01BQ2hCLGdCQUFnQjtNQUNoQixnQkFBZ0IsRUFBQTs7QUFPdEI7RUFFSSxZQUFZLEVBQUE7O0FBR2hCO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxnQkFBZ0IsRUFBQTs7QUFIbEI7SUFNSSxrQkFBa0I7SUFDbEIsU0FBUztJQUVULHFGQUE4RTtZQUE5RSw2RUFBOEUsRUFBQTs7QUFUbEY7SUFZSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7SUFDVCxXQUFXLEVBQUE7O0FBZmY7SUFtQkksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixXQUFXO0lBQ1gsV0FBVyxFQUFBOztBQXRCZjtNQXlCTSxrQkFBa0I7TUFDbEIsaUJBQWlCO01BQ2pCLGNBQWM7TUFDZCxnQkFBZ0IsRUFBQTs7QUE1QnRCO01BZ0NNLGtCQUFrQjtNQUNsQixrQkFBa0I7TUFDbEIsZ0JBQWdCO01BQ2hCLGdCQUFnQjtNQUNoQixnQkFBZ0IsRUFBQTs7QUFwQ3RCO0lBMENJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFVBQVU7SUFDVixVQUFVO0lBQ1YsWUFBWSxFQUFBOztBQS9DaEI7TUFrRE0sY0FBYztNQUNkLDZCQUFxQjtjQUFyQixxQkFBcUI7TUFDckIsaUNBQXlCO2NBQXpCLHlCQUF5QjtNQUN6QixjQUFjO01BQ2QsaUJBQWlCO01BQ2pCLGNBQWM7TUFDZCxrQkFBa0I7TUFDbEIsWUFBWTtNQUNaLFNBQVMsRUFBQTs7QUExRGY7TUE4RE0sNkJBQXFCO2NBQXJCLHFCQUFxQjtNQUNyQixpQ0FBeUI7Y0FBekIseUJBQXlCO01BQ3pCLGtCQUFrQjtNQUNsQixZQUFZO01BQ1osV0FBVztNQUNYLGNBQWM7TUFDZCxpQkFBaUI7TUFDakIsY0FBYyxFQUFBOztBQU1wQjtFQUNFLFlBQVksRUFBQTs7QUFEZDtJQUlJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsUUFBUTtJQUNSLFdBQVcsRUFBQTs7QUFQZjtNQVVNLGtCQUFrQjtNQUNsQixpQkFBaUI7TUFDakIsY0FBYztNQUNkLGdCQUFnQixFQUFBOztBQWJ0QjtNQWlCTSxrQkFBa0I7TUFDbEIsa0JBQWtCO01BQ2xCLGdCQUFnQjtNQUNoQixnQkFBZ0I7TUFDaEIsZ0JBQWdCLEVBQUE7O0FBckJ0QjtJQTBCSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixVQUFVO0lBQ1YsUUFBUSxFQUFBOztBQTlCWjtNQWlDTSxXQUFXO01BQ1gsa0JBQWtCO01BQ2xCLE9BQU87TUFDUCxTQUFTLEVBQUE7O0FBcENmO01BdUNNLFdBQVc7TUFDWCxrQkFBa0I7TUFDbEIsU0FBUztNQUNULFdBQVcsRUFBQTs7QUExQ2pCO01BNkNNLFdBQVc7TUFDWCxrQkFBa0I7TUFDbEIsVUFBVTtNQUNWLFFBQVEsRUFBQTs7QUFoRGQ7TUFtRE0sV0FBVztNQUNYLGtCQUFrQjtNQUNsQixRQUFRO01BQ1IsTUFBTSxFQUFBOztBQXREWjtJQTRETSx3RkFBb0Y7WUFBcEYsZ0ZBQW9GLEVBQUE7O0FBNUQxRjtJQStETSx5RkFBcUY7WUFBckYsaUZBQXFGLEVBQUE7O0FBL0QzRjtJQWtFTSx3RkFBb0Y7WUFBcEYsZ0ZBQW9GLEVBQUE7O0FBbEUxRjtJQXFFTSxzRkFBa0Y7WUFBbEYsOEVBQWtGLEVBQUE7O0FBS3hGO0VBRUksa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBQ1IsV0FBVyxFQUFBOztBQUxmO0lBT00sUUFBUTtJQUNSLFNBQVM7SUFNVCxtQkFBbUIsRUFBQTs7QUFkekI7TUFVUSxxQkFBcUIsRUFBQTs7QUFWN0I7RUFvQlEsbUdBQStGO1VBQS9GLDJGQUErRixFQUFBOztBQXBCdkc7RUF1QlEsbUdBQStGO1VBQS9GLDJGQUErRixFQUFBOztBQXZCdkc7RUEwQlEsaUdBQTZGO1VBQTdGLHlGQUE2RixFQUFBOztBQTFCckc7RUE2QlEsaUdBQTZGO1VBQTdGLHlGQUE2RixFQUFBOztBQU1yRztFQUVJLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixXQUFXLEVBQUE7O0FBTmY7SUFTTSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxnQkFBZ0IsRUFBQTs7QUFadEI7SUFnQk0sa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGdCQUFnQixFQUFBOztBQUt0QjtFQUNFO0lBQ0UscUNBQTZCO1lBQTdCLDZCQUE2QjtJQUM3QixVQUFVLEVBQUE7RUFFWjtJQUNFLGdDQUF3QjtZQUF4Qix3QkFBd0I7SUFDeEIsVUFBVSxFQUFBLEVBQUE7O0FBUGQ7RUFDRTtJQUNFLHFDQUE2QjtZQUE3Qiw2QkFBNkI7SUFDN0IsVUFBVSxFQUFBO0VBRVo7SUFDRSxnQ0FBd0I7WUFBeEIsd0JBQXdCO0lBQ3hCLFVBQVUsRUFBQSxFQUFBOztBQUlkO0VBQ0U7SUFDRSxtQ0FBMkI7WUFBM0IsMkJBQTJCO0lBQzNCLFVBQVUsRUFBQTtFQUVaO0lBQ0UsZ0NBQXdCO1lBQXhCLHdCQUF3QjtJQUN4QixVQUFVLEVBQUEsRUFBQTs7QUFQZDtFQUNFO0lBQ0UsbUNBQTJCO1lBQTNCLDJCQUEyQjtJQUMzQixVQUFVLEVBQUE7RUFFWjtJQUNFLGdDQUF3QjtZQUF4Qix3QkFBd0I7SUFDeEIsVUFBVSxFQUFBLEVBQUE7O0FBSWQ7RUFDRTtJQUNFLG1DQUEyQjtZQUEzQiwyQkFBMkI7SUFDM0IsVUFBVTtJQUNWLGFBQWE7SUFDYixjQUFjLEVBQUE7RUFFaEI7SUFDRSxnQ0FBd0I7WUFBeEIsd0JBQXdCO0lBQ3hCLFVBQVU7SUFDVixhQUFhO0lBQ2IsY0FBYyxFQUFBLEVBQUE7O0FBWGxCO0VBQ0U7SUFDRSxtQ0FBMkI7WUFBM0IsMkJBQTJCO0lBQzNCLFVBQVU7SUFDVixhQUFhO0lBQ2IsY0FBYyxFQUFBO0VBRWhCO0lBQ0UsZ0NBQXdCO1lBQXhCLHdCQUF3QjtJQUN4QixVQUFVO0lBQ1YsYUFBYTtJQUNiLGNBQWMsRUFBQSxFQUFBOztBQUlsQjtFQUNFO0lBQ0UsMkJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQixVQUFVLEVBQUE7RUFFWjtJQUNFLDJCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsVUFBVSxFQUFBLEVBQUE7O0FBUGQ7RUFDRTtJQUNFLDJCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsVUFBVSxFQUFBO0VBRVo7SUFDRSwyQkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLFVBQVUsRUFBQSxFQUFBOztBQUdkO0VBQ0U7O0lBRUUsK0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2QixpQ0FBeUI7WUFBekIseUJBQXlCLEVBQUE7RUFFM0I7SUFDRSwrQkFBdUI7WUFBdkIsdUJBQXVCLEVBQUE7RUFFekI7OztJQUdFLGdDQUF3QjtZQUF4Qix3QkFBd0IsRUFBQTtFQUUxQjs7O0lBR0UsK0JBQXVCO1lBQXZCLHVCQUF1QixFQUFBO0VBRXpCO0lBQ0UsZ0NBQXdCO1lBQXhCLHdCQUF3QixFQUFBO0VBRTFCO0lBQ0UsK0JBQXVCO1lBQXZCLHVCQUF1QixFQUFBLEVBQUE7O0FBdkIzQjtFQUNFOztJQUVFLCtCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIsaUNBQXlCO1lBQXpCLHlCQUF5QixFQUFBO0VBRTNCO0lBQ0UsK0JBQXVCO1lBQXZCLHVCQUF1QixFQUFBO0VBRXpCOzs7SUFHRSxnQ0FBd0I7WUFBeEIsd0JBQXdCLEVBQUE7RUFFMUI7OztJQUdFLCtCQUF1QjtZQUF2Qix1QkFBdUIsRUFBQTtFQUV6QjtJQUNFLGdDQUF3QjtZQUF4Qix3QkFBd0IsRUFBQTtFQUUxQjtJQUNFLCtCQUF1QjtZQUF2Qix1QkFBdUIsRUFBQSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9jb250YWluZXIvY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJsb2NrLTEge1xyXG5cclxuICAmLmFjdGl2ZSB7XHJcbiAgICAucGljdHVyZSB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIGFuaW1hdGlvbjogc2xpZGUtaW4tYm90dG9tIDAuOHMgY3ViaWMtYmV6aWVyKDAuMzkwLCAwLjU3NSwgMC41NjUsIDEuMDAwKSBib3RoO1xyXG4gICAgfVxyXG4gICAgLnRleHQtYmxvY2stMSB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIGFuaW1hdGlvbjogc2xpZGUtaW4tYm90dG9tIDFzIGN1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MCkgYm90aDtcclxuICAgIH1cclxuICB9XHJcbiAgLnBpY3R1cmUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxNyU7XHJcbiAgICBsZWZ0OiA1NCU7XHJcbiAgICB3aWR0aDogMjglO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcblxyXG4gIC50ZXh0LWJsb2NrLTEge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0b3A6IC0xMCU7XHJcbiAgICBsZWZ0OiA0OC41JTtcclxuICAgIHdpZHRoOiA4dnc7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuXHJcbiAgICBkaXYucHJpbWFyeS0xIHtcclxuICAgICAgY29sb3I6ICNGRTNEMDA7XHJcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcclxuICAgICAgZm9udC1zaXplOiA1dnc7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDE1NyU7XHJcbiAgICAgIGxlZnQ6IDIuNXZ3O1xyXG4gICAgfVxyXG4gICAgZGl2LnNlY29uZGFyeS0xIHtcclxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMi41dnc7XHJcbiAgICAgIHRvcDogNzAlO1xyXG4gICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uYmxvY2stMiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogNzJ2dztcclxuXHJcbiAgLm11bmNoLXBvcnRyZXQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDM1dnc7XHJcbiAgICBib3R0b206IDA7XHJcbiAgfVxyXG5cclxuICAuYmxvY2stZWxsaXBzZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTUuNXZ3O1xyXG4gICAgaGVpZ2h0OiAxNS41dnc7XHJcbiAgICB0b3A6IDE0dnc7XHJcbiAgICBsZWZ0OiAzMCU7XHJcblxyXG4gICAgLmVsbGlwc2UtcyB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgd2lkdGg6IDIuNXZ3O1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmVsbGlwc2UtbSB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgd2lkdGg6IDR2dztcclxuICAgICAgdG9wOiA0NCU7XHJcbiAgICAgIGxlZnQ6IGNhbGMoNTAlIC0gMy4ydncpO1xyXG4gICAgfVxyXG5cclxuICAgIC5lbGxpcHNlLWwge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHdpZHRoOiA1LjV2dztcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICByaWdodDogMDtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICAmOmhvdmVyIC5ibG9jay1lbGxpcHNlIHtcclxuICAgIC5lbGxpcHNlLXMge1xyXG4gICAgICBhbmltYXRpb246IHNjYWxlLWluLWNlbnRlciAwLjdzIGN1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MCkgMHMgYm90aDtcclxuICAgIH1cclxuICAgIC5lbGxpcHNlLW0ge1xyXG4gICAgICBhbmltYXRpb246IHNjYWxlLWluLWNlbnRlciAwLjdzIGN1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MCkgMC43cyBib3RoO1xyXG4gICAgfVxyXG4gICAgLmVsbGlwc2UtbCB7XHJcbiAgICAgIGFuaW1hdGlvbjogc2NhbGUtaW4tY2VudGVyIDAuN3MgY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjQ2MCwgMC40NTAsIDAuOTQwKSAxLjRzIGJvdGg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudGV4dC1ibG9jay0yIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogNXZ3O1xyXG4gICAgcmlnaHQ6IDMuNzV2dztcclxuICAgIHdpZHRoOiA0NHZ3O1xyXG5cclxuICAgIC5wcmltYXJ5LTIge1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXNpemU6IDR2dztcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuMTtcclxuICAgIH1cclxuXHJcbiAgICAuc2Vjb25kYXJ5LTIge1xyXG4gICAgICBwYWRkaW5nLXRvcDogMS41dnc7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgICAgZm9udC1zaXplOiAyLjV2dztcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxufVxyXG5cclxuLmJsb2NrLXBpY3R1cmUge1xyXG4gIC5waWN0dXJlIHtcclxuICAgIHdpZHRoOiA4LjJ2dztcclxuICB9XHJcbn1cclxuLmJsb2NrLTMge1xyXG4gIGhlaWdodDogODB2dztcclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAuYmFja2dvcnVuZC1ibG9jay0zIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuXHJcbiAgICBhbmltYXRpb246IHNoYWtlLWxyIDEwcyBjdWJpYy1iZXppZXIoMC40NTUsIDAuMDMwLCAwLjUxNSwgMC45NTUpIGluZmluaXRlIGJvdGg7XHJcbiAgfVxyXG4gIC5odGN2aXZlb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDQ2dnc7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMTJ2dztcclxuICB9XHJcblxyXG4gIC50ZXh0LWJsb2NrLTMtMyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDV2dztcclxuICAgIGxlZnQ6IDguNXZ3O1xyXG4gICAgd2lkdGg6IDQ4dnc7XHJcblxyXG4gICAgLnByaW1hcnktMy0zIHtcclxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zaXplOiA0dnc7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjE7XHJcbiAgICB9XHJcblxyXG4gICAgLnNlY29uZGFyeS0zLTMge1xyXG4gICAgICBwYWRkaW5nLXRvcDogMS41dnc7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgICAgZm9udC1zaXplOiAyLjV2dztcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICAudGV4dC1ibG9jay0zIHtcclxuICAgIHotaW5kZXg6IDExO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICByaWdodDogMnZ3O1xyXG4gICAgd2lkdGg6IDh2dztcclxuICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICBkaXYucHJpbWFyeS0zIHtcclxuICAgICAgY29sb3I6ICNGRTNEMDA7XHJcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcclxuICAgICAgZm9udC1zaXplOiA1dnc7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBib3R0b206IDEydnc7XHJcbiAgICAgIGxlZnQ6IDN2dztcclxuICAgIH1cclxuXHJcbiAgICBkaXYuc2Vjb25kYXJ5LTMge1xyXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBib3R0b206IDd2dztcclxuICAgICAgZm9udC1zaXplOiAzdnc7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG4uYmxvY2stNCB7XHJcbiAgaGVpZ2h0OiA1NXZ3O1xyXG5cclxuICAudGV4dC1ibG9jay00IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA0NHZ3O1xyXG4gICAgdG9wOiA1dnc7XHJcbiAgICBsZWZ0OiA4LjV2dztcclxuXHJcbiAgICAucHJpbWFyeS00IHtcclxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zaXplOiA0dnc7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjE7XHJcbiAgICB9XHJcblxyXG4gICAgLnNlY29uZGFyeS00IHtcclxuICAgICAgcGFkZGluZy10b3A6IDEuNXZ3O1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMi41dnc7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucGxhbmV0cyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogNDh2dztcclxuICAgIGhlaWdodDogNDh2dztcclxuICAgIGxlZnQ6IDQwdnc7XHJcbiAgICB0b3A6IDV2dztcclxuXHJcbiAgICAucGxhbmV0LTEge1xyXG4gICAgICB3aWR0aDogMTV2dztcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICB9XHJcbiAgICAucGxhbmV0LTIge1xyXG4gICAgICB3aWR0aDogMTV2dztcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OiAyNSU7XHJcbiAgICAgIGJvdHRvbTogMjUlO1xyXG4gICAgfVxyXG4gICAgLnBsYW5ldC0zIHtcclxuICAgICAgd2lkdGg6IDE1dnc7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgcmlnaHQ6IDIzJTtcclxuICAgICAgdG9wOiAyMiU7XHJcbiAgICB9XHJcbiAgICAucGxhbmV0LTQge1xyXG4gICAgICB3aWR0aDogMTV2dztcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJjpob3ZlciAucGxhbmV0cyB7XHJcbiAgICAucGxhbmV0LTEge1xyXG4gICAgICBhbmltYXRpb246IHNsaWRlLWluLWJvdHRvbS1zZWNvbmQgMC41cyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApIGJvdGg7XHJcbiAgICB9XHJcbiAgICAucGxhbmV0LTIge1xyXG4gICAgICBhbmltYXRpb246IHNsaWRlLWluLWJvdHRvbS1zZWNvbmQgMC42NXMgY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjQ2MCwgMC40NTAsIDAuOTQwKSBib3RoO1xyXG4gICAgfVxyXG4gICAgLnBsYW5ldC0zIHtcclxuICAgICAgYW5pbWF0aW9uOiBzbGlkZS1pbi1ib3R0b20tc2Vjb25kIDAuOHMgY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjQ2MCwgMC40NTAsIDAuOTQwKSBib3RoO1xyXG4gICAgfVxyXG4gICAgLnBsYW5ldC00IHtcclxuICAgICAgYW5pbWF0aW9uOiBzbGlkZS1pbi1ib3R0b20tc2Vjb25kIDFzIGN1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MCkgYm90aDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5ibG9jay01IHtcclxuICAucGhvdG8tYmxvY2stNSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA2dnc7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHdpZHRoOiA0MHZ3O1xyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDA7XHJcbiAgICAgIGhlaWdodDogMDtcclxuICAgICAgJjpudGgtY2hpbGQob2RkKSB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxLjg3NXZ3O1xyXG4gICAgICB9XHJcbiAgICAgICY6bnRoLWNoaWxkKDMtNCkge1xyXG4gICAgICB9XHJcbiAgICAgIG1hcmdpbi10b3A6IDEuODc1dnc7XHJcbiAgICB9XHJcbiAgfVxyXG4gICY6aG92ZXIgLnBob3RvLWJsb2NrLTUge1xyXG4gICAgaW1nIHtcclxuICAgICAgJjpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgIGFuaW1hdGlvbjogc2xpZGUtaW4tYm90dG9tLXNlY29uZC1pbWFnZSAwLjVzIGN1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MCkgMC41cyBib3RoO1xyXG4gICAgICB9XHJcbiAgICAgICY6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICBhbmltYXRpb246IHNsaWRlLWluLWJvdHRvbS1zZWNvbmQtaW1hZ2UgMC41cyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApIDAuNXMgYm90aDtcclxuICAgICAgfVxyXG4gICAgICAmOm50aC1jaGlsZCgzKSB7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBzbGlkZS1pbi1ib3R0b20tc2Vjb25kLWltYWdlIDAuNXMgY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjQ2MCwgMC40NTAsIDAuOTQwKSAxcyBib3RoO1xyXG4gICAgICB9XHJcbiAgICAgICY6bnRoLWNoaWxkKDQpIHtcclxuICAgICAgICBhbmltYXRpb246IHNsaWRlLWluLWJvdHRvbS1zZWNvbmQtaW1hZ2UgMC41cyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApIDFzIGJvdGg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5ibG9jay02IHtcclxuICAudGV4dC1ibG9jay02IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHBhZGRpbmctdG9wOiA1dnc7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogN3Z3O1xyXG4gICAgcmlnaHQ6IDMuNXZ3O1xyXG4gICAgd2lkdGg6IDQwdnc7XHJcblxyXG4gICAgLnByaW1hcnktNiB7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogNXZ3O1xyXG4gICAgICBsaW5lLWhlaWdodDogMS4xO1xyXG4gICAgfVxyXG5cclxuICAgIC5zZWNvbmRhcnktNiB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAxLjV2dztcclxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgICBmb250LXNpemU6IDN2dztcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2xpZGUtaW4tYm90dG9tIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwMHB4KTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2xpZGUtaW4tYm90dG9tLXNlY29uZCB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDYwdncpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzbGlkZS1pbi1ib3R0b20tc2Vjb25kLWltYWdlIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNjB2dyk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgd2lkdGg6IDE4LjV2dztcclxuICAgIGhlaWdodDogMTguNXZ3O1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB3aWR0aDogMTguNXZ3O1xyXG4gICAgaGVpZ2h0OiAxOC41dnc7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNjYWxlLWluLWNlbnRlciB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgc2hha2UtbHIge1xyXG4gIDAlLFxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xyXG4gIH1cclxuICAxMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMWRlZyk7XHJcbiAgfVxyXG4gIDIwJSxcclxuICA0MCUsXHJcbiAgNjAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0yZGVnKTtcclxuICB9XHJcbiAgMzAlLFxyXG4gIDUwJSxcclxuICA3MCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMmRlZyk7XHJcbiAgfVxyXG4gIDgwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMWRlZyk7XHJcbiAgfVxyXG4gIDkwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbiJdfQ== */"

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
    function ContainerComponent(renderer) {
        this.renderer = renderer;
        this.classes = 'row';
        this.block1 = false;
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

module.exports = "<nav class=\"col-12 d-flex align-items-center logos\">\n  <img src=\"/assets/art-vr.png\" alt=\"\" class=\"img-thumbnail\">\n  <img src=\"/assets/vr-tech.png\" alt=\"\" class=\"img-thumbnail\">\n  <img src=\"/assets/british-school.png\" alt=\"\" class=\"img-thumbnail\">\n  <img src=\"/assets/tretyakov-logo.png\" alt=\"\" class=\"img-thumbnail\">\n</nav>"

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