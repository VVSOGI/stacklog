import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { cx } from '@/utils/cx'
import { Footer, Navbar } from '@/components'
import '@/styles'

export const metadata: Metadata = {}

export default function RootLayout({ children, params }: { children: React.ReactNode; params: any }) {
  return (
    <html lang="en" className={cx('text-black bg-white dark:text-white dark:bg-black', GeistSans.variable, GeistMono.variable)}>
      <link rel="shortcut icon" href="https://nextjs.org/favicon.ico" />
      <body className="antialiased max-w-4xl mx-4 lg:mx-auto">
        <main className="flex-auto min-w-0 flex flex-col px-2 md:px-0">
          <Navbar locales={params.lang} />
          {children}
          <Footer locales={params.lang} />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}
