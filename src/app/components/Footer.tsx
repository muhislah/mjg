'use client';

import { useLang } from '@/lang/helper'
import { faLeaf, faTree } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
    const { lang } = useLang()
    return (
        <footer className='bg-white text-stone-500 top-0 left-0 right-0 flex flex-col'>
            <div className='md:mx-auto w-full md:max-w-screen-lg py-4 flex flex-row justify-center items-center'>
                <a className='hidden md:block' href='/' title='home'>
                    <div className='font-serif font-bold text-2xl leading-6'>
                        <p className='inline-block'>{lang['oud']}</p>
                        <FontAwesomeIcon className='inline-block ml-2 align-baseline' icon={faLeaf} height={20} />
                    </div>
                    <p className='text-sm'>By Muji Jaya Gaharu</p>
                </a>
                <div className='md:ml-auto'>
                    <p>2023 &copy; CV. Muji Jaya Gaharu</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer