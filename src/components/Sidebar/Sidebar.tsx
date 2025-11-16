import { useSidebar } from '@/providers/SidebarProvider'
import { LINKS } from '@/utils/constants'
import Link from 'next/link'
import React from 'react'
import { FaTimes } from 'react-icons/fa'
import LanguageSwitcher from '../LanguageSwitcher'
import { IDict, useLanguage } from '@/providers/LanguageProvider'

const Sidebar = () => {
    const { isOpen, toggleOpen } = useSidebar()
    const { lang } = useLanguage()
    return (
        <div className={`min-h-screen w-full transition-transform duration-150 backdrop-blur-md fixed z-30 inset-0 transform bg-white/80 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
            <div className='mx-7 h-full py-10 flex flex-col'>
                <FaTimes onClick={toggleOpen} className='text-xl ml-auto' />
                <div className='flex flex-col gap-3 ml-auto items-end mt-10'>
                    {
                        LINKS.map(link => (
                            <Link onClick={toggleOpen} href={link.url} key={link.url}>
                                <div className='font-semibold hover:text-yellow-700'>
                                    {lang(link.name as IDict)}
                                </div>
                            </Link>
                        ))
                    }
                    <LanguageSwitcher />
                </div>
            </div>
        </div>
    )
}

export default Sidebar