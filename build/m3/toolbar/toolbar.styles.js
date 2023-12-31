"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.variantProps = void 0;
const class_variance_authority_1 = require("class-variance-authority");
const root = "toolbar";
const variants = {
    variant: {
        regular: "toolbar__variant--regular",
        dense: "toolbar__variant--dense",
    },
    disablePadding: {
        true: "disablePadding",
    },
};
exports.variantProps = (0, class_variance_authority_1.cva)(root, { variants });
