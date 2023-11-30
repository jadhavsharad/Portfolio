import React from 'react'
import SectionHeading from '../utils/SectionHeading'
import GridLines from 'react-gridlines';

const Contact = () => {
    return (
        <div>
            <SectionHeading Heading={"Contact"} />
            <div className='p-16'>
                <GridLines cellWidth={259} cellHeight={75} stroke={0.5} lineColor={"#222"} className="h-96 relative flex items-center justify-center">

                    {/* Background */}
                    <div className='h-48 w-48 bg-white rounded-full absolute opacity-60 blur-[160px]'></div>

                    {/* Right */}
                    <div className='h-96 w-80 bg-black -right-14 rounded-full absolute blur-[160px]'></div>
                    <div className='h-96 w-80 bg-black -right-14 rounded-full opacity-80 absolute blur-[240px]'></div>

                    {/* Left */}
                    <div className='h-96 w-80 bg-black -left-14 rounded-full absolute blur-[160px]'></div>
                    <div className='h-96 w-80 bg-black -left-14 rounded-full opacity-80 absolute blur-[240px]'></div>

                    {/* Email */}
                    <h1 className='text-white text-6xl font-Poppins email-id'>jadhavsharad290@gmail.com</h1>
                </GridLines>
            </div>
        </div>
    )
}

export default Contact