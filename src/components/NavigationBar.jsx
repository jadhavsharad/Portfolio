import React from 'react'
import Motion from '../utils/Motion'

const NavigationBar = () => {
  return (
    <div className='fixed max-w-screen-2xl w-full bg-black z-[999]'>
        <header className=' text-white flex items-center justify-between px-12 h-24 border-b-[2px] border-b-neutral-800'>
            <h1 className='lg:text-4xl font-Montserrat'>Sharad Jadhav</h1>
            <nav className=''>
                <ul className='flex items-center gap-3 text-xl font-Poppins text-zinc-400'>
                    <li ><a href="" className='hover:text-black'>LinkedIn</a></li>
                    <li><a href="" className='hover:text-black'>About</a></li>
                    <li><a href="" className='hover:text-black'>Contact</a></li>
                    <li><a href="" className='hover:text-black'>Work</a></li>
                </ul>
            </nav>
        </header>
        <Motion/>
    </div>
  )
}

export default NavigationBar