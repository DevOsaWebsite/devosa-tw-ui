import React from "react";

import { cn } from "../../lib/utils";

import "./appBar.css";

import { TVariantProps as TPaperVariantProps, variantProps as paperVariantProps } from "../paper/paper.styles";

import { TVariantProps, variantProps } from "./appBar.styles";

export type TAppBarProps = {
	component?: React.ElementType;
} & React.HTMLAttributes<HTMLElement> &
	TVariantProps &
	Omit<TPaperVariantProps, "variant">;
export const AppBar = React.forwardRef<HTMLElement, TAppBarProps>(
	(
		{
			component = "div",
			children,
			position = "absolute",
			elevation = 1,
			color = "primary",
			square = true,

			...rest
		},
		ref,
	) => {
		return React.createElement(
			component,
			{
				className: cn(
					variantProps({ position }),
					paperVariantProps({ elevation, color, square, variant: "filled" }),
				),
				ref,
				...rest,
			},
			children,
		);
	},
);
AppBar.displayName = "AppBar";
