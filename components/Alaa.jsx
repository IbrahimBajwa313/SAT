import React from "react";
import Wrapper from "./Wrapper";
import Image from "next/image";
import Link from "next/link";
import AlaaStoryComponents from "./AlaaStoryComponents";

const Alaa = () => {
  const phoneNumber = "+923325000418";
  const message =
    "AsslamoAlikum! I am contacting you through Shab e Abitalib  Site. I want to collaborate in Gaza Relief Activities. Please send the details and the account number.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  return (
    <section>
      <Wrapper className="flex flex-col gap-8 lg:gap-12">
        <div className="text-center">
          <h1 className="font-extrabold text-2xl lg:text-5xl text-gray-800">
            Stories Etched in Dust and Glory:
            <br /> A Tribute To Our Martyred Volunteers{" "}
          </h1>
          <p className="text-gray-700 mt-4 text-base lg:text-lg max-w-3xl mx-auto">
            Behind every effort at Shab e Abi Talib Foundation is a story of
            sacrifice. Today, we honour Alaa, a mother from Gaza and widow of
            the Martyr whose final sajdah (prostration) moved hearts worldwide.
            Her journey reflects the courage that lives on long after the
            battlefield falls silent.
          </p>
        </div>

        {/* Alaa first block */}
        <div className="flex flex-col md:flex-row items-center bg-white shadow-2xl rounded-3xl overflow-hidden">
          {/* Image */}
          <div className="w-full md:w-1/3">
            <Image
              src="/martyrs/Alaa1.jpg"
              alt="Alaa - The Widow Who Followed Her Martyr in Faith and Fire"
              layout="responsive"
              width={400}
              height={400}
              className="object-cover h-auto w-full"
            />
          </div>

          {/* Description */}
          <div className="p-6 md:p-8 flex flex-col justify-center md:w-2/3 text-center md:text-left">
            <h3 className="font-bold text-xl lg:text-2xl mb-4 text-green-600">
              Alaa — The Widow Who Followed Her Martyr in Faith and Fire
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4 text-sm lg:text-base">
              Alaa was one of earliest Volunteers of Shab e Abi Talib from Gaza.
              She lost her husband, three children, home, and all means of
              survival during the war. Yet she chose service over sorrow:
              feeding hungry children, teaching Qur'an in a tent, and holding
              firm to her faith. Her last message was: “Pray for us. Dr
              Muhammad” Shortly after, Alaa was martyred—joining her family in
              Jannah, leaving behind a legacy of strength greater than any army.
            </p>
          </div>
        </div>

        {/* Alaa's quote */}
        <div className="flex flex-col items-center bg-white p-6 md:p-8 gap-4 shadow-2xl rounded-3xl overflow-hidden">
          <blockquote className="text-gray-600 italic font-bold text-lg lg:text-xl">
            I didn't weep that my children were martyred— I wept because they
            died hungry.
          </blockquote>
          <p className="text-sm lg:text-base text-gray-700">
            -Alaa, a widow & mother of martyrs, after her own children's
            martyrdom in Gaza
          </p>
        </div>

        {/* Story components */}
        <AlaaStoryComponents />

        {/* Conclusion */}
        <div className="text-center">
          <h2 className="font-extrabold text-2l mt-8 md:mt-16 lg:text-4xl text-gray-800">
            She Is{" "}
            <u className="underline decoration-4">
              <span className="text-red-700">One of Many</span>
            </u>
          </h2>
          <p className="text-gray-700 mt-4 text-base text-left lg:text-lg max-w-3xl mx-auto">
            Alaa's story is not alone. It is one of many. Dozens of our
            volunteers and their families in Gaza continue to live, serve, and
            often die under fire—silent heroes whose sacrifices deserve to be
            remembered and honoured. May Allah accept their martyrdom and grant
            them the highest ranks in Jannatul-Firdaws.{" "}
            <span className="italic font-bold">Ameen.</span>
          </p>
          <p className="text-gray-700 text-base text-left lg:text-lg max-w-3xl mx-auto font-bold">
            Help us carry forward their legacy. Support their families. Let no
            child go hungry. Let no martyr's story go untold. Join Us Now.
          </p>
          <div className="mt-6 flex justify-center">
            <Link href={whatsappLink} legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                <button className="text-lg md:text-xl font-bold  px-6 md:px-8 py-3 md:py-4 rounded-full hover:shadow-xl bg-[#D0312D] text-white transition-all ease-in-out duration-200">
                  Donate Now
                </button>
              </a>
            </Link>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Alaa;
