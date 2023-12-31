"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.variantProps = void 0;
const class_variance_authority_1 = require("class-variance-authority");
const root = "avatar";
const variants = {
    variant: {
        circular: `${root}__variant--circular`,
        square: `${root}__variant--square`,
        rounded: `${root}__variant--rounded`,
    },
    size: {
        sm: `${root}__size--sm`,
        md: `${root}__size--md`,
        lg: `${root}__size--lg`,
    },
    elevation: {
        0: "elevation-0",
        1: "elevation-1",
        2: "elevation-2",
        3: "elevation-3",
        4: "elevation-4",
        5: "elevation-5",
    },
    color: {
        primary: `${root}__color--primary`,
        secondary: `${root}__color--secondary`,
        tertiary: `${root}__color--tertiary`,
        success: `${root}__color--success`,
        warning: `${root}__color--warning`,
        error: `${root}__color--error`,
        default: `${root}__color--default`,
        container: `${root}__color--container`,
    },
};
exports.variantProps = (0, class_variance_authority_1.cva)(root, { variants });
