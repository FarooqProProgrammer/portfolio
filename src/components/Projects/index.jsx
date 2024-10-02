import React from 'react'
import { PortfolioData } from '../../utils'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"


const Projects = () => {
    return (
        <section className=" body-font py-24">
            <div className="container px-5 py-24 mx-auto">
                <div className='sm:mb-24'>
                    <h2 className='text-white Oswald sm:text-6xl font-bold text-center'>OUR PROJECTS</h2>
                </div>
                <div className="flex flex-wrap -m-4">
                    <ResponsiveMasonry
                        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
                        className='w-full py-2'
                    >
                        <Masonry>
                            {
                                PortfolioData?.map((item) => {
                                    return (
                                        <div className="w-full p-4 " id={item?.id} >
                                            <div className="flex relative h-full w-full rounded-lg cursor-pointer">
                                                <img
                                                    alt="gallery"
                                                    className=" inset-0 w-full h-full object-cover object-center"
                                                    src={item?.img}
                                                />
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Masonry>
                    </ResponsiveMasonry>

                </div>
            </div>
        </section>
    )
}

export default Projects