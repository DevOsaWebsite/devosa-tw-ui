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
exports.Container = void 0;
const react_1 = __importDefault(require("react"));
const utils_1 = require("../../lib/utils");
require("./container.css");
const container_styles_1 = require("./container.styles");
exports.Container = react_1.default.forwardRef((_a, ref) => {
    var { children, component = "div", className } = _a, rest = __rest(_a, ["children", "component", "className"]);
    return react_1.default.createElement(component, Object.assign({ className: (0, utils_1.cn)((0, container_styles_1.variantProps)({}), className), ref }, rest), children);
});
exports.Container.displayName = "Container";
