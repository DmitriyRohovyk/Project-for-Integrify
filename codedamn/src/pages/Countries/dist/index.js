"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.Countries = void 0;
var react_1 = require("react");
var C = require("./styles");
var Input_1 = require("../../components/Input");
var api_1 = require("../../api");
exports.Countries = function () {
    var _a = react_1.useState([]), countries = _a[0], setCountries = _a[1];
    var _b = react_1.useState(false), loading = _b[0], setLoading = _b[1];
    react_1.useEffect(function () {
        getAllCountries;
    }, []);
    var getAllCountries = function () { return __awaiter(void 0, void 0, void 0, function () {
        var countries;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setLoading(false);
                    return [4 /*yield*/, api_1.api.getCountries()];
                case 1:
                    countries = _a.sent();
                    setCountries(countries);
                    console.log(countries);
                    setLoading(true);
                    return [2 /*return*/];
            }
        });
    }); };
    return (react_1["default"].createElement(C.CountriesArea, null,
        react_1["default"].createElement(Input_1.Input, null),
        react_1["default"].createElement("div", { className: 'countries' },
            loading &&
                react_1["default"].createElement("div", { className: '' }, "Loading..."),
            loading &&
                countries.map(function (item, index) {
                    react_1["default"].createElement("div", null, item.name);
                }))));
};
exports["default"] = exports.Countries;
