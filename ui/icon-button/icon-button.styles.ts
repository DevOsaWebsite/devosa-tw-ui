import { VariantProps, cva } from "class-variance-authority";

const root = "iconButton iconButton-root";
const variants = {
	color: {
		primary: "iconButton-colorPrimary",
	},
	size: {
		sm: "iconButton-sizeSmall",
		md: "iconButton-sizeMedium",
		lg: "iconButton-sizeLarge",
	},
};

export const variantProps = cva(root, { variants });
export type TVariantProps = VariantProps<typeof variantProps>;
