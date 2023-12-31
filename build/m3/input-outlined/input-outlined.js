"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputOutlined = void 0;
const react_1 = __importDefault(require("react"));
require("./input-outlined.css");
const input_outlined_styles_1 = require("./input-outlined.styles");
exports.InputOutlined = react_1.default.forwardRef(({ label, animated }, ref) => {
    return react_1.default.createElement("fieldset", { className: (0, input_outlined_styles_1.variantsProps)({ animated }), ref }, react_1.default.createElement("legend", {}, react_1.default.createElement("span", {}, label)));
});
exports.InputOutlined.displayName = "InputOutlined";
