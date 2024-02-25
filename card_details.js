/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.sass":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.sass ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/bg-main-mobile.png */ "./src/images/bg-main-mobile.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/bg-main-desktop.png */ "./src/images/bg-main-desktop.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
}

html {
  font-size: 62.5%;
}

body {
  font-size: 1.6rem;
  display: flex;
  justify-content: center;
  font-family: "Space Grotesk", sans-serif;
}

img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.container {
  width: 100%;
  max-width: 36.5rem;
  display: grid;
  grid-template-areas: "header" "main";
  grid-template-rows: 22rem 1fr;
}

@media screen and (min-width: 1200px) {
  .container {
    max-width: 100%;
    grid-template-areas: "header main";
    grid-template-columns: 483px 1fr;
  }
}
header {
  grid-area: header;
  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  position: relative;
}
header .card_front_details {
  width: 100%;
  position: absolute;
  bottom: -4.6rem;
  left: 2rem;
  z-index: 1000;
}
header .card_front_details .card_front {
  position: relative;
  max-width: 27rem;
}
header .card_front_details svg {
  position: absolute;
  left: 2rem;
  top: 2rem;
}
header .card_front_details .card_number_interactive {
  position: absolute;
  bottom: 5rem;
  left: 2rem;
  letter-spacing: 2.5px;
  color: hsl(0, 0%, 100%);
}
header .card_front_details .card_name_interactive {
  position: absolute;
  bottom: 2.5rem;
  left: 2rem;
  letter-spacing: 1px;
  font-size: 0.8rem;
  font-weight: 500;
  text-transform: uppercase;
  color: hsl(0, 0%, 100%);
}
header .card_front_details .exp_date_interactive {
  position: absolute;
  color: hsl(0, 0%, 100%);
  bottom: 2.5rem;
  right: 11.5rem;
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 1px;
}
header .card_back_details {
  width: 100%;
  position: absolute;
  top: 3rem;
  left: 7rem;
}
header .card_back_details .card_back {
  position: relative;
  max-width: 27rem;
}
header .card_back_details .card_back_interactive {
  position: absolute;
  top: 6.8rem;
  right: 13rem;
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 1px;
  color: hsl(0, 0%, 100%);
}

@media screen and (min-width: 1200px) {
  header {
    background: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    min-height: 100vh;
  }
  header .card_front_details {
    bottom: unset;
    top: 28.5rem;
    left: 21rem;
  }
  header .card_front_details .card_front {
    max-width: 34rem;
  }
  header .card_front_details .card_number_interactive {
    font-size: 2.2rem;
    bottom: 5.5rem;
  }
  header .card_front_details .card_name_interactive {
    font-size: 1rem;
  }
  header .card_front_details .exp_date_interactive {
    right: 16rem;
    font-size: 1rem;
  }
  header .card_back_details {
    top: 50rem;
    left: 30rem;
  }
  header .card_back_details .card_back {
    max-width: 34rem;
  }
  header .card_back_details .card_back_interactive {
    top: 8.5rem;
    right: 19rem;
  }
}
main {
  grid-area: main;
}
main form .incomplete_state {
  display: grid;
  padding: 9rem 2rem 4rem 2rem;
  gap: 2rem;
}
main form .incomplete_state .form_el {
  display: flex;
  gap: 1rem;
  flex-direction: column;
}
main form .incomplete_state .form_el label {
  color: hsl(278, 68%, 11%);
  text-transform: uppercase;
  font-size: 1.1rem;
  font-weight: 500;
  letter-spacing: 1.5px;
}
main form .incomplete_state .form_el input {
  padding-left: 1.5rem;
  height: 5rem;
  outline: none;
  border: 1px solid hsl(270, 3%, 87%);
  border-radius: 8px;
  transition: border 0.2s ease-in-out;
}
main form .incomplete_state .form_el input::placeholder {
  font-family: "Space Grotesk", sans-serif;
  color: hsl(279, 6%, 55%);
  font-weight: 500;
  font-size: 1.6rem;
}
main form .incomplete_state .form_el input:focus {
  border: 1px solid hsl(278, 94%, 30%);
}
main form .incomplete_state .form_el input[error=""] {
  border: 1px solid hsl(0, 100%, 60%);
}
main form .incomplete_state .form_el .error {
  margin-top: -0.25rem;
  color: hsl(0, 100%, 60%);
  font-size: 1rem;
  width: 100%;
  max-width: 0;
  max-height: 0;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
}
main form .incomplete_state .form_el .error[error=""] {
  max-width: unset;
  max-height: fit-content;
  overflow: auto;
}
main form .incomplete_state .form_el:last-of-type {
  flex-direction: row;
}
main form .incomplete_state .form_el:last-of-type .expiration_container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
main form .incomplete_state .form_el:last-of-type .expiration_container .exp_input_container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
main form .incomplete_state .form_el:last-of-type .expiration_container .exp_input_container .exp_inputs {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}
main form .incomplete_state .form_el:last-of-type .expiration_container .exp_input_container input {
  max-width: 6.5rem;
}
main form .incomplete_state .form_el:last-of-type .cvc_input_container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
main form .incomplete_state .form_el:last-of-type .cvc_input_container input {
  width: 100%;
}
main form .incomplete_state .submit_button {
  height: 5rem;
  font-family: inherit;
  background: hsl(278, 68%, 11%);
  color: hsl(0, 0%, 100%);
  font-weight: 500;
  font-size: 1.6rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
}

main form .incomplete_state[complete=""] {
  padding: 0;
  max-width: 0;
  height: 0;
  min-height: 0;
  overflow: hidden;
}

@media screen and (min-width: 1200px) {
  main form .incomplete_state {
    justify-content: center;
    align-items: center;
    align-content: center;
    height: auto;
    min-height: 100vh;
  }
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance: textfield;
}

.complete_state {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 0;
  height: 0;
  overflow: hidden;
}
.complete_state[complete=""] {
  padding-inline: 2rem;
  max-width: unset;
  height: 468.333px;
  overflow: auto;
}
.complete_state svg {
  margin-top: 8.5rem;
  margin-bottom: 3rem;
}
.complete_state h1 {
  color: hsl(278, 68%, 11%);
  font-size: 2.5rem;
  margin-bottom: 2rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 3px;
}
.complete_state p {
  color: hsl(279, 6%, 55%);
  margin-bottom: 4rem;
  font-weight: 500;
}
.complete_state .continue_button {
  width: 100%;
  height: 5rem;
  background: hsl(278, 68%, 11%);
  border: none;
  color: hsl(0, 0%, 100%);
  font-family: inherit;
  font-weight: 500;
  font-size: 1.6rem;
  border-radius: 8px;
  cursor: pointer;
}

