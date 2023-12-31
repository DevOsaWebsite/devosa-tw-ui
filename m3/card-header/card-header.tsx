import React from "react";

import { cn } from "../../lib/utils";

import { Typography } from "../typography";

import "./card-header.css";
import { TVariantProps, variantProps, styles } from "./card-header.styles";

export type TCardHeaderProps = {
	component?: React.ElementType;
	action?: React.ReactNode;
	primary: string;
	avatar?: React.ReactNode;

	primaryTypographyProps?: React.ComponentProps<typeof Typography>;
	secondary?: string;
	secondaryTypographyProps?: React.ComponentProps<typeof Typography>;
	disablePadding?: boolean;
} & React.HtmlHTMLAttributes<HTMLElement> &
	TVariantProps;

export const CardHeader = React.forwardRef<HTMLElement, TCardHeaderProps>(
	(
		{
			action,
			avatar,
			primary,
			component = "div",
			disablePadding,
			className,
			primaryTypographyProps,
			secondary,
			secondaryTypographyProps,
			...rest
		},
		ref,
	) => {
		return React.createElement(
			component,
			{ className: cn(variantProps({ disablePadding }), className), ref, ...rest },
			avatar ? React.createElement("div", { className: styles.avatar }, avatar) : null,
			React.createElement(
				"div",
				{ className: styles.content },
				<Typography dangerouslySetInnerHTML={{ __html: primary }} {...primaryTypographyProps} />,
				secondary ? (
					<Typography dangerouslySetInnerHTML={{ __html: secondary }} {...secondaryTypographyProps} />
				) : null,
			),
			action ? React.createElement("div", { className: styles.action }, action) : null,
		);
	},
);
CardHeader.displayName = "CardHeader";
