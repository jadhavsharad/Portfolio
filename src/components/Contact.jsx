import React from 'react'
import SectionHeading from '../utils/SectionHeading'
import GridLines from 'react-gridlines';
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";

const Contact = () => {

    
    return (
        <div>
            <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1}>
                <SectionHeading Heading={"Contact"} />
                <div className='p-16'>

                    <GridLines cellWidth={259} cellHeight={75} stroke={0.5} lineColor={"#222"} className="h-96 relative flex items-center justify-center">

                        {/* Background */}
                        <MouseParallaxChild factorX={-2} factorY={-2} className='h-48 w-48 bg-[#f5f0ec] rounded-full absolute blur-[100px] opacity-50'></MouseParallaxChild>


                        {/* Right */}
                        <div className='h-96 w-80 bg-[#090909] -right-14 rounded-full absolute blur-[160px]'></div>
                        <div className='h-96 w-80 bg-[#090909] -right-14 rounded-full opacity-80 absolute blur-[240px]'></div>

                        {/* Left */}
                        <div className='h-96 w-80 bg-[#090909] -left-14 rounded-full absolute blur-[160px]'></div>
                        <div className='h-96 w-80 bg-[#090909] -left-14 rounded-full opacity-80 absolute blur-[240px]'></div>

                        {/* Email */}
                        <h1 className='text-[#f5f0ec] text-6xl font-Poppins email-id'>jadhavsharad290@gmail.com</h1>

                    </GridLines>
                </div>
            </MouseParallaxContainer>
            <h1 className='text-xl text-white mx-auto'> Website Under Development</h1>
        </div>
    )
}

export default Contact