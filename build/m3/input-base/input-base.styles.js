"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.variantsProps = void 0;
const class_variance_authority_1 = require("class-variance-authority");
const root = "inputBase-root";
const variants = {
    startAdornment: {
        true: "inputBase-startAdornment",
    },
    endAdornment: {
        true: "inputBase-endAdornment",
    },
};
exports.variantsProps = (0, class_variance_authority_1.cva)(root, { variants });
