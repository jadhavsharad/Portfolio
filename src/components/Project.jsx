import React from 'react'
import SectionHeading from '../utils/SectionHeading';
import Accordion from '../utils/Accordion';

const Project = () => {

    return (
        <>
            <div >
                <SectionHeading Heading={"Projects"} />
                <div className='px-16 text-white'>
                    <Accordion title={"Lazy Earning"} discription={" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, impedit facere! Eos error quo earum fuga, blanditiis dolorem doloremque, eaque ad sunt temporibus ipsa sequi nobis, fugit a placeat sint?"} />
                </div>
            </div>
        </>
    )
}

export default Project