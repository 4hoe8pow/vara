import './styles/globals.scss'

export const metadata = {
  title: 'D Score',
  description: 'Kabaddi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
