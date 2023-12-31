"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.variantProps = void 0;
const class_variance_authority_1 = require("class-variance-authority");
const root = "svg-icon svgIcon-root";
const variants = {
    size: {
        sm: "svgIcon-sizeSmall",
        md: "svgIcon-sizeMedium",
        lg: "svgIcon-sizeLarge",
        inherit: "svgIcon-sizeInherit",
    },
};
exports.variantProps = (0, class_variance_authority_1.cva)(root, { variants });
