import React, { RefObject } from "react";

import Link, { LinkProps } from "next/link";

import { cn } from "../../lib/utils";

import "./button.css";

import { TVariantsProps, variantsProps } from "./button.styles";

export type TButtonProps = (
	| (LinkProps & React.RefAttributes<HTMLAnchorElement> & React.ComponentPropsWithRef<"a">)
	| ({ href?: undefined } & React.ButtonHTMLAttributes<HTMLButtonElement> & React.ComponentPropsWithRef<"button">)
) &
	TVariantsProps;

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, TButtonProps>(
	(
		{ className: restClassName, children, color = "primary", size = "md", variant = "text", fullWidth, ...rest },
		ref,
	) => {
		const className = cn(variantsProps({ color, variant, size, fullWidth }), restClassName);

		return rest.href ? (
			<Link ref={ref as RefObject<HTMLAnchorElement>} {...rest} className={className}>
				{children}
			</Link>
		) : (
			React.createElement("button", { className, ...rest }, children)
		);
	},
);

Button.displayName = "Button";
