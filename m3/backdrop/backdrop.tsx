import React from "react";

import { cn } from "../../lib/utils";

import { styles } from "./backdrop.styles";

export type TBackdropProps = React.HTMLAttributes<HTMLElement>;

export const Backdrop = React.forwardRef<HTMLElement, TBackdropProps>(({ children, className, ...rest }, ref) => {
	return React.createElement("div", { className: cn(styles.root, className), ref, ...rest }, children);
});

Backdrop.displayName = "Backdrop";
