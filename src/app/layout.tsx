import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Providers } from './provider'
import { useLang } from '@/lang/helper'

const poppings = Poppins({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
    title: 'Muji Jaya Gaharu',
    description: 'Generated by create next app',
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
                <Providers>
                    <div className='flex flex-col min-h-screen'>
                        <Header />
                        <div className='flex-1 bg-white md:text-base text-sm text-stone-500'>
                            {children}
                        </div>
                        <Footer />
                    </div>
                </Providers>
            </body>
        </html>
    )
}
