import * as React from 'react'
import Box from '@mui/material/Box'
import FormLabel from '@mui/material/FormLabel'
import FormControl from '@mui/material/FormControl'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormHelperText from '@mui/material/FormHelperText'
import Checkbox from '@mui/material/Checkbox'
import SelectPoint from './selectPoint'

export default function CheckboxesGroup() {
    const [state, setState] = React.useState({
        gilad: false,
        jason: false,
        antoine: false,
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({
            ...state,
            [event.target.name]: event.target.checked,
        })
    }

    const { gilad, jason, antoine } = state
    const raidError = [gilad, jason, antoine].filter((v) => v).length !== 1

    return (
        <Box sx={{ display: 'flex' }}>
            <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                <FormLabel component="legend">Succsess</FormLabel>
                <FormGroup>
                    <Box>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={gilad}
                                    onChange={handleChange}
                                    name="gilad"
                                />
                            }
                            label="Touch"
                        />
                        <SelectPoint />
                    </Box>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={jason}
                                onChange={handleChange}
                                name="jason"
                            />
                        }
                        label="Only Bonus"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={antoine}
                                onChange={handleChange}
                                name="antoine"
                            />
                        }
                        label="Touch and Bonus"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={antoine}
                                onChange={handleChange}
                                name="antoine"
                            />
                        }
                        label="Empty"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={antoine}
                                onChange={handleChange}
                                name="antoine"
                            />
                        }
                        label="Anti Line Out"
                    />
                </FormGroup>
                <FormHelperText>
                    When raider returns(Including empty raid)
                </FormHelperText>
            </FormControl>
            <FormControl
                required
                error={raidError}
                component="fieldset"
                sx={{ m: 3 }}
                variant="standard"
            >
                <FormLabel component="legend">Raid Out</FormLabel>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={gilad}
                                onChange={handleChange}
                                name="gilad"
                            />
                        }
                        label="Tackle"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={jason}
                                onChange={handleChange}
                                name="jason"
                            />
                        }
                        label="Raider Line Out"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={antoine}
                                onChange={handleChange}
                                name="antoine"
                            />
                        }
                        label="Cant Out"
                    />
                </FormGroup>
            </FormControl>
        </Box>
    )
}
