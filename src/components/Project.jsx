import React from 'react'
import SectionHeading from '../utils/SectionHeading';
import Accordion from '../utils/Accordion';


const Project = () => {


    return (
        <>
            <div id='project__section' >
                <SectionHeading Heading={"Projects"} />
                <div className='px-16 text-white'>
                    <Accordion />
                </div>
                <hr className='my-3 border-none' />
            </div>
        </>
    )
}

export default Project