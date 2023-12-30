import { VariantProps, cva } from "class-variance-authority";

const root = "inputLabel-root";

const variants = {
	animated: {
		true: "animated",
	},
};

export const variantsProps = cva(root, { variants });
export type TVariantsProps = VariantProps<typeof variantsProps>;
