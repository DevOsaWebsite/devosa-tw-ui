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
exports.Button = void 0;
const react_1 = __importDefault(require("react"));
const link_1 = __importDefault(require("next/link"));
const utils_1 = require("../../lib/utils");
require("./button.css");
const button_styles_1 = require("./button.styles");
exports.Button = react_1.default.forwardRef((_a, ref) => {
    var { className: restClassName, children, color = "primary", size = "md", variant = "text", fullWidth } = _a, rest = __rest(_a, ["className", "children", "color", "size", "variant", "fullWidth"]);
    const className = (0, utils_1.cn)((0, button_styles_1.variantsProps)({ color, variant, size, fullWidth }), restClassName);
    return rest.href ? (<link_1.default ref={ref} {...rest} className={className}>
				{children}
			</link_1.default>) : (react_1.default.createElement("button", Object.assign({ className }, rest), children));
});
exports.Button.displayName = "Button";
