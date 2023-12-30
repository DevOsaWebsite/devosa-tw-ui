import { VariantProps, cva } from "class-variance-authority";

const root = "formGroup formGroup-root";
const variants = {};

export const variantProps = cva(root, { variants });
export type TVariantProps = VariantProps<typeof variantProps>;
