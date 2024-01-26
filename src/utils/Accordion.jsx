import React, { useState, useRef } from 'react'
import { PiPlusLight } from "react-icons/pi";
import { gsap } from 'gsap';
import { VscLinkExternal } from "react-icons/vsc";
import html from '../assets/html.svg'
import css from '../assets/css.svg'
import javascript from '../assets/javascript.svg'
import tailwind from '../assets/tailwind.svg'

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
            <div className="accordion__container">
                <div className={`accordion__item ${openAccordion === 0 ? 'pb-4' : 'pb-0'} ${openAccordion === 0 ? "open" : null}`} ref={(el) => (accordionRefs.current[0] = el)}>
                    <div className="accordion__title" onClick={() => handleAccordionClick(0)} >
                        <h1 className='font-light tracking-tight'>Lazy Earning</h1>
                        <PiPlusLight className={`duration-500 ${openAccordion === 0 ? 'rotate-45' : 'rotate-0'}`} />
                    </div>
                    <div className="accordion__details h-0 overflow-hidden px-4 flex md:flex-col lg:flex-row relative">
                        <div className='lg:w-1/2 w-full flex z-10 '>
                            <div className="w-1/3 h-full">
                                <div className="w-full aspect-video p-2">
                                    <div className='border-[1.4px] bg-[#111] border-[#333] w-full h-full rounded-lg'></div>
                                </div>
                                <div className="h-80 w-full p-2">
                                    <div className='border-[1.4px] bg-[#111] border-[#333] w-full h-full rounded-lg'></div>
                                </div>
                            </div>

                            <div className='w-3/4 flex flex-col justify-center'>
                                <div className="w-full h-1/2 p-2">
                                    <div className='border-[1.4px] bg-[#111] border-[#333] w-full h-full rounded-lg'></div>
                                </div>
                                <div className="w-full h-1/2 p-2">
                                    <div className='border-[1.4px] bg-[#111] border-[#333] w-full h-full rounded-lg'></div>
                                </div>
                            </div>
                        </div>
                        <div className='lg:w-1/2 w-full text-3xl z-10 px-8 font-Figtree text-[#666] flex flex-col justify-center'>
                            <p>Developed a <span className='text-[#f5f0ec] font-semibold'>highly responsive with modern design,</span> Lazy Earning can help you earn online on <span className='text-[#f5f0ec] font-semibold'>any device, any platform.</span></p>
                            <hr className='my-4 border-none' />
                            <h1 className='text-left font-medium'><span className='text-[#f5f0ec] font-semibold'>Technologies</span> used for developing</h1>
                            <hr className='my-1 border-none' />
                            <div className='flex gap-4'>
                                <img src={html} className='max-w-28' alt="" />
                                <img src={css} className='max-w-28' alt="" />
                                <img src={javascript} className='max-w-28' alt="" />
                                <img src={tailwind} className='max-w-28' alt="" />
                            </div>
                            <hr className='my-4 border-none' />
                            <h1>You can visit the project by, <a href="https://jadhavsharad.github.io/lazyearning/" className='underline underline-offset-2 text-[#f5f0ec]' target='https://jadhavsharad.github.io/lazyearning/'>clicking here</a></h1>
                        </div>
                    </div>
                </div>

                <div className={`accordion__item ${openAccordion === 1 ? 'pb-4' : 'pb-0'} ${openAccordion === 1 ? "open" : null}`} ref={(el) => (accordionRefs.current[1] = el)}>
                    <div className="accordion__title" onClick={() => handleAccordionClick(1)} >
                        <h1 className='font-light tracking-tight'>Spotify Clone</h1>
                        <PiPlusLight className={`duration-500 ${openAccordion === 1 ? 'rotate-45' : 'rotate-0'}`} />
                    </div>
                    <div className="accordion__details h-0 overflow-hidden px-4">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, facilis. Dolor ipsa soluta architecto blanditiis quae! Neque, ducimus? Tempora fugiat quod rem iste explicabo, velit est qui porro ipsa error!</p>
                    </div>
                </div>

                <div className={`accordion__item ${openAccordion === 2 ? 'pb-4' : 'pb-0'} ${openAccordion === 2 ? "open" : null}`} ref={(el) => (accordionRefs.current[2] = el)}>
                    <div className="accordion__title" onClick={() => handleAccordionClick(2)} >
                        <h1 className='font-light tracking-tight'>Smart Home Web App</h1>
                        <PiPlusLight className={`duration-500 ${openAccordion === 2 ? 'rotate-45' : 'rotate-0'}`} />
                    </div>
                    <div className="accordion__details h-0 overflow-hidden px-4">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, facilis. Dolor ipsa soluta architecto blanditiis quae! Neque, ducimus? Tempora fugiat quod rem iste explicabo, velit est qui porro ipsa error!</p>
                    </div>
                </div>

                <div className='accordion__item'>
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
