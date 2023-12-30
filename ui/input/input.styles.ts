import { VariantProps, cva } from "class-variance-authority";

const root = "input-root peer";

const variants = {
	disabled: {
		true: "disabled opacity-30 cursor-not-allowed",
		false: "cursor-text",
	},
};

export const variantsProps = cva(root, { variants });
export type TVariantsProps = VariantProps<typeof variantsProps>;
