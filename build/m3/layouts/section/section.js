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
exports.Section = void 0;
const react_1 = __importDefault(require("react"));
const class_variance_authority_1 = require("class-variance-authority");
const utils_1 = require("../../../lib/utils");
const section_styles_1 = require("./section.styles");
const variantProps = (0, class_variance_authority_1.cva)(section_styles_1.root, { variants: section_styles_1.variants });
exports.Section = react_1.default.forwardRef((_a, ref) => {
    var { bgColor = "default", component = "section", children, className, padding = "md" } = _a, rest = __rest(_a, ["bgColor", "component", "children", "className", "padding"]);
    return react_1.default.createElement(component, Object.assign({ className: (0, utils_1.cn)(section_styles_1.root, variantProps({ bgColor, padding }), className), ref }, rest), react_1.default.createElement("div", { className: (0, utils_1.cn)(section_styles_1.container) }, children));
});
exports.Section.displayName = "Section";
