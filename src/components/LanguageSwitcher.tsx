'use client'
import { useLanguage } from '@/providers/LanguageProvider'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'

type Props = {
    containerClassName?: string
}

const LanguageSwitcher = (props: Props) => {
    const [showLang, setShowLang] = useState(false)
    const { locale } = useLanguage()
    const containerRef = useRef<HTMLDivElement>(null)

    // Close on outside click (for mobile)
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                containerRef.current &&
                !containerRef.current.contains(event.target as Node)
            ) {
                setShowLang(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    // Detect if user is on mobile
    const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768

    const handleMouseEnter = () => {
        if (!isMobile) setShowLang(true)
    }

    const handleMouseLeave = () => {
        if (!isMobile) setShowLang(false)
    }

    const handleButtonClick = () => {
        if (isMobile) setShowLang(prev => !prev)
    }

    return (
        <div
            ref={containerRef}
            className='relative'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div
                className='px-2 py-1 rounded-md text-sm bg-neutral-800 text-white border-neutral-300 cursor-pointer font-semibold'
                onClick={handleButtonClick}
            >
                {locale}
            </div>
            <div
                className={`transform origin-top duration-150 ease-linear ${showLang ? 'scale-y-100 pointer-events-auto' : 'scale-y-0 pointer-events-none'
                    } absolute flex flex-col items-end p-2 px-4 gap-1 text-sm rounded-md bg-white/90 backdrop-blur-3xl border border-neutral-300 top-[calc(100%)] right-0 ${props.containerClassName}`}
            >
                <Link href='/' locale='id' className='hover:text-yellow-700 font-semibold'>
                    Indonesian
                </Link>
                <Link href='/' locale='en' className='hover:text-yellow-700 font-semibold'>
                    English
                </Link>
                <Link href='/' locale='ar' className='hover:text-yellow-700 font-semibold'>
                    العربية
                </Link>
            </div>
        </div>
    )
}

export default LanguageSwitcher
