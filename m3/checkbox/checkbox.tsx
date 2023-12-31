import React from "react";

import { cn } from "../../lib/utils";

import { CheckBoxIcon } from "../icons/check-box-icon";
import { CheckBoxOutlinedBlankIcon } from "../icons/check-box-outlined-blank-icon";

import "./checkbox.css";

import { TVariantProps, variantProps } from "./checkbox.styles";

export type TCheckboxProps = {
	icon?: React.ReactNode;
	checkedIcon?: React.ReactNode;
} & TVariantProps &
	React.HTMLAttributes<HTMLInputElement> &
	Omit<React.ComponentPropsWithRef<"input">, "size">;
export const Checkbox = React.forwardRef<HTMLInputElement, TCheckboxProps>(
	({ className, color = "primary", checkedIcon, icon, size = "md", ...rest }, ref) => {
		return React.createElement(
			"span",
			{ className: cn(variantProps({ color, size, checked: rest.checked }), className) },
			React.createElement("input", { type: "checkbox", ref, ...rest }),
			null,
			rest.checked
				? icon || <CheckBoxOutlinedBlankIcon size={size} />
				: checkedIcon || <CheckBoxIcon size={size} />,
		);
	},
);
Checkbox.displayName = "Checkbox";
