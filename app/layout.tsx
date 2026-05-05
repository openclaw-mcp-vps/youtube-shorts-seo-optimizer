import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'YouTube Shorts SEO Optimizer',
  description: 'Optimize YouTube Shorts for maximum reach and engagement with trending hashtags, optimal posting times, and AI-powered title suggestions.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="28cfa458-7648-4d9a-93a8-60e1db1ce8f1"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  )
}
