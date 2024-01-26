import React from 'react'
import { Parallax } from 'react-scroll-parallax';
import { TypeAnimation } from 'react-type-animation';
import GridLines from 'react-gridlines';



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
        <GridLines className="w-full h-full flex flex-col justify-center items-center relative" cellWidth={191.58} cellHeight={80} strokeWidth={2} lineColor={"#222"}>
          <Parallax scale={[2, 0.5]} opacity={[2, 0]} className='flex text-8xl font-Inter lowercase font-semibold'>
            <div className="">&lt;</div>
            <div className="text-[#fdf5eb]">
              /<TypeAnimation sequence={['Software', 2000, 'Developer', 2000,]} speed={20} wrapper="span" cursor={false} repeat={Infinity} />
            </div>
            <div>&gt;</div>
          </Parallax>
          <div>
            <div className='flex flex-col text-center font-Montserrat uppercase absolute bottom-12 left-12 text-xl'>
              <small>Based in India</small>
              <small>{time + " " + "IST" +' '+ days[new Date().getDay()]}</small>
            </div>
            <small className='text-[#888] mx-auto font-WorkSans tracking-tighter font-light duration-300 text-xl absolute bottom-24 animate-bounce'>scroll</small>
          </div>
        </GridLines>
      </div>
    </>
  )
}

export default Hero