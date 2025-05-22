import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function AboutUs() {
  return (
    <section className="bg-blue-50 py-12 px-6 md:px-20">
      <main className="container mx-auto px-4 py-8 space-y-10">
        <div className="bg-white p-4 md:p-6 rounded-3xl shadow-md">
          <h2 className="font-extrabold text-gray-700 text-center text-xl sm:text-2xl lg:text-3xl mb-4">
            About Us
          </h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div>
              {/* Text Content (unchanged) */}
              <p className="text-gray-700 mb-4">
                The <b>Story of Shab-e-Abi Talib</b> (SAT) Foundation
              </p>
              <p className="text-gray-700 mb-4">
                <b>Shab-e-Abi Talib (SAT) Foundation</b> Pakistan is a{" "}
                <b className="text-red-600">registered NGO</b>, founded in{" "}
                <b>April 2021</b> by <b>Muhammad Osama Riaz</b>, an{" "}
                <b>MBBS student</b>, during the <b>COVID-19 pandemic</b>. Driven
                by a sincere dua for purposeful work, Osama gathered a small
                group to serve humanity.
              </p>
              <p className="text-gray-700 mb-4">
                Named after the historic{" "}
                <b className="text-red-600">Valley of Shab-e-Abi Talib</b>, the
                foundation symbolizes resilience, sacrifice, and hope. What
                began as a small effort has grown into a registered <b>NGO</b>{" "}
                operating in <b>Thar</b>, <b>Balochistan</b>,{" "}
                <b>Gilgit Baltistan</b>, and <b>South Punjab</b>. SAT’s projects
                include <b className="text-red-600">solar water pumps</b>, the{" "}
                <b>Umeed School</b>, <b>medical camps</b>, and a{" "}
                <b>vocational center for women</b> in Mianwali. Initiatives like
                “<b>Haq Haqdaar Tak</b>” for flood relief and “
                <b>Kitaabon Ki Duniya</b>” promote literacy and uplift lives.
              </p>
              <p className="text-gray-700 mb-4">
                A key initiative is the humanitarian response in{" "}
                <b className="text-red-600">Gaza</b> after{" "}
                <b>October 7, 2023</b>, under “<b>Gaza Needs You</b>.” This
                project has delivered <b>food</b>, <b>medical aid</b>,{" "}
                <b>water tanks</b>, and an <b>ambulance</b> for displaced
                families, enhancing SAT’s global relief role.
              </p>
            </div>

            {/* ✅ Carousel Section Replaces Image Grid */}
            <div className="w-full h-[400px]">
              <Carousel
                autoPlay
                infiniteLoop
                showThumbs={false}
                showStatus={false}
                interval={3000}
                className="rounded-xl shadow-md"
              >
                {[
                  "/AboutImages/img2.jpg",
                  "/AboutImages/img1.jpg",
                  "/AboutImages/img3.jpg",
                  "/AboutImages/img5.jpg",
                  "/AboutImages/img6.jpg",
                ].map((src, i) => (
                  <div key={i} className="w-full h-[400px] relative">
                    <Image
                      src={src}
                      alt={`Image ${i + 1}`}
                      fill
                      className="rounded-xl object-cover"
                    />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 md:p-6 rounded-3xl shadow-md">
          <h2 className="font-extrabold text-center text-xl sm:text-2xl lg:text-3xl mb-4">
            Our Mission and Vision
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
            <div className="flex justify-center md:col-span-1">
              <Image
                src="/Usama.jpg"
                alt="About Us Image"
                width={450}
                height={350}
                className="rounded-2xl object-cover w-full h-auto max-w-[450px] max-h-[350px]"
              />
            </div>
            <div className="md:col-span-1 mt-8 md:pr-8">
              <h3 className="font-extrabold text-lg sm:text-xl mb-3 text-[#22C55E]">
                Our Mission
              </h3>
              <p className="text-sm sm:text-base mb-3">
                Our name is not just symbolic — it is our foundation. We reflect
                the resilience, unity, and faith of those who endured one of the
                toughest trials in Islamic history. We don’t wait for comfort to
                serve; we serve in discomfort. We don’t speak from behind desks;
                we walk the streets with the people.
              </p>
              <h3 className="font-extrabold text-lg sm:text-xl mb-3 text-[#22C55E]">
                Our Vision
              </h3>
              <p className="text-sm sm:text-base mb-3">
                To revive the spirit of collective responsibility in the Ummah
                by serving humanity beyond borders.
              </p>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
