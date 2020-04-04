webpackHotUpdate("static\\development\\pages\\post.js",{

/***/ "./pages/post.js":
/*!***********************!*\
  !*** ./pages/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);


var _this = undefined,
    _jsxFileName = "E:\\workspace\\react-colt\\next\\first-next\\pages\\post.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


 // const Post = ({ router }) => (
//   <h1>You are looking at Post# {router.query.id}</h1>
// );
// export default withRouter(Post);

var Post = function Post(_ref) {
  var comments = _ref.comments,
      id = _ref.id;
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
  }, "You are looking at Post#", id), __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, comments.map(function (comment) {
    return __jsx("li", {
      key: comment.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 11
      }
    }, comment.body);
  })));
}; // 1 way is this other is using withRouter


Post.getInitialProps = function _callee(_ref2) {
  var query, _await$axios$get, data;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          query = _ref2.query;
          _context.next = 3;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("https://jsonplaceholder.typicode.com/comments?postId=".concat(query.id)));

        case 3:
          _await$axios$get = _context.sent;
          data = _await$axios$get.data;
          console.log(data);
          return _context.abrupt("return", {
            comments: data,
            id: query.id
          });

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ })

})
//# sourceMappingURL=post.js.c0545750b563e2c25e27.hot-update.js.map