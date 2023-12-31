"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.colorGenerator = void 0;
const getHsl = (color, colorVarian) => `hsl(var(--palette-${color}${colorVarian ? `-${colorVarian}` : ""}), <alpha-value>)`;
const getColorToken = (color, colorVariant) => ({
    [colorVariant]: getHsl(color, colorVariant),
});
const getColorsTokenObj = (color, variants) => {
    const getOtherTokens = () => variants.reduce((acc, colorVarian) => (Object.assign(Object.assign({}, getColorToken(color, colorVarian)), acc)), {});
    return {
        [color]: Object.assign({ DEFAULT: getHsl(color) }, getOtherTokens()),
    };
};
const getColorObject = (colors, colorTokens) => {
    return colors.reduce((acc, currentColor) => (Object.assign(Object.assign({}, acc), getColorsTokenObj(currentColor, colorTokens))), {});
};
const colorGenerator = () => {
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
    return Object.assign(Object.assign(Object.assign({}, getColorObject(main, mainColors)), getColorObject(action, actionColors)), getColorObject(["surface"], surfaceColors));
};
exports.colorGenerator = colorGenerator;
