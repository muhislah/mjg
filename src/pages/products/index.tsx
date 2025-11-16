import DirectEnquiryModal from '@/components/DirectEnquiryModal'
import Master from '@/components/Master'
import Title from '@/components/Title'
import { useLanguage } from '@/providers/LanguageProvider'
import { METAS, NEW_PRODUCTS } from '@/utils/constants'
import { createSlugFromName } from '@/utils/helper'
import Image from 'next/image'
import React, { useState } from 'react'

const ProductsPage = () => {
    const { locale, lang } = useLanguage()
    const [selectedProduct, setSelectedProduct] = useState('')

    return (
        <Master
            title={METAS[locale as keyof typeof METAS]['products'].title}
            description={METAS[locale as keyof typeof METAS]['products'].description}
            path='/products'
        >
            <div className='md:max-w-5xl md:mx-auto mx-5'>
                <div className='py-10'>
                    <Title>{lang("our_product")}</Title>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 py-5'>
                        {
                            NEW_PRODUCTS.map((product) => (
                                <div className='shadow-lg rounded-xl' key={createSlugFromName(product.name)}>
                                    <div className="overflow-visible p-0">
                                        <div className='relative aspect-[3/4]'>
                                            <Image
                                                fill
                                                alt={"oud"}
                                                className="w-full rounded-t-xl object-cover"
                                                src={product.url}
                                                loading='lazy'
                                            />
                                        </div>
                                    </div>
                                    <div className="text-small justify-between p-3 flex flex-col">
                                        <p className='font-bold md:text-base text-sm font-charm mb-2'>{product.name}</p>
                                        <button
                                            className='bg-yellow-700 text-sm cursor-pointer hover:bg-yellow-950 text-white px-3 py-1 rounded-md'
                                            onClick={() => {
                                                setSelectedProduct(createSlugFromName(product.name))
                                            }}
                                        >
                                            {lang("order")}
                                        </button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <DirectEnquiryModal
                isOpen={selectedProduct}
                onClose={() => setSelectedProduct("")}
            />
        </Master>
    )
}

export default ProductsPage