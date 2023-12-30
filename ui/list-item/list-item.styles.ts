import { VariantProps, cva } from "class-variance-authority";

const root = "list-item";
const variants = {
	disablePadding: {
		true: "disablePadding",
	},
};

export const variantProps = cva(root, { variants });
export type TVariantProps = VariantProps<typeof variantProps>;
