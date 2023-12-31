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
exports.CardHeader = void 0;
const react_1 = __importDefault(require("react"));
const utils_1 = require("../../lib/utils");
const typography_1 = require("../typography");
require("./card-header.css");
const card_header_styles_1 = require("./card-header.styles");
exports.CardHeader = react_1.default.forwardRef((_a, ref) => {
    var { action, avatar, primary, component = "div", disablePadding, className, primaryTypographyProps, secondary, secondaryTypographyProps } = _a, rest = __rest(_a, ["action", "avatar", "primary", "component", "disablePadding", "className", "primaryTypographyProps", "secondary", "secondaryTypographyProps"]);
    return react_1.default.createElement(component, Object.assign({ className: (0, utils_1.cn)((0, card_header_styles_1.variantProps)({ disablePadding }), className), ref }, rest), avatar ? react_1.default.createElement("div", { className: card_header_styles_1.styles.avatar }, avatar) : null, react_1.default.createElement("div", { className: card_header_styles_1.styles.content }, <typography_1.Typography dangerouslySetInnerHTML={{ __html: primary }} {...primaryTypographyProps}/>, secondary ? (<typography_1.Typography dangerouslySetInnerHTML={{ __html: secondary }} {...secondaryTypographyProps}/>) : null), action ? react_1.default.createElement("div", { className: card_header_styles_1.styles.action }, action) : null);
});
exports.CardHeader.displayName = "CardHeader";
