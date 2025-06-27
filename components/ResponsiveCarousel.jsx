import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

const ResponsiveCarousel = ({ images }) => {
  return (
    <div>
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={3000}
        className="rounded-xl shadow-md"
      >
        {images.map((img, i) => (
          <div
            key={i}
            className="relative h-48 sm:h-72 lg:h-96 w-full rounded-xl overflow-hidden"
          >
            <Image
              src={img}
              alt={`Slide ${i + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ResponsiveCarousel;
