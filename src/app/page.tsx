import Image from 'next/image'

export default function Home() {
    return (
        <main className=''>
            <div className='w-full'>
                <div className='w-full h-56 bg-stone-500'>

                </div>
            </div>
            <div className='relative -top-20'>
                <div className='rounded-2xl shadow-md bg-white md:mx-auto mx-4 container max-w-screen-lg flex flex-row items-stretch overflow-hidden'>
                    <div className=' w-1/3'>
                        <div className=' bg-cover object-cover w-full h-full' style={{backgroundImage: `url(https://images.pexels.com/photos/1459495/pexels-photo-1459495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`}}>
                            ;
                        </div>
                    </div>
                    <div className='flex-1 p-8'>
                        <div className='flex flex-col'>
                            <div>
                                <p className='text-5xl font-bold italic font-serif mb-4 mt-2 text-stone-500'>Oud</p>
                                <p className='text-justify text-gray-700'>
                                    In Indonesia, agarwood, known as &quot;gaharu,&quot; is culturally and economically vital. The unique fragrance, a blend of sweet and earthy notes, is highly valued for ceremonies and perfumery. Extraction methods prioritize sustainability to preserve the Aquilaria trees. Indonesian agarwood plays a crucial role in cultural practices and contributes significantly to the global oud market.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
