import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sridhish Finvest Pvt. Ltd.',
  description: 'Your trusted partner in financial planning and investments',
  metadataBase: new URL('https://sridhishfinvest.com'),
  keywords: ['financial planning', 'mutual funds', 'investment', 'insurance', 'Sridhish Finvest'],
  authors: [{ name: 'Sridhish Finvest' }],
  creator: 'Sridhish Finvest',
  publisher: 'Sridhish Finvest Pvt. Ltd.',
  openGraph: {
    title: 'Sridhish Finvest Pvt. Ltd.',
    description: 'Your trusted partner in financial planning and investments',
    url: 'https://sridhishfinvest.com',
    siteName: 'Sridhish Finvest',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}



import './globals.css'