'use client'
import {  createTheme } from '@mui/material/styles'
import { pink, amber, teal } from '@mui/material/colors'

export const varaTheme = createTheme({
    palette: {
        error: {
            main: pink[600],
        },
        warning: {
            main: amber[600],
        },
        success: {
            main: teal[600],
        },
    },
})
