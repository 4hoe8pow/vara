import { createSignal } from 'solid-js'
import { Checkbox, Button } from '@suid/material'
import { invoke } from '@tauri-apps/api'

export default function RecordingBoard() {
    const [checked, setChecked] = createSignal([
        false,
        false,
        false,
        false,
        false,
        false,
        false,
    ])

    const handleCheck = (index: number) => {
        const newChecked = [...checked()]
        newChecked[index] = !newChecked[index]
        setChecked(newChecked)
    }

    return (
        <div>
            <Button
                onClick={() => {
                    const checkedCount = checked().filter((c) => c).length
                    invoke('add_score', { point: checkedCount })
                }}
            >
                Success
            </Button>
        </div>
    )
}
