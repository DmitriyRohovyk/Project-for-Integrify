"use strict";
exports.__esModule = true;
exports.Input = void 0;
var C = require("./styles");
exports.Input = function () {
    return (React.createElement(C.InputArea, null,
        React.createElement("input", { type: "text", placeholder: 'Search By Country' }),
        React.createElement("select", null,
            React.createElement("option", { value: "Filter by Region", disabled: true, selected: true }, "Filter by Region"))));
};
