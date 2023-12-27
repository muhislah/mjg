import { links } from '@/configs/links'
import { faLeaf} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

type Props = {}

const Header = (props: Props) => {
    return (
        <div className='sticky py-2 bg-white top-0 left-0 right-0 flex shadow-md'>
            <div className='mx-auto container max-w-screen-lg py-4 flex flex-row items-center'>
                <a href='/' title='home'>
                    <div className='font-serif font-bold text-2xl leading-6 text-stone-500'>
                        <p className='inline-block'>Oud</p>
                        <FontAwesomeIcon className='inline-block ml-2 align-baseline' icon={faLeaf} height={20} />
                    </div>
                    <p className='text-sm'>By Muji Jaya Gaharu</p>
                </a>
                <div className='ml-auto'>
                    <ul className='flex flex-row items-center gap-3'>
                        {
                            links.map((link) => (
                                <li key={link.url}>
                                    <a className='hover:text-green-900 text-gray-500' href={link.url}>{link.name}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header