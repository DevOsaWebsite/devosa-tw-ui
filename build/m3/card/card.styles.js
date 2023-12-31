"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.variantProps = void 0;
const class_variance_authority_1 = require("class-variance-authority");
const root = "card";
const variants = {
    overflow: {
        hidden: "card__overflow-hidden",
        visible: "card__overflow-visible",
    },
};
exports.variantProps = (0, class_variance_authority_1.cva)(root, {
    variants,
});
