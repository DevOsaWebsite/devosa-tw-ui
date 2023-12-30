import { VariantProps, cva } from "class-variance-authority";

const root = "appBar appBar-root";
const variants = {
	position: {
		absolute: "appBar-positionAbsolute",
		fixed: "appBar-positionFixed",
		relative: "appBar-positionRelative",
		static: "appBar-positionStatic",
		sticky: "appBar-positionSticky",
	},
};

export const variantProps = cva(root, {
	variants,
});

export type TVariantProps = VariantProps<typeof variantProps>;
