import React from "react";

import { cn } from "../../lib/utils";

import "./svg-icon.css";

import { TVariantProps, variantProps } from "./svg-icon.styles";

export type TSvgIconProps = React.SVGAttributes<SVGSVGElement> & TVariantProps;
export const SvgIcon = React.forwardRef<SVGSVGElement, TSvgIconProps>(
	({ children, className, focusable = "false", size = "inherit", viewBox = "0 0 24 24", ...rest }, ref) => {
		return React.createElement(
			"svg",
			{ "aria-hidden": true, className: cn(variantProps({ size }), className), focusable, ref, viewBox, ...rest },
			children,
		);
	},
);
SvgIcon.displayName = "SvgIcon";
