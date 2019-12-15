webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.tsx");
/* harmony import */ var _components_ask_range_prompt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ask-range-prompt */ "./components/ask-range-prompt.tsx");
/* harmony import */ var _components_ask_exclude_prompt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ask-exclude-prompt */ "./components/ask-exclude-prompt.tsx");
/* harmony import */ var _components_slot_machine__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/slot-machine */ "./components/slot-machine.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");


var _jsxFileName = "/Users/cmmadnat/krungthai-axe-dist/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2__["createElement"];







var IndexPage = function IndexPage() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__["useState"](0),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      lowerBound = _React$useState2[0],
      setLowerBound = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2__["useState"](2000),
      _React$useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState3, 2),
      upperBound = _React$useState4[0],
      setUpperBound = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_2__["useState"]([]),
      _React$useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState5, 2),
      excludeValues = _React$useState6[0],
      setExcludeValues = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_2__["useState"]('1234'),
      _React$useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState7, 2),
      currentText = _React$useState8[0],
      setCurrentText = _React$useState8[1];

  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_2__["useState"](false),
      _React$useState10 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState9, 2),
      turning = _React$useState10[0],
      setTurning = _React$useState10[1];

  var getValue = function getValue(lb, ub) {
    setLowerBound(lb);
    setUpperBound(ub);
  };

  var excluding = function excluding(values) {
    setExcludeValues(values);
  };

  var random = function random() {
    var r = [];

    for (var i = lowerBound; i <= upperBound; i++) {
      if (excludeValues.indexOf(i) === -1) r.push(i);
    }

    var d = new Date();
    var offset = d.getTime() % r.length;
    var newValue = r[offset];
    setExcludeValues([].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(excludeValues), [newValue]));
    var t = 10000 + newValue + '';
    setCurrentText('9999');
    setTimeout(function () {
      setCurrentText(t.substr(1));
    }, 3000);
    setTurning(true);
    setTimeout(function () {
      setTurning(false);
    }, 5000);
  };

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Krungthai Axa Distribution Day",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx(_components_ask_range_prompt__WEBPACK_IMPORTED_MODULE_4__["default"], {
    selectValue: getValue,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), __jsx(_components_ask_exclude_prompt__WEBPACK_IMPORTED_MODULE_5__["default"], {
    excluding: excluding,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), __jsx("div", {
    className: "cover-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("img", {
    style: {
      width: '100%'
    },
    src: "/static/bg.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), __jsx("div", {
    className: "slot-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx(_components_slot_machine__WEBPACK_IMPORTED_MODULE_6__["default"], {
    text: currentText,
    turning: turning,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), __jsx("div", {
    style: {
      padding: 10,
      textAlign: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    variant: "contained",
    color: "primary",
    onClick: random,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "Random")))));
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ })

})
//# sourceMappingURL=index.js.5ce1752cb848e8e909d4.hot-update.js.map