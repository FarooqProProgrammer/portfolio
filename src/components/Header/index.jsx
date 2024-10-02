import React, { useState } from 'react';
import { CiMenuFries } from 'react-icons/ci';
import { FaLongArrowAltRight } from "react-icons/fa";
import { MdCancelPresentation } from 'react-icons/md';
import clsx from 'clsx';

const Header = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    return (
        <>
            {/* Header */}
            <div className="container mx-auto py-4">
                <div className="w-full flex justify-between items-center">
                    <h1 className="Oswald text-white sm:text-4xl">Portfolio</h1>
                    <CiMenuFries
                        onClick={() => setIsDrawerOpen(true)}
                        color="#FFF"
                        size={30}
                        className="cursor-pointer"
                    />
                </div>
            </div>

            {/* Drawer */}
            <div
                className={clsx(
                    'fixed top-0 right-0 h-screen bg-white md:w-[400px] p-[30px] transition-transform duration-500',
                    {
                        'translate-x-0': isDrawerOpen, // When open, keep it visible
                        'translate-x-full': !isDrawerOpen, // When closed, move out of view
                    }
                )}
                style={{ transform: `translateX(${isDrawerOpen ? '0' : '100%'})` }} // Smooth transition
            >
                {/* Drawer Header */}
                <div className="flex justify-between items-baseline">
                    <h2 className="Oswald text-black sm:text-4xl">Portfolio</h2>
                    <MdCancelPresentation
                        onClick={() => setIsDrawerOpen(false)}
                        color="#000"
                        size={30}
                        className="cursor-pointer"
                    />
                </div>

                <div className='border-t-2  border-black mt-16 py-4 flex justify-between items-center'>
                    <h2 className='Oswald'>WEB DEVELOPMENT</h2>
                    <FaLongArrowAltRight />
                </div>
                <div className='border-t-2  border-black mt-2 py-4 flex justify-between items-center'>
                    <h2 className='Oswald'>BACKEND DEVELOPER</h2>
                    <FaLongArrowAltRight />
                </div>
                <div className='border-t-2  border-black mt-2 py-4 flex justify-between items-center'>
                    <h2 className='Oswald'>ANIMATION DEVELOPER</h2>
                    <FaLongArrowAltRight />
                </div>
                <div className='border-t-2   border-black mt-2 py-4 flex justify-between items-center'>
                    <h2 className='Oswald'>SEO EXPERTS</h2>
                    <FaLongArrowAltRight />
                </div>
                <div className='border-t-2 border-b-2  border-black mt-2 py-4 flex justify-between items-center'>
                    <h2 className='Oswald'>SCRAPING PROJECTS</h2>
                    <FaLongArrowAltRight />
                </div>

            </div>
        </>
    );
};

export default Header;
