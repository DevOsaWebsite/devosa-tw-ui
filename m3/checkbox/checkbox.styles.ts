import { VariantProps, cva } from "class-variance-authority";

const root = "checkbox";
const variants = {
	color: {
		primary: "checkbox__color--primary",
		secondary: "checkbox__color--secondary",
		tertiary: "checkbox__color--tertiary",
		success: "checkbox__color--success",
		warning: "checkbox__color--warning",
		error: "checkbox__color--error",
	},
	size: {
		sm: "checkbox__size--sm",
		md: "checkbox__size--md",
		lg: "checkbox__size--lg",
	},
	checked: {
		true: "checked",
	},
};

export const variantProps = cva(root, { variants });
export type TVariantProps = VariantProps<typeof variantProps>;
