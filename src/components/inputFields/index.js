import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import React from "react";
import { inputStyle } from './style'

export function Input(props) {
    const {
        className = '',
        ref,
        value = '',
        testFieldStyle,
        placeholder = '',
        rootStyle,
        isReadOnly = false,
        isError = false,
        autoFocus = false,
        variant = 'outlined',
        helperText,
        errorMessage,
        minRows = '',
        onChange = () => false,
        startAdornment,
        endAdornment,
        multiline = false,
        ...rest
    } = props;
    return (
        <Box>
            <TextField
                ref={ref}
                sx={{ ...inputStyle.textFieldSx, ...testFieldStyle }}
                variant={variant}
                value={value}
                placeholder={placeholder}
                fullWidth
                disabled={isReadOnly}
                multiline={multiline}
                onChange={onChange}
                helperText={helperText}
                minRows={minRows}
                error={isError}
                className={`${className}`}
                autoFocus={autoFocus}
                InputProps={{

                    startAdornment: <InputAdornment position="start">{startAdornment}</InputAdornment>,
                    endAdornment: <InputAdornment position="end">{endAdornment}</InputAdornment>,
                }}
                {...rest}
            />
            {
                isReadOnly === false && isError && (
                    <Typography sx={{ mt: 0.5 }} variant="caption" color="error">
                        {errorMessage}
                    </Typography>
                )
            }
        </Box>
    )
}