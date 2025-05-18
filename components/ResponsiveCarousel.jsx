import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
          <div key={i}>
            <img
              src={img}
              alt={`Slide ${i + 1}`}
              className="h-48 w-full rounded-xl object-cover shadow-lg sm:h-72 lg:h-96"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ResponsiveCarousel;
