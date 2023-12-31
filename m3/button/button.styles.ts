import { VariantProps, cva } from "class-variance-authority";

const root = "button buttonBase-root";

const variants = {
	variant: {
		text: "button__variant--text",
		outlined: "button__variant--outlined",
		filled: "button__variant--filled",
	},
	color: {
		default: "buttonColor-default",
		container: "buttonColor-container",
		primary: "buttonColor-primary",
		secondary: "buttonColor-secondary",
		tertiary: "buttonColor-tertiary",
		success: "buttonColor-success",
		warning: "buttonColor-warning",
		error: "buttonColor-error",
	},
	size: {
		sm: "buttonSize-sm typography-labelSmall",
		md: "buttonSize-md typography-labelMedium",
		// lg: "buttonSize-lg",
	},
	startIcon: {
		true: "buttonIcon-start",
	},
	endIcon: {
		true: "buttonIcon-end",
	},
	fullWidth: {
		true: "w-full",
	},
};

export const variantsProps = cva(root, { variants });
export type TVariantsProps = VariantProps<typeof variantsProps>;
