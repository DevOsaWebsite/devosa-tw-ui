import React from "react";

import { cn } from "../../lib/utils";

import "./typography.css";

import { type TVariantProps, variantProps } from "./typography.styles";

export type TTypographyProps = {
	component?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "div" | "p" | "dt" | "dd";
} & Omit<React.HTMLAttributes<HTMLElement>, "color"> &
	TVariantProps;

export const Typography = React.forwardRef<HTMLElement, TTypographyProps>(
	({ children, component = "span", color = "default", className, variant = "bodyMedium", ...rest }, ref) => {
		return React.createElement(
			component,
			{
				className: cn(variantProps({ variant, color }), className),
				ref,
				...rest,
			},
			children,
		);
	},
);

Typography.displayName = "Typography";
