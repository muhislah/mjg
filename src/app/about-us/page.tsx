'use client';


import Image from 'next/image'
import React from 'react'
import Title from '../components/Title'
import { useLang } from '@/lang/helper'

type Props = {}

const AboutPage = (props: Props) => {
    const {lang} = useLang()

    return (
        <div className='md:max-w-5xl md:mx-auto mx-5'>
            <div className='py-10'>
                <Title>{lang['about_us']}</Title>
                <div className='flex md:flex-row flex-col gap-10 my-5'>
                    <div className='relative flex-1 min-h-80 rounded-md overflow-hidden'>
                        <Image
                            alt='about preview'
                            layout='fill'
                            objectFit='cover'
                            src='https://cdn.pixabay.com/photo/2014/07/08/10/47/team-386673_1280.jpg'
                        />
                    </div>
                    <div className='flex-1'>
                        <p className='text-justify mb-2'>{lang['about_description1']}</p>
                        <p className='text-justify mb-2'>{lang['about_description2']}</p>
                        <p className='text-justify mb-2'>{lang['about_description3']}</p>
                        <p className='text-justify mb-2'>{lang['about_description4']}</p></div>
                </div>

                <Title>{lang['vission_mission']}</Title>
                <div className='flex flex-row gap-10 my-5'>
                    <div className='flex-1'>
                        <p className='font-bold text-lg'>{lang['vission']}</p>
                        <p className='text-justify mb-2'>{lang['vission_description']}</p>
                        <p className='font-bold text-lg'>{lang['mission']}</p>
                        <div>
                            <ol className='list-decimal list-inside'>
                                <li className='flex flex-row gap-2'><span className='w-5'>1.</span>{lang['mission_description1']}</li>
                                <li className='flex flex-row gap-2'><span className='w-5'>2.</span>{lang['mission_description2']}</li>
                                <li className='flex flex-row gap-2'><span className='w-5'>3.</span>{lang['mission_description3']}</li>
                                <li className='flex flex-row gap-2'><span className='w-5'>4.</span>{lang['mission_description4']}</li>
                                <li className='flex flex-row gap-2'><span className='w-5'>5.</span>{lang['mission_description5']}</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default AboutPage