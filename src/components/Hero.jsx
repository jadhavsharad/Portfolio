import React, { useState } from 'react'
import { Parallax } from 'react-scroll-parallax';
import { TypeAnimation } from 'react-type-animation';
// import GridLines from 'react-gridlines';
import HeroElements from '../utils/HeroElements'
import '../utils/Locomotive.css'
import LocomotiveScroll from 'locomotive-scroll';

new LocomotiveScroll();




const Hero = () => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const time = new Date().getHours().toLocaleString('en-US', {
    timeZone: 'Asia/Kolkata',
    hour12: true,
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  }).padStart(2, "0") + ":" + new Date().getMinutes().toLocaleString('en-US', {
    timeZone: 'Asia/Kolkata',
    hour12: true,
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  }).padStart(2, "0");

  return (
    <>
      <div data-scroll-container className='text-[#fdf5eb] h-screen overflow-hidden'>
      <div className="w-full min-h-full bg-[#090909] bg-grid-[#222] relative flex flex-col items-center justify-center">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-inherit [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <Parallax scale={[2, 0.5]} opacity={[2, 0]} className='flex text-8xl font-Figtree lowercase font-semibold'>
            <div className="">&lt;</div>
            <div className="text-[#fdf5eb]">
              /<TypeAnimation className='select-none' sequence={['Software', 2000, 'Developer', 2000,]} speed={20} wrapper="span" cursor={false} repeat={Infinity} />
            </div>
            <div>&gt;</div>
          </Parallax>
          <HeroElements data-scroll />
        </div>
      </div>
    </>
  )
}

export default Hero