'use client'
import { NextPage } from 'next'
import { invoke } from '@tauri-apps/api/tauri'
import { useState } from 'react'
import styles from '../styles/controller.module.scss'

const Controller: NextPage = () => {
    const [hostName, sethostName] = useState<String>()
    const [awayName, setawayName] = useState<String>()

    return (
        <div className={styles.controllerContainer}>
            <h2>Game Infomation</h2>
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
