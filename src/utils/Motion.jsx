import React from 'react'
import { motion, useScroll, useSpring } from "framer-motion"



const Motion = () => {
    const { scrollYProgress } = useScroll();
    return (
        <div >
            <motion.div className="progress-bar max-w-screen-2xl w-full fixed top-[5.85rem] h-[2.5px] bg-white rounded-full" style={{ scaleX: scrollYProgress }} />
        </div>
    )
}

export default Motion