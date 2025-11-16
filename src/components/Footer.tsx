import { useLanguage } from '@/providers/LanguageProvider'
import Link from 'next/link'
import React from 'react'
import { FaLeaf } from 'react-icons/fa6'

const Footer = () => {
    const { lang } = useLanguage()
    return (
        <footer className='bg-neutral-700 text-white top-0 left-0 right-0 flex flex-col'>
            <div className='md:mx-auto w-full md:max-w-screen-lg py-4 flex flex-row rtl:flex-row-reverse justify-center items-center'>
                <Link className='hidden md:block' href='/' title='home'>
                    <div className='font-bold text-2xl leading-6'>
                        <p className='inline-block mr-1'>{lang('oud')}</p>
                        <FaLeaf className='w-5 inline' />
                    </div>
                </Link>
                <div className='md:ml-auto'>
                    <p>{lang("copyright")}</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer