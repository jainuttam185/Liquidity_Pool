"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ethereum/factory */ \"./ethereum/factory.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.module.css */ \"./pages/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nclass CampaignIndex extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n    /* static async getIntialProps(){\r\n\r\n       onSubmit=async (event)=>{\r\n            event.preventDefault();\r\n\r\n            const accounts=await web3.eth.getAccounts();\r\n            await factory.methods.swap(this.state.token)\r\n            .send({\r\n                from : accounts[0]\r\n            });\r\n       };\r\n    }*/ render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().top),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().box),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().input1),\n                        placeholder: \"0\",\n                        value: this.state.token,\n                        onChange: (event)=>this.setState({\n                                token: event.target.value\n                            })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Examples\\\\examples\\\\kickstart\\\\pages\\\\index.js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().buttondiv),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().input2),\n                                placeholder: \"0\",\n                                readOnly: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Examples\\\\examples\\\\kickstart\\\\pages\\\\index.js\",\n                                lineNumber: 44,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().button),\n                                onClick: this.onSubmit,\n                                children: \"Swap\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Examples\\\\examples\\\\kickstart\\\\pages\\\\index.js\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Examples\\\\examples\\\\kickstart\\\\pages\\\\index.js\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Examples\\\\examples\\\\kickstart\\\\pages\\\\index.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Examples\\\\examples\\\\kickstart\\\\pages\\\\index.js\",\n            lineNumber: 34,\n            columnNumber: 5\n        }, this);\n    }\n    constructor(...args){\n        super(...args);\n        this.state = {\n            token: \"\"\n        };\n        this.onSubmit = async (event)=>{\n            event.preventDefault();\n            const accounts = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__[\"default\"].eth.getAccounts();\n            await _ethereum_factory__WEBPACK_IMPORTED_MODULE_2__[\"default\"].methods.swap(\"0x21408DbA4e1974AC1dDB426630fe94bf6c4c66c7\", this.state.token).send({\n                from: accounts[0]\n            });\n        };\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (CampaignIndex);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXNDO0FBQ0k7QUFDTjtBQUNJO0FBRXhDLE1BQU1LLHNCQUFzQkosNENBQVNBO0lBYWxDOzs7Ozs7Ozs7OztLQVdFLEdBQ0RLLFNBQVE7UUFDSixxQkFFSiw4REFBQ0M7WUFBSUMsV0FBV0osOERBQVU7c0JBQ3hCLDRFQUFDRztnQkFBSUMsV0FBV0osOERBQVU7O2tDQUN4Qiw4REFBQ087d0JBQ0NDLE1BQUs7d0JBQ0xKLFdBQVdKLGlFQUFhO3dCQUN4QlUsYUFBWTt3QkFDWkMsT0FBTyxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsS0FBSzt3QkFDdkJDLFVBQVVDLENBQUFBLFFBQVMsSUFBSSxDQUFDQyxRQUFRLENBQUM7Z0NBQUNILE9BQU1FLE1BQU1FLE1BQU0sQ0FBQ04sS0FBSzs0QkFBQTs7Ozs7O2tDQUU1RCw4REFBQ1I7d0JBQUlDLFdBQVdKLG9FQUFnQjs7MENBQzlCLDhEQUFDTztnQ0FDQ0MsTUFBSztnQ0FDTEosV0FBV0osaUVBQWE7Z0NBQ3hCVSxhQUFZO2dDQUNaVSxRQUFROzs7Ozs7MENBRVYsOERBQUNDO2dDQUFPakIsV0FBV0osaUVBQWE7Z0NBQUVzQixTQUFTLElBQUksQ0FBQ0MsUUFBUTswQ0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFLaEU7OzthQWhEQVgsUUFBUTtZQUFDQyxPQUFNO1FBQUU7YUFFakJVLFdBQVMsT0FBT1I7WUFDWkEsTUFBTVMsY0FBYztZQUVwQixNQUFNQyxXQUFTLE1BQU0xQiwwREFBUSxDQUFDNEIsV0FBVztZQUN6QyxNQUFNN0IsaUVBQWUsQ0FBQytCLElBQUksQ0FBQyw4Q0FBNkMsSUFBSSxDQUFDakIsS0FBSyxDQUFDQyxLQUFLLEVBQ3ZGaUIsSUFBSSxDQUFDO2dCQUNGQyxNQUFPTixRQUFRLENBQUMsRUFBRTtZQUN0QjtRQUNMOztBQXVDSDtBQUVBLCtEQUFleEIsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGZhY3RvcnkgZnJvbSBcIi4uL2V0aGVyZXVtL2ZhY3RvcnlcIjtcclxuaW1wb3J0IHdlYjMgZnJvbSBcIi4uL2V0aGVyZXVtL3dlYjNcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9pbmRleC5tb2R1bGUuY3NzXCI7XHJcblxyXG5jbGFzcyBDYW1wYWlnbkluZGV4IGV4dGVuZHMgQ29tcG9uZW50e1xyXG4gICAgc3RhdGUgPSB7dG9rZW46XCJcIn07XHJcbiAgICBcclxuICAgIG9uU3VibWl0PWFzeW5jIChldmVudCk9PntcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBjb25zdCBhY2NvdW50cz1hd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG4gICAgICAgIGF3YWl0IGZhY3RvcnkubWV0aG9kcy5zd2FwKFwiMHgyMTQwOERiQTRlMTk3NEFDMWREQjQyNjYzMGZlOTRiZjZjNGM2NmM3XCIsdGhpcy5zdGF0ZS50b2tlbilcclxuICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgIGZyb20gOiBhY2NvdW50c1swXVxyXG4gICAgICAgIH0pO1xyXG4gICB9O1xyXG5cclxuICAgLyogc3RhdGljIGFzeW5jIGdldEludGlhbFByb3BzKCl7XHJcblxyXG4gICAgICAgb25TdWJtaXQ9YXN5bmMgKGV2ZW50KT0+e1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYWNjb3VudHM9YXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcclxuICAgICAgICAgICAgYXdhaXQgZmFjdG9yeS5tZXRob2RzLnN3YXAodGhpcy5zdGF0ZS50b2tlbilcclxuICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgZnJvbSA6IGFjY291bnRzWzBdXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgfTtcclxuICAgIH0qL1xyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICBcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG9wfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib3h9PlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dDF9XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIjBcIlxyXG4gICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudG9rZW59XHJcbiAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gdGhpcy5zZXRTdGF0ZSh7dG9rZW46ZXZlbnQudGFyZ2V0LnZhbHVlfSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbmRpdn0+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0Mn1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIwXCJcclxuICAgICAgICAgICAgcmVhZE9ubHlcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0gb25DbGljaz17dGhpcy5vblN1Ym1pdH0+U3dhcDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhbXBhaWduSW5kZXg7XHJcblxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJmYWN0b3J5Iiwid2ViMyIsInN0eWxlcyIsIkNhbXBhaWduSW5kZXgiLCJyZW5kZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJ0b3AiLCJib3giLCJpbnB1dCIsInR5cGUiLCJpbnB1dDEiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwic3RhdGUiLCJ0b2tlbiIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJzZXRTdGF0ZSIsInRhcmdldCIsImJ1dHRvbmRpdiIsImlucHV0MiIsInJlYWRPbmx5IiwiYnV0dG9uIiwib25DbGljayIsIm9uU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJhY2NvdW50cyIsImV0aCIsImdldEFjY291bnRzIiwibWV0aG9kcyIsInN3YXAiLCJzZW5kIiwiZnJvbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});