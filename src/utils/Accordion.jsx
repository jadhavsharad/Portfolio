import React, { useState, useRef } from 'react'
import { PiPlusLight } from "react-icons/pi";
import { CiGlobe } from "react-icons/ci";
import { PiSpotifyLogoThin, PiHouseThin } from "react-icons/pi";
import { gsap } from 'gsap';
import { VscLinkExternal } from "react-icons/vsc";
import html from '../assets/html.svg'
import css from '../assets/css.svg'
import javascript from '../assets/javascript.svg'
import tailwind from '../assets/tailwind.svg'
import typescript from '../assets/typescript.svg'
import react from '../assets/react.svg'
import './Locomotive.css'
import LocomotiveScroll from 'locomotive-scroll';

new LocomotiveScroll();

const Accordion = () => {
    const [openAccordion, setOpenAccordion] = useState(null);
    const accordionRefs = useRef([]);
    const handleAccordionClick = (index) => {
        if (index === openAccordion) {
            gsap.to(
                accordionRefs.current[index].querySelector(".accordion__details"),
                {
                    height: 0,
                    duration: 0.5,
                    ease: "power1.inOut",
                    onComplete: () => setOpenAccordion(null),
                }
            );
            // console.log(openAccordion);
        } else {
            if (openAccordion !== null) {
                gsap.to(
                    accordionRefs.current[openAccordion].querySelector(
                        ".accordion__details"
                    ),
                    {
                        height: 0,
                        duration: 0.5,
                        ease: "power1.inOut",
                    }
                );
            }
            setOpenAccordion(index);
            gsap.fromTo(
                accordionRefs.current[index].querySelector(".accordion__details"),
                { height: 0 },
                {
                    height: "auto",
                    duration: 0.5,
                    ease: "power1.inOut",
                }
            );
        }
    };
    return (
        <div>
            <div data-scroll-container className="accordion__container bg-none">
                <div data-scroll-section className={`accordion__item ${openAccordion === 0 ? 'pb-4' : 'pb-0'} ${openAccordion === 0 ? "open" : null}`} ref={(el) => (accordionRefs.current[0] = el)}>
                    <div data-scroll className="accordion__title" onClick={() => handleAccordionClick(0)} >
                        <h1 className='font-light tracking-tight flex items-center gap-4'><CiGlobe />Lazy Earning</h1>
                        <PiPlusLight className={`duration-500 ${openAccordion === 0 ? 'rotate-45' : 'rotate-0'}`} />
                    </div>
                    <div data-scroll className="accordion__details h-0 overflow-hidden px-4 flex md:flex-col lg:flex-row relative">
                        <div data-scroll className='lg:w-1/2 w-full flex z-10 '>
                            <div data-scroll className="w-1/3 h-full">
                                <div className="w-full aspect-video p-2">
                                    <div className='border-[1.4px] bg-[#111] border-[#333] w-full h-full rounded-lg'></div>
                                </div>
                                <div className="h-80 w-full p-2">
                                    <div className='border-[1.4px] bg-[#111] border-[#333] w-full h-full rounded-lg'></div>
                                </div>
                            </div>

                            <div data-scroll className='w-3/4 flex flex-col justify-center'>
                                <div className="w-full h-1/2 p-2">
                                    <div className='border-[1.4px] bg-[#111] border-[#333] w-full h-full rounded-lg'></div>
                                </div>
                                <div className="w-full h-1/2 p-2">
                                    <div className='border-[1.4px] bg-[#111] border-[#333] w-full h-full rounded-lg'></div>
                                </div>
                            </div>
                        </div>
                        <div data-scroll className='lg:w-1/2 w-full text-3xl font-light z-10 px-8 font-Figtree text-[#666] flex flex-col justify-center'>
                            <p>Developed a <span className='text-[#f5f0ec] '>highly responsive with modern design frontend,</span> Lazy Earning can help you earn online on <span className='text-[#f5f0ec]'>any device, any platform.</span></p>
                            <hr className='my-4 border-none' />
                            <h1 className='text-left font-medium'><span className='text-[#f5f0ec] font-semibold'>Technologies</span> used for developing</h1>
                            <hr className='my-1 border-none' />
                            <div className='flex gap-4'>
                                <img src={html} className='max-w-28' alt="" /><img src={css} className='max-w-28' alt="" /><img src={javascript} className='max-w-28' alt="" /><img src={tailwind} className='max-w-28' alt="" />
                            </div>
                            <hr className='my-4 border-none' />
                            <h1>You can visit the project by, <a href="https://jadhavsharad.github.io/lazyearning/" className=' text-[#f5f0ec]' target='https://jadhavsharad.github.io/lazyearning/'>clicking here</a></h1>
                        </div>
                    </div>
                </div>

                <div data-scroll className={`accordion__item ${openAccordion === 1 ? 'pb-4' : 'pb-0'} ${openAccordion === 1 ? "open" : null}`} ref={(el) => (accordionRefs.current[1] = el)}>
                    <div className="accordion__title" onClick={() => handleAccordionClick(1)} >
                        <h1 className='font-light tracking-tight flex items-center gap-4'><PiHouseThin />Smart Home Management</h1>
                        <PiPlusLight className={`duration-500 ${openAccordion === 1 ? 'rotate-45' : 'rotate-0'}`} />
                    </div>
                    <div data-scroll className="accordion__details h-0 overflow-hidden px-4 md:flex-col lg:flex-row flex items-center justify-center">
                        <div data-scroll className="lg:w-1/2 w-full h-fit text-3xl z-10 px-8 font-Figtree font-light text-[#555] flex flex-col justify-center">
                            <p><span className='text-[#f5f0ec]'>Smart home management</span> project aims to provide an amazing <span className='text-[#f5f0ec]'>modern user interface</span> for controlling and monitoring your smart home devices <span className='text-[#f5f0ec]'>from anywhere on any device.</span></p>
                            <hr className='my-4 border-none' />
                            <h1>Technologies used</h1>
                            <hr className='my-4 border-none' />
                            <div className='flex gap-4'>
                                <img src={html} alt="" /><img src={css} alt="" /><img src={tailwind} alt="" /><img src={typescript} alt="" /><img src={react} alt="" />
                            </div>
                            <hr className='my-4 border-none' />
                            <h1>view the live page by, <a href="" className=' text-[#f5f0ec]'>clicking here</a></h1>
                            <hr className='my-4 border-none' />
                            <h1>visit the project on, <a href="https://github.com/jadhavsharad/Smart-Home-Interface" target='https://github.com/jadhavsharad/Smart-Home-Interface' className='text-[#f5f0ec]'>github</a></h1>
                        </div>
                        <div data-scroll className="lg:w-1/2 w-full ">
                            <div className="h-1/3 w-full flex gap-4 pb-2 p-4">
                                <div className="bg-[#111] aspect-video w-1/3 rounded-lg border-[#333] border-[1.4px]"></div>
                                <div className="bg-[#111] aspect-video w-2/3 rounded-lg  border-[#333] border-[1.4px]"></div>
                            </div>
                            <div className=' w-full flex gap-4 pt-2 p-4'>
                                <div className='w-2/3 aspect-video bg-[#111] rounded-lg border-[1.4px] border-[#333]'></div>
                                <div className='w-1/3 aspect-video bg-[#111] rounded-lg border-[1.4px] border-[#333]'></div>
                            </div>
                        </div>
                    </div>
                </div>


                <div data-scroll className={`accordion__item ${openAccordion === 2 ? 'pb-4' : 'pb-0'} ${openAccordion === 2 ? "open" : null}`} ref={(el) => (accordionRefs.current[2] = el)}>
                    <div className="accordion__title" onClick={() => handleAccordionClick(2)} >
                        <h1 className='font-light tracking-tight flex items-center gap-4'><PiSpotifyLogoThin />Spotify Clone</h1>
                        <PiPlusLight className={`duration-500 ${openAccordion === 2 ? 'rotate-45' : 'rotate-0'}`} />
                    </div>
                    <div data-scroll className="accordion__details h-0 overflow-hidden px-4">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, facilis. Dolor ipsa soluta architecto blanditiis quae! Neque, ducimus? Tempora fugiat quod rem iste explicabo, velit est qui porro ipsa error!</p>
                    </div>
                </div>

                <div data-scroll className={`accordion__item ${openAccordion === 3 ? 'pb-4' : 'pb-0'} ${openAccordion === 3 ? "open" : null}`} ref={(el) => (accordionRefs.current[3] = el)}>
                    <div className="accordion__title" onClick={() => handleAccordionClick(3)} >
                        <h1 className='font-light tracking-tight flex items-center gap-4'><CiGlobe />Dataverse</h1>
                        <PiPlusLight className={`duration-500 ${openAccordion === 3 ? 'rotate-45' : 'rotate-0'}`} />
                    </div>
                    <div data-scroll className="accordion__details h-0 overflow-hidden px-4">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, facilis. Dolor ipsa soluta architecto blanditiis quae! Neque, ducimus? Tempora fugiat quod rem iste explicabo, velit est qui porro ipsa error!</p>
                    </div>
                </div>

                <div data-scroll className='accordion__item'>
                    <a href={'https://github.com/jadhavsharad'} target='https://github.com/jadhavsharad' className="accordion__title  border-zinc-700 border-b-[1.4px]">
                        <h1 className='font-normal tracking-tight'>View More on GitHub</h1>
                        <VscLinkExternal />
                    </a>
                </div>

            </div>
        </div>
    )
}
export default Accordion