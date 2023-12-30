import { VariantProps, cva } from "class-variance-authority";

const root = "svg-icon svgIcon-root";
const variants = {
	size: {
		sm: "svgIcon-sizeSmall",
		md: "svgIcon-sizeMedium",
		lg: "svgIcon-sizeLarge",
		inherit: "svgIcon-sizeInherit",
	},
};

export const variantProps = cva(root, { variants });
export type TVariantProps = VariantProps<typeof variantProps>;
