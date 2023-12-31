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
exports.InputAdornment = void 0;
const react_1 = __importDefault(require("react"));
const utils_1 = require("../../lib/utils");
require("./input-adornment.css");
const input_adornment_styles_1 = require("./input-adornment.styles");
exports.InputAdornment = react_1.default.forwardRef((_a, ref) => {
    var { adornment, position } = _a, rest = __rest(_a, ["adornment", "position"]);
    return react_1.default.createElement("span", Object.assign({ className: (0, utils_1.cn)((0, input_adornment_styles_1.variantsProps)({ position })), ref }, rest), adornment);
});
exports.InputAdornment.displayName = "InputAdornment";
