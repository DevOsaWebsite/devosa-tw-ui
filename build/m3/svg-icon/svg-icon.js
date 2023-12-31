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
exports.SvgIcon = void 0;
const react_1 = __importDefault(require("react"));
const utils_1 = require("../../lib/utils");
require("./svg-icon.css");
const svg_icon_styles_1 = require("./svg-icon.styles");
exports.SvgIcon = react_1.default.forwardRef((_a, ref) => {
    var { children, className, focusable = "false", size = "inherit", viewBox = "0 0 24 24" } = _a, rest = __rest(_a, ["children", "className", "focusable", "size", "viewBox"]);
    return react_1.default.createElement("svg", Object.assign({ "aria-hidden": true, className: (0, utils_1.cn)((0, svg_icon_styles_1.variantProps)({ size }), className), focusable, ref, viewBox }, rest), children);
});
exports.SvgIcon.displayName = "SvgIcon";
