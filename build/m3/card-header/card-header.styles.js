"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.variantProps = exports.styles = void 0;
const class_variance_authority_1 = require("class-variance-authority");
const root = "card-header";
const variants = {
    disablePadding: { true: "disablePadding" },
};
exports.styles = {
    action: `${root}__action`,
    avatar: `${root}__avatar`,
    content: `${root}__content`,
};
exports.variantProps = (0, class_variance_authority_1.cva)(root, {
    variants,
});
