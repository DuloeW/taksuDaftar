import React from 'react'
import Link from 'next/link'

const About = () => {
    return (
        <div id='about' className='w-full h-screen p-2'>
            <div>
                <h1 className='text-4xl font-semibold'>About</h1>
            </div>
            <div className='mt-6 leading-7'>
                <h4 className='font-semibold'>Taksu Pregina Bali Entertainment</h4>
                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                <button className='px-8 py-2 mt-4 bg-cyan-800 text-white font-semibold rounded-full'>
                    <Link href={'/daftar'}>Register</Link>
                </button>
            </div>
        </div>
    )
}

export default About