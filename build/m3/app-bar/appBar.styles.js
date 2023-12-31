"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.variantProps = void 0;
const class_variance_authority_1 = require("class-variance-authority");
const root = "app-bar";
const variants = {
    position: {
        absolute: "app-bar__position--absolute",
        fixed: "app-bar__position--fixed",
        relative: "app-bar__position--relative",
        static: "app-bar__position--static",
        sticky: "app-bar__position--sticky",
    },
};
exports.variantProps = (0, class_variance_authority_1.cva)(root, {
    variants,
});
