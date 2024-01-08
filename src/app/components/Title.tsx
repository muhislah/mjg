import React from 'react'

type Props = {
    children: React.ReactNode | string
}

const Title = (props: Props) => {
    return (
        <div className='py-3 px-5 bg-gradient-to-r from-stone-600 to-transparent text-white self-start rounded-md'>
            <h1 className='md:text-3xl text-xl'>{props.children}</h1>
        </div>
    )
}

export default Title