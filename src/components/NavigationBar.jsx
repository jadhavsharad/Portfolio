import React from 'react'
import Motion from '../utils/Motion'

const NavigationBar = () => {
  return (
    <div className='fixed w-full bg-[#090909] z-[999]'>
      <header className=' text-[#f5f0ec] flex items-center justify-between px-12 h-20 border-b-[2px] border-b-[#111]'>

        {/* Name */}
        <h1 className='lg:text-4xl font-Inter font-semibold text-[#f5f0ec]'>Sharad Jadhav</h1>

        {/* Navigation Links */}
        <nav className=''>
          <ul className='flex items-center gap-3 text-xl font-Syne text-[#555]'>
            <li ><a href="" className='navigation__links hover:text-[#222]'>Projects</a></li>
            <li><a href="" className='navigation__links hover:text-[#222]'>Contact</a></li>
            <li><a href="" className='navigation__links hover:text-[#222]'>About</a></li>
            <li><a href="" className='navigation__links hover:text-[#222]'>Connect</a></li>
          </ul>
        </nav>
      </header>
      <Motion />
    </div>
  )
}

export default NavigationBar