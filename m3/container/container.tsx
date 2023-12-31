import React from "react";

import { cn } from "../../lib/utils";

import { TVariantProps, variantProps } from "./container.styles";

export type TContainerProps = {
	component?: React.ElementType;
} & TVariantProps &
	React.HTMLAttributes<HTMLDivElement>;
export const Container = React.forwardRef<HTMLDivElement, TContainerProps>(
	({ children, component = "div", className, ...rest }, ref) => {
		return React.createElement(component, { className: cn(variantProps({}), className), ref, ...rest }, children);
	},
);
Container.displayName = "Container";
