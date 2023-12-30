import { VariantProps, cva } from "class-variance-authority";

const root = "checkbox checkbox-root";
const variants = {
	color: {
		primary: "checkbox-colorPrimary",
		secondary: "",
		tertiary: "",
		success: "",
		warning: "",
		error: "",
	},
	size: {
		sm: "checkbox-sizeSmall",
		md: "checkbox-sizeMedium",
		lg: "checkbox-sizeLarge",
	},
	checked: {
		true: "checked",
	},
};

export const variantProps = cva(root, { variants });
export type TVariantProps = VariantProps<typeof variantProps>;
