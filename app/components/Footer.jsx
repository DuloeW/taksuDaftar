import React from 'react'
import '@style/footer.css'
import Link from 'next/link'
import Maps from './Maps'
import Image from 'next/image'

const ListOfFooterContactUs = () => {
    return (
        <ul className='w-28 flex gap-5 mt-2'>
            <li>
                <Link href={'/'}>
                    <Image 
                        src={'/assets/logo.png'}
                        alt='instagram'
                        width={30}
                        height={30}
                    />
                </Link>
            </li>
            <li>
                <Link href={'/'}>F</Link>
            </li>
            <li>
                <Link href={'/'}>E</Link>
            </li>
        </ul>
    )
}

const Footer = () => {
    return (
        <div className='h-52 w-full flex justify-between bg-slate-900 p-2'>
            <div className='w-2/4 h-full'>
                <h3 className='text-xs text-white border-b-2 border-orange-500'>Our Location</h3>
                <Maps />
            </div>
            <div className='w-2/4 h-full pl-3'>
                <h3 className='text-xs text-white border-b-2 border-orange-500'>Contact Us</h3>
                <div className='text-xs h-5/6 flex flex-col justify-between font-thin text-white'>
                    <ListOfFooterContactUs />
                    <p className='text-[9px] text-center'>&#169;Taksu Pregina Bali Entertainment 2023</p>
                </div>
            </div>
        </div>
    )
}

export default Footer