import React from 'react'

type Props = {}

const NotFoundPage = (props: Props) => {
    return (
        <div className='md:max-w-5xl md:mx-auto mx-5'>
            <div className='py-10'>
                <h1 className='text-5xl font-serif font-semibold'>Sorry</h1>
                <div className='text-base'>
                    <figcaption className='my-2 text-justify'>
                        Your page requested doesnt not exist
                    </figcaption>
                </div>
            </div>
        </div>
    )
}

export default NotFoundPage