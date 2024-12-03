export const homeStyle = {
    rootSx: {
        backgroundImage: 'linear-gradient(to bottom right, #28385C, #3F5682)',
        pt: 3,
        pb: 2

    },
    textSx: {
        color: '#FFF',
        textAlign: 'center',
        fontSize: '16px',
        textTransform: 'uppercase'
    },
    listItemSx: {
        textAlign: 'center',
        color: 'black',
        fontSize: '16px',
        fontWeight: '900',
        py: 0.2,
        cursor: 'pointer',
        // width: '130px'
    },
    tabSx: {
        mt: 4,
        '& .MuiTabs-flexContainer': {
            display: 'flex',
            justifyContent: 'space-around',
        },
        '& .MuiTabs-indicator': {
            backgroundColor: '#00B6D9',
            textAlign: 'left',
        },
        '& .MuiTab-root.Mui-selected': {
            color: '#00B6D9'
        },
        '& .MuiTab-root': {
            color: '#FFFF'
        }
    },
    placeHeaderSx: { color: '#000', fontSize: '14px' },
    placeSx: { color: '#28385C', fontSize: '20px', fontWeight: 900 }
}