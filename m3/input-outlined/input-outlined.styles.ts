import { VariantProps, cva } from "class-variance-authority";

const root = "inputOutlined-root";

const variants = {
	animated: {
		true: "animated",
	},
};

export const variantsProps = cva(root, { variants });
export type TVariantsProps = VariantProps<typeof variantsProps>;
