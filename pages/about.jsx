import Image from 'next/image';

export default function AboutUs() {
  return (
    <section className="bg-blue-50 py-12 px-6 md:px-20">
      <main className="container mx-auto px-4 py-8 space-y-10">
        <div className="bg-white p-4 md:p-6 rounded-3xl shadow-md">
          <h2 className="font-extrabold text-center text-xl sm:text-2xl lg:text-3xl mb-4">About Us</h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-gray-700 mb-4">
                The <b>Story of Shab-e-Abi Talib</b> (SAT) Foundation
              </p>
              <p className="text-gray-700 mb-4">
                <b>Shab-e-Abi Talib (SAT) Foundation</b> Pakistan is a <b className="text-red-600">registered NGO</b>, founded in <b>April 2021</b> by <b>Muhammad Osama Riaz</b>, an <b>MBBS student</b>, during the <b>COVID-19 pandemic</b>. Driven by a sincere dua for purposeful work, Osama gathered a small group to serve humanity.
              </p>
              <p className="text-gray-700 mb-4">
                Named after the historic <b className="text-red-600">Valley of Shab-e-Abi Talib</b>, the foundation symbolizes resilience, sacrifice, and hope. What began as a small effort has grown into a registered <b>NGO</b> operating in <b>Thar</b>, <b>Balochistan</b>, <b>Gilgit Baltistan</b>, and <b>South Punjab</b>.
                SAT’s projects include <b className="text-red-600">solar water pumps</b>, the <b>Umeed School</b>, <b>medical camps</b>, and a <b>vocational center for women</b> in Mianwali. Initiatives like “<b>Haq Haqdaar Tak</b>” for flood relief and “<b>Kitaabon Ki Duniya</b>” promote literacy and uplift lives.
              </p>
              <p className="text-gray-700 mb-4">
                A key initiative is the humanitarian response in <b className="text-red-600">Gaza</b> after <b>October 7, 2023</b>, under “<b>Gaza Needs You</b>.” This project has delivered <b>food</b>, <b>medical aid</b>, <b>water tanks</b>, and an <b>ambulance</b> for displaced families, enhancing SAT’s global relief role.
              </p>
            </div>
            <div className="relative w-full h-[400px] md:h-[400px] grid grid-cols-2 gap-2 md:grid-cols-none">
              <Image src="/AboutImages/img2.jpg" alt="Image 2" width={180} height={120} className="w-full h-auto rounded-xl shadow-md md:absolute md:top-10 md:right-0 md:w-[220px] md:h-[140px] object-cover" />
              <Image src="/AboutImages/img1.jpg" alt="Image 1" width={180} height={120} className="w-full h-auto rounded-xl shadow-md md:absolute md:top-10 md:left-0 md:w-[220px] md:h-[140px] object-cover" />
              <Image src="/AboutImages/img3.jpg" alt="Image 3" width={250} height={140} className="w-full h-auto rounded-xl shadow-md md:absolute md:top-[140px] md:left-[25%] md:w-[250px] md:h-[140px] object-cover" />
              <Image src="/AboutImages/img5.jpg" alt="Image 4" width={180} height={100} className="w-full h-auto rounded-xl shadow-md md:absolute md:bottom-0 md:left-0 md:w-[220px] md:h-[140px] object-cover" />
              <Image src="/AboutImages/img6.jpg" alt="Image 5" width={180} height={100} className="w-full h-auto rounded-xl shadow-md md:absolute md:bottom-0 md:right-0 md:w-[220px] md:h-[140px] object-cover" />
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
                src="/about/dchowk2.jpg"
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
                Our mission is to stand in solidarity with the people of Gaza
                by raising global awareness about the humanitarian crisis they
                face. Through protests, educational initiatives, and
                partnerships with influential leaders, we strive to shed light
                on the injustices in Palestine and inspire meaningful actions
                that promote peace, justice, and relief.
              </p>
              <h3 className="font-extrabold text-lg sm:text-xl mb-3 text-[#22C55E]">
                Our Vision
              </h3>
              <p className="text-sm sm:text-base mb-3">
                We envision a world where global solidarity and collective
                efforts lead to the restoration of justice and dignity for the
                people of Gaza. By mobilizing communities, fostering
                awareness, and engaging in impactful activities, we aim to
                create a future where every individual stands united for human
                rights and lasting peace.
              </p>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}