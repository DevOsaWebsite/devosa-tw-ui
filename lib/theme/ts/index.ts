import { type Config } from "tailwindcss";
import colors from "tailwindcss/colors";

import { colorGenerator } from "./colors-generator";

export const config: Partial<Config> = {
	darkMode: ["class", "data-theme"],
	theme: {
		extend: {
			colors: {
				...colorGenerator(),
				black: colors.slate["950"],
			},
		},
	},
	corePlugins: {},
	plugins: [],
};
