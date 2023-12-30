import { VariantProps, cva } from "class-variance-authority";

const root = "card-header";

const variants = {
	disablePadding: { true: "disablePadding" },
};

export const styles = {
	action: `${root}__action`,
	avatar: `${root}__avatar`,
	content: `${root}__content`,
};

export const variantProps = cva(root, {
	variants,
});

export type TVariantProps = VariantProps<typeof variantProps>;
