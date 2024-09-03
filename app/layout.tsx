import { Pragati_Narrow } from 'next/font/google'
import { Metadata } from 'next'

import { EntriesProvider } from './(app)/_components/entries-provider'

import { Header } from './_widgets/header'
import { Footer } from './_widgets/footer'

import './(app)/_styles/global.scss'
import { CartProvider } from './(app)/_components/cart-provider'

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
                <EntriesProvider>
                    <CartProvider>
                        <div className='wrapper'>
                            <Header />
                            <main className='main'>{children}</main>
                            <Footer />
                        </div>
                    </CartProvider>
                </EntriesProvider>
            </body>
        </html>
    )
}
