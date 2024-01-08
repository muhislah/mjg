'use client';

import { Image } from '@nextui-org/react'
import React from 'react'
import Title from '../components/Title'

type Props = {}

const GalleryPage = (props: Props) => {
    return (
        <div className='md:max-w-5xl md:mx-auto mx-5'>
            <div className='py-10'>
               <Title>Teamwork Gallery</Title>
                <div className='py-5'>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="grid gap-4">
                            <div>
                                <Image
                                    isZoomed
                                    className="h-auto max-w-full rounded-lg"
                                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
                                    alt=""
                                    loading='lazy'
                                />
                            </div>
                            <div>
                                <Image
                                    isZoomed
                                    className="h-auto max-w-full rounded-lg"
                                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
                                    alt=""
                                    loading='lazy'
                                />
                            </div>
                            <div>
                                <Image
                                    isZoomed
                                    className="h-auto max-w-full rounded-lg"
                                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
                                    alt=""
                                    loading='lazy'
                                />
                            </div>
                        </div>
                        <div className="grid gap-4">
                            <div>
                                <Image
                                    isZoomed
                                    className="h-auto max-w-full rounded-lg"
                                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
                                    alt=""
                                    loading='lazy'
                                />
                            </div>
                            <div>
                                <Image
                                    isZoomed
                                    className="h-auto max-w-full rounded-lg"
                                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
                                    alt=""
                                    loading='lazy'
                                />
                            </div>
                            <div>
                                <Image
                                    isZoomed
                                    className="h-auto max-w-full rounded-lg"
                                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
                                    alt=""
                                    loading='lazy'
                                />
                            </div>
                        </div>
                        <div className="grid gap-4">
                            <div>
                                <Image
                                    isZoomed
                                    className="h-auto max-w-full rounded-lg"
                                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
                                    alt=""
                                    loading='lazy'
                                />
                            </div>
                            <div>
                                <Image
                                    isZoomed
                                    className="h-auto max-w-full rounded-lg"
                                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
                                    alt=""
                                    loading='lazy'
                                />
                            </div>
                            <div>
                                <Image
                                    isZoomed
                                    className="h-auto max-w-full rounded-lg"
                                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
                                    alt=""
                                    loading='lazy'
                                />
                            </div>
                        </div>
                        <div className="grid gap-4">
                            <div>
                                <Image
                                    isZoomed
                                    className="h-auto max-w-full rounded-lg"
                                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
                                    alt=""
                                    loading='lazy'
                                />
                            </div>
                            <div>
                                <Image
                                    isZoomed
                                    className="h-auto max-w-full rounded-lg"
                                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
                                    alt=""
                                    loading='lazy'
                                />
                            </div>
                            <div>
                                <Image
                                    isZoomed
                                    className="h-auto max-w-full rounded-lg"
                                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
                                    alt=""
                                    loading='lazy'
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default GalleryPage