"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.variantProps = void 0;
require("./form-control-label.css");
const class_variance_authority_1 = require("class-variance-authority");
const root = "formControlLabel formControlLabel-root";
const variants = {
    color: {
        primary: "formControlLabel-colorPrimary",
        secondary: "",
        tertiary: "",
        success: "",
        warning: "",
        error: "",
    },
    labelPlacement: {
        start: "formControlLabel-labelPlacementStart",
        end: "formControlLabel-labelPlacementEnd",
        top: "formControlLabel-labelPlacementTop",
        bottom: "formControlLabel-labelPlacementBottom",
    },
    size: {
        sm: "formControlLabel-sizeSmall",
        md: "formControlLabel-sizeMedium",
        lg: "formControlLabel-sizeLarge",
    },
};
exports.variantProps = (0, class_variance_authority_1.cva)(root, { variants });
