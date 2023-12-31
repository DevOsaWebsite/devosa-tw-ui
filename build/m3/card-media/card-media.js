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
exports.CardMedia = void 0;
const react_1 = __importDefault(require("react"));
const image_1 = __importDefault(require("next/image"));
const utils_1 = require("../../lib/utils");
require("./card-media.css");
const card_media_styles_1 = require("./card-media.styles");
exports.CardMedia = react_1.default.forwardRef((_a, ref) => {
    var { component = "p", imageProps, className } = _a, rest = __rest(_a, ["component", "imageProps", "className"]);
    return react_1.default.createElement(component, Object.assign({ className: (0, utils_1.cn)((0, card_media_styles_1.variantsProps)({}), className), ref }, rest), 
    // eslint-disable-next-line jsx-a11y/alt-text
    <image_1.default {...imageProps}/>);
});
exports.CardMedia.displayName = "CardMedia";
