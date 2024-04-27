import type { Metadata } from 'next'

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
                <div className='min-h-full flex flex-col'>
                    <Header />
                    <main className='flex-1'>{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    )
}
