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
exports.InputBase = void 0;
const react_1 = __importDefault(require("react"));
const utils_1 = require("../../lib/utils");
const input_1 = require("../input");
const input_adornment_1 = require("../input-adornment");
require("./input-base.css");
const input_outlined_1 = require("../input-outlined/input-outlined");
const input_base_styles_1 = require("./input-base.styles");
exports.InputBase = react_1.default.forwardRef((_a, ref) => {
    var { animated, startAdornment, endAdornment, label } = _a, rest = __rest(_a, ["animated", "startAdornment", "endAdornment", "label"]);
    console.log(animated || Boolean(rest.value || startAdornment || endAdornment || rest.placeholder));
    return react_1.default.createElement("div", {
        className: (0, utils_1.cn)((0, input_base_styles_1.variantsProps)({ startAdornment: Boolean(startAdornment), endAdornment: Boolean(endAdornment) })),
        ref,
    }, startAdornment ? <input_adornment_1.InputAdornment adornment={startAdornment} position={"startAdornment"}/> : null, <input_1.Input ref={ref} {...rest}/>, endAdornment ? <input_adornment_1.InputAdornment adornment={endAdornment} position={"endAdornment"}/> : null, <input_outlined_1.InputOutlined label={label} animated={animated || Boolean(rest.value || startAdornment || endAdornment || rest.placeholder)}/>);
});
exports.InputBase.displayName = "InputBase";
