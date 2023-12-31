import { VariantProps, cva } from "class-variance-authority";

const root = "container";
const variants = {
	maxWidth: {
		xs: "",
		sm: "",
		md: "",
		lg: "",
		xl: "",
		"2xl": "",
		false: "",
	},
};

export const variantProps = cva(root, { variants });
export type TVariantProps = VariantProps<typeof variantProps>;
