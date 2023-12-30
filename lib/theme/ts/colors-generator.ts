const getHsl = (color: string, colorVarian?: string) =>
	`hsl(var(--palette-${color}${colorVarian ? `-${colorVarian}` : ""}), <alpha-value>)`;

const getColorToken = (color: string, colorVariant: string) => ({
	[colorVariant]: getHsl(color, colorVariant),
});

const getColorsTokenObj = (color: string, variants: string[]) => {
	const getOtherTokens = () =>
		variants.reduce((acc, colorVarian: string) => ({ ...getColorToken(color, colorVarian), ...acc }), {});

	return {
		[color]: {
			DEFAULT: getHsl(color),
			...getOtherTokens(),
		},
	};
};
const getColorObject = (colors: string[], colorTokens: string[]) => {
	return colors.reduce((acc, currentColor) => ({ ...acc, ...getColorsTokenObj(currentColor, colorTokens) }), {});
};

export const colorGenerator = () => {
	const main = ["primary", "secondary", "tertiary"];

	const action = ["error", "success", "warning"];

	const mainColors = [
		"on",
		"container",
		"on-container",
		"inverse",
		"fixed",
		"on-fixed",
		"on-fixed-variant",
		"fixed-dim",
	];
	const actionColors = ["on", "container", "on-container"];

	const surfaceColors = [
		"dim",
		"bright",
		"inverse",
		"on",
		"on-inverse",
		"container",
		"container-lowest",
		"container-low",
		"container-high",
		"container-highest",
		"on-variant",
		"outline",
		"outline-variant",
		"scrim",
		"shadow",
	];

	return {
		...getColorObject(main, mainColors),
		...getColorObject(action, actionColors),
		...getColorObject(["surface"], surfaceColors),
	};
};
