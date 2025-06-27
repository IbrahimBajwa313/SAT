import React from "react";
import Image from "next/image";
const AlaaStoryComponents = () => {
  const components = [
    {
      media: "/martyrs/1.jpg",
      text: "Months after the world saw a Palestinian Man martyred in sajdah, a message reached us. His widow, Alaa, living in extreme poverty in Khan Yunis, had no food, no home, and three children to feed. Our local volunteers verified her identity and story—she was indeed the wife of the hero the world had mourned.",
    },
    {
      media: "/martyrs/2.jpg",
      text: `One day, while Alaa, her daughter, and her mother-in-law went to the market, an airstrike hit their shelter — a UN school where they were taking refuge. Her two little sons, left behind waiting for food, were martyred in that moment. Her voice cracked with grief as she shared this pic with us saying: “I didn't weep that my children were martyred — I wept because they died hungry.”`,
    },
    {
      media: "/martyrs/3.mp4",
      text: "Our other volunteers, Yasmeen and Ahmed, rushed to support Alaa. A tent was set up, and with donations from our supporters, she was helped to start a small market stall. Yet, Alaa's heart wouldn't let a hungry child go empty-handed—often giving food away for free until the supplies were gone. Even She used to make pizzas for the displaced kids there.",
    },
    {
      media: "/martyrs/4.jpg",
      text: "Despite her losses, Alaa remained a beacon of strength. As she used to be  an English and Qur'an teacher, she began teaching again—inside the tent, under the open sky. With your support, Qur'an lessons resumed for displaced children, filling hearts with light amidst the shadows of war.",
    },
    {
      media: "/martyrs/5.mp4",
      text: "Forced from Khan Yunis to Deir al-Balah and back again, Alaa endured relentless displacement. Her young daughter fell critically ill, and medicine was impossible to find.And the lil angle became martyred.Despite all these intense trials, Alaa kept going, serving and teaching wherever she could set up shelter.",
    },
    {
      media: "/martyrs/1.jpg",
      text: `As the bombardment on Khan Yunis intensified, Alaa sent her last message: “I will pray for all of You, Dr Muhammad.You people helped us when none other did" Since then, there has been no contact.Later on we got to know that she embraced martyrdom too. Her tent, her voice, and her presence have gone silent—but her story echoes on.
`,
    },
  ];
  return (
    <div>
      <div className="flex flex-col gap-16 flex-1">
        {/* First */}
        <div className="flex flex-col md:flex-row-reverse items-center bg-white shadow-2xl rounded-3xl overflow-hidden">
          {/* Image */}
          <div className="w-full md:w-1/3">
            <Image
              src="/martyrs/1.jpg"
              alt="Alaa 1"
              layout="responsive"
              width={400}
              height={400}
              className="object-fit max-h-[400px] w-full"
            />
          </div>

          {/* Description */}
          <div className="p-6 md:p-8 md:w-2/3 text-center md:text-left">
            <p className="text-gray-700 leading-relaxed mb-4 text-sm lg:text-base">
              Months after the world saw a Palestinian Man martyred in sajdah, a
              message reached us. His widow, Alaa, living in extreme poverty in
              Khan Yunis, had no food, no home, and three children to feed. Our
              local volunteers verified her identity and story—she was indeed
              the wife of the hero the world had mourned.
            </p>
          </div>
        </div>

        {/* Second */}
        <div className="flex flex-col md:flex-row items-center bg-white shadow-2xl rounded-3xl overflow-hidden">
          {/* Image */}
          <div className="w-full md:w-1/3">
            <Image
              src="/martyrs/2.jpg"
              alt="Alaa 2"
              layout="responsive"
              width={400}
              height={400}
              className="object-fit max-h-[400px] w-full"
            />
          </div>

          {/* Description */}
          <div className="p-6 md:p-8 md:w-2/3 text-center md:text-left">
            <p className="text-gray-700 leading-relaxed mb-4 text-sm lg:text-base">
              One day, while Alaa, her daughter, and her mother-in-law went to
              the market, an airstrike hit their shelter — a UN school where
              they were taking refuge. Her two little sons, left behind waiting
              for food, were martyred in that moment. Her voice cracked with
              grief as she shared this pic with us saying: “I didn&apos;t weep that
              my children were martyred — I wept because they died hungry.”
            </p>
          </div>
        </div>

        {/* Third */}
        <div className="flex flex-col md:flex-row-reverse items-center bg-white shadow-2xl rounded-3xl overflow-hidden">
          {/* Video */}
          <div className="w-full md:w-1/3">
            <video
              src="/martyrs/3.mp4"
              controls
              className="object-cover max-h-[400px] w-full"
              width={400}
              height={400}
            />
          </div>

          {/* Description */}
          <div className="p-6 md:p-8 md:w-2/3 text-center md:text-left">
            <p className="text-gray-700 leading-relaxed mb-4 text-sm lg:text-base">
              Our other volunteers, Yasmeen and Ahmed, rushed to support Alaa. A
              tent was set up, and with donations from our supporters, she was
              helped to start a small market stall. Yet, Alaa&apos;s heart wouldn&apos;t
              let a hungry child go empty-handed—often giving food away for free
              until the supplies were gone. Even She used to make pizzas for the
              displaced kids there.
            </p>
          </div>
        </div>

        {/* Fourth */}
        <div className="flex flex-col md:flex-row items-center bg-white shadow-2xl rounded-3xl overflow-hidden">
          {/* Image */}
          <div className="w-full md:w-1/3">
            <Image
              src="/martyrs/4.jpg"
              alt="Alaa 4"
              layout="responsive"
              width={400}
              height={400}
              className="object-fit max-h-[400px] w-full"
            />
          </div>

          {/* Description */}
          <div className="p-6 md:p-8 md:w-2/3 text-center md:text-left">
            <p className="text-gray-700 leading-relaxed mb-4 text-sm lg:text-base">
              Despite her losses, Alaa remained a beacon of strength. As she
              used to be an English and Qur&apos;an teacher, she began teaching
              again—inside the tent, under the open sky. With your support,
              Qur&apos;an lessons resumed for displaced children, filling hearts with
              light amidst the shadows of war.
            </p>
          </div>
        </div>

        {/* Fifth */}
        <div className="flex flex-col md:flex-row-reverse items-center bg-white shadow-2xl rounded-3xl overflow-hidden">
          {/* Video */}
          <div className="w-full md:w-1/3">
            <video
              src="/martyrs/5.mp4"
              controls
              className="object-cover max-h-[400px] w-full"
              width={400}
              height={400}
            />
          </div>

          {/* Description */}
          <div className="p-6 md:p-8 md:w-2/3 text-center md:text-left">
            <p className="text-gray-700 leading-relaxed mb-4 text-sm lg:text-base">
              Forced from Khan Yunis to Deir al-Balah and back again, Alaa
              endured relentless displacement. Her young daughter fell
              critically ill, and medicine was impossible to find.And the lil
              angle became martyred.Despite all these intense trials, Alaa kept
              going, serving and teaching wherever she could set up shelter.
            </p>
          </div>
        </div>

        {/* Sixth */}
        <div className="flex flex-col md:flex-row items-center bg-white shadow-2xl rounded-3xl overflow-hidden">
          {/* Image */}
          <div className="w-full md:w-1/3">
            <Image
              src="/martyrs/Alaa1.jpg"
              alt="Alaa 6"
              layout="responsive"
              width={400}
              height={400}
              className="object-fit max-h-[400px] w-full"
            />
          </div>

          {/* Description */}
          <div className="p-6 md:p-8 md:w-2/3 text-center md:text-left">
            <p className="text-gray-700 leading-relaxed mb-4 text-sm lg:text-base">
              As the bombardment on Khan Yunis intensified, Alaa sent her last
              message: 	&quot;I will pray for all of you, Dr Muhammad. You people
              helped us when none other did&quot;. Since then, there has been no
              contact. Later on we got to know that she embraced martyrdom too.
              Her tent, her voice, and her presence have gone silent — but her
              story echoes on.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlaaStoryComponents;
