import React from "react";

import { cn } from "../../lib/utils";

import "./input-label.css";

import { TVariantsProps, variantsProps } from "./input-label.styles";

export type TInputLabelProps = {
	label: React.ReactNode;
} & React.ComponentPropsWithRef<"label"> &
	React.LabelHTMLAttributes<HTMLLabelElement> &
	TVariantsProps;

export const InputLabel = React.forwardRef<HTMLLabelElement, TInputLabelProps>(
	({ label, animated, className, ...rest }, ref) => {
		return React.createElement(
			"label",
			{ className: cn(variantsProps({ animated }), className), ref, ...rest },
			label,
		);
	},
);

InputLabel.displayName = "InputLabel";
