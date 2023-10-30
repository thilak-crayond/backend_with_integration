import { Box, Typography } from "@mui/material";
import React from "react";
import { signInStyle } from './style'
import { Input } from "../../components/inputFields";
import { Buttons } from "../../components/button";
import { useAuth } from "../../store/auth";


export default function SignIn(props) {

    const { handleChange, profileState } = useAuth();

    return (
        <Box sx={signInStyle.rootSx}>
            <Typography sx={{
                color: '#FFF',
                fontWeight: '900',
                fontSize: '24px',
                textAlign: 'center',
                pt: 12,
                pl: 12,
                width: '220px'
            }}>
                Find Your Route And Get A Bus
            </Typography>
            <Typography sx={{
                color: 'grey',
                pt: 2,
                textAlign: 'center',
                fontSize: '14px',
                px: 8.5,
                fontWeight: '500',
                height: '30vh'
            }}>
                By selecting your route, every day you will get update of bus location on your route.
                Note: You can change your route any time
            </Typography>
            <Box sx={{ px: 3, }}>
                <Typography sx={{ color: '' }}>Mobile Number</Typography>
                <Input
                    value={profileState?.mobile_no}
                    onChange={(e) => handleChange('mobile_no', e.target.value)}
                />
                <Box py={2}>
                    <Typography sx={{ color: '' }}>Password</Typography>
                    <Input
                        value={profileState?.password}
                        onChange={(e) => handleChange('password', e.target.value)}
                    />
                </Box>
                <Box pt={2}>
                    <Buttons sx={{ py: 1.5, borderRadius: '10px', textTansform: 'capitalize' }}
                        variant='outlined'
                        fullWidth
                    >
                        Sign In
                    </Buttons>
                </Box>
            </Box>
        </Box>
    )
}