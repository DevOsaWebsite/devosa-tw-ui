"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.variantProps = void 0;
const class_variance_authority_1 = require("class-variance-authority");
const root = "checkbox";
const variants = {
    color: {
        primary: "checkbox__color--primary",
        secondary: "checkbox__color--secondary",
        tertiary: "checkbox__color--tertiary",
        success: "checkbox__color--success",
        warning: "checkbox__color--warning",
        error: "checkbox__color--error",
    },
    size: {
        sm: "checkbox__size--sm",
        md: "checkbox__size--md",
        lg: "checkbox__size--lg",
    },
    checked: {
        true: "checked",
    },
};
exports.variantProps = (0, class_variance_authority_1.cva)(root, { variants });
