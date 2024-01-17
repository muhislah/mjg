'use client';

import { Image } from '@nextui-org/react'
import React, { useState } from 'react'
import Title from '../components/Title'
import image from '@/database/image.json'
import ImagePreview from '../components/ImagePreview';

type Props = {}

const GalleryPage = (props: Props) => {
    const [selectedImage, setSelectedImage] = useState('')

    const renderImage = (images: string[]) => {
        const rowLength = Math.floor(images.length / 4)

        return (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Array.from({ length: 4 }).map((section, idx) => (
                    <div className="grid gap-4" key={idx}>
                        {
                            images.filter((item, id) => (id > (idx * (rowLength) - 1) && id < ((idx + 1) * (rowLength)))).map((image) => {
                                if (image.endsWith('mp4')) {
                                    return (
                                        <div key={image}>
                                            <video
                                                onClick={() => setSelectedImage(image)}
                                                className="object-contain max-w-full rounded-lg"
                                                src={image}
                                                autoPlay
                                                muted
                                            />
                                        </div>
                                    )
                                } else {
                                    return (
                                        <div key={image}>
                                            <Image
                                                onClick={() => setSelectedImage(image)}
                                                isZoomed
                                                className="object-contain max-w-full rounded-lg"
                                                src={image}
                                                alt=""
                                                loading='lazy'
                                            />
                                        </div>
                                    )
                                }
                            })
                        }
                    </div>
                ))}
            </div>
        )
    }

    return (
        <>
            <div className='md:max-w-5xl md:mx-auto mx-5'>
                <div className='py-10'>
                    <Title>Muji Jaya Gaharu Team</Title>
                    <div className='py-5'>
                        <video className='rounded-lg w-full' src={image.video[0]} controls autoPlay>

                        </video>
                    </div>
                    <Title>Export Gallery</Title>
                    <div className='py-5'>
                        {
                            renderImage(image.export)
                        }
                    </div>
                    <Title>Product Gallery</Title>
                    <div className='py-5'>
                        {
                            renderImage(image.product)
                        }
                    </div>
                    <Title>Activity Gallery</Title>
                    <div className='py-5'>
                        {
                            renderImage(image.activity)
                        }
                    </div>
                    <Title>Another Gallery</Title>
                    <div className='py-5'>
                        {
                            renderImage(image.other)
                        }
                    </div>
                </div>
            </div>
            <ImagePreview
                isOpen={!!selectedImage}
                image={selectedImage}
                onClose={() => {
                    setSelectedImage('')
                }}
            />
        </>


    )
}

export default GalleryPage