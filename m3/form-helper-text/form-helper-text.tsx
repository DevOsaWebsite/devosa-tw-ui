import React from "react";

import { cn } from "../../lib/utils";

import { TVariantsProps, variantsProps } from "./form-helper-text.styles";

export type TFormHelperTextProps = { helperText?: React.ReactNode } & React.HTMLAttributes<HTMLDivElement> &
	TVariantsProps;
export const FormHelperText = React.forwardRef<HTMLDivElement, TFormHelperTextProps>(
	({ helperText, className, ...rest }, ref) => {
		return React.createElement("span", { className: cn(variantsProps({}), className), ref, ...rest }, helperText);
	},
);

FormHelperText.displayName = "FormHelperText";
