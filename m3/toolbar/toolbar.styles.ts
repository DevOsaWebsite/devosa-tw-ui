import { VariantProps, cva } from "class-variance-authority";

const root = "toolbar";
const variants = {
	variant: {
		regular: "toolbar__variant--regular",
		dense: "toolbar__variant--dense",
	},
	disablePadding: {
		true: "disablePadding",
	},
};

export const variantProps = cva(root, { variants });
export type TVariantProps = VariantProps<typeof variantProps>;
