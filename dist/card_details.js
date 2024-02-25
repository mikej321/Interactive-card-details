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

input[type=color],
input[type=date],
input[type=datetime],
input[type=datetime-local],
input[type=email],
input[type=month],
input[type=number],
input[type=password],
input[type=search],
input[type=tel],
input[type=text],
input[type=time],
input[type=url],
input[type=week],
select:focus,
textarea {
  font-size: 16px;
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
  font-size: 16px;
}
main form .incomplete_state .form_el input::placeholder {
  font-family: "Space Grotesk", sans-serif;
  color: hsl(279, 6%, 55%);
  font-weight: 500;
  font-size: 16px;
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
  font-size: 16px;
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
  font-size: 16px;
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
}`, "",{"version":3,"sources":["webpack://./src/styles/style.sass"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap')\n// Font Families & weights\n$space_grotesk: 'Space Grotesk', sans-serif\n$font_weight: 500\n$font_size: 18px\n\n// Primary Colors\n$linear_gradient_color_1: hsl(249, 99%, 64%) // active input border color 1\n$linear_gradient_color_2: hsl(278, 94%, 30%) // active input border color 2\n$red_input_error: hsl(0, 100%, 60%)\n\n// Neutral Colors\n$white: hsl(0, 0%, 100%)\n$light_grayish_violet: hsl(270, 3%, 87%)\n$dark_grayish_violet: hsl(279, 6%, 55%)\n$very_dark_violet: hsl(278, 68%, 11%)\n\n*,\n*::before,\n*::after\n    box-sizing: border-box\n\n*\n    margin: 0\n    padding: 0\n    scroll-behavior: smooth\n\nhtml\n    font-size: 62.5%\n\nbody\n    font-size: 1.6rem\n    display: flex\n    justify-content: center\n    font-family: $space_grotesk\n\ninput[type=\"color\"],\ninput[type=\"date\"],\ninput[type=\"datetime\"],\ninput[type=\"datetime-local\"],\ninput[type=\"email\"],\ninput[type=\"month\"],\ninput[type=\"number\"],\ninput[type=\"password\"],\ninput[type=\"search\"],\ninput[type=\"tel\"],\ninput[type=\"text\"],\ninput[type=\"time\"],\ninput[type=\"url\"],\ninput[type=\"week\"],\nselect:focus,\ntextarea\n    font-size: 16px\n\nimg\n    width: 100%\n    height: auto\n    object-fit: cover\n\n.container\n    // border: 1px solid black\n    width: 100%\n    max-width: 36.5rem\n    display: grid\n    grid-template-areas: \"header\" \"main\"\n    grid-template-rows: 22rem 1fr\n\n\n\n@media screen and (min-width: 1200px)\n    .container\n        max-width: 100%\n        grid-template-areas: \"header main\"\n        grid-template-columns: 483px 1fr\n        // grid-template-rows: 100vh\n\n\nheader\n    grid-area: header\n    background: url('../images/bg-main-mobile.png')\n    position: relative\n    .card_front_details\n        width: 100%\n        position: absolute\n        bottom: -4.6rem\n        left: 2rem\n        z-index: 1000\n        .card_front\n            // border: 1px solid red\n            position: relative\n            max-width: 27rem\n        svg\n            position: absolute\n            left: 2rem\n            top: 2rem\n        .card_number_interactive\n            position: absolute\n            bottom: 5rem\n            left: 2rem\n            letter-spacing: 2.5px\n            color: $white\n        .card_name_interactive\n            position: absolute\n            bottom: 2.5rem\n            left: 2rem\n            letter-spacing: 1px\n            font-size: .8rem\n            font-weight: $font_weight\n            text-transform: uppercase\n            color: $white\n        .exp_date_interactive\n            position: absolute\n            color: $white\n            bottom: 2.5rem\n            right: 11.5rem\n            font-size: .8rem\n            font-weight: $font_weight\n            letter-spacing: 1px\n    .card_back_details\n        width: 100%\n        position: absolute\n        top: 3rem\n        left: 7rem\n        .card_back\n            position: relative\n            max-width: 27rem\n        .card_back_interactive\n            position: absolute\n            top: 6.8rem\n            right: 13rem\n            font-size: .8rem\n            font-weight: $font_weight\n            letter-spacing: 1px\n            color: $white\n\n@media screen and (min-width: 1200px)\n    header\n        background: url('../images/bg-main-desktop.png')\n        min-height: 100vh\n        .card_front_details\n            bottom: unset\n            top: 28.5rem\n            left: 21rem\n            .card_front\n                max-width: 34rem\n            .card_number_interactive\n                font-size: 2.2rem\n                bottom: 5.5rem\n            .card_name_interactive\n                font-size: 1rem\n            .exp_date_interactive\n                right: 16rem\n                font-size: 1rem\n                // color: black\n        .card_back_details\n            top: 50rem\n            left: 30rem\n            .card_back\n                max-width: 34rem\n            .card_back_interactive\n                // color: black\n                top: 8.5rem\n                right: 19rem\n\n                  \n\n            \n\nmain\n    grid-area: main\n    form .incomplete_state\n        display: grid\n        padding: 9rem 2rem 4rem 2rem\n        gap: 2rem\n        .form_el\n            display: flex\n            gap: 1rem\n            flex-direction: column\n            label\n                color: $very_dark_violet\n                text-transform: uppercase\n                font-size: 1.1rem\n                font-weight: $font_weight\n                letter-spacing: 1.5px\n            input\n                padding-left: 1.5rem\n                height: 5rem\n                outline: none\n                border: 1px solid $light_grayish_violet\n                border-radius: 8px\n                transition: border 0.2s ease-in-out\n                font-size: 16px\n                &::placeholder\n                    font-family: $space_grotesk\n                    color: $dark_grayish_violet\n                    font-weight: 500\n                    font-size: 16px\n                &:focus\n                    border: 1px solid $linear_gradient_color_2\n                &[error=\"\"]\n                    border: 1px solid $red_input_error\n            .error\n                margin-top: -.25rem\n                color: $red_input_error\n                font-size: 1rem\n                width: 100%\n                max-width: 0\n                max-height: 0\n                overflow: hidden\n                transition: all 0.2s ease-in-out\n                &[error=\"\"]\n                    max-width: unset\n                    max-height: fit-content\n                    overflow: auto\n            &:last-of-type\n                flex-direction: row\n                .expiration_container\n                    display: flex\n                    flex-direction: column\n                    gap: 1rem\n                    .exp_input_container\n                        display: flex\n                        flex-direction: column\n                        gap: 1rem\n                        .exp_inputs\n                            display: flex\n                            flex-direction: row\n                            gap: 1rem\n                            font-size: 16px\n                        input\n                            max-width: 6.5rem\n                .cvc_input_container\n                    display: flex\n                    flex-direction: column\n                    gap: 1rem\n                    input\n                        width: 100%\n                        font-size: 16px\n        .submit_button\n            height: 5rem\n            font-family: inherit\n            background: $very_dark_violet\n            color: $white\n            font-weight: 500\n            font-size: 1.6rem\n            border-radius: 8px\n            border: none\n            cursor: pointer\n\n\nmain form .incomplete_state[complete=\"\"]\n    padding: 0\n    max-width: 0\n    height: 0\n    min-height: 0\n    overflow: hidden\n\n@media screen and (min-width: 1200px)\n    main form .incomplete_state\n        justify-content: center\n        align-items: center\n        align-content: center\n        height: auto\n        min-height: 100vh\n\n                    \n                    \n\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button\n    -webkit-appearance: none\n    margin: 0\n\ninput[type=number]\n    -moz-appearance: textfield\n\n.complete_state\n    // border: 1px solid red\n    display: flex\n    flex-direction: column\n    align-items: center\n    width: 100%\n    max-width: 0\n    height: 0\n    overflow: hidden\n    &[complete=\"\"]\n        padding-inline: 2rem\n        max-width: unset\n        height: 468.333px\n        overflow: auto\n    svg\n        margin-top: 8.5rem\n        margin-bottom: 3rem\n    h1\n        color: $very_dark_violet\n        font-size: 2.5rem\n        margin-bottom: 2rem\n        font-weight: $font_weight\n        text-transform: uppercase\n        letter-spacing: 3px\n    p\n        color: $dark_grayish_violet\n        margin-bottom: 4rem\n        font-weight: $font_weight\n    .continue_button\n        width: 100%\n        height: 5rem\n        background: $very_dark_violet\n        border: none\n        color: $white\n        font-family: inherit\n        font-weight: 500\n        font-size: 1.6rem\n        border-radius: 8px\n        cursor: pointer\n\n@media screen and (min-width: 1200px)\n    .complete_state\n        justify-content: center\n        &[complete=\"\"]\n            min-height: 100vh\n        .continue_button\n            max-width: 32.5rem\n            margin-bottom: 3.9rem\n\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZF9kZXRhaWxzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDTztBQUNuRyw0Q0FBNEMsb0lBQStDO0FBQzNGLDRDQUE0QyxzSUFBZ0Q7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5SUFBeUk7QUFDekkseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG1DQUFtQztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQixtQ0FBbUM7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sMkZBQTJGLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxZQUFZLFFBQVEsb0JBQW9CLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsV0FBVyxZQUFZLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsWUFBWSxZQUFZLFlBQVksTUFBTSxLQUFLLFdBQVcsWUFBWSxXQUFXLFVBQVUsV0FBVyxZQUFZLFlBQVksS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsV0FBVyxZQUFZLFlBQVksWUFBWSxPQUFPLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxXQUFXLFVBQVUs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O0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyRCIsInNvdXJjZXMiOlsid2VicGFjazovL2ludGVyYWN0aXZlLWNhcmQtZGV0YWlscy8uL3NyYy9zdHlsZXMvc3R5bGUuc2FzcyIsIndlYnBhY2s6Ly9pbnRlcmFjdGl2ZS1jYXJkLWRldGFpbHMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2ludGVyYWN0aXZlLWNhcmQtZGV0YWlscy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vaW50ZXJhY3RpdmUtY2FyZC1kZXRhaWxzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vaW50ZXJhY3RpdmUtY2FyZC1kZXRhaWxzLy4vc3JjL3N0eWxlcy9zdHlsZS5zYXNzP2JmYWQiLCJ3ZWJwYWNrOi8vaW50ZXJhY3RpdmUtY2FyZC1kZXRhaWxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2ludGVyYWN0aXZlLWNhcmQtZGV0YWlscy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vaW50ZXJhY3RpdmUtY2FyZC1kZXRhaWxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2ludGVyYWN0aXZlLWNhcmQtZGV0YWlscy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9pbnRlcmFjdGl2ZS1jYXJkLWRldGFpbHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9pbnRlcmFjdGl2ZS1jYXJkLWRldGFpbHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9pbnRlcmFjdGl2ZS1jYXJkLWRldGFpbHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaW50ZXJhY3RpdmUtY2FyZC1kZXRhaWxzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2ludGVyYWN0aXZlLWNhcmQtZGV0YWlscy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vaW50ZXJhY3RpdmUtY2FyZC1kZXRhaWxzL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vaW50ZXJhY3RpdmUtY2FyZC1kZXRhaWxzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vaW50ZXJhY3RpdmUtY2FyZC1kZXRhaWxzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vaW50ZXJhY3RpdmUtY2FyZC1kZXRhaWxzL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2ludGVyYWN0aXZlLWNhcmQtZGV0YWlscy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9pbnRlcmFjdGl2ZS1jYXJkLWRldGFpbHMvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2ludGVyYWN0aXZlLWNhcmQtZGV0YWlscy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2JnLW1haW4tbW9iaWxlLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9iZy1tYWluLWRlc2t0b3AucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1TcGFjZStHcm90ZXNrOndnaHRAMzAwLi43MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuXG5odG1sIHtcbiAgZm9udC1zaXplOiA2Mi41JTtcbn1cblxuYm9keSB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiU3BhY2UgR3JvdGVza1wiLCBzYW5zLXNlcmlmO1xufVxuXG5pbnB1dFt0eXBlPWNvbG9yXSxcbmlucHV0W3R5cGU9ZGF0ZV0sXG5pbnB1dFt0eXBlPWRhdGV0aW1lXSxcbmlucHV0W3R5cGU9ZGF0ZXRpbWUtbG9jYWxdLFxuaW5wdXRbdHlwZT1lbWFpbF0sXG5pbnB1dFt0eXBlPW1vbnRoXSxcbmlucHV0W3R5cGU9bnVtYmVyXSxcbmlucHV0W3R5cGU9cGFzc3dvcmRdLFxuaW5wdXRbdHlwZT1zZWFyY2hdLFxuaW5wdXRbdHlwZT10ZWxdLFxuaW5wdXRbdHlwZT10ZXh0XSxcbmlucHV0W3R5cGU9dGltZV0sXG5pbnB1dFt0eXBlPXVybF0sXG5pbnB1dFt0eXBlPXdlZWtdLFxuc2VsZWN0OmZvY3VzLFxudGV4dGFyZWEge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbmltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMzYuNXJlbTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJoZWFkZXJcIiBcIm1haW5cIjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMnJlbSAxZnI7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJoZWFkZXIgbWFpblwiO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDgzcHggMWZyO1xuICB9XG59XG5oZWFkZXIge1xuICBncmlkLWFyZWE6IGhlYWRlcjtcbiAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5oZWFkZXIgLmNhcmRfZnJvbnRfZGV0YWlscyB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTQuNnJlbTtcbiAgbGVmdDogMnJlbTtcbiAgei1pbmRleDogMTAwMDtcbn1cbmhlYWRlciAuY2FyZF9mcm9udF9kZXRhaWxzIC5jYXJkX2Zyb250IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXgtd2lkdGg6IDI3cmVtO1xufVxuaGVhZGVyIC5jYXJkX2Zyb250X2RldGFpbHMgc3ZnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAycmVtO1xuICB0b3A6IDJyZW07XG59XG5oZWFkZXIgLmNhcmRfZnJvbnRfZGV0YWlscyAuY2FyZF9udW1iZXJfaW50ZXJhY3RpdmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNXJlbTtcbiAgbGVmdDogMnJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDIuNXB4O1xuICBjb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcbn1cbmhlYWRlciAuY2FyZF9mcm9udF9kZXRhaWxzIC5jYXJkX25hbWVfaW50ZXJhY3RpdmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMi41cmVtO1xuICBsZWZ0OiAycmVtO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XG59XG5oZWFkZXIgLmNhcmRfZnJvbnRfZGV0YWlscyAuZXhwX2RhdGVfaW50ZXJhY3RpdmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xuICBib3R0b206IDIuNXJlbTtcbiAgcmlnaHQ6IDExLjVyZW07XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuaGVhZGVyIC5jYXJkX2JhY2tfZGV0YWlscyB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogM3JlbTtcbiAgbGVmdDogN3JlbTtcbn1cbmhlYWRlciAuY2FyZF9iYWNrX2RldGFpbHMgLmNhcmRfYmFjayB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWF4LXdpZHRoOiAyN3JlbTtcbn1cbmhlYWRlciAuY2FyZF9iYWNrX2RldGFpbHMgLmNhcmRfYmFja19pbnRlcmFjdGl2ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA2LjhyZW07XG4gIHJpZ2h0OiAxM3JlbTtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gIH1cbiAgaGVhZGVyIC5jYXJkX2Zyb250X2RldGFpbHMge1xuICAgIGJvdHRvbTogdW5zZXQ7XG4gICAgdG9wOiAyOC41cmVtO1xuICAgIGxlZnQ6IDIxcmVtO1xuICB9XG4gIGhlYWRlciAuY2FyZF9mcm9udF9kZXRhaWxzIC5jYXJkX2Zyb250IHtcbiAgICBtYXgtd2lkdGg6IDM0cmVtO1xuICB9XG4gIGhlYWRlciAuY2FyZF9mcm9udF9kZXRhaWxzIC5jYXJkX251bWJlcl9pbnRlcmFjdGl2ZSB7XG4gICAgZm9udC1zaXplOiAyLjJyZW07XG4gICAgYm90dG9tOiA1LjVyZW07XG4gIH1cbiAgaGVhZGVyIC5jYXJkX2Zyb250X2RldGFpbHMgLmNhcmRfbmFtZV9pbnRlcmFjdGl2ZSB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG4gIGhlYWRlciAuY2FyZF9mcm9udF9kZXRhaWxzIC5leHBfZGF0ZV9pbnRlcmFjdGl2ZSB7XG4gICAgcmlnaHQ6IDE2cmVtO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxuICBoZWFkZXIgLmNhcmRfYmFja19kZXRhaWxzIHtcbiAgICB0b3A6IDUwcmVtO1xuICAgIGxlZnQ6IDMwcmVtO1xuICB9XG4gIGhlYWRlciAuY2FyZF9iYWNrX2RldGFpbHMgLmNhcmRfYmFjayB7XG4gICAgbWF4LXdpZHRoOiAzNHJlbTtcbiAgfVxuICBoZWFkZXIgLmNhcmRfYmFja19kZXRhaWxzIC5jYXJkX2JhY2tfaW50ZXJhY3RpdmUge1xuICAgIHRvcDogOC41cmVtO1xuICAgIHJpZ2h0OiAxOXJlbTtcbiAgfVxufVxubWFpbiB7XG4gIGdyaWQtYXJlYTogbWFpbjtcbn1cbm1haW4gZm9ybSAuaW5jb21wbGV0ZV9zdGF0ZSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBhZGRpbmc6IDlyZW0gMnJlbSA0cmVtIDJyZW07XG4gIGdhcDogMnJlbTtcbn1cbm1haW4gZm9ybSAuaW5jb21wbGV0ZV9zdGF0ZSAuZm9ybV9lbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMXJlbTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbm1haW4gZm9ybSAuaW5jb21wbGV0ZV9zdGF0ZSAuZm9ybV9lbCBsYWJlbCB7XG4gIGNvbG9yOiBoc2woMjc4LCA2OCUsIDExJSk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG59XG5tYWluIGZvcm0gLmluY29tcGxldGVfc3RhdGUgLmZvcm1fZWwgaW5wdXQge1xuICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcbiAgaGVpZ2h0OiA1cmVtO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCBoc2woMjcwLCAzJSwgODclKTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB0cmFuc2l0aW9uOiBib3JkZXIgMC4ycyBlYXNlLWluLW91dDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxubWFpbiBmb3JtIC5pbmNvbXBsZXRlX3N0YXRlIC5mb3JtX2VsIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGZvbnQtZmFtaWx5OiBcIlNwYWNlIEdyb3Rlc2tcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6IGhzbCgyNzksIDYlLCA1NSUpO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5tYWluIGZvcm0gLmluY29tcGxldGVfc3RhdGUgLmZvcm1fZWwgaW5wdXQ6Zm9jdXMge1xuICBib3JkZXI6IDFweCBzb2xpZCBoc2woMjc4LCA5NCUsIDMwJSk7XG59XG5tYWluIGZvcm0gLmluY29tcGxldGVfc3RhdGUgLmZvcm1fZWwgaW5wdXRbZXJyb3I9XCJcIl0ge1xuICBib3JkZXI6IDFweCBzb2xpZCBoc2woMCwgMTAwJSwgNjAlKTtcbn1cbm1haW4gZm9ybSAuaW5jb21wbGV0ZV9zdGF0ZSAuZm9ybV9lbCAuZXJyb3Ige1xuICBtYXJnaW4tdG9wOiAtMC4yNXJlbTtcbiAgY29sb3I6IGhzbCgwLCAxMDAlLCA2MCUpO1xuICBmb250LXNpemU6IDFyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDA7XG4gIG1heC1oZWlnaHQ6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxubWFpbiBmb3JtIC5pbmNvbXBsZXRlX3N0YXRlIC5mb3JtX2VsIC5lcnJvcltlcnJvcj1cIlwiXSB7XG4gIG1heC13aWR0aDogdW5zZXQ7XG4gIG1heC1oZWlnaHQ6IGZpdC1jb250ZW50O1xuICBvdmVyZmxvdzogYXV0bztcbn1cbm1haW4gZm9ybSAuaW5jb21wbGV0ZV9zdGF0ZSAuZm9ybV9lbDpsYXN0LW9mLXR5cGUge1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxubWFpbiBmb3JtIC5pbmNvbXBsZXRlX3N0YXRlIC5mb3JtX2VsOmxhc3Qtb2YtdHlwZSAuZXhwaXJhdGlvbl9jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDFyZW07XG59XG5tYWluIGZvcm0gLmluY29tcGxldGVfc3RhdGUgLmZvcm1fZWw6bGFzdC1vZi10eXBlIC5leHBpcmF0aW9uX2NvbnRhaW5lciAuZXhwX2lucHV0X2NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMXJlbTtcbn1cbm1haW4gZm9ybSAuaW5jb21wbGV0ZV9zdGF0ZSAuZm9ybV9lbDpsYXN0LW9mLXR5cGUgLmV4cGlyYXRpb25fY29udGFpbmVyIC5leHBfaW5wdXRfY29udGFpbmVyIC5leHBfaW5wdXRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZ2FwOiAxcmVtO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5tYWluIGZvcm0gLmluY29tcGxldGVfc3RhdGUgLmZvcm1fZWw6bGFzdC1vZi10eXBlIC5leHBpcmF0aW9uX2NvbnRhaW5lciAuZXhwX2lucHV0X2NvbnRhaW5lciBpbnB1dCB7XG4gIG1heC13aWR0aDogNi41cmVtO1xufVxubWFpbiBmb3JtIC5pbmNvbXBsZXRlX3N0YXRlIC5mb3JtX2VsOmxhc3Qtb2YtdHlwZSAuY3ZjX2lucHV0X2NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMXJlbTtcbn1cbm1haW4gZm9ybSAuaW5jb21wbGV0ZV9zdGF0ZSAuZm9ybV9lbDpsYXN0LW9mLXR5cGUgLmN2Y19pbnB1dF9jb250YWluZXIgaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxubWFpbiBmb3JtIC5pbmNvbXBsZXRlX3N0YXRlIC5zdWJtaXRfYnV0dG9uIHtcbiAgaGVpZ2h0OiA1cmVtO1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgYmFja2dyb3VuZDogaHNsKDI3OCwgNjglLCAxMSUpO1xuICBjb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbm1haW4gZm9ybSAuaW5jb21wbGV0ZV9zdGF0ZVtjb21wbGV0ZT1cIlwiXSB7XG4gIHBhZGRpbmc6IDA7XG4gIG1heC13aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBtaW4taGVpZ2h0OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgbWFpbiBmb3JtIC5pbmNvbXBsZXRlX3N0YXRlIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gIH1cbn1cbmlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxuaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIG1hcmdpbjogMDtcbn1cblxuaW5wdXRbdHlwZT1udW1iZXJdIHtcbiAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG59XG5cbi5jb21wbGV0ZV9zdGF0ZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5jb21wbGV0ZV9zdGF0ZVtjb21wbGV0ZT1cIlwiXSB7XG4gIHBhZGRpbmctaW5saW5lOiAycmVtO1xuICBtYXgtd2lkdGg6IHVuc2V0O1xuICBoZWlnaHQ6IDQ2OC4zMzNweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG4uY29tcGxldGVfc3RhdGUgc3ZnIHtcbiAgbWFyZ2luLXRvcDogOC41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xufVxuLmNvbXBsZXRlX3N0YXRlIGgxIHtcbiAgY29sb3I6IGhzbCgyNzgsIDY4JSwgMTElKTtcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XG59XG4uY29tcGxldGVfc3RhdGUgcCB7XG4gIGNvbG9yOiBoc2woMjc5LCA2JSwgNTUlKTtcbiAgbWFyZ2luLWJvdHRvbTogNHJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5jb21wbGV0ZV9zdGF0ZSAuY29udGludWVfYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNXJlbTtcbiAgYmFja2dyb3VuZDogaHNsKDI3OCwgNjglLCAxMSUpO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLmNvbXBsZXRlX3N0YXRlIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICAuY29tcGxldGVfc3RhdGVbY29tcGxldGU9XCJcIl0ge1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICB9XG4gIC5jb21wbGV0ZV9zdGF0ZSAuY29udGludWVfYnV0dG9uIHtcbiAgICBtYXgtd2lkdGg6IDMyLjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMy45cmVtO1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLnNhc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBaUJBOzs7RUFHSSxzQkFBQTtBQWZKOztBQWlCQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7QUFkSjs7QUFnQkE7RUFDSSxnQkFBQTtBQWJKOztBQWVBO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSx3Q0FoQ1k7QUFvQmhCOztBQWNBOzs7Ozs7Ozs7Ozs7Ozs7O0VBZ0JJLGVBQUE7QUFYSjs7QUFhQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFWSjs7QUFZQTtFQUVJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtFQUNBLDZCQUFBO0FBVko7O0FBY0E7RUFDSTtJQUNJLGVBQUE7SUFDQSxrQ0FBQTtJQUNBLGdDQUFBO0VBWE47QUFDRjtBQWNBO0VBQ0ksaUJBQUE7RUFDQSxtREFBQTtFQUNBLGtCQUFBO0FBWko7QUFhSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBQVhSO0FBWVE7RUFFSSxrQkFBQTtFQUNBLGdCQUFBO0FBWFo7QUFZUTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFWWjtBQVdRO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBeEZKO0FBK0VSO0FBVVE7RUFDSSxrQkFBQTtFQUNB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RUFDQSxjQUFBO0FBa0JSO0FBakJJO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQW1CUjtBQWxCSTtFQUNJLHlCQXZSVztFQXdSWCxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBdFNNO0VBdVNOLHlCQUFBO0VBQ0EsbUJBQUE7QUFvQlI7QUFuQkk7RUFDSSx3QkEvUmM7RUFnU2QsbUJBQUE7RUFDQSxnQkE1U007QUFpVWQ7QUFwQkk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQXBTVztFQXFTWCxZQUFBO0VBQ0EsdUJBelNBO0VBMFNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQXNCUjs7QUFwQkE7RUFDSTtJQUNJLHVCQUFBO0VBdUJOO0VBdEJNO0lBQ0ksaUJBQUE7RUF3QlY7RUF2Qk07SUFDSSxrQkFBQTtJQUNBLHFCQUFBO0VBeUJWO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9U3BhY2UrR3JvdGVzazp3Z2h0QDMwMC4uNzAwJmRpc3BsYXk9c3dhcCcpXFxuLy8gRm9udCBGYW1pbGllcyAmIHdlaWdodHNcXG4kc3BhY2VfZ3JvdGVzazogJ1NwYWNlIEdyb3Rlc2snLCBzYW5zLXNlcmlmXFxuJGZvbnRfd2VpZ2h0OiA1MDBcXG4kZm9udF9zaXplOiAxOHB4XFxuXFxuLy8gUHJpbWFyeSBDb2xvcnNcXG4kbGluZWFyX2dyYWRpZW50X2NvbG9yXzE6IGhzbCgyNDksIDk5JSwgNjQlKSAvLyBhY3RpdmUgaW5wdXQgYm9yZGVyIGNvbG9yIDFcXG4kbGluZWFyX2dyYWRpZW50X2NvbG9yXzI6IGhzbCgyNzgsIDk0JSwgMzAlKSAvLyBhY3RpdmUgaW5wdXQgYm9yZGVyIGNvbG9yIDJcXG4kcmVkX2lucHV0X2Vycm9yOiBoc2woMCwgMTAwJSwgNjAlKVxcblxcbi8vIE5ldXRyYWwgQ29sb3JzXFxuJHdoaXRlOiBoc2woMCwgMCUsIDEwMCUpXFxuJGxpZ2h0X2dyYXlpc2hfdmlvbGV0OiBoc2woMjcwLCAzJSwgODclKVxcbiRkYXJrX2dyYXlpc2hfdmlvbGV0OiBoc2woMjc5LCA2JSwgNTUlKVxcbiR2ZXJ5X2RhcmtfdmlvbGV0OiBoc2woMjc4LCA2OCUsIDExJSlcXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94XFxuXFxuKlxcbiAgICBtYXJnaW46IDBcXG4gICAgcGFkZGluZzogMFxcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aFxcblxcbmh0bWxcXG4gICAgZm9udC1zaXplOiA2Mi41JVxcblxcbmJvZHlcXG4gICAgZm9udC1zaXplOiAxLjZyZW1cXG4gICAgZGlzcGxheTogZmxleFxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxcbiAgICBmb250LWZhbWlseTogJHNwYWNlX2dyb3Rlc2tcXG5cXG5pbnB1dFt0eXBlPVxcXCJjb2xvclxcXCJdLFxcbmlucHV0W3R5cGU9XFxcImRhdGVcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJkYXRldGltZVxcXCJdLFxcbmlucHV0W3R5cGU9XFxcImRhdGV0aW1lLWxvY2FsXFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwiZW1haWxcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJtb250aFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcIm51bWJlclxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInBhc3N3b3JkXFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwidGVsXFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInRpbWVcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJ1cmxcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJ3ZWVrXFxcIl0sXFxuc2VsZWN0OmZvY3VzLFxcbnRleHRhcmVhXFxuICAgIGZvbnQtc2l6ZTogMTZweFxcblxcbmltZ1xcbiAgICB3aWR0aDogMTAwJVxcbiAgICBoZWlnaHQ6IGF1dG9cXG4gICAgb2JqZWN0LWZpdDogY292ZXJcXG5cXG4uY29udGFpbmVyXFxuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrXFxuICAgIHdpZHRoOiAxMDAlXFxuICAgIG1heC13aWR0aDogMzYuNXJlbVxcbiAgICBkaXNwbGF5OiBncmlkXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJoZWFkZXJcXFwiIFxcXCJtYWluXFxcIlxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDIycmVtIDFmclxcblxcblxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweClcXG4gICAgLmNvbnRhaW5lclxcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiaGVhZGVyIG1haW5cXFwiXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQ4M3B4IDFmclxcbiAgICAgICAgLy8gZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDB2aFxcblxcblxcbmhlYWRlclxcbiAgICBncmlkLWFyZWE6IGhlYWRlclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uL2ltYWdlcy9iZy1tYWluLW1vYmlsZS5wbmcnKVxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmVcXG4gICAgLmNhcmRfZnJvbnRfZGV0YWlsc1xcbiAgICAgICAgd2lkdGg6IDEwMCVcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxcbiAgICAgICAgYm90dG9tOiAtNC42cmVtXFxuICAgICAgICBsZWZ0OiAycmVtXFxuICAgICAgICB6LWluZGV4OiAxMDAwXFxuICAgICAgICAuY2FyZF9mcm9udFxcbiAgICAgICAgICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIHJlZFxcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxcbiAgICAgICAgICAgIG1heC13aWR0aDogMjdyZW1cXG4gICAgICAgIHN2Z1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxcbiAgICAgICAgICAgIGxlZnQ6IDJyZW1cXG4gICAgICAgICAgICB0b3A6IDJyZW1cXG4gICAgICAgIC5jYXJkX251bWJlcl9pbnRlcmFjdGl2ZVxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxcbiAgICAgICAgICAgIGJvdHRvbTogNXJlbVxcbiAgICAgICAgICAgIGxlZnQ6IDJyZW1cXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMi41cHhcXG4gICAgICAgICAgICBjb2xvcjogJHdoaXRlXFxuICAgICAgICAuY2FyZF9uYW1lX2ludGVyYWN0aXZlXFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlXFxuICAgICAgICAgICAgYm90dG9tOiAyLjVyZW1cXG4gICAgICAgICAgICBsZWZ0OiAycmVtXFxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweFxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjhyZW1cXG4gICAgICAgICAgICBmb250LXdlaWdodDogJGZvbnRfd2VpZ2h0XFxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZVxcbiAgICAgICAgICAgIGNvbG9yOiAkd2hpdGVcXG4gICAgICAgIC5leHBfZGF0ZV9pbnRlcmFjdGl2ZVxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxcbiAgICAgICAgICAgIGNvbG9yOiAkd2hpdGVcXG4gICAgICAgICAgICBib3R0b206IDIuNXJlbVxcbiAgICAgICAgICAgIHJpZ2h0OiAxMS41cmVtXFxuICAgICAgICAgICAgZm9udC1zaXplOiAuOHJlbVxcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAkZm9udF93ZWlnaHRcXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4XFxuICAgIC5jYXJkX2JhY2tfZGV0YWlsc1xcbiAgICAgICAgd2lkdGg6IDEwMCVcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxcbiAgICAgICAgdG9wOiAzcmVtXFxuICAgICAgICBsZWZ0OiA3cmVtXFxuICAgICAgICAuY2FyZF9iYWNrXFxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlXFxuICAgICAgICAgICAgbWF4LXdpZHRoOiAyN3JlbVxcbiAgICAgICAgLmNhcmRfYmFja19pbnRlcmFjdGl2ZVxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxcbiAgICAgICAgICAgIHRvcDogNi44cmVtXFxuICAgICAgICAgICAgcmlnaHQ6IDEzcmVtXFxuICAgICAgICAgICAgZm9udC1zaXplOiAuOHJlbVxcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAkZm9udF93ZWlnaHRcXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4XFxuICAgICAgICAgICAgY29sb3I6ICR3aGl0ZVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweClcXG4gICAgaGVhZGVyXFxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uL2ltYWdlcy9iZy1tYWluLWRlc2t0b3AucG5nJylcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoXFxuICAgICAgICAuY2FyZF9mcm9udF9kZXRhaWxzXFxuICAgICAgICAgICAgYm90dG9tOiB1bnNldFxcbiAgICAgICAgICAgIHRvcDogMjguNXJlbVxcbiAgICAgICAgICAgIGxlZnQ6IDIxcmVtXFxuICAgICAgICAgICAgLmNhcmRfZnJvbnRcXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAzNHJlbVxcbiAgICAgICAgICAgIC5jYXJkX251bWJlcl9pbnRlcmFjdGl2ZVxcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIuMnJlbVxcbiAgICAgICAgICAgICAgICBib3R0b206IDUuNXJlbVxcbiAgICAgICAgICAgIC5jYXJkX25hbWVfaW50ZXJhY3RpdmVcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtXFxuICAgICAgICAgICAgLmV4cF9kYXRlX2ludGVyYWN0aXZlXFxuICAgICAgICAgICAgICAgIHJpZ2h0OiAxNnJlbVxcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW1cXG4gICAgICAgICAgICAgICAgLy8gY29sb3I6IGJsYWNrXFxuICAgICAgICAuY2FyZF9iYWNrX2RldGFpbHNcXG4gICAgICAgICAgICB0b3A6IDUwcmVtXFxuICAgICAgICAgICAgbGVmdDogMzByZW1cXG4gICAgICAgICAgICAuY2FyZF9iYWNrXFxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMzRyZW1cXG4gICAgICAgICAgICAuY2FyZF9iYWNrX2ludGVyYWN0aXZlXFxuICAgICAgICAgICAgICAgIC8vIGNvbG9yOiBibGFja1xcbiAgICAgICAgICAgICAgICB0b3A6IDguNXJlbVxcbiAgICAgICAgICAgICAgICByaWdodDogMTlyZW1cXG5cXG4gICAgICAgICAgICAgICAgICBcXG5cXG4gICAgICAgICAgICBcXG5cXG5tYWluXFxuICAgIGdyaWQtYXJlYTogbWFpblxcbiAgICBmb3JtIC5pbmNvbXBsZXRlX3N0YXRlXFxuICAgICAgICBkaXNwbGF5OiBncmlkXFxuICAgICAgICBwYWRkaW5nOiA5cmVtIDJyZW0gNHJlbSAycmVtXFxuICAgICAgICBnYXA6IDJyZW1cXG4gICAgICAgIC5mb3JtX2VsXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleFxcbiAgICAgICAgICAgIGdhcDogMXJlbVxcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cXG4gICAgICAgICAgICBsYWJlbFxcbiAgICAgICAgICAgICAgICBjb2xvcjogJHZlcnlfZGFya192aW9sZXRcXG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZVxcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMXJlbVxcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogJGZvbnRfd2VpZ2h0XFxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxLjVweFxcbiAgICAgICAgICAgIGlucHV0XFxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMS41cmVtXFxuICAgICAgICAgICAgICAgIGhlaWdodDogNXJlbVxcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lXFxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRsaWdodF9ncmF5aXNoX3Zpb2xldFxcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHhcXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYm9yZGVyIDAuMnMgZWFzZS1pbi1vdXRcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4XFxuICAgICAgICAgICAgICAgICY6OnBsYWNlaG9sZGVyXFxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJHNwYWNlX2dyb3Rlc2tcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkZGFya19ncmF5aXNoX3Zpb2xldFxcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMFxcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4XFxuICAgICAgICAgICAgICAgICY6Zm9jdXNcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRsaW5lYXJfZ3JhZGllbnRfY29sb3JfMlxcbiAgICAgICAgICAgICAgICAmW2Vycm9yPVxcXCJcXFwiXVxcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHJlZF9pbnB1dF9lcnJvclxcbiAgICAgICAgICAgIC5lcnJvclxcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtLjI1cmVtXFxuICAgICAgICAgICAgICAgIGNvbG9yOiAkcmVkX2lucHV0X2Vycm9yXFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbVxcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJVxcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDBcXG4gICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMFxcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuXFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0XFxuICAgICAgICAgICAgICAgICZbZXJyb3I9XFxcIlxcXCJdXFxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IHVuc2V0XFxuICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiBmaXQtY29udGVudFxcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG9cXG4gICAgICAgICAgICAmOmxhc3Qtb2YtdHlwZVxcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93XFxuICAgICAgICAgICAgICAgIC5leHBpcmF0aW9uX2NvbnRhaW5lclxcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleFxcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxcbiAgICAgICAgICAgICAgICAgICAgZ2FwOiAxcmVtXFxuICAgICAgICAgICAgICAgICAgICAuZXhwX2lucHV0X2NvbnRhaW5lclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXhcXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uXFxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FwOiAxcmVtXFxuICAgICAgICAgICAgICAgICAgICAgICAgLmV4cF9pbnB1dHNcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhcDogMXJlbVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHhcXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDYuNXJlbVxcbiAgICAgICAgICAgICAgICAuY3ZjX2lucHV0X2NvbnRhaW5lclxcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleFxcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxcbiAgICAgICAgICAgICAgICAgICAgZ2FwOiAxcmVtXFxuICAgICAgICAgICAgICAgICAgICBpbnB1dFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlXFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4XFxuICAgICAgICAuc3VibWl0X2J1dHRvblxcbiAgICAgICAgICAgIGhlaWdodDogNXJlbVxcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0XFxuICAgICAgICAgICAgYmFja2dyb3VuZDogJHZlcnlfZGFya192aW9sZXRcXG4gICAgICAgICAgICBjb2xvcjogJHdoaXRlXFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMFxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42cmVtXFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4XFxuICAgICAgICAgICAgYm9yZGVyOiBub25lXFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyXFxuXFxuXFxubWFpbiBmb3JtIC5pbmNvbXBsZXRlX3N0YXRlW2NvbXBsZXRlPVxcXCJcXFwiXVxcbiAgICBwYWRkaW5nOiAwXFxuICAgIG1heC13aWR0aDogMFxcbiAgICBoZWlnaHQ6IDBcXG4gICAgbWluLWhlaWdodDogMFxcbiAgICBvdmVyZmxvdzogaGlkZGVuXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KVxcbiAgICBtYWluIGZvcm0gLmluY29tcGxldGVfc3RhdGVcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyXFxuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXJcXG4gICAgICAgIGhlaWdodDogYXV0b1xcbiAgICAgICAgbWluLWhlaWdodDogMTAwdmhcXG5cXG4gICAgICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICAgICAgXFxuXFxuaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXFxuaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b25cXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lXFxuICAgIG1hcmdpbjogMFxcblxcbmlucHV0W3R5cGU9bnVtYmVyXVxcbiAgICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZFxcblxcbi5jb21wbGV0ZV9zdGF0ZVxcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCByZWRcXG4gICAgZGlzcGxheTogZmxleFxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcXG4gICAgd2lkdGg6IDEwMCVcXG4gICAgbWF4LXdpZHRoOiAwXFxuICAgIGhlaWdodDogMFxcbiAgICBvdmVyZmxvdzogaGlkZGVuXFxuICAgICZbY29tcGxldGU9XFxcIlxcXCJdXFxuICAgICAgICBwYWRkaW5nLWlubGluZTogMnJlbVxcbiAgICAgICAgbWF4LXdpZHRoOiB1bnNldFxcbiAgICAgICAgaGVpZ2h0OiA0NjguMzMzcHhcXG4gICAgICAgIG92ZXJmbG93OiBhdXRvXFxuICAgIHN2Z1xcbiAgICAgICAgbWFyZ2luLXRvcDogOC41cmVtXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzcmVtXFxuICAgIGgxXFxuICAgICAgICBjb2xvcjogJHZlcnlfZGFya192aW9sZXRcXG4gICAgICAgIGZvbnQtc2l6ZTogMi41cmVtXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtXFxuICAgICAgICBmb250LXdlaWdodDogJGZvbnRfd2VpZ2h0XFxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlXFxuICAgICAgICBsZXR0ZXItc3BhY2luZzogM3B4XFxuICAgIHBcXG4gICAgICAgIGNvbG9yOiAkZGFya19ncmF5aXNoX3Zpb2xldFxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHJlbVxcbiAgICAgICAgZm9udC13ZWlnaHQ6ICRmb250X3dlaWdodFxcbiAgICAuY29udGludWVfYnV0dG9uXFxuICAgICAgICB3aWR0aDogMTAwJVxcbiAgICAgICAgaGVpZ2h0OiA1cmVtXFxuICAgICAgICBiYWNrZ3JvdW5kOiAkdmVyeV9kYXJrX3Zpb2xldFxcbiAgICAgICAgYm9yZGVyOiBub25lXFxuICAgICAgICBjb2xvcjogJHdoaXRlXFxuICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdFxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMFxcbiAgICAgICAgZm9udC1zaXplOiAxLjZyZW1cXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweFxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KVxcbiAgICAuY29tcGxldGVfc3RhdGVcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyXFxuICAgICAgICAmW2NvbXBsZXRlPVxcXCJcXFwiXVxcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoXFxuICAgICAgICAuY29udGludWVfYnV0dG9uXFxuICAgICAgICAgICAgbWF4LXdpZHRoOiAzMi41cmVtXFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMy45cmVtXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zYXNzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Fzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMvc3R5bGUuc2Fzcyc7XG5cblxubGV0IGNhcmROYW1lUmVnZXggPSAvKD89XFxiXlthLXpBLVpdezEsMTV9XFxiXFxzXFxiW2EtekEtWl17MSwxNX1cXGIkKS4qLztcbmxldCBjYXJkTnVtUmVnZXggPSAvKD89XlswLTldezR9IFswLTldezR9IFswLTldezR9IFswLTldezR9KS4qLztcbmxldCBjYXJkTW9udGhSZWdleCA9IC8oPz1eWzBdP1swLTldJHxeWzFdWzAtMl0kKS4qLztcbmxldCBjYXJkWWVhclJlZ2V4ID0gLyg/PV5bMl1bNC05XSR8XlszXVswLTJdKS4qLztcbmxldCBjdmNSZWdleCA9IC8oPz1eWzAtOV1bMC05XVswLTldJCkuKi87XG5cbi8vIENhcmQgZGV0YWlscyBWYXJpYWJsZXNcbmxldCBjYXJkTnVtSW50ZXJhY3RpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9udW1iZXJfaW50ZXJhY3RpdmUnKTtcbmxldCBjYXJkTmFtZUludGVyYWN0aXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRfbmFtZV9pbnRlcmFjdGl2ZScpO1xubGV0IGV4cERhdGVNb250aEludGVyYWN0aXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmV4cF9kYXRlX21vbnRoX2ludGVyYWN0aXZlJyk7XG5sZXQgZXhwRGF0ZVllYXJJbnRlcmFjdGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5leHBfZGF0ZV95ZWFyX2ludGVyYWN0aXZlJyk7XG5sZXQgY2FyZEJhY2tJbnRlcmFjdGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX2JhY2tfaW50ZXJhY3RpdmUnKTtcblxuLy8gRm9ybSBWYXJpYWJsZXMgZm9yIHN0YXRlXG5sZXQgaW5jb21wbGV0ZVN0YXRlRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmNvbXBsZXRlX3N0YXRlJyk7XG5sZXQgY29tcGxldGVTdGF0ZUZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tcGxldGVfc3RhdGUnKTtcblxuLy8gSW5wdXQgVmFyaWFibGVzIGZvciBDYXJkXG5sZXQgY2FyZEhvbGRlck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FyZGhvbGRlcl9uYW1lJyk7XG5sZXQgY2FyZEhvbGRlck51bWJlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYXJkaG9sZGVyX251bWJlcicpO1xubGV0IGV4cERhdGVNb250aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNleHBfZGF0ZV9tbScpO1xubGV0IGV4cERhdGVZZWFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2V4cF9kYXRlX3l5Jyk7XG5sZXQgY3ZjQ29kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjdmNfY29kZScpO1xuXG4vLyBTdWJtaXQgVmFyaWFibGVcbmNvbnN0IHRoaXNGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xuY29uc3QgY29udGludWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGludWVfYnV0dG9uJyk7XG5cbmNsYXNzIEZvcm0ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvLyBUaGVzZSB3aWxsIGNoYW5nZSBvbiBjb21wbGV0aW9uIGZvciBmdXJ0aGVyIGpzIGlmIEkgZGVzaXJlXG4gICAgICAgIHRoaXMuY2FyZE51bWJlciA9IG51bGw7XG4gICAgICAgIHRoaXMuY2FyZE5hbWUgPSBudWxsO1xuICAgICAgICB0aGlzLmV4cE1vbnRoID0gbnVsbDtcbiAgICAgICAgdGhpcy5leHBZZWFyID0gbnVsbDtcbiAgICAgICAgdGhpcy51c2VyQ1ZDID0gbnVsbDtcbiAgICB9XG5cbiAgICBuYW1lVmFsaWRhdGlvbigpIHtcbiAgICAgICAgbGV0IHVzZXJJbnB1dCA9IGNhcmRIb2xkZXJOYW1lLnZhbHVlO1xuICAgICAgICBsZXQgZXJyb3JNZXNzYWdlID0gY2FyZEhvbGRlck5hbWUubmV4dEVsZW1lbnRTaWJsaW5nO1xuXG4gICAgICAgIGlmICh1c2VySW5wdXQgPT0gJycgJiYgY2FyZEhvbGRlck5hbWUuaGFzQXR0cmlidXRlKCdlcnJvcicpKSB7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UudGV4dENvbnRlbnQgPSAnQ2FuXFwndCBiZSBibGFuayc7XG4gICAgICAgICAgICB0aGlzLmNhcmROYW1lID0gbnVsbDtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTsgICAgXG4gICAgICAgIH0gZWxzZSBpZiAodXNlcklucHV0ID09ICcnICYmICFjYXJkSG9sZGVyTmFtZS5oYXNBdHRyaWJ1dGUoJ2Vycm9yJykpIHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZS50ZXh0Q29udGVudCA9ICdDYW5cXCd0IGJlIGJsYW5rJztcbiAgICAgICAgICAgIGNhcmRIb2xkZXJOYW1lLnNldEF0dHJpYnV0ZSgnZXJyb3InLCAnJyk7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2Uuc2V0QXR0cmlidXRlKCdlcnJvcicsICcnKTtcbiAgICAgICAgICAgIHRoaXMuY2FyZE5hbWUgPSBudWxsO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHVzZXJJbnB1dCAhPT0gJycgJiYgY2FyZEhvbGRlck5hbWUuaGFzQXR0cmlidXRlKCdlcnJvcicpICYmICFjYXJkTmFtZVJlZ2V4LnRlc3QodXNlcklucHV0KSkge1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlLnRleHRDb250ZW50ID0gJ1BsZWFzZSBlbnRlciBmaXJzdCBuYW1lICYgbGFzdCBuYW1lIGNvcnJlY3RseSc7XG4gICAgICAgICAgICB0aGlzLmNhcmROYW1lID0gbnVsbDtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmICh1c2VySW5wdXQgIT09ICcnICYmIGNhcmRIb2xkZXJOYW1lLmhhc0F0dHJpYnV0ZSgnZXJyb3InKSAmJiBjYXJkTmFtZVJlZ2V4LnRlc3QodXNlcklucHV0KSkge1xuICAgICAgICAgICAgY2FyZEhvbGRlck5hbWUucmVtb3ZlQXR0cmlidXRlKCdlcnJvcicpO1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlLnJlbW92ZUF0dHJpYnV0ZSgnZXJyb3InKTtcbiAgICAgICAgICAgIHRoaXMuY2FyZE5hbWUgPSB1c2VySW5wdXQ7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmICh1c2VySW5wdXQgIT09ICcnICYmICFjYXJkSG9sZGVyTmFtZS5oYXNBdHRyaWJ1dGUoJ2Vycm9yJykgJiYgY2FyZE5hbWVSZWdleC50ZXN0KHVzZXJJbnB1dCkpIHtcbiAgICAgICAgICAgIHRoaXMuY2FyZE5hbWUgPSB1c2VySW5wdXQ7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG51bWJlclZhbGlkYXRpb24oKSB7XG4gICAgICAgIGxldCB1c2VySW5wdXQgPSBjYXJkSG9sZGVyTnVtYmVyLnZhbHVlO1xuICAgICAgICBsZXQgZXJyb3JNZXNzYWdlID0gY2FyZEhvbGRlck51bWJlci5uZXh0RWxlbWVudFNpYmxpbmc7XG5cbiAgICAgICAgaWYgKHVzZXJJbnB1dCA9PSAnJyAmJiBjYXJkSG9sZGVyTnVtYmVyLmhhc0F0dHJpYnV0ZSgnZXJyb3InKSkge1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlLnRleHRDb250ZW50ID0gJ0NhblxcJ3QgYmUgYmxhbmsnO1xuICAgICAgICAgICAgdGhpcy5jYXJkTnVtYmVyID0gbnVsbDtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmICh1c2VySW5wdXQgPT0gJycgJiYgIWNhcmRIb2xkZXJOdW1iZXIuaGFzQXR0cmlidXRlKCdlcnJvcicpKSB7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UudGV4dENvbnRlbnQgPSAnQ2FuXFwndCBiZSBibGFuayc7XG4gICAgICAgICAgICBjYXJkSG9sZGVyTnVtYmVyLnNldEF0dHJpYnV0ZSgnZXJyb3InLCAnJyk7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2Uuc2V0QXR0cmlidXRlKCdlcnJvcicsICcnKTtcbiAgICAgICAgICAgIHRoaXMuY2FyZE51bWJlciA9IG51bGw7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXNlcklucHV0ICE9PSAnJyAmJiBjYXJkSG9sZGVyTnVtYmVyLmhhc0F0dHJpYnV0ZSgnZXJyb3InKSAmJiAhY2FyZE51bVJlZ2V4LnRlc3QodXNlcklucHV0KSkge1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlLnRleHRDb250ZW50ID0gJ1dyb25nIGZvcm1hdCwgbnVtYmVycyBvbmx5IHdpdGggYSBzcGFjZSBhZnRlciBldmVyeSA0IG51bWJlcnMnO1xuICAgICAgICAgICAgdGhpcy5jYXJkTnVtYmVyID0gbnVsbDtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmICh1c2VySW5wdXQgIT09ICcnICYmICFjYXJkSG9sZGVyTnVtYmVyLmhhc0F0dHJpYnV0ZSgnZXJyb3InKSAmJiAhY2FyZE51bVJlZ2V4LnRlc3QodXNlcklucHV0KSkge1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlLnRleHRDb250ZW50ID0gJ1dyb25nIGZvcm1hdCwgbnVtYmVycyBvbmx5IHdpdGggYSBzcGFjZSBhZnRlciBldmVyeSA0IG51bWJlcnMnO1xuICAgICAgICAgICAgdGhpcy5jYXJkTnVtYmVyID0gbnVsbDtcbiAgICAgICAgICAgIGNhcmRIb2xkZXJOdW1iZXIuc2V0QXR0cmlidXRlKCdlcnJvcicsICcnKTtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZS5zZXRBdHRyaWJ1dGUoJ2Vycm9yJywgJycpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKHVzZXJJbnB1dCAhPT0gJycgJiYgY2FyZEhvbGRlck51bWJlci5oYXNBdHRyaWJ1dGUoJ2Vycm9yJykgJiYgY2FyZE51bVJlZ2V4LnRlc3QodXNlcklucHV0KSkge1xuICAgICAgICAgICAgY2FyZEhvbGRlck51bWJlci5yZW1vdmVBdHRyaWJ1dGUoJ2Vycm9yJyk7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UucmVtb3ZlQXR0cmlidXRlKCdlcnJvcicpO1xuICAgICAgICAgICAgdGhpcy5jYXJkTnVtYmVyID0gdXNlcklucHV0O1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAodXNlcklucHV0ICE9PSAnJyAmJiAhY2FyZEhvbGRlck51bWJlci5oYXNBdHRyaWJ1dGUoJ2Vycm9yJykgJiYgY2FyZE51bVJlZ2V4LnRlc3QodXNlcklucHV0KSkge1xuICAgICAgICAgICAgdGhpcy5jYXJkTnVtYmVyID0gdXNlcklucHV0O1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBWYWxpZGF0aW9uKCkge1xuICAgICAgICBsZXQgdXNlcklucHV0TW9udGggPSBleHBEYXRlTW9udGgudmFsdWU7XG4gICAgICAgIGxldCB1c2VySW5wdXRZZWFyID0gZXhwRGF0ZVllYXIudmFsdWU7XG4gICAgICAgIGxldCBlcnJvck1lc3NhZ2UgPSBleHBEYXRlTW9udGgucGFyZW50RWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmc7XG5cbiAgICAgICAgaWYgKHVzZXJJbnB1dE1vbnRoID09ICcnICYmIGV4cERhdGVNb250aC5oYXNBdHRyaWJ1dGUoJ2Vycm9yJykgfHwgdXNlcklucHV0WWVhciA9PSAnJyAmJiBleHBEYXRlWWVhci5oYXNBdHRyaWJ1dGUoJ2Vycm9yJykpIHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZS50ZXh0Q29udGVudCA9ICdDYW5cXCd0IGJlIGJsYW5rJztcbiAgICAgICAgICAgIHRoaXMuZXhwTW9udGggPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5leHBZZWFyID0gbnVsbDtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmICh1c2VySW5wdXRNb250aCA9PSAnJyAmJiAhZXhwRGF0ZU1vbnRoLmhhc0F0dHJpYnV0ZSgnZXJyb3InKSB8fCB1c2VySW5wdXRZZWFyID09ICcnICYmICFleHBEYXRlWWVhci5oYXNBdHRyaWJ1dGUoJ2Vycm9yJykpIHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZS50ZXh0Q29udGVudCA9ICdDYW5cXCd0IGJlIGJsYW5rJztcbiAgICAgICAgICAgIGV4cERhdGVNb250aC5zZXRBdHRyaWJ1dGUoJ2Vycm9yJywgJycpO1xuICAgICAgICAgICAgZXhwRGF0ZVllYXIuc2V0QXR0cmlidXRlKCdlcnJvcicsICcnKTtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZS5zZXRBdHRyaWJ1dGUoJ2Vycm9yJywgJycpO1xuICAgICAgICAgICAgdGhpcy5leHBNb250aCA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmV4cFllYXIgPSBudWxsO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHVzZXJJbnB1dE1vbnRoICE9PSAnJyAmJiBleHBEYXRlTW9udGguaGFzQXR0cmlidXRlKCdlcnJvcicpICYmICFjYXJkTW9udGhSZWdleC50ZXN0KHVzZXJJbnB1dE1vbnRoKSkge1xuICAgICAgICAgICAgaWYgKHVzZXJJbnB1dFllYXIgIT09ICcnICYmIGV4cERhdGVZZWFyLmhhc0F0dHJpYnV0ZSgnZXJyb3InKSAmJiAhY2FyZFllYXJSZWdleC50ZXN0KHVzZXJJbnB1dFllYXIpKSB7XG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlLnRleHRDb250ZW50ID0gJ1llYXIgbXVzdCBiZSBiZXR3ZWVuIDIwMjQgJiAyMDI4JztcbiAgICAgICAgICAgICAgICB0aGlzLmV4cE1vbnRoID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLmV4cFllYXIgPSBudWxsO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh1c2VySW5wdXRNb250aCAhPT0gJycgJiYgZXhwRGF0ZU1vbnRoLmhhc0F0dHJpYnV0ZSgnZXJyb3InKSAmJiBjYXJkTW9udGhSZWdleC50ZXN0KHVzZXJJbnB1dE1vbnRoKSkge1xuICAgICAgICAgICAgaWYgKHVzZXJJbnB1dFllYXIgIT09ICcnICYmIGV4cERhdGVZZWFyLmhhc0F0dHJpYnV0ZSgnZXJyb3InKSAmJiBjYXJkWWVhclJlZ2V4LnRlc3QodXNlcklucHV0WWVhcikpIHtcbiAgICAgICAgICAgICAgICBleHBEYXRlTW9udGgucmVtb3ZlQXR0cmlidXRlKCdlcnJvcicpO1xuICAgICAgICAgICAgICAgIGV4cERhdGVZZWFyLnJlbW92ZUF0dHJpYnV0ZSgnZXJyb3InKTtcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UucmVtb3ZlQXR0cmlidXRlKCdlcnJvcicpO1xuICAgICAgICAgICAgICAgIHRoaXMuZXhwTW9udGggPSB1c2VySW5wdXRNb250aDtcbiAgICAgICAgICAgICAgICB0aGlzLmV4cFllYXIgPSB1c2VySW5wdXRZZWFyO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHVzZXJJbnB1dE1vbnRoICE9PSAnJyAmJiAhZXhwRGF0ZU1vbnRoLmhhc0F0dHJpYnV0ZSgnZXJyb3InKSAmJiBjYXJkTW9udGhSZWdleC50ZXN0KHVzZXJJbnB1dE1vbnRoKSkge1xuICAgICAgICAgICAgaWYgKHVzZXJJbnB1dFllYXIgIT09ICcnICYmICFleHBEYXRlWWVhci5oYXNBdHRyaWJ1dGUoJ2Vycm9yJykgJiYgY2FyZFllYXJSZWdleC50ZXN0KHVzZXJJbnB1dFllYXIpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5leHBNb250aCA9IHVzZXJJbnB1dE1vbnRoO1xuICAgICAgICAgICAgICAgIHRoaXMuZXhwWWVhciA9IHVzZXJJbnB1dFllYXI7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZS50ZXh0Q29udGVudCA9ICdZZWFyIG11c3QgYmUgYmV0d2VlbiAyMDI0ICYgMjAyOCc7XG4gICAgICAgICAgICAgICAgZXhwRGF0ZU1vbnRoLnNldEF0dHJpYnV0ZSgnZXJyb3InLCAnJyk7XG4gICAgICAgICAgICAgICAgZXhwRGF0ZVllYXIuc2V0QXR0cmlidXRlKCdlcnJvcicsICcnKTtcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2Uuc2V0QXR0cmlidXRlKCdlcnJvcicsICcnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmV4cE1vbnRoID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLmV4cFllYXIgPSBudWxsO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGN2Y0NvZGVWYWxpZGF0aW9uKCkge1xuICAgICAgICBsZXQgdXNlcklucHV0ID0gY3ZjQ29kZS52YWx1ZTtcbiAgICAgICAgbGV0IGVycm9yTWVzc2FnZSA9IGN2Y0NvZGUubmV4dEVsZW1lbnRTaWJsaW5nO1xuXG4gICAgICAgIGlmICh1c2VySW5wdXQgPT0gJycgJiYgY3ZjQ29kZS5oYXNBdHRyaWJ1dGUoJ2Vycm9yJykpIHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZS50ZXh0Q29udGVudCA9ICdDYW5cXCd0IGJlIGJsYW5rJztcbiAgICAgICAgICAgIHRoaXMudXNlckNWQyA9IG51bGw7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAodXNlcklucHV0ID09ICcnICYmICFjdmNDb2RlLmhhc0F0dHJpYnV0ZSgnZXJyb3InKSkge1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlLnRleHRDb250ZW50ID0gJ0NhblxcJ3QgYmUgYmxhbmsnO1xuICAgICAgICAgICAgY3ZjQ29kZS5zZXRBdHRyaWJ1dGUoJ2Vycm9yJywgJycpO1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlLnNldEF0dHJpYnV0ZSgnZXJyb3InLCAnJyk7XG4gICAgICAgICAgICB0aGlzLnVzZXJDVkMgPSBudWxsO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHVzZXJJbnB1dCAhPT0gJycgJiYgY3ZjQ29kZS5oYXNBdHRyaWJ1dGUoJ2Vycm9yJykgJiYgIWN2Y1JlZ2V4LnRlc3QodXNlcklucHV0KSkge1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlLnRleHRDb250ZW50ID0gJ1dyb25nIGZvcm1hdCwgbnVtYmVycyBvbmx5JztcbiAgICAgICAgICAgIHRoaXMudXNlckNWQyA9IG51bGw7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAodXNlcklucHV0ICE9PSAnJyAmJiBjdmNDb2RlLmhhc0F0dHJpYnV0ZSgnZXJyb3InKSAmJiBjdmNSZWdleC50ZXN0KHVzZXJJbnB1dCkpIHtcbiAgICAgICAgICAgIGN2Y0NvZGUucmVtb3ZlQXR0cmlidXRlKCdlcnJvcicpO1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlLnJlbW92ZUF0dHJpYnV0ZSgnZXJyb3InKTtcbiAgICAgICAgICAgIHRoaXMudXNlckNWQyA9IHVzZXJJbnB1dDtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKHVzZXJJbnB1dCAhPT0gJycgJiYgIWN2Y0NvZGUuaGFzQXR0cmlidXRlKCdlcnJvcicpICYmIGN2Y1JlZ2V4LnRlc3QodXNlcklucHV0KSkge1xuICAgICAgICAgICAgdGhpcy51c2VyQ1ZDID0gdXNlcklucHV0O1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxubGV0IG15Rm9ybSA9IG5ldyBGb3JtKCk7XG5cbndpbmRvdy5vbmxvYWQgPSBmb3JtUmVzZXQoKTtcblxuZnVuY3Rpb24gZm9ybVJlc2V0KCkge1xuICAgIGNhcmRIb2xkZXJOYW1lLnZhbHVlID0gJyc7XG4gICAgY2FyZEhvbGRlck51bWJlci52YWx1ZSA9ICcnO1xuICAgIGV4cERhdGVNb250aC52YWx1ZSA9ICcnO1xuICAgIGV4cERhdGVZZWFyLnZhbHVlID0gJyc7XG4gICAgY3ZjQ29kZS52YWx1ZSA9ICcnO1xuICAgIGNhcmROYW1lSW50ZXJhY3RpdmUudGV4dENvbnRlbnQgPSAnLS0tLSAtLS0tLS0tLS0nO1xuICAgIGNhcmROdW1JbnRlcmFjdGl2ZS50ZXh0Q29udGVudCA9ICctLS0tIC0tLS0gLS0tLSAtLS0tJztcbiAgICBleHBEYXRlTW9udGhJbnRlcmFjdGl2ZS50ZXh0Q29udGVudCA9ICctLSc7XG4gICAgZXhwRGF0ZVllYXJJbnRlcmFjdGl2ZS50ZXh0Q29udGVudCA9ICctLSc7XG4gICAgY2FyZEJhY2tJbnRlcmFjdGl2ZS50ZXh0Q29udGVudCA9ICctLS0nO1xufVxuXG50aGlzRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBteUZvcm0ubmFtZVZhbGlkYXRpb24oKTtcbiAgICBteUZvcm0ubnVtYmVyVmFsaWRhdGlvbigpO1xuICAgIG15Rm9ybS5leHBWYWxpZGF0aW9uKCk7XG4gICAgbXlGb3JtLmN2Y0NvZGVWYWxpZGF0aW9uKCk7XG5cbiAgICBpZiAoXG4gICAgICAgIG15Rm9ybS5jYXJkTmFtZSAhPT0gbnVsbCBcbiAgICAgICAgJiYgbXlGb3JtLmNhcmROdW1iZXIgIT09IG51bGwgXG4gICAgICAgICYmIG15Rm9ybS5leHBNb250aCAhPT0gbnVsbCBcbiAgICAgICAgJiYgbXlGb3JtLmV4cFllYXIgIT09IG51bGwgXG4gICAgICAgICYmIG15Rm9ybS51c2VyQ1ZDICE9PSBudWxsKSBcbiAgICB7XG4gICAgICAgIGluY29tcGxldGVTdGF0ZUZvcm0uc2V0QXR0cmlidXRlKCdjb21wbGV0ZScsICcnKTtcbiAgICAgICAgY29tcGxldGVTdGF0ZUZvcm0uc2V0QXR0cmlidXRlKCdjb21wbGV0ZScsICcnKTtcbiAgICB9XG59KVxuXG5mdW5jdGlvbiBjYXJkTmFtZVRleHRDaGFuZ2UoKSB7XG4gICAgbGV0IGlucHV0VGV4dCA9IGNhcmRIb2xkZXJOYW1lLnZhbHVlO1xuICAgIGNhcmROYW1lSW50ZXJhY3RpdmUudGV4dENvbnRlbnQgPSBpbnB1dFRleHQ7XG59XG5cbmNhcmRIb2xkZXJOYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgY2FyZE5hbWVUZXh0Q2hhbmdlKTtcblxuZnVuY3Rpb24gY2FyZE51bVRleHRDaGFuZ2UoKSB7XG4gICAgbGV0IGlucHV0VGV4dCA9IGNhcmRIb2xkZXJOdW1iZXIudmFsdWU7XG4gICAgY2FyZE51bUludGVyYWN0aXZlLnRleHRDb250ZW50ID0gaW5wdXRUZXh0O1xufVxuXG5jYXJkSG9sZGVyTnVtYmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgY2FyZE51bVRleHRDaGFuZ2UpO1xuXG5mdW5jdGlvbiBjYXJkRXhwTW9udGhDaGFuZ2UoKSB7XG4gICAgbGV0IGlucHV0VGV4dCA9IGV4cERhdGVNb250aC52YWx1ZTtcbiAgICBleHBEYXRlTW9udGhJbnRlcmFjdGl2ZS50ZXh0Q29udGVudCA9IGlucHV0VGV4dDtcbn1cblxuZXhwRGF0ZU1vbnRoLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgY2FyZEV4cE1vbnRoQ2hhbmdlKTtcblxuZnVuY3Rpb24gY2FyZEV4cFllYXJDaGFuZ2UoKSB7XG4gICAgbGV0IGlucHV0VGV4dCA9IGV4cERhdGVZZWFyLnZhbHVlO1xuICAgIGV4cERhdGVZZWFySW50ZXJhY3RpdmUudGV4dENvbnRlbnQgPSBpbnB1dFRleHQ7XG59XG5cbmV4cERhdGVZZWFyLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgY2FyZEV4cFllYXJDaGFuZ2UpO1xuXG5mdW5jdGlvbiBiYWNrQ1ZDQ29kZUNoYW5nZSgpIHtcbiAgICBsZXQgaW5wdXRUZXh0ID0gY3ZjQ29kZS52YWx1ZTtcbiAgICBjYXJkQmFja0ludGVyYWN0aXZlLnRleHRDb250ZW50ID0gaW5wdXRUZXh0O1xufVxuXG5jdmNDb2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgYmFja0NWQ0NvZGVDaGFuZ2UpO1xuXG5mdW5jdGlvbiBnb0JhY2tUb01haW5QYWdlKCkge1xuICAgIGZvcm1SZXNldCgpO1xuICAgIGNvbXBsZXRlU3RhdGVGb3JtLnJlbW92ZUF0dHJpYnV0ZSgnY29tcGxldGUnKTtcbiAgICBpbmNvbXBsZXRlU3RhdGVGb3JtLnJlbW92ZUF0dHJpYnV0ZSgnY29tcGxldGUnKTtcbn1cblxuY29udGludWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnb0JhY2tUb01haW5QYWdlKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=