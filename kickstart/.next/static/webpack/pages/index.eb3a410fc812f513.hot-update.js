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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ethereum/factory */ \"./ethereum/factory.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.module.css */ \"./pages/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nclass CampaignIndex extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n    static async getIntialProps() {\n        const reserveIn = await _ethereum_factory__WEBPACK_IMPORTED_MODULE_2__[\"default\"].methods.reserve0().call();\n        const reserveOut = await _ethereum_factory__WEBPACK_IMPORTED_MODULE_2__[\"default\"].methods.reserve1().call();\n        //this.setState({reserveIn:await factory.methods.reserve0().call(),reserveOut:await factory.methods.reserve1().call()}) \n        //= await factory.methods.reserve0().call();\n        //this.setState.reserveOut = await factory.methods.reserve1().call();\n        console.log(_ethereum_factory__WEBPACK_IMPORTED_MODULE_2__[\"default\"].methods.reserve0().call());\n        return {\n            reserveIn,\n            reserveOut\n        };\n    }\n    /* static async getIntialProps(){\r\n\r\n       onSubmit=async (event)=>{\r\n            event.preventDefault();\r\n\r\n            const accounts=await web3.eth.getAccounts();\r\n            await factory.methods.swap(this.state.token)\r\n            .send({\r\n                from : accounts[0]\r\n            });\r\n       };\r\n    }*/ render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().full),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().top),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().box),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().token1),\n                            children: \"Token 2\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Examples\\\\examples\\\\kickstart\\\\pages\\\\index.js\",\n                            lineNumber: 51,\n                            columnNumber: 7\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"number\",\n                            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().input1),\n                            placeholder: \"0\",\n                            value: this.state.token,\n                            onChange: (event)=>this.setState({\n                                    token: event.target.value,\n                                    outputValue: Math.floor(this.props.reserveIn * (event.target.value * 997) / 1000 / (this.props.reserveIn + event.target.value * 997 / 1000))\n                                })\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Examples\\\\examples\\\\kickstart\\\\pages\\\\index.js\",\n                            lineNumber: 52,\n                            columnNumber: 9\n                        }, this),\n                        console.log(\"hi\"),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().token1),\n                            children: \"Token 1\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Examples\\\\examples\\\\kickstart\\\\pages\\\\index.js\",\n                            lineNumber: 62,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().buttondiv),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"number\",\n                                    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().input2),\n                                    placeholder: \"0\",\n                                    value: this.state.outputValue,\n                                    readOnly: true\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Examples\\\\examples\\\\kickstart\\\\pages\\\\index.js\",\n                                    lineNumber: 64,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().button),\n                                        onClick: this.onSubmit,\n                                        children: \"Swap\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Examples\\\\examples\\\\kickstart\\\\pages\\\\index.js\",\n                                        lineNumber: 72,\n                                        columnNumber: 11\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Examples\\\\examples\\\\kickstart\\\\pages\\\\index.js\",\n                                    lineNumber: 71,\n                                    columnNumber: 11\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Examples\\\\examples\\\\kickstart\\\\pages\\\\index.js\",\n                            lineNumber: 63,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Examples\\\\examples\\\\kickstart\\\\pages\\\\index.js\",\n                    lineNumber: 50,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Examples\\\\examples\\\\kickstart\\\\pages\\\\index.js\",\n                lineNumber: 49,\n                columnNumber: 5\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Examples\\\\examples\\\\kickstart\\\\pages\\\\index.js\",\n            lineNumber: 48,\n            columnNumber: 5\n        }, this);\n    }\n    constructor(...args){\n        super(...args);\n        this.state = {\n            token: \"\",\n            outputValue: \"\"\n        };\n        this.onSubmit = async (event)=>{\n            event.preventDefault();\n            const accounts = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__[\"default\"].eth.getAccounts();\n            await _ethereum_factory__WEBPACK_IMPORTED_MODULE_2__[\"default\"].methods.swap(\"0x8CCfAc6cDe3900033ECb721d94ee71596533cDC7\", this.state.token).send({\n                from: accounts[0]\n            });\n        };\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (CampaignIndex);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXNDO0FBQ0k7QUFDTjtBQUNJO0FBS3hDLE1BQU1LLHNCQUFzQkosNENBQVNBO0lBR2pDLGFBQWFLLGlCQUFpQjtRQUMxQixNQUFNQyxZQUFZLE1BQU1MLGlFQUFlLENBQUNPLFFBQVEsR0FBR0MsSUFBSTtRQUN2RCxNQUFNQyxhQUFhLE1BQU1ULGlFQUFlLENBQUNVLFFBQVEsR0FBR0YsSUFBSTtRQUN4RCx3SEFBd0g7UUFDeEgsNENBQTRDO1FBQzVDLHFFQUFxRTtRQUNyRUcsUUFBUUMsR0FBRyxDQUFDWixpRUFBZSxDQUFDTyxRQUFRLEdBQUdDLElBQUk7UUFDM0MsT0FBTTtZQUFDSDtZQUFVSTtRQUFVO0lBQy9CO0lBY0Q7Ozs7Ozs7Ozs7O0tBV0UsR0FDREksU0FBUTtRQUNKLHFCQUNKLDhEQUFDQztZQUFJQyxXQUFXYiwrREFBVztzQkFDM0IsNEVBQUNZO2dCQUFJQyxXQUFXYiw4REFBVTswQkFDeEIsNEVBQUNZO29CQUFJQyxXQUFXYiw4REFBVTs7c0NBQzFCLDhEQUFDWTs0QkFBSUMsV0FBV2IsaUVBQWE7c0NBQUU7Ozs7OztzQ0FDN0IsOERBQUNrQjs0QkFDQ0MsTUFBSzs0QkFDTE4sV0FBV2IsaUVBQWE7NEJBQ3hCcUIsYUFBWTs0QkFDWkMsT0FBTyxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsS0FBSzs0QkFDdkJDLFVBQVVDLENBQUFBLFFBQVMsSUFBSSxDQUFDQyxRQUFRLENBQUM7b0NBQUNILE9BQU1FLE1BQU1FLE1BQU0sQ0FBQ04sS0FBSztvQ0FBQ08sYUFDekRDLEtBQUtDLEtBQUssQ0FBQyxJQUFLLENBQUNDLEtBQUssQ0FBQzdCLFNBQVMsR0FBSSxPQUFPeUIsTUFBTSxDQUFDTixLQUFLLEdBQUksR0FBRSxJQUFLLE9BQVMsS0FBSSxDQUFDVSxLQUFLLENBQUM3QixTQUFTLEdBQUcsTUFBUXlCLE1BQU0sQ0FBQ04sS0FBSyxHQUFJLE1BQU8sSUFBRztnQ0FDeEk7Ozs7Ozt3QkFFQ2IsUUFBUUMsR0FBRyxDQUFDO3NDQUNiLDhEQUFDRTs0QkFBSUMsV0FBV2IsaUVBQWE7c0NBQUU7Ozs7OztzQ0FDL0IsOERBQUNZOzRCQUFJQyxXQUFXYixvRUFBZ0I7OzhDQUM5Qiw4REFBQ2tCO29DQUNDQyxNQUFLO29DQUNMTixXQUFXYixpRUFBYTtvQ0FDeEJxQixhQUFZO29DQUNaQyxPQUFPLElBQUksQ0FBQ0MsS0FBSyxDQUFDTSxXQUFXO29DQUM3Qk0sUUFBUTs7Ozs7OzhDQUVWLDhEQUFDdkI7OENBQ0QsNEVBQUN3Qjt3Q0FBT3ZCLFdBQVdiLGlFQUFhO3dDQUFFcUMsU0FBUyxJQUFJLENBQUNDLFFBQVE7a0RBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQU9oRTs7O2FBckVBZixRQUFRO1lBQUNDLE9BQU07WUFBSUssYUFBYTtRQUFFO2FBWWxDUyxXQUFTLE9BQU9aO1lBQ1pBLE1BQU1hLGNBQWM7WUFFcEIsTUFBTUMsV0FBUyxNQUFNekMsMERBQVEsQ0FBQzJDLFdBQVc7WUFDekMsTUFBTTVDLGlFQUFlLENBQUM2QyxJQUFJLENBQUMsOENBQTZDLElBQUksQ0FBQ3BCLEtBQUssQ0FBQ0MsS0FBSyxFQUN2Rm9CLElBQUksQ0FBQztnQkFDRkMsTUFBT0wsUUFBUSxDQUFDLEVBQUU7WUFDdEI7UUFDTDs7QUFrREg7QUFFQSwrREFBZXZDLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBmYWN0b3J5IGZyb20gXCIuLi9ldGhlcmV1bS9mYWN0b3J5XCI7XHJcbmltcG9ydCB3ZWIzIGZyb20gXCIuLi9ldGhlcmV1bS93ZWIzXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vaW5kZXgubW9kdWxlLmNzc1wiO1xyXG5cclxuXHJcblxyXG5cclxuY2xhc3MgQ2FtcGFpZ25JbmRleCBleHRlbmRzIENvbXBvbmVudHtcclxuICAgIHN0YXRlID0ge3Rva2VuOlwiXCIsIG91dHB1dFZhbHVlOiBcIlwifTtcclxuXHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW50aWFsUHJvcHMoKSB7XHJcbiAgICAgICAgY29uc3QgcmVzZXJ2ZUluID0gYXdhaXQgZmFjdG9yeS5tZXRob2RzLnJlc2VydmUwKCkuY2FsbCgpO1xyXG4gICAgICAgIGNvbnN0IHJlc2VydmVPdXQgPSBhd2FpdCBmYWN0b3J5Lm1ldGhvZHMucmVzZXJ2ZTEoKS5jYWxsKCk7XHJcbiAgICAgICAgLy90aGlzLnNldFN0YXRlKHtyZXNlcnZlSW46YXdhaXQgZmFjdG9yeS5tZXRob2RzLnJlc2VydmUwKCkuY2FsbCgpLHJlc2VydmVPdXQ6YXdhaXQgZmFjdG9yeS5tZXRob2RzLnJlc2VydmUxKCkuY2FsbCgpfSkgXHJcbiAgICAgICAgLy89IGF3YWl0IGZhY3RvcnkubWV0aG9kcy5yZXNlcnZlMCgpLmNhbGwoKTtcclxuICAgICAgICAvL3RoaXMuc2V0U3RhdGUucmVzZXJ2ZU91dCA9IGF3YWl0IGZhY3RvcnkubWV0aG9kcy5yZXNlcnZlMSgpLmNhbGwoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhmYWN0b3J5Lm1ldGhvZHMucmVzZXJ2ZTAoKS5jYWxsKCkpO1xyXG4gICAgICAgIHJldHVybntyZXNlcnZlSW4scmVzZXJ2ZU91dH07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIG9uU3VibWl0PWFzeW5jIChldmVudCk9PntcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBjb25zdCBhY2NvdW50cz1hd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG4gICAgICAgIGF3YWl0IGZhY3RvcnkubWV0aG9kcy5zd2FwKFwiMHg4Q0NmQWM2Y0RlMzkwMDAzM0VDYjcyMWQ5NGVlNzE1OTY1MzNjREM3XCIsdGhpcy5zdGF0ZS50b2tlbilcclxuICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgIGZyb20gOiBhY2NvdW50c1swXVxyXG4gICAgICAgIH0pO1xyXG4gICB9O1xyXG5cclxuICAgXHJcblxyXG4gICAvKiBzdGF0aWMgYXN5bmMgZ2V0SW50aWFsUHJvcHMoKXtcclxuXHJcbiAgICAgICBvblN1Ym1pdD1hc3luYyAoZXZlbnQpPT57XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBhY2NvdW50cz1hd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG4gICAgICAgICAgICBhd2FpdCBmYWN0b3J5Lm1ldGhvZHMuc3dhcCh0aGlzLnN0YXRlLnRva2VuKVxyXG4gICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICBmcm9tIDogYWNjb3VudHNbMF1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICB9O1xyXG4gICAgfSovXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mdWxsfT5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG9wfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib3h9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRva2VuMX0+VG9rZW4gMjwvZGl2PlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dDF9XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIjBcIlxyXG4gICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudG9rZW59XHJcbiAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gdGhpcy5zZXRTdGF0ZSh7dG9rZW46ZXZlbnQudGFyZ2V0LnZhbHVlLG91dHB1dFZhbHVlOiBcclxuICAgICAgICAgICAgTWF0aC5mbG9vcigodGhpcy5wcm9wcy5yZXNlcnZlSW4gKiAoKGV2ZW50LnRhcmdldC52YWx1ZSkgKiA5OTcpIC8gMTAwMCkgLyAodGhpcy5wcm9wcy5yZXNlcnZlSW4gKyAoKGV2ZW50LnRhcmdldC52YWx1ZSkgKiA5OTcpIC8gMTAwMCkpXHJcbiAgICAgICAgfSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICB7Y29uc29sZS5sb2coXCJoaVwiKX1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRva2VuMX0+VG9rZW4gMTwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uZGl2fT5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXQyfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjBcIlxyXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5vdXRwdXRWYWx1ZX1cclxuICAgICAgICAgICAgcmVhZE9ubHlcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259IG9uQ2xpY2s9e3RoaXMub25TdWJtaXR9PlN3YXA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FtcGFpZ25JbmRleDtcclxuXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImZhY3RvcnkiLCJ3ZWIzIiwic3R5bGVzIiwiQ2FtcGFpZ25JbmRleCIsImdldEludGlhbFByb3BzIiwicmVzZXJ2ZUluIiwibWV0aG9kcyIsInJlc2VydmUwIiwiY2FsbCIsInJlc2VydmVPdXQiLCJyZXNlcnZlMSIsImNvbnNvbGUiLCJsb2ciLCJyZW5kZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJmdWxsIiwidG9wIiwiYm94IiwidG9rZW4xIiwiaW5wdXQiLCJ0eXBlIiwiaW5wdXQxIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsInN0YXRlIiwidG9rZW4iLCJvbkNoYW5nZSIsImV2ZW50Iiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJvdXRwdXRWYWx1ZSIsIk1hdGgiLCJmbG9vciIsInByb3BzIiwiYnV0dG9uZGl2IiwiaW5wdXQyIiwicmVhZE9ubHkiLCJidXR0b24iLCJvbkNsaWNrIiwib25TdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImFjY291bnRzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJzd2FwIiwic2VuZCIsImZyb20iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});