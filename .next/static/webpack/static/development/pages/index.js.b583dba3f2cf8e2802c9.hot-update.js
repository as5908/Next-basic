webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);


var _this = undefined,
    _jsxFileName = "E:\\workspace\\react-colt\\next\\first-next\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var Index = function Index(_ref) {
  var posts = _ref.posts;
  console.log(posts); // useEffect(() => {
  //   console.log('Fetching your data in useEffect!!'); // happens on client side, mounting only happens in DOM i.e client side
  // });

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, "Our Index Page"), __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, posts.map(function (post) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      key: post.id,
      href: "/post",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 11
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }
    }, post.title));
  })));
};

Index.getInitialProps = function _callee() {
  var _await$axios$get, data;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('https://jsonplaceholder.typicode.com/posts'));

        case 2:
          _await$axios$get = _context.sent;
          data = _await$axios$get.data;
          console.log(data[0]);
          return _context.abrupt("return", {
            posts: data,
            mood: 'HAPPY'
          });

        case 6:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.b583dba3f2cf8e2802c9.hot-update.js.map