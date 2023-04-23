'use client'
import { NextPage } from 'next'
import { Box, TextField } from '@mui/material'
import React from 'react'
import CheckboxesGroup from './components/raidResultCheckBoxes'
import Footer from './components/footer'
import SideLine from './components/sideLine'

const Observer: NextPage = (props) => {
    return (
        <>
            <TextField id="hostName" label="Host" variant="standard" />
            <TextField id="awayName" label="Away" variant="standard" />
            <SideLine />
            <CheckboxesGroup />
            <Footer />
        </>
    )
}

export default Observer
