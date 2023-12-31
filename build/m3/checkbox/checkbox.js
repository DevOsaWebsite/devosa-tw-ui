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
exports.Checkbox = void 0;
const react_1 = __importDefault(require("react"));
const utils_1 = require("../../lib/utils");
const check_box_icon_1 = require("../icons/check-box-icon");
const check_box_outlined_blank_icon_1 = require("../icons/check-box-outlined-blank-icon");
require("./checkbox.css");
const checkbox_styles_1 = require("./checkbox.styles");
exports.Checkbox = react_1.default.forwardRef((_a, ref) => {
    var { className, color = "primary", checkedIcon, icon, size = "md" } = _a, rest = __rest(_a, ["className", "color", "checkedIcon", "icon", "size"]);
    return react_1.default.createElement("span", { className: (0, utils_1.cn)((0, checkbox_styles_1.variantProps)({ color, size, checked: rest.checked }), className) }, react_1.default.createElement("input", Object.assign({ type: "checkbox", ref }, rest)), null, rest.checked
        ? icon || <check_box_outlined_blank_icon_1.CheckBoxOutlinedBlankIcon size={size}/>
        : checkedIcon || <check_box_icon_1.CheckBoxIcon size={size}/>);
});
exports.Checkbox.displayName = "Checkbox";
