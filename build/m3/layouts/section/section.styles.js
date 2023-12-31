"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.variants = exports.container = exports.root = void 0;
exports.root = "flex flex-col";
exports.container = "flex flex-col md:max-w-screen-xl m-auto px-4 md:px-8 w-full gap-10";
exports.variants = {
    padding: {
        none: "pt-0 pb-0",
        sm: "py-4 md:py-8",
        md: "py-8 md:py-16",
        lg: "py-16 md:py-32",
    },
    bgColor: {
        default: "bg-surface",
        container: "bg-surface-container",
    },
};
