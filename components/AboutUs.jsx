import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="bg-blue-50 min-h-screen flex justify-center items-center p-6 md:p-10">
      <div className="bg-white shadow-2xl rounded-3xl overflow-hidden max-w-7xl w-full flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="md:w-1/2">
          <Image
            src="/waterProjectImg.jpg" // Replace with actual image path
            alt="Shab e Abotalib Foundation"
            width={800}
            height={800}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 p-6 md:p-14 flex flex-col justify-center">
          <h1 className="text-red-600 text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-snug md:leading-tight">
            Who are we ?<br />
            <span className="text-black">
              Shab e Abi Talib Foundation Pakistan
            </span>
          </h1>
          <p className="text-base md:text-lg text-gray-800">
            <strong>
              Inspired by the struggles of Prophet Muhammad (ﷺ) and his
              companions during the boycott in the Valley of Abu Talib
            </strong>
            , SAT provides financial aid, social welfare, and sustainable
            development support. Actively engaged in global crises, including the{" "}
            <strong><em>Gaza war</em></strong>, SAT remains dedicated to
            uplifting communities with compassion and Islamic values.
          </p>
          <blockquote className="text-gray-900 italic border-l-4 border-yellow-500 pl-4 mt-4 md:mt-6 text-base md:text-lg">
            “The best of people are those who bring the most benefit to others.”
            <br />
            <span className="text-gray-600">- Prophet Muhammad (PBUH)</span>
          </blockquote>
        </div>
      </div>
    </div>
  );
}
