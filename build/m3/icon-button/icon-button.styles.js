"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.variantProps = void 0;
const class_variance_authority_1 = require("class-variance-authority");
const root = "iconButton iconButton-root";
const variants = {
    color: {
        primary: "iconButton-colorPrimary",
    },
    size: {
        sm: "iconButton-sizeSmall",
        md: "iconButton-sizeMedium",
        lg: "iconButton-sizeLarge",
    },
};
exports.variantProps = (0, class_variance_authority_1.cva)(root, { variants });
