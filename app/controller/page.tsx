'use client'
import { NextPage } from 'next'
import { invoke } from '@tauri-apps/api/tauri'
import { useState } from 'react'
import styles from '../styles/controller.module.scss'

const Controller: NextPage = () => {
    const [host, sethost] = useState<String>()
    const [away, setaway] = useState<String>()

    return (
        <div className={styles.controllerContainer}>
            <h2>Game Infomation</h2>
            <div>host team</div>
            <input onChange={(e) => sethost(e.target.value)} />
            <div>away team</div>
            <input onChange={(e) => setaway(e.target.value)} />
            <button
                type='submit'
                onClick={async () =>
                    await invoke('register_name', {
                        host: host,
                        away: away,
                    })
                }
            >
                Register
            </button>
        </div>
    )
}

export default Controller
