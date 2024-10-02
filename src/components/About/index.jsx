import React, { useState } from 'react';
import { FaRegUser, FaWhatsappSquare, FaDownload } from "react-icons/fa";
import { GiHeartTower } from "react-icons/gi";
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

const About = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { ref, inView } = useInView({
        threshold: 0.1, // Trigger when 10% of the component is in view
        triggerOnce: true // Only trigger the animation once
    });

    // Define the spring animation for the text and image based on visibility
    const textProps = useSpring({
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        config: { tension: 220, friction: 20 },
    });

    const imageProps = useSpring({
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateX(0) scale(1)' : 'translateX(100px) scale(0.8)',
        config: { tension: 220, friction: 20 },
    });

    // Define animations for scrolling out of view
    const outTextProps = useSpring({
        opacity: !inView ? 0 : 1,
        transform: !inView ? 'translateY(20px)' : 'translateY(0)',
        config: { tension: 220, friction: 20 },
    });

    const outImageProps = useSpring({
        opacity: !inView ? 0 : 1,
        transform: !inView ? 'translateX(100px) scale(0.8)' : 'translateX(0) scale(1)',
        config: { tension: 220, friction: 20 },
    });

    // Update visibility state when in view
    React.useEffect(() => {
        if (inView) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }, [inView]);

    return (
        <section className="body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <animated.div 
                    style={isVisible ? textProps : outTextProps} 
                    className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center" 
                    ref={ref}>
                    <h2 className="md:text-6xl Oswald mb-4 font-medium text-white">
                        About Us
                    </h2>
                    <p className="text-white">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit, maecenas tincidunt ultrices duis cras dictum netus, urna interdum luctus tellus venenatis vulputate. Cum accumsan natoque ut proin sociosqu aliquam placerat, rutrum sapien augue posuere conubia libero dis, fames id taciti leo curae montes. Mollis platea interdum fusce iaculis rhoncus nullam suscipit, dui quis praesent cubilia dignissim facilisi, pharetra litora montes accumsan pretium nisi.
                    </p>
                    <div className='grid grid-cols-2 mt-7 w-full gap-7'>
                        <div className='flex justify-start items-center gap-3'>
                            <FaRegUser size={20} color='#FFF' />
                            <p className='text-white'>Muhammad Farooq</p>
                        </div>
                        <div className='flex justify-start items-center gap-3'>
                            <FaWhatsappSquare size={20} color='#FFF' />
                            <p className='text-white'>+923090450173</p>
                        </div>
                        <div className='flex justify-start items-center gap-3'>
                            <GiHeartTower size={20} color='#FFF' />
                            <p className='text-white'>Freelance: Available</p>
                        </div>
                    </div>
                    <button className='animated-button rounded-md border-2 border-white flex items-center gap-2 mt-6 p-3'>
                        <span className='Oswald'>Download CV</span>
                        <FaDownload color='' />
                    </button>
                </animated.div>
                <animated.div 
                    style={isVisible ? imageProps : outImageProps} 
                    className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded sm:w-[500px] sm:h-[500px]"
                        alt="hero"
                        src="https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                    />
                </animated.div>
            </div>
        </section>
    );
}

export default About;
