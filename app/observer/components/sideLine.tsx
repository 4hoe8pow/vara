import { Box, Typography } from '@mui/material'

export default function SideLine() {
    return (
        <>
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
                <Typography variant="h5">Terminal</Typography>
            </Box>
        </>
    )
}
