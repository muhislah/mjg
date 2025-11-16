import ImagePreview from '@/components/ImagePreview'
import Master from '@/components/Master'
import Title from '@/components/Title'
import { useLanguage } from '@/providers/LanguageProvider'
import { ALL_IMAGES, METAS } from '@/utils/constants'
import Image from 'next/image'
import React, { useState } from 'react'

const GalleryPage = () => {
    const { locale, lang } = useLanguage()
    const [selectedImage, setSelectedImage] = useState('')

    const renderImage = (images: string[]) => {
        return (
            <div className={`grid-cols-2 md:grid-cols-4 grid gap-2 md:gap-4`}>
                {
                    images.map(image => {
                        if (image.endsWith('mp4')) {
                            return (
                                <div key={image} className='mb-4 aspect-square'>
                                    <video
                                        onClick={() => setSelectedImage(image)}
                                        className="object-cover max-w-full h-full rounded-lg"
                                        src={image}
                                        autoPlay
                                        muted
                                    />
                                </div>
                            )
                        } else {
                            return (
                                <div key={image} className='mb-4 relative aspect-square'>
                                    <Image
                                        onClick={() => setSelectedImage(image)}
                                        className="object-cover max-w-full rounded-lg"
                                        src={image}
                                        alt=""
                                        fill
                                        loading='lazy'
                                    />
                                </div>
                            )
                        }
                    })
                }
            </div>
        )
    }

    return (
        <Master
            title={METAS[locale as keyof typeof METAS]['gallery'].title}
            description={METAS[locale as keyof typeof METAS]['gallery'].description}
            path='/gallery'
        >
            <div className='md:max-w-5xl md:mx-auto mx-5'>
                <div className='py-10'>
                    {/* <Title>Muji Jaya Gaharu Team</Title>
                    <div className='py-5'>
                        <video className='rounded-lg w-full' src={ALL_IMAGES.video[0]} controls autoPlay>
                        </video>
                    </div> */}
                    <Title>{lang("export_gallery")}</Title>
                    <div className='py-5'>
                        {
                            renderImage(ALL_IMAGES.export)
                        }
                    </div>
                    {/* <Title>Product Gallery</Title>
                    <div className='py-5'>
                        {
                            renderImage(ALL_IMAGES.product)
                        }
                    </div> */}
                    <Title>{lang("activity_gallery")}</Title>
                    <div className='py-5'>
                        {
                            renderImage(ALL_IMAGES.activity)
                        }
                    </div>
                    <Title>{lang("marketing_gallery")}</Title>
                    <div className='py-5'>
                        {
                            renderImage(ALL_IMAGES.marketing_office)
                        }
                    </div>
                    <Title>{lang("another_gallery")}</Title>
                    <div className='py-5'>
                        {
                            renderImage(ALL_IMAGES.other)
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
        </Master>


    )
}

export default GalleryPage