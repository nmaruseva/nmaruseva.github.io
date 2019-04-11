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

module.exports = "<div class=\"col-12 px-0 block-1\">\n    <div class=\"text-block-1\">\n        <div class=\"secondary-1\">Крик&nbsp;природы</div>\n        <div class=\"primary-1\">Der&nbsp;Schrei&nbsp;der&nbsp;Natur</div>\n    </div>\n    <img src=\"/assets/intro.png\" alt=\"\" class=\"img-fluid\">\n    <img src=\"/assets/the-scream.png\" alt=\"\" class=\"picture\">\n</div>\n<div class=\"col-12 px-0 block-2\">\n    <div class=\"text-block-2\">\n        <div class=\"primary-2\">Пришло время узнать что происходит на&nbsp;картине «Крик»</div>\n        <div class=\"secondary-2\">Погрузиться внутрь картины, оказаться на берегу Осло-фьёрда и&nbsp;своими глазами\n            увидеть что\n            так поразило\n            художника\n        </div>\n    </div>\n    <div class=\"block-ellipse\">\n        <img src=\"/assets/ellipse-s.png\" class=\"ellipse-s\" alt=\"\">\n        <img src=\"/assets/ellipse-m.png\" class=\"ellipse-m\" alt=\"\">\n        <img src=\"/assets/ellipse-l.png\" class=\"ellipse-l\" alt=\"\">\n    </div>\n    <img src=\"/assets/munch.png\" alt=\"\" class=\"munch-portret\">\n</div>\n<div class=\"col-12 px-0 block-3\">\n    <div class=\"text-block-3-3\">\n        <div class=\"primary-3-3\">\n            Культовая картина основаная на&nbsp;реальных событиях\n        </div>\n        <div class=\"secondary-3-3\">\n            Художник создал n версий картины в стремлении наиболее точно передать чувства охватившие его на берегу Осло фьорда.\n        </div>\n    </div>\n    <div class=\"text-block-3\">\n        <div class=\"secondary-3\">Лучшие&nbsp;виды</div>\n        <div class=\"primary-3\">Oslofjorden</div>\n    </div>\n    <img src=\"/assets/Rectangle 2.png\" alt=\"\" class=\"img-fluid backgorund-block-3\">\n    <img src=\"/assets/htcviveon.png\" alt=\"\" class=\"htcviveon\">\n</div>\n<div class=\"col-12 px-0 block-4\">\n    <div class=\"text-block-4\">\n        <div class=\"primary-4\">Резонанс человека и природы</div>\n        <div class=\"secondary-4\">Мунк умел уловить настроение новержской природы, так что зритель сам входит в резонанс\n            с пейзажем картины.\n            Почувствуйте вибрации природы через опыт VR\n        </div>\n    </div>\n    <div class=\"planets\">\n        <img src=\"/assets/sphere-1.png\" alt=\"\" class=\"planet-1\">\n        <img src=\"/assets/sphere-2.png\" alt=\"\" class=\"planet-2\">\n        <img src=\"/assets/sphere-3.png\" alt=\"\" class=\"planet-3\">\n        <img src=\"/assets/sphere-4.png\" alt=\"\" class=\"planet-4\">\n    </div>\n</div>\n<div class=\"col-12 px-0 block-5\">\n    <img src=\"/assets/group-photo.png\" alt=\"\" class=\"img-fluid\">\n    <div class=\"photo-block-5\">\n        <img src=\"/assets/photo-1.png\" alt=\"\">\n        <img src=\"/assets/photo-2.png\" alt=\"\">\n        <img src=\"/assets/photo-3.png\" alt=\"\">\n        <img src=\"/assets/photo-4.png\" alt=\"\">\n    </div>\n</div>\n<div class=\"col-12 px-0 block-6\">\n    <div class=\"text-block-6\">\n        <div class=\"primary-6\">Пейзаж вашего настроения на память</div>\n        <div class=\"secondary-6\">Личность художника наболее ярко проявляется в его картинах. А какой пейзаж может\n            описать ваше настроение?\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/container/container.component.scss":
/*!************************************************************!*\
  !*** ./src/app/modules/container/container.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".block-1 .picture {\n  position: absolute;\n  top: 17%;\n  left: 54%;\n  width: 28%; }\n\n.block-1 .text-block-1 {\n  z-index: 10;\n  position: absolute;\n  display: block;\n  top: -10%;\n  left: 48.5%;\n  width: 8vw;\n  height: 100%;\n  font-style: normal;\n  color: #FFFFFF; }\n\n.block-1 .text-block-1 div.primary-1 {\n    color: #FE3D00;\n    -webkit-transform-origin: 0 0;\n            transform-origin: 0 0;\n    -webkit-transform: rotate(-90deg);\n            transform: rotate(-90deg);\n    font-size: 5vw;\n    font-weight: bold;\n    line-height: 1;\n    position: absolute;\n    top: 157%;\n    left: 2.5vw; }\n\n.block-1 .text-block-1 div.secondary-1 {\n    -webkit-transform-origin: 0 0;\n            transform-origin: 0 0;\n    -webkit-transform: rotate(-90deg);\n            transform: rotate(-90deg);\n    position: absolute;\n    font-size: 2.5vw;\n    top: 70%;\n    line-height: 1;\n    font-weight: bold; }\n\n.block-2 {\n  position: relative;\n  height: 72vw; }\n\n.block-2 .munch-portret {\n    position: absolute;\n    width: 35vw;\n    bottom: 0; }\n\n.block-2 .block-ellipse {\n    position: absolute;\n    width: 15.5vw;\n    height: 15.5vw;\n    top: 14vw;\n    left: 30%; }\n\n.block-2 .block-ellipse .ellipse-s {\n      position: absolute;\n      width: 2.5vw;\n      left: 0;\n      bottom: 0; }\n\n.block-2 .block-ellipse .ellipse-m {\n      position: absolute;\n      width: 4vw;\n      top: 50%;\n      left: calc(50% - 4vw); }\n\n.block-2 .block-ellipse .ellipse-l {\n      position: absolute;\n      width: 5.5vw;\n      top: 0;\n      right: 0; }\n\n.block-2 .text-block-2 {\n    position: absolute;\n    bottom: 5vw;\n    right: 3.75vw;\n    width: 44vw; }\n\n.block-2 .text-block-2 .primary-2 {\n      font-style: normal;\n      font-weight: bold;\n      font-size: 4vw;\n      line-height: 1.1; }\n\n.block-2 .text-block-2 .secondary-2 {\n      padding-top: 1.5vw;\n      font-style: normal;\n      font-weight: 100;\n      font-size: 2.5vw;\n      line-height: 1.2; }\n\n.block-3 {\n  height: 80vw; }\n\n.block-3 .backgorund-block-3 {\n    position: absolute;\n    bottom: 0; }\n\n.block-3 .htcviveon {\n    position: absolute;\n    width: 46vw;\n    bottom: 0;\n    right: 12vw; }\n\n.block-3 .text-block-3-3 {\n    position: absolute;\n    top: 5vw;\n    left: 8.5vw;\n    width: 48vw; }\n\n.block-3 .text-block-3-3 .primary-3-3 {\n      font-style: normal;\n      font-weight: bold;\n      font-size: 4vw;\n      line-height: 1.1; }\n\n.block-3 .text-block-3-3 .secondary-3-3 {\n      padding-top: 1.5vw;\n      font-style: normal;\n      font-weight: 100;\n      font-size: 2.5vw;\n      line-height: 1.2; }\n\n.block-3 .text-block-3 {\n    z-index: 11;\n    position: absolute;\n    display: block;\n    right: 2vw;\n    width: 8vw;\n    height: 100%; }\n\n.block-3 .text-block-3 div.primary-3 {\n      color: #FE3D00;\n      -webkit-transform-origin: 0 0;\n              transform-origin: 0 0;\n      -webkit-transform: rotate(-90deg);\n              transform: rotate(-90deg);\n      font-size: 5vw;\n      font-weight: bold;\n      line-height: 1;\n      position: absolute;\n      bottom: 12vw;\n      left: 3vw; }\n\n.block-3 .text-block-3 div.secondary-3 {\n      -webkit-transform-origin: 0 0;\n              transform-origin: 0 0;\n      -webkit-transform: rotate(-90deg);\n              transform: rotate(-90deg);\n      position: absolute;\n      color: white;\n      bottom: 7vw;\n      font-size: 3vw;\n      font-weight: bold;\n      line-height: 1; }\n\n.block-4 {\n  height: 55vw; }\n\n.block-4 .text-block-4 {\n    position: absolute;\n    width: 44vw;\n    top: 5vw;\n    left: 8.5vw; }\n\n.block-4 .text-block-4 .primary-4 {\n      font-style: normal;\n      font-weight: bold;\n      font-size: 4vw;\n      line-height: 1.1; }\n\n.block-4 .text-block-4 .secondary-4 {\n      padding-top: 1.5vw;\n      font-style: normal;\n      font-weight: 100;\n      font-size: 2.5vw;\n      line-height: 1.2; }\n\n.block-4 .planets {\n    position: absolute;\n    width: 48vw;\n    height: 48vw;\n    left: 40vw;\n    top: 5vw; }\n\n.block-4 .planets .planet-1 {\n      width: 15vw;\n      position: absolute;\n      left: 0;\n      bottom: 0; }\n\n.block-4 .planets .planet-2 {\n      width: 15vw;\n      position: absolute;\n      left: 25%;\n      bottom: 25%; }\n\n.block-4 .planets .planet-3 {\n      width: 15vw;\n      position: absolute;\n      right: 23%;\n      top: 22%; }\n\n.block-4 .planets .planet-4 {\n      width: 15vw;\n      position: absolute;\n      right: 0;\n      top: 0; }\n\n.block-5 .photo-block-5 {\n  position: absolute;\n  left: 6vw;\n  top: 50%;\n  width: 40vw; }\n\n.block-5 .photo-block-5 img {\n    width: 18.5vw;\n    height: 18.5vw;\n    margin-top: 1.875vw; }\n\n.block-5 .photo-block-5 img:nth-child(odd) {\n      margin-right: 1.875vw; }\n\n.block-6 .text-block-6 {\n  position: absolute;\n  padding-top: 5vw;\n  padding-bottom: 7vw;\n  right: 3.5vw;\n  width: 40vw; }\n\n.block-6 .text-block-6 .primary-6 {\n    font-style: normal;\n    font-weight: bold;\n    font-size: 5vw;\n    line-height: 1.1; }\n\n.block-6 .text-block-6 .secondary-6 {\n    padding-top: 1.5vw;\n    font-style: normal;\n    font-weight: 100;\n    font-size: 3vw;\n    line-height: 1.2; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb250YWluZXIvQzpcXFVzZXJzXFxOTWFydXNldmFcXERvY3VtZW50c1xccHJvamVjdFxcbXVuY2gvc3JjXFxhcHBcXG1vZHVsZXNcXGNvbnRhaW5lclxcY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR0ksa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsVUFBVSxFQUFBOztBQU5kO0VBVUksV0FBVztFQUNYLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsU0FBUztFQUNULFdBQVc7RUFDWCxVQUFVO0VBQ1YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixjQUFjLEVBQUE7O0FBbEJsQjtJQXFCTSxjQUFjO0lBQ2QsNkJBQXFCO1lBQXJCLHFCQUFxQjtJQUNyQixpQ0FBeUI7WUFBekIseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVyxFQUFBOztBQTdCakI7SUFnQ00sNkJBQXFCO1lBQXJCLHFCQUFxQjtJQUNyQixpQ0FBeUI7WUFBekIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsUUFBUTtJQUNSLGNBQWM7SUFDZCxpQkFBaUIsRUFBQTs7QUFLdkI7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWSxFQUFBOztBQUZkO0lBS0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxTQUFTLEVBQUE7O0FBUGI7SUFXSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGNBQWM7SUFDZCxTQUFTO0lBQ1QsU0FBUyxFQUFBOztBQWZiO01Ba0JNLGtCQUFrQjtNQUNsQixZQUFZO01BQ1osT0FBTztNQUNQLFNBQVMsRUFBQTs7QUFyQmY7TUF5Qk0sa0JBQWtCO01BQ2xCLFVBQVU7TUFDVixRQUFRO01BQ1IscUJBQXFCLEVBQUE7O0FBNUIzQjtNQWdDTSxrQkFBa0I7TUFDbEIsWUFBWTtNQUNaLE1BQU07TUFDTixRQUFRLEVBQUE7O0FBbkNkO0lBeUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsYUFBYTtJQUNiLFdBQVcsRUFBQTs7QUE1Q2Y7TUErQ00sa0JBQWtCO01BQ2xCLGlCQUFpQjtNQUNqQixjQUFjO01BQ2QsZ0JBQWdCLEVBQUE7O0FBbER0QjtNQXNETSxrQkFBa0I7TUFDbEIsa0JBQWtCO01BQ2xCLGdCQUFnQjtNQUNoQixnQkFBZ0I7TUFDaEIsZ0JBQWdCLEVBQUE7O0FBT3RCO0VBQ0UsWUFBWSxFQUFBOztBQURkO0lBSUksa0JBQWtCO0lBQ2xCLFNBQVMsRUFBQTs7QUFMYjtJQVFJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsU0FBUztJQUNULFdBQVcsRUFBQTs7QUFYZjtJQWVJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsV0FBVztJQUNYLFdBQVcsRUFBQTs7QUFsQmY7TUFxQk0sa0JBQWtCO01BQ2xCLGlCQUFpQjtNQUNqQixjQUFjO01BQ2QsZ0JBQWdCLEVBQUE7O0FBeEJ0QjtNQTRCTSxrQkFBa0I7TUFDbEIsa0JBQWtCO01BQ2xCLGdCQUFnQjtNQUNoQixnQkFBZ0I7TUFDaEIsZ0JBQWdCLEVBQUE7O0FBaEN0QjtJQXNDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxVQUFVO0lBQ1YsVUFBVTtJQUNWLFlBQVksRUFBQTs7QUEzQ2hCO01BOENNLGNBQWM7TUFDZCw2QkFBcUI7Y0FBckIscUJBQXFCO01BQ3JCLGlDQUF5QjtjQUF6Qix5QkFBeUI7TUFDekIsY0FBYztNQUNkLGlCQUFpQjtNQUNqQixjQUFjO01BQ2Qsa0JBQWtCO01BQ2xCLFlBQVk7TUFDWixTQUFTLEVBQUE7O0FBdERmO01BMERNLDZCQUFxQjtjQUFyQixxQkFBcUI7TUFDckIsaUNBQXlCO2NBQXpCLHlCQUF5QjtNQUN6QixrQkFBa0I7TUFDbEIsWUFBWTtNQUNaLFdBQVc7TUFDWCxjQUFjO01BQ2QsaUJBQWlCO01BQ2pCLGNBQWMsRUFBQTs7QUFNcEI7RUFDRSxZQUFZLEVBQUE7O0FBRGQ7SUFJSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFFBQVE7SUFDUixXQUFXLEVBQUE7O0FBUGY7TUFVTSxrQkFBa0I7TUFDbEIsaUJBQWlCO01BQ2pCLGNBQWM7TUFDZCxnQkFBZ0IsRUFBQTs7QUFidEI7TUFpQk0sa0JBQWtCO01BQ2xCLGtCQUFrQjtNQUNsQixnQkFBZ0I7TUFDaEIsZ0JBQWdCO01BQ2hCLGdCQUFnQixFQUFBOztBQXJCdEI7SUEwQkksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osVUFBVTtJQUNWLFFBQVEsRUFBQTs7QUE5Qlo7TUFpQ00sV0FBVztNQUNYLGtCQUFrQjtNQUNsQixPQUFPO01BQ1AsU0FBUyxFQUFBOztBQXBDZjtNQXVDTSxXQUFXO01BQ1gsa0JBQWtCO01BQ2xCLFNBQVM7TUFDVCxXQUFXLEVBQUE7O0FBMUNqQjtNQTZDTSxXQUFXO01BQ1gsa0JBQWtCO01BQ2xCLFVBQVU7TUFDVixRQUFRLEVBQUE7O0FBaERkO01BbURNLFdBQVc7TUFDWCxrQkFBa0I7TUFDbEIsUUFBUTtNQUNSLE1BQU0sRUFBQTs7QUFNWjtFQUVJLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsUUFBUTtFQUVSLFdBQVcsRUFBQTs7QUFOZjtJQVFNLGFBQWE7SUFDYixjQUFjO0lBS1osbUJBQW1CLEVBQUE7O0FBZDNCO01BV1EscUJBQXFCLEVBQUE7O0FBUTdCO0VBRUksa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFOZjtJQVNNLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsY0FBYztJQUNkLGdCQUFnQixFQUFBOztBQVp0QjtJQWdCTSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2NvbnRhaW5lci9jb250YWluZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmxvY2stMSB7XHJcblxyXG4gIC5waWN0dXJlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTclO1xyXG4gICAgbGVmdDogNTQlO1xyXG4gICAgd2lkdGg6IDI4JTtcclxuICB9XHJcblxyXG4gIC50ZXh0LWJsb2NrLTEge1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRvcDogLTEwJTtcclxuICAgIGxlZnQ6IDQ4LjUlO1xyXG4gICAgd2lkdGg6IDh2dztcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG5cclxuICAgIGRpdi5wcmltYXJ5LTEge1xyXG4gICAgICBjb2xvcjogI0ZFM0QwMDtcclxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xyXG4gICAgICBmb250LXNpemU6IDV2dztcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMTU3JTtcclxuICAgICAgbGVmdDogMi41dnc7XHJcbiAgICB9XHJcbiAgICBkaXYuc2Vjb25kYXJ5LTEge1xyXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgZm9udC1zaXplOiAyLjV2dztcclxuICAgICAgdG9wOiA3MCU7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5ibG9jay0yIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiA3MnZ3O1xyXG5cclxuICAubXVuY2gtcG9ydHJldHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAzNXZ3O1xyXG4gICAgYm90dG9tOiAwO1xyXG4gIH1cclxuXHJcbiAgLmJsb2NrLWVsbGlwc2Uge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDE1LjV2dztcclxuICAgIGhlaWdodDogMTUuNXZ3O1xyXG4gICAgdG9wOiAxNHZ3O1xyXG4gICAgbGVmdDogMzAlO1xyXG5cclxuICAgIC5lbGxpcHNlLXMge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHdpZHRoOiAyLjV2dztcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5lbGxpcHNlLW0ge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHdpZHRoOiA0dnc7XHJcbiAgICAgIHRvcDogNTAlO1xyXG4gICAgICBsZWZ0OiBjYWxjKDUwJSAtIDR2dyk7XHJcbiAgICB9XHJcblxyXG4gICAgLmVsbGlwc2UtbCB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgd2lkdGg6IDUuNXZ3O1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIC50ZXh0LWJsb2NrLTJ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDV2dztcclxuICAgIHJpZ2h0OiAzLjc1dnc7XHJcbiAgICB3aWR0aDogNDR2dztcclxuXHJcbiAgICAucHJpbWFyeS0yIHtcclxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zaXplOiA0dnc7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjE7XHJcbiAgICB9XHJcblxyXG4gICAgLnNlY29uZGFyeS0yIHtcclxuICAgICAgcGFkZGluZy10b3A6IDEuNXZ3O1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMi41dnc7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbn1cclxuXHJcbi5ibG9jay0zIHtcclxuICBoZWlnaHQ6IDgwdnc7XHJcblxyXG4gIC5iYWNrZ29ydW5kLWJsb2NrLTMge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gIH1cclxuICAuaHRjdml2ZW9ue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDQ2dnc7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMTJ2dztcclxuICB9XHJcblxyXG4gIC50ZXh0LWJsb2NrLTMtM3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNXZ3O1xyXG4gICAgbGVmdDogOC41dnc7XHJcbiAgICB3aWR0aDogNDh2dztcclxuXHJcbiAgICAucHJpbWFyeS0zLTMge1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXNpemU6IDR2dztcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuMTtcclxuICAgIH1cclxuXHJcbiAgICAuc2Vjb25kYXJ5LTMtMyB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAxLjV2dztcclxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgICBmb250LXNpemU6IDIuNXZ3O1xyXG4gICAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIC50ZXh0LWJsb2NrLTN7XHJcbiAgICB6LWluZGV4OiAxMTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcmlnaHQ6IDJ2dztcclxuICAgIHdpZHRoOiA4dnc7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgZGl2LnByaW1hcnktMyB7XHJcbiAgICAgIGNvbG9yOiAjRkUzRDAwO1xyXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XHJcbiAgICAgIGZvbnQtc2l6ZTogNXZ3O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYm90dG9tOiAxMnZ3O1xyXG4gICAgICBsZWZ0OiAzdnc7XHJcbiAgICB9XHJcblxyXG4gICAgZGl2LnNlY29uZGFyeS0zIHtcclxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgYm90dG9tOiA3dnc7XHJcbiAgICAgIGZvbnQtc2l6ZTogM3Z3O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLmJsb2NrLTR7XHJcbiAgaGVpZ2h0OiA1NXZ3O1xyXG5cclxuICAudGV4dC1ibG9jay00e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDQ0dnc7XHJcbiAgICB0b3A6IDV2dztcclxuICAgIGxlZnQ6IDguNXZ3O1xyXG5cclxuICAgIC5wcmltYXJ5LTQge1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXNpemU6IDR2dztcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuMTtcclxuICAgIH1cclxuXHJcbiAgICAuc2Vjb25kYXJ5LTQge1xyXG4gICAgICBwYWRkaW5nLXRvcDogMS41dnc7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgICAgZm9udC1zaXplOiAyLjV2dztcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5wbGFuZXRzIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA0OHZ3O1xyXG4gICAgaGVpZ2h0OiA0OHZ3O1xyXG4gICAgbGVmdDogNDB2dztcclxuICAgIHRvcDogNXZ3O1xyXG5cclxuICAgIC5wbGFuZXQtMSB7XHJcbiAgICAgIHdpZHRoOiAxNXZ3O1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgIH1cclxuICAgIC5wbGFuZXQtMiB7XHJcbiAgICAgIHdpZHRoOiAxNXZ3O1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IDI1JTtcclxuICAgICAgYm90dG9tOiAyNSU7XHJcbiAgICB9XHJcbiAgICAucGxhbmV0LTMge1xyXG4gICAgICB3aWR0aDogMTV2dztcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogMjMlO1xyXG4gICAgICB0b3A6IDIyJTtcclxuICAgIH1cclxuICAgIC5wbGFuZXQtNCB7XHJcbiAgICAgIHdpZHRoOiAxNXZ3O1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLmJsb2NrLTUge1xyXG4gIC5waG90by1ibG9jay01e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNnZ3O1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICAvL2JvdHRvbTogLTI5NnB4O1xyXG4gICAgd2lkdGg6IDQwdnc7XHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogMTguNXZ3O1xyXG4gICAgICBoZWlnaHQ6IDE4LjV2dztcclxuICAgICAgJjpudGgtY2hpbGQob2RkKSB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxLjg3NXZ3O1xyXG4gICAgICB9XHJcbiAgICAgICY6bnRoLWNoaWxkKDMtNCkge31cclxuICAgICAgICBtYXJnaW4tdG9wOiAxLjg3NXZ3O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmJsb2NrLTZ7XHJcbiAgLnRleHQtYmxvY2stNntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHBhZGRpbmctdG9wOiA1dnc7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogN3Z3O1xyXG4gICAgcmlnaHQ6IDMuNXZ3O1xyXG4gICAgd2lkdGg6IDQwdnc7XHJcblxyXG4gICAgLnByaW1hcnktNiB7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogNXZ3O1xyXG4gICAgICBsaW5lLWhlaWdodDogMS4xO1xyXG4gICAgfVxyXG5cclxuICAgIC5zZWNvbmRhcnktNiB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAxLjV2dztcclxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgICBmb250LXNpemU6IDN2dztcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgIH1cclxuICB9XHJcbn0iXX0= */"

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