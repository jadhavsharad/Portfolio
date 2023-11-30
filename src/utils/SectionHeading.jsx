import React from 'react'
import { Parallax } from 'react-scroll-parallax';

const SectionHeading = ({Heading}) => {
    return (
        <div>
            <div className='flex overflow-hidden py-24 font-Montserrat'>
                <Parallax translateX={[-60, 0]}>
                    <div className='uppercase text-border text-8xl font-extrabold'>{Heading}</div>
                </Parallax>
                <Parallax translateX={[-60, 0]}>
                    <div className='uppercase text-white text-8xl font-extrabold'>{Heading}</div>
                </Parallax>
                <Parallax translateX={[-60, 0]}>
                    <div className='uppercase text-8xl font-extrabold text-border'>{Heading}</div>
                </Parallax>
                <Parallax translateX={[-60, 0]}>
                    <div className='uppercase text-white text-8xl font-extrabold'>{Heading}</div>
                </Parallax>
            </div>
        </div>
    )
}

export default SectionHeading