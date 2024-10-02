import React, { useRef } from 'react'
import { FaFacebookSquare, FaTwitter, FaInstagramSquare, FaGithub } from "react-icons/fa";

const Hero = () => {
    const textRef = useRef(null);
    const name = 'Muhammad Farooq';

    return (
        <div className="w-full relative h-[90vh] flex justify-center items-center">
            <h2 className="text-white Oswald sm:text-8xl" ref={textRef}>
                {name.split('').map((letter, index) => (
                    <span key={index} className="letter inline-block">
                        {letter === ' ' ? '\u00A0' : letter} {/* Preserve spaces */}
                    </span>
                ))}
            </h2>

            <div className='absolute socialTabs w-[100px] py-10 flex flex-col gap-6 justify-center items-center left-0'>
                <FaFacebookSquare color='#FFF' className="cursor-pointer" size={30} />
                <FaTwitter color='#FFF' className="cursor-pointer" size={30} />
                <FaInstagramSquare color='#FFF' className="cursor-pointer" size={30} />
                <FaGithub color='#FFF' className="cursor-pointer" size={30} />
            </div>
        </div>
    )
}

export default Hero;
