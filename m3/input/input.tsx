import React from "react";

import { cn } from "../../lib/utils";

import "./input.css";

import { TVariantsProps, variantsProps } from "./input.styles";

export type TInputProps = (
	| ({
			multiline?: undefined;
			rows?: undefined;
	  } & React.ComponentPropsWithRef<"input"> &
			React.InputHTMLAttributes<HTMLInputElement>)
	| ({
			multiline?: true;
			rows?: number;
	  } & React.ComponentPropsWithRef<"textarea"> &
			React.TextareaHTMLAttributes<HTMLTextAreaElement>)
) &
	TVariantsProps;

export const Input = React.forwardRef<HTMLInputElement | HTMLTextAreaElement, TInputProps>(
	({ id, className, multiline, style: restStyle, ...rest }, ref) => {
		const style = { minHeight: multiline ? (rest?.rows || 1) * 23 : undefined, ...restStyle };

		return React.createElement(
			multiline ? "textarea" : "input",
			{
				id: id || rest.name,
				className: cn(variantsProps({ disabled: rest.disabled }), className),
				style,
				ref,
				...rest,
			},
			null,
		);
	},
);

Input.displayName = "Input";
