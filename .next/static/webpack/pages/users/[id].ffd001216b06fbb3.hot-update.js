"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/users/[id]",{

/***/ "./pages/users/[id].js":
/*!*****************************!*\
  !*** ./pages/users/[id].js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ User; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_User_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/User.module.scss */ \"./styles/User.module.scss\");\n/* harmony import */ var _styles_User_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_User_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nvar __N_SSP = true;\nfunction User(param) {\n    let { user  } = param;\n    _s();\n    const { query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_User_module_scss__WEBPACK_IMPORTED_MODULE_2___default().user),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: [\n                \"Пользователь с id \",\n                query.id\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/admin/web/Backend/ut-next-js-1/pages/users/[id].js\",\n            lineNumber: 8,\n            columnNumber: 12\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/admin/web/Backend/ut-next-js-1/pages/users/[id].js\",\n        lineNumber: 7,\n        columnNumber: 9\n    }, this);\n}\n_s(User, \"VR2mp68S/cRvdqdH5htLccMcbak=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = User;\nvar _c;\n$RefreshReg$(_c, \"User\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2Vycy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBK0M7QUFDRzs7QUFDbkMsU0FBU0csS0FBTSxLQUFNLEVBQUM7UUFBUCxFQUFDQyxLQUFJLEVBQUMsR0FBTjs7SUFDM0IsTUFBTSxFQUFDQyxNQUFLLEVBQUMsR0FBR0osc0RBQVNBO0lBRXhCLHFCQUNJLDhEQUFDSztRQUFJQyxXQUFXTCxzRUFBVztrQkFDeEIsNEVBQUNNOztnQkFBRztnQkFDZUgsTUFBTUksRUFBRTs7Ozs7Ozs7Ozs7O0FBSXRDLENBQUM7R0FWdUJOOztRQUNMRixrREFBU0E7OztLQURKRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy91c2Vycy9baWRdLmpzPzE3ODQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJvdXRlciwgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvVXNlci5tb2R1bGUuc2NzcydcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXIgKHt1c2VyfSl7XG4gICBjb25zdCB7cXVlcnl9ID0gdXNlUm91dGVyKClcblxuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyfT5cbiAgICAgICAgICAgPGgxPlxuICAgICAgICAgICDQn9C+0LvRjNC30L7QstCw0YLQtdC70Ywg0YEgaWQge3F1ZXJ5LmlkfVxuICAgICAgICAgICAgPC9oMT4gXG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoe3BhcmFtc30pIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnMvJHtwYXJhbXMuaWR9JylcbiAgICBjb25zdCB1c2VycyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge3VzZXJ9LCAvLyB3aWxsIGJlIHBhc3NlZCB0byB0aGUgcGFnZSBjb21wb25lbnQgYXMgcHJvcHNcbiAgICB9O1xuICB9XG5cblxuIl0sIm5hbWVzIjpbIlJvdXRlciIsInVzZVJvdXRlciIsInN0eWxlcyIsIlVzZXIiLCJ1c2VyIiwicXVlcnkiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/users/[id].js\n"));

/***/ })

});