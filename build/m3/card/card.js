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
exports.Card = void 0;
const react_1 = __importDefault(require("react"));
const utils_1 = require("../../lib/utils");
const paper_styles_1 = require("../paper/paper.styles");
const card_styles_1 = require("./card.styles");
exports.Card = react_1.default.forwardRef((_a, ref) => {
    var { component = "div", className, children, variant = "filled", color = "container", square = true, elevation = 1, overflow = "hidden", rounded = "default" } = _a, rest = __rest(_a, ["component", "className", "children", "variant", "color", "square", "elevation", "overflow", "rounded"]);
    const card = react_1.default.createElement(component, Object.assign({ className: (0, utils_1.cn)((0, card_styles_1.variantProps)({ overflow }), (0, paper_styles_1.variantProps)({ variant, color, square, elevation, rounded }), className), ref }, rest), children);
    return card;
});
exports.Card.displayName = "Card";
