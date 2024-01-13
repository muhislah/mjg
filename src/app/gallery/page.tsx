'use client';

import { Image } from '@nextui-org/react'
import React from 'react'
import Title from '../components/Title'
import image from '@/database/image.json'

type Props = {}

const GalleryPage = (props: Props) => {

    const renderImage = (images: string[]) => {
        const rowLength = Math.floor(images.length / 4)

        return (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Array.from({ length: 4 }).map((section, idx) => (
                    <div className="grid gap-4" key={idx}>
                        {
                            images.filter((item, id) => (id > (idx * (rowLength) - 1) && id < ((idx + 1) * (rowLength)))).map((image) => (
                                <Image
                                    key={image}
                                    isZoomed
                                    className="h-full max-w-full rounded-lg"
                                    src={image}
                                    alt=""
                                    loading='lazy'
                                />
                            ))
                        }
                    </div>
                ))}
            </div>
        )
    }

    return (
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
            </div>
        </div>
    )
}

export default GalleryPage