export const inputStyle = {
    rootSx: {
        '.css-1g3v319-MuiInputBase-root-MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline ': {
            borderColor: 'grey.A900',
        },

        '& .MuiOutlinedInput-root:hover': {
            borderColor: 'grey.A900',
        },

        marginBottom: '12px',
        '& span': {
            color: 'error.900',
        },
        '& .Mui-focused': {
            borderColor: '#00154E !important',
        },
    },

    textFieldSx: {
        '& input': {
            fontSize: '14px',
            padding: '15px 0px',
            fontWeight: 600,
            color: 'text.A100',
        },
        '& .MuiInputBase-root': {
            color: 'text.A100',
            border: '1px solid',
            borderColor: 'grey.A900',
            borderRadius: '8px',
            paddingLeft: '4px',
            paddingRight: '4px',
            backgroundColor: 'background.surface.100',
        },
        '& .MuiInputBase-root.Mui-focused': {
            border: '1px solid #00154E !important',
        },
        '& .MuiInputBase-root:hover': {
            border: '1px solid',
            borderColor: 'grey.A900',
        },
        '& .MuiInputBase-root:focus': {
            border: '1px solid #00154E !important',
        },
        '& fieldset': {
            border: 'none',
        },
        '& .MuiOutlinedInput-notchedOutline': {
            borderWidth: '1px !important',
        },

        '& .Mui-disabled': {
            backgroundColor: 'background.surface.A300',
            borderColor: 'grey.A900',
        },
        '& .Mui-error': {
            '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'error.900',
            },
        },
    },
}