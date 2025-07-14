import React from 'react'
import { useHeading } from '../../../hooks';

function Header() {
    const {heading, subheading} = useHeading();

    return (
            <nav className='h-16 top-0 sticky p-2 flex flex-col justify-center border-b bg-white'>
                <h1 className='text-2xl font-bold'>{heading}</h1>
                {subheading && <p className='text-sm grey-500'>{subheading}</p>}
            </nav>
    )
}

export default Header