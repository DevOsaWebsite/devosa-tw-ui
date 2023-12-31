"use strict";
"use client";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextField = void 0;
const react_1 = __importDefault(require("react"));
const form_control_1 = require("../form-control");
const form_helper_text_1 = require("../form-helper-text");
const input_base_1 = require("../input-base");
const input_label_1 = require("../input-label");
exports.TextField = react_1.default.forwardRef((_a, ref) => {
    var { helperText, label, error, fullWidth } = _a, rest = __rest(_a, ["helperText", "label", "error", "fullWidth"]);
    const inputRef = react_1.default.useRef(null);
    const onHandleClick = react_1.default.useCallback(() => {
        var _a;
        (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    }, []);
    const animated = Boolean(rest.value || rest.defaultValue || rest.placeholder || rest.startAdornment || rest.endAdornment);
    return (<form_control_1.FormControl ref={ref} onClick={onHandleClick} error={error} fullWidth={fullWidth} animated={animated}>
				<input_label_1.InputLabel label={label} htmlFor={rest === null || rest === void 0 ? void 0 : rest.id} animated={animated}/>
				<input_base_1.InputBase ref={inputRef} label={label} {...rest}/>
				{helperText ? <form_helper_text_1.FormHelperText helperText={helperText}/> : null}
			</form_control_1.FormControl>);
});
exports.TextField.displayName = "TextField";
