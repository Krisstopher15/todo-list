/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\r\n*::before,\r\n*::after {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml,\r\nbody {\r\n  height: 100%;\r\n}\r\n\r\nbody {\r\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto,\r\n    Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\r\n}\r\n\r\n:root {\r\n  --header-bgcolor: #007fff;\r\n  --headerh1-color: #fff;\r\n  --sidebar-bgcolor: #fff;\r\n  --projectlist-bgcolor: #f1faee;\r\n  --todolist-bgcolor: #00b4d8;\r\n  --content-bgcolor: #caf0f8;\r\n  --btnremove-redcolor: #e63946;\r\n  --light-gray: #dee2e6;\r\n  --white: #f1faee;\r\n  --blue-dark: #0077b6;\r\n}\r\n\r\n.content {\r\n  display: grid;\r\n  grid-template-columns: 0.4fr 0.9fr;\r\n  grid-template-rows: 0.2fr 2fr;\r\n  height: 100%;\r\n  background-color: var(--content-bgcolor);\r\n}\r\n\r\n.main-header {\r\n  grid-column: 1/-1;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background-color: var(--header-bgcolor);\r\n}\r\n\r\n.main-header > h1 {\r\n  color: var(--headerh1-color);\r\n  font-weight: 400;\r\n}\r\n\r\n.project-menu {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: var(--projectlist-bgcolor);\r\n  align-items: center;\r\n  gap: 2rem;\r\n  padding: 1rem;\r\n  border-right: 2px solid var(--todolist-bgcolor);\r\n}\r\n\r\n.aside-title {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  height: 100px;\r\n  width: 100%;\r\n}\r\n\r\n.aside-title > p {\r\n  font-size: 2rem;\r\n  font-weight: 500;\r\n}\r\n\r\n.add-project {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 20%;\r\n  width: 100%;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n}\r\n\r\n.add-project > input {\r\n  border: none;\r\n  outline: none;\r\n  padding: 0.5rem;\r\n  border-radius: 1rem;\r\n  width: 80%;\r\n  background-color: #4cc9f0;\r\n  color: #fff;\r\n  font-size: 1.3rem;\r\n}\r\n\r\n.add-project > input::placeholder {\r\n  color: #fff;\r\n}\r\n.add-project > button {\r\n  border: none;\r\n  border: 1px solid #4cc9f0;\r\n  padding: 0.5rem;\r\n  width: 65%;\r\n  border-radius: 0.5rem;\r\n  color: #4cc9f0;\r\n  background-color: #fff;\r\n  font-size: 1.3rem;\r\n}\r\n\r\n.add-project > button:active {\r\n  background-color: #4cc9f0;\r\n  color: #fff;\r\n}\r\n\r\n.projects {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.project-list {\r\n  height: 250px;\r\n  width: 100%;\r\n  overflow: auto;\r\n  border: 1px solid #4cc9f0;\r\n  border-radius: 1rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 1rem;\r\n  padding: 1rem;\r\n}\r\n\r\n.project {\r\n  display: flex;\r\n  width: 100%;\r\n  background-color: #fff;\r\n  justify-content: space-between;\r\n  padding: 1rem;\r\n  border: 1px solid #ffbe0b;\r\n  border-radius: 1rem;\r\n}\r\n\r\n.project > p {\r\n  font-size: 1.4rem;\r\n}\r\n\r\n.btn-removeProject {\r\n  border: 1px solid var(--btnremove-redcolor);\r\n  color: var(--btnremove-redcolor);\r\n  padding: 0.3rem;\r\n  border-radius: 0.5rem;\r\n  transition: background-color 100ms ease-out, color 100ms ease-out;\r\n}\r\n\r\n.btn-removeProject:hover {\r\n  background-color: var(--btnremove-redcolor);\r\n  color: #fff;\r\n}\r\n\r\n.todo-list {\r\n  position: relative;\r\n  background-color: var(--white);\r\n}\r\n\r\n.project-info {\r\n  display: flex;\r\n  height: 10%;\r\n  width: 100%;\r\n  justify-content: space-around;\r\n  border-bottom: 3px solid var(--blue-dark);\r\n}\r\n\r\n.project-info .span-project {\r\n  font-size: 2rem;\r\n}\r\n\r\n.project-info .project-name {\r\n  font-size: 2rem;\r\n  font-weight: 600;\r\n  color: var(--blue-dark);\r\n}\r\n\r\n.add-task-btn {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  color: var(--white);\r\n  border: none;\r\n  background-color: var(--white);\r\n  outline: none;\r\n  font-size: 3.5rem;\r\n  color: orange;\r\n}\r\n\r\n.addTaskForm {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n  height: 95%;\r\n  width: 40%;\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 50%;\r\n  transform: translate(-50%, -50%);\r\n  padding: 1rem;\r\n  gap: 1rem;\r\n  border-radius: 1rem;\r\n  background-color: #f1faee;\r\n}\r\n\r\n.addTaskForm div {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  height: 25%;\r\n}\r\n\r\n.inputs > label {\r\n  align-self: flex-start;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.inputs {\r\n  gap: 1rem;\r\n}\r\n\r\n.new-task {\r\n  font-size: 1.5rem;\r\n  color: var(--header-bgcolor);\r\n}\r\n\r\n#title,\r\n#date,\r\n#priority,\r\n#description {\r\n  width: 100%;\r\n  padding: 0.5rem;\r\n  border: none;\r\n  outline: none;\r\n  border-radius: 0.5rem;\r\n  background-color: var(--light-gray);\r\n}\r\n\r\n#description {\r\n  height: 100px;\r\n  resize: none;\r\n}\r\n\r\n.btn-submit {\r\n  border: 1px solid var(--header-bgcolor);\r\n  padding: 1rem;\r\n  font-size: 1rem;\r\n  color: var(--header-bgcolor);\r\n  transition: background-color 100ms ease-out, color 100ms ease-out;\r\n}\r\n\r\n.btn-submit:hover {\r\n  background-color: var(--header-bgcolor);\r\n  color: #fff;\r\n}\r\n\r\n.btn-close {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 3rem;\r\n  color: var(--btnremove-redcolor);\r\n  border: none;\r\n  outline: none;\r\n  border-radius: 100%;\r\n  width: 2rem;\r\n  height: 2rem;\r\n  transform: rotate(45deg);\r\n}\r\n\r\n.addTaskForm .btn-close {\r\n  position: absolute;\r\n  right: 0.2rem;\r\n  top: 0.2rem;\r\n}\r\n\r\n.todos {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 90%;\r\n  padding: 2rem;\r\n  align-items: center;\r\n  gap: 1rem;\r\n  overflow: auto;\r\n}\r\n\r\n.todo-element {\r\n  width: 100%;\r\n  background-color: var(--white);\r\n  display: flex;\r\n  justify-content: space-between;\r\n  border-bottom: 1px solid gray;\r\n  padding: 1rem;\r\n}\r\n\r\n.title-desc .title {\r\n  font-size: 1.3rem;\r\n  font-weight: 600;\r\n}\r\n\r\n.date-and-btns {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 1rem;\r\n}\r\n\r\n.close-form {\r\n  display: none;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["*,\r\n*::before,\r\n*::after {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml,\r\nbody {\r\n  height: 100%;\r\n}\r\n\r\nbody {\r\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto,\r\n    Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\r\n}\r\n\r\n:root {\r\n  --header-bgcolor: #007fff;\r\n  --headerh1-color: #fff;\r\n  --sidebar-bgcolor: #fff;\r\n  --projectlist-bgcolor: #f1faee;\r\n  --todolist-bgcolor: #00b4d8;\r\n  --content-bgcolor: #caf0f8;\r\n  --btnremove-redcolor: #e63946;\r\n  --light-gray: #dee2e6;\r\n  --white: #f1faee;\r\n  --blue-dark: #0077b6;\r\n}\r\n\r\n.content {\r\n  display: grid;\r\n  grid-template-columns: 0.4fr 0.9fr;\r\n  grid-template-rows: 0.2fr 2fr;\r\n  height: 100%;\r\n  background-color: var(--content-bgcolor);\r\n}\r\n\r\n.main-header {\r\n  grid-column: 1/-1;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background-color: var(--header-bgcolor);\r\n}\r\n\r\n.main-header > h1 {\r\n  color: var(--headerh1-color);\r\n  font-weight: 400;\r\n}\r\n\r\n.project-menu {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: var(--projectlist-bgcolor);\r\n  align-items: center;\r\n  gap: 2rem;\r\n  padding: 1rem;\r\n  border-right: 2px solid var(--todolist-bgcolor);\r\n}\r\n\r\n.aside-title {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  height: 100px;\r\n  width: 100%;\r\n}\r\n\r\n.aside-title > p {\r\n  font-size: 2rem;\r\n  font-weight: 500;\r\n}\r\n\r\n.add-project {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 20%;\r\n  width: 100%;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n}\r\n\r\n.add-project > input {\r\n  border: none;\r\n  outline: none;\r\n  padding: 0.5rem;\r\n  border-radius: 1rem;\r\n  width: 80%;\r\n  background-color: #4cc9f0;\r\n  color: #fff;\r\n  font-size: 1.3rem;\r\n}\r\n\r\n.add-project > input::placeholder {\r\n  color: #fff;\r\n}\r\n.add-project > button {\r\n  border: none;\r\n  border: 1px solid #4cc9f0;\r\n  padding: 0.5rem;\r\n  width: 65%;\r\n  border-radius: 0.5rem;\r\n  color: #4cc9f0;\r\n  background-color: #fff;\r\n  font-size: 1.3rem;\r\n}\r\n\r\n.add-project > button:active {\r\n  background-color: #4cc9f0;\r\n  color: #fff;\r\n}\r\n\r\n.projects {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.project-list {\r\n  height: 250px;\r\n  width: 100%;\r\n  overflow: auto;\r\n  border: 1px solid #4cc9f0;\r\n  border-radius: 1rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 1rem;\r\n  padding: 1rem;\r\n}\r\n\r\n.project {\r\n  display: flex;\r\n  width: 100%;\r\n  background-color: #fff;\r\n  justify-content: space-between;\r\n  padding: 1rem;\r\n  border: 1px solid #ffbe0b;\r\n  border-radius: 1rem;\r\n}\r\n\r\n.project > p {\r\n  font-size: 1.4rem;\r\n}\r\n\r\n.btn-removeProject {\r\n  border: 1px solid var(--btnremove-redcolor);\r\n  color: var(--btnremove-redcolor);\r\n  padding: 0.3rem;\r\n  border-radius: 0.5rem;\r\n  transition: background-color 100ms ease-out, color 100ms ease-out;\r\n}\r\n\r\n.btn-removeProject:hover {\r\n  background-color: var(--btnremove-redcolor);\r\n  color: #fff;\r\n}\r\n\r\n.todo-list {\r\n  position: relative;\r\n  background-color: var(--white);\r\n}\r\n\r\n.project-info {\r\n  display: flex;\r\n  height: 10%;\r\n  width: 100%;\r\n  justify-content: space-around;\r\n  border-bottom: 3px solid var(--blue-dark);\r\n}\r\n\r\n.project-info .span-project {\r\n  font-size: 2rem;\r\n}\r\n\r\n.project-info .project-name {\r\n  font-size: 2rem;\r\n  font-weight: 600;\r\n  color: var(--blue-dark);\r\n}\r\n\r\n.add-task-btn {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  color: var(--white);\r\n  border: none;\r\n  background-color: var(--white);\r\n  outline: none;\r\n  font-size: 3.5rem;\r\n  color: orange;\r\n}\r\n\r\n.addTaskForm {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n  height: 95%;\r\n  width: 40%;\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 50%;\r\n  transform: translate(-50%, -50%);\r\n  padding: 1rem;\r\n  gap: 1rem;\r\n  border-radius: 1rem;\r\n  background-color: #f1faee;\r\n}\r\n\r\n.addTaskForm div {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  height: 25%;\r\n}\r\n\r\n.inputs > label {\r\n  align-self: flex-start;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.inputs {\r\n  gap: 1rem;\r\n}\r\n\r\n.new-task {\r\n  font-size: 1.5rem;\r\n  color: var(--header-bgcolor);\r\n}\r\n\r\n#title,\r\n#date,\r\n#priority,\r\n#description {\r\n  width: 100%;\r\n  padding: 0.5rem;\r\n  border: none;\r\n  outline: none;\r\n  border-radius: 0.5rem;\r\n  background-color: var(--light-gray);\r\n}\r\n\r\n#description {\r\n  height: 100px;\r\n  resize: none;\r\n}\r\n\r\n.btn-submit {\r\n  border: 1px solid var(--header-bgcolor);\r\n  padding: 1rem;\r\n  font-size: 1rem;\r\n  color: var(--header-bgcolor);\r\n  transition: background-color 100ms ease-out, color 100ms ease-out;\r\n}\r\n\r\n.btn-submit:hover {\r\n  background-color: var(--header-bgcolor);\r\n  color: #fff;\r\n}\r\n\r\n.btn-close {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 3rem;\r\n  color: var(--btnremove-redcolor);\r\n  border: none;\r\n  outline: none;\r\n  border-radius: 100%;\r\n  width: 2rem;\r\n  height: 2rem;\r\n  transform: rotate(45deg);\r\n}\r\n\r\n.addTaskForm .btn-close {\r\n  position: absolute;\r\n  right: 0.2rem;\r\n  top: 0.2rem;\r\n}\r\n\r\n.todos {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 90%;\r\n  padding: 2rem;\r\n  align-items: center;\r\n  gap: 1rem;\r\n  overflow: auto;\r\n}\r\n\r\n.todo-element {\r\n  width: 100%;\r\n  background-color: var(--white);\r\n  display: flex;\r\n  justify-content: space-between;\r\n  border-bottom: 1px solid gray;\r\n  padding: 1rem;\r\n}\r\n\r\n.title-desc .title {\r\n  font-size: 1.3rem;\r\n  font-weight: 600;\r\n}\r\n\r\n.date-and-btns {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 1rem;\r\n}\r\n\r\n.close-form {\r\n  display: none;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/addProject.js":
/*!***************************!*\
  !*** ./src/addProject.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addProject: () => (/* binding */ addProject),
/* harmony export */   projectList: () => (/* binding */ projectList),
/* harmony export */   remove: () => (/* binding */ remove)
/* harmony export */ });
/* harmony import */ var _emptyList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emptyList */ "./src/emptyList.js");
/* harmony import */ var _renderProjects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderProjects */ "./src/renderProjects.js");



