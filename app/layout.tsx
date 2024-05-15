import { Pragati_Narrow } from 'next/font/google'
import { Metadata } from 'next'

import { Header } from './_widgets/header'
import { Footer } from './_widgets/footer'

import './(app)/_styles/global.scss'

const pragati = Pragati_Narrow({ subsets: ['latin'], weight: ['400', '700'] })

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
            <body className={pragati.className}>
                <div className='wrapper'>
                    <Header />
                    <main className='main'>{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    )
}
