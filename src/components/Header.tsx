import { useSidebar } from '@/providers/SidebarProvider'
import { LINKS } from '@/utils/constants'
import Link from 'next/link'
import React from 'react'
import { FaLeaf } from 'react-icons/fa6'
import { GiHamburgerMenu } from 'react-icons/gi'
import LanguageSwitcher from './LanguageSwitcher'
import { IDict, useLanguage } from '@/providers/LanguageProvider'


const Header = () => {
    const { toggleOpen } = useSidebar()
    const { lang } = useLanguage()
    return (
        <div className='w-full shadow sticky top-0 z-10 bg-white/50 backdrop-blur-md'>
            <div className='md:mx-auto max-w-5xl mx-5 py-5 text-neutral-700 flex flex-row items-center'>
                <Link href={"/"}>
                    <div className='text-2xl font-charm font-black flex items-center gap-1'>
                        <p>{lang("oud")}</p>
                        <FaLeaf />
                    </div>
                </Link>
                <div className='hidden md:flex flex-row items-center gap-5 ml-auto rtl:mr-auto rtl:ml-0'>
                    {
                        LINKS.map(link => (
                            <Link href={link.url} key={link.url}>
                                <div className='font-semibold hover:text-yellow-700'>
                                    {lang(link.name as IDict)}
                                </div>
                            </Link>
                        ))
                    }
                    <LanguageSwitcher />
                </div>
                <div className='flex md:hidden flex-row items-center gap-5 ml-auto'>
                    <button onClick={toggleOpen}>
                        <GiHamburgerMenu className='ml-auto text-xl' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header