let projectList = [];
let projectId = 0;

class Project {
  constructor(id, name) {
    this.name = name;
    this.id = id;
    this.todoList = [];
  }

  addTodo(todo) {
    this.todoList.push(todo);
  }
}

function addProject() {
  const projectName = document.querySelector("#project-name").value;

  const project = new Project(projectId, projectName);
  projectList.push(project);
  projectId++;
  console.table(projectList);
  (0,_renderProjects__WEBPACK_IMPORTED_MODULE_1__.renderProjects)();
}

function remove(event) {
  const target = event.target.getAttribute("data-id");
  const nTarget = parseInt(target);

  projectList.splice(nTarget, 1);
}




/***/ }),

/***/ "./src/addTodo.js":
/*!************************!*\
  !*** ./src/addTodo.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTodo: () => (/* binding */ addTodo)
/* harmony export */ });
/* harmony import */ var _addProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addProject */ "./src/addProject.js");
/* harmony import */ var _renderTodos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderTodos */ "./src/renderTodos.js");



let todoId = 0;

class Todo {
  constructor(id, title, dueDate, priority, description) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.id = id;
  }
}

function addTodo(index) {
  const todoListContainer = document.querySelector(".todos");
  const form = document.createElement("form");
  form.classList.add("addTaskForm");

  todoListContainer.innerHTML = "";

  form.innerHTML = `
    <div class="new-task">
              <h2>New Task</h2>
              <button class="btn-close">+</button>
            </div>
            <div class="input-title inputs">
              <label for="title">Task</label>
              <input type="text" name="title" id="title" />
            </div>
            <div class="input-date inputs">
              <label for="date">Date</label>
              <input type="date" name="date" id="date" />
            </div>
            <div class="input-priority inputs">
              <label for="priority">Priority</label>
              <select name="priority" id="priority">
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
            <div class="input-desc inputs">
              <label for="description">Description</label>
              <textarea
                name="description"
                id="description"
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <button type="submit" class="btn-submit">ADD TASK</button>
  `;
  todoListContainer.appendChild(form);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const project = _addProject__WEBPACK_IMPORTED_MODULE_0__.projectList[index];
    const title = form.querySelector("#title");
    const description = form.querySelector("#description");
    const dueDate = form.querySelector("#date");
    const priority = form.querySelector("#priority");
    // const todo = new Todo(
    //   todoId,
    //   "Hello World",
    //   "20/05/2023",
    //   "Medium",
    //   "asfdlasdflsadfjsadf"
    // );
    const todo = new Todo(
      todoId,
      title.value,
      dueDate.value,
      priority.value,
      description.value
    );
    project.todoList.push(todo);
    todoListContainer.removeChild(form);
    (0,_renderTodos__WEBPACK_IMPORTED_MODULE_1__.renderTodos)(project.todoList, index);
    console.table(project.todoList);
    todoId++;
  });

  const btnClose = form.querySelector(".btn-close");

  btnClose.addEventListener("click", () => {
    todoListContainer.removeChild(form);
  });

  // const projectIndex = event.target.getAttribute("data-id");
  console.log(index);
}




