import { TextField } from "@mui/material";
import { useState } from "react";

function CustomTextField({ name, label, variant, type = 'text', onChange, value, children, error = false, InputProps, fullWidth = false, required = false }) {
    const errorTextColor = '#de071c';
    const errorBgColor = '#fef0f0';

    const commonStyle = {
        borderRadius: "4px",
    }

    const styleOnBlur = {
        ...commonStyle,
        input: {
            backgroundColor: `${error ? errorBgColor : '#fff'}`,
            border: `1px solid ${error ? errorTextColor : '#d6d6d6'}`,
            borderRadius: "4px",

        },
    }

    const styleOnFocus = {
        ...commonStyle,
        input: {
            backgroundColor: "#fff",
            border: `1px solid ${error ? errorTextColor : '#0070c9'}`,
            borderRadius: "4px"
        },
        boxShadow: error ? 'none' : '0 0 0 3px rgba(131, 192, 253, .5)'
    }

    const inputProps = {
        ...InputProps,
        disableUnderline: true,
    }

    const [focus, setFocus] = useState(false);

    return (
        <TextField
            name={name}
            label={label}
            variant={variant}
            sx={focus ? styleOnFocus : styleOnBlur}
            type={type}
            onChange={onChange}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            value={value}
            fullWidth = {fullWidth}
            required = {required}
            error={error}
            InputProps={inputProps}
        >
            {children}
        </TextField>
    )
}

export default CustomTextField;