import { VariantProps, cva } from "class-variance-authority";

const root = "typography typography-root";
const variants = {
	variant: {
		displayLarge: "typography-displayLarge",
		displayMedium: "typography-displayMedium",
		displaySmall: "typography-displaySmall",

		headlineLarge: "typography-headlineLarge",
		headlineMedium: "typography-headlineMedium",
		headlineSmall: "typography-headlineSmall",

		titleLarge: "typography-titleLarge",
		titleMedium: "typography-titleMedium",
		titleSmall: "typography-titleSmall",

		bodyLarge: "typography-bodyLarge",
		bodyMedium: "typography-bodyMedium",
		bodySmall: "typography-bodySmall",

		labelLarge: "typography-labelLarge",
		labelMedium: "typography-labelMedium",
		labelSmall: "typography-labelSmall",

		inherit: "text-inherit",
	},
	color: {
		default: "text-surface-on",
		container: "text-surface-on-variant",
		primary: "text-primary",
		"primary-on": "text-primary-on",
		secondary: "text-secondary",
		tertiary: "text-tertiary",
		inherit: "text-inherit",
		error: "text-error",
		current: "text-current",
	},
};

export const variantProps = cva(root, { variants });
export type TVariantProps = VariantProps<typeof variantProps>;
