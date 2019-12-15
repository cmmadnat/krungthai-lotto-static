webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/slot-machine.tsx":
/*!*************************************!*\
  !*** ./components/slot-machine.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_slot_machine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-slot-machine */ "./node_modules/react-slot-machine/lib/Slot.js");
/* harmony import */ var react_slot_machine__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_slot_machine__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/Users/cmmadnat/krungthai-axe-dist/components/slot-machine.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
// import Reel from 'react-reel'
 //  @ts-ignore

 //@ts-ignore



var SlotBox = function SlotBox(_ref) {
  var _target = _ref.target,
      turning = _ref.turning;
  return __jsx(react_slot_machine__WEBPACK_IMPORTED_MODULE_3___default.a
  /* props */
  , {
    className: "slot-box",
    target: function target() {
      return _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(_target);
    },
    times: 5,
    duration: 5000,
    turning: turning,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, list.map(function (value) {
    return __jsx("div", {
      className: "reel",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, value);
  }) // Children of `Slot` be sure to be `width` and `height` are 100%.
  );
};

var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

var SlotMachine = function SlotMachine(_ref2) {
  var text = _ref2.text,
      turning = _ref2.turning;
  console.log(text);
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    spacing: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Paper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx(SlotBox, {
    target: text.substring(0, 1),
    turning: turning,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Paper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx(SlotBox, {
    target: text.substring(1, 2),
    turning: turning,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Paper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx(SlotBox, {
    target: text.substring(2, 3),
    turning: turning,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Paper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx(SlotBox, {
    target: text.substring(3, 4),
    turning: turning,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (SlotMachine);

/***/ })

})
//# sourceMappingURL=index.js.b81e25cee7e2b9088a5a.hot-update.js.map