import React from "react"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { BackToTop } from '@/components/back-to-top'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: 'Stackshift | IT & Software Solutions',
  description: 'Stackshift delivers cutting-edge IT solutions, AI integration, cloud applications, and digital transformation services to accelerate your business.',
  generator: 'v0.app',
  applicationName: 'Stackshift',
  keywords: ['IT Solutions', 'Software Development', 'AI Integration', 'Cloud Applications', 'Digital Transformation', 'Tech Services'],
  authors: [{ name: 'Stackshift', url: 'https://stackshift.com' }],
  colorScheme: 'light dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <BackToTop />
        <Analytics />
      </body>
    </html>
  )
}
