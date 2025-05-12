// components/HeroBanner.jsx
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

const HeroBanner = () => {
    return (
        <div className='relative z-0 w-full'>
            <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showThumbs={false}
                showArrows={false}
                interval={3000}
                transitionTime={700}
                stopOnHover={false}
            >
                {Array.from({ length: 8 }, (_, i) => (
                    <div key={i} className="relative w-full h-[60vh] lg:h-screen">
                        <Image
                            src={`/hero/h${i + 1}.jpg`}
                            alt={`Slide ${i + 1}`}
                            fill
                            priority
                            className="object-cover"
                        />
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default HeroBanner;
