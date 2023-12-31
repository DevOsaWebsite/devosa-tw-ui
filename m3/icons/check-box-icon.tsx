import React from "react";

import { SvgIcon, TSvgIconProps } from "../svg-icon";

export const CheckBoxIcon = React.forwardRef<SVGSVGElement, TSvgIconProps>((props, ref) => (
	<SvgIcon ref={ref} {...props}>
		<path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
	</SvgIcon>
));
CheckBoxIcon.displayName = "CheckBoxIcon";
