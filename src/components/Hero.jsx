import React, { useState } from 'react'
import { Parallax } from 'react-scroll-parallax';
import { TypeAnimation } from 'react-type-animation';
import GridLines from 'react-gridlines';
import HeroElements from '../utils/HeroElements'




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
      <div className='text-[#fdf5eb] h-screen '>
        <GridLines className="w-full h-full flex flex-col justify-center items-center relative" cellWidth={190} cellHeight={80} strokeWidth={2} lineColor={"#191919"}>
          <Parallax scale={[2, 0.5]} opacity={[2, 0]} className='flex text-8xl font-Figtree lowercase font-semibold'>
            <div className="">&lt;</div>
            <div className="text-[#fdf5eb]">
              /<TypeAnimation className='select-none' sequence={['Software', 2000, 'Developer', 2000,]} speed={20} wrapper="span" cursor={false} repeat={Infinity} />
            </div>
          <div>&gt;</div>
          </Parallax>
          <HeroElements/>
        </GridLines>
      </div>
    </>
  )
}

export default Hero