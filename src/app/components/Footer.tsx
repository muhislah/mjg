import { links } from '@/configs/links'
import { faLeaf, faTree } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
    return (
        <footer className='bg-white top-0 left-0 right-0 flex flex-col'>
            <div className='md:mx-auto mx-4 container max-w-screen-lg py-4 flex flex-row items-center'>
                <a href='/' title='home'>
                    <div className='font-serif font-bold text-2xl leading-6 text-stone-500'>
                        <p className='inline-block'>Oud</p>
                        <FontAwesomeIcon className='inline-block ml-2 align-baseline' icon={faLeaf} height={20}/>
                    </div>
                    <p className='text-sm'>By Muji Jaya Gaharu</p>
                </a>
                <div className='ml-auto'>
                        <p>2023 @ CV. Muji Jaya Gaharu</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer