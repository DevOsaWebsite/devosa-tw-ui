import { VariantProps, cva } from "class-variance-authority";

const root = "inputAdornment-root";

const variants = {
	position: {
		startAdornment: "inputAdornment-startAdornment",
		endAdornment: "inputAdornment-endAdornment",
	},
};

export const variantsProps = cva(root, { variants });
export type TVariantsProps = VariantProps<typeof variantsProps>;
