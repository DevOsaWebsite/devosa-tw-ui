import React from "react";

import { Typography } from "../typography";

import { cn } from "../../lib/utils";

import { TVariantProps, variantProps } from "./form-control-label.styles";

export type TFormControlLabelProps = {
	control: React.ReactNode;
	label: React.ReactNode;
	labelTypographyProps?: React.ComponentProps<typeof Typography>;
} & React.HTMLAttributes<HTMLLabelElement> &
	TVariantProps;

export const FormControlLabel = React.forwardRef<HTMLLabelElement, TFormControlLabelProps>(
	(
		{
			control,
			className,
			label,
			labelTypographyProps = { component: "span", color: "inherit", variant: "inherit" },
			...rest
		},
		ref,
	) => {
		return React.createElement(
			"label",
			{ className: cn(variantProps({}), className), ref, ...rest },
			control,
			<Typography {...labelTypographyProps}>{label}</Typography>,
		);
	},
);
FormControlLabel.displayName = "FormControlLabel";
