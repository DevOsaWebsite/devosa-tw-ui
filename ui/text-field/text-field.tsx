"use client";

import React from "react";

import { FormControl, TFormControlProps } from "../form-control";
import { FormHelperText, TFormHelperTextProps } from "../form-helper-text";
import { InputBase, TInputBaseProps } from "../input-base";
import { InputLabel } from "../input-label";

export type TTextFieldProps = TFormControlProps & TInputBaseProps & TFormHelperTextProps;

export const TextField = React.forwardRef<HTMLInputElement | HTMLTextAreaElement, TTextFieldProps>(
	({ helperText, label, error, fullWidth, ...rest }, ref) => {
		const inputRef = React.useRef<HTMLInputElement | HTMLTextAreaElement>(null);
		const onHandleClick = React.useCallback(() => {
			inputRef.current?.focus();
		}, []);

		const animated = Boolean(
			rest.value || rest.defaultValue || rest.placeholder || rest.startAdornment || rest.endAdornment,
		);

		return (
			<FormControl ref={ref} onClick={onHandleClick} error={error} fullWidth={fullWidth} animated={animated}>
				<InputLabel label={label} htmlFor={rest?.id} animated={animated} />
				<InputBase ref={inputRef} label={label} {...rest} />
				{helperText ? <FormHelperText helperText={helperText} /> : null}
			</FormControl>
		);
	},
);
TextField.displayName = "TextField";
