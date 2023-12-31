import React from "react";

import { cn } from "../../lib/utils";

import { Input, TInputProps } from "../input";
import { InputAdornment } from "../input-adornment";

import "./input-base.css";

import { InputOutlined, TInputOutlinedProps } from "../input-outlined/input-outlined";

import { type TVariantsProps, variantsProps } from "./input-base.styles";

export type TInputBaseProps = { startAdornment?: React.ReactNode; endAdornment?: React.ReactNode } & Omit<
	TVariantsProps,
	"endAdornment" | "startAdornment"
> &
	TInputProps &
	TInputOutlinedProps;

export const InputBase = React.forwardRef<HTMLInputElement | HTMLTextAreaElement, TInputBaseProps>(
	({ animated, startAdornment, endAdornment, label, ...rest }, ref) => {
		console.log(animated || Boolean(rest.value || startAdornment || endAdornment || rest.placeholder));

		return React.createElement(
			"div",
			{
				className: cn(
					variantsProps({ startAdornment: Boolean(startAdornment), endAdornment: Boolean(endAdornment) }),
				),
				ref,
			},
			startAdornment ? <InputAdornment adornment={startAdornment} position={"startAdornment"} /> : null,
			<Input ref={ref} {...rest} />,
			endAdornment ? <InputAdornment adornment={endAdornment} position={"endAdornment"} /> : null,
			<InputOutlined
				label={label}
				animated={animated || Boolean(rest.value || startAdornment || endAdornment || rest.placeholder)}
			/>,
		);
	},
);

InputBase.displayName = "InputBase";
