import React from "react";

import { cn } from "../../lib/utils";

import "./input-adornment.css";

import { TVariantsProps, variantsProps } from "./input-adornment.styles";

export type TInputAdornmentProps = {
	adornment: React.ReactNode;
} & React.HtmlHTMLAttributes<HTMLDivElement> &
	TVariantsProps;
export const InputAdornment = React.forwardRef<HTMLDivElement, TInputAdornmentProps>(
	({ adornment, position, ...rest }, ref) =>
		React.createElement("span", { className: cn(variantsProps({ position })), ref, ...rest }, adornment),
);

InputAdornment.displayName = "InputAdornment";
