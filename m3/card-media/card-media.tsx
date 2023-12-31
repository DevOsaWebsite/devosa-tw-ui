import React from "react";

import Image, { ImageProps } from "next/image";

import { cn } from "../../lib/utils";

import "./card-media.css";
import { TVariantsProps, variantsProps } from "./card-media.styles";

export type TCardMediaProps = {
	component?: React.ElementType;
	imageProps: ImageProps;
} & TVariantsProps &
	React.HtmlHTMLAttributes<HTMLImageElement>;
export const CardMedia = React.forwardRef<HTMLImageElement, TCardMediaProps>(
	({ component = "p", imageProps, className, ...rest }, ref) => {
		return React.createElement(
			component,
			{ className: cn(variantsProps({}), className), ref, ...rest },
			// eslint-disable-next-line jsx-a11y/alt-text
			<Image {...imageProps} />,
		);
	},
);

CardMedia.displayName = "CardMedia";
