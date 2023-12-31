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
exports.FormControlLabel = void 0;
const react_1 = __importDefault(require("react"));
const typography_1 = require("../typography");
const utils_1 = require("../../lib/utils");
const form_control_label_styles_1 = require("./form-control-label.styles");
exports.FormControlLabel = react_1.default.forwardRef((_a, ref) => {
    var { control, className, label, labelTypographyProps = { component: "span", color: "inherit", variant: "inherit" } } = _a, rest = __rest(_a, ["control", "className", "label", "labelTypographyProps"]);
    return react_1.default.createElement("label", Object.assign({ className: (0, utils_1.cn)((0, form_control_label_styles_1.variantProps)({}), className), ref }, rest), control, <typography_1.Typography {...labelTypographyProps}>{label}</typography_1.Typography>);
});
exports.FormControlLabel.displayName = "FormControlLabel";
