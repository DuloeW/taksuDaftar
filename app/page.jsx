'use client'
import '@style/home.css'
import React from 'react'
import About from './components/About'
import { scrollToSomething } from '@util/func'
import Button from './components/ButtonToViewId'

const Home = () => {

  // TODO responsif di about dan tombolnya
  return (
    <div className='w-full'>
      <div className='w-full h-screen flex justify-between p-2 md:p-4'> {/*h-4/5*/}
        <div className='mt-16 w-full h-fit md:mt-5'>
          <h4 className='text-join'>HI</h4>
          <h5 className='text-join'>FRIENDS</h5>
          <p className='text-join' >
            LET'S JOIN
            <span className='text-orange-600'> US!</span>
          </p>
          <p className='text-xs tracking-widest md:text-sm'>Teenager, Child, Mature Is Open</p>
          <Button bg={'bg-cyan-800'} textColor={'text-white md:text-2xl'} goTo={() => scrollToSomething('about')} />
        </div>
        <div className='w-full h-2/3 bg-red-700 rounded-full max-md:hidden'>

        </div>
      </div>
      <About />
    </div>
  )
}

export default Home