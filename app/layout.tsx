import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Footer, Navbar } from '@/components'

export const metadata: Metadata = {}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({ children, params }: { children: React.ReactNode; params: any }) {
  return (
    <html lang="en" className={cx('text-black bg-white dark:text-white dark:bg-black', GeistSans.variable, GeistMono.variable)}>
      <body className="antialiased h-screen max-w-4xl mx-4 lg:mx-auto">
        <main className="flex-auto min-w-0 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}
