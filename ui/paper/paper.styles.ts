import { VariantProps, cva } from "class-variance-authority";

const root = "paper";
const variants = {
	variant: {
		filled: "border-none",
		outlined: "border",
		text: "border-none",
	},
	color: {
		black: "bg-slate-950 text-surface-on-variant",
		default: "bg-surface text-surface-on",
		container: "bg-surface-container text-surface-on-variant",
		primary: "bg-primary text-primary-on",
		secondary: "bg-secondary text-secondary-on",
		tertiary: "bg-tertiary text-tertiary-on",
		inherit: "bg-inherit text-inherit",
		transparent: "ba-transparent text-current",
		error: "bg-error text-error-on",
		success: "bg-success text-success-on",
		warning: "bg-warning text-warning-on",
		containerLow: "bg-surface-container-low text-surface-on-variant",
		containerLowest: "bg-surface-container-lowest text-surface-on-variant",
		containerHigh: "bg-surface-container-high text-surface-on-variant",
		containerHighest: "bg-surface-container-highest text-surface-on-variant",
	},
	square: {
		true: "rounded-none",
	},
	rounded: {
		none: "rounded-none",
		default: "rounded",
		md: "rounded-md",
		lg: "rounded-lg",
		xl: "rounded-xl",
		"2xl": "rounded-2xl",
		"3xl": "rounded-3xl",
		"4xl": "rounded-4xl",
		"5xl": "rounded-5xl",
		"6xl": "rounded-6xl",
		"7xl": "rounded-7xl",
		full: "rounded-full",
	},
	elevation: {
		0: "",
		1: "shadow-sm",
		2: "shadow",
		3: "shadow-md",
		4: "shadow-lg",
		5: "shadow-xl",
	},
};

export const variantProps = cva(root, {
	variants,
	compoundVariants: [
		{
			variant: "filled",
			color: "default",
			class: variants.color.default,
		},
		{
			variant: "filled",
			color: "primary",
			class: variants.color.primary,
		},
		{
			variant: "filled",
			color: "secondary",
			class: variants.color.secondary,
		},
		{
			variant: "filled",
			color: "tertiary",
			class: variants.color.tertiary,
		},
		{
			variant: "filled",
			color: "error",
			class: variants.color.error,
		},
		{
			variant: "filled",
			color: "warning",
			class: variants.color.warning,
		},
		{
			variant: "filled",
			color: "success",
			class: variants.color.success,
		},
		{
			variant: "filled",
			color: "inherit",
			class: variants.color.inherit,
		},
		{
			variant: "filled",
			color: "container",
			class: variants.color.container,
		},
		{
			variant: "filled",
			color: "containerLow",
			class: variants.color.containerLow,
		},
		{
			variant: "filled",
			color: "containerLowest",
			class: variants.color.containerLowest,
		},
		{
			variant: "filled",
			color: "containerHigh",
			class: variants.color.containerHigh,
		},
		{
			variant: "filled",
			color: "containerHighest",
			class: variants.color.containerHighest,
		},

		{
			variant: "outlined",
			color: "default",
			class: "bg-default/5 border-variant text-surface-on-variant",
		},
		{
			variant: "outlined",
			color: "primary",
			class: "bg-primary/5 border-primary text-primary-on-container",
		},
		{
			variant: "outlined",
			color: "secondary",
			class: "bg-primary/5  border-secondary",
		},
		{
			variant: "outlined",
			color: "tertiary",
			class: "bg-tertiary/5 border-tertiary",
		},
		{
			variant: "outlined",
			color: "error",
			class: "bg-error/5  border-error",
		},
		{
			variant: "outlined",
			color: "warning",
			class: "bg-warning/5 border-warning",
		},
		{
			variant: "outlined",
			color: "success",
			class: "bg-success/5 border-success",
		},
		{
			variant: "outlined",
			color: "inherit",
			class: variants.color.inherit,
		},
		{
			variant: "outlined",
			color: "container",
			class: "bg-surface-container/5 border-surface-outline text-surface-on-variant",
		},
		{
			variant: "outlined",
			color: "containerLow",
			class: "bg-surface-containerLow/5 border-surface-outline text-surface-on-variant",
		},
		{
			variant: "outlined",
			color: "containerLowest",
			class: "bg-surface-containerLowest/5 border-surface-outline text-surface-on-variant",
		},
		{
			variant: "outlined",
			color: "containerHigh",
			class: "bg-surface-containerHigh/5 border-surface-outline text-surface-on-variant",
		},
		{
			variant: "outlined",
			color: "containerHighest",
			class: "bg-surface-containerHighest/5 border-surface-outline text-surface-on-variant",
		},
	],
});

export type TVariantProps = VariantProps<typeof variantProps>;
