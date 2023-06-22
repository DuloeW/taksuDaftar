import React from 'react'
import Image from 'next/image'

const Navbar = () => {
    return (
        <nav className='flex p-3 z-10 items-center sticky -top-1 backdrop-blur-sm'>
            <div className='flex justify-between items-center gap-4'>
                <Image
                    src="/assets/logo.png"
                    width={70}
                    height={70}
                    alt='Logo'
                    className='rounded-full max-sm:w-12'
                />
                <h2 className='text-xl font-serif font-semibold max-sm:text-xs'>Taksu Pregina Bali Entertainment</h2>
            </div>
            
        </nav>
    )
}

export default Navbar