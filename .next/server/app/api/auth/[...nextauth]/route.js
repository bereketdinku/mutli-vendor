"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=C%3A%5CUsers%5Chp%5CDocuments%5Cmulti%20vendor%5Cfrontend%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Chp%5CDocuments%5Cmulti%20vendor%5Cfrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=C%3A%5CUsers%5Chp%5CDocuments%5Cmulti%20vendor%5Cfrontend%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Chp%5CDocuments%5Cmulti%20vendor%5Cfrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_hp_Documents_multi_vendor_frontend_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/[...nextauth]/route.js */ \"(rsc)/./app/api/auth/[...nextauth]/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\hp\\\\Documents\\\\multi vendor\\\\frontend\\\\app\\\\api\\\\auth\\\\[...nextauth]\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_hp_Documents_multi_vendor_frontend_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNocCU1Q0RvY3VtZW50cyU1Q211bHRpJTIwdmVuZG9yJTVDZnJvbnRlbmQlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q2hwJTVDRG9jdW1lbnRzJTVDbXVsdGklMjB2ZW5kb3IlNUNmcm9udGVuZCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDeUM7QUFDdEg7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8/NjgyNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxocFxcXFxEb2N1bWVudHNcXFxcbXVsdGkgdmVuZG9yXFxcXGZyb250ZW5kXFxcXGFwcFxcXFxhcGlcXFxcYXV0aFxcXFxbLi4ubmV4dGF1dGhdXFxcXHJvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF1cIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXGhwXFxcXERvY3VtZW50c1xcXFxtdWx0aSB2ZW5kb3JcXFxcZnJvbnRlbmRcXFxcYXBwXFxcXGFwaVxcXFxhdXRoXFxcXFsuLi5uZXh0YXV0aF1cXFxccm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=C%3A%5CUsers%5Chp%5CDocuments%5Cmulti%20vendor%5Cfrontend%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Chp%5CDocuments%5Cmulti%20vendor%5Cfrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/auth/[...nextauth]/route.js":
/*!*********************************************!*\
  !*** ./app/api/auth/[...nextauth]/route.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler)\n/* harmony export */ });\nconst { authOptions } = __webpack_require__(/*! @/lib/authOptions */ \"(rsc)/./lib/authOptions.js\");\nconst { default: NextAuth } = __webpack_require__(/*! next-auth/next */ \"(rsc)/./node_modules/next-auth/next/index.js\");\nconst handler = NextAuth(authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLE1BQU0sRUFBRUEsV0FBVyxFQUFFLEdBQUdDLG1CQUFPQSxDQUFDLHFEQUFtQjtBQUNuRCxNQUFNLEVBQUVDLFNBQVNDLFFBQVEsRUFBRSxHQUFHRixtQkFBT0EsQ0FBQyxvRUFBZ0I7QUFFdEQsTUFBTUcsVUFBUUQsU0FBU0g7QUFDZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL2FwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlLmpzP2RhMWEiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBhdXRoT3B0aW9ucyB9ID0gcmVxdWlyZShcIkAvbGliL2F1dGhPcHRpb25zXCIpO1xyXG5jb25zdCB7IGRlZmF1bHQ6IE5leHRBdXRoIH0gPSByZXF1aXJlKFwibmV4dC1hdXRoL25leHRcIik7XHJcblxyXG5jb25zdCBoYW5kbGVyPU5leHRBdXRoKGF1dGhPcHRpb25zKTtcclxuZXhwb3J0IHtoYW5kbGVyIGFzIEdFVCxoYW5kbGVyIGFzIFBPU1R9Il0sIm5hbWVzIjpbImF1dGhPcHRpb25zIiwicmVxdWlyZSIsImRlZmF1bHQiLCJOZXh0QXV0aCIsImhhbmRsZXIiLCJHRVQiLCJQT1NUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/[...nextauth]/route.js\n");

/***/ }),

