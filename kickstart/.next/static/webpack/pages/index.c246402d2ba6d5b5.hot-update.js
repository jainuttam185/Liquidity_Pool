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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ethereum/factory */ \"./ethereum/factory.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.module.css */ \"./pages/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nclass CampaignIndex extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n    async componentDidMount() {\n        this.setState.reserveIn = await _ethereum_factory__WEBPACK_IMPORTED_MODULE_2__[\"default\"].methods.reserve0().call();\n        this.setState.reserveOut = await _ethereum_factory__WEBPACK_IMPORTED_MODULE_2__[\"default\"].methods.reserve1().call();\n        console.log(parseInt(this.state.reserveIn));\n        console.log(parseInt(this.state.reserveOut));\n    }\n    /* static async getIntialProps(){\r\n\r\n       onSubmit=async (event)=>{\r\n            event.preventDefault();\r\n\r\n            const accounts=await web3.eth.getAccounts();\r\n            await factory.methods.swap(this.state.token)\r\n            .send({\r\n                from : accounts[0]\r\n            });\r\n       };\r\n    }*/ render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().full),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().top),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().box),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().token1),\n                            children: \"Token 2\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Examples\\\\examples\\\\kickstart\\\\pages\\\\index.js\",\n                            lineNumber: 50,\n                            columnNumber: 7\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"number\",\n                            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().input1),\n                            placeholder: \"0\",\n                            value: this.state.token,\n                            onChange: (event)=>this.setState({\n                                    token: event.target.value,\n                                    outputValue: Math.floor(reserveOut * (event.target.value * 997) / 1000 / (reserveIn + event.target.value * 997 / 1000))\n                                })\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Examples\\\\examples\\\\kickstart\\\\pages\\\\index.js\",\n                            lineNumber: 51,\n                            columnNumber: 9\n                        }, this),\n                        console.log(\"hi\"),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().token1),\n                            children: \"Token 1\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Examples\\\\examples\\\\kickstart\\\\pages\\\\index.js\",\n                            lineNumber: 61,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().buttondiv),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"number\",\n                                    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().input2),\n                                    placeholder: \"0\",\n                                    value: this.state.outputValue,\n                                    readOnly: true\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Examples\\\\examples\\\\kickstart\\\\pages\\\\index.js\",\n                                    lineNumber: 63,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().button),\n                                        onClick: this.onSubmit,\n                                        children: \"Swap\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Examples\\\\examples\\\\kickstart\\\\pages\\\\index.js\",\n                                        lineNumber: 71,\n                                        columnNumber: 11\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Examples\\\\examples\\\\kickstart\\\\pages\\\\index.js\",\n                                    lineNumber: 70,\n                                    columnNumber: 11\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Examples\\\\examples\\\\kickstart\\\\pages\\\\index.js\",\n                            lineNumber: 62,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Examples\\\\examples\\\\kickstart\\\\pages\\\\index.js\",\n                    lineNumber: 49,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Examples\\\\examples\\\\kickstart\\\\pages\\\\index.js\",\n                lineNumber: 48,\n                columnNumber: 5\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Examples\\\\examples\\\\kickstart\\\\pages\\\\index.js\",\n            lineNumber: 47,\n            columnNumber: 5\n        }, this);\n    }\n    constructor(...args){\n        super(...args);\n        this.state = {\n            token: \"\",\n            outputValue: \"\",\n            reserveIn: \"\",\n            reserveOut: \"\"\n        };\n        this.onSubmit = async (event)=>{\n            event.preventDefault();\n            const accounts = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__[\"default\"].eth.getAccounts();\n            await _ethereum_factory__WEBPACK_IMPORTED_MODULE_2__[\"default\"].methods.swap(\"0x8CCfAc6cDe3900033ECb721d94ee71596533cDC7\", this.state.token).send({\n                from: accounts[0]\n            });\n        };\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (CampaignIndex);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXNDO0FBQ0k7QUFDTjtBQUNJO0FBS3hDLE1BQU1LLHNCQUFzQkosNENBQVNBO0lBR2pDLE1BQU1LLG9CQUFvQjtRQUN0QixJQUFJLENBQUNDLFFBQVEsQ0FBQ0MsU0FBUyxHQUFHLE1BQU1OLGlFQUFlLENBQUNRLFFBQVEsR0FBR0MsSUFBSTtRQUMvRCxJQUFJLENBQUNKLFFBQVEsQ0FBQ0ssVUFBVSxHQUFHLE1BQU1WLGlFQUFlLENBQUNXLFFBQVEsR0FBR0YsSUFBSTtRQUNoRUcsUUFBUUMsR0FBRyxDQUFDQyxTQUVwQixJQUFJLENBQUNDLEtBQUssQ0FBQ1QsU0FBUztRQUNaTSxRQUFRQyxHQUFHLENBQUNDLFNBQVMsSUFBSSxDQUFDQyxLQUFLLENBQUNMLFVBQVU7SUFDOUM7SUFjRDs7Ozs7Ozs7Ozs7S0FXRSxHQUNETSxTQUFRO1FBQ0oscUJBQ0osOERBQUNDO1lBQUlDLFdBQVdoQiwrREFBVztzQkFDM0IsNEVBQUNlO2dCQUFJQyxXQUFXaEIsOERBQVU7MEJBQ3hCLDRFQUFDZTtvQkFBSUMsV0FBV2hCLDhEQUFVOztzQ0FDMUIsOERBQUNlOzRCQUFJQyxXQUFXaEIsaUVBQWE7c0NBQUU7Ozs7OztzQ0FDN0IsOERBQUNxQjs0QkFDQ0MsTUFBSzs0QkFDTE4sV0FBV2hCLGlFQUFhOzRCQUN4QndCLGFBQVk7NEJBQ1pDLE9BQU8sSUFBSSxDQUFDWixLQUFLLENBQUNhLEtBQUs7NEJBQ3ZCQyxVQUFVQyxDQUFBQSxRQUFTLElBQUksQ0FBQ3pCLFFBQVEsQ0FBQztvQ0FBQ3VCLE9BQU1FLE1BQU1DLE1BQU0sQ0FBQ0osS0FBSztvQ0FBQ0ssYUFDekRDLEtBQUtDLEtBQUssQ0FBQyxhQUFlLE9BQU9ILE1BQU0sQ0FBQ0osS0FBSyxHQUFJLEdBQUUsSUFBSyxPQUFTckIsQ0FBQUEsWUFBWSxNQUFReUIsTUFBTSxDQUFDSixLQUFLLEdBQUksTUFBTyxJQUFHO2dDQUNuSDs7Ozs7O3dCQUVDZixRQUFRQyxHQUFHLENBQUM7c0NBQ2IsOERBQUNJOzRCQUFJQyxXQUFXaEIsaUVBQWE7c0NBQUU7Ozs7OztzQ0FDL0IsOERBQUNlOzRCQUFJQyxXQUFXaEIsb0VBQWdCOzs4Q0FDOUIsOERBQUNxQjtvQ0FDQ0MsTUFBSztvQ0FDTE4sV0FBV2hCLGlFQUFhO29DQUN4QndCLGFBQVk7b0NBQ1pDLE9BQU8sSUFBSSxDQUFDWixLQUFLLENBQUNpQixXQUFXO29DQUM3QkssUUFBUTs7Ozs7OzhDQUVWLDhEQUFDcEI7OENBQ0QsNEVBQUNxQjt3Q0FBT3BCLFdBQVdoQixpRUFBYTt3Q0FBRXFDLFNBQVMsSUFBSSxDQUFDQyxRQUFRO2tEQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFPaEU7OzthQXBFQXpCLFFBQVE7WUFBQ2EsT0FBTTtZQUFJSSxhQUFhO1lBQUcxQixXQUFVO1lBQUdJLFlBQVc7UUFBRTthQVc3RDhCLFdBQVMsT0FBT1Y7WUFDWkEsTUFBTVcsY0FBYztZQUVwQixNQUFNQyxXQUFTLE1BQU16QywwREFBUSxDQUFDMkMsV0FBVztZQUN6QyxNQUFNNUMsaUVBQWUsQ0FBQzZDLElBQUksQ0FBQyw4Q0FBNkMsSUFBSSxDQUFDOUIsS0FBSyxDQUFDYSxLQUFLLEVBQ3ZGa0IsSUFBSSxDQUFDO2dCQUNGQyxNQUFPTCxRQUFRLENBQUMsRUFBRTtZQUN0QjtRQUNMOztBQWtESDtBQUVBLCtEQUFldkMsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGZhY3RvcnkgZnJvbSBcIi4uL2V0aGVyZXVtL2ZhY3RvcnlcIjtcclxuaW1wb3J0IHdlYjMgZnJvbSBcIi4uL2V0aGVyZXVtL3dlYjNcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9pbmRleC5tb2R1bGUuY3NzXCI7XHJcblxyXG5cclxuXHJcblxyXG5jbGFzcyBDYW1wYWlnbkluZGV4IGV4dGVuZHMgQ29tcG9uZW50e1xyXG4gICAgc3RhdGUgPSB7dG9rZW46XCJcIiwgb3V0cHV0VmFsdWU6IFwiXCIscmVzZXJ2ZUluOlwiXCIscmVzZXJ2ZU91dDpcIlwifTtcclxuXHJcbiAgICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlLnJlc2VydmVJbiA9IGF3YWl0IGZhY3RvcnkubWV0aG9kcy5yZXNlcnZlMCgpLmNhbGwoKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlLnJlc2VydmVPdXQgPSBhd2FpdCBmYWN0b3J5Lm1ldGhvZHMucmVzZXJ2ZTEoKS5jYWxsKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocGFyc2VJbnQoXHJcbiAgICAgICAgICBcclxudGhpcy5zdGF0ZS5yZXNlcnZlSW4pKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhwYXJzZUludCh0aGlzLnN0YXRlLnJlc2VydmVPdXQpKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgb25TdWJtaXQ9YXN5bmMgKGV2ZW50KT0+e1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGFjY291bnRzPWF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICAgICAgYXdhaXQgZmFjdG9yeS5tZXRob2RzLnN3YXAoXCIweDhDQ2ZBYzZjRGUzOTAwMDMzRUNiNzIxZDk0ZWU3MTU5NjUzM2NEQzdcIix0aGlzLnN0YXRlLnRva2VuKVxyXG4gICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgZnJvbSA6IGFjY291bnRzWzBdXHJcbiAgICAgICAgfSk7XHJcbiAgIH07XHJcblxyXG4gICBcclxuXHJcbiAgIC8qIHN0YXRpYyBhc3luYyBnZXRJbnRpYWxQcm9wcygpe1xyXG5cclxuICAgICAgIG9uU3VibWl0PWFzeW5jIChldmVudCk9PntcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGFjY291bnRzPWF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICAgICAgICAgIGF3YWl0IGZhY3RvcnkubWV0aG9kcy5zd2FwKHRoaXMuc3RhdGUudG9rZW4pXHJcbiAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgIGZyb20gOiBhY2NvdW50c1swXVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgIH07XHJcbiAgICB9Ki9cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZ1bGx9PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50b3B9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJveH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG9rZW4xfT5Ub2tlbiAyPC9kaXY+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0MX1cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMFwiXHJcbiAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS50b2tlbn1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB0aGlzLnNldFN0YXRlKHt0b2tlbjpldmVudC50YXJnZXQudmFsdWUsb3V0cHV0VmFsdWU6IFxyXG4gICAgICAgICAgICBNYXRoLmZsb29yKChyZXNlcnZlT3V0ICogKChldmVudC50YXJnZXQudmFsdWUpICogOTk3KSAvIDEwMDApIC8gKHJlc2VydmVJbiArICgoZXZlbnQudGFyZ2V0LnZhbHVlKSAqIDk5NykgLyAxMDAwKSlcclxuICAgICAgICB9KX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIHtjb25zb2xlLmxvZyhcImhpXCIpfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG9rZW4xfT5Ub2tlbiAxPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25kaXZ9PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dDJ9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm91dHB1dFZhbHVlfVxyXG4gICAgICAgICAgICByZWFkT25seVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0gb25DbGljaz17dGhpcy5vblN1Ym1pdH0+U3dhcDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYW1wYWlnbkluZGV4O1xyXG5cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiZmFjdG9yeSIsIndlYjMiLCJzdHlsZXMiLCJDYW1wYWlnbkluZGV4IiwiY29tcG9uZW50RGlkTW91bnQiLCJzZXRTdGF0ZSIsInJlc2VydmVJbiIsIm1ldGhvZHMiLCJyZXNlcnZlMCIsImNhbGwiLCJyZXNlcnZlT3V0IiwicmVzZXJ2ZTEiLCJjb25zb2xlIiwibG9nIiwicGFyc2VJbnQiLCJzdGF0ZSIsInJlbmRlciIsImRpdiIsImNsYXNzTmFtZSIsImZ1bGwiLCJ0b3AiLCJib3giLCJ0b2tlbjEiLCJpbnB1dCIsInR5cGUiLCJpbnB1dDEiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwidG9rZW4iLCJvbkNoYW5nZSIsImV2ZW50IiwidGFyZ2V0Iiwib3V0cHV0VmFsdWUiLCJNYXRoIiwiZmxvb3IiLCJidXR0b25kaXYiLCJpbnB1dDIiLCJyZWFkT25seSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiYWNjb3VudHMiLCJldGgiLCJnZXRBY2NvdW50cyIsInN3YXAiLCJzZW5kIiwiZnJvbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});