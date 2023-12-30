import { VariantProps, cva } from "class-variance-authority";

const root = "formHelperText-root";

const variants = {};

export const variantsProps = cva(root, { variants });
export type TVariantsProps = VariantProps<typeof variantsProps>;
