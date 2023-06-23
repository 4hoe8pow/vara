'use client'
import { NextPage } from 'next'
import styles from './page.module.scss'
import { useState } from 'react'
import { useKey } from 'react-use'
import { BsFillPersonFill } from 'react-icons/bs'

const Scorer: NextPage = () => {
    const [hostScore, setHostScore] = useState(0)
    const [awayScore, setAwayScore] = useState(0)
    const [host, setHost] = useState(7)
    const [away, setAway] = useState(7)

    useKey('h', () => setHostScore((p) => ++p))
    useKey('H', () => setHostScore((p) => --p))
    useKey('a', () => setAwayScore((p) => ++p))
    useKey('A', () => setAwayScore((p) => --p))
    useKey('y', () => setHost((n) => (n < 7 ? n + 1 : n)))
    useKey('n', () => setHost((n) => (n > 0 ? n - 1 : n)))
    useKey('q', () => setAway((n) => (n < 7 ? n + 1 : n)))
    useKey('z', () => setAway((n) => (n > 0 ? n - 1 : n)))

    const renderIcons = (count: number) => {
        return Array.from({ length: count }, (_) => <BsFillPersonFill />)
    }

    return (
        <main className={styles.boardContainer}>
            <div id={styles.hostRaid} className={styles.raidStatus}>
                1st Raid
            </div>
            <div id={styles.awayRaid} className={styles.raidStatus}>
                2nd Raid
            </div>
            <div id={styles.hostName} className={styles.teamName}>
                foo
            </div>
            <div id={styles.hostScore} className={styles.score}>
                {hostScore}
            </div>
            <div id={styles.gameTime} className={styles.time}>
                20:00
            </div>
            <div id={styles.awayScore} className={styles.score}>
                {awayScore}
            </div>
            <div id={styles.awayName} className={styles.teamName}>
                bar
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
