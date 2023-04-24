'use client'
import { NextPage } from 'next'
import { Box, TextField } from '@mui/material'
import React from 'react'
import CheckboxesGroup from './components/checkBoxes'
import CommitButton from './components/commitButton'
import SideLine from './components/sideLine'

const Observer: NextPage = (props) => {
    return (
        <>
            <TextField id="hostName" label="Host" variant="standard" />
            <TextField id="awayName" label="Away" variant="standard" />
            <SideLine />
            <CheckboxesGroup />
            <CommitButton />
        </>
    )
}

export default Observer
