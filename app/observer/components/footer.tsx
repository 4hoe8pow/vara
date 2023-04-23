import * as React from 'react'
import Button from '@mui/material/Button'
import ArrowBack from '@mui/icons-material/ArrowBack'
import SendIcon from '@mui/icons-material/Send'
import Stack from '@mui/material/Stack'
import { invoke } from '@tauri-apps/api/tauri'

export default function Footer() {

    const commit = () => {invoke('score_update')}

    return (
        <Stack direction="row" spacing={2}>
            <Button variant="outlined" startIcon={<ArrowBack />} >
                Undo
            </Button>
            <Button variant="contained" endIcon={<SendIcon />} onClick={commit}>
                Commit
            </Button>
        </Stack>
    )
}
