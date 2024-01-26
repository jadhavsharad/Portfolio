import React, { useEffect, useState } from 'react'

export const Loader = () => {
    const [progress, setProgress] = useState(0);
    const maxValue = 100; 

    useEffect(() => {

        const timer = setInterval(() => {
            setProgress((prevProgress) => {
                const newProgress = prevProgress + 1;
                if (newProgress >= maxValue) {
                    clearInterval(timer);
                    return maxValue; // Ensure progress doesn't exceed the maxValue

                }
                return newProgress;
            });
        }, 100);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className='loader'>
            <div className='bg-[#f5f0ec] w-full min-h-[100vh] relative flex justify-center items-center'>
                <div className='bg-[#222] h-32 bottom-0 absolute left-0 duration-1000' style={{width: `${progress+'%'}`}}></div>
                <div className='bg-none h-32 bottom-0 absolute border-[3px] border-[#222] w-full'></div>
                <p className='xl:text-9xl lg:text7xl text-[#222] font-MontrealBold'>{progress}%</p>
            </div>
        </div>
    )
}
