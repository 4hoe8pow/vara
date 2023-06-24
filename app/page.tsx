'use client'
import { NextPage } from 'next'
import styles from './styles/page.module.scss'
import { useEffect, useState } from 'react'
import { useKey } from 'react-use'
import { BsFillPersonFill } from 'react-icons/bs'
import { useTimer } from 'react-timer-hook'
import { listen } from '@tauri-apps/api/event'

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

    useKey('h', () => setHostScore((p) => ++p))
    useKey('H', () => setHostScore((p) => --p))
    useKey('a', () => setAwayScore((p) => ++p))
    useKey('A', () => setAwayScore((p) => --p))
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
            <div id={styles.hostRaid} className={styles.raidStatus}>
                1st Raid
            </div>
            <div id={styles.awayRaid} className={styles.raidStatus}>
                2nd Raid
            </div>
            <div id={styles.hostName} className={styles.teamName}>
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
            <div id={styles.awayName} className={styles.teamName}>
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
