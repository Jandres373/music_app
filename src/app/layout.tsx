import type { Metadata } from 'next'
import {poppins} from '@/styles/fonts'
import '@/styles/globals.css'
import { ThemeProvider } from '@/providers/theme.provider'
import { Toaster } from '@/components/ui/toaster'
import Script from 'next/script'


export const metadata: Metadata = {
  title: 'CoCode 2.0',
  description: 'Colaborate and make real your ideas with CoCode.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  //jsx
  return (
    <html lang="en">
      <body className={poppins.regular.className}>
        <ThemeProvider
          themes={['pink', 'red', 'blue', 'light', 'dark']}
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="w-full min-h-[99svh]">
            {children}
            <Toaster />
          </main>
          <Script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js" />
        </ThemeProvider>
      </body>
    </html>
  )
}
