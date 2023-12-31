import { VariantProps, cva } from "class-variance-authority";

const root = "inputBase-root";

const variants = {
	startAdornment: {
		true: "inputBase-startAdornment",
	},
	endAdornment: {
		true: "inputBase-endAdornment",
	},
};

export const variantsProps = cva(root, { variants });
export type TVariantsProps = VariantProps<typeof variantsProps>;
