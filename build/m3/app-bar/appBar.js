"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppBar = void 0;
const react_1 = __importDefault(require("react"));
const utils_1 = require("../../lib/utils");
require("./appBar.css");
const paper_styles_1 = require("../paper/paper.styles");
const appBar_styles_1 = require("./appBar.styles");
exports.AppBar = react_1.default.forwardRef((_a, ref) => {
    var { component = "div", children, position = "absolute", elevation = 1, color = "primary", square = true } = _a, rest = __rest(_a, ["component", "children", "position", "elevation", "color", "square"]);
    return react_1.default.createElement(component, Object.assign({ className: (0, utils_1.cn)((0, appBar_styles_1.variantProps)({ position }), (0, paper_styles_1.variantProps)({ elevation, color, square, variant: "filled" })), ref }, rest), children);
});
exports.AppBar.displayName = "AppBar";