@media screen and (min-width: 1200px) {
  .complete_state {
    justify-content: center;
  }
  .complete_state[complete=""] {
    min-height: 100vh;
  }
  .complete_state .continue_button {
    max-width: 32.5rem;
    margin-bottom: 3.9rem;
  }
}`, "",{"version":3,"sources":["webpack://./src/styles/style.sass"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap')\n// Font Families & weights\n$space_grotesk: 'Space Grotesk', sans-serif\n$font_weight: 500\n$font_size: 18px\n\n// Primary Colors\n$linear_gradient_color_1: hsl(249, 99%, 64%) // active input border color 1\n$linear_gradient_color_2: hsl(278, 94%, 30%) // active input border color 2\n$red_input_error: hsl(0, 100%, 60%)\n\n// Neutral Colors\n$white: hsl(0, 0%, 100%)\n$light_grayish_violet: hsl(270, 3%, 87%)\n$dark_grayish_violet: hsl(279, 6%, 55%)\n$very_dark_violet: hsl(278, 68%, 11%)\n\n*,\n*::before,\n*::after\n    box-sizing: border-box\n\n*\n    margin: 0\n    padding: 0\n    scroll-behavior: smooth\n\nhtml\n    font-size: 62.5%\n\nbody\n    font-size: 1.6rem\n    display: flex\n    justify-content: center\n    font-family: $space_grotesk\n\nimg\n    width: 100%\n    height: auto\n    object-fit: cover\n\n.container\n    // border: 1px solid black\n    width: 100%\n    max-width: 36.5rem\n    display: grid\n    grid-template-areas: \"header\" \"main\"\n    grid-template-rows: 22rem 1fr\n\n\n\n@media screen and (min-width: 1200px)\n    .container\n        max-width: 100%\n        grid-template-areas: \"header main\"\n        grid-template-columns: 483px 1fr\n        // grid-template-rows: 100vh\n\n\nheader\n    grid-area: header\n    background: url('../images/bg-main-mobile.png')\n    position: relative\n    .card_front_details\n        width: 100%\n        position: absolute\n        bottom: -4.6rem\n        left: 2rem\n        z-index: 1000\n        .card_front\n            // border: 1px solid red\n            position: relative\n            max-width: 27rem\n        svg\n            position: absolute\n            left: 2rem\n            top: 2rem\n        .card_number_interactive\n            position: absolute\n            bottom: 5rem\n            left: 2rem\n            letter-spacing: 2.5px\n            color: $white\n        .card_name_interactive\n            position: absolute\n            bottom: 2.5rem\n            left: 2rem\n            letter-spacing: 1px\n            font-size: .8rem\n            font-weight: $font_weight\n            text-transform: uppercase\n            color: $white\n        .exp_date_interactive\n            position: absolute\n            color: $white\n            bottom: 2.5rem\n            right: 11.5rem\n            font-size: .8rem\n            font-weight: $font_weight\n            letter-spacing: 1px\n    .card_back_details\n        width: 100%\n        position: absolute\n        top: 3rem\n        left: 7rem\n        .card_back\n            position: relative\n            max-width: 27rem\n        .card_back_interactive\n            position: absolute\n            top: 6.8rem\n            right: 13rem\n            font-size: .8rem\n            font-weight: $font_weight\n            letter-spacing: 1px\n            color: $white\n\n@media screen and (min-width: 1200px)\n    header\n        background: url('../images/bg-main-desktop.png')\n        min-height: 100vh\n        .card_front_details\n            bottom: unset\n            top: 28.5rem\n            left: 21rem\n            .card_front\n                max-width: 34rem\n            .card_number_interactive\n                font-size: 2.2rem\n                bottom: 5.5rem\n            .card_name_interactive\n                font-size: 1rem\n            .exp_date_interactive\n                right: 16rem\n                font-size: 1rem\n                // color: black\n        .card_back_details\n            top: 50rem\n            left: 30rem\n            .card_back\n                max-width: 34rem\n            .card_back_interactive\n                // color: black\n                top: 8.5rem\n                right: 19rem\n\n                  \n\n            \n\nmain\n    grid-area: main\n    form .incomplete_state\n        display: grid\n        padding: 9rem 2rem 4rem 2rem\n        gap: 2rem\n        .form_el\n            display: flex\n            gap: 1rem\n            flex-direction: column\n            label\n                color: $very_dark_violet\n                text-transform: uppercase\n                font-size: 1.1rem\n                font-weight: $font_weight\n                letter-spacing: 1.5px\n            input\n                padding-left: 1.5rem\n                height: 5rem\n                outline: none\n                border: 1px solid $light_grayish_violet\n                border-radius: 8px\n                transition: border 0.2s ease-in-out\n                &::placeholder\n                    font-family: $space_grotesk\n                    color: $dark_grayish_violet\n                    font-weight: 500\n                    font-size: 1.6rem\n                &:focus\n                    border: 1px solid $linear_gradient_color_2\n                &[error=\"\"]\n                    border: 1px solid $red_input_error\n            .error\n                margin-top: -.25rem\n                color: $red_input_error\n                font-size: 1rem\n                width: 100%\n                max-width: 0\n                max-height: 0\n                overflow: hidden\n                transition: all 0.2s ease-in-out\n                &[error=\"\"]\n                    max-width: unset\n                    max-height: fit-content\n                    overflow: auto\n            &:last-of-type\n                flex-direction: row\n                .expiration_container\n                    display: flex\n                    flex-direction: column\n                    gap: 1rem\n                    .exp_input_container\n                        display: flex\n                        flex-direction: column\n                        gap: 1rem\n                        .exp_inputs\n                            display: flex\n                            flex-direction: row\n                            gap: 1rem\n                        input\n                            max-width: 6.5rem\n                .cvc_input_container\n                    display: flex\n                    flex-direction: column\n                    gap: 1rem\n                    input\n                        width: 100%\n        .submit_button\n            height: 5rem\n            font-family: inherit\n            background: $very_dark_violet\n            color: $white\n            font-weight: 500\n            font-size: 1.6rem\n            border-radius: 8px\n            border: none\n            cursor: pointer\n\n\nmain form .incomplete_state[complete=\"\"]\n    padding: 0\n    max-width: 0\n    height: 0\n    min-height: 0\n    overflow: hidden\n\n@media screen and (min-width: 1200px)\n    main form .incomplete_state\n        justify-content: center\n        align-items: center\n        align-content: center\n        height: auto\n        min-height: 100vh\n\n                    \n                    \n\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button\n    -webkit-appearance: none\n    margin: 0\n\ninput[type=number]\n    -moz-appearance: textfield\n\n.complete_state\n    // border: 1px solid red\n    display: flex\n    flex-direction: column\n    align-items: center\n    width: 100%\n    max-width: 0\n    height: 0\n    overflow: hidden\n    &[complete=\"\"]\n        padding-inline: 2rem\n        max-width: unset\n        height: 468.333px\n        overflow: auto\n    svg\n        margin-top: 8.5rem\n        margin-bottom: 3rem\n    h1\n        color: $very_dark_violet\n        font-size: 2.5rem\n        margin-bottom: 2rem\n        font-weight: $font_weight\n        text-transform: uppercase\n        letter-spacing: 3px\n    p\n        color: $dark_grayish_violet\n        margin-bottom: 4rem\n        font-weight: $font_weight\n    .continue_button\n        width: 100%\n        height: 5rem\n        background: $very_dark_violet\n        border: none\n        color: $white\n        font-family: inherit\n        font-weight: 500\n        font-size: 1.6rem\n        border-radius: 8px\n        cursor: pointer\n\n@media screen and (min-width: 1200px)\n    .complete_state\n        justify-content: center\n        &[complete=\"\"]\n            min-height: 100vh\n        .continue_button\n            max-width: 32.5rem\n            margin-bottom: 3.9rem\n\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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

/***/ "./src/styles/style.sass":
/*!*******************************!*\
  !*** ./src/styles/style.sass ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.sass */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.sass");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/images/bg-main-desktop.png":
/*!****************************************!*\
  !*** ./src/images/bg-main-desktop.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "806e7aa7b4dbc1d78bc3.png";

/***/ }),

/***/ "./src/images/bg-main-mobile.png":
/*!***************************************!*\
  !*** ./src/images/bg-main-mobile.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "caa4689407777a312ede.png";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/* harmony import */ var _styles_style_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.sass */ "./src/styles/style.sass");



let cardNameRegex = /(?=\b^[a-zA-Z]{1,15}\b\s\b[a-zA-Z]{1,15}\b$).*/;
let cardNumRegex = /(?=^[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}).*/;
let cardMonthRegex = /(?=^[0]?[0-9]$|^[1][0-2]$).*/;
let cardYearRegex = /(?=^[2][4-9]$|^[3][0-2]).*/;
let cvcRegex = /(?=^[0-9][0-9][0-9]$).*/;

// Card details Variables
let cardNumInteractive = document.querySelector('.card_number_interactive');
let cardNameInteractive = document.querySelector('.card_name_interactive');
let expDateMonthInteractive = document.querySelector('.exp_date_month_interactive');
let expDateYearInteractive = document.querySelector('.exp_date_year_interactive');
let cardBackInteractive = document.querySelector('.card_back_interactive');

// Form Variables for state
let incompleteStateForm = document.querySelector('.incomplete_state');
let completeStateForm = document.querySelector('.complete_state');

// Input Variables for Card
let cardHolderName = document.querySelector('#cardholder_name');
let cardHolderNumber = document.querySelector('#cardholder_number');
let expDateMonth = document.querySelector('#exp_date_mm');
let expDateYear = document.querySelector('#exp_date_yy');
let cvcCode = document.querySelector('#cvc_code');

// Submit Variable
const thisForm = document.querySelector('form');
const continueButton = document.querySelector('.continue_button');

class Form {
    constructor() {
        // These will change on completion for further js if I desire
        this.cardNumber = null;
        this.cardName = null;
        this.expMonth = null;
        this.expYear = null;
        this.userCVC = null;
    }

    nameValidation() {
        let userInput = cardHolderName.value;
        let errorMessage = cardHolderName.nextElementSibling;

        if (userInput == '' && cardHolderName.hasAttribute('error')) {
            errorMessage.textContent = 'Can\'t be blank';
            this.cardName = null;
            return false;    
        } else if (userInput == '' && !cardHolderName.hasAttribute('error')) {
            errorMessage.textContent = 'Can\'t be blank';
            cardHolderName.setAttribute('error', '');
            errorMessage.setAttribute('error', '');
            this.cardName = null;
            return false;
        }

        if (userInput !== '' && cardHolderName.hasAttribute('error') && !cardNameRegex.test(userInput)) {
            errorMessage.textContent = 'Please enter first name & last name correctly';
            this.cardName = null;
            return false;
        } else if (userInput !== '' && cardHolderName.hasAttribute('error') && cardNameRegex.test(userInput)) {
            cardHolderName.removeAttribute('error');
            errorMessage.removeAttribute('error');
            this.cardName = userInput;
            return true;
        } else if (userInput !== '' && !cardHolderName.hasAttribute('error') && cardNameRegex.test(userInput)) {
            this.cardName = userInput;
            return true;
        }
    }

    numberValidation() {
        let userInput = cardHolderNumber.value;
        let errorMessage = cardHolderNumber.nextElementSibling;

        if (userInput == '' && cardHolderNumber.hasAttribute('error')) {
            errorMessage.textContent = 'Can\'t be blank';
            this.cardNumber = null;
            return false;
        } else if (userInput == '' && !cardHolderNumber.hasAttribute('error')) {
            errorMessage.textContent = 'Can\'t be blank';
            cardHolderNumber.setAttribute('error', '');
            errorMessage.setAttribute('error', '');
            this.cardNumber = null;
            return false;
        }

        if (userInput !== '' && cardHolderNumber.hasAttribute('error') && !cardNumRegex.test(userInput)) {
            errorMessage.textContent = 'Wrong format, numbers only with a space after every 4 numbers';
            this.cardNumber = null;
            return false;
        } else if (userInput !== '' && !cardHolderNumber.hasAttribute('error') && !cardNumRegex.test(userInput)) {
            errorMessage.textContent = 'Wrong format, numbers only with a space after every 4 numbers';
            this.cardNumber = null;
            cardHolderNumber.setAttribute('error', '');
            errorMessage.setAttribute('error', '');
            return false;
        } else if (userInput !== '' && cardHolderNumber.hasAttribute('error') && cardNumRegex.test(userInput)) {
            cardHolderNumber.removeAttribute('error');
            errorMessage.removeAttribute('error');
            this.cardNumber = userInput;
            return true;
        } else if (userInput !== '' && !cardHolderNumber.hasAttribute('error') && cardNumRegex.test(userInput)) {
            this.cardNumber = userInput;
            return true;
        }
    }

    expValidation() {
        let userInputMonth = expDateMonth.value;
        let userInputYear = expDateYear.value;
        let errorMessage = expDateMonth.parentElement.nextElementSibling;

        if (userInputMonth == '' && expDateMonth.hasAttribute('error') || userInputYear == '' && expDateYear.hasAttribute('error')) {
            errorMessage.textContent = 'Can\'t be blank';
            this.expMonth = null;
            this.expYear = null;
            return false;
        } else if (userInputMonth == '' && !expDateMonth.hasAttribute('error') || userInputYear == '' && !expDateYear.hasAttribute('error')) {
            errorMessage.textContent = 'Can\'t be blank';
            expDateMonth.setAttribute('error', '');
            expDateYear.setAttribute('error', '');
            errorMessage.setAttribute('error', '');
            this.expMonth = null;
            this.expYear = null;
            return false;
        }

        if (userInputMonth !== '' && expDateMonth.hasAttribute('error') && !cardMonthRegex.test(userInputMonth)) {
            if (userInputYear !== '' && expDateYear.hasAttribute('error') && !cardYearRegex.test(userInputYear)) {
                errorMessage.textContent = 'Year must be between 2024 & 2028';
                this.expMonth = null;
                this.expYear = null;
                return false;
            }
        } else if (userInputMonth !== '' && expDateMonth.hasAttribute('error') && cardMonthRegex.test(userInputMonth)) {
            if (userInputYear !== '' && expDateYear.hasAttribute('error') && cardYearRegex.test(userInputYear)) {
                expDateMonth.removeAttribute('error');
                expDateYear.removeAttribute('error');
                errorMessage.removeAttribute('error');
                this.expMonth = userInputMonth;
                this.expYear = userInputYear;
                return true;
            }
        } else if (userInputMonth !== '' && !expDateMonth.hasAttribute('error') && cardMonthRegex.test(userInputMonth)) {
            if (userInputYear !== '' && !expDateYear.hasAttribute('error') && cardYearRegex.test(userInputYear)) {
                this.expMonth = userInputMonth;
                this.expYear = userInputYear;
                return true;
            } else {
                errorMessage.textContent = 'Year must be between 2024 & 2028';
                expDateMonth.setAttribute('error', '');
                expDateYear.setAttribute('error', '');
                errorMessage.setAttribute('error', '');
                this.expMonth = null;
                this.expYear = null;
                return false;
            }
        }
    }

    cvcCodeValidation() {
        let userInput = cvcCode.value;
        let errorMessage = cvcCode.nextElementSibling;

        if (userInput == '' && cvcCode.hasAttribute('error')) {
            errorMessage.textContent = 'Can\'t be blank';
            this.userCVC = null;
            return false;
        } else if (userInput == '' && !cvcCode.hasAttribute('error')) {
            errorMessage.textContent = 'Can\'t be blank';
            cvcCode.setAttribute('error', '');
            errorMessage.setAttribute('error', '');
            this.userCVC = null;
            return false;
        }

        if (userInput !== '' && cvcCode.hasAttribute('error') && !cvcRegex.test(userInput)) {
            errorMessage.textContent = 'Wrong format, numbers only';
            this.userCVC = null;
            return false;
        } else if (userInput !== '' && cvcCode.hasAttribute('error') && cvcRegex.test(userInput)) {
            cvcCode.removeAttribute('error');
            errorMessage.removeAttribute('error');
            this.userCVC = userInput;
            return true;
        } else if (userInput !== '' && !cvcCode.hasAttribute('error') && cvcRegex.test(userInput)) {
            this.userCVC = userInput;
            return true;
        }
    }
}


let myForm = new Form();

window.onload = formReset();

function formReset() {
    cardHolderName.value = '';
    cardHolderNumber.value = '';
    expDateMonth.value = '';
    expDateYear.value = '';
    cvcCode.value = '';
    cardNameInteractive.textContent = '---- ---------';
    cardNumInteractive.textContent = '---- ---- ---- ----';
    expDateMonthInteractive.textContent = '--';
    expDateYearInteractive.textContent = '--';
    cardBackInteractive.textContent = '---';
}

thisForm.addEventListener('submit', (e) => {
    e.preventDefault();
    myForm.nameValidation();
    myForm.numberValidation();
    myForm.expValidation();
    myForm.cvcCodeValidation();

    if (
        myForm.cardName !== null 
        && myForm.cardNumber !== null 
        && myForm.expMonth !== null 
        && myForm.expYear !== null 
        && myForm.userCVC !== null) 
    {
        incompleteStateForm.setAttribute('complete', '');
        completeStateForm.setAttribute('complete', '');
    }
})

function cardNameTextChange() {
    let inputText = cardHolderName.value;
    cardNameInteractive.textContent = inputText;
}

cardHolderName.addEventListener('input', cardNameTextChange);

function cardNumTextChange() {
    let inputText = cardHolderNumber.value;
    cardNumInteractive.textContent = inputText;
}

cardHolderNumber.addEventListener('input', cardNumTextChange);

function cardExpMonthChange() {
    let inputText = expDateMonth.value;
    expDateMonthInteractive.textContent = inputText;
}

expDateMonth.addEventListener('input', cardExpMonthChange);

function cardExpYearChange() {
    let inputText = expDateYear.value;
    expDateYearInteractive.textContent = inputText;
}

expDateYear.addEventListener('input', cardExpYearChange);

function backCVCCodeChange() {
    let inputText = cvcCode.value;
    cardBackInteractive.textContent = inputText;
}

cvcCode.addEventListener('input', backCVCCodeChange);

function goBackToMainPage() {
    formReset();
    completeStateForm.removeAttribute('complete');
    incompleteStateForm.removeAttribute('complete');
}

continueButton.addEventListener('click', goBackToMainPage);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZF9kZXRhaWxzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDTztBQUNuRyw0Q0FBNEMsb0lBQStDO0FBQzNGLDRDQUE0QyxzSUFBZ0Q7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5SUFBeUk7QUFDekkseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsbUNBQW1DO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCLG1DQUFtQztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTywyRkFBMkYsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFlBQVksUUFBUSxLQUFLLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsV0FBVyxZQUFZLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsWUFBWSxZQUFZLFlBQVksTUFBTSxLQUFLLFdBQVcsWUFBWSxXQUFXLFVBQVUsV0FBVyxZQUFZLFlBQVksS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsV0FBVyxZQUFZLFlBQVksWUFBWSxPQUFPLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxZQUFZLFlBQVksV0FBVyxZQUFZLFlBQVksTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxZQUFZLGFBQWEsWUFB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O1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7O0FDQTZCOzs7QUFHN0Isb0NBQW9DLEtBQUssZUFBZSxLQUFLO0FBQzdELDhCQUE4QixHQUFHLE1BQU0sR0FBRyxNQUFNLEdBQUcsTUFBTSxFQUFFO0FBQzNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyRCIsInNvdXJjZXMiOlsid2VicGFjazovL2ludGVyYWN0aXZlLWNhcmQtZGV0YWlscy8uL3NyYy9zdHlsZXMvc3R5bGUuc2FzcyIsIndlYnBhY2s6Ly9pbnRlcmFjdGl2ZS1jYXJkLWRldGFpbHMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2ludGVyYWN0aXZlLWNhcmQtZGV0YWlscy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vaW50ZXJhY3RpdmUtY2FyZC1kZXRhaWxzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vaW50ZXJhY3RpdmUtY2FyZC1kZXRhaWxzLy4vc3JjL3N0eWxlcy9zdHlsZS5zYXNzP2JmYWQiLCJ3ZWJwYWNrOi8vaW50ZXJhY3RpdmUtY2FyZC1kZXRhaWxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2ludGVyYWN0aXZlLWNhcmQtZGV0YWlscy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vaW50ZXJhY3RpdmUtY2FyZC1kZXRhaWxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2ludGVyYWN0aXZlLWNhcmQtZGV0YWlscy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9pbnRlcmFjdGl2ZS1jYXJkLWRldGFpbHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9pbnRlcmFjdGl2ZS1jYXJkLWRldGFpbHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9pbnRlcmFjdGl2ZS1jYXJkLWRldGFpbHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaW50ZXJhY3RpdmUtY2FyZC1kZXRhaWxzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2ludGVyYWN0aXZlLWNhcmQtZGV0YWlscy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vaW50ZXJhY3RpdmUtY2FyZC1kZXRhaWxzL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vaW50ZXJhY3RpdmUtY2FyZC1kZXRhaWxzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vaW50ZXJhY3RpdmUtY2FyZC1kZXRhaWxzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vaW50ZXJhY3RpdmUtY2FyZC1kZXRhaWxzL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2ludGVyYWN0aXZlLWNhcmQtZGV0YWlscy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9pbnRlcmFjdGl2ZS1jYXJkLWRldGFpbHMvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2ludGVyYWN0aXZlLWNhcmQtZGV0YWlscy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2JnLW1haW4tbW9iaWxlLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9iZy1tYWluLWRlc2t0b3AucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1TcGFjZStHcm90ZXNrOndnaHRAMzAwLi43MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuXG5odG1sIHtcbiAgZm9udC1zaXplOiA2Mi41JTtcbn1cblxuYm9keSB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiU3BhY2UgR3JvdGVza1wiLCBzYW5zLXNlcmlmO1xufVxuXG5pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDM2LjVyZW07XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiaGVhZGVyXCIgXCJtYWluXCI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMjJyZW0gMWZyO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiaGVhZGVyIG1haW5cIjtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQ4M3B4IDFmcjtcbiAgfVxufVxuaGVhZGVyIHtcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XG4gIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuaGVhZGVyIC5jYXJkX2Zyb250X2RldGFpbHMge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC00LjZyZW07XG4gIGxlZnQ6IDJyZW07XG4gIHotaW5kZXg6IDEwMDA7XG59XG5oZWFkZXIgLmNhcmRfZnJvbnRfZGV0YWlscyAuY2FyZF9mcm9udCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWF4LXdpZHRoOiAyN3JlbTtcbn1cbmhlYWRlciAuY2FyZF9mcm9udF9kZXRhaWxzIHN2ZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMnJlbTtcbiAgdG9wOiAycmVtO1xufVxuaGVhZGVyIC5jYXJkX2Zyb250X2RldGFpbHMgLmNhcmRfbnVtYmVyX2ludGVyYWN0aXZlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDVyZW07XG4gIGxlZnQ6IDJyZW07XG4gIGxldHRlci1zcGFjaW5nOiAyLjVweDtcbiAgY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XG59XG5oZWFkZXIgLmNhcmRfZnJvbnRfZGV0YWlscyAuY2FyZF9uYW1lX2ludGVyYWN0aXZlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDIuNXJlbTtcbiAgbGVmdDogMnJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xufVxuaGVhZGVyIC5jYXJkX2Zyb250X2RldGFpbHMgLmV4cF9kYXRlX2ludGVyYWN0aXZlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcbiAgYm90dG9tOiAyLjVyZW07XG4gIHJpZ2h0OiAxMS41cmVtO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cbmhlYWRlciAuY2FyZF9iYWNrX2RldGFpbHMge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDNyZW07XG4gIGxlZnQ6IDdyZW07XG59XG5oZWFkZXIgLmNhcmRfYmFja19kZXRhaWxzIC5jYXJkX2JhY2sge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC13aWR0aDogMjdyZW07XG59XG5oZWFkZXIgLmNhcmRfYmFja19kZXRhaWxzIC5jYXJkX2JhY2tfaW50ZXJhY3RpdmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNi44cmVtO1xuICByaWdodDogMTNyZW07XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBjb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIGhlYWRlciB7XG4gICAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICB9XG4gIGhlYWRlciAuY2FyZF9mcm9udF9kZXRhaWxzIHtcbiAgICBib3R0b206IHVuc2V0O1xuICAgIHRvcDogMjguNXJlbTtcbiAgICBsZWZ0OiAyMXJlbTtcbiAgfVxuICBoZWFkZXIgLmNhcmRfZnJvbnRfZGV0YWlscyAuY2FyZF9mcm9udCB7XG4gICAgbWF4LXdpZHRoOiAzNHJlbTtcbiAgfVxuICBoZWFkZXIgLmNhcmRfZnJvbnRfZGV0YWlscyAuY2FyZF9udW1iZXJfaW50ZXJhY3RpdmUge1xuICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xuICAgIGJvdHRvbTogNS41cmVtO1xuICB9XG4gIGhlYWRlciAuY2FyZF9mcm9udF9kZXRhaWxzIC5jYXJkX25hbWVfaW50ZXJhY3RpdmUge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxuICBoZWFkZXIgLmNhcmRfZnJvbnRfZGV0YWlscyAuZXhwX2RhdGVfaW50ZXJhY3RpdmUge1xuICAgIHJpZ2h0OiAxNnJlbTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cbiAgaGVhZGVyIC5jYXJkX2JhY2tfZGV0YWlscyB7XG4gICAgdG9wOiA1MHJlbTtcbiAgICBsZWZ0OiAzMHJlbTtcbiAgfVxuICBoZWFkZXIgLmNhcmRfYmFja19kZXRhaWxzIC5jYXJkX2JhY2sge1xuICAgIG1heC13aWR0aDogMzRyZW07XG4gIH1cbiAgaGVhZGVyIC5jYXJkX2JhY2tfZGV0YWlscyAuY2FyZF9iYWNrX2ludGVyYWN0aXZlIHtcbiAgICB0b3A6IDguNXJlbTtcbiAgICByaWdodDogMTlyZW07XG4gIH1cbn1cbm1haW4ge1xuICBncmlkLWFyZWE6IG1haW47XG59XG5tYWluIGZvcm0gLmluY29tcGxldGVfc3RhdGUge1xuICBkaXNwbGF5OiBncmlkO1xuICBwYWRkaW5nOiA5cmVtIDJyZW0gNHJlbSAycmVtO1xuICBnYXA6IDJyZW07XG59XG5tYWluIGZvcm0gLmluY29tcGxldGVfc3RhdGUgLmZvcm1fZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDFyZW07XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5tYWluIGZvcm0gLmluY29tcGxldGVfc3RhdGUgLmZvcm1fZWwgbGFiZWwge1xuICBjb2xvcjogaHNsKDI3OCwgNjglLCAxMSUpO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xufVxubWFpbiBmb3JtIC5pbmNvbXBsZXRlX3N0YXRlIC5mb3JtX2VsIGlucHV0IHtcbiAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XG4gIGhlaWdodDogNXJlbTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgaHNsKDI3MCwgMyUsIDg3JSk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgdHJhbnNpdGlvbjogYm9yZGVyIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5tYWluIGZvcm0gLmluY29tcGxldGVfc3RhdGUgLmZvcm1fZWwgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiU3BhY2UgR3JvdGVza1wiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogaHNsKDI3OSwgNiUsIDU1JSk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xufVxubWFpbiBmb3JtIC5pbmNvbXBsZXRlX3N0YXRlIC5mb3JtX2VsIGlucHV0OmZvY3VzIHtcbiAgYm9yZGVyOiAxcHggc29saWQgaHNsKDI3OCwgOTQlLCAzMCUpO1xufVxubWFpbiBmb3JtIC5pbmNvbXBsZXRlX3N0YXRlIC5mb3JtX2VsIGlucHV0W2Vycm9yPVwiXCJdIHtcbiAgYm9yZGVyOiAxcHggc29saWQgaHNsKDAsIDEwMCUsIDYwJSk7XG59XG5tYWluIGZvcm0gLmluY29tcGxldGVfc3RhdGUgLmZvcm1fZWwgLmVycm9yIHtcbiAgbWFyZ2luLXRvcDogLTAuMjVyZW07XG4gIGNvbG9yOiBoc2woMCwgMTAwJSwgNjAlKTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAwO1xuICBtYXgtaGVpZ2h0OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cbm1haW4gZm9ybSAuaW5jb21wbGV0ZV9zdGF0ZSAuZm9ybV9lbCAuZXJyb3JbZXJyb3I9XCJcIl0ge1xuICBtYXgtd2lkdGg6IHVuc2V0O1xuICBtYXgtaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5tYWluIGZvcm0gLmluY29tcGxldGVfc3RhdGUgLmZvcm1fZWw6bGFzdC1vZi10eXBlIHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbm1haW4gZm9ybSAuaW5jb21wbGV0ZV9zdGF0ZSAuZm9ybV9lbDpsYXN0LW9mLXR5cGUgLmV4cGlyYXRpb25fY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxcmVtO1xufVxubWFpbiBmb3JtIC5pbmNvbXBsZXRlX3N0YXRlIC5mb3JtX2VsOmxhc3Qtb2YtdHlwZSAuZXhwaXJhdGlvbl9jb250YWluZXIgLmV4cF9pbnB1dF9jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDFyZW07XG59XG5tYWluIGZvcm0gLmluY29tcGxldGVfc3RhdGUgLmZvcm1fZWw6bGFzdC1vZi10eXBlIC5leHBpcmF0aW9uX2NvbnRhaW5lciAuZXhwX2lucHV0X2NvbnRhaW5lciAuZXhwX2lucHV0cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGdhcDogMXJlbTtcbn1cbm1haW4gZm9ybSAuaW5jb21wbGV0ZV9zdGF0ZSAuZm9ybV9lbDpsYXN0LW9mLXR5cGUgLmV4cGlyYXRpb25fY29udGFpbmVyIC5leHBfaW5wdXRfY29udGFpbmVyIGlucHV0IHtcbiAgbWF4LXdpZHRoOiA2LjVyZW07XG59XG5tYWluIGZvcm0gLmluY29tcGxldGVfc3RhdGUgLmZvcm1fZWw6bGFzdC1vZi10eXBlIC5jdmNfaW5wdXRfY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxcmVtO1xufVxubWFpbiBmb3JtIC5pbmNvbXBsZXRlX3N0YXRlIC5mb3JtX2VsOmxhc3Qtb2YtdHlwZSAuY3ZjX2lucHV0X2NvbnRhaW5lciBpbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xufVxubWFpbiBmb3JtIC5pbmNvbXBsZXRlX3N0YXRlIC5zdWJtaXRfYnV0dG9uIHtcbiAgaGVpZ2h0OiA1cmVtO1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgYmFja2dyb3VuZDogaHNsKDI3OCwgNjglLCAxMSUpO1xuICBjb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbm1haW4gZm9ybSAuaW5jb21wbGV0ZV9zdGF0ZVtjb21wbGV0ZT1cIlwiXSB7XG4gIHBhZGRpbmc6IDA7XG4gIG1heC13aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBtaW4taGVpZ2h0OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgbWFpbiBmb3JtIC5pbmNvbXBsZXRlX3N0YXRlIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gIH1cbn1cbmlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxuaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIG1hcmdpbjogMDtcbn1cblxuaW5wdXRbdHlwZT1udW1iZXJdIHtcbiAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG59XG5cbi5jb21wbGV0ZV9zdGF0ZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5jb21wbGV0ZV9zdGF0ZVtjb21wbGV0ZT1cIlwiXSB7XG4gIHBhZGRpbmctaW5saW5lOiAycmVtO1xuICBtYXgtd2lkdGg6IHVuc2V0O1xuICBoZWlnaHQ6IDQ2OC4zMzNweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG4uY29tcGxldGVfc3RhdGUgc3ZnIHtcbiAgbWFyZ2luLXRvcDogOC41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xufVxuLmNvbXBsZXRlX3N0YXRlIGgxIHtcbiAgY29sb3I6IGhzbCgyNzgsIDY4JSwgMTElKTtcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XG59XG4uY29tcGxldGVfc3RhdGUgcCB7XG4gIGNvbG9yOiBoc2woMjc5LCA2JSwgNTUlKTtcbiAgbWFyZ2luLWJvdHRvbTogNHJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5jb21wbGV0ZV9zdGF0ZSAuY29udGludWVfYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNXJlbTtcbiAgYmFja2dyb3VuZDogaHNsKDI3OCwgNjglLCAxMSUpO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLmNvbXBsZXRlX3N0YXRlIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICAuY29tcGxldGVfc3RhdGVbY29tcGxldGU9XCJcIl0ge1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICB9XG4gIC5jb21wbGV0ZV9zdGF0ZSAuY29udGludWVfYnV0dG9uIHtcbiAgICBtYXgtd2lkdGg6IDMyLjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMy45cmVtO1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLnNhc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBaUJBOzs7RUFHSSxzQkFBQTtBQWZKOztBQWlCQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7QUFkSjs7QUFnQkE7RUFDSSxnQkFBQTtBQWJKOztBQWVBO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSx3Q0FoQ1k7QUFvQmhCOztBQWNBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQVhKOztBQWFBO0VBRUksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG9DQUFBO0VBQ0Es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QUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBZ0JKOztBQWRBO0VBQ0k7SUFDSSx1QkFBQTtJQUNBLG1CQUFBO0lBQ0EscUJBQUE7SUFDQSxZQUFBO0lBQ0EsaUJBQUE7RUFpQk47QUFDRjtBQWJBOztFQUVJLHdCQUFBO0VBQ0EsU0FBQTtBQWVKOztBQWJBO0VBQ0ksMEJBQUE7QUFnQko7O0FBZEE7RUFFSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBZ0JKO0FBZkk7RUFDSSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBaUJSO0FBaEJJO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQWtCUjtBQWpCSTtFQUNJLHlCQWxRVztFQW1RWCxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBalJNO0VBa1JOLHlCQUFBO0VBQ0EsbUJBQUE7QUFtQlI7QUFsQkk7RUFDSSx3QkExUWM7RUEyUWQsbUJBQUE7RUFDQSxnQkF2Uk07QUEyU2Q7QUFuQkk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQS9RVztFQWdSWCxZQUFBO0VBQ0EsdUJBcFJBO0VBcVJBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQXFCUjs7QUFuQkE7RUFDSTtJQUNJLHVCQUFBO0VBc0JOO0VBckJNO0lBQ0ksaUJBQUE7RUF1QlY7RUF0Qk07SUFDSSxrQkFBQTtJQUNBLHFCQUFBO0VBd0JWO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9U3BhY2UrR3JvdGVzazp3Z2h0QDMwMC4uNzAwJmRpc3BsYXk9c3dhcCcpXFxuLy8gRm9udCBGYW1pbGllcyAmIHdlaWdodHNcXG4kc3BhY2VfZ3JvdGVzazogJ1NwYWNlIEdyb3Rlc2snLCBzYW5zLXNlcmlmXFxuJGZvbnRfd2VpZ2h0OiA1MDBcXG4kZm9udF9zaXplOiAxOHB4XFxuXFxuLy8gUHJpbWFyeSBDb2xvcnNcXG4kbGluZWFyX2dyYWRpZW50X2NvbG9yXzE6IGhzbCgyNDksIDk5JSwgNjQlKSAvLyBhY3RpdmUgaW5wdXQgYm9yZGVyIGNvbG9yIDFcXG4kbGluZWFyX2dyYWRpZW50X2NvbG9yXzI6IGhzbCgyNzgsIDk0JSwgMzAlKSAvLyBhY3RpdmUgaW5wdXQgYm9yZGVyIGNvbG9yIDJcXG4kcmVkX2lucHV0X2Vycm9yOiBoc2woMCwgMTAwJSwgNjAlKVxcblxcbi8vIE5ldXRyYWwgQ29sb3JzXFxuJHdoaXRlOiBoc2woMCwgMCUsIDEwMCUpXFxuJGxpZ2h0X2dyYXlpc2hfdmlvbGV0OiBoc2woMjcwLCAzJSwgODclKVxcbiRkYXJrX2dyYXlpc2hfdmlvbGV0OiBoc2woMjc5LCA2JSwgNTUlKVxcbiR2ZXJ5X2RhcmtfdmlvbGV0OiBoc2woMjc4LCA2OCUsIDExJSlcXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94XFxuXFxuKlxcbiAgICBtYXJnaW46IDBcXG4gICAgcGFkZGluZzogMFxcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aFxcblxcbmh0bWxcXG4gICAgZm9udC1zaXplOiA2Mi41JVxcblxcbmJvZHlcXG4gICAgZm9udC1zaXplOiAxLjZyZW1cXG4gICAgZGlzcGxheTogZmxleFxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxcbiAgICBmb250LWZhbWlseTogJHNwYWNlX2dyb3Rlc2tcXG5cXG5pbWdcXG4gICAgd2lkdGg6IDEwMCVcXG4gICAgaGVpZ2h0OiBhdXRvXFxuICAgIG9iamVjdC1maXQ6IGNvdmVyXFxuXFxuLmNvbnRhaW5lclxcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCBibGFja1xcbiAgICB3aWR0aDogMTAwJVxcbiAgICBtYXgtd2lkdGg6IDM2LjVyZW1cXG4gICAgZGlzcGxheTogZ3JpZFxcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiaGVhZGVyXFxcIiBcXFwibWFpblxcXCJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMnJlbSAxZnJcXG5cXG5cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpXFxuICAgIC5jb250YWluZXJcXG4gICAgICAgIG1heC13aWR0aDogMTAwJVxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcImhlYWRlciBtYWluXFxcIlxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0ODNweCAxZnJcXG4gICAgICAgIC8vIGdyaWQtdGVtcGxhdGUtcm93czogMTAwdmhcXG5cXG5cXG5oZWFkZXJcXG4gICAgZ3JpZC1hcmVhOiBoZWFkZXJcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi9pbWFnZXMvYmctbWFpbi1tb2JpbGUucG5nJylcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlXFxuICAgIC5jYXJkX2Zyb250X2RldGFpbHNcXG4gICAgICAgIHdpZHRoOiAxMDAlXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGVcXG4gICAgICAgIGJvdHRvbTogLTQuNnJlbVxcbiAgICAgICAgbGVmdDogMnJlbVxcbiAgICAgICAgei1pbmRleDogMTAwMFxcbiAgICAgICAgLmNhcmRfZnJvbnRcXG4gICAgICAgICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCByZWRcXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmVcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDI3cmVtXFxuICAgICAgICBzdmdcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGVcXG4gICAgICAgICAgICBsZWZ0OiAycmVtXFxuICAgICAgICAgICAgdG9wOiAycmVtXFxuICAgICAgICAuY2FyZF9udW1iZXJfaW50ZXJhY3RpdmVcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGVcXG4gICAgICAgICAgICBib3R0b206IDVyZW1cXG4gICAgICAgICAgICBsZWZ0OiAycmVtXFxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDIuNXB4XFxuICAgICAgICAgICAgY29sb3I6ICR3aGl0ZVxcbiAgICAgICAgLmNhcmRfbmFtZV9pbnRlcmFjdGl2ZVxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxcbiAgICAgICAgICAgIGJvdHRvbTogMi41cmVtXFxuICAgICAgICAgICAgbGVmdDogMnJlbVxcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHhcXG4gICAgICAgICAgICBmb250LXNpemU6IC44cmVtXFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6ICRmb250X3dlaWdodFxcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2VcXG4gICAgICAgICAgICBjb2xvcjogJHdoaXRlXFxuICAgICAgICAuZXhwX2RhdGVfaW50ZXJhY3RpdmVcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGVcXG4gICAgICAgICAgICBjb2xvcjogJHdoaXRlXFxuICAgICAgICAgICAgYm90dG9tOiAyLjVyZW1cXG4gICAgICAgICAgICByaWdodDogMTEuNXJlbVxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjhyZW1cXG4gICAgICAgICAgICBmb250LXdlaWdodDogJGZvbnRfd2VpZ2h0XFxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweFxcbiAgICAuY2FyZF9iYWNrX2RldGFpbHNcXG4gICAgICAgIHdpZHRoOiAxMDAlXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGVcXG4gICAgICAgIHRvcDogM3JlbVxcbiAgICAgICAgbGVmdDogN3JlbVxcbiAgICAgICAgLmNhcmRfYmFja1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxcbiAgICAgICAgICAgIG1heC13aWR0aDogMjdyZW1cXG4gICAgICAgIC5jYXJkX2JhY2tfaW50ZXJhY3RpdmVcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGVcXG4gICAgICAgICAgICB0b3A6IDYuOHJlbVxcbiAgICAgICAgICAgIHJpZ2h0OiAxM3JlbVxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjhyZW1cXG4gICAgICAgICAgICBmb250LXdlaWdodDogJGZvbnRfd2VpZ2h0XFxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweFxcbiAgICAgICAgICAgIGNvbG9yOiAkd2hpdGVcXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpXFxuICAgIGhlYWRlclxcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi9pbWFnZXMvYmctbWFpbi1kZXNrdG9wLnBuZycpXFxuICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aFxcbiAgICAgICAgLmNhcmRfZnJvbnRfZGV0YWlsc1xcbiAgICAgICAgICAgIGJvdHRvbTogdW5zZXRcXG4gICAgICAgICAgICB0b3A6IDI4LjVyZW1cXG4gICAgICAgICAgICBsZWZ0OiAyMXJlbVxcbiAgICAgICAgICAgIC5jYXJkX2Zyb250XFxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMzRyZW1cXG4gICAgICAgICAgICAuY2FyZF9udW1iZXJfaW50ZXJhY3RpdmVcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjJyZW1cXG4gICAgICAgICAgICAgICAgYm90dG9tOiA1LjVyZW1cXG4gICAgICAgICAgICAuY2FyZF9uYW1lX2ludGVyYWN0aXZlXFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbVxcbiAgICAgICAgICAgIC5leHBfZGF0ZV9pbnRlcmFjdGl2ZVxcbiAgICAgICAgICAgICAgICByaWdodDogMTZyZW1cXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtXFxuICAgICAgICAgICAgICAgIC8vIGNvbG9yOiBibGFja1xcbiAgICAgICAgLmNhcmRfYmFja19kZXRhaWxzXFxuICAgICAgICAgICAgdG9wOiA1MHJlbVxcbiAgICAgICAgICAgIGxlZnQ6IDMwcmVtXFxuICAgICAgICAgICAgLmNhcmRfYmFja1xcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDM0cmVtXFxuICAgICAgICAgICAgLmNhcmRfYmFja19pbnRlcmFjdGl2ZVxcbiAgICAgICAgICAgICAgICAvLyBjb2xvcjogYmxhY2tcXG4gICAgICAgICAgICAgICAgdG9wOiA4LjVyZW1cXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDE5cmVtXFxuXFxuICAgICAgICAgICAgICAgICAgXFxuXFxuICAgICAgICAgICAgXFxuXFxubWFpblxcbiAgICBncmlkLWFyZWE6IG1haW5cXG4gICAgZm9ybSAuaW5jb21wbGV0ZV9zdGF0ZVxcbiAgICAgICAgZGlzcGxheTogZ3JpZFxcbiAgICAgICAgcGFkZGluZzogOXJlbSAycmVtIDRyZW0gMnJlbVxcbiAgICAgICAgZ2FwOiAycmVtXFxuICAgICAgICAuZm9ybV9lbFxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXhcXG4gICAgICAgICAgICBnYXA6IDFyZW1cXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uXFxuICAgICAgICAgICAgbGFiZWxcXG4gICAgICAgICAgICAgICAgY29sb3I6ICR2ZXJ5X2RhcmtfdmlvbGV0XFxuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2VcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW1cXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6ICRmb250X3dlaWdodFxcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMS41cHhcXG4gICAgICAgICAgICBpbnB1dFxcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEuNXJlbVxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDVyZW1cXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZVxcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkbGlnaHRfZ3JheWlzaF92aW9sZXRcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4XFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGJvcmRlciAwLjJzIGVhc2UtaW4tb3V0XFxuICAgICAgICAgICAgICAgICY6OnBsYWNlaG9sZGVyXFxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJHNwYWNlX2dyb3Rlc2tcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkZGFya19ncmF5aXNoX3Zpb2xldFxcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMFxcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjZyZW1cXG4gICAgICAgICAgICAgICAgJjpmb2N1c1xcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGxpbmVhcl9ncmFkaWVudF9jb2xvcl8yXFxuICAgICAgICAgICAgICAgICZbZXJyb3I9XFxcIlxcXCJdXFxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkcmVkX2lucHV0X2Vycm9yXFxuICAgICAgICAgICAgLmVycm9yXFxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0uMjVyZW1cXG4gICAgICAgICAgICAgICAgY29sb3I6ICRyZWRfaW5wdXRfZXJyb3JcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtXFxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlXFxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMFxcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAwXFxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW5cXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXRcXG4gICAgICAgICAgICAgICAgJltlcnJvcj1cXFwiXFxcIl1cXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogdW5zZXRcXG4gICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IGZpdC1jb250ZW50XFxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogYXV0b1xcbiAgICAgICAgICAgICY6bGFzdC1vZi10eXBlXFxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3dcXG4gICAgICAgICAgICAgICAgLmV4cGlyYXRpb25fY29udGFpbmVyXFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4XFxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uXFxuICAgICAgICAgICAgICAgICAgICBnYXA6IDFyZW1cXG4gICAgICAgICAgICAgICAgICAgIC5leHBfaW5wdXRfY29udGFpbmVyXFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cXG4gICAgICAgICAgICAgICAgICAgICAgICBnYXA6IDFyZW1cXG4gICAgICAgICAgICAgICAgICAgICAgICAuZXhwX2lucHV0c1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3dcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FwOiAxcmVtXFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA2LjVyZW1cXG4gICAgICAgICAgICAgICAgLmN2Y19pbnB1dF9jb250YWluZXJcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXhcXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cXG4gICAgICAgICAgICAgICAgICAgIGdhcDogMXJlbVxcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRcXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJVxcbiAgICAgICAgLnN1Ym1pdF9idXR0b25cXG4gICAgICAgICAgICBoZWlnaHQ6IDVyZW1cXG4gICAgICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdFxcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR2ZXJ5X2RhcmtfdmlvbGV0XFxuICAgICAgICAgICAgY29sb3I6ICR3aGl0ZVxcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDBcXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNnJlbVxcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweFxcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZVxcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlclxcblxcblxcbm1haW4gZm9ybSAuaW5jb21wbGV0ZV9zdGF0ZVtjb21wbGV0ZT1cXFwiXFxcIl1cXG4gICAgcGFkZGluZzogMFxcbiAgICBtYXgtd2lkdGg6IDBcXG4gICAgaGVpZ2h0OiAwXFxuICAgIG1pbi1oZWlnaHQ6IDBcXG4gICAgb3ZlcmZsb3c6IGhpZGRlblxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweClcXG4gICAgbWFpbiBmb3JtIC5pbmNvbXBsZXRlX3N0YXRlXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlclxcbiAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyXFxuICAgICAgICBoZWlnaHQ6IGF1dG9cXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoXFxuXFxuICAgICAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgICAgIFxcblxcbmlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxcbmlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZVxcbiAgICBtYXJnaW46IDBcXG5cXG5pbnB1dFt0eXBlPW51bWJlcl1cXG4gICAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGRcXG5cXG4uY29tcGxldGVfc3RhdGVcXG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgcmVkXFxuICAgIGRpc3BsYXk6IGZsZXhcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyXFxuICAgIHdpZHRoOiAxMDAlXFxuICAgIG1heC13aWR0aDogMFxcbiAgICBoZWlnaHQ6IDBcXG4gICAgb3ZlcmZsb3c6IGhpZGRlblxcbiAgICAmW2NvbXBsZXRlPVxcXCJcXFwiXVxcbiAgICAgICAgcGFkZGluZy1pbmxpbmU6IDJyZW1cXG4gICAgICAgIG1heC13aWR0aDogdW5zZXRcXG4gICAgICAgIGhlaWdodDogNDY4LjMzM3B4XFxuICAgICAgICBvdmVyZmxvdzogYXV0b1xcbiAgICBzdmdcXG4gICAgICAgIG1hcmdpbi10b3A6IDguNXJlbVxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogM3JlbVxcbiAgICBoMVxcbiAgICAgICAgY29sb3I6ICR2ZXJ5X2RhcmtfdmlvbGV0XFxuICAgICAgICBmb250LXNpemU6IDIuNXJlbVxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbVxcbiAgICAgICAgZm9udC13ZWlnaHQ6ICRmb250X3dlaWdodFxcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZVxcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDNweFxcbiAgICBwXFxuICAgICAgICBjb2xvcjogJGRhcmtfZ3JheWlzaF92aW9sZXRcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRyZW1cXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAkZm9udF93ZWlnaHRcXG4gICAgLmNvbnRpbnVlX2J1dHRvblxcbiAgICAgICAgd2lkdGg6IDEwMCVcXG4gICAgICAgIGhlaWdodDogNXJlbVxcbiAgICAgICAgYmFja2dyb3VuZDogJHZlcnlfZGFya192aW9sZXRcXG4gICAgICAgIGJvcmRlcjogbm9uZVxcbiAgICAgICAgY29sb3I6ICR3aGl0ZVxcbiAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXRcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDBcXG4gICAgICAgIGZvbnQtc2l6ZTogMS42cmVtXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHhcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlclxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweClcXG4gICAgLmNvbXBsZXRlX3N0YXRlXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxcbiAgICAgICAgJltjb21wbGV0ZT1cXFwiXFxcIl1cXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aFxcbiAgICAgICAgLmNvbnRpbnVlX2J1dHRvblxcbiAgICAgICAgICAgIG1heC13aWR0aDogMzIuNXJlbVxcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMuOXJlbVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Fzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNhc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzL3N0eWxlLnNhc3MnO1xuXG5cbmxldCBjYXJkTmFtZVJlZ2V4ID0gLyg/PVxcYl5bYS16QS1aXXsxLDE1fVxcYlxcc1xcYlthLXpBLVpdezEsMTV9XFxiJCkuKi87XG5sZXQgY2FyZE51bVJlZ2V4ID0gLyg/PV5bMC05XXs0fSBbMC05XXs0fSBbMC05XXs0fSBbMC05XXs0fSkuKi87XG5sZXQgY2FyZE1vbnRoUmVnZXggPSAvKD89XlswXT9bMC05XSR8XlsxXVswLTJdJCkuKi87XG5sZXQgY2FyZFllYXJSZWdleCA9IC8oPz1eWzJdWzQtOV0kfF5bM11bMC0yXSkuKi87XG5sZXQgY3ZjUmVnZXggPSAvKD89XlswLTldWzAtOV1bMC05XSQpLiovO1xuXG4vLyBDYXJkIGRldGFpbHMgVmFyaWFibGVzXG5sZXQgY2FyZE51bUludGVyYWN0aXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRfbnVtYmVyX2ludGVyYWN0aXZlJyk7XG5sZXQgY2FyZE5hbWVJbnRlcmFjdGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX25hbWVfaW50ZXJhY3RpdmUnKTtcbmxldCBleHBEYXRlTW9udGhJbnRlcmFjdGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5leHBfZGF0ZV9tb250aF9pbnRlcmFjdGl2ZScpO1xubGV0IGV4cERhdGVZZWFySW50ZXJhY3RpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXhwX2RhdGVfeWVhcl9pbnRlcmFjdGl2ZScpO1xubGV0IGNhcmRCYWNrSW50ZXJhY3RpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9iYWNrX2ludGVyYWN0aXZlJyk7XG5cbi8vIEZvcm0gVmFyaWFibGVzIGZvciBzdGF0ZVxubGV0IGluY29tcGxldGVTdGF0ZUZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5jb21wbGV0ZV9zdGF0ZScpO1xubGV0IGNvbXBsZXRlU3RhdGVGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXBsZXRlX3N0YXRlJyk7XG5cbi8vIElucHV0IFZhcmlhYmxlcyBmb3IgQ2FyZFxubGV0IGNhcmRIb2xkZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhcmRob2xkZXJfbmFtZScpO1xubGV0IGNhcmRIb2xkZXJOdW1iZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FyZGhvbGRlcl9udW1iZXInKTtcbmxldCBleHBEYXRlTW9udGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZXhwX2RhdGVfbW0nKTtcbmxldCBleHBEYXRlWWVhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNleHBfZGF0ZV95eScpO1xubGV0IGN2Y0NvZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3ZjX2NvZGUnKTtcblxuLy8gU3VibWl0IFZhcmlhYmxlXG5jb25zdCB0aGlzRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbmNvbnN0IGNvbnRpbnVlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRpbnVlX2J1dHRvbicpO1xuXG5jbGFzcyBGb3JtIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy8gVGhlc2Ugd2lsbCBjaGFuZ2Ugb24gY29tcGxldGlvbiBmb3IgZnVydGhlciBqcyBpZiBJIGRlc2lyZVxuICAgICAgICB0aGlzLmNhcmROdW1iZXIgPSBudWxsO1xuICAgICAgICB0aGlzLmNhcmROYW1lID0gbnVsbDtcbiAgICAgICAgdGhpcy5leHBNb250aCA9IG51bGw7XG4gICAgICAgIHRoaXMuZXhwWWVhciA9IG51bGw7XG4gICAgICAgIHRoaXMudXNlckNWQyA9IG51bGw7XG4gICAgfVxuXG4gICAgbmFtZVZhbGlkYXRpb24oKSB7XG4gICAgICAgIGxldCB1c2VySW5wdXQgPSBjYXJkSG9sZGVyTmFtZS52YWx1ZTtcbiAgICAgICAgbGV0IGVycm9yTWVzc2FnZSA9IGNhcmRIb2xkZXJOYW1lLm5leHRFbGVtZW50U2libGluZztcblxuICAgICAgICBpZiAodXNlcklucHV0ID09ICcnICYmIGNhcmRIb2xkZXJOYW1lLmhhc0F0dHJpYnV0ZSgnZXJyb3InKSkge1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlLnRleHRDb250ZW50ID0gJ0NhblxcJ3QgYmUgYmxhbmsnO1xuICAgICAgICAgICAgdGhpcy5jYXJkTmFtZSA9IG51bGw7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7ICAgIFxuICAgICAgICB9IGVsc2UgaWYgKHVzZXJJbnB1dCA9PSAnJyAmJiAhY2FyZEhvbGRlck5hbWUuaGFzQXR0cmlidXRlKCdlcnJvcicpKSB7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UudGV4dENvbnRlbnQgPSAnQ2FuXFwndCBiZSBibGFuayc7XG4gICAgICAgICAgICBjYXJkSG9sZGVyTmFtZS5zZXRBdHRyaWJ1dGUoJ2Vycm9yJywgJycpO1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlLnNldEF0dHJpYnV0ZSgnZXJyb3InLCAnJyk7XG4gICAgICAgICAgICB0aGlzLmNhcmROYW1lID0gbnVsbDtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1c2VySW5wdXQgIT09ICcnICYmIGNhcmRIb2xkZXJOYW1lLmhhc0F0dHJpYnV0ZSgnZXJyb3InKSAmJiAhY2FyZE5hbWVSZWdleC50ZXN0KHVzZXJJbnB1dCkpIHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZS50ZXh0Q29udGVudCA9ICdQbGVhc2UgZW50ZXIgZmlyc3QgbmFtZSAmIGxhc3QgbmFtZSBjb3JyZWN0bHknO1xuICAgICAgICAgICAgdGhpcy5jYXJkTmFtZSA9IG51bGw7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAodXNlcklucHV0ICE9PSAnJyAmJiBjYXJkSG9sZGVyTmFtZS5oYXNBdHRyaWJ1dGUoJ2Vycm9yJykgJiYgY2FyZE5hbWVSZWdleC50ZXN0KHVzZXJJbnB1dCkpIHtcbiAgICAgICAgICAgIGNhcmRIb2xkZXJOYW1lLnJlbW92ZUF0dHJpYnV0ZSgnZXJyb3InKTtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZS5yZW1vdmVBdHRyaWJ1dGUoJ2Vycm9yJyk7XG4gICAgICAgICAgICB0aGlzLmNhcmROYW1lID0gdXNlcklucHV0O1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAodXNlcklucHV0ICE9PSAnJyAmJiAhY2FyZEhvbGRlck5hbWUuaGFzQXR0cmlidXRlKCdlcnJvcicpICYmIGNhcmROYW1lUmVnZXgudGVzdCh1c2VySW5wdXQpKSB7XG4gICAgICAgICAgICB0aGlzLmNhcmROYW1lID0gdXNlcklucHV0O1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBudW1iZXJWYWxpZGF0aW9uKCkge1xuICAgICAgICBsZXQgdXNlcklucHV0ID0gY2FyZEhvbGRlck51bWJlci52YWx1ZTtcbiAgICAgICAgbGV0IGVycm9yTWVzc2FnZSA9IGNhcmRIb2xkZXJOdW1iZXIubmV4dEVsZW1lbnRTaWJsaW5nO1xuXG4gICAgICAgIGlmICh1c2VySW5wdXQgPT0gJycgJiYgY2FyZEhvbGRlck51bWJlci5oYXNBdHRyaWJ1dGUoJ2Vycm9yJykpIHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZS50ZXh0Q29udGVudCA9ICdDYW5cXCd0IGJlIGJsYW5rJztcbiAgICAgICAgICAgIHRoaXMuY2FyZE51bWJlciA9IG51bGw7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAodXNlcklucHV0ID09ICcnICYmICFjYXJkSG9sZGVyTnVtYmVyLmhhc0F0dHJpYnV0ZSgnZXJyb3InKSkge1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlLnRleHRDb250ZW50ID0gJ0NhblxcJ3QgYmUgYmxhbmsnO1xuICAgICAgICAgICAgY2FyZEhvbGRlck51bWJlci5zZXRBdHRyaWJ1dGUoJ2Vycm9yJywgJycpO1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlLnNldEF0dHJpYnV0ZSgnZXJyb3InLCAnJyk7XG4gICAgICAgICAgICB0aGlzLmNhcmROdW1iZXIgPSBudWxsO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHVzZXJJbnB1dCAhPT0gJycgJiYgY2FyZEhvbGRlck51bWJlci5oYXNBdHRyaWJ1dGUoJ2Vycm9yJykgJiYgIWNhcmROdW1SZWdleC50ZXN0KHVzZXJJbnB1dCkpIHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZS50ZXh0Q29udGVudCA9ICdXcm9uZyBmb3JtYXQsIG51bWJlcnMgb25seSB3aXRoIGEgc3BhY2UgYWZ0ZXIgZXZlcnkgNCBudW1iZXJzJztcbiAgICAgICAgICAgIHRoaXMuY2FyZE51bWJlciA9IG51bGw7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAodXNlcklucHV0ICE9PSAnJyAmJiAhY2FyZEhvbGRlck51bWJlci5oYXNBdHRyaWJ1dGUoJ2Vycm9yJykgJiYgIWNhcmROdW1SZWdleC50ZXN0KHVzZXJJbnB1dCkpIHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZS50ZXh0Q29udGVudCA9ICdXcm9uZyBmb3JtYXQsIG51bWJlcnMgb25seSB3aXRoIGEgc3BhY2UgYWZ0ZXIgZXZlcnkgNCBudW1iZXJzJztcbiAgICAgICAgICAgIHRoaXMuY2FyZE51bWJlciA9IG51bGw7XG4gICAgICAgICAgICBjYXJkSG9sZGVyTnVtYmVyLnNldEF0dHJpYnV0ZSgnZXJyb3InLCAnJyk7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2Uuc2V0QXR0cmlidXRlKCdlcnJvcicsICcnKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmICh1c2VySW5wdXQgIT09ICcnICYmIGNhcmRIb2xkZXJOdW1iZXIuaGFzQXR0cmlidXRlKCdlcnJvcicpICYmIGNhcmROdW1SZWdleC50ZXN0KHVzZXJJbnB1dCkpIHtcbiAgICAgICAgICAgIGNhcmRIb2xkZXJOdW1iZXIucmVtb3ZlQXR0cmlidXRlKCdlcnJvcicpO1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlLnJlbW92ZUF0dHJpYnV0ZSgnZXJyb3InKTtcbiAgICAgICAgICAgIHRoaXMuY2FyZE51bWJlciA9IHVzZXJJbnB1dDtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKHVzZXJJbnB1dCAhPT0gJycgJiYgIWNhcmRIb2xkZXJOdW1iZXIuaGFzQXR0cmlidXRlKCdlcnJvcicpICYmIGNhcmROdW1SZWdleC50ZXN0KHVzZXJJbnB1dCkpIHtcbiAgICAgICAgICAgIHRoaXMuY2FyZE51bWJlciA9IHVzZXJJbnB1dDtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwVmFsaWRhdGlvbigpIHtcbiAgICAgICAgbGV0IHVzZXJJbnB1dE1vbnRoID0gZXhwRGF0ZU1vbnRoLnZhbHVlO1xuICAgICAgICBsZXQgdXNlcklucHV0WWVhciA9IGV4cERhdGVZZWFyLnZhbHVlO1xuICAgICAgICBsZXQgZXJyb3JNZXNzYWdlID0gZXhwRGF0ZU1vbnRoLnBhcmVudEVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nO1xuXG4gICAgICAgIGlmICh1c2VySW5wdXRNb250aCA9PSAnJyAmJiBleHBEYXRlTW9udGguaGFzQXR0cmlidXRlKCdlcnJvcicpIHx8IHVzZXJJbnB1dFllYXIgPT0gJycgJiYgZXhwRGF0ZVllYXIuaGFzQXR0cmlidXRlKCdlcnJvcicpKSB7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UudGV4dENvbnRlbnQgPSAnQ2FuXFwndCBiZSBibGFuayc7XG4gICAgICAgICAgICB0aGlzLmV4cE1vbnRoID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuZXhwWWVhciA9IG51bGw7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAodXNlcklucHV0TW9udGggPT0gJycgJiYgIWV4cERhdGVNb250aC5oYXNBdHRyaWJ1dGUoJ2Vycm9yJykgfHwgdXNlcklucHV0WWVhciA9PSAnJyAmJiAhZXhwRGF0ZVllYXIuaGFzQXR0cmlidXRlKCdlcnJvcicpKSB7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UudGV4dENvbnRlbnQgPSAnQ2FuXFwndCBiZSBibGFuayc7XG4gICAgICAgICAgICBleHBEYXRlTW9udGguc2V0QXR0cmlidXRlKCdlcnJvcicsICcnKTtcbiAgICAgICAgICAgIGV4cERhdGVZZWFyLnNldEF0dHJpYnV0ZSgnZXJyb3InLCAnJyk7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2Uuc2V0QXR0cmlidXRlKCdlcnJvcicsICcnKTtcbiAgICAgICAgICAgIHRoaXMuZXhwTW9udGggPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5leHBZZWFyID0gbnVsbDtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1c2VySW5wdXRNb250aCAhPT0gJycgJiYgZXhwRGF0ZU1vbnRoLmhhc0F0dHJpYnV0ZSgnZXJyb3InKSAmJiAhY2FyZE1vbnRoUmVnZXgudGVzdCh1c2VySW5wdXRNb250aCkpIHtcbiAgICAgICAgICAgIGlmICh1c2VySW5wdXRZZWFyICE9PSAnJyAmJiBleHBEYXRlWWVhci5oYXNBdHRyaWJ1dGUoJ2Vycm9yJykgJiYgIWNhcmRZZWFyUmVnZXgudGVzdCh1c2VySW5wdXRZZWFyKSkge1xuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZS50ZXh0Q29udGVudCA9ICdZZWFyIG11c3QgYmUgYmV0d2VlbiAyMDI0ICYgMjAyOCc7XG4gICAgICAgICAgICAgICAgdGhpcy5leHBNb250aCA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy5leHBZZWFyID0gbnVsbDtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodXNlcklucHV0TW9udGggIT09ICcnICYmIGV4cERhdGVNb250aC5oYXNBdHRyaWJ1dGUoJ2Vycm9yJykgJiYgY2FyZE1vbnRoUmVnZXgudGVzdCh1c2VySW5wdXRNb250aCkpIHtcbiAgICAgICAgICAgIGlmICh1c2VySW5wdXRZZWFyICE9PSAnJyAmJiBleHBEYXRlWWVhci5oYXNBdHRyaWJ1dGUoJ2Vycm9yJykgJiYgY2FyZFllYXJSZWdleC50ZXN0KHVzZXJJbnB1dFllYXIpKSB7XG4gICAgICAgICAgICAgICAgZXhwRGF0ZU1vbnRoLnJlbW92ZUF0dHJpYnV0ZSgnZXJyb3InKTtcbiAgICAgICAgICAgICAgICBleHBEYXRlWWVhci5yZW1vdmVBdHRyaWJ1dGUoJ2Vycm9yJyk7XG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlLnJlbW92ZUF0dHJpYnV0ZSgnZXJyb3InKTtcbiAgICAgICAgICAgICAgICB0aGlzLmV4cE1vbnRoID0gdXNlcklucHV0TW9udGg7XG4gICAgICAgICAgICAgICAgdGhpcy5leHBZZWFyID0gdXNlcklucHV0WWVhcjtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh1c2VySW5wdXRNb250aCAhPT0gJycgJiYgIWV4cERhdGVNb250aC5oYXNBdHRyaWJ1dGUoJ2Vycm9yJykgJiYgY2FyZE1vbnRoUmVnZXgudGVzdCh1c2VySW5wdXRNb250aCkpIHtcbiAgICAgICAgICAgIGlmICh1c2VySW5wdXRZZWFyICE9PSAnJyAmJiAhZXhwRGF0ZVllYXIuaGFzQXR0cmlidXRlKCdlcnJvcicpICYmIGNhcmRZZWFyUmVnZXgudGVzdCh1c2VySW5wdXRZZWFyKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZXhwTW9udGggPSB1c2VySW5wdXRNb250aDtcbiAgICAgICAgICAgICAgICB0aGlzLmV4cFllYXIgPSB1c2VySW5wdXRZZWFyO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UudGV4dENvbnRlbnQgPSAnWWVhciBtdXN0IGJlIGJldHdlZW4gMjAyNCAmIDIwMjgnO1xuICAgICAgICAgICAgICAgIGV4cERhdGVNb250aC5zZXRBdHRyaWJ1dGUoJ2Vycm9yJywgJycpO1xuICAgICAgICAgICAgICAgIGV4cERhdGVZZWFyLnNldEF0dHJpYnV0ZSgnZXJyb3InLCAnJyk7XG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlLnNldEF0dHJpYnV0ZSgnZXJyb3InLCAnJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5leHBNb250aCA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy5leHBZZWFyID0gbnVsbDtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjdmNDb2RlVmFsaWRhdGlvbigpIHtcbiAgICAgICAgbGV0IHVzZXJJbnB1dCA9IGN2Y0NvZGUudmFsdWU7XG4gICAgICAgIGxldCBlcnJvck1lc3NhZ2UgPSBjdmNDb2RlLm5leHRFbGVtZW50U2libGluZztcblxuICAgICAgICBpZiAodXNlcklucHV0ID09ICcnICYmIGN2Y0NvZGUuaGFzQXR0cmlidXRlKCdlcnJvcicpKSB7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UudGV4dENvbnRlbnQgPSAnQ2FuXFwndCBiZSBibGFuayc7XG4gICAgICAgICAgICB0aGlzLnVzZXJDVkMgPSBudWxsO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKHVzZXJJbnB1dCA9PSAnJyAmJiAhY3ZjQ29kZS5oYXNBdHRyaWJ1dGUoJ2Vycm9yJykpIHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZS50ZXh0Q29udGVudCA9ICdDYW5cXCd0IGJlIGJsYW5rJztcbiAgICAgICAgICAgIGN2Y0NvZGUuc2V0QXR0cmlidXRlKCdlcnJvcicsICcnKTtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZS5zZXRBdHRyaWJ1dGUoJ2Vycm9yJywgJycpO1xuICAgICAgICAgICAgdGhpcy51c2VyQ1ZDID0gbnVsbDtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1c2VySW5wdXQgIT09ICcnICYmIGN2Y0NvZGUuaGFzQXR0cmlidXRlKCdlcnJvcicpICYmICFjdmNSZWdleC50ZXN0KHVzZXJJbnB1dCkpIHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZS50ZXh0Q29udGVudCA9ICdXcm9uZyBmb3JtYXQsIG51bWJlcnMgb25seSc7XG4gICAgICAgICAgICB0aGlzLnVzZXJDVkMgPSBudWxsO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKHVzZXJJbnB1dCAhPT0gJycgJiYgY3ZjQ29kZS5oYXNBdHRyaWJ1dGUoJ2Vycm9yJykgJiYgY3ZjUmVnZXgudGVzdCh1c2VySW5wdXQpKSB7XG4gICAgICAgICAgICBjdmNDb2RlLnJlbW92ZUF0dHJpYnV0ZSgnZXJyb3InKTtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZS5yZW1vdmVBdHRyaWJ1dGUoJ2Vycm9yJyk7XG4gICAgICAgICAgICB0aGlzLnVzZXJDVkMgPSB1c2VySW5wdXQ7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmICh1c2VySW5wdXQgIT09ICcnICYmICFjdmNDb2RlLmhhc0F0dHJpYnV0ZSgnZXJyb3InKSAmJiBjdmNSZWdleC50ZXN0KHVzZXJJbnB1dCkpIHtcbiAgICAgICAgICAgIHRoaXMudXNlckNWQyA9IHVzZXJJbnB1dDtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbmxldCBteUZvcm0gPSBuZXcgRm9ybSgpO1xuXG53aW5kb3cub25sb2FkID0gZm9ybVJlc2V0KCk7XG5cbmZ1bmN0aW9uIGZvcm1SZXNldCgpIHtcbiAgICBjYXJkSG9sZGVyTmFtZS52YWx1ZSA9ICcnO1xuICAgIGNhcmRIb2xkZXJOdW1iZXIudmFsdWUgPSAnJztcbiAgICBleHBEYXRlTW9udGgudmFsdWUgPSAnJztcbiAgICBleHBEYXRlWWVhci52YWx1ZSA9ICcnO1xuICAgIGN2Y0NvZGUudmFsdWUgPSAnJztcbiAgICBjYXJkTmFtZUludGVyYWN0aXZlLnRleHRDb250ZW50ID0gJy0tLS0gLS0tLS0tLS0tJztcbiAgICBjYXJkTnVtSW50ZXJhY3RpdmUudGV4dENvbnRlbnQgPSAnLS0tLSAtLS0tIC0tLS0gLS0tLSc7XG4gICAgZXhwRGF0ZU1vbnRoSW50ZXJhY3RpdmUudGV4dENvbnRlbnQgPSAnLS0nO1xuICAgIGV4cERhdGVZZWFySW50ZXJhY3RpdmUudGV4dENvbnRlbnQgPSAnLS0nO1xuICAgIGNhcmRCYWNrSW50ZXJhY3RpdmUudGV4dENvbnRlbnQgPSAnLS0tJztcbn1cblxudGhpc0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbXlGb3JtLm5hbWVWYWxpZGF0aW9uKCk7XG4gICAgbXlGb3JtLm51bWJlclZhbGlkYXRpb24oKTtcbiAgICBteUZvcm0uZXhwVmFsaWRhdGlvbigpO1xuICAgIG15Rm9ybS5jdmNDb2RlVmFsaWRhdGlvbigpO1xuXG4gICAgaWYgKFxuICAgICAgICBteUZvcm0uY2FyZE5hbWUgIT09IG51bGwgXG4gICAgICAgICYmIG15Rm9ybS5jYXJkTnVtYmVyICE9PSBudWxsIFxuICAgICAgICAmJiBteUZvcm0uZXhwTW9udGggIT09IG51bGwgXG4gICAgICAgICYmIG15Rm9ybS5leHBZZWFyICE9PSBudWxsIFxuICAgICAgICAmJiBteUZvcm0udXNlckNWQyAhPT0gbnVsbCkgXG4gICAge1xuICAgICAgICBpbmNvbXBsZXRlU3RhdGVGb3JtLnNldEF0dHJpYnV0ZSgnY29tcGxldGUnLCAnJyk7XG4gICAgICAgIGNvbXBsZXRlU3RhdGVGb3JtLnNldEF0dHJpYnV0ZSgnY29tcGxldGUnLCAnJyk7XG4gICAgfVxufSlcblxuZnVuY3Rpb24gY2FyZE5hbWVUZXh0Q2hhbmdlKCkge1xuICAgIGxldCBpbnB1dFRleHQgPSBjYXJkSG9sZGVyTmFtZS52YWx1ZTtcbiAgICBjYXJkTmFtZUludGVyYWN0aXZlLnRleHRDb250ZW50ID0gaW5wdXRUZXh0O1xufVxuXG5jYXJkSG9sZGVyTmFtZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGNhcmROYW1lVGV4dENoYW5nZSk7XG5cbmZ1bmN0aW9uIGNhcmROdW1UZXh0Q2hhbmdlKCkge1xuICAgIGxldCBpbnB1dFRleHQgPSBjYXJkSG9sZGVyTnVtYmVyLnZhbHVlO1xuICAgIGNhcmROdW1JbnRlcmFjdGl2ZS50ZXh0Q29udGVudCA9IGlucHV0VGV4dDtcbn1cblxuY2FyZEhvbGRlck51bWJlci5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGNhcmROdW1UZXh0Q2hhbmdlKTtcblxuZnVuY3Rpb24gY2FyZEV4cE1vbnRoQ2hhbmdlKCkge1xuICAgIGxldCBpbnB1dFRleHQgPSBleHBEYXRlTW9udGgudmFsdWU7XG4gICAgZXhwRGF0ZU1vbnRoSW50ZXJhY3RpdmUudGV4dENvbnRlbnQgPSBpbnB1dFRleHQ7XG59XG5cbmV4cERhdGVNb250aC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGNhcmRFeHBNb250aENoYW5nZSk7XG5cbmZ1bmN0aW9uIGNhcmRFeHBZZWFyQ2hhbmdlKCkge1xuICAgIGxldCBpbnB1dFRleHQgPSBleHBEYXRlWWVhci52YWx1ZTtcbiAgICBleHBEYXRlWWVhckludGVyYWN0aXZlLnRleHRDb250ZW50ID0gaW5wdXRUZXh0O1xufVxuXG5leHBEYXRlWWVhci5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGNhcmRFeHBZZWFyQ2hhbmdlKTtcblxuZnVuY3Rpb24gYmFja0NWQ0NvZGVDaGFuZ2UoKSB7XG4gICAgbGV0IGlucHV0VGV4dCA9IGN2Y0NvZGUudmFsdWU7XG4gICAgY2FyZEJhY2tJbnRlcmFjdGl2ZS50ZXh0Q29udGVudCA9IGlucHV0VGV4dDtcbn1cblxuY3ZjQ29kZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGJhY2tDVkNDb2RlQ2hhbmdlKTtcblxuZnVuY3Rpb24gZ29CYWNrVG9NYWluUGFnZSgpIHtcbiAgICBmb3JtUmVzZXQoKTtcbiAgICBjb21wbGV0ZVN0YXRlRm9ybS5yZW1vdmVBdHRyaWJ1dGUoJ2NvbXBsZXRlJyk7XG4gICAgaW5jb21wbGV0ZVN0YXRlRm9ybS5yZW1vdmVBdHRyaWJ1dGUoJ2NvbXBsZXRlJyk7XG59XG5cbmNvbnRpbnVlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ29CYWNrVG9NYWluUGFnZSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9