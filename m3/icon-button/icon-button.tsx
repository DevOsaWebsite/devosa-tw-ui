import React, { RefObject } from "react";

import Link, { LinkProps } from "next/link";

import { cn } from "../../lib/utils";

import { TVariantProps, variantProps } from "./icon-button.styles";

export type TIconButtonProps = (
	| (LinkProps & React.RefAttributes<HTMLAnchorElement> & React.ComponentPropsWithRef<"a">)
	| ({ href?: undefined } & React.ButtonHTMLAttributes<HTMLButtonElement> & React.ComponentPropsWithRef<"button">)
) &
	TVariantProps;

export const IconButton = React.forwardRef<HTMLButtonElement, TIconButtonProps>(
	({ children, className: restClassName, color = "primary", size = "md", ...rest }, ref) => {
		const className = cn(variantProps({ color, size }), restClassName);

		return rest.href ? (
			<Link ref={ref as RefObject<HTMLAnchorElement>} {...rest} className={className}>
				{children}
			</Link>
		) : (
			React.createElement("button", { className, ...rest }, children)
		);
	},
);
IconButton.displayName = "IconButton";
