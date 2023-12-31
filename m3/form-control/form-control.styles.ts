import { VariantProps, cva } from "class-variance-authority";

const root = "formControl formControl-root";

const variants = {
	color: {
		default: "formControl_default",
		primary: "border-primary text-primary",
		secondary: "formControl_secondary",
		tertiary: "formControl_tertiary",
		error: "formControl_error",
	},
	margin: {
		none: "m-0",
		dense: "mt-1 mb-1.5",
		normal: "mt-2 mb-3",
	},
	animated: {
		true: "animated",
	},
	disabled: {
		true: "disabled opacity-30 cursor-not-allowed",
		false: "cursor-text",
	},
	fullWidth: {
		true: "w-full",
	},
};

export const variantsProps = cva(root, { variants });
export type TVariantsProps = VariantProps<typeof variantsProps>;
