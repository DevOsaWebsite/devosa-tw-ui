import React from "react";

import { cn } from "../../lib/utils";

import "./form-control.css";

import { TVariantsProps, variantsProps } from "./form-control.styles";

export type TFormControlProps = {
	error?: boolean;
} & React.HTMLAttributes<HTMLDivElement> &
	TVariantsProps;
export const FormControl = React.forwardRef<HTMLInputElement | HTMLTextAreaElement, TFormControlProps>(
	({ children, color = "default", error, animated, disabled, margin = "normal", fullWidth, ...rest }, ref) => {
		return React.createElement(
			"div",
			{
				className: cn(variantsProps({ color: error ? "error" : color, animated, disabled, margin, fullWidth })),
				ref,
				...rest,
			},
			children,
		);
	},
);
FormControl.displayName = "FormControl";
