import React from "react";

import Image, { ImageProps } from "next/image";

import { cn } from "@/06-shared/lib/utils";

import "./avatar.css";

import { TVariantProps, variantProps } from "./avatar.styles";

export type TAvatarProps = {
	component?: React.ElementType;
} & TVariantProps &
	(
		| ({
				children?: undefined;
				imgProps: Omit<ImageProps, "fill">;
		  } & Omit<React.HTMLAttributes<HTMLImageElement>, "children">)
		| ({
				children: React.ReactNode;
				imgProps?: undefined;
		  } & React.HTMLAttributes<HTMLElement>)
	);

export const Avatar = React.forwardRef<HTMLElement, TAvatarProps>(
	(
		{
			children,
			component = "span",
			className,
			imgProps,
			color = "primary",
			variant = "circular",
			size = "md",
			elevation = 1,

			...rest
		},
		ref,
	) => {
		return React.createElement(
			component,
			{ className: cn(variantProps({ color, variant, size, elevation }), className), ref, ...rest },
			// eslint-disable-next-line jsx-a11y/alt-text
			imgProps ? <Image fill {...imgProps} /> : children,
		);
	},
);
Avatar.displayName = "Avatar";
