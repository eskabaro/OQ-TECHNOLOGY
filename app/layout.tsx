import type { Metadata } from 'next'

import { Header } from './_widgets/header/Header'
import { Footer } from './_widgets/footer/Footer'

import { proxima_nova } from './_shared/fonts'

import './globals.scss'

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
                <div className='min-h-full flex flex-col'>
                    <Header />
                    <main className='flex-1'>{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    )
}
