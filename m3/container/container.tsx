import React from "react";

import { cn } from "../../lib/utils";

import { TVariantProps, variantProps } from "./container.styles";

export type TContainerProps = {
	component?: React.ElementType;
} & TVariantProps &
	React.HTMLAttributes<HTMLDivElement>;
export const Container = React.forwardRef<HTMLDivElement, TContainerProps>(
	({ children, component = "div", ...rest }, ref) => {
		return React.createElement(component, { className: cn(), ref, ...rest }, children);
	},
);
Container.displayName = "Container";
