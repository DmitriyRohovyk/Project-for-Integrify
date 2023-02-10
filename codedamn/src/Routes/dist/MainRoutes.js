"use strict";
exports.__esModule = true;
exports.MainRoutes = void 0;
var react_router_dom_1 = require("react-router-dom");
var Countries_1 = require("../pages/Countries");
var CountryPage_1 = require("../pages/CountryPage");
exports.MainRoutes = function () {
    return react_router_dom_1.useRoutes([
        { path: '/', element: React.createElement(Countries_1.Countries, null) },
        { path: '/country/:name', element: React.createElement(CountryPage_1.CountryPage, null) },
        { path: '/code/:code', element: React.createElement(CountryPage_1.CountryPage, null) },
    ]);
};
