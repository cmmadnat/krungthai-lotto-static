webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/slot-machine.tsx":
/*!*************************************!*\
  !*** ./components/slot-machine.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_slot_machine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slot-machine */ "./node_modules/react-slot-machine/lib/Slot.js");
/* harmony import */ var react_slot_machine__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slot_machine__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/cmmadnat/krungthai-axe-dist/components/slot-machine.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// import Reel from 'react-reel'
 //  @ts-ignore

 //@ts-ignore


var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

var SlotMachine = function SlotMachine(_ref) {
  var text = _ref.text;
  console.log(text);
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    spacing: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Paper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx(react_slot_machine__WEBPACK_IMPORTED_MODULE_2___default.a
  /* props */
  , {
    className: "slot-box",
    target: function target() {
      return text.substring(0, 1);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, list.map(function (value) {
    return __jsx("div", {
      className: "reel",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, value);
  }) // Children of `Slot` be sure to be `width` and `height` are 100%.
  ))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Paper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Paper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Paper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (SlotMachine);

/***/ })

})
//# sourceMappingURL=index.js.23f2792dee60b69f33c4.hot-update.js.map