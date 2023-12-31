"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const colors_1 = __importDefault(require("tailwindcss/colors"));
const colors_generator_1 = require("./colors-generator");
exports.config = {
    darkMode: ["class", "data-theme"],
    theme: {
        extend: {
            colors: Object.assign(Object.assign({}, (0, colors_generator_1.colorGenerator)()), { black: colors_1.default.slate["950"] }),
        },
    },
    corePlugins: {},
    plugins: [],
};