/***/ }),

/***/ "./src/emptyList.js":
/*!**************************!*\
  !*** ./src/emptyList.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   emptyList: () => (/* binding */ emptyList)
/* harmony export */ });
function emptyList() {
  const todoList = document.querySelector(".todo-list");
  const todos = document.querySelector(".todos");
  const projectInfo = document.querySelector(".project-info");
  const btnAddTask = document.querySelector(".add-task-btn");

  if (!todos.hasChildNodes(".todo-element")) {
    todos.innerHTML = `
        <div class="empty-list">
            <p>EMPTY LIST</p>
        </div>
    `;
    console.log("Empty List");
  } else {
  }
}




/***/ }),

/***/ "./src/renderProjects.js":
/*!*******************************!*\
  !*** ./src/renderProjects.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderProjects: () => (/* binding */ renderProjects)
/* harmony export */ });
/* harmony import */ var _addProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addProject */ "./src/addProject.js");
/* harmony import */ var _addTodo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addTodo */ "./src/addTodo.js");
/* harmony import */ var _renderTodos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderTodos */ "./src/renderTodos.js");




function renderProjects() {
  const projectListContainer = document.querySelector(".project-list");
  projectListContainer.innerHTML = "";

  _addProject__WEBPACK_IMPORTED_MODULE_0__.projectList.forEach((project, index) => {
    const list = document.createElement("div");
    list.classList.add("project");

    list.innerHTML = `
        <p data-id="${index}" class="btn-currentProject">${project.name}</p>
        <button data-id="${index}" class="btn-removeProject">Remove</button>
    `;
    const btnRemoveProject = list.querySelector(".btn-removeProject");
    // btnRemoveProject.addEventListener("click", (e) => {
    //   remove(e);
    //   renderProjects();
    // });

    const btnCurrentProject = list.querySelector(".btn-currentProject");
    btnCurrentProject.addEventListener("click", (e) => {
      console.log(project.todoList);
      (0,_addTodo__WEBPACK_IMPORTED_MODULE_1__.addTodo)(e);
      currentProject(e, index);
    });
    projectListContainer.appendChild(list);
  });
}

