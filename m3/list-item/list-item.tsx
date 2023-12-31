import React from "react";

import { cn } from "@/06-shared/lib/utils";

import "./list-item.css";

import { TVariantProps, variantProps } from "./list-item.styles";

export type TListItemProps = {
	component?: React.ElementType;
} & React.HTMLAttributes<HTMLUListElement> &
	TVariantProps;

export const ListItem = React.forwardRef<HTMLElement, TListItemProps>(
	({ children, component = "li", className, disablePadding, ...rest }, ref) => {
		return React.createElement(
			component,
			{ className: cn(variantProps({ disablePadding }), className), ref, ...rest },
			children,
		);
	},
);

ListItem.displayName = "ListItem";
