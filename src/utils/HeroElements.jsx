import React from 'react'
import Marquee from "react-fast-marquee";
import bgelement from '../assets/bg-element.svg'
import { Parallax } from 'react-scroll-parallax';
import './Locomotive.css'
import LocomotiveScroll from 'locomotive-scroll';

new LocomotiveScroll();

const HeroElements = () => {
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
        <div data-scroll-container>
            <div data-scroll className='absolute top-1/3 -translate-x-1/2 -translate-y-1/2 left-0 mix-blend-difference '>
                <div className='w-64 aspect-square bg-[#333]'></div>
            </div>
            <div data-scroll className='absolute top-1/3 -translate-x-1/3 -translate-y-2/3 left-0 mix-blend-difference '>
                <div className='w-64 aspect-square border-[2.0px] border-[#333] '></div>
            </div>
            <div data-scroll className='absolute top-[15%] right-[-2%]'>
                <img src={bgelement} className='max-h-14 animate_rotate' alt="" />
            </div>
            <Parallax className='absolute top-[78%] left-[80%]  mix-blend-difference animate_expand_one' translateY={[50, -100]}>
                <div className='w-28 aspect-square rounded-full border-[2px] border-[#333] '></div>
            </Parallax>
            <Parallax className='absolute top-[77.5%] left-[80.5%]  mix-blend-difference animate_expand_two ' translateY={[50, -125]}>
                <div className='w-28 aspect-square rounded-full bg-[#333] '></div>
            </Parallax>
            <div data-scroll>
                <div className='flex flex-col text-center max-w-80 font-Raleway text-[#fdf5eb] bg-none uppercase absolute bottom-12 left-0 text-2xl'>
                    <small className='w-fit mx-auto'>Based in India</small>
                    <hr className='my-1 border-none' />
                    <Marquee className='text-lg xl:text-xl bg-none' autoFill={false} pauseOnHover speed={65} play={true}>
                        <p className=' w-fit'>{time + " " + "IST" + ' ' + days[new Date().getDay()]}</p>
                    </Marquee>
                </div>
            </div>
        </div>
    )
}

export default HeroElements