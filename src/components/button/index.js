import { Button } from "@mui/material";
import React from "react";
import { buttonStyle } from './style';
export function Buttons(props) {
    const {
        fullWidth,
        disabled = false,
        buttonStyleSx = {},
        className = '',
        children = '',
        variant = 'contained',
        loading = false,
        ...rest
    } = props;


    return (
        <Button
            fullWidth={fullWidth}
            loading={loading}
            disabled={disabled}
            variant={variant}
            sx={{
                ...buttonStyle.rootSx,
                ...buttonStyleSx,
            }}
            className={`${className}`}
            {...rest}
        >
            {children}
        </Button>

    )
}