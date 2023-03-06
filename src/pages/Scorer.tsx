import { Box, Grid, Paper } from '@suid/material'
import styled from '@suid/material/styles/styled'

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}))

function Scorer() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={0.5}>
                <Grid item xs={6} md={2}>
                    <Item>{ }</Item>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Scorer
