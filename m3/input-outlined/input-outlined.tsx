import React from "react";

import "./input-outlined.css";

import { TVariantsProps, variantsProps } from "./input-outlined.styles";

export type TInputOutlinedProps = {
	label: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement> &
	TVariantsProps;
export const InputOutlined = React.forwardRef<HTMLDivElement, TInputOutlinedProps>(({ label, animated }, ref) => {
	return React.createElement(
		"fieldset",
		{ className: variantsProps({ animated }), ref },
		React.createElement("legend", {}, React.createElement("span", {}, label)),
	);
});
InputOutlined.displayName = "InputOutlined";
