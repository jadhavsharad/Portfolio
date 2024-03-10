import React from 'react'
import SectionHeading from '../utils/SectionHeading';
import Accordion from '../utils/Accordion';
import '../utils/Locomotive.css'
import LocomotiveScroll from 'locomotive-scroll';

new LocomotiveScroll();


const Project = () => {


    return (
        <>
            <div data-scroll-container id='project__section' className='z-0 bg-dot-zinc-700 relative' >
            <div className="-z-10 absolute pointer-events-none inset-0 flex items-center justify-center bg-[#090909] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                <SectionHeading data-scroll-section Heading={"Projects"} />
                <div data-scroll-section className='px-16 text-white'>
                    <Accordion />
                </div>
                <hr data-scroll-section className='my-3 border-none' />
                <div data-scroll-section className='h-[40rem] w-full ' >
                </div>
            </div>
        </>
    )
}

export default Project