import SyncAltTwoToneIcon from '@mui/icons-material/SyncAltTwoTone';
import { Box, Divider, InputBase, Tab, Tabs, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { homeStyle } from './style';

export default function Home() {
    const [value, setValue] = React.useState(0);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedBus, setSelectedBus] = useState('');

    const [maxDate] = useState(new Date()?.toISOString()?.split('T')[0]);

    const busStops = [
        'Chennai Mofussil',
        'Koyambedu',
        'Egmore Railway Station',
        'Madurai Periyar',
        'Coimbatore Gandhipuram',
        'Trichy Central',
        'Salem New',
        'Tirunelveli Junction',
        'Vellore New',
        'Thanjavur Old',
    ];



    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredData = busStops.filter((item) =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleBusStopSelect = (selectedBusStop) => {
        // Do something with the selected bus stop
        // console.log('Selected Bus Stop:', selectedBusStop);
        setSelectedBus(selectedBusStop)
    };

    return (
        <Box>
            <Box sx={homeStyle.rootSx}>
                <Typography sx={homeStyle.textSx}>Choose Transport</Typography>
                <Tabs
                    sx={homeStyle.tabSx}
                    value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="One Way" aria-labelledby={`simple-tab-${0}`} />
                    <Tab label="Round Trip" aria-labelledby={`simple-tab-${1}`} />
                </Tabs>
            </Box>

            <Box sx={{ bgcolor: '#FFFF', boxShadow: '0px 0px 4px 2px #E3E3E3', borderRadius: '8px', mt: 2.5 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', py: 2 }}>
                    <Box>
                        <Typography sx={homeStyle.placeHeaderSx}>FROM</Typography>
                        {
                            selectedBus?.length > 0 ?
                                <Typography sx={homeStyle.placeSx}>
                                    {selectedBus}
                                </Typography>
                                :
                                <>
                                    <TextField
                                        type="text"
                                        placeholder="Search bus stops..."
                                        value={searchTerm}
                                        onChange={handleInputChange}
                                        sx={{
                                            py: 1,
                                            width: '120px',
                                            '& .MuiOutlinedInput-input': {
                                                height: '10px'
                                            }
                                        }}
                                    />
                                    {
                                        searchTerm &&
                                        <Box sx={{ bgcolor: '#405784', opacity: 0.9 }}>
                                            {filteredData.map((item, index) => (
                                                <Typography key={index} onClick={() => handleBusStopSelect(item)} sx={homeStyle.listItemSx}>
                                                    {item}
                                                </Typography>
                                            ))}
                                        </Box>
                                    }
                                </>
                        }
                    </Box>
                    <SyncAltTwoToneIcon sx={{ color: '#00B6D9', fontSize: '30px' }} />
                    <Box>
                        <Typography sx={homeStyle.placeHeaderSx}>TO</Typography>
                        <Typography sx={homeStyle.placeSx}>PRG</Typography>
                    </Box>
                </Box>
                <Divider />
                <Box sx={{ display: 'flex', justifyContent: 'space-around', py: 1 }}>
                    <InputBase
                        type="date"
                        inputProps={{
                            min: maxDate,
                        }}
                        sx={{
                            '& .MuiInputBase-input': {
                                width: '140px',
                                color: '#28385C',
                                fontSize: '20px'
                            }
                        }}
                    />
                    <Box sx={{ pr: '38px' }}>
                        <Divider orientation="vertical" />
                    </Box>
                    <InputBase
                        type="time"
                        inputProps={{
                            min: maxDate,
                        }}
                        sx={{
                            '& .MuiInputBase-input': {
                                width: '95px',
                                color: '#28385C',
                                fontSize: '20px'
                            }

                        }}
                    />
                </Box>
            </Box>
        </Box >
    )
}