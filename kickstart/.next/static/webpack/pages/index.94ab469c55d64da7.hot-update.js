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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ethereum/factory */ \"./ethereum/factory.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.module.css */ \"./pages/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nclass CampaignIndex extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n    static async getIntialProps() {\n        const reserveIn = await _ethereum_factory__WEBPACK_IMPORTED_MODULE_2__[\"default\"].methods.reserve0().call();\n        const reserveOut = await _ethereum_factory__WEBPACK_IMPORTED_MODULE_2__[\"default\"].methods.reserve1().call();\n        //this.setState({reserveIn:await factory.methods.reserve0().call(),reserveOut:await factory.methods.reserve1().call()}) \n        //= await factory.methods.reserve0().call();\n        //this.setState.reserveOut = await factory.methods.reserve1().call();\n        return {\n            reserveIn,\n            reserveOut\n        };\n    }\n    /* static async getIntialProps(){\r\n\r\n       onSubmit=async (event)=>{\r\n            event.preventDefault();\r\n\r\n            const accounts=await web3.eth.getAccounts();\r\n            await factory.methods.swap(this.state.token)\r\n            .send({\r\n                from : accounts[0]\r\n            });\r\n       };\r\n    }*/ render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().full),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().top),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().box),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().token1),\n                            children: \"Token 2\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Examples\\\\examples\\\\kickstart\\\\pages\\\\index.js\",\n                            lineNumber: 50,\n                            columnNumber: 7\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"number\",\n                            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().input1),\n                            placeholder: \"0\",\n                            value: this.state.token,\n                            onChange: (event)=>this.setState({\n                                    token: event.target.value,\n                                    outputValue: Math.floor(this.props.reserveIn * (event.target.value * 997) / 1000 / (this.props.reserveIn + event.target.value * 997 / 1000))\n                                })\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Examples\\\\examples\\\\kickstart\\\\pages\\\\index.js\",\n                            lineNumber: 51,\n                            columnNumber: 9\n                        }, this),\n                        console.log(\"hi\"),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().token1),\n                            children: \"Token 1\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Examples\\\\examples\\\\kickstart\\\\pages\\\\index.js\",\n                            lineNumber: 61,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().buttondiv),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"number\",\n                                    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().input2),\n                                    placeholder: \"0\",\n                                    value: this.state.outputValue,\n                                    readOnly: true\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Examples\\\\examples\\\\kickstart\\\\pages\\\\index.js\",\n                                    lineNumber: 63,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().button),\n                                        onClick: this.onSubmit,\n                                        children: \"Swap\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Examples\\\\examples\\\\kickstart\\\\pages\\\\index.js\",\n                                        lineNumber: 71,\n                                        columnNumber: 11\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Examples\\\\examples\\\\kickstart\\\\pages\\\\index.js\",\n                                    lineNumber: 70,\n                                    columnNumber: 11\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Examples\\\\examples\\\\kickstart\\\\pages\\\\index.js\",\n                            lineNumber: 62,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Examples\\\\examples\\\\kickstart\\\\pages\\\\index.js\",\n                    lineNumber: 49,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Examples\\\\examples\\\\kickstart\\\\pages\\\\index.js\",\n                lineNumber: 48,\n                columnNumber: 5\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Examples\\\\examples\\\\kickstart\\\\pages\\\\index.js\",\n            lineNumber: 47,\n            columnNumber: 5\n        }, this);\n    }\n    constructor(...args){\n        super(...args);\n        this.state = {\n            token: \"\",\n            outputValue: \"\"\n        };\n        this.onSubmit = async (event)=>{\n            event.preventDefault();\n            const accounts = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__[\"default\"].eth.getAccounts();\n            await _ethereum_factory__WEBPACK_IMPORTED_MODULE_2__[\"default\"].methods.swap(\"0x8CCfAc6cDe3900033ECb721d94ee71596533cDC7\", this.state.token).send({\n                from: accounts[0]\n            });\n        };\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (CampaignIndex);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXNDO0FBQ0k7QUFDTjtBQUNJO0FBS3hDLE1BQU1LLHNCQUFzQkosNENBQVNBO0lBR2pDLGFBQWFLLGlCQUFpQjtRQUMxQixNQUFNQyxZQUFZLE1BQU1MLGlFQUFlLENBQUNPLFFBQVEsR0FBR0MsSUFBSTtRQUN2RCxNQUFNQyxhQUFhLE1BQU1ULGlFQUFlLENBQUNVLFFBQVEsR0FBR0YsSUFBSTtRQUN4RCx3SEFBd0g7UUFDeEgsNENBQTRDO1FBQzVDLHFFQUFxRTtRQUNyRSxPQUFNO1lBQUNIO1lBQVVJO1FBQVU7SUFDL0I7SUFjRDs7Ozs7Ozs7Ozs7S0FXRSxHQUNERSxTQUFRO1FBQ0oscUJBQ0osOERBQUNDO1lBQUlDLFdBQVdYLCtEQUFXO3NCQUMzQiw0RUFBQ1U7Z0JBQUlDLFdBQVdYLDhEQUFVOzBCQUN4Qiw0RUFBQ1U7b0JBQUlDLFdBQVdYLDhEQUFVOztzQ0FDMUIsOERBQUNVOzRCQUFJQyxXQUFXWCxpRUFBYTtzQ0FBRTs7Ozs7O3NDQUM3Qiw4REFBQ2dCOzRCQUNDQyxNQUFLOzRCQUNMTixXQUFXWCxpRUFBYTs0QkFDeEJtQixhQUFZOzRCQUNaQyxPQUFPLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxLQUFLOzRCQUN2QkMsVUFBVUMsQ0FBQUEsUUFBUyxJQUFJLENBQUNDLFFBQVEsQ0FBQztvQ0FBQ0gsT0FBTUUsTUFBTUUsTUFBTSxDQUFDTixLQUFLO29DQUFDTyxhQUN6REMsS0FBS0MsS0FBSyxDQUFDLElBQUssQ0FBQ0MsS0FBSyxDQUFDM0IsU0FBUyxHQUFJLE9BQU91QixNQUFNLENBQUNOLEtBQUssR0FBSSxHQUFFLElBQUssT0FBUyxLQUFJLENBQUNVLEtBQUssQ0FBQzNCLFNBQVMsR0FBRyxNQUFRdUIsTUFBTSxDQUFDTixLQUFLLEdBQUksTUFBTyxJQUFHO2dDQUN4STs7Ozs7O3dCQUVDVyxRQUFRQyxHQUFHLENBQUM7c0NBQ2IsOERBQUN0Qjs0QkFBSUMsV0FBV1gsaUVBQWE7c0NBQUU7Ozs7OztzQ0FDL0IsOERBQUNVOzRCQUFJQyxXQUFXWCxvRUFBZ0I7OzhDQUM5Qiw4REFBQ2dCO29DQUNDQyxNQUFLO29DQUNMTixXQUFXWCxpRUFBYTtvQ0FDeEJtQixhQUFZO29DQUNaQyxPQUFPLElBQUksQ0FBQ0MsS0FBSyxDQUFDTSxXQUFXO29DQUM3QlEsUUFBUTs7Ozs7OzhDQUVWLDhEQUFDekI7OENBQ0QsNEVBQUMwQjt3Q0FBT3pCLFdBQVdYLGlFQUFhO3dDQUFFcUMsU0FBUyxJQUFJLENBQUNDLFFBQVE7a0RBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQU9oRTs7O2FBcEVBakIsUUFBUTtZQUFDQyxPQUFNO1lBQUlLLGFBQWE7UUFBRTthQVdsQ1csV0FBUyxPQUFPZDtZQUNaQSxNQUFNZSxjQUFjO1lBRXBCLE1BQU1DLFdBQVMsTUFBTXpDLDBEQUFRLENBQUMyQyxXQUFXO1lBQ3pDLE1BQU01QyxpRUFBZSxDQUFDNkMsSUFBSSxDQUFDLDhDQUE2QyxJQUFJLENBQUN0QixLQUFLLENBQUNDLEtBQUssRUFDdkZzQixJQUFJLENBQUM7Z0JBQ0ZDLE1BQU9MLFFBQVEsQ0FBQyxFQUFFO1lBQ3RCO1FBQ0w7O0FBa0RIO0FBRUEsK0RBQWV2QyxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgZmFjdG9yeSBmcm9tIFwiLi4vZXRoZXJldW0vZmFjdG9yeVwiO1xyXG5pbXBvcnQgd2ViMyBmcm9tIFwiLi4vZXRoZXJldW0vd2ViM1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2luZGV4Lm1vZHVsZS5jc3NcIjtcclxuXHJcblxyXG5cclxuXHJcbmNsYXNzIENhbXBhaWduSW5kZXggZXh0ZW5kcyBDb21wb25lbnR7XHJcbiAgICBzdGF0ZSA9IHt0b2tlbjpcIlwiLCBvdXRwdXRWYWx1ZTogXCJcIn07XHJcblxyXG4gICAgc3RhdGljIGFzeW5jIGdldEludGlhbFByb3BzKCkge1xyXG4gICAgICAgIGNvbnN0IHJlc2VydmVJbiA9IGF3YWl0IGZhY3RvcnkubWV0aG9kcy5yZXNlcnZlMCgpLmNhbGwoKTtcclxuICAgICAgICBjb25zdCByZXNlcnZlT3V0ID0gYXdhaXQgZmFjdG9yeS5tZXRob2RzLnJlc2VydmUxKCkuY2FsbCgpO1xyXG4gICAgICAgIC8vdGhpcy5zZXRTdGF0ZSh7cmVzZXJ2ZUluOmF3YWl0IGZhY3RvcnkubWV0aG9kcy5yZXNlcnZlMCgpLmNhbGwoKSxyZXNlcnZlT3V0OmF3YWl0IGZhY3RvcnkubWV0aG9kcy5yZXNlcnZlMSgpLmNhbGwoKX0pIFxyXG4gICAgICAgIC8vPSBhd2FpdCBmYWN0b3J5Lm1ldGhvZHMucmVzZXJ2ZTAoKS5jYWxsKCk7XHJcbiAgICAgICAgLy90aGlzLnNldFN0YXRlLnJlc2VydmVPdXQgPSBhd2FpdCBmYWN0b3J5Lm1ldGhvZHMucmVzZXJ2ZTEoKS5jYWxsKCk7XHJcbiAgICAgICAgcmV0dXJue3Jlc2VydmVJbixyZXNlcnZlT3V0fTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgb25TdWJtaXQ9YXN5bmMgKGV2ZW50KT0+e1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGFjY291bnRzPWF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICAgICAgYXdhaXQgZmFjdG9yeS5tZXRob2RzLnN3YXAoXCIweDhDQ2ZBYzZjRGUzOTAwMDMzRUNiNzIxZDk0ZWU3MTU5NjUzM2NEQzdcIix0aGlzLnN0YXRlLnRva2VuKVxyXG4gICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgZnJvbSA6IGFjY291bnRzWzBdXHJcbiAgICAgICAgfSk7XHJcbiAgIH07XHJcblxyXG4gICBcclxuXHJcbiAgIC8qIHN0YXRpYyBhc3luYyBnZXRJbnRpYWxQcm9wcygpe1xyXG5cclxuICAgICAgIG9uU3VibWl0PWFzeW5jIChldmVudCk9PntcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGFjY291bnRzPWF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICAgICAgICAgIGF3YWl0IGZhY3RvcnkubWV0aG9kcy5zd2FwKHRoaXMuc3RhdGUudG9rZW4pXHJcbiAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgIGZyb20gOiBhY2NvdW50c1swXVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgIH07XHJcbiAgICB9Ki9cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZ1bGx9PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50b3B9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJveH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG9rZW4xfT5Ub2tlbiAyPC9kaXY+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0MX1cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMFwiXHJcbiAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS50b2tlbn1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB0aGlzLnNldFN0YXRlKHt0b2tlbjpldmVudC50YXJnZXQudmFsdWUsb3V0cHV0VmFsdWU6IFxyXG4gICAgICAgICAgICBNYXRoLmZsb29yKCh0aGlzLnByb3BzLnJlc2VydmVJbiAqICgoZXZlbnQudGFyZ2V0LnZhbHVlKSAqIDk5NykgLyAxMDAwKSAvICh0aGlzLnByb3BzLnJlc2VydmVJbiArICgoZXZlbnQudGFyZ2V0LnZhbHVlKSAqIDk5NykgLyAxMDAwKSlcclxuICAgICAgICB9KX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIHtjb25zb2xlLmxvZyhcImhpXCIpfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG9rZW4xfT5Ub2tlbiAxPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25kaXZ9PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dDJ9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm91dHB1dFZhbHVlfVxyXG4gICAgICAgICAgICByZWFkT25seVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0gb25DbGljaz17dGhpcy5vblN1Ym1pdH0+U3dhcDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYW1wYWlnbkluZGV4O1xyXG5cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiZmFjdG9yeSIsIndlYjMiLCJzdHlsZXMiLCJDYW1wYWlnbkluZGV4IiwiZ2V0SW50aWFsUHJvcHMiLCJyZXNlcnZlSW4iLCJtZXRob2RzIiwicmVzZXJ2ZTAiLCJjYWxsIiwicmVzZXJ2ZU91dCIsInJlc2VydmUxIiwicmVuZGVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiZnVsbCIsInRvcCIsImJveCIsInRva2VuMSIsImlucHV0IiwidHlwZSIsImlucHV0MSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJzdGF0ZSIsInRva2VuIiwib25DaGFuZ2UiLCJldmVudCIsInNldFN0YXRlIiwidGFyZ2V0Iiwib3V0cHV0VmFsdWUiLCJNYXRoIiwiZmxvb3IiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJidXR0b25kaXYiLCJpbnB1dDIiLCJyZWFkT25seSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiYWNjb3VudHMiLCJldGgiLCJnZXRBY2NvdW50cyIsInN3YXAiLCJzZW5kIiwiZnJvbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});