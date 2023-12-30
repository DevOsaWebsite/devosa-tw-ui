import React from "react";

import { cn } from "../../lib/utils";

import "./card-content.css";

import { TVariantProps, variantProps } from "./card-content.styles";

export type TCardContentProps = {
	component?: React.ElementType;
} & React.HtmlHTMLAttributes<HTMLElement> &
	TVariantProps;

export const CardContent = React.forwardRef<HTMLElement, TCardContentProps>(
	({ component = "div", children, disablePadding, ...rest }, ref) => {
		return React.createElement(
			component,
			{ className: cn(variantProps({ disablePadding })), ref, ...rest },
			children,
		);
	},
);
CardContent.displayName = "CardContent";
