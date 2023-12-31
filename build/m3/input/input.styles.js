"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.variantsProps = void 0;
const class_variance_authority_1 = require("class-variance-authority");
const root = "input-root peer";
const variants = {
    disabled: {
        true: "disabled opacity-30 cursor-not-allowed",
        false: "cursor-text",
    },
};
exports.variantsProps = (0, class_variance_authority_1.cva)(root, { variants });
