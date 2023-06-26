'use client'
import { NextPage } from 'next'
import styles from './styles/scorer.module.scss'
import { useEffect, useState } from 'react'
import { useKey } from 'react-use'
import { BsFillPersonFill } from 'react-icons/bs'
import { useTimer } from 'react-timer-hook'
import { listen } from '@tauri-apps/api/event'
import { Zen_Antique } from 'next/font/google'
import RectangleTwoToneIcon from '@mui/icons-material/RectangleTwoTone'

const zenAntique = Zen_Antique({
    subsets: ['latin'],
    weight: '400',
})

interface MessagePayload {
    host: string
    away: string
}

const Scorer: NextPage = () => {
    const [names, setNames] = useState({ host: '', away: '' })
    const [scores, setScores] = useState({ host: 0, away: 0 })
    const [members, setMembers] = useState({ host: 7, away: 7 })

    const updateScore = (team: 'host' | 'away', delta: number) =>
        setScores((prevScores) => ({ ...prevScores, [team]: prevScores[team] + delta }))

    const updateMembers = (team: 'host' | 'away', delta: number) =>
        setMembers((prevMembers) => ({
            ...prevMembers,
            [team]: Math.max(0, Math.min(prevMembers[team] + delta, 7)),
        }))

    useKey('h', () => updateScore('host', 1))
    useKey('H', () => updateScore('host', -1))
    useKey('a', () => updateScore('away', 1))
    useKey('A', () => updateScore('away', -1))
    useKey('b', () => updateMembers('host', 1))
    useKey('n', () => updateMembers('host', -1))
    useKey('x', () => updateMembers('away', 1))
    useKey('z', () => updateMembers('away', -1))
    useKey('p', () => pause())
    useKey('t', () => resume())

    const renderIcons = (count: number) => {
        return Array.from({ length: count }, (_, index) => <BsFillPersonFill key={`icon_${index}`} />)
    }
    const time = new Date()
    time.setSeconds(time.getSeconds() + 1200)

    const { seconds, minutes, isRunning, start, pause, resume } = useTimer({
        expiryTimestamp: time,
        onExpire: () => console.warn('onExpire called'),
    })

    // レイドアイコンの配色名
    const colors: Array<'success' | 'warning' | 'error'> = ['success', 'warning', 'error']

    useEffect(() => {
        let unlisten: () => void
        ;(async () => {
            unlisten = await listen(
                'updated_name',
                ({ payload: { host, away } }: { payload: MessagePayload }) => {
                    setNames({ host, away })
                },
            )
        })()

        return () => {
            unlisten?.()
        }
    }, [])

    return (
        <main className={styles.boardContainer}>
            <div id={styles.hostRaidIcon} className={styles.raidIcon}>
                {colors.map((color) => (
                    <RectangleTwoToneIcon key={color} color={color} />
                ))}
            </div>
            <div id={styles.awayRaidIcon} className={styles.raidIcon}>
                {colors.map((color) => (
                    <RectangleTwoToneIcon key={color} color={color} />
                ))}
            </div>
            <div id={styles.hostRaidStatus} className={styles.raidStatus}>
                1st Raid
            </div>
            <div id={styles.awayRaidStatus} className={styles.raidStatus}>
                2nd Raid
            </div>
            <div id={styles.hostName} className={`${styles.teamName} ${zenAntique.className}`}>
                {names.host}
            </div>
            <div id={styles.hostScore} className={styles.score}>
                {scores.host}
            </div>
            <div id={styles.gameTime} className={styles.time}>
                {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
            </div>
            <div id={styles.awayScore} className={styles.score}>
                {scores.away}
            </div>
            <div id={styles.awayName} className={`${styles.teamName} ${zenAntique.className}`}>
                {names.away}
            </div>
            <div id={styles.host} className={styles.members}>
                {renderIcons(members.host)}
            </div>
            <div id={styles.away} className={styles.members}>
                {renderIcons(members.away)}
            </div>
        </main>
    )
}

export default Scorer
