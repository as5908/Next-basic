webpackHotUpdate("static\\development\\pages\\post.js",{

/***/ "./pages/post.js":
/*!***********************!*\
  !*** ./pages/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
    _jsxFileName = "E:\\workspace\\react-colt\\next\\first-next\\pages\\post.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Post = function Post(_ref) {
  var query = _ref.query;
  return __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 29
    }
  }, "You are looking at Post# ", query.id);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(Post)); // const Post = ({ id }) => {
//   return (
//     <div>
//       <h1>You are looking at Post#{id}</h1>
//     </div>
//   );
// };
// 1 way is this other is using withRouter
// Post.getInitialProps = async ({ query }) => {
//   const { data } = await axios.get(
//     'https://jsonplaceholder.typicode.com/posts'
//   );
//   return query;
// };
// export default Post;

/***/ })

})
//# sourceMappingURL=post.js.f2f2ca3d10bc14ce913d.hot-update.js.map