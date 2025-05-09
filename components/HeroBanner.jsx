import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image'; // Import the Image component from Next.js

const HeroBanner = () => {
    return (
        <div className='relative text-[20px] z-0 max-w-[screen] mx-auto'>
            <Carousel autoPlay={true} infiniteLoop={true} showStatus={false} showThumbs={false}>
                <div>
                    <Image 
                        src="/hero/h1.jpg" 
                        alt="Slide 1" 
                        width={1360} 
                        height={500} 
                        style={{ width: "100%", height: "auto" }} // Ensures responsive behavior
                    /> 
                </div>
                <div>
                    <Image 
                        src="/hero/h2.jpg" 
                        alt="Slide 2" 
                        width={1360} 
                        height={500} 
                        style={{ width: "100%", height: "auto" }} // Ensures responsive behavior
                    /> 
                </div>
                <div>
                    <Image 
                        src="/hero/h3.jpg" 
                        alt="Slide 3" 
                        width={1360} 
                        height={500} 
                        style={{ width: "100%", height: "auto" }} // Ensures responsive behavior
                    /> 
                </div>
                <div>
                    <Image 
                        src="/hero/h4.jpg" 
                        alt="Slide 4" 
                        width={1360} 
                        height={500} 
                        style={{ width: "100%", height: "auto" }} // Ensures responsive behavior
                    /> 
                </div>
                <div>
                    <Image 
                        src="/hero/h5.jpg" 
                        alt="Slide 5" 
                        width={1360} 
                        height={500} 
                        style={{ width: "100%", height: "auto" }} // Ensures responsive behavior
                    /> 
                </div>
                <div>
                    <Image 
                        src="/hero/h6.jpg" 
                        alt="Slide 6" 
                        width={1360} 
                        height={500} 
                        style={{ width: "100%", height: "auto" }} // Ensures responsive behavior
                    /> 
                </div>
                <div>
                    <Image 
                        src="/hero/h7.jpg" 
                        alt="Slide 7" 
                        width={1360} 
                        height={500} 
                        style={{ width: "100%", height: "auto" }} // Ensures responsive behavior
                    /> 
                </div>
                <div>
                    <Image 
                        src="/hero/h8.jpg" 
                        alt="Slide 8" 
                        width={1360} 
                        height={500} 
                        style={{ width: "100%", height: "auto" }} // Ensures responsive behavior
                    /> 
                </div>
                
                 
            </Carousel>
        </div>
    );
}

export default HeroBanner;
