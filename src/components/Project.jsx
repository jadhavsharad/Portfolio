import React from 'react'
import { Parallax, useParallaxController } from 'react-scroll-parallax';
import LazyEarning from '../assets/LazyEarning.png'
import SmartHomeAutomation from '../assets/SmartHomeAutomation.jpg';
import ColorPicker from '../assets/ColorPicker.png';
import MouseAnimation from '../assets/MouseAnimation.png';
import SectionHeading from '../utils/SectionHeading';
import ProjectDiscriptionBG from '../utils/ProjectDiscriptionBG';
import ProjectDiscription from '../utils/ProjectDiscription';


const Project = () => {

    return (
        <>
            <div className=''>
                <SectionHeading Heading={"Projects"} />
                <div className='px-12'>
                    <div>

                        {/* LazyEarning */}
                        <div className='flex items-center justify-around'>
                            <Parallax speed={0} className="w-1/2 text-white font-Montserrat font-light text-center text-6xl px-12 relative flex items-center justify-center">
                                <ProjectDiscriptionBG />
                                <ProjectDiscription Title={"LazyEarning"} Discription={"Helping 🤝🏻 people by providing them with a chance to earn extra money 💰 online has been our top goal. Using a product they can rely on should be possible, in our opinion, for those who need more income 🏦."} />
                            </Parallax>

                            <Parallax speed={20} className="w-1/2 px-12 border-l-[1px] border-white z-10">
                                <img src={LazyEarning} onLoad={() => parallaxController.update()} alt="" srcset="" />
                            </Parallax>
                        </div>


                        {/* Smart Home Automation */}
                        <div className='flex items-center justify-around'>
                            <Parallax speed={20} className="w-1/2 px-12 border-r-[1px] border-white z-10">
                                <img src={SmartHomeAutomation} onLoad={() => parallaxController.update()} alt="" srcset="" />
                            </Parallax>
                            <Parallax speed={0} className="w-1/2 text-white font-Montserrat font-light text-center text-6xl px-12 relative flex items-center justify-center">
                                <ProjectDiscriptionBG />
                                <ProjectDiscription Title={"Smart Home Automation"} Discription={"This 🏡 Home Automation System combines a number of modern tools ⚒️ and technologies 📡 to create a comprehensive and intelligent method to manage and monitor 📊 a home environment."} />
                            </Parallax>
                        </div>


                        {/* Color Picker */}
                        <div className='flex items-center justify-around'>
                            <Parallax speed={0} className="w-1/2 text-white font-Montserrat font-light text-center text-6xl px-12 relative flex items-center justify-center">
                                <ProjectDiscriptionBG />
                                <ProjectDiscription Title={"Color Picker"} Discription={"Navigate through several colour formats 🎨 accurately and precisely, including RGB, HEX, HSL, and more, with quick conversions and previews 🔮."} />
                            </Parallax>
                            <Parallax speed={20} className="w-1/2 px-12 border-l-[1px] border-white z-10">
                                <img src={ColorPicker} onLoad={() => parallaxController.update()} className='max-h-80' alt="" srcset="" />
                            </Parallax>
                        </div>


                        {/* Mouse Tracking Animation */}
                        <div className='flex items-center justify-around'>
                            <Parallax speed={20} className="w-1/2 px-12 border-r-[1px] border-white z-10">
                                <img src={MouseAnimation} onLoad={() => parallaxController.update()} alt="" srcset="" />
                            </Parallax>
                            <Parallax speed={0} className="w-1/2 text-white font-Montserrat font-light text-center text-6xl px-12 relative flex items-center justify-center">
                                <ProjectDiscriptionBG />
                                <ProjectDiscription Title={"Mouse Tracking Animation"} Discription={"It's an exquisite blend of code and creativity that brings your cursor to life ✨.Experience the magic as the animation follows your every move, weaving an enchanting visual display 🖥️."} />
                            </Parallax>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project