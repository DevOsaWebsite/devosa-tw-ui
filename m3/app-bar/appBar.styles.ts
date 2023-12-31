import { VariantProps, cva } from "class-variance-authority";

const root = "app-bar";
const variants = {
	position: {
		absolute: "app-bar__position--absolute",
		fixed: "app-bar__position--fixed",
		relative: "app-bar__position--relative",
		static: "app-bar__position--static",
		sticky: "app-bar__position--sticky",
	},
};

export const variantProps = cva(root, {
	variants,
});

export type TVariantProps = VariantProps<typeof variantProps>;
