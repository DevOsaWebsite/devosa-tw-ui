import React from "react";

import { cn } from "../../lib/utils";

import { type TVariantProps as TPaperProps, variantProps as paperVariantProps } from "../paper/paper.styles";

import { type TVariantProps, variantProps } from "./card.styles";

export type TCardProps = {
	component?: React.ElementType;
} & React.HTMLAttributes<HTMLElement> &
	TVariantProps &
	TPaperProps;

export const Card = React.forwardRef<HTMLElement, TCardProps>(
	(
		{
			component = "div",
			className,
			children,
			variant = "filled",
			color = "container",
			square = true,
			elevation = 1,
			overflow = "hidden",
			rounded = "default",
			...rest
		},
		ref,
	) => {
		const card = React.createElement(
			component,
			{
				className: cn(
					variantProps({ overflow }),
					paperVariantProps({ variant, color, square, elevation, rounded }),
					className,
				),
				ref,
				...rest,
			},
			children,
		);

		return card;
	},
);

Card.displayName = "Card";
