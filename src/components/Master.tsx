import { useLanguage } from '@/providers/LanguageProvider'
import Head from 'next/head'
import React from 'react'
import Header from './Header'
import Footer from './Footer'

interface IProps {
    title: string
    description: string
    path: string
    children: React.ReactNode
    image?: string
    noHeader?: boolean
}

const Master = (props: IProps) => {
    const { generateUrl } = useLanguage()
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="height=device-height,width=device-width,initial-scale=1.0,maximum-scale=2,shrink-to-fit=no" />
                <title>{props.title}</title>
                {process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ? <meta name="google-site-verification" content={process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION} /> : null}
                <meta name="description" content={props.description} />
                {process.env.NEXT_PUBLIC_AHREFS_SITE_VERIFICATION ? <meta name="ahrefs-site-verification" content={process.env.NEXT_PUBLIC_AHREFS_SITE_VERIFICATION} /> : null}
                {/* <meta property="fb:app_id" content="260180081106004" /> */}
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Oudmjg" />
                <meta property="og:url" content={generateUrl(props.path)} />
                <meta property="og:title" content={props.title} />
                <meta property="og:description" content={props.description || 'Temukan kualitas terbaik gaharu di PT Muji Jaya Gaharu. Kami menyediakan berbagai produk gaharu dari sumber terpercaya dengan keharuman yang alami dan mendalam. Hubungi kami untuk informasi lebih lanjut dan penawaran spesial.'} />
                <meta property="og:image" content={props.image || "/static/images/png/logo.png"} />

                <meta name="author" content="Abu Daffa" />
                <meta name="keywords" content="oud, oud, oak, gaharu, oud gaharu, minyak, keharuman gaharu, kualitas gaharu" />

                {/* TODO: change meta data */}
                {/* <meta name="twitter:site" content="@cariproperti" />
                <meta name="twitter:creator" content="@cariproperti" /> */}
                <meta name="twitter:title" content={props.title} />
                <meta name="twitter:description" content={props.description || 'Temukan kualitas terbaik gaharu di PT Muji Jaya Gaharu. Kami menyediakan berbagai produk gaharu dari sumber terpercaya dengan keharuman yang alami dan mendalam. Hubungi kami untuk informasi lebih lanjut dan penawaran spesial.'} />
                <meta name="twitter:image" content={props.image || "/static/images/png/logo.png"} />
                <meta name="twitter:card" content="summary" />

                {/* <meta name="sentry-trace" content={`${traceId}`} /> */}

                <link rel="canonical" href={generateUrl(props.path)} />
                <link rel="alternate" hrefLang="en" href={generateUrl(props.path, 'en')} />
                <link rel="alternate" hrefLang="id" href={generateUrl(props.path, 'id')} />
                <link rel="alternate" hrefLang="id" href={generateUrl(props.path, 'ar')} />
                <link rel="alternate" hrefLang="x-default" href={generateUrl(props.path, 'id')} />

                {/* TODO: change icons */}
                <meta name="mobile-web-app-capable" content="yes" />
                <link rel="shortcut icon" href={`${process.env.NEXT_PUBLIC_MAINSITE_URL}/favicon.png`} type="image/x-icon" />
                <link rel="apple-touch-icon" href={`${process.env.NEXT_PUBLIC_MAINSITE_URL}/favicon.png`} />
                <link rel="apple-touch-icon" sizes="72x72" href={`${process.env.NEXT_PUBLIC_MAINSITE_URL}/favicon.png`} />
                <link rel="apple-touch-icon" sizes="114x114" href={`${process.env.NEXT_PUBLIC_MAINSITE_URL}/favicon.png`} />
                <link rel="apple-touch-icon" sizes="128x128" href={`${process.env.NEXT_PUBLIC_MAINSITE_URL}/favicon.png`} />

                <link rel="preconnect" href="https://www.google-analytics.com" />
            </Head>
            <main className='font-["Raleway"]'>
                {
                    props.noHeader ?
                        null :
                        <Header />
                }
                {props.children}
                <Footer />
            </main>
        </>
    )
}

export default Master