/***/ "(rsc)/./lib/authOptions.js":
/*!****************************!*\
  !*** ./lib/authOptions.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var _auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth/prisma-adapter */ \"(rsc)/./node_modules/@auth/prisma-adapter/index.js\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./db */ \"(rsc)/./lib/db.js\");\n\n\n\n\n\n// import { UserRole } from \"@prisma/client\";\nconst authOptions = {\n    adapter: (0,_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__.PrismaAdapter)(_db__WEBPACK_IMPORTED_MODULE_4__[\"default\"]),\n    secret: process.env.NEXTAUTH_SECRET,\n    session: {\n        strategy: \"jwt\"\n    },\n    pages: {\n        signIn: \"/login\"\n    },\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            name: \"Credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"email\",\n                    placeholder: \"jb@gmail.com\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                try {\n                    console.log(\"Authorize function recieved credentials:\", credentials);\n                    // Check if user credentials are they are Not empty\n                    if (!credentials?.email || !credentials?.password) {\n                        throw {\n                            error: \"No Inputs Found\",\n                            status: 401\n                        };\n                    }\n                    console.log(\"Passed Check 1 \");\n                    //Check if user exists\n                    const existingUser = await _db__WEBPACK_IMPORTED_MODULE_4__[\"default\"].user.findUnique({\n                        where: {\n                            email: credentials.email\n                        }\n                    });\n                    if (!existingUser) {\n                        console.log(\"No user found\");\n                        throw {\n                            error: \"No user found\",\n                            status: 401\n                        };\n                    }\n                    console.log(\"Passed Check 2\");\n                    //Check if Password is correct\n                    const passwordMatch = await (0,bcrypt__WEBPACK_IMPORTED_MODULE_3__.compare)(credentials.password, existingUser.password);\n                    if (!passwordMatch) {\n                        console.log(\"Password incorrect\");\n                        throw {\n                            error: \"Password Incorrect\",\n                            status: 401\n                        };\n                    }\n                    console.log(\"Pass 3 Checked\");\n                    const user = {\n                        id: existingUser.id,\n                        name: existingUser.name,\n                        email: existingUser.email,\n                        role: existingUser.role,\n                        status: existingUser.status,\n                        image: existingUser.image,\n                        emailVerified: existingUser.emailVerified\n                    };\n                    //\n                    console.log(\"User Compiled\");\n                    // console.log(user);\n                    return user;\n                } catch (error) {\n                    console.log(\"aLL Failed\");\n                    console.log(error);\n                    throw {\n                        error: \"Something went wrong\",\n                        status: 401\n                    };\n                }\n            }\n        })\n    ],\n    callbacks: {\n        async session ({ session, token }) {\n            if (token) {\n                console.log(`token:${token} in session`);\n                session.user.id = token.id;\n                session.user.name = token.name;\n                session.user.email = token.email;\n                session.user.role = token.role;\n                session.user.status = token.status;\n                session.user.image = token.picture;\n                session.user.emailVerified = token.emailVerified;\n            }\n            console.log(`session:${session.user}`);\n            return session;\n        },\n        async jwt ({ token, user }) {\n            if (user) {\n                token.id = user.id;\n                token.name = user.name;\n                token.email = user.email;\n                token.role = user.role;\n                token.status = user.status;\n                token.image = user.picture;\n                token.emailVerified = user.emailVerified;\n            }\n            console.log(`token:${token}`);\n            return token;\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FBR1csTUFBTVgsTUFBTTtnQkFDbENoQixRQUFRa0IsSUFBSSxDQUFDTSxLQUFLLEdBQUdHLE1BQU1DLE9BQU87Z0JBQ2xDNUIsUUFBUWtCLElBQUksQ0FBQ08sYUFBYSxHQUFHRSxNQUFNRixhQUFhO1lBQ2xEO1lBQ0FaLFFBQVFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRWQsUUFBUWtCLElBQUksQ0FBQyxDQUFDO1lBQ3JDLE9BQU9sQjtRQUNUO1FBQ0EsTUFBTTZCLEtBQUksRUFBRUYsS0FBSyxFQUFFVCxJQUFJLEVBQUU7WUFDdkIsSUFBSUEsTUFBTTtnQkFDUlMsTUFBTUwsRUFBRSxHQUFHSixLQUFLSSxFQUFFO2dCQUNsQkssTUFBTXRCLElBQUksR0FBR2EsS0FBS2IsSUFBSTtnQkFDdEJzQixNQUFNcEIsS0FBSyxHQUFHVyxLQUFLWCxLQUFLO2dCQUN4Qm9CLE1BQU1KLElBQUksR0FBR0wsS0FBS0ssSUFBSTtnQkFDdEJJLE1BQU1YLE1BQU0sR0FBQ0UsS0FBS0YsTUFBTTtnQkFDeEJXLE1BQU1ILEtBQUssR0FBR04sS0FBS1UsT0FBTztnQkFDMUJELE1BQU1GLGFBQWEsR0FBR1AsS0FBS08sYUFBYTtZQUMxQztZQUNBWixRQUFRQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUVhLE1BQU0sQ0FBQztZQUM1QixPQUFPQTtRQUNUO0lBQ0Y7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9saWIvYXV0aE9wdGlvbnMuanM/YTljOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiO1xyXG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFsc1wiO1xyXG5pbXBvcnQgeyBQcmlzbWFBZGFwdGVyIH0gZnJvbSBcIkBhdXRoL3ByaXNtYS1hZGFwdGVyXCI7XHJcblxyXG5pbXBvcnQgeyBjb21wYXJlIH0gZnJvbSBcImJjcnlwdFwiO1xyXG5pbXBvcnQgZGIgZnJvbSBcIi4vZGJcIjtcclxuLy8gaW1wb3J0IHsgVXNlclJvbGUgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zID0ge1xyXG4gIGFkYXB0ZXI6IFByaXNtYUFkYXB0ZXIoZGIpLFxyXG4gIHNlY3JldDogcHJvY2Vzcy5lbnYuTkVYVEFVVEhfU0VDUkVULFxyXG4gIHNlc3Npb246IHtcclxuICAgIHN0cmF0ZWd5OiBcImp3dFwiLFxyXG4gIH0sXHJcbiAgcGFnZXM6IHtcclxuICAgIHNpZ25JbjogXCIvbG9naW5cIixcclxuICB9LFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XHJcbiAgICAgIG5hbWU6IFwiQ3JlZGVudGlhbHNcIixcclxuICAgICAgY3JlZGVudGlhbHM6IHtcclxuICAgICAgICBlbWFpbDogeyBsYWJlbDogXCJFbWFpbFwiLCB0eXBlOiBcImVtYWlsXCIsIHBsYWNlaG9sZGVyOiBcImpiQGdtYWlsLmNvbVwiIH0sXHJcbiAgICAgICAgcGFzc3dvcmQ6IHsgbGFiZWw6IFwiUGFzc3dvcmRcIiwgdHlwZTogXCJwYXNzd29yZFwiIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscykge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkF1dGhvcml6ZSBmdW5jdGlvbiByZWNpZXZlZCBjcmVkZW50aWFsczpcIiwgY3JlZGVudGlhbHMpO1xyXG4gICAgICAgICAgLy8gQ2hlY2sgaWYgdXNlciBjcmVkZW50aWFscyBhcmUgdGhleSBhcmUgTm90IGVtcHR5XHJcbiAgICAgICAgICBpZiAoIWNyZWRlbnRpYWxzPy5lbWFpbCB8fCAhY3JlZGVudGlhbHM/LnBhc3N3b3JkKSB7XHJcbiAgICAgICAgICAgIHRocm93IHsgZXJyb3I6IFwiTm8gSW5wdXRzIEZvdW5kXCIsIHN0YXR1czogNDAxIH07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlBhc3NlZCBDaGVjayAxIFwiKTtcclxuICAgICAgICAgIC8vQ2hlY2sgaWYgdXNlciBleGlzdHNcclxuICAgICAgICAgIGNvbnN0IGV4aXN0aW5nVXNlciA9IGF3YWl0IGRiLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IGVtYWlsOiBjcmVkZW50aWFscy5lbWFpbCB9LFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBpZiAoIWV4aXN0aW5nVXNlcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vIHVzZXIgZm91bmRcIik7XHJcbiAgICAgICAgICAgIHRocm93IHsgZXJyb3I6IFwiTm8gdXNlciBmb3VuZFwiLCBzdGF0dXM6IDQwMSB9O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiUGFzc2VkIENoZWNrIDJcIik7XHJcblxyXG4gICAgICAgICAgLy9DaGVjayBpZiBQYXNzd29yZCBpcyBjb3JyZWN0XHJcbiAgICAgICAgICBjb25zdCBwYXNzd29yZE1hdGNoID0gYXdhaXQgY29tcGFyZShcclxuICAgICAgICAgICAgY3JlZGVudGlhbHMucGFzc3dvcmQsXHJcbiAgICAgICAgICAgIGV4aXN0aW5nVXNlci5wYXNzd29yZFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGlmICghcGFzc3dvcmRNYXRjaCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBhc3N3b3JkIGluY29ycmVjdFwiKTtcclxuICAgICAgICAgICAgdGhyb3cgeyBlcnJvcjogXCJQYXNzd29yZCBJbmNvcnJlY3RcIiwgc3RhdHVzOiA0MDEgfTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiUGFzcyAzIENoZWNrZWRcIik7XHJcbiAgICAgICAgICBjb25zdCB1c2VyID0ge1xyXG4gICAgICAgICAgICBpZDogZXhpc3RpbmdVc2VyLmlkLFxyXG4gICAgICAgICAgICBuYW1lOiBleGlzdGluZ1VzZXIubmFtZSxcclxuICAgICAgICAgICAgZW1haWw6IGV4aXN0aW5nVXNlci5lbWFpbCxcclxuICAgICAgICAgICAgcm9sZTogZXhpc3RpbmdVc2VyLnJvbGUsXHJcbiAgICAgICAgICAgIHN0YXR1czpleGlzdGluZ1VzZXIuc3RhdHVzLFxyXG4gICAgICAgICAgICBpbWFnZTogZXhpc3RpbmdVc2VyLmltYWdlLFxyXG4gICAgICAgICAgICBlbWFpbFZlcmlmaWVkOiBleGlzdGluZ1VzZXIuZW1haWxWZXJpZmllZCxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICAvL1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJVc2VyIENvbXBpbGVkXCIpO1xyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2codXNlcik7XHJcbiAgICAgICAgICByZXR1cm4gdXNlcjtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJhTEwgRmFpbGVkXCIpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgdGhyb3cgeyBlcnJvcjogXCJTb21ldGhpbmcgd2VudCB3cm9uZ1wiLCBzdGF0dXM6IDQwMSB9O1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgIH0pLFxyXG4gIF0sXHJcbiAgY2FsbGJhY2tzOiB7XHJcbiAgICBhc3luYyBzZXNzaW9uKHsgc2Vzc2lvbiwgdG9rZW4gfSkge1xyXG4gICAgICBpZiAodG9rZW4pIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgdG9rZW46JHt0b2tlbn0gaW4gc2Vzc2lvbmApO1xyXG4gICAgICAgIHNlc3Npb24udXNlci5pZCA9IHRva2VuLmlkO1xyXG4gICAgICAgIHNlc3Npb24udXNlci5uYW1lID0gdG9rZW4ubmFtZTtcclxuICAgICAgICBzZXNzaW9uLnVzZXIuZW1haWwgPSB0b2tlbi5lbWFpbDtcclxuICAgICAgICBzZXNzaW9uLnVzZXIucm9sZSA9IHRva2VuLnJvbGU7XHJcbiAgICAgICAgc2Vzc2lvbi51c2VyLnN0YXR1cyA9IHRva2VuLnN0YXR1cztcclxuICAgICAgICBzZXNzaW9uLnVzZXIuaW1hZ2UgPSB0b2tlbi5waWN0dXJlO1xyXG4gICAgICAgIHNlc3Npb24udXNlci5lbWFpbFZlcmlmaWVkID0gdG9rZW4uZW1haWxWZXJpZmllZDtcclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZyhgc2Vzc2lvbjoke3Nlc3Npb24udXNlcn1gKTtcclxuICAgICAgcmV0dXJuIHNlc3Npb247XHJcbiAgICB9LFxyXG4gICAgYXN5bmMgand0KHsgdG9rZW4sIHVzZXIgfSkge1xyXG4gICAgICBpZiAodXNlcikge1xyXG4gICAgICAgIHRva2VuLmlkID0gdXNlci5pZDtcclxuICAgICAgICB0b2tlbi5uYW1lID0gdXNlci5uYW1lO1xyXG4gICAgICAgIHRva2VuLmVtYWlsID0gdXNlci5lbWFpbDtcclxuICAgICAgICB0b2tlbi5yb2xlID0gdXNlci5yb2xlO1xyXG4gICAgICAgIHRva2VuLnN0YXR1cz11c2VyLnN0YXR1cztcclxuICAgICAgICB0b2tlbi5pbWFnZSA9IHVzZXIucGljdHVyZTtcclxuICAgICAgICB0b2tlbi5lbWFpbFZlcmlmaWVkID0gdXNlci5lbWFpbFZlcmlmaWVkO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnNvbGUubG9nKGB0b2tlbjoke3Rva2VufWApO1xyXG4gICAgICByZXR1cm4gdG9rZW47XHJcbiAgICB9LFxyXG4gIH0sXHJcbn07Il0sIm5hbWVzIjpbIk5leHRBdXRoIiwiQ3JlZGVudGlhbHNQcm92aWRlciIsIlByaXNtYUFkYXB0ZXIiLCJjb21wYXJlIiwiZGIiLCJhdXRoT3B0aW9ucyIsImFkYXB0ZXIiLCJzZWNyZXQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVEFVVEhfU0VDUkVUIiwic2Vzc2lvbiIsInN0cmF0ZWd5IiwicGFnZXMiLCJzaWduSW4iLCJwcm92aWRlcnMiLCJuYW1lIiwiY3JlZGVudGlhbHMiLCJlbWFpbCIsImxhYmVsIiwidHlwZSIsInBsYWNlaG9sZGVyIiwicGFzc3dvcmQiLCJhdXRob3JpemUiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJzdGF0dXMiLCJleGlzdGluZ1VzZXIiLCJ1c2VyIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwicGFzc3dvcmRNYXRjaCIsImlkIiwicm9sZSIsImltYWdlIiwiZW1haWxWZXJpZmllZCIsImNhbGxiYWNrcyIsInRva2VuIiwicGljdHVyZSIsImp3dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/authOptions.js\n");

/***/ }),

/***/ "(rsc)/./lib/db.js":
/*!*******************!*\
  !*** ./lib/db.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst db = globalThis.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) globalThis.prisma = db;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (db);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvZGIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThDO0FBRTlDLE1BQU1DLEtBQUtDLFdBQVdDLE1BQU0sSUFBSSxJQUFJSCx3REFBWUE7QUFDaEQsSUFBSUksSUFBcUMsRUFBRUYsV0FBV0MsTUFBTSxHQUFHRjtBQUUvRCxpRUFBZUEsRUFBRUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vbGliL2RiLmpzPzNkYzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XHJcblxyXG5jb25zdCBkYiA9IGdsb2JhbFRoaXMucHJpc21hIHx8IG5ldyBQcmlzbWFDbGllbnQoKTtcclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgZ2xvYmFsVGhpcy5wcmlzbWEgPSBkYjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRiOyJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJkYiIsImdsb2JhbFRoaXMiLCJwcmlzbWEiLCJwcm9jZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/db.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/preact","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/cookie","vendor-chunks/@auth","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=C%3A%5CUsers%5Chp%5CDocuments%5Cmulti%20vendor%5Cfrontend%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Chp%5CDocuments%5Cmulti%20vendor%5Cfrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();