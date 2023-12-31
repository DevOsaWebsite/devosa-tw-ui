"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cn = void 0;
const classnames_1 = __importDefault(require("classnames"));
const tailwind_merge_1 = require("tailwind-merge");
const cn = (...inputs) => (0, tailwind_merge_1.twMerge)((0, classnames_1.default)(inputs));
exports.cn = cn;
