'use client'
import { NextPage } from 'next'
import { invoke } from '@tauri-apps/api/tauri'
import { useState } from 'react'

const Controller: NextPage = () => {
    const [hostName, sethostName] = useState<String>()
    const [awayName, setawayName] = useState<String>()
    const updateTeamState = () => {
        invoke('register_name', {
            host_name: hostName,
            away_name: awayName,
        })
    }
    return (
        <div>
            <div>host team</div>
            <input onChange={(e) => sethostName(e.target.value)} />
            <div>away team</div>
            <input onChange={(e) => setawayName(e.target.value)} />
            <button type='submit' onClick={updateTeamState}>
                確定
            </button>
        </div>
    )
}

export default Controller
