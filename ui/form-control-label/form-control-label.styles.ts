import "./form-control-label.css";
import { VariantProps, cva } from "class-variance-authority";

const root = "formControlLabel formControlLabel-root";
const variants = {
	color: {
		primary: "formControlLabel-colorPrimary",
		secondary: "",
		tertiary: "",
		success: "",
		warning: "",
		error: "",
	},
	labelPlacement: {
		start: "formControlLabel-labelPlacementStart",
		end: "formControlLabel-labelPlacementEnd",
		top: "formControlLabel-labelPlacementTop",
		bottom: "formControlLabel-labelPlacementBottom",
	},
	size: {
		sm: "formControlLabel-sizeSmall",
		md: "formControlLabel-sizeMedium",
		lg: "formControlLabel-sizeLarge",
	},
};

export const variantProps = cva(root, { variants });
export type TVariantProps = VariantProps<typeof variantProps>;
