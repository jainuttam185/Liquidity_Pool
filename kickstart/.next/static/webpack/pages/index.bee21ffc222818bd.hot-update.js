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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ethereum/factory */ \"./ethereum/factory.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.module.css */ \"./pages/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n//let reserveIn;\n//let reserveOut;\nclass CampaignIndex extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n    /* static async getIntialProps(){\r\n\r\n       onSubmit=async (event)=>{\r\n            event.preventDefault();\r\n\r\n            const accounts=await web3.eth.getAccounts();\r\n            await factory.methods.swap(this.state.token)\r\n            .send({\r\n                from : accounts[0]\r\n            });\r\n       };\r\n    }*/ render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().full),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"Welcome to the Liquidty Pool Swap\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Examples\\\\examples\\\\kickstart\\\\pages\\\\index.js\",\n                    lineNumber: 46,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().top),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: \"Welcome to the Liquidty Pool Swap\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Examples\\\\examples\\\\kickstart\\\\pages\\\\index.js\",\n                            lineNumber: 48,\n                            columnNumber: 5\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().box),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().token1),\n                                    children: \"Token 2\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Examples\\\\examples\\\\kickstart\\\\pages\\\\index.js\",\n                                    lineNumber: 50,\n                                    columnNumber: 7\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"number\",\n                                    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().input1),\n                                    placeholder: \"0\",\n                                    value: this.state.token,\n                                    onChange: (event)=>this.setState({\n                                            token: event.target.value,\n                                            outputValue: Math.floor(1100 * (event.target.value * 997) / 1000 / (910 + event.target.value * 997 / 1000))\n                                        })\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Examples\\\\examples\\\\kickstart\\\\pages\\\\index.js\",\n                                    lineNumber: 51,\n                                    columnNumber: 9\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().token1),\n                                    children: \"Token 1\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Examples\\\\examples\\\\kickstart\\\\pages\\\\index.js\",\n                                    lineNumber: 60,\n                                    columnNumber: 9\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().buttondiv),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"number\",\n                                            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().input2),\n                                            placeholder: \"0\",\n                                            value: this.state.outputValue,\n                                            readOnly: true\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Examples\\\\examples\\\\kickstart\\\\pages\\\\index.js\",\n                                            lineNumber: 62,\n                                            columnNumber: 11\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().button),\n                                                onClick: this.onSubmit,\n                                                children: \"Swap\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Examples\\\\examples\\\\kickstart\\\\pages\\\\index.js\",\n                                                lineNumber: 70,\n                                                columnNumber: 11\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Examples\\\\examples\\\\kickstart\\\\pages\\\\index.js\",\n                                            lineNumber: 69,\n                                            columnNumber: 11\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Examples\\\\examples\\\\kickstart\\\\pages\\\\index.js\",\n                                    lineNumber: 61,\n                                    columnNumber: 9\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Examples\\\\examples\\\\kickstart\\\\pages\\\\index.js\",\n                            lineNumber: 49,\n                            columnNumber: 7\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Examples\\\\examples\\\\kickstart\\\\pages\\\\index.js\",\n                    lineNumber: 47,\n                    columnNumber: 5\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Examples\\\\examples\\\\kickstart\\\\pages\\\\index.js\",\n            lineNumber: 45,\n            columnNumber: 5\n        }, this);\n    }\n    constructor(...args){\n        super(...args);\n        this.state = {\n            token: \"\",\n            outputValue: \"\"\n        };\n        /*async componentDidMount(){\r\n        reserveIn = await factory.methods.reserve0.call();\r\n        reserveOut = await factory.methods.reserve1.call();\r\n        console.log(parseInt(reserveIn,2));\r\n    }*/ this.onSubmit = async (event)=>{\n            event.preventDefault();\n            const accounts = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__[\"default\"].eth.getAccounts();\n            await _ethereum_factory__WEBPACK_IMPORTED_MODULE_2__[\"default\"].methods.swap(\"0x8CCfAc6cDe3900033ECb721d94ee71596533cDC7\", this.state.token).send({\n                from: accounts[0]\n            });\n        };\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (CampaignIndex);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXNDO0FBQ0k7QUFDTjtBQUNJO0FBR3hDLGdCQUFnQjtBQUNoQixpQkFBaUI7QUFFakIsTUFBTUssc0JBQXNCSiw0Q0FBU0E7SUFxQmxDOzs7Ozs7Ozs7OztLQVdFLEdBQ0RLLFNBQVE7UUFDSixxQkFDSiw4REFBQ0M7WUFBSUMsV0FBV0osK0RBQVc7OzhCQUN6Qiw4REFBQ0c7OEJBQUk7Ozs7Ozs4QkFDUCw4REFBQ0E7b0JBQUlDLFdBQVdKLDhEQUFVOztzQ0FDMUIsOERBQUNHO3NDQUFJOzs7Ozs7c0NBQ0gsOERBQUNBOzRCQUFJQyxXQUFXSiw4REFBVTs7OENBQzFCLDhEQUFDRztvQ0FBSUMsV0FBV0osaUVBQWE7OENBQUU7Ozs7Ozs4Q0FDN0IsOERBQUNTO29DQUNDQyxNQUFLO29DQUNMTixXQUFXSixpRUFBYTtvQ0FDeEJZLGFBQVk7b0NBQ1pDLE9BQU8sSUFBSSxDQUFDQyxLQUFLLENBQUNDLEtBQUs7b0NBQ3ZCQyxVQUFVQyxDQUFBQSxRQUFTLElBQUksQ0FBQ0MsUUFBUSxDQUFDOzRDQUFDSCxPQUFNRSxNQUFNRSxNQUFNLENBQUNOLEtBQUs7NENBQUNPLGFBQ3pEQyxLQUFLQyxLQUFLLENBQUMsT0FBUyxPQUFPSCxNQUFNLENBQUNOLEtBQUssR0FBSSxHQUFFLElBQUssT0FBUyxPQUFNLE1BQVFNLE1BQU0sQ0FBQ04sS0FBSyxHQUFJLE1BQU8sSUFBRzt3Q0FDdkc7Ozs7Ozs4Q0FFQSw4REFBQ1Y7b0NBQUlDLFdBQVdKLGlFQUFhOzhDQUFFOzs7Ozs7OENBQy9CLDhEQUFDRztvQ0FBSUMsV0FBV0osb0VBQWdCOztzREFDOUIsOERBQUNTOzRDQUNDQyxNQUFLOzRDQUNMTixXQUFXSixpRUFBYTs0Q0FDeEJZLGFBQVk7NENBQ1pDLE9BQU8sSUFBSSxDQUFDQyxLQUFLLENBQUNNLFdBQVc7NENBQzdCSyxRQUFROzs7Ozs7c0RBRVYsOERBQUN0QjtzREFDRCw0RUFBQ3VCO2dEQUFPdEIsV0FBV0osaUVBQWE7Z0RBQUUyQixTQUFTLElBQUksQ0FBQ0MsUUFBUTswREFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFPaEU7OzthQWxFQWQsUUFBUTtZQUFDQyxPQUFNO1lBQUlLLGFBQWE7UUFBRTtRQUVsQzs7OztLQUlDLFFBRURRLFdBQVMsT0FBT1g7WUFDWkEsTUFBTVksY0FBYztZQUVwQixNQUFNQyxXQUFTLE1BQU0vQiwwREFBUSxDQUFDaUMsV0FBVztZQUN6QyxNQUFNbEMsaUVBQWUsQ0FBQ29DLElBQUksQ0FBQyw4Q0FBNkMsSUFBSSxDQUFDcEIsS0FBSyxDQUFDQyxLQUFLLEVBQ3ZGb0IsSUFBSSxDQUFDO2dCQUNGQyxNQUFPTixRQUFRLENBQUMsRUFBRTtZQUN0QjtRQUNMOztBQW1ESDtBQUVBLCtEQUFlN0IsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGZhY3RvcnkgZnJvbSBcIi4uL2V0aGVyZXVtL2ZhY3RvcnlcIjtcclxuaW1wb3J0IHdlYjMgZnJvbSBcIi4uL2V0aGVyZXVtL3dlYjNcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9pbmRleC5tb2R1bGUuY3NzXCI7XHJcblxyXG5cclxuLy9sZXQgcmVzZXJ2ZUluO1xyXG4vL2xldCByZXNlcnZlT3V0O1xyXG5cclxuY2xhc3MgQ2FtcGFpZ25JbmRleCBleHRlbmRzIENvbXBvbmVudHtcclxuICAgIHN0YXRlID0ge3Rva2VuOlwiXCIsIG91dHB1dFZhbHVlOiBcIlwifTtcclxuXHJcbiAgICAvKmFzeW5jIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgcmVzZXJ2ZUluID0gYXdhaXQgZmFjdG9yeS5tZXRob2RzLnJlc2VydmUwLmNhbGwoKTtcclxuICAgICAgICByZXNlcnZlT3V0ID0gYXdhaXQgZmFjdG9yeS5tZXRob2RzLnJlc2VydmUxLmNhbGwoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhwYXJzZUludChyZXNlcnZlSW4sMikpO1xyXG4gICAgfSovXHJcbiAgICBcclxuICAgIG9uU3VibWl0PWFzeW5jIChldmVudCk9PntcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBjb25zdCBhY2NvdW50cz1hd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG4gICAgICAgIGF3YWl0IGZhY3RvcnkubWV0aG9kcy5zd2FwKFwiMHg4Q0NmQWM2Y0RlMzkwMDAzM0VDYjcyMWQ5NGVlNzE1OTY1MzNjREM3XCIsdGhpcy5zdGF0ZS50b2tlbilcclxuICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgIGZyb20gOiBhY2NvdW50c1swXVxyXG4gICAgICAgIH0pO1xyXG4gICB9O1xyXG5cclxuICAgXHJcblxyXG4gICAvKiBzdGF0aWMgYXN5bmMgZ2V0SW50aWFsUHJvcHMoKXtcclxuXHJcbiAgICAgICBvblN1Ym1pdD1hc3luYyAoZXZlbnQpPT57XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBhY2NvdW50cz1hd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG4gICAgICAgICAgICBhd2FpdCBmYWN0b3J5Lm1ldGhvZHMuc3dhcCh0aGlzLnN0YXRlLnRva2VuKVxyXG4gICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICBmcm9tIDogYWNjb3VudHNbMF1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICB9O1xyXG4gICAgfSovXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mdWxsfT5cclxuICAgICAgPGRpdj5XZWxjb21lIHRvIHRoZSBMaXF1aWR0eSBQb29sIFN3YXA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG9wfT5cclxuICAgIDxkaXY+V2VsY29tZSB0byB0aGUgTGlxdWlkdHkgUG9vbCBTd2FwPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm94fT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50b2tlbjF9PlRva2VuIDI8L2Rpdj5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXQxfVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCIwXCJcclxuICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnRva2VufVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHRoaXMuc2V0U3RhdGUoe3Rva2VuOmV2ZW50LnRhcmdldC52YWx1ZSxvdXRwdXRWYWx1ZTogXHJcbiAgICAgICAgICAgIE1hdGguZmxvb3IoKDExMDAgKiAoKGV2ZW50LnRhcmdldC52YWx1ZSkgKiA5OTcpIC8gMTAwMCkgLyAoOTEwICsgKChldmVudC50YXJnZXQudmFsdWUpICogOTk3KSAvIDEwMDApKVxyXG4gICAgICAgIH0pfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50b2tlbjF9PlRva2VuIDE8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbmRpdn0+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0Mn1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIwXCJcclxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUub3V0cHV0VmFsdWV9XHJcbiAgICAgICAgICAgIHJlYWRPbmx5XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufSBvbkNsaWNrPXt0aGlzLm9uU3VibWl0fT5Td2FwPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhbXBhaWduSW5kZXg7XHJcblxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJmYWN0b3J5Iiwid2ViMyIsInN0eWxlcyIsIkNhbXBhaWduSW5kZXgiLCJyZW5kZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJmdWxsIiwidG9wIiwiYm94IiwidG9rZW4xIiwiaW5wdXQiLCJ0eXBlIiwiaW5wdXQxIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsInN0YXRlIiwidG9rZW4iLCJvbkNoYW5nZSIsImV2ZW50Iiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJvdXRwdXRWYWx1ZSIsIk1hdGgiLCJmbG9vciIsImJ1dHRvbmRpdiIsImlucHV0MiIsInJlYWRPbmx5IiwiYnV0dG9uIiwib25DbGljayIsIm9uU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJhY2NvdW50cyIsImV0aCIsImdldEFjY291bnRzIiwibWV0aG9kcyIsInN3YXAiLCJzZW5kIiwiZnJvbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});