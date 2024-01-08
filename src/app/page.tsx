'use client';

import Image from 'next/image'
import background from '@/assets/images/background.jpg'
import { Button, Card, CardBody, CardFooter, CardHeader, Image as NextImage } from '@nextui-org/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import Dialog from './components/Dialog'
import { useState } from 'react';
import { sendWhatsApp } from '@/utils/helper';
import { useRouter } from 'next/navigation';
import Title from './components/Title';


export default function Home() {
    const [dialogOpen, setDialogOpen] = useState(false)
    const router = useRouter()

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
                                Oud, also known as agarwood, is a fragrant resinous wood derived from the Aquilaria tree. The term &quot;agarwood&quot; is commonly used to refer to the dark, aromatic heartwood produced by the tree in response to an infection. This infection triggers a natural defense mechanism, causing the tree to produce a resin to protect itself.
                            </figcaption>
                            <figcaption className='my-2 text-justify'>
                                Oud is highly valued in perfumery for its rich and complex scent profile. The fragrance is often described as deep, woody, and resinous, with notes of sweetness, earthiness, and a touch of spiciness. Oud has a unique ability to evolve on the skin, making it a sought-after ingredient in luxury perfumes.
                            </figcaption>
                            <figcaption className='my-2 text-justify'>
                                Oud agarwood is a versatile and luxurious fragrance note that has gained popularity not only in perfumery but also in various other products like scented candles and essential oils. Its distinct and sophisticated aroma makes it a favorite among those who appreciate fine fragrances and exotic scents.
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
                        <Card shadow="sm" >
                            <CardBody  className="overflow-visible p-0" onClick={() => setDialogOpen(true)}>
                                <NextImage
                                    shadow="sm"
                                    radius="lg"
                                    width="100%"
                                    alt={"oud"}
                                    className="w-full object-cover h-[300px]"
                                    src={'https://placehold.co/600x400'}
                                />
                            </CardBody>
                            <CardFooter className="text-small justify-between">
                                <b>Agarwood</b>
                                <p className="text-default-500">Agarwood tree</p>
                            </CardFooter>
                        </Card>

                        <Card shadow="sm">
                            <CardBody className="overflow-visible p-0">
                                <NextImage
                                    shadow="sm"
                                    radius="lg"
                                    width="100%"
                                    alt={"oud"}
                                    className="w-full object-cover h-[300px]"
                                    src={'https://placehold.co/600x400'}
                                />
                            </CardBody>
                            <CardFooter className="text-small justify-between">
                                <b>Agarwood</b>
                                <p className="text-default-500">Agarwood tree</p>
                            </CardFooter>
                        </Card>
                        <Card shadow="sm">
                            <CardBody className="overflow-visible p-0">
                                <NextImage
                                    shadow="sm"
                                    radius="lg"
                                    width="100%"
                                    alt={"oud"}
                                    className="w-full object-cover h-[300px]"
                                    src={'https://placehold.co/600x400'}
                                />
                            </CardBody>
                            <CardFooter className="text-small justify-between">
                                <b>Agarwood</b>
                                <p className="text-default-500">Agarwood tree</p>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </div>
            <Dialog 
                isOpen={dialogOpen}
                onClose={() => {
                    setDialogOpen(false)
                }}
            />
        </main>
    )
}
