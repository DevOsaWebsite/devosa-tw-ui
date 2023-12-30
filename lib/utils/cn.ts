
import classNames from "classnames";
import { twMerge } from "tailwind-merge";

type ClassDictionary = Record<string, unknown>;
type ClassValue = ClassValue[] | ClassDictionary | string | number | null | boolean | undefined;

export const cn = (...inputs: ClassValue[]): string => twMerge(classNames(inputs));
