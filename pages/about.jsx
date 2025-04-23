import Image from 'next/image';

export default function AboutUs() {
  return (
    <section className="bg-white py-12 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
      <div>
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-gray-700 mb-4">
            The Story of Shab-e-Abi Talib (SAT) Foundation
          </p>
          <p className="text-gray-700 mb-4">
            Shab-e-Abi Talib (SAT) Foundation Pakistan was founded in April 2021 by Muhammad Osama Riaz, an MBBS student, during the peak of the COVID-19 pandemic. Inspired by a sincere dua to ask Allah for purposeful work and moved by the struggles around him, Osama gathered a small group to serve humanity without boundaries.
          </p>
          <p className="text-gray-700 mb-4">
            Named after the historic Valley of Shab-e-Abi Talib—where the Prophet Muhammad (PBUH) endured years of hardship—the foundation stands as a symbol of resilience, sacrifice, and hope. What began as a modest effort has now grown into a registered NGO working across Pakistan in regions like Thar, Balochistan, Gilgit Baltistan, and South Punjab.
          </p>
          <p className="text-gray-700 mb-4">
            SAT’s impactful projects include solar water pumps, the Umeed School for free education, medical camps, blood donation drives, and a vocational center for women in Mianwali. Initiatives like “Haq Haqdaar Tak” for flood relief and “Kitaabon Ki Duniya” to promote literacy further reflect its mission to uplift lives.
          </p>
          <p className="text-gray-700 mb-4">
            A defining feature of SAT is its active humanitarian response in Gaza after October 7, 2023, under its project “Gaza Needs You.” This ongoing initiative—run in collaboration with various Pakistani societies—has delivered food, medical aid, water tanks, and even an ambulance for displaced families, marking SAT’s growing role in global relief efforts.
          </p>
          <p className="text-gray-700">
            With a commitment to expanding its reach through permanent schools, dispensaries, and global outreach, SAT continues to prove that a sincere prayer, combined with action, can illuminate lives across the world.
          </p>
        </div>
        <div className="relative w-full h-[400px]">
          <Image src="/AboutImages/img2.jpg" alt="Image 2" width={180} height={80} className="absolute top-10 right-0 rounded-xl shadow-md" />
          <Image src="/AboutImages/img1.jpg" alt="Image 1" width={180} height={80} className="absolute top-10 left-0 rounded-xl shadow-md" />
          <Image src="/AboutImages/img3.jpg" alt="Image 3" width={250} height={140} className="absolute top-[140px] left-[25%] rounded-xl shadow-md" />
          <Image src="/AboutImages/img5.jpg" alt="Image 4" width={180} height={70} className="absolute bottom-0 left-0 rounded-xl shadow-md" />
          <Image src="/AboutImages/img6.jpg" alt="Image 5" width={220} height={70} className="absolute bottom-0 right-0 rounded-xl shadow-md" />
          {/* <Image src="/AboutImages/img6.jpg" alt="Image 6" width={100} height={70} className="absolute bottom-[80px] left-[40%] rounded-xl shadow-md" /> */}
        </div>
      </div>
    </section>
  );
}
