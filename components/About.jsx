import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-white to-gray-100 rounded-3xl shadow-2xl border border-gray-200 transition-all duration-300 hover:shadow-xl">
      <h1 className="text-3xl font-extrabold mb-6 text-gray-900 tracking-wide text-center">
        What does <span className="text-[#22C55E]">Dr. Osama Riaz</span> have to say about his NGO?
      </h1>
      
      <p className="mb-6 text-gray-700 text-lg leading-relaxed text-center">
        <span className="font-bold text-[#22C55E] text-xl">SHAB-E-ABI TALIB</span>, a remarkable NGO established by students, is dedicated to aiding impoverished communities in Pakistan. With a deep commitment to making a positive impact, its mission is to provide support and assistance to those in need.
      </p>

      <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#22C55E] mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">✨ Inspiration Behind the NGO</h2>
        <p className="text-gray-600 text-lg">
          The journey began with a vision to uplift the less privileged. Through their efforts, they strive to enhance the quality of life for those struggling to meet basic needs.
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#22C55E]">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">🚀 Projects and Initiatives</h2>
        <p className="text-gray-600 text-lg">
          Our projects range from medical outreach to educational camps, all aimed at fostering community development and empowerment.
        </p>
      </div>
    </div>
  );
};

export default About;


// import React from "react";
// import Link from "next/link";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
// import { Carousel } from "react-responsive-carousel";
// import Image from "next/image";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

// export default function About() {
//   return (
//     <section className="bg-gray-50 flex flex-col lg:flex-row rounded-3xl my-4 lg:my-20 p-6 lg:p-20 shadow-lg">
//       <aside className="flex flex-col text-black justify-between w-full lg:w-3/6 pr-0 lg:pr-28 mb-6 lg:mb-0">
//         <h2 className="font-extrabold text-4xl lg:text-4xl mb-4">
//           Save Gaza Campaign
//         </h2>
//         <p className="text-lg pt-4">/about
//           <span className="font-bold text-[#22C55E]">Save Gaza Campaign </span>
//           is a movement of hope and resilience, uniting voices for justice and
//           compassion. Since our inception in November 2023, we strive to uplift
//           the oppressed and foster solidarity among communities, ensuring that
//           every individual feels valued and heard.
//         </p>
//         <br />
//         {/* Using Link for internal navigation */}
//         <Link href="/about">
//           <button className="w-full p-3 bg-[#22C55E] text-white rounded-full font-bold text-lg lg:text-2xl transition duration-300 ease-in-out hover:bg-[#D0312D] hover:text-white">
//             Know More About Us{" "}
//             <FontAwesomeIcon className="pl-4" icon={faArrowUpRightFromSquare} />
//           </button>
//         </Link>
//       </aside>

//       {/* React Responsive Carousel */}
//       <div className="flex justify-center w-full lg:w-3/6 max-w-[620px] mb-6 lg:mb-0">
//         <Carousel
//           showThumbs={false}
//           showStatus={false}
//           infiniteLoop={true}
//           autoPlay={true}
//           interval={4500}
//           className="rounded-lg shadow-lg"
//         >
//           <div>
//             <Image
//               src="/about/protest4.jpg"
//               alt="Slide 4"
//               width={620}
//               height={384}
//               className="rounded-lg object-cover h-64 lg:h-96 w-full"
//             />
//           </div>
//           <div>
//             <Image
//               src="/about/protest1.jpg"
//               alt="Slide 1"
//               width={620}
//               height={384}
//               className="rounded-lg object-cover h-64 lg:h-96 w-full"
//             />
//           </div>
//           <div>
//             <Image
//               src="/about/protest2.png"
//               alt="Slide 2"
//               width={620}
//               height={384}
//               className="rounded-lg object-cover h-64 lg:h-96 w-full"
//             />
//           </div>
//           <div>
//             <Image
//               src="/about/protest3.jpg"
//               alt="Slide 3"
//               width={620}
//               height={384}
//               className="rounded-lg object-cover h-64 lg:h-96 w-full"
//             />
//           </div>
//         </Carousel>
//       </div>
//     </section>
//   );
// }
