import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Providers } from './provider'
import { LangContextProvider } from '@/context/useLangContext'

const poppings = Poppins({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
    title: 'Muji Jaya Gaharu',
    description: 'Temukan kualitas terbaik gaharu di PT Muji Jaya Gaharu. Kami menyediakan berbagai produk gaharu dari sumber terpercaya dengan keharuman yang alami dan mendalam. Hubungi kami untuk informasi lebih lanjut dan penawaran spesial.',
    keywords: ['oud', 'oud', 'oak', 'gaharu', 'oud gaharu', 'minyak', 'keharuman gaharu', 'kualitas gaharu'],
    authors: {
        name: 'Abu Daffa',
        url: 'https://oudmjg.com'
    },
    icons: 'favicon.png'
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <title>Muji Jaya Gaharu - Your finest oud made by nature</title>
                <link rel="icon" href='/favicon.png' type="image/png"></link>
            </head>
            <body className={`${poppings.className}`}>
                <LangContextProvider>
                    <Providers>
                        <div className='flex flex-col min-h-screen'>
                            <Header />
                            <div className='flex-1 bg-white md:text-base text-sm text-stone-500'>
                                {children}
                            </div>
                            <Footer />
                        </div>
                    </Providers>
                </LangContextProvider>
            </body>
        </html>
    )
}
