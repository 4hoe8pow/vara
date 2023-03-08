import { createSignal, onMount } from 'solid-js'
import {
    Button,
    Table,
    TableBody,
    TableHead,
    TableRow,
    TableCell,
    Box,
} from '@suid/material'
import { Link } from '@solidjs/router'
import { invoke } from '@tauri-apps/api'

type PreGameParams = {
    id: number
    winner: string
    loser: string
    winner_score: number
    loser_score: number
    held_at: string
}

const Guide = () => {
    const [results, setResults] = createSignal<PreGameParams[]>([])

    onMount(async () => {
        setResults(await invoke('fetch_results_init'))
    })

    return (
        <>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Game ID</TableCell>
                        <TableCell>Winner</TableCell>
                        <TableCell>Loser</TableCell>
                        <TableCell>Score</TableCell>
                        <TableCell>Date</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {results().map((result) => (
                        <TableRow>
                            <TableCell>{result.id}</TableCell>
                            <TableCell>{result.winner}</TableCell>
                            <TableCell>{result.loser}</TableCell>
                            <TableCell>
                                {result.winner_score} - {result.loser_score}
                            </TableCell>
                            <TableCell>{result.held_at}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Box textAlign="center">
                <Button variant="contained" as={Link} href="/gamemaker">
                    ゲームメイク
                </Button>
            </Box>
        </>
    )
}

export default Guide
