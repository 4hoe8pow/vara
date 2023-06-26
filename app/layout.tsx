'use client'
import './styles/globals.scss'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@mui/material'
import { varaTheme } from './theme'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'vara',
    description: 'kabaddi scorer',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html data-tauri-drag-region lang='ja'>
            <ThemeProvider theme={varaTheme}>
                <body className={`${inter.className} main`}>{children}</body>
            </ThemeProvider>
        </html>
    )
}
