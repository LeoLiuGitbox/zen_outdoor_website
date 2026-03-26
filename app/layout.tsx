import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Zen Outdoor AU — Premium Outdoor Living Solutions',
    template: '%s | Zen Outdoor AU',
  },
  description:
    'Transform your outdoor space with Zen Outdoor AU. Premium composite decking, wall cladding, synthetic turf, pergolas, and outdoor roller blinds. Proudly serving Australia.',
  keywords: [
    'composite decking',
    'wall cladding',
    'synthetic turf',
    'pergolas',
    'outdoor roller blinds',
    'outdoor living',
    'Australia',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: process.env.NEXT_PUBLIC_APP_URL,
    siteName: 'Zen Outdoor AU',
    title: 'Zen Outdoor AU — Premium Outdoor Living Solutions',
    description:
      'Transform your outdoor space with premium composite decking, cladding, turf, pergolas & blinds.',
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
    <html lang="en-AU" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
