import type { Metadata } from 'next'

import { EntriesProvider } from './(app)/_components/entries-provider'

import { Header } from './_widgets/header'
import { Footer } from './_widgets/footer'

import { proxima_nova } from './_shared/fonts'

import './(app)/_styles/global.scss'

export const metadata: Metadata = {
    title: 'OQ TECHNOLOGY',
    description: 'description'
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en'>
            <body className={proxima_nova.className}>
                <EntriesProvider>
                    <div className='wrapper'>
                        <Header />
                        <main className='main'>{children}</main>
                        <Footer />
                    </div>
                </EntriesProvider>
            </body>
        </html>
    )
}
