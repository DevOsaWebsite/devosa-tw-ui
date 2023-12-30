import React from "react";

import { type VariantProps, cva } from "class-variance-authority";

import { cn } from "../../../lib/utils";

import { container, root, variants } from "./section.styles";

const variantProps = cva(root, { variants });

export type TSectionProps = {
	component?: "div" | "section";
} & VariantProps<typeof variantProps> &
	React.HTMLAttributes<HTMLElement>;

export const Section = React.forwardRef<HTMLElement, TSectionProps>(
	({ bgColor = "default", component = "section", children, className, padding = "md", ...rest }, ref) => {
		return React.createElement(
			component,
			{ className: cn(root, variantProps({ bgColor, padding }), className), ref, ...rest },
			React.createElement("div", { className: cn(container) }, children),
		);
	},
);

Section.displayName = "Section";
