"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.variantProps = void 0;
const class_variance_authority_1 = require("class-variance-authority");
const root = "container";
const variants = {
    maxWidth: {
        xs: "",
        sm: "",
        md: "",
        lg: "",
        xl: "",
        "2xl": "",
        false: "",
    },
};
exports.variantProps = (0, class_variance_authority_1.cva)(root, { variants });
