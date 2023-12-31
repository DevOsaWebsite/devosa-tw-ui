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
exports.Input = void 0;
const react_1 = __importDefault(require("react"));
const utils_1 = require("../../lib/utils");
require("./input.css");
const input_styles_1 = require("./input.styles");
exports.Input = react_1.default.forwardRef((_a, ref) => {
    var { id, className, multiline, style: restStyle } = _a, rest = __rest(_a, ["id", "className", "multiline", "style"]);
    const style = Object.assign({ minHeight: multiline ? ((rest === null || rest === void 0 ? void 0 : rest.rows) || 1) * 23 : undefined }, restStyle);
    return react_1.default.createElement(multiline ? "textarea" : "input", Object.assign({ id: id || rest.name, className: (0, utils_1.cn)((0, input_styles_1.variantsProps)({ disabled: rest.disabled }), className), style,
        ref }, rest), null);
});
exports.Input.displayName = "Input";
