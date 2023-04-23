'use client'
import { NextPage } from 'next'
import { Box, TextField, Typography } from '@mui/material'

const Observer: NextPage = (props) => {
    return (
        <>
            <TextField id="hostName" label="Host" variant="standard" />
            <TextField id="awayName" label="Away" variant="standard" />
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    '&::before, &::after': {
                        borderTop: 'solid 1px',
                        content: '""',
                        flexGrow: 1,
                    },
                    '&::before': {
                        mr: 3,
                    },
                    '&::after': {
                        ml: 3,
                    },
                }}
            >
                <Typography variant="h4">操作画面</Typography>
            </Box>
        </>
    )
}

export default Observer
