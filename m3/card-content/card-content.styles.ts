import { VariantProps, cva } from "class-variance-authority";

const root = "card-content";
const variants = {
	disablePadding: { true: "disablePadding" },
};

export const variantProps = cva(root, {
	variants,
});

export type TVariantProps = VariantProps<typeof variantProps>;
