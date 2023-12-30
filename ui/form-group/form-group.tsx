import React from "react";

import "./form-group.css";
import { cn } from "../../lib/utils";

import { TVariantProps, variantProps } from "./form-group.styles";

export type TFormGroupProps = React.HTMLAttributes<HTMLDivElement> & TVariantProps;

export const FormGroup = React.forwardRef<HTMLDivElement, TFormGroupProps>(({ children, className, ...rest }, ref) => {
	return React.createElement("div", { className: cn(variantProps({}), className), ref, ...rest }, children);
});
FormGroup.displayName = "FormGroup";
