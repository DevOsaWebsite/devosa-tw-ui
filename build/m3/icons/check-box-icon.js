"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckBoxIcon = void 0;
const react_1 = __importDefault(require("react"));
const svg_icon_1 = require("../svg-icon");
exports.CheckBoxIcon = react_1.default.forwardRef((props, ref) => (<svg_icon_1.SvgIcon ref={ref} {...props}>
		<path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
	</svg_icon_1.SvgIcon>));
exports.CheckBoxIcon.displayName = "CheckBoxIcon";
