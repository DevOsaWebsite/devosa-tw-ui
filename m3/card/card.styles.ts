import { VariantProps, cva } from "class-variance-authority";

const root = "card";
const variants = {
	overflow: {
		hidden: "card__overflow-hidden",
		visible: "card__overflow-visible",
	},
};

export const variantProps = cva(root, {
	variants,
});

export type TVariantProps = VariantProps<typeof variantProps>;
