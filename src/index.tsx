/* @refresh reload */
import { render } from 'solid-js/web'
import { Router } from '@solidjs/router'
import './styles/dharma.css'
import Dharma from './Dharma'

render(
    () => (
        <Router>
            <Dharma />
        </Router>
    ),
    document.getElementById('root') as HTMLElement
)
