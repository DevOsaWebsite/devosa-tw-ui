"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckBoxOutlinedBlankIcon = void 0;
const react_1 = __importDefault(require("react"));
const svg_icon_1 = require("../svg-icon");
exports.CheckBoxOutlinedBlankIcon = react_1.default.forwardRef((props, ref) => {
    return (<svg_icon_1.SvgIcon ref={ref} {...props}>
			<path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
		</svg_icon_1.SvgIcon>);
});
exports.CheckBoxOutlinedBlankIcon.displayName = "CheckBoxOutlinedBlankIcon";
