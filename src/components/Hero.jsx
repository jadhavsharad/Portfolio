import React from 'react'
import { Parallax } from 'react-scroll-parallax';
import { TypeAnimation } from 'react-type-animation';
import GridLines from 'react-gridlines';



const Hero = () => {

  return (
    <>
      <div className='text-white h-screen '>
        <GridLines className="w-full h-full flex justify-center items-center" cellWidth={191.58} cellHeight={80} strokeWidth={2} lineColor={"#222"}>
          <Parallax scale={[1.25, 0.5]} opacity={[2, 0]} className='flex text-8xl font-Poppins lowercase font-semibold'>
            <div className="">&lt;</div>
            <div className="bg-gradient-to-tr from-red-400 to-fuchsia-500 bg-clip-text text-transparent">
              /<TypeAnimation sequence={['Software', 2000, 'Developer', 2000,]} speed={20} wrapper="span" cursor={false} repeat={Infinity} />
            </div>
            <div className="">&gt;</div>
          </Parallax>
        </GridLines>
      </div>
    </>
  )
}

export default Hero