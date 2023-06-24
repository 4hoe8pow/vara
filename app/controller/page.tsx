'use client'
import { NextPage } from 'next'
import { invoke } from '@tauri-apps/api/tauri'
import { useState } from 'react'

const Controller: NextPage = () => {
    const [hostName, sethostName] = useState<String>()
    const [awayName, setawayName] = useState<String>()

    return (
        <div>
            <div>host team</div>
            <input onChange={(e) => sethostName(e.target.value)} />
            <div>away team</div>
            <input onChange={(e) => setawayName(e.target.value)} />
            <button
                type='submit'
                onClick={async () =>
                    await invoke('register_name', {
                        hostName: hostName,
                        awayName: awayName,
                    })
                }
            >
                Register
            </button>
        </div>
    )
}

export default Controller
