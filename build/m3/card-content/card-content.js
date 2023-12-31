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
exports.CardContent = void 0;
const react_1 = __importDefault(require("react"));
const utils_1 = require("../../lib/utils");
require("./card-content.css");
const card_content_styles_1 = require("./card-content.styles");
exports.CardContent = react_1.default.forwardRef((_a, ref) => {
    var { component = "div", children, disablePadding } = _a, rest = __rest(_a, ["component", "children", "disablePadding"]);
    return react_1.default.createElement(component, Object.assign({ className: (0, utils_1.cn)((0, card_content_styles_1.variantProps)({ disablePadding })), ref }, rest), children);
});
exports.CardContent.displayName = "CardContent";
