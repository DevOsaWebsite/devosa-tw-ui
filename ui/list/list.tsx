import React from "react";

import { cn } from "@/06-shared/lib/utils";

import "./list.css";

import { TVariantProps, variantProps } from "./list.styles";

export type TListProps = {
	component?: React.ElementType;
} & React.HTMLAttributes<HTMLUListElement> &
	TVariantProps;

export const List = React.forwardRef<HTMLElement, TListProps>(
	({ children, component = "ul", className, disablePadding, ...rest }, ref) => {
		return React.createElement(
			component,
			{ className: cn(variantProps({ disablePadding }), className), ref, ...rest },
			children,
		);
	},
);

List.displayName = "List";