function currentProject(event, index) {
  const projectIndex = event.target.getAttribute("data-id");
  const project = _addProject__WEBPACK_IMPORTED_MODULE_0__.projectList[projectIndex];

  (0,_renderTodos__WEBPACK_IMPORTED_MODULE_2__.renderTodos)(project.todoList, index);
}




/***/ }),

/***/ "./src/renderTodos.js":
/*!****************************!*\
  !*** ./src/renderTodos.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderTodos: () => (/* binding */ renderTodos)
/* harmony export */ });
/* harmony import */ var _addProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addProject */ "./src/addProject.js");
/* harmony import */ var _addTodo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addTodo */ "./src/addTodo.js");



function renderTodos(todoList, index) {
  const todoListContainer = document.querySelector(".todos");
  const projectTitle = document.querySelector(".project-title");
  const projectInfo = document.querySelector(".project-info");
  const addTask = document.querySelector(".add-task-btn");
  const project = _addProject__WEBPACK_IMPORTED_MODULE_0__.projectList[index].name;

  projectTitle.innerHTML = `
    <span class="project-name">${project}</span>
  `;
  todoListContainer.innerHTML = "";

  todoList.forEach((todo) => {
    const todoElement = document.createElement("div");
    todoElement.classList.add("todo-element");
    todoElement.innerHTML = `
        <div class="title-desc">
          <div class="priority"></div>
          <p class="title">${todo.title}</p>
          <p class="desc">${todo.description}</p>
        </div>
        <div class="date-and-btns">
          <p>${todo.dueDate}</p>
          <button class="btn-edit">Edit</button>
          <button class="btn-remove-task">Remove</button>
        </div>
      `;

    todoListContainer.appendChild(todoElement);
  });
  addTask.addEventListener("click", () => {
    console.log("adf");
    openForm(index);
  });
}

function openForm(index) {
  (0,_addTodo__WEBPACK_IMPORTED_MODULE_1__.addTodo)(index);
  console.log(index);
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _renderProjects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderProjects */ "./src/renderProjects.js");
/* harmony import */ var _addProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addProject */ "./src/addProject.js");
/* harmony import */ var _emptyList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./emptyList */ "./src/emptyList.js");





(0,_emptyList__WEBPACK_IMPORTED_MODULE_3__.emptyList)();
(0,_renderProjects__WEBPACK_IMPORTED_MODULE_1__.renderProjects)();

const btnAddProject = document.querySelector(".add-project");
const currentProject = document.querySelectorAll(".btn-currentProject");

btnAddProject.addEventListener("submit", (e) => {
  e.preventDefault();
  (0,_addProject__WEBPACK_IMPORTED_MODULE_2__.addProject)();
  (0,_renderProjects__WEBPACK_IMPORTED_MODULE_1__.renderProjects)();
});

// const projectListContainer = document.querySelector(".project-list");

// projectListContainer.addEventListener("click", (e) => {
//   if (e.target.classList.contains("btn-currentProject")) {
//     console.log("asdf");
//   }
// });

})();

/******/ })()
;
//# sourceMappingURL=index.bundle.js.map