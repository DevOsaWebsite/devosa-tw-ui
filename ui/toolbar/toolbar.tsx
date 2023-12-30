import React from "react";

import { cn } from "@/06-shared/lib/utils";

import "./toolbar.css";

import { TVariantProps, variantProps } from "./toolbar.styles";
export type TToolbarProps = React.HTMLAttributes<HTMLDivElement> & TVariantProps;

export const Toolbar = React.forwardRef<HTMLDivElement, TToolbarProps>(
	({ children, disablePadding = false, variant = "regular", ...rest }, ref) => {
		return React.createElement(
			"div",
			{ className: cn(variantProps({ variant, disablePadding })), ...rest, ref },
			children,
		);
	},
);
Toolbar.displayName = "Toolbar";
