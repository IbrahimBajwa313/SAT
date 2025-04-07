import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="bg-blue-50 min-h-screen flex justify-center items-center p-10">
      <div className="bg-white shadow-2xl rounded-2xl overflow-hidden max-w-6xl w-full flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="md:w-1/2">
          <Image
            src="/waterProjectImg.jpg" // Replace with actual image path
            alt="Shab e Abotalib Foundation"
            width={700}
            height={700}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 p-12 flex flex-col justify-center">
          <h1 className="text-red-600 text-4xl font-bold mb-6 leading-tight">
            Who are we <br />
            <span className="text-black">Shab e Abotalib Foundation.</span>
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Shab e Abotalib Foundation is committed to serving humanity through 
            education, healthcare, and social welfare. Inspired by the resilience 
            and sacrifice of the past, our mission is to uplift those in need and 
            provide hope for a better future.
          </p>
          <blockquote className="text-gray-900 italic border-l-4 border-yellow-500 pl-4 mt-4">
            “The best of people are those who bring the most benefit to others.” 
            <br /> <span className="text-gray-600">- Prophet Muhammad (PBUH)</span>
          </blockquote>
        </div>
      </div>
    </div>
  );
}
