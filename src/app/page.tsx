'use client';

import Image from 'next/image'
import background from '@/assets/images/background.jpg'
import { Button, Card, CardBody, CardFooter, CardHeader, Image as NextImage } from '@nextui-org/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { useEffect, useState } from 'react';
import { sendWhatsApp } from '@/utils/helper';
import { useRouter } from 'next/navigation';
import Title from './components/Title';
import { useLangContext } from '@/context/useLangContext';
import images from '@/database/image.json'

export default function Home() {
    const router = useRouter()
    const { lang } = useLangContext()

    return (
        <main className=''>
            <div className='block'>
                <div className='relative flex-1 min-h-96'>
                    <Image
                        src={background.src}
                        layout='fill'
                        objectFit='cover'
                        alt='Background Image'
                        loading='lazy'
                    />
                </div>
                <div className='relative md:-top-52 -top-64 md:-mb-40 -mb-56 z-10 bg-white mx-5 md:mx-auto max-w-5xl rounded-md shadow-md'>
                    <div className='py-8 md:px-12 px-5'>
                        <h1 className='text-5xl font-serif font-semibold'>Oud</h1>
                        <div className='md:text-base text-sm'>
                            <figcaption className='my-2 text-justify'>
                                {lang['oud_description1']}
                            </figcaption>
                            <figcaption className='my-2 text-justify'>
                                {lang['oud_description2']}
                            </figcaption>
                            <figcaption className='my-2 text-justify'>
                                {lang['oud_description3']}
                            </figcaption>
                        </div>
                        <div className='flex flex-row gap-2 mt-4 items-center'>
                            <Button onClick={() => router.push('/contact-us')}>
                                Contact Us
                            </Button>
                            <Button
                                className='bg-green-600 text-white'
                                onClick={() => sendWhatsApp(`6285225611505`)}
                            >
                                <FontAwesomeIcon icon={faWhatsapp} />
                                Whatsapp
                            </Button>
                        </div>
                    </div>

                </div>

                <div className='md:mx-auto max-w-5xl mx-5'>
                    <Title>Our Product</Title>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-3 py-5'>
                        {
                            images.product.map((url, idx) => (
                                <Card shadow="sm" key={idx}>
                                    <CardBody className="overflow-visible p-0">
                                        <NextImage
                                            shadow="sm"
                                            radius="lg"
                                            width="100%"
                                            alt={"oud"}
                                            className="w-full object-cover h-[300px]"
                                            src={url}
                                            loading='lazy'
                                        />
                                    </CardBody>
                                    <CardFooter className="text-small justify-between">
                                        <b>Oud Product</b>
                                        <p className="text-default-500">Muji Jaya Gaharu</p>
                                    </CardFooter>
                                </Card>
                            ))
                        }


                    </div>
                </div>
            </div>
        </main>
    )
}
