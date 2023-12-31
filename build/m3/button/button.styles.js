"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.variantsProps = void 0;
const class_variance_authority_1 = require("class-variance-authority");
const root = "button buttonBase-root";
const variants = {
    variant: {
        text: "button__variant--text",
        outlined: "button__variant--outlined",
        filled: "button__variant--filled",
    },
    color: {
        default: "buttonColor-default",
        container: "buttonColor-container",
        primary: "buttonColor-primary",
        secondary: "buttonColor-secondary",
        tertiary: "buttonColor-tertiary",
        success: "buttonColor-success",
        warning: "buttonColor-warning",
        error: "buttonColor-error",
    },
    size: {
        sm: "buttonSize-sm typography-labelSmall",
        md: "buttonSize-md typography-labelMedium",
        // lg: "buttonSize-lg",
    },
    startIcon: {
        true: "buttonIcon-start",
    },
    endIcon: {
        true: "buttonIcon-end",
    },
    fullWidth: {
        true: "w-full",
    },
};
exports.variantsProps = (0, class_variance_authority_1.cva)(root, { variants });
