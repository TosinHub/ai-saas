import './globals.css'
import type { Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import { ThemeProvider } from "@/components/theme-provider"
import Head from 'next/head'


export const metadata: Metadata = {
  title: 'Genius',
  description: 'AI Generated Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
    <Head>
		<meta
			name="theme-color"
			media="(prefers-color-scheme: light)"
			content="white"
		/>
		<meta
			name="theme-color"
			media="(prefers-color-scheme: dark)"
			content="black"
		/>
	</Head>
      <body>
      <ThemeProvider attribute="class">
        {children}
        </ThemeProvider>
        </body>
    </html>
    </ClerkProvider>
  )
}
