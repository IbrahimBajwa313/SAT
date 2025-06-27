import React from "react";

const TransparencySection = () => {
  return (
    <section className="flex w-full max-w-full flex-col md:flex-row-reverse justify-between items-center px-6 py-12 mx-auto shadow-lg rounded-lg bg-white">
      {/* Right Side */}
      <div className="md:w-1/2 w-full mb-8 md:mb-0">
        <h2 className="text-3xl font-extrabold text-black mb-4">
          WHERE YOUR DONATION GOES?
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Every 99 PKR out of 100 directly helps those in need, while only 1% is
          used for technical work. As it&apos;s a{" "}
          <strong>100% Volunteer-Run Organization</strong>{" "}
          <span className="font-semibold">Alhamdulilah</span>,<br />
          we don&apos;t pay salaries — we serve.
        </p>
      </div>

      {/* Left Side */}
      <div className="md:w-1/2 w-full flex flex-col items-center">
        <figure
          className="w-64 h-64 rounded-full mb-6"
          style={{
            background: "conic-gradient(#16a34a 0% 99%, gold 99% 100%)",
          }}
        ></figure>
        <div className="space-y-2">
          <div className="flex items-center">
            <span className="w-4 h-4 rounded-sm bg-green-600 mr-2"></span>
            <span className="text-gray-700">99% – Cause</span>
          </div>
          <div className="flex items-center">
            <span className="w-4 h-4 rounded-sm bg-yellow-500 mr-2"></span>
            <span className="text-gray-700">1% – Technical Work</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransparencySection;
