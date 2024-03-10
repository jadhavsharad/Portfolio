import React from 'react'
import { Parallax } from 'react-scroll-parallax';
import Marquee from "react-fast-marquee";

const SectionHeading = ({ Heading }) => {
    return (
        <div>
            <div className='py-24 select-none'>
                <Marquee className='font-MontrealBold overflow-hidden' autoFill={true} pauseOnHover play={true}>
                    <Parallax translateX={[-60, 0]} className='w-full'>
                        <h1 className='uppercase text-[#f5f0ec] text-8xl px-4'>{Heading}</h1>
                    </Parallax>
                    <Parallax translateX={[-60, 0]} className='w-full'>
                        <h1 className='uppercase text-border text-[#090909] text-8xl px-4'>{Heading}</h1>
                    </Parallax>
                </Marquee>
            </div>
        </div>
    )
}

export default SectionHeading