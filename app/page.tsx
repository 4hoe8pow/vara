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
    hostName: string
    awayName: string
}

const Scorer: NextPage = () => {
    const [hostName, sethostName] = useState('')
    const [awayName, setawayName] = useState('')
    const [hostScore, setHostScore] = useState(0)
    const [awayScore, setAwayScore] = useState(0)
    const [host, setHost] = useState(7)
    const [away, setAway] = useState(7)

    useKey('h', () => setHostScore((point) => 1 + point))
    useKey('H', () => setHostScore((point) => 1 - point))
    useKey('a', () => setAwayScore((point) => 1 + point))
    useKey('A', () => setAwayScore((point) => 1 - point))
    useKey('b', () => setHost((n) => (n < 7 ? n + 1 : n)))
    useKey('n', () => setHost((n) => (n > 0 ? n - 1 : n)))
    useKey('x', () => setAway((n) => (n < 7 ? n + 1 : n)))
    useKey('z', () => setAway((n) => (n > 0 ? n - 1 : n)))
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
                ({ payload: { hostName, awayName } }: { payload: MessagePayload }) => {
                    sethostName(hostName)
                    setawayName(awayName)
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
                {hostName}
            </div>
            <div id={styles.hostScore} className={styles.score}>
                {hostScore}
            </div>
            <div id={styles.gameTime} className={styles.time}>
                {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
            </div>
            <div id={styles.awayScore} className={styles.score}>
                {awayScore}
            </div>
            <div id={styles.awayName} className={`${styles.teamName} ${zenAntique.className}`}>
                {awayName}
            </div>
            <div id={styles.host} className={styles.members}>
                {renderIcons(host)}
            </div>
            <div id={styles.away} className={styles.members}>
                {renderIcons(away)}
            </div>
        </main>
    )
}

export default Scorer
