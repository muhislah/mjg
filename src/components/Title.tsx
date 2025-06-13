import React from 'react'

type Props = {
    children: React.ReactNode
}

const Title = (props: Props) => {
    return (
        <div className='flex flex-row'>
            <div className='bg-yellow-800 w-2 mr-1'></div>
            <div className='bg-neutral-500 w-auto px-4 py-1 mr-2'>
                <h2 className='text-2xl text-white capitalize font-black'>
                    {props.children}
                </h2>
            </div>
        </div>
    )
}

export default Title