import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import FacebookPixel from '@/components/FacebookPixel'

export const metadata: Metadata = {
  title: 'Focus',
  description: 'Agence de motion design',
}

const myFont = localFont({ src: './ClashDisplay-Variable.woff2' })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        {children}
        <FacebookPixel />
      </body>
    </html>
  )
}