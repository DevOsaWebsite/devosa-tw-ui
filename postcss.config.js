module.exports = {
	plugins: {
		"postcss-import": {},
		"postcss-short": {},
		"postcss-simple-vars": {},
		"postcss-mixins": {},
		"postcss-discard-comments": {},
		"tailwindcss/nesting": "postcss-nesting",
		"postcss-merge-rules": {},
		"postcss-combine-duplicated-selectors": {},
		tailwindcss: {},
		autoprefixer: {},
		"postcss-sorting": {},
		...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {}),
	},
};
